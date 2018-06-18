/**
 * @module "services.userTraits"
 * @desc  This module provides a service for user traits crud
 * via API V3.
 */

import toCapitalCase from 'to-capital-case';
import { getApiResponsePayloadV3 } from '../utils/tc';
import { getApiV3 } from './api';

/**
 * Service class.
 */
class UserTraitsService {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  constructor(tokenV3) {
    this.private = {
      api: getApiV3(tokenV3),
      tokenV3,
    };
  }

  /**
   * Gets member's all traits.
   * @param {String} handle User handle.
   * @return {Promise} Resolves to the fiuser trait object.
   */
  async getAllUserTraits(handle) {
    const res = await this.private.api.get(`/members/${handle}/traits`);
    return getApiResponsePayloadV3(res);
  }

  /**
   * add member trait.
   * @param {String} userHandle User handle.
   * @param {String} traitId.
   * @param {Array} data trait data.
   * @return {Promise} Resolves to the user trait object.
   */
  async addUserTrait(userHandle, traitId, data) {
    const body = {
      param: [{
        traitId,
        categoryName: toCapitalCase(traitId),
        traits: {
          data,
        },
      }],
    };
    const res = await this.private.api.postJson(`/members/${userHandle}/traits`, body);
    return getApiResponsePayloadV3(res);
  }

  /**
   * update member trait.
   * @param {String} userHandle User handle.
   * @param {String} traitId.
   * @param {Array} data trait data.
   * @return {Promise} Resolves to the user trait object.
   */
  async updateUserTrait(userHandle, traitId, data) {
    const body = {
      param: [{
        traitId,
        categoryName: toCapitalCase(traitId),
        traits: {
          data,
        },
      }],
    };
    const res = await this.private.api.putJson(`/members/${userHandle}/traits`, body);
    return getApiResponsePayloadV3(res);
  }

  /**
   * delete member trait.
   * @param {String} userHandle User handle.
   * @param {String} traitId.
   * @return {Promise} Resolves to the user trait object.
   */
  async deleteUserTrait(userHandle, traitId) {
    const res = await this.private.api.delete(`/members/${userHandle}/traits?traitIds=${traitId}`);
    return getApiResponsePayloadV3(res);
  }
}

let lastInstance = null;
/**
 * Returns a new or existing user trait service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {UserTraitsService} userTraits service object
 */
export function getService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new UserTraitsService(tokenV3);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
