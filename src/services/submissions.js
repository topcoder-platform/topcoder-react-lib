/**
 * @module "services.submission"
 * @desc This module provides a service for convenient manipulation with
 *  Topcoder submissions via TC API. Currently only used for MM challenges
 */

import { getApi } from './api';

/**
 * Submission service.
 */
class SubmissionsService {
  /**
   * Creates a new SubmissionService instance.
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  constructor(tokenV3) {
    this.private = {
      broker: getApi('MM_BROKER', tokenV3),
      tokenV3,
    };
  }

  /**
   * Get submissions of challenge
   * @param {Object} challengeId
   * @return {Promise} Resolves to the api response.
   */
  async getSubmissions(challengeId) {
    const url = `/submissions?challengeId=${challengeId}`;
    return this.private.broker.get(url)
      .then(res => (res.ok ? res.json() : new Error(res.statusText)));
  }

  /**
   * Get submission information by submission id
   * @param submissionId The submission id
   * @returns {Promise} Resolves to the api response.
   */
  async getSubmissionInformation(submissionId) {
    const url = `/submissions/${submissionId}`;
    return this.private.broker.get(url)
      .then(res => (res.ok ? res.json() : new Error(res.statusText)));
  }
}

let lastInstance = null;
/**
 * Returns a new or existing submissions service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {SubmissionsService} Submissions service object
 */
export function getService(tokenV3) {
  if (!lastInstance || lastInstance.private.tokenV3 !== tokenV3) {
    lastInstance = new SubmissionsService(tokenV3);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
