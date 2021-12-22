/**
 * @module "actions.auth"
 * @desc Actions related to Topcoder authentication system.
 */

import { createActions } from 'redux-actions';
import { decodeToken } from '@topcoder-platform/tc-auth-lib';
import { getApiV5 } from '../services/api';
import { setErrorIcon, ERROR_ICON_TYPES } from '../utils/errors';
import { getService } from '../services/groups';
import { handleApiResponse } from '../utils/tc';

/**
 * Helper method that checks for HTTP error response v5 and throws Error in this case.
 * @param {Object} res HTTP response object
 * @return {Object} API JSON response object
 * @private
 */
async function checkErrorV5(res) {
  if (!res.ok) {
    if (res.status === 403) {
      setErrorIcon(ERROR_ICON_TYPES.API, 'Auth0', res.statusText);
    }
    throw new Error(res.statusText);
  }
  const jsonRes = (await res.json());
  if (jsonRes.message) {
    throw new Error(res.message);
  }
  return {
    result: jsonRes,
    headers: res.headers,
  };
}

/**
 * @static
 * @desc Creates an action that loads Topcoder user profile from v3 API.
 * @param {String} userTokenV3 v3 authentication token.
 * @return {Action}
 */
function loadProfileDone(userTokenV3) {
  if (!userTokenV3) return Promise.resolve(null);
  const user = decodeToken(userTokenV3);
  const apiV5 = getApiV5(userTokenV3);
  return Promise.all([
    apiV5.get(`/members/${user.handle}`)
      .then(handleApiResponse),
    apiV5.get(`/groups?memberId=${user.userId}&membershipType=user`)
      .then(checkErrorV5).then(res => res.result || []),
  ]).then(([profile, groups]) => ({ ...profile, groups }));
}

/**
 * @static
 * @desc Creates an action that sets Topcoder v2 authentication token.
 * @param {String} tokenV2 Topcoder v2 authentication token.
 * @return {Action}
 */
function setTcTokenV2(tokenV2) {
  return tokenV2;
}

/**
 * @static
 * @desc Creates an action that decodes Topcoder v3 authentication token,
 * to get user object, and then writes both the token and the user object into
 * Redux store.
 * @param {String} tokenV3 Topcoder v3 authentication token.
 * @return {Action}
 */
function setTcTokenV3(tokenV3) {
  return tokenV3;
}

/**
 * Get groups that a member belong to
 * @param {*} tokenV3 the member's token
 * @returns
 */
async function getAuthenticatedMemberGroups(tokenV3) {
  if (!tokenV3) return Promise.resolve([]);
  const user = decodeToken(tokenV3);
  return getService(tokenV3).getMemberGroups(user.userId);
}

export default createActions({
  AUTH: {
    LOAD_PROFILE: loadProfileDone,
    SET_TC_TOKEN_V2: setTcTokenV2,
    SET_TC_TOKEN_V3: setTcTokenV3,
    GET_AUTHENTICATED_MEMBER_GROUPS: getAuthenticatedMemberGroups,
  },
});
