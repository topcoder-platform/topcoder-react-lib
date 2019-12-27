/**
 * @module "services.challenges"
 * @desc This module provides a service for convenient manipulation with
 *  Topcoder challenges via TC API.
 */

import _ from 'lodash';
import moment from 'moment';
import qs from 'qs';
import { decodeToken } from 'tc-accounts';
import logger from '../utils/logger';
import { setErrorIcon, ERROR_ICON_TYPES } from '../utils/errors';
import { COMPETITION_TRACKS, getApiResponsePayload } from '../utils/tc';
import { getApi } from './api';
import { getService as getMembersService } from './members';

export const ORDER_BY = {
  SUBMISSION_END_DATE: 'submissionEndDate',
};

/**
 * Normalizes a regular challenge details object received from the backend APIs.
 * @todo Why this one is exported? It should be only used internally!
 * @param {Object} challenge Challenge object received from the /challenges/{id}
 *  endpoint.
 * @param {Object} filtered Challenge object received from the
 *  /challenges?filter=id={id} endpoint.
 * @param {Object} user Challenge object received from the
 *  /members/{username}/challenges?filter=id={id} endpoint.
 * If action was fired for authenticated visitor, `user` will contain
 * details fetched specifically for the user (thus may include additional
 * data comparing to the standard API response for the challenge details,
 * stored in `filtered`).
 * @param {String} username Optional.
 * @return {Object} Normalized challenge object.
 */
export function normalizeChallengeDetails(challenge, filtered, user, username) {
  // Normalize exising data to make it consistent with the rest of the code
  const finalChallenge = {
    ...challenge,

    id: challenge.id,
    reliabilityBonus: _.get(filtered, 'reliabilityBonus', 0),
    status: (challenge.currentStatus || '').toUpperCase(),

    allPhases: [],
    currentPhases: [],
    challengeType: {},
    name: challenge.challengeName || challenge.challengeTitle || challenge.name || '',
    projectId: Number(challenge.projectId),
    forumId: Number(challenge.forumId),
    introduction: challenge.introduction || '',
    detailedRequirements: challenge.detailedRequirements === 'null' ? '' : challenge.detailedRequirements,
    finalSubmissionGuidelines: challenge.finalSubmissionGuidelines === 'null' ? '' : challenge.finalSubmissionGuidelines,
    screeningScorecardId: Number(challenge.screeningScorecardId),
    reviewScorecardId: Number(challenge.reviewScorecardId),
    numberOfCheckpointsPrizes: challenge.numberOfCheckpointsPrizes,
    topCheckPointPrize: challenge.topCheckPointPrize,
    submissionsViewable: challenge.submissionsViewable || 'false',
    reviewType: challenge.reviewType,
    allowStockArt: challenge.allowStockArt === 'true',
    fileTypes: challenge.filetypes || [],
    environment: challenge.environment,
    codeRepo: challenge.codeRepo,
    forumLink: challenge.forumLink,
    submissionLimit: Number(challenge.submissionLimit) || 0,
    drPoints: challenge.digitalRunPoints,
    directUrl: challenge.directUrl,
    tags: _.union(
      challenge.technologies || [],
      challenge.technology || [],
      challenge.platforms || [],
      challenge.tags || [],
    ),
    prizes: challenge.prize || challenge.prizes || [],
    events: _.map(challenge.event, e => ({
      eventName: e.eventShortDesc,
      eventId: e.id,
      description: e.eventDescription,
    })),
    terms: challenge.terms,
    submissions: challenge.submissions,
    track: _.toUpper(challenge.challengeCommunity),
    subTrack: challenge.subTrack,
    checkpoints: challenge.checkpoints,
    documents: challenge.documents || [],
    numRegistrants: challenge.numberOfRegistrants,
    numberOfCheckpointSubmissions: challenge.numberOfCheckpointSubmissions,
    registrants: challenge.registrants || [],
  };

  // Winners have different field names, needs to be normalized to match `filtered` and `challenge`
  finalChallenge.winners = _.map(
    challenge.winners,
    (winner, index) => ({
      ...winner,
      handle: winner.submitter,
      placement: winner.rank || index + 1, // Legacy MMs do not have a rank but are sorted by points
    }),
  );

  if (finalChallenge.subTrack === 'MARATHON_MATCH') {
    finalChallenge.track = 'DATA_SCIENCE';
  }

  // It's not clear if this will be the main event, will need to be investigated
  finalChallenge.mainEvent = finalChallenge.events[0] || {};

  /* It's unclear if these normalization steps are still required for `challenge` */
  // Fill missing data from filtered
  if (filtered) {
    const groups = {};
    if (filtered.groupIds) {
      filtered.groupIds.forEach((id) => {
        groups[id] = true;
      });
    }

    _.merge(finalChallenge, {
      componentId: filtered.componentId,
      contestId: filtered.contestId,

      submissionEndDate: filtered.submissionEndDate, // Dates are not correct in `challenge`
      submissionEndTimestamp: filtered.submissionEndDate, // Dates are not correct in `challenge`

      /* Taking phases from filtered, because dates are not correct in `challenge` */
      allPhases: filtered.allPhases || [],

      /* Taking phases from filtered, because dates are not correct in `challenge` */
      currentPhases: filtered.currentPhases || [],

      /* `challenge` has incorrect value for numberOfSubmissions for some reason */
      numSubmissions: filtered.numSubmissions,
      groups,
    });
  }

  // Fill missing data from user
  if (user) {
    _.defaults(finalChallenge, {
      userDetails: user.userDetails,
    });
  }

  const allPhases = finalChallenge.allPhases || finalChallenge.phases || [];

  // Fill some derived data
  const registrationOpen = _.some(
    allPhases,
    phase => phase.name === 'Registration' && phase.isActive,
  ) ? 'Yes' : 'No';
  _.defaults(finalChallenge, {
    communities: new Set([COMPETITION_TRACKS[finalChallenge.track]]),
    registrationOpen,
    users: username ? { [username]: true } : {},
  });

  // A hot fix to show submissions for on-going challenges
  if (!finalChallenge.submissions || !finalChallenge.submissions.length) {
    finalChallenge.submissions = finalChallenge.registrants
      .filter(r => r.submissionDate || '')
      .sort((a, b) => (a.submissionDate || '')
        .localeCompare(b.submissionDate || ''));
  }

  if (!finalChallenge.allPhases) finalChallenge.allPhases = [];
  if (!finalChallenge.track) finalChallenge.track = '';

  return finalChallenge;
}

/**
 * Normalizes a regular challenge object received from the backend.
 * NOTE: This function is copied from the existing code in the challenge listing
 * component. It is possible, that this normalization is not necessary after we
 * have moved to Topcoder API, but it is kept for now to minimize a risk of
 * breaking anything.
 * @todo Should be used only internally!
 * @param {Object} challenge Challenge object received from the backend.
 * @param {String} username Optional.
 */
export function normalizeChallenge(challenge, username) {
  const registrationOpen = (challenge.allPhases || challenge.phases || []).filter(d => (d.name === 'Registration' || !d.name))[0].isActive ? 'Yes' : 'No';
  const groups = {};
  if (challenge.groupIds) {
    challenge.groupIds.forEach((id) => {
      groups[id] = true;
    });
  }
  /* eslint-disable no-param-reassign */
  if (!challenge.prizes) challenge.prizes = challenge.prize || [];
  if (!challenge.totalPrize) {
    challenge.totalPrize = challenge.prizes.reduce((sum, x) => sum + x, 0);
  }
  if (!challenge.technologies) challenge.technologies = [];
  if (!challenge.platforms) challenge.platforms = [];

  if (challenge.subTrack === 'DEVELOP_MARATHON_MATCH') {
    challenge.track = 'DATA_SCIENCE';
  }
  /* eslint-enable no-param-reassign */

  _.defaults(challenge, {
    communities: new Set([COMPETITION_TRACKS[challenge.track]]),
    groups,
    registrationOpen,
    submissionEndTimestamp: challenge.submissionEndDate,
    users: username ? { [username]: true } : {},
    challengeType: {},
  });
}

/**
 * Helper method that checks for HTTP error response and throws Error in this case.
 * @param {Object} res HTTP response object
 * @return {Object} API JSON response object
 * @private
 */
async function checkError(res) {
  if (!res.ok) {
    if (res.status >= 500) {
      setErrorIcon(ERROR_ICON_TYPES.API, '/challenges', res.statusText);
    }
    throw new Error(res.statusText);
  }
  const jsonRes = (await res.json()).result;
  if (jsonRes.status !== 200) throw new Error(jsonRes.content);
  return jsonRes;
}

/**
 * Helper method that checks for HTTP error response v5 and throws Error in this case.
 * @param {Object} res HTTP response object
 * @return {Object} API JSON response object
 * @private
 */
async function checkErrorV5(res) {
  if (!res.ok) {
    if (res.status >= 500) {
      setErrorIcon(ERROR_ICON_TYPES.API, '/challenges', res.statusText);
    }
    throw new Error(res.statusText);
  }
  const jsonRes = (await res.json());
  if (jsonRes.message) {
    throw new Error(res.message);
  }
  return {
    result: jsonRes,
    headers: res.headers,
  };
}

/**
 * Challenge service.
 */
class ChallengesService {
  /**
   * Creates a new ChallengeService instance.
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   * @param {String} tokenV2 Optional. Auth token for Topcoder API v2.
   */
  constructor(tokenV3, tokenV2) {
    /**
     * Private function being re-used in all methods related to getting
     * challenges. It handles query-related arguments in the uniform way:
     * @param {String} endpoint API endpoint, where the request will be send.
     * @param {Object} filters Optional. A map of filters to pass as `filter`
     *  query parameter (this function takes care to stringify it properly).
     * @param {Object} params Optional. A map of any other parameters beside
     *  `filter`.
     */
    const getChallenges = async (
      endpoint,
      filters = {},
      params = {},
    ) => {
      const query = {
        ...filters,
        ...params,
      };
      const url = `${endpoint}?${qs.stringify(query)}`;
      const res = await this.private.apiV5.get(url).then(checkErrorV5);
      return {
        challenges: res.result || [],
        totalCount: res.headers.get('x-total'),
        meta: {
          allChallengesCount: res.headers.get('x-total'),
          myChallengesCount: 0,
          ongoingChallengesCount: 0,
          openChallengesCount: 0,
          totalCount: res.headers.get('x-total'),
        },
      };
    };
    /**
     * Private function being re-used in all methods related to getting
     * challenges. It handles query-related arguments in the uniform way:
     * @param {String} endpoint API endpoint, where the request will be send.
     * @param {Object} filters Optional. A map of filters to pass as `filter`
     *  query parameter (this function takes care to stringify it properly).
     * @param {Object} params Optional. A map of any other parameters beside
     *  `filter`.
     */
    const getMemberChallenges = async (
      endpoint,
      filters = {},
      params = {},
    ) => {
      const query = {
        filter: qs.stringify(filters, { encode: false }),
        ...params,
      };
      const url = `${endpoint}?${qs.stringify(query)}`;
      const res = await this.private.api.get(url).then(checkError);
      return {
        challenges: res.content || [],
        totalCount: res.metadata.totalCount,
        meta: res.metadata,
      };
    };

    this.private = {
      api: getApi('V4', tokenV3),
      apiV5: getApi('V5', tokenV3),
      apiV2: getApi('V2', tokenV2),
      getChallenges,
      getMemberChallenges,
      tokenV2,
      tokenV3,
      memberService: getMembersService(),
    };
  }

  /**
   * Activates the specified challenge.
   * @param {Number} challengeId
   * @return {Promise} Resolves to null value in case of success; otherwise it
   *  is rejected.
   */
  async activate(challengeId) {
    let res = await this.private.api.post(`/challenges/${challengeId}/activate`);
    if (!res.ok) throw new Error(res.statusText);
    res = (await res.json()).result;
    if (res.status !== 200) throw new Error(res.content);
    return res.content;
  }

  /**
   * Closes the specified challenge.
   * @param {Number} challengeId
   * @param {Number} winnerId Optional. ID of the assignee to declare the
   *  winner.
   * @return {Promise} Resolves to null value in case of success; otherwise it
   *  is rejected.
   */
  async close(challengeId, winnerId) {
    let url = `/challenges/${challengeId}/close`;
    if (winnerId) url = `${url}?winnerId=${winnerId}`;
    let res = await this.private.api.post(url);
    if (!res.ok) throw new Error(res.statusText);
    res = (await res.json()).result;
    if (res.status !== 200) throw new Error(res.content);
    return res.content;
  }

  /**
   * Creates a new payment task.
   * @param {Number} projectId
   * @param {Number} accountId Billing account ID.
   * @param {String} title
   * @param {String} description
   * @param {String} assignee
   * @param {Number} payment
   * @param {String} submissionGuidelines
   * @param {Number} copilotId
   * @param {Number} copilotFee
   * @param {?} technologies
   * @return {Promise} Resolves to the created challenge object (payment task).
   */
  async createTask(
    projectId,
    accountId,
    title,
    description,
    assignee,
    payment,
    submissionGuidelines,
    copilotId,
    copilotFee,
    technologies,
  ) {
    const payload = {
      param: {
        assignees: [assignee],
        billingAccountId: accountId,
        confidentialityType: 'public',
        detailedRequirements: description,
        submissionGuidelines,
        milestoneId: 1,
        name: title,
        technologies,
        prizes: payment ? [payment] : [],
        projectId,
        registrationStartsAt: moment().toISOString(),
        reviewType: 'INTERNAL',
        subTrack: 'FIRST_2_FINISH',
        task: true,
      },
    };
    if (copilotId) {
      _.assign(payload.param, {
        copilotId,
        copilotFee,
      });
    }
    let res = await this.private.api.postJson('/challenges', payload);
    if (!res.ok) throw new Error(res.statusText);
    res = (await res.json()).result;
    if (res.status !== 200) throw new Error(res.content);
    return res.content;
  }

  /**
   * Gets challenge details from Topcoder API.
   * NOTE: This function also uses API v2 and other endpoints for now, due
   * to some information is missing or
   * incorrect in the main endpoint. This may change in the future.
   * @param {Number|String} challengeId
   * @return {Promise} Resolves to the challenge object.
   */
  async getChallengeDetails(challengeId) {
    const challenge = await this.private.apiV5.get(`/challenges/${challengeId}`)
      .then(checkErrorV5).then(res => res.result);

    const challengeFiltered = await this.private.getChallenges('/challenges/', { id: challengeId })
      .then(res => res.challenges[0]);

    const username = this.private.tokenV3 && decodeToken(this.private.tokenV3).handle;
    let challengeUser = {};
    if (challenge.legacyId) {
      challengeUser = username && await this.getUserChallenges(username, { id: challenge.legacyId })
        .then(res => res.challenges[0]).catch(() => null);
    }

    const finalChallenge = normalizeChallengeDetails(
      challenge,
      challengeFiltered,
      challengeUser,
      username,
    );

    finalChallenge.fetchedWithAuth = Boolean(this.private.api.private.token);

    return finalChallenge;
  }

  /**
   * Gets challenge registrants from Topcoder API.
   * @param {Number|String} challengeId
   * @return {Promise} Resolves to the challenge registrants array.
   */
  async getChallengeRegistrants(challengeId) {
    const challenge = await this.private.apiV5.get(`/challenges/${challengeId}`)
      .then(checkError).then(res => res);
    return challenge.registrants || [];
  }

  /**
   * Gets possible challenge subtracks.
   * @return {Promise} Resolves to the array of subtrack names.
   */
  getChallengeSubtracks() {
    return this.private.apiV5.get('/challengetypes')
      .then(res => (res.ok ? res.json() : new Error(res.statusText)))
      .then(res => (
        res.message
          ? new Error(res.message)
          : res
      ));
  }

  /**
   * Gets possible challenge tags (technologies).
   * @return {Promise} Resolves to the array of tag strings.
   */
  getChallengeTags() {
    return this.private.api.get('/technologies')
      .then(res => (res.ok ? res.json() : new Error(res.statusText)))
      .then(res => (
        res.result.status === 200
          ? res.result.content
          : new Error(res.result.content)
      ));
  }

  /**
   * Gets challenges.
   * @param {Object} filters Optional.
   * @param {Object} params Optional.
   * @return {Promise} Resolves to the api response.
   */
  getChallenges(filters, params) {
    return this.private.getChallenges('/challenges/', filters, params)
      .then((res) => {
        res.challenges.forEach(item => normalizeChallenge(item));
        return res;
      });
  }

  /**
   * Gets SRM matches.
   * @param {Object} params
   * @return {Promise}
   */
  async getSrms(params) {
    const res = await this.private.api.get(`/srms/?${qs.stringify(params)}`);
    return getApiResponsePayload(res);
  }

  static updateFiltersParamsForGettingMemberChallenges(filters, params) {
    if (filters && filters.status === 'Active') {
      // eslint-disable-next-line no-param-reassign
      filters.status = 'ACTIVE';
    }
    if (params && params.perPage) {
      // eslint-disable-next-line no-param-reassign
      params.offset = (params.page - 1) * params.perPage;
      // eslint-disable-next-line no-param-reassign
      params.limit = params.perPage;
    }
  }

  /**
   * Gets challenges of the specified user.
   * @param {String} username User whose challenges we want to fetch.
   * @param {Object} filters Optional.
   * @param {Number} params Optional.
   * @return {Promise} Resolves to the api response.
   */
  getUserChallenges(username, filters, params) {
    const userFilters = _.cloneDeep(filters);
    ChallengesService.updateFiltersParamsForGettingMemberChallenges(userFilters, params);
    const endpoint = `/members/${username.toLowerCase()}/challenges/`;
    return this.private.getMemberChallenges(endpoint, userFilters, params)
      .then((res) => {
        res.challenges.forEach(item => normalizeChallenge(item, username));
        return res;
      });
  }

  /**
   * Gets marathon matches of the specified user.
   * @param {String} username User whose challenges we want to fetch.
   * @param {Object} filters Optional.
   * @param {Number} params Optional.
   * @return {Promise} Resolves to the api response.
   */
  getUserMarathonMatches(username, filters, params) {
    ChallengesService.updateFiltersParamsForGettingMemberChallenges(filters, params);
    const endpoint = `/members/${username.toLowerCase()}/mms/`;
    return this.private.getMemberChallenges(endpoint, filters, params);
  }

  /**
   * Gets SRM matches related to the user.
   * @param {String} handle
   * @param {Object} params
   * @return {Promise}
   */
  async getUserSrms(handle, params) {
    const url = `/members/${handle}/srms/?${qs.stringify(params)}`;
    const res = await this.private.api.get(url);
    return getApiResponsePayload(res);
  }

  /**
   * Registers user to the specified challenge.
   * @param {String} challengeId
   * @return {Promise}
   */
  async register(challengeId) {
    const endpoint = `/challenges/${challengeId}/register`;
    const res = await this.private.api.postJson(endpoint);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  }

  /**
   * Unregisters user from the specified challenge.
   * @param {String} challengeId
   * @return {Promise}
   */
  async unregister(challengeId) {
    const endpoint = `/challenges/${challengeId}/unregister`;
    const res = await this.private.api.post(endpoint);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  }

  /**
   * Gets count of user's active challenges.
   * @param {String} handle Topcoder user handle.
   * @return {Action} Resolves to the api response.
   */
  getActiveChallengesCount(handle) {
    const filter = { status: 'Active' };
    const params = { limit: 1, offset: 0 };
    return this.getUserChallenges(handle, filter, params).then(res => res.totalCount);
  }

  /**
   * Submits a challenge submission.  Uses APIV2 for Development submission
   * and APIV3 for Design submisisons.
   * @param {Object} body
   * @param {String} challengeId
   * @param {String} track Either DESIGN or DEVELOP
   * @return {Promise}
   */
  submit(body, challengeId, track, onProgress) {
    let api;
    let contentType;
    let url;

    if (track === 'DESIGN') {
      ({ api } = this.private);
      contentType = 'application/json';
      url = '/submissions/'; // The submission info is contained entirely in the JSON body
    } else {
      api = this.private.apiV2;
      // contentType = 'multipart/form-data';
      contentType = null;
      url = `/develop/challenges/${challengeId}/upload`;
    }

    return api.upload(url, {
      body,
      headers: { 'Content-Type': contentType },
      method: 'POST',
    }, onProgress).then((res) => {
      const jres = JSON.parse(res);
      // Return result for Develop submission
      if (track === 'DEVELOP') {
        return jres;
      }
      // Design Submission requires an extra "Processing" POST
      const procId = jres.result.content.id;
      return api.upload(`/submissions/${procId}/process/`, {
        body: JSON.stringify({ param: jres.result.content }),
        headers: { 'Content-Type': contentType },
        method: 'POST',
      }, onProgress).then(procres => JSON.parse(procres));
    }, (err) => {
      logger.error(`Failed to submit to the challenge #${challengeId}`, err);
      throw err;
    });
  }

  /**
   * Updates the challenge (saves the give challenge to the API).
   * @param {Object} challenge
   * @param {String} tokenV3
   * @return {Promise}
   */
  async updateChallenge(challenge) {
    const URL = `/challenges/${challenge.id}`;
    const body = { param: challenge };
    let res = await this.private.api.putJson(URL, body);
    if (!res.ok) throw new Error(res.statusText);
    res = (await res.json()).result;
    if (res.status !== 200) throw new Error(res.content);
    return res.content;
  }

  /**
   * Gets roles of a user in the specified challenge. The user tested is
   * the owner of authentication token used to instantiate the service.
   *
   * Notice, if you have already loaded the challenge as that user, these roles
   * are attached to the challenge object under `userDetails.roles` path during
   * challenge normalization. However, if you have not, this method is the most
   * efficient way to get them, as it by-passes any unnecessary normalizations
   * of the challenge object.
   *
   * @param {Number} challengeId Challenge ID.
   */
  async getUserRolesInChallenge(challengeId) {
    const user = decodeToken(this.private.tokenV3);
    const username = user.handle || user.payload.handle;
    const url = `/members/${username.toLowerCase()}/challenges`;
    const data = await this.private.getMemberChallenges(url, { id: challengeId });
    return data.challenges[0].userDetails.roles;
  }
}

let lastInstance = null;
/**
 * Returns a new or existing challenges service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @param {String} tokenV2 Optional. Auth token for Topcoder API v2.
 * @return {ChallengesService} Challenges service object
 */
export function getService(tokenV3, tokenV2) {
  if (!lastInstance || lastInstance.private.tokenV3 !== tokenV3
    || lastInstance.tokenV2 !== tokenV2) {
    lastInstance = new ChallengesService(tokenV3, tokenV2);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
