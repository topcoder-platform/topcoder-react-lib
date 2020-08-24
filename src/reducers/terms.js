/**
 * @module "reducers.terms"
 * @desc Reducer for state.terms.
 * @todo Document state segment structure.
 */
import _ from 'lodash';
import { redux } from 'topcoder-react-utils';
import logger from '../utils/logger';
import actions from '../actions/terms';

/**
 * sort terms by agreed status
 * @param  {Array} terms terms to sort
 * @return {Array}       sorted terms
 */
function sortTerms(terms) {
  return _.sortBy(terms, t => (t.agreed ? 0 : 1));
}

/**
 * Handles TERMS/GET_TERMS_DONE action.
 * Note, that it silently discards received terms if the entity of received data
 * mismatches the one stored in loadingTermsForEntity
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetTermsDone(state, action) {
  if (action.error) {
    logger.error('Failed to get terms!', action.payload);
    return {
      ...state,
      terms: [],
      getTermsFailure: action.error,
      loadingTermsForEntity: null,
    };
  }

  if (!_.isEqual(action.payload.entity, state.loadingTermsForEntity)) {
    return state;
  }

  return {
    ...state,
    entity: action.payload.entity,
    terms: sortTerms(action.payload.terms),
    getTermsFailure: false,
    loadingTermsForEntity: null,
  };
}

/**
 * Handles TERMS/GET_TERMS_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetTermsInit(state, action) {
  return {
    ...state,
    getTermsFailure: false,
    loadingTermsForEntity: action.payload,
    terms: [],
    entity: action.payload,
  };
}

/**
 * Handles TERMS/CHECK_STATUS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onCheckStatusDone(state, action) {
  if (action.error) {
    logger.error('Check terms status failed!', action.payload);
    return {
      ...state,
      checkingStatus: false,
      checkStatusError: action.payload,
      canRegister: false,
    };
  }
  const canRegister = _.every(action.payload, 'agreed');
  const selectedTerm = _.find(action.payload, t => !t.agreed);
  return {
    ...state,
    checkingStatus: false,
    checkStatusError: false,
    canRegister,
    terms: sortTerms(action.payload),
    selectedTerm,
  };
}

/**
 * Handles TERMS/GET_TERM_DETAILS_DONE action.
 * Note, that it silently discards received details if the termId of received
 * mismatches the one stored in loadingDetailsForTermId field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetTermDetailsDone(state, action) {
  if (action.error) {
    logger.error('Failed to get term details!', action.payload);
    return {
      ...state,
      details: null,
      getTermDetailsFailure: action.payload,
      loadingDetailsForTermId: '',
    };
  }

  if (_.toString(action.payload.termId) !== state.loadingDetailsForTermId) {
    return state;
  }

  return {
    ...state,
    ...action.payload,
    getTermDetailsFailure: false,
    loadingDetailsForTermId: '',
  };
}

/**
 * Handles TERMS/GET_DOCU_SIGN_URL_DONE action.
 * Note, that it silently discards received url if the templateId of received
 * mismatches the one stored in loadingDocuSignUrl field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetDocuSignUrlDone(state, action) {
  if (action.error) {
    logger.error('Failed to get docu sign url!', action.payload);
    return {
      ...state,
      docuSignUrl: '',
      getDocuSignUrlFailure: action.payload,
      loadingDocuSignUrl: '',
    };
  }

  if (_.toString(action.payload.templateId) !== state.loadingDocuSignUrl) {
    return state;
  }
  return {
    ...state,
    ...action.payload,
    getDocuSignUrlFailure: false,
    loadingDocuSignUrl: '',
  };
}

/**
 * Handles TERMS/AGREE_TERM_DONE action.
 * Note, that it silently discards received result if the termId of received
 * mismatches the one stored in agreeingTerm field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onAgreeTermDone(state, action) {
  if (action.error) {
    logger.error('Failed to agree term!', action.payload);
    return {
      ...state,
      agreeTermFailure: action.payload,
      agreeingTerm: '',
    };
  }

  if (_.toString(action.payload.termId) !== state.agreeingTerm) {
    return state;
  }
  if (action.payload.success) {
    const terms = _.cloneDeep(state.terms);
    const term = _.find(terms, ['id', action.payload.termId]);
    term.agreed = true;
    const selectedTerm = _.find(terms, t => !t.agreed);
    return {
      ...state,
      terms,
      selectedTerm,
      agreeTermFailure: false,
      agreeingTerm: '',
    };
  }
  return {
    ...state,
    agreeTermFailure: false,
    agreeingTerm: '',
  };
}

/**
 * Creates a new Profile reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function(state, action): state} Profile reducer.
 */
function create(initialState) {
  return redux.handleActions({
    [actions.terms.getTermsInit]: onGetTermsInit,
    [actions.terms.getTermsDone]: onGetTermsDone,
    [actions.terms.getTermDetailsInit]: (state, { payload }) => ({
      ...state,
      getTermDetailsFailure: false,
      loadingDetailsForTermId: payload,
      details: null,
      termId: payload,
    }),
    [actions.terms.getTermDetailsDone]: onGetTermDetailsDone,
    [actions.terms.getDocuSignUrlInit]: (state, { payload }) => ({
      ...state,
      getDocuSignUrlFailure: false,
      loadingDocuSignUrl: payload,
      docuSignUrl: '',
      templateId: payload,
    }),
    [actions.terms.getDocuSignUrlDone]: onGetDocuSignUrlDone,
    [actions.terms.agreeTermInit]: (state, { payload }) => ({
      ...state,
      agreeTermFailure: false,
      agreeingTerm: payload,
    }),
    [actions.terms.agreeTermDone]: onAgreeTermDone,

    [actions.terms.checkStatusInit]: state => ({
      ...state,
      checkingStatus: true,
    }),
    [actions.terms.checkStatusDone]: onCheckStatusDone,
  }, _.defaults(initialState, {
    terms: [],
    selectedTerm: null,
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @param {Object} options={} Optional. Options object for initial state.
 * @param {String} [options.auth.tokenV2=''] The V2 auth token
 * @param {String} [options.auth.tokenV3=''] The V3 auth token
 * @param {String} [options.terms.entity.type=''] The terms entity type:
 *  - `challenge`
 *  - `community`
 *  - `reviewOpportunity`
 * @param {String} [options.terms.entity.id=''] The terms entity id
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
export function factory(options = {}) {
  const entityType = _.get(options, 'terms.entity.type');
  const entityId = _.get(options, 'terms.entity.id');

  if (entityType && entityId) {
    const { entity } = options.terms;
    const tokens = {
      tokenV2: _.get(options.auth, 'tokenV2'),
      tokenV3: _.get(options.auth, 'tokenV3'),
    };
    return redux.resolveAction(actions.terms.getTermsDone(entity, tokens))
      .then((termsDoneAction) => {
        // we have to init first, otherwise results will be ignored by onGetTermsDone
        let state = onGetTermsInit({}, actions.terms.getTermsInit(entity));
        state = onGetTermsDone(state, termsDoneAction);

        return create(state);
      });
  }

  return Promise.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
export default create();
