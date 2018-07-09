/**
 * @module "reducers.profile"
 * @desc Reducer for Profile API data
 * @todo Document reducer state structure.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import actions from '../actions/software';
import logger from '../utils/logger';
import { fireErrorMessage } from '../utils/errors';



/**
 * Handles PROFILE/GET_EXTERNAL_ACCOUNTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetSoftwareDone(state, { payload, error }) {
  console.log("payload", payload);
  if (error) {
    return { ...state };
  }
  console.log("software", payload.result.content[0]);
  return ({
    ...state, software: payload.result.content[0]
  });
}

function onUpdateSoftwareDone(state, { payload, error }) {
  const newState = { ...state, updatingSoftware: false };

  if (error) {
    logger.error('Failed to update software info', payload);
    fireErrorMessage('ERROR: Failed to update software info!');
    return newState;
  }
console.log("{Payload Update software/ software reducers: ", payload);
  // if (!newState.info || newState.info.handle !== payload.handle) {
  //   return newState;
  // }
  console.log("{New State Update software/ software reducers: ", newState);
  return {
    ...newState,
    software: {
      ...newState.software,
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
  const a = actions.software;
  return handleActions({
    [a.getSoftwareInit]: state => state,
    [a.getSoftwareDone]: onGetSoftwareDone,
    [a.updateSoftwareInit]: state => ({ ...state, updatingSoftware: true }),
    [a.updateSoftwareDone]: onUpdateSoftwareDone,
  }, _.defaults(initialState, {software: null}));
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
