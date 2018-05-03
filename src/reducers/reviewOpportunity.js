/**
 * Reducer for state.reviewOpportunity
 */

import _ from 'lodash';
import { redux } from 'topcoder-react-utils';
import { getOptionTokens } from '../utils/tc';
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
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Review opportunity reducer.
 */
function create(initialState, mergeReducers = {}) {
  const a = actions.reviewOpportunity;
  return redux.handleActions({
    [a.cancelApplicationsInit]: state => state,
    [a.cancelApplicationsDone]: state => state,
    [a.getDetailsInit]: state => ({ ...state, isLoadingDetails: true }),
    [a.getDetailsDone]: onGetDetailsDone,
    [a.submitApplicationsInit]: state => state,
    [a.submitApplicationsDone]: state => state,
    ...mergeReducers,
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
 *
 * initialState: The initial state
 *
 * mergeReducers: The additional reducers to merge
 *
 * auth.tokenV2: The V2 auth token
 *
 * auth.tokenV3: The V3 auth token
 *
 * reviewOpportunity.challenge.id: The challenge id
 *
 * @param {Object} options Optional. Options object for initial state.
 * @return Promise which resolves to the new reducer.
 */
export function factory(options = {}) {
  const challengeId = _.get(options, 'reviewOpportunity.challenge.id');

  if (challengeId) {
    const tokens = getOptionTokens(options);

    const a = actions.reviewOpportunity;
    return redux.resolveAction(a.getDetailsDone(challengeId, tokens.tokenV3))
      .then(({ error, payload }) => {
        const initialState = options.initialState || {};
        initialState.details = error ? null : payload;
        initialState.requiredTerms = error ? [] : buildRequiredTermsList(payload);
        create(initialState, options.mergeReducers);
      });
  }

  return Promise.resolve(create(options.initialState, options.mergeReducers));
}

/* Reducer with the default initial state. */
export default create();
