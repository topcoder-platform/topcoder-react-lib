/**
 * @module "reducers.reviewOpportunity"
 * @desc Reducer for state.reviewOpportunity
 * @todo Document state structure.
 */

import _ from 'lodash';
import { redux } from 'topcoder-react-utils';
import actions from '../actions/reviewOpportunity';

/**
 * Generates a list of unique terms ids required for the open review roles
 * with an agreed field
 *
 * @param {Object} details Review Opportuny details from API
 * @return {Array} List of unique terms
 */
function buildRequiredTermsList(details) {
  const roles = details.payments.map(payment => payment.role);

  const requiredTerms = _.uniqBy(
    details.challenge.terms
      // Sometimes roles such as Primary Reviewer have no directly equal
      // terms entry.  Include the plain Reviewer terms when present as a back-up.
      .filter(term => term.role === 'Reviewer' || _.includes(roles, term.role))
      .map(term => _.pick(term, ['termsOfUseId', 'agreed', 'title'])),
    term => term.termsOfUseId,
  );

  return requiredTerms || [];
}

/**
 * Handles REVIEW_OPPORTUNITY/GET__DETAILS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetDetailsDone(state, { payload, error }) {
  if (error) {
    return {
      ...state,
      authError: true,
      isLoadingDetails: false,
    };
  }

  return {
    ...state,
    details: payload,
    isLoadingDetails: false,
    requiredTerms: buildRequiredTermsList(payload),
  };
}

/**
 * Creates a new Review opportunity reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Review opportunity reducer.
 */
function create(initialState) {
  const a = actions.reviewOpportunity;
  return redux.handleActions({
    [a.cancelApplicationsInit]: state => state,
    [a.cancelApplicationsDone]: state => state,
    [a.getDetailsInit]: state => ({ ...state, isLoadingDetails: true }),
    [a.getDetailsDone]: onGetDetailsDone,
    [a.submitApplicationsInit]: state => state,
    [a.submitApplicationsDone]: state => state,
  }, _.defaults(initialState, {
    authError: false,
    details: null,
    isLoadingDetails: false,
    requiredTerms: [],
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @param {Object} options={} Optional. Options object for initial state.
 * @param {String} [options.auth.tokenV2=''] The V2 auth token
 * @param {String} [options.auth.tokenV3=''] The V3 auth token
 * @param {String} [options.reviewOpportunity.challenge.id=''] The challenge id.
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
export function factory(options = {}) {
  const challengeId = _.get(options, 'reviewOpportunity.challenge.id');

  if (challengeId) {
    const tokens = {
      tokenV2: _.get(options.auth, 'tokenV2'),
      tokenV3: _.get(options.auth, 'tokenV3'),
    };

    const a = actions.reviewOpportunity;
    return redux.resolveAction(a.getDetailsDone(challengeId, tokens.tokenV3))
      .then(({ error, payload }) => {
        const initialState = {};
        initialState.details = error ? null : payload;
        initialState.requiredTerms = error ? [] : buildRequiredTermsList(payload);
        create(initialState);
      });
  }

  return Promise.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default state.
 */
export default create();
