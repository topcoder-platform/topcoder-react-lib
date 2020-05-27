/**
 * @module "services.reviewOpportunities"
 * @desc This module provides a service for retrieving Review Opportunities and
 * submitting applications.
 */
import _ from 'lodash';
import { getApi } from './api';

/**
 * Sync the fields of V3 and V5 for front-end to process successfully
 * @param challenges - challenges to normalize
 */
export function normalizeChallenges(challenges) {
  if (challenges) {
    _.map(challenges, (ch) => {
      const { challenge } = ch;
      if (challenge.technologies && challenge.technologies.includes('Data Science')) {
        challenge.track = 'DATA_SCIENCE';
      }
      return _.defaults(ch, { challenge });
    });
  }
  return challenges;
}
/**
 * Service class.
 */
class ReviewOpportunitiesService {
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
   * Gets a list of currently open Review Opportunities.
   * @param {Number} limit The max number to return in one call.
   * @param {Number} offset Offset, used with limit to lazy load.
   * @return {Promise} Resolves to the api response in JSON.
   */
  getReviewOpportunities(limit, offset) {
    const endpoint = `/reviewOpportunities?limit=${limit}&offset=${offset}`;
    return this.private.api.get(endpoint)
      .then(res => (res.ok ? res.json() : Promise.reject(new Error(`Error Code: ${res.status}`))))
      .then(res => (
        res.result.status === 200
          ? normalizeChallenges(res.result.content)
          : Promise.reject(res.result.content)
      ));
  }

  /**
   * Gets the details of the review opportunity for the corresponding challenge
   * @param {Number} challengeId The ID of the challenge (not the opportunity id)
   * @return {Promise} Resolves to the api response in JSON.
   */
  getDetails(challengeId) {
    const endpoint = `/reviewOpportunities/${challengeId}`;
    return this.private.api.get(endpoint)
      .then(res => res.json())
      .then(res => (
        res.result.status === 200
          ? res.result.content
          : Promise.reject(res.result)
      ));
  }

  /**
   * Submits review opportunity application for the specified challenge
   * @param {Number} challengeId The ID of the challenge (not the opportunity id)
   * @param {Array} roleIds List of review role IDs to apply for
   * @return {Promise} Resolves to the api response in JSON.
   */
  submitApplications(challengeId, roleIds) {
    const endpoint = `/reviewOpportunities/${challengeId}/applications?reviewApplicationRoleIds=${roleIds.join(',')}`;
    return this.private.api.post(endpoint, {})
      .then(res => JSON.parse(res));
  }

  /**
   * Cancels review opportunity application for the specified challenge
   * @param {Number} challengeId The ID of the challenge (not the opportunity id)
   * @param {Array} roleIds List of review role IDs to cancel applications for
   * @return {Promise} Resolves to the api response in JSON.
   */
  cancelApplications(challengeId, roleIds) {
    const endpoint = `/reviewOpportunities/${challengeId}/applications?reviewApplicationRoleIds=${roleIds.join(',')}`;
    return this.private.api.delete(endpoint, {})
      .then(res => JSON.parse(res));
  }
}

let lastInstance = null;
/**
 * Returns a new or existing review opportunities service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {MembersService} Members service object
 */
export function getReviewOpportunitiesService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new ReviewOpportunitiesService(tokenV3);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
