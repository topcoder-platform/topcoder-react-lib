/**
 * @module "reducers.profile"
 * @desc Reducer for Profile API data
 * @todo Document reducer state structure.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import actions from '../actions/profile';

/**
 * Handles PROFILE/GET_ACHIEVEMENTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetAchievementsDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({
    ...state,
    achievements: payload.Achievements,
    copilot: payload.copilot,
    country: payload.country,
    loadingError: false,
  });
}

/**
 * Handles PROFILE/GET_EXTERNAL_ACCOUNTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetExternalAccountsDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({
    ...state,
    externalAccounts: payload,
  });
}

/**
 * Handles PROFILE/GET_EXTERNAL_LINKS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetExternalLinksDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({
    ...state,
    externalLinks: payload,
  });
}

/**
 * Handles PROFILE/GET_INFO_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetInfoDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({ ...state, info: payload, loadingError: false });
}

/**
 * Handles PROFILE/GET_SKILLS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetSkillsDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({ ...state, skills: payload.skills, loadingError: false });
}

/**
 * Handles PROFILE/GET_STATS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetStatsDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({ ...state, stats: payload, loadingError: false });
}

/**
 * Creates a new Profile reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Profile reducer.
 */
function create(initialState) {
  const a = actions.profile;
  return handleActions({
    [a.loadProfile]: (state, action) => ({ ...state, profileForHandle: action.payload }),
    [a.getAchievementsInit]: state => state,
    [a.getAchievementsDone]: onGetAchievementsDone,
    [a.getExternalAccountsInit]: state => state,
    [a.getExternalAccountsDone]: onGetExternalAccountsDone,
    [a.getExternalLinksInit]: state => state,
    [a.getExternalLinksDone]: onGetExternalLinksDone,
    [a.getInfoInit]: state => state,
    [a.getInfoDone]: onGetInfoDone,
    [a.getSkillsInit]: state => state,
    [a.getSkillsDone]: onGetSkillsDone,
    [a.getStatsInit]: state => state,
    [a.getStatsDone]: onGetStatsDone,
  }, _.defaults(initialState, {
    achievements: null,
    copilot: false,
    country: '',
    info: null,
    loadingError: false,
    skills: null,
    stats: null,
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @returns {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
export function factory() {
  return Promise.resolve(create());
}

/* Reducer with the default initial state. */
export default create();
