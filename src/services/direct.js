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
      api: getApi('V5', tokenV3),
      tokenV3,
    };
  }

  /**
   * Gets details of the specified project.
   * @param {Number} projectId
   * @return {Promise} Resolves to the project details object.
   */
  async getProjectDetails(projectId) {
    const res = await this.private.api.get(`/projects/${projectId}`);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  }

  /**
   * Gets user permissions on the specified project.
   * @param {Number|String} projectId
   * @param {String} tokenV3 Auth token for API v3.
   * @return {Promise} Resolves to the user permissions data.
   */
  async getProjectPermissions(projectId) {
    const URL = `/projects/${projectId}/permissions`;
    const res = await this.private.api.get(URL);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  }

  /**
   * Gets all projects the user can see.
   * @param {Object} query Optional. Query params for the request.
   * @return {Promise} Resolves to an array of project objects.
   */
  async getUserProjects(query) {
    let url = '/projects';
    if (query) url += `?${qs.stringify(query)}`;
    const res = await this.private.api.get(url);
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
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
