/**
 * @module "actions.smp"
 * @desc Actions related to Topcoder statistics (at the moment, only community
 *  statistics).
 */

import _ from 'lodash';

import { createActions } from 'redux-actions';
import * as Filter from '../utils/challenges/filter';
import { getService as getGroupService } from '../services/groups';

/**
 * @static
 * @desc Creates an action that signals beginning of the loading community
 *  stats.
 * @param {Object} community Community meta-data object.
 * @param {String} [community.communityId] Community ID.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */
function getCommunityStatsInit(community, uuid) {
  return { community: community.communityId, uuid };
}

/**
 * @static
 * @desc Create an action that gets statistics related to the specified
 * community. Data will be loaded into `stats.communities[communityId]` path of
 * the Redux store.
 * @todo The action should be refactored, see comments in the code.
 * @param {Object} community details of the community.
 * @param {String} uuid Operation UUID
 * @param {Array} challenges challenges from challengeListing to filter and do statistics
 * @param {String} token V3 Topcoder auth token. It is necessary to get data
 *  related to private groups.
 * @return {Action}
 */
/* TODO: This code should be moved to a dedicated service. */
async function getCommunityStatsDone(community, uuid, challenges, token) {
  try {
    /* TODO: At the moment, this component loads challenge objects to calculate
    * the number of challenges and the total prize. Probably in future, we'll
    * have a special API to get these data. */
    let filtered = challenges.filter(x => x.status === 'ACTIVE');
    if (community.challengeFilter) {
      const filterFunction = Filter.getFilterFunction(community.challengeFilter);
      filtered = filtered.filter(filterFunction);
    }
    const totalPrize = filtered.reduce((total, challenge) =>
      total + (challenge.totalPrize || 0), 0);
    const groupService = getGroupService(token);
    const result = {
      community: community.communityId,
      stats: {},
      uuid,
    };
    if (filtered.length) result.stats.numChallenges = filtered.length;
    if (totalPrize) result.stats.openPrizes = `$${totalPrize.toLocaleString()}`;

    const groupId = _.get(community, 'groupIds[0]');
    if (groupId) {
      result.stats.numMembers = await groupService.getMembersCount(groupId, true);
    }
    return result;
  } catch (e) {
    return {
      community: community.communityId,
      stats: {},
      uuid,
    };
  }
}

export default createActions({
  STATS: {
    GET_COMMUNITY_STATS_INIT: getCommunityStatsInit,
    GET_COMMUNITY_STATS_DONE: getCommunityStatsDone,
  },
});
