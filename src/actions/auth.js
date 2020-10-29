/**
 * @module "actions.auth"
 * @desc Actions related to Topcoder authentication system.
 */

import { createActions } from 'redux-actions';
import { decodeToken } from '@topcoder-platform/tc-auth-lib';
import { getApiV3, getApiV5 } from '../services/api';

/**
 * @static
 * @desc Creates an action that loads Topcoder user profile from v3 API.
 * @param {String} userTokenV3 v3 authentication token.
 * @return {Action}
 */
function loadProfileDone(userTokenV3) {
  if (!userTokenV3) return Promise.resolve(null);
  const user = decodeToken(userTokenV3);
  const apiV3 = getApiV3(userTokenV3);
  const apiV5 = getApiV5(userTokenV3);
  return Promise.all([
    apiV3.get(`/members/${user.handle}`)
      .then(res => res.json()).then(res => (res.result.status === 200 ? res.result.content : {})),
    apiV5.get(`/groups?memberId=${user.userId}&membershipType=user`)
      .then(res => (res.ok ? res.json() : new Error(res.statusText)))
      .then(res => (res.message ? new Error(res.message) : res)),
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

export default createActions({
  AUTH: {
    LOAD_PROFILE: loadProfileDone,
    SET_TC_TOKEN_V2: setTcTokenV2,
    SET_TC_TOKEN_V3: setTcTokenV3,
  },
});
