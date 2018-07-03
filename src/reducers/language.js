/**
 * @module "reducers.profile"
 * @desc Reducer for Profile API data
 * @todo Document reducer state structure.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import actions from '../actions/language';
import logger from '../utils/logger';
import { fireErrorMessage } from '../utils/errors';



/**
 * Handles PROFILE/GET_EXTERNAL_ACCOUNTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetLanguageDone(state, { payload, error }) {
  console.log("payload", payload);
  if (error) {
    return { ...state };
  }
  console.log("Language", payload.result.content[0]);
  return ({
    ...state, language: payload.result.content[0]
  });
}

// function onUpdateLanguageDone(state, { payload, error }) {
//   const newState = { ...state, updatingLanguage: false };

//   if (error) {
//     logger.error('Failed to update user language', payload);
//     fireErrorMessage('ERROR: Failed to update user language!');
//     return newState;
//   }
// // console.log("{Payload Update basic info/ basic info reducers: ", payload);
//   // if (!newState.info || newState.info.handle !== payload.handle) {
//   //   return newState;
//   // }
// //   console.log("{New State Update basic info/ basic info reducers: ", newState);
//   return {
//     ...newState,
//     language: {
//       ...newState.language,
//       ...payload,
//     },
//   };
// }

/**
 * Creates a new Profile reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Profile reducer.
 */
function create(initialState) {
  const a = actions.language;
  return handleActions({
    [a.getLanguageInit]: state => state,
    [a.getLanguageDone]: onGetLanguageDone,
    // [a.updateLanguageInit]: state => ({ ...state, updatingBasicInfo: true }),
    // [a.updateLanguageDone]: onUpdateBasicInfoDone,
  }, _.defaults(initialState, {language: null}));
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
