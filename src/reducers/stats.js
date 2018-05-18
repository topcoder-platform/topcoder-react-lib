/**
 * @module "reducers.stats"
 * @desc Reducer for state.stats. That part of Redux state is intended to keep
 *  user- and group-related statistics to render in the frontend.
 * @todo Document state segment structure.
 */

import _ from 'lodash';
import { handleActions } from 'redux-actions';
import logger from '../utils/logger';
import actions from '../actions/stats';
import { fireErrorMessage } from '../utils/errors';

/**
 * Inits the loading of community stats.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetCommunityStatsInit(state, action) {
  const { community, uuid } = action.payload;
  let res = state.communities[community];
  res = res ? _.clone(res) : {};
  res.loadingUuid = uuid;
  return {
    ...state,
    communities: {
      ...state.communities,
      [community]: res,
    },
  };
}

/**
 * Handles result of the getCommunityStats action.
 * @param {Object} state Previous state.
 * @param {Object} action Action result.
 * @return {Object} New state.
 */
function onGetCommunityStatsDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to load community stats', payload);
    fireErrorMessage('Failed to load community stats', '');
    return state;
  }

  const { community, stats, uuid } = payload;
  if (_.get(state.communities[community], 'loadingUuid') !== uuid) {
    return state;
  }
  return {
    ...state,
    communities: {
      ...state.communities,
      [community]: {
        data: stats,
        timestamp: Date.now(),
      },
    },
  };
}

/**
 * Creates a new Stats reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Stats reducer.
 */
function create(initialState = {}) {
  const a = actions.stats;
  return handleActions({
    [a.getCommunityStatsInit]: onGetCommunityStatsInit,
    [a.getCommunityStatsDone]: onGetCommunityStatsDone,
  }, _.defaults(_.clone(initialState), {
    communities: {},
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
export function factory() {
  return Promise.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
export default create();
