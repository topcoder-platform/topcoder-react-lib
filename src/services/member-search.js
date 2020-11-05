/**
 * @module "services.member-search"
 * @desc This module provides a service for searching members.
 */
import _ from 'lodash';
import qs from 'qs';
import { getApi } from './api';
import { checkResponseSucess, mapTagToLeaderboardType } from '../utils/member-search';

/**
 * Member search service class.
 */
class MemberSearchService {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  constructor(tokenV3) {
    this.private = {
      api: getApi('V3', tokenV3),
      tokenV3,
    };
  }

  /**
   * Get matched members for a search term.
   * @param {String} searchTerm the search term
   * @param {Number} offset the number of members to skip from starting
   * @param {Number} limit the maximum number of return members
   * @return {Promise} Resolves to an object containing the array of matched members
   * and the total count
   */
  async getUsernameMatches(searchTerm, offset, limit) {
    const params = {
      query: 'MEMBER_SEARCH',
      handle: encodeURIComponent(searchTerm),
      offset,
      limit,
    };

    const api = await this.private.api;

    return api.get(`/members/_search/?${qs.stringify(params)}`)
      .then(checkResponseSucess)
      .then((data) => {
        const usernameMatches = _.get(data, 'result.content');
        const totalCount = _.get(data, 'result.metadata.totalCount');

        if (!_.isArray(usernameMatches)) {
          throw new Error('Expected array for username response results');
        } else if (!_.isNumber(totalCount)) {
          throw new Error('Expected number for metadata total count');
        }

        return {
          usernameMatches,
          totalCount,
        };
      })
      .catch((err) => {
        throw new Error(`Could not fetch username matches. Reason: ${err}`);
      });
  }

  /**
  * Check if the search term is a tag.
  * @param {String} searchTerm the search term
  * @return {Promise} Resolves to a tag object
  */
  async checkIfSearchTermIsATag(searchTerm) {
    const api = await this.private.api;
    return api.get(`/tags/?filter=name%3D${encodeURIComponent(searchTerm)}`)
      .then(checkResponseSucess)
      .then((data) => {
        const tagInfo = _.get(data, 'result.content');

        if (!_.isArray(tagInfo)) {
          throw new Error('Tag response must be an array');
        }

        return tagInfo[0];
      })
      .catch((err) => {
        throw new Error(`Could not determine if search term is a tag. Reason: ${err}`);
      });
  }

  /**
  * Get matched members for a search tag.
  * @param {Object} tag the tag
  * @return {Promise} Resolves to an object containing the array of matched members
  */
  async getTopMembers(tag) {
    const leaderboardType = mapTagToLeaderboardType(tag.domain);
    const api = await this.private.api;

    return api.get(`/leaderboards/?filter=id%3D${tag.id}%26type%3D${leaderboardType}`)
      .then(checkResponseSucess)
      .then((data) => {
        const topMembers = _.get(data, 'result.content', []);

        return {
          topMembers,
        };
      })
      .catch((err) => {
        throw new Error(`Could not fetch top members. Reason: ${err}`);
      });
  }
}

let lastInstance = null;

/**
 * Returns a new or existing member-search service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {MemberSearchService} Member search service object
 */
export function getService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new MemberSearchService(tokenV3);
  }
  return lastInstance;
}

export default undefined;
