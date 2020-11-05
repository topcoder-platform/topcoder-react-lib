/**
 * @module "services.user-settings"
 * @desc User Settings service. Corresponding part of the backend is
 * implemented as a separate Heroku App, which is set up only for prod.
 * Currently, we use it to save user-defined filters in the challenge search.
 */

import _ from 'lodash';
import { config } from 'topcoder-react-utils';

import Api from './api';

/**
 * @static
 * @member default
 * @desc Default export is {@link module:services.user-settings~UserSettings}
 *  class.
 */

/**
 * Service class.
 */
class UserSettings {
  /**
   * @param {String} tokenV2
   */
  constructor(tokenV2) {
    this.private = {
      api: new Api(config.URL.USER_SETTINGS, tokenV2),
      token: tokenV2,
    };
  }

  /**
   * Removes the filter specified by ID.
   * @param {String} id
   * @return {Promise}
   */
  async deleteFilter(id) {
    const api = await this.private.api;
    return api.delete(`/saved-searches/${id}`)
      .then(res => (res.ok ? null : new Error(res.statusText)));
  }

  /**
   * Gets saved filters.
   * @return {Promise}
   */
  async getFilters() {
    const api = await this.private.api;
    return api.get('/saved-searches')
      .then(res => (res.ok ? res.json() : new Error(res.statusText)))
      .then(res => res.map((item) => {
      /* NOTE: Previous version of the challenge listing saved filter in
       * different format (like an URL query string). This try/catch block
       * effectively differentiate between the old (unsupported) and new
       * format of the filters. */
        let filter;
        try {
          filter = JSON.parse(item.filter);
        } catch (e) {
          _.noop();
        }
        return { ...item, filter };
      }))
      .then(res => res.filter(item => item.filter));
  }

  /**
   * Saves filter.
   * @param {String} name
   * @param {Object} filter
   */
  async saveFilter(name, filter) {
    const api = await this.private.api;
    return api.postJson('/saved-searches', {
      filter: JSON.stringify(filter),
      name,
      type: 'develop',
    }).then(res => (res.ok ? res.json() : new Error(res.statusText)));
  }

  /**
   * Updates filter.
   * @param {String} id
   * @param {String} name
   * @param {Object} filter
   * @return {Promise}
   */
  async updateFilter(id, name, filter) {
    const api = await this.private.api;
    return api.putJson(`/saved-searches/${id}`, {
      filter: JSON.stringify(filter),
      name,
      type: 'develop',
    }).then(res => (res.ok ? res.json() : new Error(res.statusText)));
  }
}

let lastUserSettings = null;

/**
 * Returns a new or existing instance of UserSettings service.
 * @param {String} tokenV2 Topcoder auth token v2.
 * @return {UserSettings}
 */
export function getUserSettingsService(tokenV2) {
  if (!lastUserSettings || lastUserSettings.private.token !== tokenV2) {
    lastUserSettings = new UserSettings(tokenV2);
  }
  return lastUserSettings;
}

export default UserSettings;
