/**
 * @module "reducers.looker"
 * @desc Reducer for {@link module:actions.looker} actions.
 *
 * State segment managed by this reducer has the following structure:
 * @param {Object} dataSet={}, index by lookerId.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import actions from '../actions/looker';

/**
 * Handles LOOKER/GET_LOOKER_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetLookerDone(state, { payload }) {
  const {
    data: {
      res,
      error,
    },
    lookerId,
  } = payload;

  const newDataSet = {
    ...state.dataSet,
  };
  newDataSet[lookerId] = {
    lookerData: res,
    error,
    msg: res.message,
  };
  return ({
    ...state,
    dataSet: newDataSet,
  });
}

/**
 * Creates a new Looker reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Looker reducer.
 */
function create(initialState = {}) {
  const a = actions.looker;
  return handleActions({
    [a.getLookerDone]: onGetLookerDone,
  }, _.defaults(initialState, {
    dataSet: {},
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
