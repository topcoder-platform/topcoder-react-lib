/**
 * Collection of small Topcoder-related functions.
 */

import _ from 'lodash';

/**
 * Codes of the Topcoder communities.
 */
/* TODO: These are originally motivated by Topcoder API v2. Topcoder API v3
 * uses upper-case literals to encode the tracks. At some point, we should
 * update it in this code as well! */
export const COMPETITION_TRACKS = {
  DATA_SCIENCE: 'data_science',
  DESIGN: 'design',
  DEVELOP: 'develop',
};

/**
 * Review Opportunity types
 */
export const REVIEW_OPPORTUNITY_TYPES = {
  'Contest Review': 'Review',
  'Spec Review': 'Specification Review',
  'Iterative Review': 'Iterative Review',
};

/**
 * Given options object it extracts 'auth.tokenV2' and 'auth.tokenV3',
 * if they are present there.
 * @param {Object} options Options object. For convenience, it is allowed to
 *  call this function without "options" argument (will result in empty tokens).
 * @return {Object} It will contain two string fields: tokenV2 and tokenV3.
 *  These strings will be empty if corresponding tokens are absent.
 */
export function getOptionTokens(options) {
  return {
    tokenV2: _.get(options, 'auth.tokenV2', ''),
    tokenV3: _.get(options, 'auth.tokenV3', ''),
  };
}

/**
 * Gets payload from a standard success response from TC API v3; or throws
 * an error in case of a failure response.
 * @param {Object} res
 * @return {Promise} Resolves to the payload.
 */
export async function getApiResponsePayloadV3(res) {
  if (!res.ok) throw new Error(res.statusText);
  const x = (await res.json()).result;
  if (!x.success) throw new Error(x.content);
  return x.content;
}
