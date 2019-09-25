/**
 * @module "services.submission"
 * @desc This module provides a service for convenient manipulation with
 *  Topcoder submissions via TC API. Currently only used for MM challenges
 */

import qs from 'qs';
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
      apiV5: getApi('V5', tokenV3),
      tokenV3,
    };
  }

  /**
   * Get submissions of challenge
   * @param {Object} filters
   * @param {Object} params
   * @return {Promise} Resolves to the api response.
   */
  async getSubmissions(filters, params) {
    const query = {
      ...filters,
      ...params,
    };
    const url = `/submissions?${qs.stringify(query, { encode: false })}`;
    return this.private.apiV5.get(url)
      .then(res => (res.ok ? res.json() : new Error(res.statusText)))
      .then(res => res);
  }

  /**
   * Get submission information by submission id
   * @param submissionId The submission id
   * @returns {Promise} Resolves to the api response.
   */
  async getSubmissionInformation(submissionId) {
    const url = `/submissions/${submissionId}`;
    return this.private.apiV5.get(url)
      .then(res => (res.ok ? res.json() : new Error(res.statusText)))
      .then(res => res);
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
