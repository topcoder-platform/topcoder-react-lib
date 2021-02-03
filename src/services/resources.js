/**
 * @module "services.resources"
 * @desc The Resources service takes care about communication with Direct APIs:
 */

import qs from 'qs';

import { getApi } from './api';

/**
 * Resources service class.
 */
class ResourcesService {
  /**
   * Creates a new {@link module:services.resources~ResourcesService} instance.
   * @param {String} tokenV3 Optional. Topcoder auth token v3. Though optional,
   *  most probably most, if not all, of the service functionality won't work
   *  for non-authenticated visitors.
   */
  constructor(tokenV3) {
    this.private = {
      api: getApi('V5', tokenV3),
      tokenV3,
    };
  }

  /**
   * Gets Resource roles.
   * @return {Promise} Resolves to the Resource roles.
   */
  async getResourceRoles() {
    const res = await this.private.api.get('/resource-roles');
    if (!res.ok) throw new Error(res.statusText);
    const result = await res.json();
    return result;
  }

  /**
   * Gets Resource roles on the specified Challenge.
   * @param {Object} query
   * @return {Promise} Resolves to the Resource roles.
   */
  async getChallengeResourceRoles(query) {
    let url = '/resources';
    if (query) url += `?${qs.stringify(query)}`;
    const res = await this.private.api.get(url);
    if (!res.ok) throw new Error(res.statusText);
    const result = await res.json();
    return result;
  }

  /**
   * Post New Resource for a challenge
   * @param {Object} body. Body for the request.
   * @return {Promise} Resolves to Resource object.
   */
  async createChallengeResource(body) {
    const url = '/resources';
    const res = await this.private.api.postJson(url, body);
    if (!res.ok) throw new Error(res.statusText);
    const result = await res.json();
    return result;
  }
}

let lastInstance = null;
/**
 * Returns a new or existing {@link module:services.resource~ResourcesService} service.
 * @param {String} tokenV3 Optional. Topcoder auth token v3.
 * @return {ResourcesService} ResourcesService service object.
 */
export function getService(tokenV3) {
  if (!lastInstance || lastInstance.private.tokenV3 !== tokenV3) {
    lastInstance = new ResourcesService(tokenV3);
  }
  return lastInstance;
}

export default undefined;
