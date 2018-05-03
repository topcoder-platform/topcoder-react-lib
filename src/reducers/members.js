/**
 * Reducer for the Redux store segment that holds members data.
 */

import _ from 'lodash';
import { handleActions } from 'redux-actions';
import logger from '../utils/logger';
import actions from '../actions/members';
import { fireErrorMessage } from '../utils/errors';

/**
 * Drops information about a member.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onDrop(state, { payload }) {
  if (!state[payload]) return state;
  return _.omit(state, payload);
}

/**
 * Drops all loaded information on members.
 * @return {Object} New state.
 */
function onDropAll() {
  return {};
}

/**
 * Inits the loading of member achievements.
 * @param {Object} state
 * @param {String} action.handle
 * @param {String} action.uuid
 * @return {Object} New state.
 */
function onGetAchievementsInit(state, action) {
  const { handle, uuid } = action.payload;
  let res = state[handle];
  res = res ? _.clone(res) : {};
  res.achievements = { loadingUuid: uuid };
  return { ...state, [handle]: res };
}

/**
 * Finalizes the loading of member achievements.
 * @param {Object} state
 * @param {Object} error
 * @param {Array} payload.data
 * @param {String} payload.handle
 * @param {String} payload.uuid
 * @return {Object} New state.
 */
function onGetAchievementsDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to load member achievements', payload);
    fireErrorMessage('Failed to load member achievements');
    return state;
  }

  const { data, handle, uuid } = payload;
  if (uuid !== _.get(state[handle], 'achievements.loadingUuid')) return state;
  return {
    ...state,
    [handle]: {
      ...state[handle],
      achievements: { data, timestamp: Date.now() },
    },
  };
}

/**
 * Initializes the loading of member financial information.
 * @param {Object} state
 * @param {String} action.payload.handle
 * @param {String} action.payload.uuid
 * @return {Object} New state.
 */
function onGetFinancesInit(state, action) {
  const { handle, uuid } = action.payload;
  const envelop = {
    ...(state[handle] || {}),
    finances: {
      loadingUuid: uuid,
      timestamp: 0,
    },
  };
  return {
    ...state,
    [handle]: envelop,
  };
}

/**
 * Finalizes a pending loading of member financial information.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetFinancesDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to get user financial info', payload);
    fireErrorMessage('Failed to get user financial info', '');
    return state;
  }

  const { data, handle, uuid } = payload;
  if (uuid !== _.get(state[handle], 'finances.loadingUuid')) return state;
  return {
    ...state,
    [handle]: {
      ...state[handle],
      finances: {
        data,
        loadingUuid: '',
        timestamp: Date.now(),
      },
    },
  };
}

/**
 * Inits the loading of member stats.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetStatsInit(state, action) {
  const { handle, uuid } = action.payload;
  let res = state[handle];
  res = res ? _.clone(res) : {};
  res.stats = { loadingUuid: uuid };
  return {
    ...state,
    [handle]: res,
  };
}

/**
 * Finalizes the loading of member stats.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetStatsDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to get member stats', payload);
    fireErrorMessage('Failed to get member stats', '');
    return state;
  }

  const { data, handle, uuid } = payload;
  if (uuid !== _.get(state[handle], 'stats.loadingUuid')) return state;
  return {
    ...state,
    [handle]: {
      ...state[handle],
      stats: { data, timestamp: Date.now() },
    },
  };
}

/**
 * Creates a new Members reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Members reducer.
 */
function create(initialState = {}, mergeReducers = {}) {
  const a = actions.members;
  return handleActions({
    [a.drop]: onDrop,
    [a.dropAll]: onDropAll,
    [a.getAchievementsInit]: onGetAchievementsInit,
    [a.getAchievementsDone]: onGetAchievementsDone,
    [a.getFinancesInit]: onGetFinancesInit,
    [a.getFinancesDone]: onGetFinancesDone,
    [a.getStatsInit]: onGetStatsInit,
    [a.getStatsDone]: onGetStatsDone,
    ...mergeReducers,
  }, initialState);
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
 * @param {Object} options Optional. Options object for initial state.
 * @return Promise which resolves to the new reducer.
 */
export function factory(options = {}) {
  return Promise.resolve(create(options.initialState, options.mergeReducers));
}

/* Reducer with the default initial state. */
export default create();
