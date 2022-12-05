/**
 * @module "reducers.errors"
 * @desc Redux Reducer for application-wide error handling.
 *
 * Description:
 *   Implements state reducers for application-wide error handling.
 * @todo Document state segment structure.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import actions from '../actions/errors';
import { ERROR_ICON_TYPES } from '../utils/errors';

const initialErrorIconState = {
  [ERROR_ICON_TYPES.NETWORK]: [],
  [ERROR_ICON_TYPES.API]: [],
};

/**
 * Creates a new Errors reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Errors reducer.
 */
function create(initialState) {
  const a = actions.errors;

  return handleActions({
    // Remove the first element (oldest error)
    [a.clearError]: state => ({ ...state, alerts: state.alerts.slice(1) }),
    [a.newError]: (state, { payload }) => ({
      ...state,
      // eslint-disable-next-line max-len
      alerts: [...state.alerts, { title: payload.title, details: payload.details, support: payload.support }],
    }),
    [a.clearAllErrorIcons]: state => ({
      ...state,
      icons: initialErrorIconState,
    }),
    [a.setErrorIcon]: (state, { payload: { id, title, message } }) => ({
      ...state,
      icons: {
        ...state.icons,
        [id]: [...state.icons[id], { title, message }],
      },
    }),
    [a.clearErrorIcon]: (state, { payload: { id } }) => ({
      ...state,
      icons: { ...state.icons, [id]: [] },
    }),
  }, _.defaults(initialState, { alerts: [], icons: initialErrorIconState }));
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
