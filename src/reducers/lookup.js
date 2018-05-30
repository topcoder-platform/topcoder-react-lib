/**
 * @module "reducers.lookup"
 * @desc Reducer for {@link module:actions.lookup} actions.
 *
 * State segment managed by this reducer has the following structure:
 * @param {Array} approvedSkills='' approved skill tags.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import logger from '../utils/logger';
import actions from '../actions/lookup';

/**
 * Handles LOOKUP/GET_APPROVED_SKILLS action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetApprovedSkills(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get approved skill tags', payload);
    return { ...state, loadingApprovedSkillsError: true };
  }

  return ({
    ...state,
    loadingApprovedSkillsError: false,
    approvedSkills: payload,
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
    [a.getApprovedSkills]: onGetApprovedSkills,
  }, _.defaults(initialState, {
    approvedSkills: [],
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
