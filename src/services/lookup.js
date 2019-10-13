/**
 * @module "services.lookup"
 * @desc  This module provides a service to get lookup data from Topcoder
 * via API V3.
 */
import qs from 'qs';
import { getApiResponsePayload } from '../utils/tc';
import { getApi } from './api';

class LookupService {
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
   * Gets tags.
   * @param {Object} params Parameters
   * @return {Promise} Resolves to the tags.
   */
  async getTags(params) {
    const res = await this.private.api.get(`/tags/?${qs.stringify(params)}`);
    return getApiResponsePayload(res);
  }

  /**
   * Gets countries.
   * @param {Object} params Parameters
   * @return {Promise} Resolves to the countries.
   */
  async getCountries() {
    const res = await this.private.api.get('/members/lookup/countries');
    return getApiResponsePayload(res);
  }

  /**
   * Gets all countries.
   * @return {Promise} Resolves to the countries.
   */
  async getAllCountries() {
    const res = await this.private.apiV5.get('/lookups/countries');
    const jsonResult = await res.json();
    return jsonResult;
  }
}

let lastInstance = null;
/**
 * Returns a new or existing lookup service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {LookupService} Lookup service object
 */
export function getService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new LookupService(tokenV3);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
