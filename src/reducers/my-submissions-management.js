/**
 * @module "reducers.my-submissions-management"
 * @desc  This reducer and corresponding actions control the logic for
 *  submission management.
 * @todo Document state segment structure.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';

import actions from '../actions/smp';

/**
 * Creates a new Submission management reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Submission management reducer.
 */
function create(initialState) {
  return handleActions({

    [actions.smp.deleteSubmissionDone]: state => ({
      ...state,
      deletingSubmission: false,
    }),

    [actions.smp.deleteSubmissionInit]: state => ({
      ...state,
      deletingSubmission: true,
    }),

  }, _.defaults(initialState, {}));
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
