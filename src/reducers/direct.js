/**
 * Reducer for handling the results of Direct-related actions.
 */

import _ from 'lodash';
import { handleActions } from 'redux-actions';
import { decodeToken } from 'tc-accounts';
import actions from '../actions/direct';
import logger from '../utils/logger';
import { fireErrorMessage } from '../utils/errors';

const ERROR_MSG_GET_USER_PROJECTS_WITHOUT_AUTH_TOKEN
  = 'Cannot get user projects without auth token';

/**
 * Drops out all data and cancels any ongoing data loading related to this
 * reducer.
 * @param {Object} state
 * @return {Object} New state.
 */
function onDropAll(state) {
  return {
    ...state,
    loadingProjectDetailsForId: 0,
    loadingProjectsForUsername: '',
    projectDetails: {},
    projects: [],
  };
}

/**
 * Inits loading of the specified project, cancelling the ongoing loading of
 * project details, if any.
 * @param {Object} state
 * @param {Object} action Its payload is the projectId.
 * @return {Object} New state.
 */
function onGetProjectDetailsInit(state, { payload }) {
  return {
    ...state,
    loadingProjectDetailsForId: payload,
  };
}

/**
 * Stores loaded project details to the state.
 * @param {Object} state
 * @param {Object} action Its payload is the project details object.
 * @return {Object} New state.
 */
function onGetProjectDetailsDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to load project details', payload);
    throw payload;
  }
  if (payload.project.projectId !== state.loadingProjectDetailsForId) {
    return state;
  }
  return {
    ...state,
    loadingProjectDetailsForId: 0,
    projectDetails: payload,
  };
}

/**
 * Handler for the GET_PROJECT_PERMISSIONS_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetProjectPermissionsInit(state, { payload }) {
  const projectPermissions = {
    ...state.projectPermissions,
    loadingForProjectId: payload,
  };
  return { ...state, projectPermissions };
}

/**
 * Handler for the GET_PROJECT_PERMISSIONS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetProjectPermissionsDone(state, { error, payload }) {
  if (error) {
    fireErrorMessage('Failed to load project permissions', '');
    logger.error('Failed to load project permissions', payload);
  }
  const { permissions, projectId } = payload;
  if (projectId !== state.projectPermissions.loadingForProjectId) return state;
  const projectPermissions = {
    loadingForProjectId: 0,
    permissions,
    projectId,
    timestamp: Date.now(),
  };
  return { ...state, projectPermissions };
}

/**
 * Handles initialization of projects loading.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetUserProjectsInit(state, { payload: tokenV3 }) {
  if (!tokenV3) {
    logger.error(ERROR_MSG_GET_USER_PROJECTS_WITHOUT_AUTH_TOKEN);
    throw new Error(ERROR_MSG_GET_USER_PROJECTS_WITHOUT_AUTH_TOKEN);
  }
  return {
    ...state,
    loadingProjectsForUsername: decodeToken(tokenV3).handle,
  };
}

/**
 * Handles the result of projects loading.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetUserProjectsDone(state, { error, payload }) {
  if (error) {
    logger.error(payload);
    throw payload;
  }
  const { projects, tokenV3 } = payload;
  if (!tokenV3) {
    logger.error(ERROR_MSG_GET_USER_PROJECTS_WITHOUT_AUTH_TOKEN);
    throw new Error(ERROR_MSG_GET_USER_PROJECTS_WITHOUT_AUTH_TOKEN);
  }
  if (decodeToken(tokenV3).handle !== state.loadingProjectsForUsername) {
    return state;
  }
  return {
    ...state,
    loadingProjectsForUsername: '',
    projects: projects.sort((a, b) => a.name.localeCompare(b.name)),
  };
}

/**
 * Creates a new Direct reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Direct reducer.
 */
function create(initialState = {}, mergeReducers = {}) {
  const a = actions.direct;
  return handleActions({
    [a.dropAll]: onDropAll,
    [a.getProjectDetailsInit]: onGetProjectDetailsInit,
    [a.getProjectDetailsDone]: onGetProjectDetailsDone,
    [a.getProjectPermissionsInit]: onGetProjectPermissionsInit,
    [a.getProjectPermissionsDone]: onGetProjectPermissionsDone,
    [a.getUserProjectsInit]: onGetUserProjectsInit,
    [a.getUserProjectsDone]: onGetUserProjectsDone,
    ...mergeReducers,
  }, _.defaults(initialState, {
    /* If we are loading details of some project, this field holds the project
     * ID; zero otherwise. */
    loadingProjectDetailsForId: 0,

    /* Holds username of the user which projects are being loaded; empty
     * string if nothing is being loaded at the moment. */
    loadingProjectsForUsername: '',

    /* Holds details of some project, or an empty object. */
    projectDetails: {},

    projectPermissions: {
      loadingForProjectId: 0,
      permissions: [],
      projectId: 0,
      timestamp: 0,
    },

    /* Holds the array of loaded projects. */
    projects: [],
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
 * @param {Object} options Optional. Options object for initial state.
 * @return Promise which resolves to the new reducer.
 */
export function factory(options = {}) {
  return Promise.resolve(create(options.initialState, options.mergeReducers));
}

/* Reducer with the default initial state. */
export default create();

