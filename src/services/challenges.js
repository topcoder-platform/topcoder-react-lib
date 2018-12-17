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

export const ORDER_BY = {
  SUBMISSION_END_DATE: 'submissionEndDate',
};

/**
 * Normalizes a regular challenge details object received from the backend APIs.
 * NOTE: It is possible, that this normalization is not necessary after we
 * have moved to Topcoder API v4, but it is kept for now to minimize a risk of
 * breaking anything.
 * @todo Why this one is exported? It should be only used internally!
 * @param {Object} v4 Challenge object received from the /v4/challenges/{id}
 *  endpoint.
 * @param {Object} v4Filtered Challenge object received from the
 *  /v4/challenges?filter=id={id} endpoint.
 * @param {Object} v4User Challenge object received from the
 *  /v4/members/{username}/challenges?filter=id={id} endpoint.
 * If action was fired for authenticated visitor, v4_user will contain
 * details fetched specifically for the user (thus may include additional
 * data comparing to the standard API v4 response for the challenge details,
 * stored in v4_filtered).
 * @param {String} username Optional.
 * @return {Object} Normalized challenge object.
 */
export function normalizeChallengeDetails(v4, v4Filtered, v4User, username) {
  // Normalize exising data to make it consistent with the rest of the code
  const challenge = {
    ...v4,

    id: v4.challengeId,
    reliabilityBonus: _.get(v4Filtered, 'reliabilityBonus', 0),
    status: (v4.currentStatus || '').toUpperCase(),

    allPhases: [],
    currentPhases: [],
    name: v4.challengeName || v4.challengeTitle,
    projectId: Number(v4.projectId),
    forumId: Number(v4.forumId),
    introduction: v4.introduction || '',
    detailedRequirements: v4.detailedRequirements === 'null' ? '' : v4.detailedRequirements,
    finalSubmissionGuidelines: v4.finalSubmissionGuidelines === 'null' ? '' : v4.finalSubmissionGuidelines,
    screeningScorecardId: Number(v4.screeningScorecardId),
    reviewScorecardId: Number(v4.reviewScorecardId),
    numberOfCheckpointsPrizes: v4.numberOfCheckpointsPrizes,
    topCheckPointPrize: v4.topCheckPointPrize,
    submissionsViewable: v4.submissionsViewable || 'false',
    reviewType: v4.reviewType,
    allowStockArt: v4.allowStockArt === 'true',
    fileTypes: v4.filetypes || [],
    environment: v4.environment,
    codeRepo: v4.codeRepo,
    forumLink: v4.forumLink,
    submissionLimit: Number(v4.submissionLimit) || 0,
    drPoints: v4.digitalRunPoints,
    directUrl: v4.directUrl,
    technologies: v4.technologies || v4.technology || [],
    platforms: v4.platforms || [],
    prizes: v4.prize || v4.prizes || [],
    events: _.map(v4.event, e => ({
      eventName: e.eventShortDesc,
      eventId: e.id,
      description: e.eventDescription,
    })),
    terms: v4.terms,
    submissions: v4.submissions,
    track: _.toUpper(v4.challengeCommunity),
    subTrack: v4.subTrack,
    checkpoints: v4.checkpoints,
    documents: v4.documents || [],
    numRegistrants: v4.numberOfRegistrants,
    numberOfCheckpointSubmissions: v4.numberOfCheckpointSubmissions,
    registrants: v4.registrants || [],
  };

  // v4 Winners have different field names, needs to be normalized to match v4 filtered and v4
  challenge.winners = _.map(
    v4.winners,
    (winner, index) => ({
      ...winner,
      handle: winner.submitter,
      placement: winner.rank || index + 1, // Legacy MMs do not have a rank but are sorted by points
    }),
  );

  if (challenge.subTrack === 'MARATHON_MATCH') {
    challenge.track = 'DATA_SCIENCE';
  }

  // It's not clear if this will be the main event, will need to be investigated
  challenge.mainEvent = challenge.events[0] || {};

  /* It's unclear if these normalization steps are still required for V4 */
  // Fill missing data from v4_filtered
  if (v4Filtered) {
    const groups = {};
    if (v4Filtered.groupIds) {
      v4Filtered.groupIds.forEach((id) => {
        groups[id] = true;
      });
    }

    _.merge(challenge, {
      componentId: v4Filtered.componentId,
      contestId: v4Filtered.contestId,

      submissionEndDate: v4Filtered.submissionEndDate, // Dates are not correct in v4
      submissionEndTimestamp: v4Filtered.submissionEndDate, // Dates are not correct in v4

      /* Taking phases from v4_filtered, because dates are not correct in v4 */
      allPhases: v4Filtered.allPhases || [],

      /* Taking phases from v4_filtered, because dates are not correct in v4 */
      currentPhases: v4Filtered.currentPhases || [],

      /* v4 returns incorrect value for numberOfSubmissions for some reason */
      numSubmissions: v4Filtered.numSubmissions,
      groups,
    });
  }

  // Fill missing data from v4_user
  if (v4User) {
    _.defaults(challenge, {
      userDetails: v4User.userDetails,
    });
  }

  // Fill some derived data
  const registrationOpen = _.some(
    challenge.allPhases,
    phase => phase.phaseType === 'Registration' && phase.phaseStatus === 'Open',
  ) ? 'Yes' : 'No';
  _.defaults(challenge, {
    communities: new Set([COMPETITION_TRACKS[challenge.track]]),
    registrationOpen,
    users: username ? { [username]: true } : {},
  });

  // A hot fix to show submissions for on-going challenges
  if (!challenge.submissions || !challenge.submissions.length) {
    challenge.submissions = challenge.registrants
      .filter(r => r.submissionDate || '')
      .sort((a, b) => (a.submissionDate || '')
        .localeCompare(b.submissionDate || ''));
  }

  if (!challenge.allPhases) challenge.allPhases = [];
  if (!challenge.track) challenge.track = '';

  return challenge;
}

/**
 * Normalizes a regular challenge object received from the backend.
 * NOTE: This function is copied from the existing code in the challenge listing
 * component. It is possible, that this normalization is not necessary after we
 * have moved to Topcoder API v4, but it is kept for now to minimize a risk of
 * breaking anything.
 * @todo Should be used only internally!
 * @param {Object} challenge Challenge object received from the backend.
 * @param {String} username Optional.
 */
export function normalizeChallenge(challenge, username) {
  const registrationOpen = challenge.allPhases.filter(d => d.phaseType === 'Registration')[0].phaseStatus === 'Open' ? 'Yes' : 'No';
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
    challenge.track = 'DEVELOP';
  }
  /* eslint-enable no-param-reassign */

  _.defaults(challenge, {
    communities: new Set([COMPETITION_TRACKS[challenge.track]]),
    groups,
    registrationOpen,
    submissionEndTimestamp: challenge.submissionEndDate,
    users: username ? { [username]: true } : {},
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
     * @param {String} endpoint API V4 endpoint, where the request will be send.
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
        filter: qs.stringify(filters, { encode: false }),
        ...params,
      };
      const url = `${endpoint}?${qs.stringify(query)}`;
      const res = await this.private.api.get(url).then(checkError);
      return {
        challenges: res.content || [],
        totalCount: res.metadata.totalCount,
      };
    };

    this.private = {
      api: getApi('V4', tokenV3),
      apiV2: getApi('V2', tokenV2),
      getChallenges,
      tokenV2,
      tokenV3,
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
   * Gets challenge details from Topcoder API v4.
   * NOTE: This function also uses API v2 and other v4 endpoints for now, due
   * to some information is missing or
   * incorrect in the main v4 endpoint. This may change in the future.
   * @param {Number|String} challengeId
   * @return {Promise} Resolves to the challenge object.
   */
  async getChallengeDetails(challengeId) {
    const challengeV4 = await this.private.api.get(`/challenges/${challengeId}`)
      .then(checkError).then(res => res.content);

    const challengeV4Filtered = await this.private.getChallenges('/challenges/', { id: challengeId })
      .then(res => res.challenges[0]);

    const username = this.private.tokenV3 && decodeToken(this.private.tokenV3).handle;
    const challengeV4User = username && await this.getUserChallenges(username, { id: challengeId })
      .then(res => res.challenges[0]).catch(() => null);

    const challenge = normalizeChallengeDetails(
      challengeV4,
      challengeV4Filtered,
      challengeV4User,
      username,
    );

    challenge.fetchedWithAuth = Boolean(this.private.api.private.token);

    return challenge;
  }

  /**
   * Gets possible challenge subtracks.
   * @return {Promise} Resolves to the array of subtrack names.
   */
  getChallengeSubtracks() {
    return this.private.api.get('/challenge-types')
      .then(res => (res.ok ? res.json() : new Error(res.statusText)))
      .then(res => (
        res.result.status === 200
          ? res.result.content
          : new Error(res.result.content)
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

  /**
   * Gets challenges of the specified user.
   * @param {String} username User whose challenges we want to fetch.
   * @param {Object} filters Optional.
   * @param {Number} params Optional.
   * @return {Promise} Resolves to the api response.
   */
  getUserChallenges(username, filters, params) {
    const endpoint = `/members/${username.toLowerCase()}/challenges/`;
    return this.private.getChallenges(endpoint, filters, params)
      .then((res) => {
        res.challenges.forEach(item => normalizeChallenge(item, username));
        return res;
      });
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
    const filter = { status: 'ACTIVE' };
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
