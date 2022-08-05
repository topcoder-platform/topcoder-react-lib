/**
 * Reducer for TC Academy
 */

import { handleActions } from 'redux-actions';
import actions from 'actions/tc-academy';

/**
 * Handles TCACADEMY/GET_TCA_CERTIFICATIONS_INIT action.
 * @param {Object} state
 * @return {Object} New state
 */
function onGetTcaCertificationsInit(state) {
  return {
    ...state,
    certifications: [],
    failed: false,
    loading: true,
  };
}

/**
  * Handles TCACADEMY/GET_TCA_CERTIFICATIONS_DONE actions.
  * @param {Object} state Previous state.
  * @param {Object} action Action.
  */
function onGetTcaCertificationsDone(state, action) {
  return {
    ...state,
    certifications: [],
    ...(action.error ? {} : action.payload),
    failed: action.error,
    loading: false,
  };
}

/**
  * Creates a new challenges reducer with the specified initial state.
  * @param {Object} initialState Optional. Initial state.
  * @return challenges reducer.
  */
function create(initialState) {
  const a = actions.tcAcademy;

  return handleActions({
    [a.getTcaCertificationsInit]: onGetTcaCertificationsInit,
    [a.getTcaCertificationsDone]: onGetTcaCertificationsDone,
  }, initialState || {});
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

/* Default reducer with empty initial state. */
export default create();
