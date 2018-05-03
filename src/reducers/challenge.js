/**
 * Reducer for state.challenge
 */

import _ from 'lodash';

import { handleActions } from 'redux-actions';
import { redux } from 'topcoder-react-utils';

import actions from '../actions/challenge';
import smpActions from '../actions/smp';
import logger from '../utils/logger';
import { fireErrorMessage } from '../utils/errors';
import { getOptionTokens } from '../utils/tc';

import mySubmissionsManagement from './my-submissions-management';

/**
 * Handles CHALLENGE/GET_DETAILS_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state
 */
function onGetDetailsInit(state, action) {
  const challengeId = action.payload;
  return state.details && _.toString(state.details.id) !== challengeId ? {
    ...state,
    fetchChallengeFailure: false,
    loadingDetailsForChallengeId: challengeId,
    details: null,
  } : {
    ...state,
    fetchChallengeFailure: false,
    loadingDetailsForChallengeId: challengeId,
  };
}

/**
 * Handles CHALLENGE/GET_DETAILS_DONE action.
 * Note, that it silently discards received details if the ID of received
 * challenge mismatches the one stored in loadingDetailsForChallengeId field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetDetailsDone(state, action) {
  if (action.error) {
    logger.error('Failed to get challenge details!', action.payload);
    fireErrorMessage(
      'ERROR: Failed to load the challenge',
      'Please, try again a bit later',
    );
    return {
      ...state,
      fetchChallengeFailure: action.error,
      loadingDetailsForChallengeId: '',
    };
  }

  const details = action.payload;
  if (_.toString(details.id) !== state.loadingDetailsForChallengeId) {
    return state;
  }

  return {
    ...state,
    details,
    fetchChallengeFailure: false,
    loadingDetailsForChallengeId: '',
  };
}

/**
 * Handles CHALLENGE/GET_SUBMISSION_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetSubmissionsInit(state, action) {
  return {
    ...state,
    loadingSubmissionsForChallengeId: action.payload,
    mySubmissions: { challengeId: '', v2: null },
  };
}

/**
 * Handles challengeActions.fetchSubmissionsDone action.
 * @param {Object} state Previous state.
 * @param {Object} action Action.
 */
function onGetSubmissionsDone(state, action) {
  if (action.error) {
    logger.error('Failed to get user\'s submissions for the challenge', action.payload);
    return {
      ...state,
      loadingSubmissionsForChallengeId: '',
      mySubmissions: { challengeId: '', v2: null },
    };
  }

  const { challengeId, submissions } = action.payload;
  if (challengeId !== state.loadingSubmissionsForChallengeId) return state;

  return {
    ...state,
    loadingSubmissionsForChallengeId: '',
    mySubmissions: { challengeId, v2: submissions },
  };
}

/**
 * Handles challengeActions.fetchCheckpointsDone action.
 * @param {Object} state Previous state.
 * @param {Object} action Action.
 */
function onFetchCheckpointsDone(state, action) {
  if (action.error) {
    return {
      ...state,
      loadingCheckpoints: false,
    };
  }
  if (state.details && state.details.id === action.payload.challengeId) {
    return {
      ...state,
      checkpoints: action.payload.checkpoints,
      loadingCheckpoints: false,
    };
  }
  return state;
}

/**
 * Handles CHALLENGE/LOAD_RESULTS_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onLoadResultsInit(state, { payload }) {
  return { ...state, loadingResultsForChallengeId: payload };
}

/**
 * Handles CHALLENGE/LOAD_RESULTS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onLoadResultsDone(state, action) {
  if (action.payload.challengeId !== state.loadingResultsForChallengeId) {
    return state;
  }
  if (action.error) {
    logger.error(action.payload);
    return {
      ...state,
      loadingResultsForChallengeId: '',
      results: null,
      resultsLoadedForChallengeId: '',
    };
  }
  return {
    ...state,
    loadingResultsForChallengeId: '',
    results: action.payload.results,
    resultsLoadedForChallengeId: action.payload.challengeId,
  };
}

/**
 * Handles CHALLENGE/REGISTER_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onRegisterDone(state, action) {
  if (action.error) {
    logger.error('Failed to register for the challenge!', action.payload);
    fireErrorMessage('ERROR: Failed to register for the challenge!');
    return { ...state, registering: false };
  }
  /* As a part of registration flow we silently update challenge details,
   * reusing for this purpose the corresponding action handler. Thus, we
   * should also reuse corresponding reducer to generate proper state. */
  return onGetDetailsDone({
    ...state,
    registering: false,
    loadingDetailsForChallengeId: _.toString(state.details.id),
  }, action);
}

/**
 * Handles CHALLENGE/UNREGISTER_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onUnregisterDone(state, action) {
  if (action.error) {
    logger.error('Failed to register for the challenge!', action.payload);
    fireErrorMessage('ERROR: Failed to unregister for the challenge!');
    return { ...state, unregistering: false };
  }
  /* As a part of unregistration flow we silently update challenge details,
   * reusing for this purpose the corresponding action handler. Thus, we
   * should also reuse corresponding reducer to generate proper state. */
  return onGetDetailsDone({
    ...state,
    unregistering: false,
    loadingDetailsForChallengeId: _.toString(state.details.id),
  }, action);
}

/**
 * Handles CHALLENGE/UPDATE_CHALLENGE_INIT.
 * @param {Object} state Old state.
 * @param {Object} actions Action.
 * @return {Object} New state.
 */
function onUpdateChallengeInit(state, { payload }) {
  return { ...state, updatingChallengeUuid: payload };
}

/**
 * Handles CHALLENGE/UPDATE_CHALLENGE_DONE.
 * @param {Object} state Old state.
 * @param {Object} actions Action.
 * @return {Object} New state.
 */
function onUpdateChallengeDone(state, { error, payload }) {
  if (error) {
    fireErrorMessage('Failed to save the challenge!', '');
    logger.error('Failed to save the challenge', payload);
    return state;
  }
  if (payload.uuid !== state.updatingChallengeUuid) return state;

  /* Due to the normalization of challenge APIs responses done when a challenge
   * is loaded, many pieces of our code expect different information in a format
   * different from API v3 response, thus if we just save entire payload.res
   * into the Redux state segment, it will break our app. As a rapid fix, let's
   * just save only the data which are really supposed to be updated in the
   * current use case (editing of challenge specs). */
  const res = _.pick(payload.res, [
    'detailedRequirements',
    'introduction',
    'round1Introduction',
    'round2Introduction',
    'submissionGuidelines',
  ]);

  return {
    ...state,
    details: {
      ...state.details,
      ...res,
    },
    updatingChallengeUuid: '',
  };
}

/**
 * Creates a new Challenge reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Challenge reducer.
 */
function create(initialState, mergeReducers = {}) {
  const a = actions.challenge;
  return handleActions({
    [a.dropCheckpoints]: state => ({ ...state, checkpoints: null }),
    [a.dropResults]: state => ({ ...state, results: null }),
    [a.getDetailsInit]: onGetDetailsInit,
    [a.getDetailsDone]: onGetDetailsDone,
    [a.getSubmissionsInit]: onGetSubmissionsInit,
    [a.getSubmissionsDone]: onGetSubmissionsDone,
    [smpActions.smp.deleteSubmissionDone]: (state, { payload }) => ({
      ...state,
      mySubmissions: {
        ...state.mySubmissions,
        v2: state.mySubmissions.v2.filter(subm => (
          subm.submissionId !== payload
        )),
      },
    }),
    [a.registerInit]: state => ({ ...state, registering: true }),
    [a.registerDone]: onRegisterDone,
    [a.unregisterInit]: state => ({ ...state, unregistering: true }),
    [a.unregisterDone]: onUnregisterDone,
    [a.loadResultsInit]: onLoadResultsInit,
    [a.loadResultsDone]: onLoadResultsDone,
    [a.fetchCheckpointsInit]: state => ({
      ...state,
      checkpoints: null,
      loadingCheckpoints: true,
    }),
    [a.fetchCheckpointsDone]: onFetchCheckpointsDone,
    [a.updateChallengeInit]: onUpdateChallengeInit,
    [a.updateChallengeDone]: onUpdateChallengeDone,
    ...mergeReducers,
  }, _.defaults(initialState, {
    details: null,
    loadingCheckpoints: false,
    loadingDetailsForChallengeId: '',
    loadingResultsForChallengeId: '',
    mySubmissions: {},
    checkpoints: null,
    registering: false,
    results: null,
    resultsLoadedForChallengeId: '',
    unregistering: false,
    updatingChallengeUuid: '',
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
 * mySubmissionsManagement: The submission management reducer
 *
 * auth.tokenV2: The V2 auth token
 *
 * auth.tokenV3: The V3 auth token
 *
 * challenge.challengeDetails.id: The challenge id
 *
 * challenge.challengeDetails.mySubmission: The flag indicates whether load my submission
 *
 * @param {Object} options Optional. Options object for initial state.
 * @return Promise which resolves to the new reducer.
 */
export function factory(options = {}) {
  /* Server-side rendering of Submission Management Page. */

  /* TODO: This shares some common logic with the next "if" block, which
   * should be re-used there. */
  /* TODO: For completely server-side rendering it is also necessary to load
   * terms, etc. */

  const tokens = getOptionTokens(options);

  let state = options.initialState || {};
  const challengeId = _.get(options, 'challenge.challengeDetails.id');
  const mySubmission = _.get(options, 'challenge.challengeDetails.mySubmission');

  const smpReducer = options.mySubmissionsManagement || mySubmissionsManagement;

  if (challengeId && !mySubmission) {
    return redux.resolveAction(actions.challenge.getDetailsDone(
      challengeId,
      tokens.tokenV3,
      tokens.tokenV2,
    )).then((details) => {
      const track = _.get(details, 'payload.track', '').toLowerCase();
      const checkpointsPromise = track === 'design' ? (
        redux.resolveAction(actions.challenge.fetchCheckpointsDone(tokens.tokenV2, challengeId))
      ) : null;
      const resultsPromise = _.get(details, 'payload.status', '') === 'COMPLETED' ? (
        redux.resolveAction(actions.challenge.loadResultsDone(tokens, challengeId, track))
      ) : null;
      return Promise.all([details, checkpointsPromise, resultsPromise]);
    }).then(([details, checkpoints, results]) => {
      state = {
        ...state,
        loadingCheckpoints: true,
        loadingDetailsForChallengeId: challengeId,
        loadingResultsForChallengeId: challengeId,
      };
      state = onGetDetailsDone(state, details);
      if (checkpoints) state = onFetchCheckpointsDone(state, checkpoints);
      if (results) state = onLoadResultsDone(state, results);
      return state;
    }).then(res => redux.combineReducers(
      create(res, options.mergeReducers),
      { mySubmissionsManagement: smpReducer },
    ));
  }

  if (challengeId && mySubmission) {
    return Promise.all([
      redux.resolveAction(actions.challenge.getDetailsDone(
        challengeId,
        tokens.tokenV3,
        tokens.tokenV2,
      )),
      redux.resolveAction(actions.challenge.getSubmissionsDone(
        challengeId,
        tokens.tokenV2,
      )),
    ]).then(([challenge, submissions]) => {
      state = {
        ...state,
        loadingSubmissionsForChallengeId: challengeId,
        loadingDetailsForChallengeId: challengeId,
      };
      state = onGetDetailsDone(state, challenge);
      return onGetSubmissionsDone(state, submissions);
    }).then(res => redux.combineReducers(
      create(res, options.mergeReducers),
      { mySubmissionsManagement: smpReducer },
    ));
  }

  /* Otherwise this part of Redux state is initialized empty. */
  return Promise.resolve(redux.combineReducers(
    create(state, options.mergeReducers),
    { mySubmissionsManagement: smpReducer },
  ));
}

/* Reducer with the default initial state. */
export default redux.combineReducers(create(), { mySubmissionsManagement });
