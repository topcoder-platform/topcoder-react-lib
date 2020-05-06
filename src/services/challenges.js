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
import { getApiResponsePayload } from '../utils/tc';
import { getApi } from './api';
import { getService as getMembersService } from './members';

export const ORDER_BY = {
  SUBMISSION_END_DATE: 'submissionEndDate',
};

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
      const memberId = decodeToken(this.private.tokenV3).userId;
      const query = {
        ...params,
        ...filters,
        memberId,
      };
      const url = `${endpoint}?${qs.stringify(_.omit(query, ['limit', 'offset', 'technologies']))}`;
      const res = await this.private.apiV5.get(url).then(checkError);
      const totalCount = res.length;
      return {
        challenges: res || [],
        totalCount,
      };
    };

    this.private = {
      api: getApi('V4', tokenV3),
      apiV5: getApi('V5', tokenV3),
      apiV2: getApi('V2', tokenV2),
      apiV3: getApi('V3', tokenV3),
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
    const params = {
      status: 'Active',
    };

    let res = await this.private.apiV5.patch(`/challenge/${challengeId}`, params);

    if (!res.ok) throw new Error(res.statusText);
    res = (await res.json()).result;
    if (res.status !== 200) throw new Error(res.content);
    return res.content;
  }

  /**
   * Closes the specified challenge.
   * @param {Number} challengeId
   * @return {Promise} Resolves to null value in case of success; otherwise it
   *  is rejected.
   */
  async close(challengeId) {
    const params = {
      status: 'Completed',
    };
    let res = await this.private.apiV5.patch(`/challenges/${challengeId}`, params);
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
   * @param {?} tags
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
    tags,
  ) {
    const registrationPhase = await this.private.apiV5.get('/challenge-phases?name=Registration');

    const payload = {
      param: {
        name: title,
        typeId: 'e885273d-aeda-42c0-917d-bfbf979afbba',
        description,
        legacy: {
          track: 'FIRST_2_FINISH',
          reviewType: 'INTERNAL',
          confidentialityType: 'public',
          billingAccountId: accountId,
        },
        phases: [
          {
            phaseId: registrationPhase.id,
            scheduledEndDate: moment().toISOString(),
          },
        ],
        prizeSets: [
          {
            type: 'Challenge Prizes',
            description: 'Challenge Prize',
            prizes: [
              {
                value: payment,
                type: 'First Placement',
              },
            ],
          },
        ],
        tags,
        projectId,
      },
    };
    if (copilotId) {
      _.assign(payload.param, {
        copilotId,
        copilotFee,
      });
    }
    let res = await this.private.apiV5.postJson('/challenges', payload);
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
    const challengeFiltered = await this.private.getChallenges('/challenges/', { id: challengeId })
      .then(res => res.challenges[0]);

    return challengeFiltered;
  }

  /**
   * Gets challenge registrants from Topcoder API.
   * @param {Number|String} challengeId
   * @return {Promise} Resolves to the challenge registrants array.
   */
  async getChallengeRegistrants(challengeId) {
    const registrants = await this.private.apiV5.get(`/resources/challengeId=${challengeId}`)
      .then(checkError).then(res => res);
    return registrants || [];
  }

  /**
   * Gets possible challenge types.
   * @return {Promise} Resolves to the array of subtrack names.
   */
  getChallengeTypes() {
    return this.private.apiV5.get('/challenge-types')
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
    const res = this.private.getChallenges('/challenges/', filters, params);
    return res;
  }

  /**
   * Gets SRM matches.
   * @param {Object} params
   * @param {string} typeId Challenge SRM TypeId
   * @return {Promise}
   */
  async getSrms(params) {
    const res = await this.private.apiV5.get(`/challenges/?${qs.stringify(params)}`);
    return getApiResponsePayload(res);
  }

  static updateFiltersParamsForGettingMemberChallenges(filters, params) {
    if (params && params.perPage) {
      // eslint-disable-next-line no-param-reassign
      params.offset = (params.page - 1) * params.perPage;
      // eslint-disable-next-line no-param-reassign
      params.limit = params.perPage;
    }
  }

  /**
   * Gets challenges of the specified user.
   * @param {String} userId User id whose challenges we want to fetch.
   * @param {Object} filters Optional.
   * @param {Number} params Optional.
   * @return {Promise} Resolves to the api response.
   */
  getUserChallenges(userId, filters, params) {
    const userFilters = _.cloneDeep(filters);
    ChallengesService.updateFiltersParamsForGettingMemberChallenges(userFilters, params);
    const query = {
      ...params,
      ...userFilters,
      memberId: userId,
    };
    const endpoint = '/challenges';
    const url = `${endpoint}?${qs.stringify(_.omit(query, ['limit', 'offset', 'technologies']))}`;

    const res = this.private.apiV5.get(url);
    return res;
  }

  /**
   * Gets marathon matches of the specified user.
   * @param {String} userId User whose challenges we want to fetch.
   * @param {Object} filters Optional.
   * @param {Number} params Optional.
   * @return {Promise} Resolves to the api response.
   */
  async getUserMarathonMatches(userId) {
    const marathonTypeId = 'c2579605-e294-4967-b3db-875ef85240cd';
    const url = `/challenges?typeId=${marathonTypeId}&memberId=${userId}`;

    const res = await this.private.apiV5.get(url);
    return res;
  }

  /**
   * Gets SRM matches related to the user.
   * @param {String} handle
   * @param {Object} params
   * @return {Promise}
   */
  async getUserSrms(handle, params) {
    const challenges = await this.private.apiV5.get(`/resources?memberHandle=${handle}`);
    let newParams = params;
    if (challenges) {
      const { challengeId } = challenges[0];
      newParams = {
        ...params,
        challengeId,
      };
    }

    const url = `/challenges/${qs.stringify(newParams)}`;
    const res = await this.private.apiV5.get(url);
    return getApiResponsePayload(res);
  }

  /**
   * Registers user to the specified challenge.
   * @param {String} challengeId
   * @param {String} memberHandle
   * @param {String} roleId
   * @return {Promise}
   */
  async register(challengeId, memberHandle, roleId) {
    const params = {
      challengeId, memberHandle, roleId,
    };
    const res = await this.private.apiV5.post('/resources', params);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  }

  /**
   * Unregisters user from the specified challenge.
   * @param {String} challengeId
   * @param {String} memberHandle
   * @param {String} roleId
   * @return {Promise}
   */
  async unregister(challengeId, memberHandle, roleId) {
    const params = {
      challengeId, memberHandle, roleId,
    };
    const res = await this.private.apiV5.delete('/resources', params);
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
    const url = `/challenges/${challenge.id}`;
    let res = await this.private.apiV5.put(url, challenge);
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
    const url = `/resources?challengeId=${challengeId}?memberHandle=${user.handle}`;
    const resources = await this.private.apiV5.get(url);
    if (resources) return _.map(resources, 'roleId');
    throw new Error(`Failed to fetch user role from challenge #${challengeId}`);
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
