/**
 * @module "actions.groups"
 * @desc Actions related to user groups.
 * @todo Some group-related actions can be found elsewhere (e.g. addition of
 * members to group is located inside tc-communities actions, because joining
 * a community is equivalent to adding user to a group). It will be great to
 * move such actions in here.
 */

import { createActions } from 'redux-actions';
import { getService } from '../services/groups';

/**
 * @static
 * @desc Creates an action that removes from Redux store all group data loaded
 *  before by other actions in this module, and also cancels any on-going
 *  loading operations.
 * @return {Action}
 */
function dropGroups() {
  return undefined;
}

/**
 * @static
 * @desc Creates an action that signals beginning of group data loading.
 * @param {String|String[]} groupIds ID, or an array of IDs, for groups to load.
 * @return {Action}
 */
function getGroupsInit(groupIds) {
  return groupIds;
}

/**
 * @static
 * @desc Creates an action that loads group data.
 * @param {String|String[]} groupIds ID, or an array of IDs, of groups to load.
 * @param {String} tokenV3 Optional. Topcoder v3 auth token.
 * @return {Action}
 */
function getGroupsDone(groupIds, tokenV3) {
  return getService(tokenV3).getGroupMap(groupIds);
}

/**
 * Get groups that a member belong to
 * @param {*} userId the member's userId
 * @param {*} tokenV3 the logged in users token
 * @returns
 */
function getMemberGroups(userId, tokenV3) {
  return getService(tokenV3).getMemberGroups(userId);
}

export default createActions({
  GROUPS: {
    DROP_GROUPS: dropGroups,
    GET_GROUPS_INIT: getGroupsInit,
    GET_GROUPS_DONE: getGroupsDone,
    GET_MEMBER_GROUPS: getMemberGroups,
  },
});
