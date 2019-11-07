/**
 * @module "reducers.lookup"
 * @desc Reducer for {@link module:actions.lookup} actions.
 *
 * State segment managed by this reducer has the following structure:
 * @param {Array} skillTags='' skill tags.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import logger from '../utils/logger';
import actions from '../actions/lookup';

/**
 * Handles LOOKUP/GET_SKILL_TAGS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetSkillTagsDone(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get skill tags', payload);
    return { ...state, loadingSkillTagsError: true };
  }

  return ({
    ...state,
    loadingSkillTagsError: false,
    skillTags: payload,
  });
}

/**
 * Handles LOOKUP/GET_COUNTRIES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetCountriesDone(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get countries', payload);
    return { ...state, loadingCountriesError: true };
  }

  return ({
    ...state,
    loadingCountriesError: false,
    countries: payload,
  });
}

/**
 * Handles LOOKUP/GET_ALL_COUNTRIES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetAllCountriesDone(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get all countries', payload);
    return { ...state, loadingAllCountriesError: true };
  }

  return ({
    ...state,
    loadingAllCountriesError: false,
    allCountries: payload,
  });
}

/**
 * Creates a new Lookup reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Lookup reducer.
 */
function create(initialState = {}) {
  const a = actions.lookup;
  return handleActions({
    [a.getSkillTagsInit]: state => state,
    [a.getSkillTagsDone]: onGetSkillTagsDone,
    [a.getCountriesInit]: state => state,
    [a.getCountriesDone]: onGetCountriesDone,
    [a.getAllCountriesInit]: state => state,
    [a.getAllCountriesDone]: onGetAllCountriesDone,
  }, _.defaults(initialState, {
    skillTags: [],
    countries: [],
    allCountries: [],
  }));
}

/**
 * Factory which creates a new reducer.
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
