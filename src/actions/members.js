/**
 * @module "actions.members"
 * @desc Actions related to members data.
 */

import qs from 'qs';
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
 * @desc Creates an action that loads member achievements from v3 API.
 * @param {String} handle Member handle.
 * @param {String} uuid Loading operation
 * @return {Action}
 */
async function getAchievementsV3Done(handle, uuid) {
  let data;
  try {
    data = await getUserService().getAchievementsV3(handle);
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
 * @param {String} groupIds Group ids.
 * @param {String} uuid Operation UUID.
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function getStatsDone(handle, groupIds, uuid, tokenV3) {
  const data = await getService(tokenV3).getStats(handle, groupIds);
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
  const filter = { status: 'Active' };
  const service = getChallengesService(tokenV3);
  /* TODO: Reuse `getAll` from `actions/challenge-listing`
  /* after it moved from `community-app` to here.
   */
  function getAll(getter, page = 0, prev = null) {
    const PAGE_SIZE = 50;
    return getter({
      perPage: PAGE_SIZE,
      page: page + 1,
    }).then(({ challenges: chunk }) => {
      if (!chunk.length) return prev || [];
      return getAll(getter, 1 + page, prev ? prev.concat(chunk) : chunk);
    });
  }
  const calls = [
    getAll(params => service.getUserChallenges(handle, filter, params)),
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

/**
 * @static
 * @desc Create an action that signals beginning of subtrack challenges loading.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */
async function getSubtrackChallengesInit(handle, uuid) {
  return { handle, uuid };
}

/**
 * @static
 * @desc Create an action that loads the member subtrack challenges.
 * @param {String} uuid Operation UUID.
 * @param {String} handle Member handle.
 * @param {String} tokenV3 v3 auth token.
 * @param {String} track Main track name.
 * @param {String} subTrack Subtrack name.
 * @param {Number} start page.
 * @param {Number} page size.
 * @param {Boolean} whether to refresh.
 * @return {Action}
 */
async function getSubtrackChallengesDone(
  uuid, handle, tokenV3, track, subTrack, pageNum, pageSize,
  refresh,
) {
  const filter = {
    status: 'Completed',
    hasUserSubmittedForReview: 'true',
    track,
    subTrack,
  };

  const params = {};
  params.orderBy = 'submissionEndDate desc';
  params.limit = pageSize;
  params.offset = pageNum * pageSize;

  const service = getChallengesService(tokenV3);
  return service.getUserChallenges(handle, filter, params)
    .then(res => ({
      uuid,
      challenges: res.challenges,
      refresh,
      handle,
    }));
}

/**
 * @static
 * @desc Create an action that signals beginning of member SRM loading.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */
async function getUserSRMInit(handle, uuid) {
  return { handle, uuid };
}

/**
 * @static
 * @desc Create an action that loads the member SRM.
 * @param {String} uuid Operation UUID.
 * @param {String} handle Member handle.
 * @param {String} tokenV3 v3 auth token.
 * @param {Number} start page.
 * @param {Number} page size.
 * @param {Boolean} whether to refresh.
 * @return {Action}
 */
async function getUserSRMDone(
  uuid, handle, tokenV3, pageNum, pageSize,
  refresh,
) {
  const filter = {
    status: 'past',
    isRatedForSRM: 'true',
  };

  const params = {
    filter: qs.stringify(filter, { encode: false }),
    limit: pageSize,
    offset: pageNum * pageSize,
  };

  const service = getChallengesService(tokenV3);
  return service.getUserSrms(handle, params).then(res => ({
    uuid,
    srms: res,
    refresh,
    handle,
  }));
}

/**
 * @static
 * @desc Create an action that signals beginning of member marathon loading.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */
async function getUserMarathonInit(handle, uuid) {
  return { handle, uuid };
}

/**
 * @static
 * @desc Create an action that loads the member marathon.
 * @param {String} uuid Operation UUID.
 * @param {String} handle Member handle.
 * @param {String} tokenV3 v3 auth token.
 * @param {Number} start page.
 * @param {Number} page size.
 * @param {Boolean} whether to refresh.
 * @return {Action}
 */
async function getUserMarathonDone(
  uuid, handle, tokenV3, pageNum, pageSize,
  refresh,
) {
  const filter = { status: 'PAST', isRatedForMM: 'true' };
  const params = {};
  params.orderBy = 'endDate desc';
  params.limit = pageSize;
  params.offset = pageNum * pageSize;

  const service = getChallengesService(tokenV3);
  return service.getUserMarathonMatches(handle, filter, params)
    .then(res => ({
      uuid,
      marathons: res,
      refresh,
      handle,
    }));
}

export default createActions({
  MEMBERS: {
    DROP: drop,
    DROP_ALL: dropAll,
    GET_ACHIEVEMENTS_INIT: getAchievementsInit,
    GET_ACHIEVEMENTS_DONE: getAchievementsDone,
    GET_ACHIEVEMENTS_V3_DONE: getAchievementsV3Done,
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
    GET_SUBTRACK_CHALLENGES_INIT: getSubtrackChallengesInit,
    GET_SUBTRACK_CHALLENGES_DONE: getSubtrackChallengesDone,
    GET_USER_SRM_INIT: getUserSRMInit,
    GET_USER_SRM_DONE: getUserSRMDone,
    GET_USER_MARATHON_INIT: getUserMarathonInit,
    GET_USER_MARATHON_DONE: getUserMarathonDone,
  },
});
