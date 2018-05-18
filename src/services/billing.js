/**
 * @module "services.billing"
 * @desc Access to Topcoder billing accounts.
 */
import { getApiV3 } from './api';

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
      api: getApiV3(tokenV3),
      tokenV3,
    };
  }

  /**
   * Gets billing accounts accessible to service user.
   * @return {Promise} Resolves to the list of billing account objects.
   */
  getUserBillingAccounts() {
    return this.private.api.fetch();
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
