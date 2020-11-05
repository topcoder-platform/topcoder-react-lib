/**
 * @module "services.billing"
 * @desc Access to Topcoder billing accounts.
 */
import { getApi } from './api';

/**
 * @static
 * @member default
 * @desc Default module export is
 *  {@link module:services.billing~Billing} class.
 */

/**
 * Billing service object.
 */
class Billing {
  /**
   * Creates a new service.
   * @param {String} tokenV3 Topcoder auth token v3.
   */
  constructor(tokenV3) {
    this.private = {
      api: getApi('V3', tokenV3),
      tokenV3,
    };
  }

  /**
   * Gets billing accounts accessible to service user.
   * @return {Promise} Resolves to the list of billing account objects.
   */
  async getUserBillingAccounts() {
    const api = await this.private.api;
    return api.fetch();
  }
}

let lastInstance = null;

/**
 * Returns a new or existing Billing service for the user specified by token.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Billing} Billing service instance.
 */
export function getService(tokenV3) {
  if (!lastInstance || lastInstance.private.tokenV3 !== tokenV3) {
    lastInstance = new Billing(tokenV3);
  }
  return lastInstance;
}

export default Billing;
