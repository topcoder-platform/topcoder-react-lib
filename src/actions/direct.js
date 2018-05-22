/**
 * @module "actions.direct"
 * @desc Actions related to Direct API: access to projects, billing accounts,
 * copilot operations, and other similar stuff is handled by them.
 */

import _ from 'lodash';
import { createActions } from 'redux-actions';
import { getService } from '../services/direct';

/**
 * @static
 * @desc Creates an action that drops out of Redux store all Direct-related
 *  data, loaded by other actions from this module, and also cancels any pending
 *  loading operations.
 * @return {Action}
 */
function dropAll() {
  return null;
}

/**
 * @static
 * @desc Creates an action that signals beginning of project details loading.
 * @param {Number} projectId Project ID.
 * @return {Action}
 */
function getProjectDetailsInit(projectId) {
  return projectId;
}

/**
 * @static
 * @desc Creates an action that loads project details.
 * @param {Number} projectId Project ID.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getProjectDetailsDone(projectId, tokenV3) {
  return getService(tokenV3).getProjectDetails(projectId);
}

/**
 * @static
 * @desc Creates an action that signals beginning of project permissions
 *  loading.
 * @param {Number|String} projectId Project ID.
 * @return {Action}
 */
function getProjectPermissionsInit(projectId) {
  return _.toNumber(projectId);
}

/**
 * @static
 * @desc Creates an action that loads project permissions.
 * @param {Number|String} projectId Project ID.
 * @param {String} tokenV3 Topcoder v3 auth token.
 * @return {Action}
 */
function getProjectPermissionsDone(projectId, tokenV3) {
  return getService(tokenV3).getProjectPermissions(projectId)
    .then(permissions => ({ permissions, projectId }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of loading the projects
 *  related with a user.
 * @param {String} tokenV3 Topcoder v3 auth token of the user for who we load
 *  the projects.
 * @return {Action}
 */
function getUserProjectsInit(tokenV3) {
  return tokenV3;
}

/**
 * @static
 * @desc Creates an action that loads projects related to a user.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
async function getUserProjectsDone(tokenV3) {
  const projects = await getService(tokenV3).getUserProjects({
    hasActiveBillingAccount: true,
  });
  return { tokenV3, projects };
}

export default createActions({
  DIRECT: {
    DROP_ALL: dropAll,
    GET_PROJECT_DETAILS_INIT: getProjectDetailsInit,
    GET_PROJECT_DETAILS_DONE: getProjectDetailsDone,
    GET_PROJECT_PERMISSIONS_INIT: getProjectPermissionsInit,
    GET_PROJECT_PERMISSIONS_DONE: getProjectPermissionsDone,
    GET_USER_PROJECTS_INIT: getUserProjectsInit,
    GET_USER_PROJECTS_DONE: getUserProjectsDone,
  },
});
