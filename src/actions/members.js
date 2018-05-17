/**
 * @module "actions.members"
 * @desc Actions related to members data.
 */

import { createActions } from 'redux-actions';
import { getService } from '../services/members';
import { getService as getUserService } from '../services/user';

/**
 * @static
 * @desc Creates an action that drops all information related to the specfied
 *  member.
 * @param {String} handle Topcoder user handle.
 * @return {Action}
 */
function drop(handle) {
  return handle;
}

/**
 * @static
 * @desc Creates an action that drops all member information loaded by
 *  actions from this module.
 * @return {Action}
 */
function dropAll() {}

/**
 * @static
 * @desc Creates an action that signals beginning of member achievements
 *  loading.
 * @param {String} handle Member handle.
 * @param {String} uuid Loading operation UUID.
 * @return {Action}
 */
function getAchievementsInit(handle, uuid) {
  return { handle, uuid };
}

/**
 * @static
 * @desc Creates an action that loads member achievements.
 * @param {String} handle Member handle.
 * @param {String} uuid Loading operation
 * @return {Action}
 */
async function getAchievementsDone(handle, uuid) {
  let data;
  try {
    data = await getUserService().getAchievements(handle);
  } catch (e) {
    data = [];
  }
  return { data, handle, uuid };
}

/**
 * @static
 * @desc Creates an action that signals beginning of loading the member's
 *  financial information.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */
function getFinancesInit(handle, uuid) {
  return { handle, uuid };
}

/**
 * @static
 * @desc Creates an action that loads member's financial information.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function getFinancesDone(handle, uuid, tokenV3) {
  const data = await getService(tokenV3).getMemberFinances(handle);
  return { data, handle, uuid };
}

/**
 * @static
 * @desc Creates an action that signals beginning of member stats loading.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */
async function getStatsInit(handle, uuid) {
  return { handle, uuid };
}

/**
 * @static
 * @desc Create an action that loads member statistics.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function getStatsDone(handle, uuid, tokenV3) {
  const data = await getService(tokenV3).getStats(handle);
  return { data, handle, uuid };
}

export default createActions({
  MEMBERS: {
    DROP: drop,
    DROP_ALL: dropAll,
    GET_ACHIEVEMENTS_INIT: getAchievementsInit,
    GET_ACHIEVEMENTS_DONE: getAchievementsDone,
    GET_FINANCES_INIT: getFinancesInit,
    GET_FINANCES_DONE: getFinancesDone,
    GET_STATS_INIT: getStatsInit,
    GET_STATS_DONE: getStatsDone,
  },
});
