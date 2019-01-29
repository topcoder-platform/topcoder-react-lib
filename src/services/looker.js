/**
 * @module "services.looker"
 * @desc  This module provides a service to get look data json
 * via API V4.
 */
import { getLookerApiResponsePayload } from '../utils/tc';
import { getApiV4 } from './api';

/**
 * Service class.
 */
class LookerService {
  /**
   * @param {String} tokenV4 Optional. Auth token for Topcoder API v4.
   */
  constructor(tokenV4) {
    this.private = {
      api: getApiV4(tokenV4),
      tokenV4,
    };
  }

  /**
   * Get json look data by id.
   * @param {String} lookerId Look id.
   * @return {Promise} Resolves to the json data.
   */
  async getLooker(lookerId) {
    const res = await this.private.api.get(`/looks/${lookerId}/run/json`);
    return getLookerApiResponsePayload(res);
  }
}

let lastInstance = null;
/**
 * Returns a new or existing looker service.
 * @param {String} tokenV4 Optional. Auth token for Topcoder API v4.
 * @return {LookerService} looker service object
 */
export function getService(tokenV4) {
  if (!lastInstance || tokenV4 !== lastInstance.private.tokenV4) {
    lastInstance = new LookerService(tokenV4);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
