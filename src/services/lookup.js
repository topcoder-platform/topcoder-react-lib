/**
 * @module "services.lookup"
 * @desc  This module provides a service to get lookup data from Topcoder
 * via API V3.
 */
import qs from 'qs';
import { assign } from 'lodash';
import { getApiResponsePayload } from '../utils/tc';
import { getApi } from './api';

class LookupService {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  constructor(tokenV3) {
    this.private = {
      api: getApi('V3', tokenV3),
      apiV4: getApi('V4', tokenV3),
      apiV5: getApi('V5', tokenV3),
      tokenV3,
    };
  }

  /**
   * Gets types
   * @return {Promise} Resolves to the types
   */
  async getTypes() {
    try {
      const res = await this.private.apiV5.get('/lookups/devices/types');
      return res.json();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Gets Manufacturers.
   * @param {String} params type
   * @return {Promise} Resolves to the getManufacturers.
   */
  async getManufacturers(type) {
    const params = {
      type,
    };

    try {
      const res = await this.private.apiV5.get(`/lookups/devices/manufacturers?${qs.stringify(params)}`);
      return res.json();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Gets Devices
   * @param {number}  page
   * @param {Number}  pageSize
   * @param {String}  type
   * @param {String}  manufacturer
   * @param {String}  model
   * @return {Promise} Resolves to the Devices.
   */
  async getDevices(page = 1, pageSize, type, manufacturer, model) {
    const params = {
      perPage: pageSize,
    };
    assign(params, {
      type, manufacturer, model, page,
    });

    try {
      const res = await this.private.apiV5.get(`/lookups/devices?${qs.stringify(params)}`);
      return res.json();
    } catch (e) {
      throw e;
    }
  }


  /**
   * Gets tags.
   * @param {Object} params Parameters
   * @return {Promise} Resolves to the tags.
   */
  async getTags(params) {
    const res = await this.private.api.get(`/tags/?filter=${encodeURIComponent(qs.stringify(params.filter))}&${qs.stringify(params.limit)}`);
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

  /**
   * Gets all reviewTypes.
   * @return {Promise} Resolves to the review types.
   */
  async getReviewTypes() {
    if (typeof this.private.tokenV3 !== 'undefined') {
      const res = await this.private.apiV5.get('/reviewTypes');
      const jsonResult = await res.json();
      return jsonResult;
    }
    return [];
  }

  /**
   * Gets all technologies.
   * @return {Promise} Resolves to the review types.
   */
  async getTechnologies() {
    const res = await this.private.apiV4.get('/technologies');
    return getApiResponsePayload(res);
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
