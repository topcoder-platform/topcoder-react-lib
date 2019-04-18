/**
 * @module "actions.profile"
 * @desc Actions for interactions with profile details API.
 * @todo Some of them repeat actions in {@link actions.members.md}. The code
 *  should be refactored to avoid redundancy.
 */
import { createActions } from 'redux-actions';
import _ from 'lodash';
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

/**
 * @static
 * @desc Creates an action that signals beginning of getting linked accounts.
 * @return {Action}
 */
function getLinkedAccountsInit() {}

/**
 * @static
 * @desc Creates an action that gets linked accounts.
 *
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getLinkedAccountsDone(profile, tokenV3) {
  const service = getUserService(tokenV3);
  return service.getLinkedAccounts(profile.userId);
}

/**
 * @static
 * @desc Creates an action that signals beginning of getting credential.
 * @return {Action}
 */
function getCredentialInit() {}

/**
 * @static
 * @desc Creates an action that gets credential.
 *
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getCredentialDone(profile, tokenV3) {
  const service = getUserService(tokenV3);
  return service.getCredential(profile.userId);
}

/**
 * @static
 * @desc Creates an action that signals beginning of getting email preferences.
 * @return {Action}
 */
function getEmailPreferencesInit() {}

/**
 * @static
 * @desc Creates an action that gets email preferences.
 *
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getEmailPreferencesDone(profile, tokenV3) {
  const service = getUserService(tokenV3);
  return service.getEmailPreferences(profile.userId);
}

/**
 * @static
 * @desc Creates an action that signals beginning of uploading user's photo.
 * @return {Action}
 */
function uploadPhotoInit() {}

/**
 * @static
 * @desc Creates an action that uploads user's photo.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} file The photo file.
 * @return {Action}
 */
function uploadPhotoDone(handle, tokenV3, file) {
  const service = getMembersService(tokenV3);
  return service.getPresignedUrl(handle, file)
    .then(res => service.uploadFileToS3(res))
    .then(res => service.updateMemberPhoto(res))
    .then(photoURL => ({ handle, photoURL }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of deleting user's photo.
 * @return {Action}
 */
function deletePhotoInit() {}

/**
 * @static
 * @desc Creates an action that signals beginning of updating user's profile.
 * @return {Action}
 */
function updateProfileInit() {}

/**
 * @static
 * @desc Creates an action that updates user's profile.
 * @param {String} profile Topcoder user profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function updateProfileDone(profile, tokenV3) {
  const service = getMembersService(tokenV3);
  return service.updateMemberProfile(profile);
}

/**
 * @static
 * @desc Creates an action that signals beginning of adding user's skill.
 * @return {Action}
 */
function addSkillInit() {}

/**
 * @static
 * @desc Creates an action that adds user's skill.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {Object} skill Skill to add.
 * @return {Action}
 */
function addSkillDone(handle, tokenV3, skill) {
  const service = getMembersService(tokenV3);
  return service.addSkill(handle, skill.tagId)
    .then(res => ({ skills: res.skills, handle, skill }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of hiding user's skill.
 * @return {Action}
 */
function hideSkillInit() {}

/**
 * @static
 * @desc Creates an action that hides user's skill.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {Object} skill Skill to hide.
 * @return {Action}
 */
function hideSkillDone(handle, tokenV3, skill) {
  const service = getMembersService(tokenV3);
  return service.hideSkill(handle, skill.tagId)
    .then(res => ({ skills: res.skills, handle, skill }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of adding user's web link.
 * @return {Action}
 */
function addWebLinkInit() {}

/**
 * @static
 * @desc Creates an action that adds user's web link.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} webLink Web link to add.
 * @return {Action}
 */
function addWebLinkDone(handle, tokenV3, webLink) {
  const service = getMembersService(tokenV3);
  return service.addWebLink(handle, webLink).then(res => ({ data: res, handle }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of deleting user's web link.
 * @param {Object} key Web link key to delete.
 * @return {Action}
 */
function deleteWebLinkInit({ key }) {
  return { key };
}

/**
 * @static
 * @desc Creates an action that deletes user's web link.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} webLink Web link to delete.
 * @return {Action}
 */
function deleteWebLinkDone(handle, tokenV3, webLink) {
  const service = getMembersService(tokenV3);
  return service.deleteWebLink(handle, webLink.key).then(res => ({ data: res, handle }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of linking external account.
 * @return {Action}
 */
function linkExternalAccountInit() {}

/**
 * @static
 * @desc Creates an action that links external account.
 * @param {Object} profile Topcoder member handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} providerType The external account service provider
 * @param {String} callbackUrl Optional. The callback url
 * @return {Action}
 */
function linkExternalAccountDone(profile, tokenV3, providerType, callbackUrl) {
  const service = getUserService(tokenV3);
  return service.linkExternalAccount(profile.userId, providerType, callbackUrl)
    .then(res => ({ data: res, handle: profile.handle }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of unlinking external account.
 * @param {Object} providerType External account provider type to delete.
 * @return {Action}
 */
function unlinkExternalAccountInit({ providerType }) {
  return { providerType };
}

/**
 * @static
 * @desc Creates an action that unlinks external account.
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} providerType The external account service provider
 * @return {Action}
 */
function unlinkExternalAccountDone(profile, tokenV3, providerType) {
  const service = getUserService(tokenV3);
  return service.unlinkExternalAccount(profile.userId, providerType)
    .then(() => ({ providerType, handle: profile.handle }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of saving email preferences.
 * @return {Action}
 */
function saveEmailPreferencesInit() {}

/**
 * @static
 * @desc Creates an action that saves email preferences.
 *
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {Object} preferences The email preferences
 * @return {Action}
 */
function saveEmailPreferencesDone(profile, tokenV3, preferences) {
  const service = getUserService(tokenV3);
  return service.saveEmailPreferences(profile, preferences)
    .then(res => ({ data: res, handle: profile.handle }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of updating user password.
 * @return {Action}
 */
function updatePasswordInit() {}

/**
 * @static
 * @desc Creates an action that updates user password.
 *
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} newPassword The new password
 * @param {String} oldPassword The old password
 * @return {Action}
 */
function updatePasswordDone(profile, tokenV3, newPassword, oldPassword) {
  const service = getUserService(tokenV3);
  return service.updatePassword(profile.userId, newPassword, oldPassword)
    .then(res => ({ data: res, handle: profile.handle }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of verify member new email.
 * @return {Action}
 */
function verifyMemberNewEmailInit() {}

/**
 * @static
 * @desc Creates an action that verify member new email.
 *
 * @param {Object} handle Topcoder member handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} emailVerifyToken The verify token of new email.
 * @return {Action}
 */
function verifyMemberNewEmailDone(handle, tokenV3, emailVerifyToken) {
  const service = getMembersService(tokenV3);
  return service.verifyMemberNewEmail(handle, emailVerifyToken)
    .then(res => ({ data: res }));
}

/**
 * @static
 * @desc Creates an action that toggles isEmailConflict state
 * @param {boolean} state
 * @return {Action}
 */
function updateEmailConflict(state = false) {
  return state;
}

export default createActions({
  PROFILE: {
    LOAD_PROFILE: loadProfile,
    CLEAR_PROFILE: _.noop,
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
    GET_LINKED_ACCOUNTS_INIT: getLinkedAccountsInit,
    GET_LINKED_ACCOUNTS_DONE: getLinkedAccountsDone,
    GET_EMAIL_PREFERENCES_INIT: getEmailPreferencesInit,
    GET_EMAIL_PREFERENCES_DONE: getEmailPreferencesDone,
    GET_CREDENTIAL_INIT: getCredentialInit,
    GET_CREDENTIAL_DONE: getCredentialDone,
    UPLOAD_PHOTO_INIT: uploadPhotoInit,
    UPLOAD_PHOTO_DONE: uploadPhotoDone,
    DELETE_PHOTO_INIT: deletePhotoInit,
    DELETE_PHOTO_DONE: updateProfileDone,
    UPDATE_PROFILE_INIT: updateProfileInit,
    UPDATE_PROFILE_DONE: updateProfileDone,
    ADD_SKILL_INIT: addSkillInit,
    ADD_SKILL_DONE: addSkillDone,
    HIDE_SKILL_INIT: hideSkillInit,
    HIDE_SKILL_DONE: hideSkillDone,
    ADD_WEB_LINK_INIT: addWebLinkInit,
    ADD_WEB_LINK_DONE: addWebLinkDone,
    DELETE_WEB_LINK_INIT: deleteWebLinkInit,
    DELETE_WEB_LINK_DONE: deleteWebLinkDone,
    LINK_EXTERNAL_ACCOUNT_INIT: linkExternalAccountInit,
    LINK_EXTERNAL_ACCOUNT_DONE: linkExternalAccountDone,
    UNLINK_EXTERNAL_ACCOUNT_INIT: unlinkExternalAccountInit,
    UNLINK_EXTERNAL_ACCOUNT_DONE: unlinkExternalAccountDone,
    SAVE_EMAIL_PREFERENCES_INIT: saveEmailPreferencesInit,
    SAVE_EMAIL_PREFERENCES_DONE: saveEmailPreferencesDone,
    UPDATE_PASSWORD_INIT: updatePasswordInit,
    UPDATE_PASSWORD_DONE: updatePasswordDone,
    VERIFY_MEMBER_NEW_EMAIL_INIT: verifyMemberNewEmailInit,
    VERIFY_MEMBER_NEW_EMAIL_DONE: verifyMemberNewEmailDone,
    UPDATE_EMAIL_CONFLICT: updateEmailConflict,
  },
});
