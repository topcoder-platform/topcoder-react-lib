/**
 * @module "services.user"
 * @desc The User service provides functionality related to Topcoder user
 *  accounts.
 */
import { config, isomorphy } from 'topcoder-react-utils';

import logger from '../utils/logger';
import { getApiResponsePayload } from '../utils/tc';
import { getApiV2, getApiV3 } from './api';

let auth0;

/**
 * Returns a new, or cached auth0 instance.
 * @return {Object} Auth0 object.
 */
function getAuth0() {
  if (!auth0 && isomorphy.isClientSide()) {
    const Auth0 = require('auth0-js'); /* eslint-disable-line global-require */
    auth0 = new Auth0({
      domain: config.AUTH0.DOMAIN,
      clientID: config.AUTH0.CLIENT_ID,
      callbackOnLocationHash: true,
      sso: false,
    });
  }
  return auth0;
}

/**
 * Gets social user data.
 * @param {Object} profile The user social profile
 * @param {*} accessToken The access token
 * @returns {Object} Social user data
 */
function getSocialUserData(profile, accessToken) {
  const socialProvider = profile.identities[0].connection;
  let firstName = '';
  let lastName = '';
  let handle = '';
  const email = profile.email || '';

  const socialUserId = profile.user_id.substring(profile.user_id.lastIndexOf('|') + 1);
  let splitName;

  if (socialProvider === 'google-oauth2') {
    firstName = profile.given_name;
    lastName = profile.family_name;
    handle = profile.nickname;
  } else if (socialProvider === 'facebook') {
    firstName = profile.given_name;
    lastName = profile.family_name;
    handle = `${firstName}.${lastName}`;
  } else if (socialProvider === 'twitter') {
    splitName = profile.name.split(' ');
    [firstName] = splitName;
    if (splitName.length > 1) {
      [, lastName] = splitName;
    }
    handle = profile.screen_name;
  } else if (socialProvider === 'github') {
    splitName = profile.name.split(' ');
    [firstName] = splitName;
    if (splitName.length > 1) {
      [, lastName] = splitName;
    }
    handle = profile.nickname;
  } else if (socialProvider === 'bitbucket') {
    firstName = profile.first_name;
    lastName = profile.last_name;
    handle = profile.username;
  } else if (socialProvider === 'stackoverflow') {
    firstName = profile.first_name;
    lastName = profile.last_name;
    handle = socialUserId;
  } else if (socialProvider === 'dribbble') {
    firstName = profile.first_name;
    lastName = profile.last_name;
    handle = socialUserId;
  }

  let token = accessToken;
  let tokenSecret = null;
  if (profile.identities[0].access_token) {
    token = profile.identities[0].access_token;
  }
  if (profile.identities[0].access_token_secret) {
    tokenSecret = profile.identities[0].access_token_secret;
  }
  return {
    socialUserId,
    username: handle,
    firstname: firstName,
    lastname: lastName,
    email,
    socialProfile: profile,
    socialProvider,
    accessToken: token,
    accessTokenSecret: tokenSecret,
  };
}

/**
 * Service class.
 */
class User {
  /**
   * Creates a new User service.
   * @param {String} tokenV3 Topcoder auth tokenV3.
   * @param {String} tokenV2 TC auth token v2.
   */
  constructor(tokenV3, tokenV2) {
    this.private = {
      api: getApiV3(tokenV3),
      apiV2: getApiV2(tokenV2),
      tokenV2,
      tokenV3,
    };
  }

  /**
   * Gets user achievements. Does not need auth.
   * @param {String} username
   * @return {Object}
   */
  async getAchievements(username) {
    const res = await this.private.apiV2.get(`/users/${username}`);
    if (!res.ok) throw new Error(res.statusText);
    return (await res.json()).Achievements || [];
  }

  /**
   * Gets public user info. Does not need auth.
   * @param {String} username
   * @return {Object}
   */
  async getUserPublic(username) {
    const res = await this.private.apiV2.get(`/users/${username}`);
    if (!res.ok) throw new Error(res.statusText);
    return res.json() || null;
  }

  /**
   * Gets user data object for the specified username.
   *
   * NOTE: Only admins are authorized to use the underlying endpoint.
   *
   * @param {String} username
   * @return {Promise} Resolves to the user data object.
   */
  async getUser(username) {
    const url = `/users?filter=handle%3D${username}`;
    const res = await this.private.api.get(url);
    return (await getApiResponsePayload(res))[0];
  }

  /**
   * Gets email preferences.
   *
   * NOTE: Only admins are authorized to use the underlying endpoint.
   *
   * @param {Number} userId The TopCoder user id
   * @returns {Promise} Resolves to the email preferences result
   */
  async getEmailPreferences(userId) {
    const url = `/users/${userId}/preferences/email`;
    const res = await this.private.api.get(url);
    return getApiResponsePayload(res);
  }

  /**
   * Saves email preferences.
   *
   * NOTE: Only admins are authorized to use the underlying endpoint.
   *
   * @param {Object} user The TopCoder user
   * @param {Object} preferences The email preferences
   * @returns {Promise} Resolves to the email preferences result
   */
  async saveEmailPreferences({ firstName, lastName, userId }, preferences) {
    const settings = {
      firstName,
      lastName,
      subscriptions: {},
    };

    if (!preferences) {
      settings.subscriptions.TOPCODER_NL_GEN = true;
    } else {
      settings.subscriptions = preferences;
    }
    const url = `/users/${userId}/preferences/email`;

    const res = await this.private.api.putJson(url, { param: settings });
    return getApiResponsePayload(res);
  }

  /**
   * Gets credential for the specified user id.
   *
   * NOTE: Only admins are authorized to use the underlying endpoint.
   *
   * @param {Number} userId The user id
   * @return {Promise} Resolves to the linked accounts array.
   */
  async getCredential(userId) {
    const url = `/users/${userId}?fields=credential`;
    const res = await this.private.api.get(url);
    return getApiResponsePayload(res);
  }

  /**
   * Updates user password.
   *
   * NOTE: Only admins are authorized to use the underlying endpoint.
   *
   * @param {Number} userId The user id
   * @param {String} newPassword The new password
   * @param {String} oldPassword The old password
   * @return {Promise} Resolves to the update result.
   */
  async updatePassword(userId, newPassword, oldPassword) {
    const credential = {
      password: newPassword,
      currentPassword: oldPassword,
    };

    const url = `/users/${userId}`;
    const res = await this.private.api.patchJson(url, { param: { credential } });
    return getApiResponsePayload(res);
  }

  /**
   * Gets linked accounts for the specified user id.
   *
   * NOTE: Only admins are authorized to use the underlying endpoint.
   *
   * @param {Number} userId The user id
   * @return {Promise} Resolves to the linked accounts array.
   */
  async getLinkedAccounts(userId) {
    const url = `/users/${userId}?fields=profiles`;
    const res = await this.private.api.get(url);
    return getApiResponsePayload(res);
  }

  /**
   * Unlinks external account.
   * @param {Number} userId The TopCoder user id
   * @param {String} provider The external account service provider
   * @returns {Promise} Resolves to the unlink result
   */
  async unlinkExternalAccount(userId, provider) {
    const url = `/users/${userId}/profiles/${provider}`;
    const res = await this.private.api.delete(url);
    return getApiResponsePayload(res);
  }

  /**
   * Links external account.
   * @param {Number} userId The TopCoder user id
   * @param {String} provider The external account service provider
   * @param {String} callbackUrl Optional. The callback url
   * @returns {Promise} Resolves to the linked account result
   */
  async linkExternalAccount(userId, provider, callbackUrl) {
    return new Promise((resolve, reject) => {
      getAuth0().signin(
        {
          popup: true,
          connection: provider,
          scope: 'openid profile offline_access',
          state: callbackUrl,
        },
        (authError, profile, idToken, accessToken) => {
          if (authError) {
            logger.error('Error signing in - onSocialLoginFailure', authError);
            reject(authError);
            return;
          }

          const socialData = getSocialUserData(profile, accessToken);

          const postData = {
            userId: socialData.socialUserId,
            name: socialData.username,
            email: socialData.email,
            emailVerified: false,
            providerType: socialData.socialProvider,
            context: {
              handle: socialData.username,
              accessToken: socialData.accessToken,
              auth0UserId: profile.user_id,
            },
          };
          if (socialData.accessTokenSecret) {
            postData.context.accessTokenSecret = socialData.accessTokenSecret;
          }
          logger.debug(`link API postdata: ${JSON.stringify(postData)}`);
          this.private.api.postJson(`/users/${userId}/profiles`, { param: postData })
            .then(resp => getApiResponsePayload(resp).then((result) => {
              logger.debug(`Succesfully linked account: ${JSON.stringify(result)}`);
              resolve(postData);
            }))
            .catch((err) => {
              logger.error('Error linking account', err);
              reject(err);
            });
        },
      );
    });
  }
}

let lastInstance = null;

/**
 * Returns a new or existing User service for the specified tokenV3.
 * @param {String} tokenV3 Optional. Topcoder auth token v3.
 * @param {String} tokenV2 Optional. TC auth token v2.
 * @return {Api} API v3 service object.
 */
export function getService(tokenV3, tokenV2) {
  if (!lastInstance
  || lastInstance.private.tokenV2 !== tokenV2
  || lastInstance.private.tokenV3 !== tokenV3) {
    lastInstance = new User(tokenV3, tokenV2);
  }
  return lastInstance;
}

/**
 * @static
 * @member default
 * @desc Default export is {@link module:services.user~User} class.
 */
export default User;
