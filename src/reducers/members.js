/**
 * @module "reducers.members"
 * @desc Reducer for the Redux store segment that holds members data.
 * @todo Document state segment structure.
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
 * Inits the loading of member stats history.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetStatsHistoryInit(state, action) {
  const { handle, uuid } = action.payload;
  let res = state[handle];
  res = res ? _.clone(res) : {};
  res.statsHistory = { loadingUuid: uuid };
  return {
    ...state,
    [handle]: res,
  };
}

/**
 * Finalizes the loading of member stats history.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetStatsHistoryDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to get member statsHistory', payload);
    fireErrorMessage('Failed to get member statsHistory', '');
    return state;
  }

  const { data, handle, uuid } = payload;
  if (uuid !== _.get(state[handle], 'statsHistory.loadingUuid')) return state;
  return {
    ...state,
    [handle]: {
      ...state[handle],
      statsHistory: { data, timestamp: Date.now() },
    },
  };
}

/**
 * Inits the loading of member stats distribution.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetStatsDistributionInit(state, action) {
  const { handle, uuid } = action.payload;
  let res = state[handle];
  res = res ? _.clone(res) : {};
  res.statsDistribution = { loadingUuid: uuid };
  return {
    ...state,
    [handle]: res,
  };
}

/**
 * Finalizes the loading of member stats distribution.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetStatsDistributionDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to get member statsDistribution', payload);
    fireErrorMessage('Failed to get member statsDistribution', '');
    return state;
  }

  const { data, handle, uuid } = payload;
  if (uuid !== _.get(state[handle], 'statsDistribution.loadingUuid')) return state;
  return {
    ...state,
    [handle]: {
      ...state[handle],
      statsDistribution: { data, timestamp: Date.now() },
    },
  };
}

/**
 * Inits the loading of member active challenges.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetActiveChallengesInit(state, action) {
  const { handle } = action.payload;
  return {
    ...state,
    [handle]: { ...state[handle], activeChallengesCount: null },
  };
}

/**
 * Finalizes the loading of member active challenges.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetActiveChallengesDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to get member active challenges', payload);
    fireErrorMessage('Failed to get member active challenges', '');
    return state;
  }

  const { handle, challenges } = payload;

  return {
    ...state,
    [handle]: {
      ...state[handle],
      activeChallengesCount: challenges.length,
    },
  };
}

/**
 * Inits the loading of member subtrack challenges.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetSubtrackChallengesInit(state, { payload }) {
  const { handle, uuid } = payload;
  return {
    ...state,
    [handle]: { ...state[handle], loadingSubTrackChallengesUUID: uuid },
  };
}

/**
 * Finalizes the loading of member subtrack challenges.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetSubtrackChallengesDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to get member subtrack challenges', payload);
    fireErrorMessage('Failed to get member subtrack challenges', '');
    return state;
  }

  const {
    uuid,
    challenges,
    refresh,
    handle,
  } = payload;
  if (uuid !== state[handle].loadingSubTrackChallengesUUID) return state;

  return {
    ...state,
    [handle]: {
      ...state[handle],
      subtrackChallenges: (state[handle].subtrackChallenges && !refresh)
        ? [...state[handle].subtrackChallenges, ...challenges]
        : challenges,
      // if current query returns 0 item, mark it completed
      subtrackChallengesHasMore: challenges && challenges.length > 0,
      loadingSubTrackChallengesUUID: '',
    },
  };
}

/**
 * Inits the loading of member SRMs.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetUserSRMInit(state, { payload }) {
  const { handle, uuid } = payload;
  return {
    ...state,
    [handle]: { ...state[handle], loadingSRMUUID: uuid },
  };
}

/**
 * Finalizes the loading of member SRMs.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetUserSRMDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to get member SRMs', payload);
    fireErrorMessage('Failed to get member SRMs', '');
    return state;
  }

  const {
    uuid,
    srms,
    refresh,
    handle,
  } = payload;
  if (uuid !== state[handle].loadingSRMUUID) return state;

  return {
    ...state,
    [handle]: {
      ...state[handle],
      userSRMs: (state[handle].userSRMs && !refresh) ? [...state[handle].userSRMs, ...srms] : srms,
      userSRMHasMore: srms && srms.length > 0, // if current query returns 0 item, mark it completed
      loadingSRMUUID: '',
    },
  };
}

/**
 * Inits the loading of member marathons.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetUserMarathonInit(state, { payload }) {
  const { handle, uuid } = payload;
  return {
    ...state,
    [handle]: { ...state[handle], loadingMarathonUUID: uuid },
  };
}

/**
 * Finalizes the loading of member marathons.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetUserMarathonDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to get member marathons', payload);
    fireErrorMessage('Failed to get member marathons', '');
    return state;
  }

  const {
    uuid,
    marathons,
    refresh,
    handle,
  } = payload;
  if (uuid !== state[handle].loadingMarathonUUID) return state;

  return {
    ...state,
    [handle]: {
      ...state[handle],
      userMarathons: (state[handle].userMarathons && !refresh)
        ? [...state[handle].userMarathons, ...marathons.challenges]
        : marathons.challenges,
      // if current query returns 0 item, mark it completed
      userMarathonHasMore: marathons && marathons.challenges && marathons.challenges.length > 0,
      loadingMarathonUUID: '',
    },
  };
}

/**
 * Creates a new Members reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Members reducer.
 */
function create(initialState = {}) {
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
    [a.getStatsHistoryInit]: onGetStatsHistoryInit,
    [a.getStatsHistoryDone]: onGetStatsHistoryDone,
    [a.getStatsDistributionInit]: onGetStatsDistributionInit,
    [a.getStatsDistributionDone]: onGetStatsDistributionDone,
    [a.getActiveChallengesInit]: onGetActiveChallengesInit,
    [a.getActiveChallengesDone]: onGetActiveChallengesDone,
    [a.getSubtrackChallengesInit]: onGetSubtrackChallengesInit,
    [a.getSubtrackChallengesDone]: onGetSubtrackChallengesDone,
    [a.getUserSrmInit]: onGetUserSRMInit,
    [a.getUserSrmDone]: onGetUserSRMDone,
    [a.getUserMarathonInit]: onGetUserMarathonInit,
    [a.getUserMarathonDone]: onGetUserMarathonDone,
  }, initialState);
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
