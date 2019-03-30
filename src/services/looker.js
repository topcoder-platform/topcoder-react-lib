/**
 * @module "services.looker"
 * @desc  This module provides a service to get look data json via Topcoder API.
 */
import { getLookerApiResponsePayload } from '../utils/tc';
import { getApi } from './api';

/**
 * Service class.
 */
class LookerService {
  /**
   * @param {String} token Optional. Auth token for Topcoder API.
   */
  constructor(token) {
    this.private = {
      api: getApi('V4', token),
      token,
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
 * @param {String} token Optional. Auth token for Topcoder API.
 * @return {LookerService} looker service object
 */
export function getService(token) {
  if (!lastInstance || token !== lastInstance.private.token) {
    lastInstance = new LookerService(token);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
