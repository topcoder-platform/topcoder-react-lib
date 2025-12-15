/**
 * @module "services.reviewSummations"
 * @desc Service for retrieving review summations from the Review API.
 */

import _ from 'lodash';
import { config } from 'topcoder-react-utils';
import { getApi } from './api';

const DEFAULT_PER_PAGE = 500;

/**
 * Review summations service.
 */
class ReviewSummationsService {
  /**
   * Creates a new ReviewSummationsService instance.
   * @param {String} tokenV3 Optional auth token for Topcoder API v3.
   */
  constructor(tokenV3) {
    this.private = {
      apiV6: getApi('V6', tokenV3),
      tokenV3,
    };
  }

  /**
   * Fetches all review summations for a challenge.
   * @param {String|Number} challengeId Challenge identifier.
   * @return {Promise<{ data: Array, meta: Object }>} Aggregated response.
   */
  async getReviewSummations(challengeId) {
    const aggregated = [];
    let page = 1;
    let meta = null;
    let hasMore = true;
    const baseUrl = config.URL.REVIEW_SUMMATIONS_API_URL;

    while (hasMore) {
      const endpoint = `${baseUrl}?challengeId=${encodeURIComponent(challengeId)}&perPage=${DEFAULT_PER_PAGE}&page=${page}`;
      const response = await this.private.apiV6.get(endpoint);

      if (!response.ok) {
        const error = new Error(`Failed to fetch review summations: ${response.status} ${response.statusText}`);
        error.status = response.status;
        throw error;
      }

      const payload = await response.json();
      const data = payload.data || [];
      aggregated.push(...data);
      if (!meta && payload.meta) {
        meta = payload.meta;
      }

      const totalPages = _.get(payload, 'meta.totalPages')
        || _.get(payload, 'meta.total_pages');
      const reachedEnd = !data.length
        || (totalPages && page >= totalPages)
        || data.length < DEFAULT_PER_PAGE;

      hasMore = !reachedEnd;
      page += 1;
    }

    return {
      data: aggregated,
      meta: {
        ...(meta || {}),
        totalItems: aggregated.length,
        perPage: DEFAULT_PER_PAGE,
      },
    };
  }
}

let lastInstance = null;

/**
 * Returns a cached review summations service instance for the provided token.
 * @param {String} tokenV3 Optional auth token for Topcoder API v3.
 * @return {ReviewSummationsService}
 */
export function getService(tokenV3) {
  if (!lastInstance || lastInstance.private.tokenV3 !== tokenV3) {
    lastInstance = new ReviewSummationsService(tokenV3);
  }
  return lastInstance;
}

export default undefined;
