/**
 * Reducer for state.auth.
 */

import _ from 'lodash';
import { decodeToken } from 'tc-accounts';
import { redux } from 'topcoder-react-utils';
import actions from '../actions/auth';
import { getOptionTokens } from '../utils/tc';

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
function create(initialState, mergeReducers = {}) {
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
    ...mergeReducers,
  }, _.defaults(initialState, {
    authenticating: true,
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 *
 * initialState: The initial state
 *
 * mergeReducers: The additional reducers to merge
 *
 * auth.tokenV2: The V2 auth token
 *
 * auth.tokenV3: The V3 auth token
 *
 * @param {Object} options Optional. Options object for initial state.
 * @return Promise which resolves to the new reducer.
 */
export function factory(options = {}) {
  const tokens = getOptionTokens(options);

  let state = options.initialState || {};
  state = {
    ...state,
    ...tokens,
    authenticating: true,
    user: null,
  };

  if (state.tokenV3) {
    state.user = decodeToken(state.tokenV3);
    return redux.resolveAction(actions.auth.loadProfile(state.tokenV3))
      .then(res => create(onProfileLoaded(state, res), options.mergeReducers));
  }
  return Promise.resolve(create(state, options.mergeReducers));
}

/* Reducer with the default initial state. */
export default create();
