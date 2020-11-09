/**
 * @module "reducers.auth"
 * @desc Reducer for {@link module:actions.auth} actions.
 *
 * State segment managed by this reducer has the following structure:
 * @param {Boolean} authenticating=true `true` if authentication is still in
 *  progress; `false` if it has already completed or failed.
 * @param {Object} profile=null Topcoder user profile.
 * @param {String} tokenV2='' Topcoder v2 auth token.
 * @param {String} tokenV3='' Topcoder v3 auth token.
 * @param {Object} user=null Topcoder user object (user information stored in
 *  v3 auth token).
 */

import _ from 'lodash';
import { decodeToken } from '@topcoder-platform/tc-auth-lib';
import { redux } from 'topcoder-react-utils';
import actions from '../actions/auth';
import profileActions from '../actions/profile';

/**
 * Handles actions.auth.loadProfile action.
 * @param {Object} state
 * @param {Object} action
 */
function onProfileLoaded(state, action) {
  return {
    ...state,
    authenticating: false,
    profile: action.payload,
  };
}

/**
 * Creates a new Auth reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Auth reducer.
 */
function create(initialState) {
  return redux.handleActions({
    [actions.auth.loadProfile]: onProfileLoaded,
    [actions.auth.setTcTokenV2]: (state, action) => ({
      ...state,
      tokenV2: action.payload,
    }),
    [actions.auth.setTcTokenV3]: (state, { payload }) => ({
      ...state,
      tokenV3: payload,
      user: payload ? decodeToken(payload) : null,
    }),
    'COMMUNITY_ACTIONS/TC_COMMUNITY/JOIN_DONE': (state, { payload }) => ({
      ...state,
      profile: {
        ...state.profile,
        groups: state.profile.groups.concat({ id: payload.groupId.toString() }),
      },
    }),
    [profileActions.profile.uploadPhotoDone]: (state, { payload, error }) => {
      if (error) {
        return state;
      }
      if (!state.profile || state.profile.handle !== payload.handle) {
        return state;
      }
      return {
        ...state,
        profile: {
          ...state.profile,
          photoURL: payload.photoURL,
        },
      };
    },
    [profileActions.profile.deletePhotoDone]: (state, { payload, error }) => {
      if (error) {
        return state;
      }
      if (!state.profile || state.profile.handle !== payload.handle) {
        return state;
      }
      return {
        ...state,
        profile: {
          ...state.profile,
          photoURL: null,
        },
      };
    },
    [profileActions.profile.updateProfileDone]: (state, { payload, error }) => {
      if (error) {
        return state;
      }
      if (!state.profile || state.profile.handle !== payload.handle) {
        return state;
      }
      return {
        ...state,
        profile: {
          ...state.profile,
          ...payload,
        },
      };
    },
  }, _.defaults(initialState, {
    authenticating: true,
    profile: null,
    tokenV2: '',
    tokenV3: '',
    user: null,
  }));
}

/**
 * Creates a new reducer.
 * @param {Object} options={} Optional. Options for customization of initial
 *  state.
 * @param {String} [options.auth.tokenV2=''] Optional. Topcoder v2 auth token.
 * @param {String} [options.auth.tokenV3=''] Optional. Topcoder v3 auth token.
 * @returns {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
export async function factory(options = {}) {
  const state = {
    tokenV2: _.get(options.auth, 'tokenV2'),
    tokenV3: _.get(options.auth, 'tokenV3'),
  };

  if (state.tokenV3) {
    state.user = decodeToken(state.tokenV3);
    let a = actions.auth.loadProfile(state.tokenV3);
    a = await redux.resolveAction(a);
    return create(onProfileLoaded(state, a));
  }
  return create(state);
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
export default create();
