/**
 * @module "reducers.profile"
 * @desc Reducer for Profile API data
 * @todo Document reducer state structure.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import actions from '../actions/education';
import logger from '../utils/logger';
import { fireErrorMessage } from '../utils/errors';



/**
 * Handles PROFILE/GET_EXTERNAL_ACCOUNTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetEducationDone(state, { payload, error }) {
  console.log("payload", payload);
  if (error) {
    return { ...state };
  }
  console.log("Education", payload.result.content[0]);
  return ({
    ...state, education: payload.result.content[0]
  });
}

function onUpdateEducationDone(state, { payload, error }) {
  const newState = { ...state, updatingEducation: false };

  if (error) {
    logger.error('Failed to update user education', payload);
    fireErrorMessage('ERROR: Failed to update user education!');
    return newState;
  }
// console.log("{Payload Update basic info/ basic info reducers: ", payload);
  // if (!newState.info || newState.info.handle !== payload.handle) {
  //   return newState;
  // }
//   console.log("{New State Update basic info/ basic info reducers: ", newState);
  return {
    ...newState,
    education: {
      ...newState.education,
      ...payload,
    },
  };
}

/**
 * Creates a new Profile reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Profile reducer.
 */
function create(initialState) {
  console.log("Entered create of edu reducer");
  const a = actions.education;
  return handleActions({
    [a.getEducationInit]: state => state,
    [a.getEducationDone]: onGetEducationDone,
    [a.updateEducationInit]: state => ({ ...state, updatingEducation: true }),
    [a.updateEducationDone]: onUpdateEducationDone,
  }, _.defaults(initialState, {education: null}));
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
