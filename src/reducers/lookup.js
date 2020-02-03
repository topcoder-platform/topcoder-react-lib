/**
 * @module "reducers.lookup"
 * @desc Reducer for {@link module:actions.lookup} actions.
 *
 * State segment managed by this reducer has the following structure:
 * @param {Array} skillTags='' skill tags.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import logger from '../utils/logger';
import actions, { PAGE_SIZE } from '../actions/lookup';


/**
 * Handles LOOKUP/GET_TYPES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetTypesDone(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get types', payload);
    return { ...state, loadingTypesError: true };
  }

  const types = _.map(payload.sort(), v => ({
    key: v,
    name: v,
  }));
  return ({
    ...state,
    loadingTypesError: false,
    types,
  });
}


/**
 * Handles LOOKUP/GET_MANUFACTURERS_INIT action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetManufacturersInit(state) {
  return {
    ...state, manufacturers: [], models: [], oses: [],
  };
}

/**
 * Handles LOOKUP/GET_MANUFACTURERS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetManufacturersDone(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get types', payload);
    return { ...state, loadingManufacturersError: true };
  }

  const manufacturers = _.map(payload.sort(), v => ({
    key: v,
    name: v,
  }));
  return ({
    ...state,
    loadingManufacturersError: false,
    manufacturers,
  });
}


/**
 * Handles LOOKUP/GET_MODELS_INIT action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetModelsInit(state, { payload }) {
  // if load more, don't clear state
  if (payload.page > 1) {
    return { ...state, modelPage: payload.page, isModelsLoading: true };
  }
  return {
    ...state, models: [], oses: [], modelPage: payload.page, isModelsLoading: true,
  };
}

/**
 * Handles LOOKUP/GET_MODELS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetModelsDone(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get types', payload);
    return { ...state, loadingModelsError: true, isModelsLoading: false };
  }

  let models = _.orderBy(payload, ['model'], ['asc']);

  if (state.modelPage > 1) {
    models = [...state.models, ...models];
  }
  return ({
    ...state,
    loadingModelsError: false,
    models,
    hasMoreModels: models.length === PAGE_SIZE,
    isModelsLoading: false,
  });
}

/**
 * Handles LOOKUP/GET_OSES_INIT action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetOsesInit(state, { payload }) {
  return {
    ...state, osPage: payload.page, isOsesLoading: true,
  };
}


/**
 * Handles LOOKUP/GET_OSES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetOsesDone(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get types', payload);
    return { ...state, loadingOsesError: true, isOsesLoading: false };
  }

  let oses = _.orderBy(payload, ['operatingSystem'], ['asc']);
  if (state.osPage > 1) {
    oses = [...state.oses, ...oses];
  }

  return ({
    ...state,
    loadingOsesError: false,
    oses,
    hasMoreOses: oses.length === PAGE_SIZE,
    isOsesLoading: false,
  });
}


/**
 * Handles LOOKUP/GET_SKILL_TAGS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetSkillTagsDone(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get skill tags', payload);
    return { ...state, loadingSkillTagsError: true };
  }

  return ({
    ...state,
    loadingSkillTagsError: false,
    skillTags: payload,
  });
}

/**
 * Handles LOOKUP/GET_COUNTRIES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetCountriesDone(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get countries', payload);
    return { ...state, loadingCountriesError: true };
  }

  return ({
    ...state,
    loadingCountriesError: false,
    countries: payload,
  });
}

/**
 * Handles LOOKUP/GET_ALL_COUNTRIES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetAllCountriesDone(state, { payload, error }) {
  if (error) {
    logger.error('Failed to get all countries', payload);
    return { ...state, loadingAllCountriesError: true };
  }

  return ({
    ...state,
    loadingAllCountriesError: false,
    allCountries: payload,
  });
}

/**
 * Creates a new Lookup reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Lookup reducer.
 */
function create(initialState = {}) {
  const a = actions.lookup;
  return handleActions({
    [a.getTypesInit]: state => state,
    [a.getTypesDone]: onGetTypesDone,
    [a.getManufacturersInit]: onGetManufacturersInit,
    [a.getManufacturersDone]: onGetManufacturersDone,
    [a.getModelsInit]: onGetModelsInit,
    [a.getModelsDone]: onGetModelsDone,
    [a.getOsesInit]: onGetOsesInit,
    [a.getOsesDone]: onGetOsesDone,
    [a.getSkillTagsInit]: state => state,
    [a.getSkillTagsDone]: onGetSkillTagsDone,
    [a.getCountriesInit]: state => state,
    [a.getCountriesDone]: onGetCountriesDone,
    [a.getAllCountriesInit]: state => state,
    [a.getAllCountriesDone]: onGetAllCountriesDone,
  }, _.defaults(initialState, {
    skillTags: [],
    countries: [],
    allCountries: [],
    types: [],
    manufacturers: [],
    models: [],
    modelPage: 1,
    hasMoreModels: false,
    oses: [],
    osPage: 1,
    hasMoreOses: false,
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
