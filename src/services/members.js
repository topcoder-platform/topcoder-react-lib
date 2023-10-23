/**
 * @module "services.members"
 * @desc  This module provides a service for searching for Topcoder
 * members via API V3.
 */

/* global FormData */
import _ from 'lodash';
import qs from 'qs';
import { decodeToken } from '@topcoder-platform/tc-auth-lib';
import { getApiResponsePayload, handleApiResponse } from '../utils/tc';
import { getApi } from './api';

/**
 * Service class.
 */
class MembersService {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  constructor(tokenV3) {
    this.private = {
      api: getApi('V3', tokenV3),
      apiV5: getApi('V5', tokenV3),
      tokenV3,
    };
  }

  /**
   * Gets member's financial information.
   * @param {String} handle User handle.
   * @return {Promise} Resolves to the financial information object.
   */
  async getMemberFinances(handle) {
    const res = await this.private.api.get(`/members/${handle}/financial`);
    return getApiResponsePayload(res);
  }

  /**
   * Gets public information on a member.
   *
   * This method does not require any authorization.
   *
   * @param {String} handle Member handle.
   * @return {Promise} Resolves to the data object.
   */
  async getMemberInfo(handle) {
    const res = await this.private.apiV5.get(`/members/${handle}`);
    return handleApiResponse(res);
  }

  /**
   * Gets member external account info.
   * @param {String} handle
   * @return {Promise} Resolves to the stats object.
   */
  async getExternalAccounts(handle) {
    const res = await this.private.api.get(`/members/${handle}/externalAccounts`);
    return getApiResponsePayload(res);
  }

  /**
   * Gets member external links.
   * @param {String} handle
   * @return {Promise} Resolves to the stats object.
   */
  async getExternalLinks(handle) {
    const res = await this.private.api.get(`/members/${handle}/externalLinks`);
    return getApiResponsePayload(res);
  }

  /**
   * @deprecated This method is using the old API skills, and the returned skills may not be what you're looking for
   * @todo Replace this method and use the new standardized skills when needed
   * @see https://topcoder.atlassian.net/browse/TSJR-27
   * 
   * Gets member skills.
   * @param {String} handle
   * @return {Promise} Resolves to the stats object.
   */
  async getSkills(handle) {
    const res = await this.private.apiV5.get(`/members/${handle}/skills`);
    return handleApiResponse(res);
  }

  /**
   * Gets member statistics.
   * @param {String} handle
   * @param {Array<String>|String} groupIds
   * @return {Promise} Resolves to the stats object.
   */
  async getStats(handle, groupIds, tokenV3) {
    const options = tokenV3 ? { headers: { Authorization: `Bearer ${tokenV3}` } } : {};
    if (!groupIds || (_.isArray(groupIds) && groupIds.length === 0)) {
      const res = await this.private.apiV5.get(`/members/${handle}/stats`, options);
      return handleApiResponse(res);
    }

    const groupIdsArray = _.isArray(groupIds) ? groupIds : _.split(groupIds, ',');
    const groupIdChunks = _.chunk(groupIdsArray, 50);

    const getStatRequests = _.map(groupIdChunks, async (groupIdChunk) => {
      const res = await this.private.apiV5.get(`/members/${handle}/stats?groupIds=${_.join(groupIdChunk)}`, options);
      return handleApiResponse(res);
    });
    const results = await Promise.all(getStatRequests);

    return _.uniqBy(
      _.flatten(
        _.filter(results, _.isArray),
      ),
      item => item.groupId,
    );
  }

  /**
   * Gets member statistics history
   * @param {String} handle
   * @return {Promise} Resolves to the stats object.
   */
  async getStatsHistory(handle, groupIds, tokenV3) {
    const options = tokenV3 ? { headers: { Authorization: `Bearer ${tokenV3}` } } : {};
    let res;
    if (groupIds) {
      res = await this.private.apiV5.get(`/members/${handle}/stats/history?groupIds=${groupIds}`, options);
    } else {
      res = await this.private.apiV5.get(`/members/${handle}/stats/history`, options);
    }
    return handleApiResponse(res);
  }

  /**
   * Gets member statistics distribution
   * @param {String} handle
   * @param {String} track
   * @param {String} subTrack
   * @return {Promise} Resolves to the stats object.
   */
  async getStatsDistribution(handle, track, subTrack) {
    const res = await this.private.api.get(`/members/stats/distribution?filter=${encodeURIComponent(qs.stringify({
      track,
      subTrack,
    }))}`);
    return getApiResponsePayload(res);
  }

  /**
   * Gets a list of suggested member names for the supplied partial.
   *
   * WARNING: This method requires v3 authorization.
   *
   * @param {String} keyword Partial string to find suggestions for
   * @return {Promise} Resolves to the api response content
   */
  async getMemberSuggestions(keyword) {
    const res = await this.private.api.get(`/members/_suggest/${keyword}`);
    return getApiResponsePayload(res);
  }

  /**
   * Adds external web link for member.
   * @param {String} userHandle The user handle
   * @param {String} webLink The external web link
   * @return {Promise} Resolves to the api response content
   */
  async addWebLink(userHandle, webLink) {
    const res = await this.private.api.postJson(`/members/${userHandle}/externalLinks`, { param: { url: webLink } });
    return getApiResponsePayload(res);
  }

  /**
   * Deletes external web link for member.
   * @param {String} userHandle The user handle
   * @param {String} webLinkHandle The external web link handle
   * @return {Promise} Resolves to the api response content
   */
  async deleteWebLink(userHandle, webLinkHandle) {
    const body = {
      param: {
        handle: webLinkHandle,
      },
    };
    const res = await this.private.api.delete(`/members/${userHandle}/externalLinks/${webLinkHandle}`, JSON.stringify(body));
    return getApiResponsePayload(res);
  }

  /**
   * Adds user skill.
   * @param {String} handle Topcoder user handle
   * @param {Number} skillTagId Skill tag id
   * @return {Promise} Resolves to operation result
   */
  async addSkill(handle, skillTagId) {
    let res = {};
    const url = `/members/${handle}/skills`;
    const skills = await this.getSkills(handle);

    const body = {
      [skillTagId]: {
        hidden: false,
      },
    };

    if (skills && skills.createdAt) {
      res = await this.private.apiV5.patchJson(url, body);
    } else {
      res = await this.private.apiV5.postJson(url, body);
    }

    return handleApiResponse(res);
  }

  /**
   * Hides user skill.
   * @param {String} handle Topcoder user handle
   * @param {Number} skillTagId Skill tag id
   * @return {Promise} Resolves to operation result
   */
  async hideSkill(handle, skillTagId) {
    const body = {
      [skillTagId]: {
        hidden: true,
      },
    };
    const res = await this.private.apiV5.fetch(`/members/${handle}/skills`, {
      body: JSON.stringify(body),
      method: 'PATCH',
    });
    return handleApiResponse(res);
  }

  /**
   * Updates member profile.
   * @param {Object} profile The profile to update.
   * @return {Promise} Resolves to the api response content
   */
  async updateMemberProfile(profile) {
    const url = profile.verifyUrl ? `/members/${profile.handle}?verifyUrl=${profile.verifyUrl}` : `/members/${profile.handle}`;
    const res = await this.private.api.putJson(url, { param: profile.verifyUrl ? _.omit(profile, ['verifyUrl']) : profile });
    if (profile.verifyUrl && res.status === 409) {
      return Promise.resolve(Object.assign({}, profile, { isEmailConflict: true }));
    }
    return getApiResponsePayload(res);
  }

  /**
   * Updates member profile.
   * @param {Object} profile The profile to update.
   * @return {Promise} Resolves to the api response content
   */
  async updateMemberProfileV5(profile, handle) {
    const url = profile.verifyUrl ? `/members/${handle}?verifyUrl=${profile.verifyUrl}` : `/members/${handle}`;
    const res = await this.private.apiV5.putJson(url, profile.verifyUrl ? _.omit(profile, ['verifyUrl']) : profile);
    if (profile.verifyUrl && res.status === 409) {
      return Promise.resolve(Object.assign({}, profile, { isEmailConflict: true }));
    }
    return handleApiResponse(res);
  }

  /**
   * Updates member photo.
   * @param {String} userHandle The user handle
   * @param {File} file The photo to upload
   * @return {Promise} Resolves to the api response content
   */
  async updateMemberPhoto(userHandle, file) {
    const formData = new FormData();
    formData.append('photo', file);
    const res = await this.private.apiV5.fetch(`/members/${userHandle}/photo`, {
      method: 'POST',
      headers: {
        'Content-Type': null,
      },
      body: formData,
    });
    return handleApiResponse(res)
      .then(({ photoURL }) => photoURL);
  }

  /**
   * Verify member new email
   * @param {String} handle handle Topcoder user handle
   * @param {String} emailVerifyToken The verify token of new email
   * @returns {Promise} Resolves to the api response content
   */
  async verifyMemberNewEmail(handle, emailVerifyToken) {
    const res = await this.private.api.get(`/members/${handle}/verify?token=${emailVerifyToken}`);
    return getApiResponsePayload(res);
  }

  /**
   * Get members information
   * @param {Array} userIds the member ids
   */
  async getMembersInformation(userIds) {
    const query = `query=${encodeURI(_.map(userIds, id => `userId:${id}`).join(' OR '))}`;
    const limit = `limit=${userIds.length}`;
    const url = `/members/_search?fields=userId%2Chandle&${query}&${limit}`;
    const res = await this.private.api.get(url);
    return getApiResponsePayload(res);
  }

  /**
   * Fetch resources roles
   * @param {Array} memberId the member id
   */
  async getResourceRoles() {
    const res = await this.private.apiV5.get('/resource-roles');
    const roles = await res.json();
    return roles;
  }

  /**
   * Fetch user challenge resources
   * @param {Array} challengeId the challenge id
   */
  async getChallengeResources(challengeId) {
    const user = decodeToken(this.private.tokenV3);
    const url = `/resources?challengeId=${challengeId}&memberId=${user.userId}`;
    let res = null;

    try {
      res = await this.private.apiV5.get(url);
    } catch (error) {
      // logger.error('Failed to load challenge resource', error);
    }

    return res.json();
  }

  /**
   * Fetch user registered challenge's resources
   * @param {Array} memberId the member id
   */
  async getUserResources(memberId) {
    const url = `/challenges?status=Active&memberId=${memberId}`;
    const res = await this.private.apiV5.get(url);
    const challenges = await res.json();
    const roles = await this.getResourceRoles();
    const calls = [];

    challenges.forEach(async (ch) => {
      calls.push(this.getChallengeResources(ch.id));
    });

    return Promise.all(calls).then((resources) => {
      const results = [];
      resources.forEach((resource) => {
        const userResource = _.find(resource, { memberId });
        if (userResource) {
          const challengeRole = _.find(roles, { id: userResource.roleId });
          const { name } = challengeRole || '';
          results.push({ id: userResource.challengeId, name });
        }
      });

      return results;
    });
  }
}

let lastInstance = null;
/**
 * Returns a new or existing members service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {MembersService} Members service object
 */
export function getService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new MembersService(tokenV3);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
