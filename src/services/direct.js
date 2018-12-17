/**
 * @module "services.direct"
 * @desc The Direct service takes care about communication with Direct APIs:
 *  projects, billing accounts, copilots, all these stuff should be added here,
 *  at least for now.
 */

import qs from 'qs';

import { getApi } from './api';

/**
 * Direct service class.
 */
class Direct {
  /**
   * Creates a new {@link module:services.direct~Direct} instance.
   * @param {String} tokenV3 Optional. Topcoder auth token v3. Though optional,
   *  most probably most, if not all, of the service functionality won't work
   *  for non-authenticated visitors.
   */
  constructor(tokenV3) {
    this.private = {
      api: getApi('V3', tokenV3),
      tokenV3,
    };
  }

  /**
   * Gets details of the specified project.
   * @param {Number} projectId
   * @return {Promise} Resolves to the project details object.
   */
  async getProjectDetails(projectId) {
    let res = await this.private.api.get(`/direct/projects/${projectId}`);
    if (!res.ok) throw new Error(res.statusText);
    res = (await res.json()).result;
    if (res.status !== 200) throw new Error(res.content);
    return res.content;
  }

  /**
   * Gets user permissions on the specified project.
   * @param {Number|String} projectId
   * @param {String} tokenV3 Auth token for API v3.
   * @return {Promise} Resolves to the user permissions data.
   */
  async getProjectPermissions(projectId) {
    const URL = `/direct/projects/${projectId}/permissions`;
    let res = await this.private.api.get(URL);
    if (!res.ok) throw new Error(res.statusText);
    res = (await res.json()).result;
    if (res.status !== 200) throw new Error(res.content);
    return res.content;
  }

  /**
   * Gets all projects the user can see.
   * @param {Object} query Optional. Query params for the request.
   * @return {Promise} Resolves to an array of project objects.
   */
  async getUserProjects(query) {
    let url = '/direct/projects/user';
    if (query) url += `?${qs.stringify(query)}`;
    let res = await this.private.api.get(url);
    if (!res.ok) throw new Error(res.statusText);
    res = (await res.json()).result;
    if (res.status !== 200) throw new Error(res.content);
    return res.content;
  }
}

let lastInstance = null;
/**
 * Returns a new or existing {@link module:services.direct~Direct} service.
 * @param {String} tokenV3 Optional. Topcoder auth token v3.
 * @return {Direct} Direct service object.
 */
export function getService(tokenV3) {
  if (!lastInstance || lastInstance.private.tokenV3 !== tokenV3) {
    lastInstance = new Direct(tokenV3);
  }
  return lastInstance;
}

export default undefined;
