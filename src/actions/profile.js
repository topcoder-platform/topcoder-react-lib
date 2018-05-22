/**
 * @module "actions.profile"
 * @desc Actions for interactions with profile details API.
 * @todo Some of them repeat actions in {@link actions.members.md}. The code
 *  should be refactored to avoid redundancy.
 */
import { createActions } from 'redux-actions';

import { getService as getUserService } from '../services/user';
import { getService as getMembersService } from '../services/members';

/**
 * @static
 * @desc Creates and action that loads user profile.
 * @todo This action does not follow the pattern with init/done pairs of
 *  actions. Should be improved.
 * @param {String} handle User handle.
 * @return {Action}
 */
function loadProfile(handle) {
  return handle;
}

/**
 * @static
 * @desc Creates an action that signals beginning of user achievements loading.
 * @todo This duplicates similar action in {@link actions.members.md}!
 * @return {Action}
 */
function getAchievementsInit() {}

/**
 * @static
 * @desc Creates an action that loads user achievements.
 * @todo This duplicates similar action in {@link actions.members.md}!
 * @param {String} handle User handle.
 * @return {Action}
 */
function getAchievementsDone(handle) {
  return getUserService().getUserPublic(handle);
}

/**
 * @static
 * @todo To be documented.
 * @return {Action}
 */
function getExternalAccountsInit() {}

/**
 * @static
 * @todo To be documented.
 * @param {String} handle User handle.
 * @return {Action}
 */
function getExternalAccountsDone(handle) {
  return getMembersService().getExternalAccounts(handle);
}

/**
 * @static
 * @todo Figure out what does this action do.
 * @return {Action}
 */
function getExternalLinksInit() {}

/**
 * @static
 * @todo Figure out the purpose of this action
 * @param {String} handle User handle.
 * @return {Action}
 */
function getExternalLinksDone(handle) {
  return getMembersService().getExternalLinks(handle);
}

/**
 * @static
 * @todo Figure out the purpose of this action.
 * @return {Action}
 */
function getInfoInit() {}

/**
 * @static
 * @todo Figure out the purpose of this action.
 * @param {String} handle User handle.
 * @return {Action}
 */
function getInfoDone(handle) {
  return getMembersService().getMemberInfo(handle);
}

/**
 * @static
 * @desc Creates an action that signals beginning of loading the member's
 *  skills info.
 * @return {Action}
 */
function getSkillsInit() {}

/**
 * @static
 * @desc Creates an action that loads member's skills info.
 * @param {String} handle Member handle.
 * @return {Action}
 */
function getSkillsDone(handle) {
  return getMembersService().getSkills(handle);
}

/**
 * @static
 * @desc Creates an action that signals beginning of loading member's stats.
 * @todo This is similar to {@link actions.members.md#module_actions.members.getStatsInit}!
 * @return {Action}
 */
function getStatsInit() {}

/**
 * @static
 * @desc Creates an action that loads member's stats.
 * @param {String} handle Member handle.
 * @return {Action}
 */
function getStatsDone(handle) {
  return getMembersService().getStats(handle);
}

export default createActions({
  PROFILE: {
    LOAD_PROFILE: loadProfile,
    GET_ACHIEVEMENTS_INIT: getAchievementsInit,
    GET_ACHIEVEMENTS_DONE: getAchievementsDone,
    GET_EXTERNAL_ACCOUNTS_INIT: getExternalAccountsInit,
    GET_EXTERNAL_ACCOUNTS_DONE: getExternalAccountsDone,
    GET_EXTERNAL_LINKS_INIT: getExternalLinksInit,
    GET_EXTERNAL_LINKS_DONE: getExternalLinksDone,
    GET_INFO_INIT: getInfoInit,
    GET_INFO_DONE: getInfoDone,
    GET_SKILLS_INIT: getSkillsInit,
    GET_SKILLS_DONE: getSkillsDone,
    GET_STATS_INIT: getStatsInit,
    GET_STATS_DONE: getStatsDone,
  },
});
