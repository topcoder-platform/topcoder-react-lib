/**
 * @module "reducers.profile"
 * @desc Reducer for Profile API data
 * @todo Document reducer state structure.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import actions from '../actions/devices';
import logger from '../utils/logger';
import { fireErrorMessage } from '../utils/errors';



/**
 * Handles PROFILE/GET_EXTERNAL_ACCOUNTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetDevicesDone(state, { payload, error }) {
  console.log("payload", payload);
  if (error) {
    return { ...state };
  }
  console.log("devices", payload.result.content[0]);
  return ({
    ...state, devices: payload.result.content[0]
  });
}

function onUpdateDevicesDone(state, { payload, error }) {
  const newState = { ...state, updatingDevices: false };

  if (error) {
    logger.error('Failed to update devices info', payload);
    fireErrorMessage('ERROR: Failed to update devices info!');
    return newState;
  }
console.log("{Payload Update devices/ devices reducers: ", payload);
  // if (!newState.info || newState.info.handle !== payload.handle) {
  //   return newState;
  // }
  console.log("{New State Update devices/ devices reducers: ", newState);
  return {
    ...newState,
    devices: {
      ...newState.devices,
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
  const a = actions.devices;
  return handleActions({
    [a.getDevicesInit]: state => state,
    [a.getDevicesDone]: onGetDevicesDone,
    [a.updateDevicesInit]: state => ({ ...state, updatingDevices: true }),
    [a.updateDevicesDone]: onUpdateDevicesDone,
  }, _.defaults(initialState, {devices: null}));
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
