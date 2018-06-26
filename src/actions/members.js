/**
 * @module "actions.members"
 * @desc Actions related to members data.
 */

import { createActions } from 'redux-actions';
import { getService } from '../services/members';
import { getService as getUserService } from '../services/user';
import { getService as getChallengesService } from '../services/challenges';

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

/**
 * @static
 * @desc Payload creator for the action that inits the loading of member active challenges.
 * @param {String} handle
 * @param {String} uuid
 * @returns {Object} Payload
 */
async function getActiveChallengesInit(handle, uuid) {
  return { handle, uuid };
}

/**
 * @static
 * @desc Payload creator for the action that loads the member active challenges.
 * @param {String} handle
 * @param {String} uuid
 * @param {String} tokenV3
 * @returns {Object} Payload
 */
async function getActiveChallengesDone(handle, uuid, tokenV3) {
  const filter = { status: 'ACTIVE' };
  const service = getChallengesService(tokenV3);
  /* TODO: Reuse `getAll` from `actions/challenge-listing`
  /* after it moved from `community-app` to here.
   */
  function getAll(getter, page = 0, prev = null) {
    const PAGE_SIZE = 50;
    return getter({
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    }).then(({ challenges: chunk }) => {
      if (!chunk.length) return prev || [];
      return getAll(getter, 1 + page, prev ? prev.concat(chunk) : chunk);
    });
  }
  const calls = [
    getAll(params => service.getUserChallenges(handle, filter, params)),
    getAll(params => service.getUserMarathonMatches(handle, filter, params)),
  ];

  const [challenges] = await Promise.all(calls);

  return { handle, challenges, uuid };
}

/**
 * @static
 * @desc Create an action that signals beginning of member stats distribution history.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */
async function getStatsHistoryInit(handle, uuid) {
  return { handle, uuid };
}

/**
 * @static
 * @desc Create an action that loads the member stats history.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function getStatsHistoryDone(handle, uuid, tokenV3) {
  const data = await getService(tokenV3).getStatsHistory(handle);
  return { data, handle, uuid };
}

/**
 * @static
 * @desc Create an action that signals beginning of member stats distribution loading.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */
async function getStatsDistributionInit(handle, uuid) {
  return { handle, uuid };
}

/**
 * @static
 * @desc Create an action that loads the member stats distribution.
 * @param {String} handle Member handle.
 * @param {String} track Main track name.
 * @param {String} subTrack Subtrack name.
 * @param {String} uuid Operation UUID.
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function getStatsDistributionDone(handle, track, subTrack, uuid, tokenV3) {
  const data = await getService(tokenV3).getStatsDistribution(handle, track, subTrack);
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
    GET_STATS_HISTORY_INIT: getStatsHistoryInit,
    GET_STATS_HISTORY_DONE: getStatsHistoryDone,
    GET_STATS_DISTRIBUTION_INIT: getStatsDistributionInit,
    GET_STATS_DISTRIBUTION_DONE: getStatsDistributionDone,
    GET_ACTIVE_CHALLENGES_INIT: getActiveChallengesInit,
    GET_ACTIVE_CHALLENGES_DONE: getActiveChallengesDone,
  },
});
