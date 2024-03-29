/**
 * @module "reducers.profile"
 * @desc Reducer for Profile API data
 * @todo Document reducer state structure.
 */
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import actions from '../actions/profile';
import logger from '../utils/logger';
import { fireErrorMessage } from '../utils/errors';

/**
 * Handles PROFILE/GET_ACHIEVEMENTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetAchievementsDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({
    ...state,
    achievements: payload.Achievements,
    copilot: payload.copilot,
    country: payload.country,
    loadingError: false,
  });
}

/**
 * Handles PROFILE/GET_ACHIEVEMENTS_V3_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetAchievementsV3Done(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({
    ...state,
    achievements: payload.achievements || [],
    copilot: payload.copilot,
    country: payload.country,
    loadingError: false,
  });
}

/**
 * Handles PROFILE/GET_EXTERNAL_ACCOUNTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetExternalAccountsDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({
    ...state,
    externalAccounts: payload,
  });
}

/**
 * Handles PROFILE/GET_EXTERNAL_LINKS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetExternalLinksDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({
    ...state,
    externalLinks: payload,
  });
}

/**
 * Handles PROFILE/GET_INFO_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetInfoDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({ ...state, info: payload, loadingError: false });
}

/**
 * Handles PROFILE/GET_SKILLS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetSkillsDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({ ...state, skills: payload.skills, loadingError: false });
}

/**
 * Handles PROFILE/GET_STATS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetStatsDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return ({ ...state, stats: payload, loadingError: false });
}

/**
 * Handles PROFILE/GET_LINKED_ACCOUNTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetLinkedAccountsDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return { ...state, linkedAccounts: payload.profiles, loadingError: false };
}

/**
 * Handles PROFILE/GET_CREDENTIAL_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetCredentialDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return { ...state, credential: payload.credential, loadingError: false };
}

/**
 * Handles PROFILE/GET_EMAIL_PREFERENCES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetEmailPreferencesDone(state, { payload, error }) {
  if (error) {
    return { ...state, loadingError: true };
  }

  return { ...state, emailPreferences: payload.subscriptions, loadingError: false };
}

/**
 * Handles PROFILE/UPLOAD_PHOTO_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onUploadPhotoDone(state, { payload, error }) {
  const newState = { ...state, uploadingPhoto: false };

  if (error) {
    logger.error('Failed to upload user photo', payload);
    fireErrorMessage('ERROR: Failed to upload photo!');
    return newState;
  }

  if (!newState.info || newState.info.handle !== payload.handle) {
    return newState;
  }

  return {
    ...newState,
    info: {
      ...newState.info,
      photoURL: payload.photoURL,
    },
  };
}

/**
 * Handles PROFILE/DELETE_PHOTO_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onDeletePhotoDone(state, { payload, error }) {
  const newState = { ...state, deletingPhoto: false };

  if (error) {
    logger.error('Failed to delete user photo', payload);
    fireErrorMessage('ERROR: Failed to delete photo!');
    return newState;
  }

  if (!newState.info || newState.info.handle !== payload.handle) {
    return newState;
  }

  return {
    ...newState,
    info: {
      ...newState.info,
      photoURL: null,
    },
  };
}

/**
 * Handles PROFILE/UPDATE_PROFILE_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onUpdateProfileDone(state, { payload, error }) {
  const newState = { ...state, updatingProfile: false };

  if (payload.isEmailConflict) {
    return {
      ...newState,
      isEmailConflict: true,
      updateProfileSuccess: false,
    };
  }

  if (error) {
    logger.error('Failed to update user profile', payload);
    fireErrorMessage('ERROR: Failed to update user profile!');
    return {
      ...newState,
      updateProfileSuccess: false,
    };
  }

  if (!newState.info || newState.info.handle !== payload.handle) {
    return {
      ...newState,
      updateProfileSuccess: true,
    };
  }

  return {
    ...newState,
    info: {
      ...newState.info,
      ...payload,
    },
    updateProfileSuccess: true,
  };
}

/**
 * Handles PROFILE/UPDATE_PROFILE_DONE_V5 action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onUpdateProfileDoneV5(state, { payload, error }) {
  const newState = { ...state, updatingProfile: false };

  if (payload.isEmailConflict) {
    return {
      ...newState,
      isEmailConflict: true,
      updateProfileSuccess: false,
    };
  }

  if (error) {
    logger.error('Failed to update user profile', payload);
    fireErrorMessage('ERROR: Failed to update user profile!');
    return {
      ...newState,
      updateProfileSuccess: false,
    };
  }

  if (!newState.info || newState.info.handle !== payload.handle) {
    return {
      ...newState,
      updateProfileSuccess: true,
    };
  }

  return {
    ...newState,
    info: {
      ...newState.info,
      ...payload,
    },
    updateProfileSuccess: true,
  };
}

/**
 * Handles PROFILE/ADD_SKILL_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onAddSkillDone(state, { payload, error }) {
  const newState = { ...state, addingSkill: false };

  if (error) {
    logger.error('Failed to add user skill', payload);
    fireErrorMessage('ERROR: Failed to add user skill!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle) {
    return newState;
  }

  return {
    ...newState,
    skills: payload.skills,
  };
}

/**
 * Handles PROFILE/HIDE_SKILL_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onHideSkillDone(state, { payload, error }) {
  const newState = { ...state, hidingSkill: false };

  if (error) {
    logger.error('Failed to remove user skill', payload);
    fireErrorMessage('ERROR: Failed to remove user skill!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle) {
    return newState;
  }

  return {
    ...newState,
    skills: payload.skills,
  };
}

/**
 * Handles PROFILE/ADD_WEB_LINK_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onAddWebLinkDone(state, { payload, error }) {
  const newState = { ...state, addingWebLink: false };

  if (error) {
    logger.error('Failed to add web link', payload);
    fireErrorMessage('ERROR: Failed to add web link!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle || !payload.data) {
    return newState;
  }

  return {
    ...newState,
    externalLinks: [...newState.externalLinks, payload.data],
  };
}

/**
 * Handles PROFILE/DELETE_WEB_LINK_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onDeleteWebLinkDone(state, { payload, error }) {
  const newState = { ...state, deletingWebLink: false };

  if (error) {
    logger.error('Failed to delete web link', payload);
    fireErrorMessage('ERROR: Failed to delete web link!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle || !payload.data) {
    return newState;
  }

  return {
    ...newState,
    externalLinks: _.filter(newState.externalLinks, el => el.key !== payload.data.key),
  };
}

/**
 * Handles PROFILE/LINK_EXTERNAL_ACCOUNT_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onLinkExternalAccountDone(state, { payload, error }) {
  const newState = { ...state, linkingExternalAccount: false };

  if (error) {
    logger.error('Failed to link external account', payload);
    fireErrorMessage('ERROR: Failed to link external account!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle || !payload.data) {
    return newState;
  }

  return {
    ...newState,
    linkedAccounts: [...newState.linkedAccounts, payload.data],
  };
}

/**
 * Handles PROFILE/UNLINK_EXTERNAL_ACCOUNT_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onUnlinkExternalAccountDone(state, { payload, error }) {
  const newState = { ...state, unlinkingExternalAccount: false };

  if (error) {
    logger.error('Failed to unlink external account', payload);
    fireErrorMessage('ERROR: Failed to unlink external account!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle) {
    return newState;
  }

  return {
    ...newState,
    linkedAccounts: _.filter(
      newState.linkedAccounts,
      el => el.providerType !== payload.providerType,
    ),
  };
}

/**
 * Handles PROFILE/SAVE_EMAIL_PREFERENCES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onSaveEmailPreferencesDone(state, { payload, error }) {
  const newState = { ...state, savingEmailPreferences: false };

  if (error) {
    logger.error('Failed to save email preferences', payload);
    fireErrorMessage('ERROR: Failed to save email preferences!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle || !payload.data) {
    return newState;
  }

  return {
    ...newState,
    emailPreferences: payload.data.subscriptions,
  };
}

/**
 * Handles PROFILE/UPDATE_PASSWORD_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onUpdatePasswordDone(state, { payload, error }) {
  const newState = { ...state, updatingPassword: false };

  if (error) {
    logger.error('Failed to update password', payload);
    fireErrorMessage('The old password is invalid');
  }
  return newState;
}

/**
 * Handles PROFILE/VERIFY_MEMBER_NEW_EMAIL_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onVerifyMemberNewEmailDone(state, { payload, error }) {
  const newState = { ...state, verifyingEmail: false };

  if (error) {
    logger.error('Failed to verify member new email', payload);
    return {
      ...newState,
      verifyError: true,
    };
  }

  return {
    ...newState,
    verifyError: false,
    emailChangeResult: payload.data,
  };
}

/**
 * Handles UPDATE_EMAIL_CONFLICT action
 * @param {Object} state
 * @param {Object} action Payload will be a boolean value
 * @return {Object} New state
 */
function onUpdateEmailConflict(state, { payload }) {
  return {
    ...state,
    isEmailConflict: payload,
  };
}

/**
 * Creates a new Profile reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Profile reducer.
 */
function create(initialState) {
  const a = actions.profile;
  return handleActions({
    [a.clearProfile]: state => ({
      ...state, achievements: null, country: '', info: null, skills: null, stats: null,
    }),
    [a.loadProfile]: (state, action) => ({ ...state, profileForHandle: action.payload }),
    [a.getAchievementsInit]: state => state,
    [a.getAchievementsDone]: onGetAchievementsDone,
    [a.getAchievementsV3Done]: onGetAchievementsV3Done,
    [a.getExternalAccountsInit]: state => state,
    [a.getExternalAccountsDone]: onGetExternalAccountsDone,
    [a.getExternalLinksInit]: state => state,
    [a.getExternalLinksDone]: onGetExternalLinksDone,
    [a.getInfoInit]: state => state,
    [a.getInfoDone]: onGetInfoDone,
    [a.getSkillsInit]: state => state,
    [a.getSkillsDone]: onGetSkillsDone,
    [a.getStatsInit]: state => state,
    [a.getStatsDone]: onGetStatsDone,
    [a.getLinkedAccountsInit]: state => state,
    [a.getLinkedAccountsDone]: onGetLinkedAccountsDone,
    [a.uploadPhotoInit]: state => ({ ...state, uploadingPhoto: true }),
    [a.uploadPhotoDone]: onUploadPhotoDone,
    [a.deletePhotoInit]: state => ({ ...state, deletingPhoto: true }),
    [a.deletePhotoDone]: onDeletePhotoDone,
    [a.updateProfileInit]: state => ({ ...state, updatingProfile: true }),
    [a.updateProfileDone]: onUpdateProfileDone,
    [a.updateProfileInitV5]: state => ({ ...state, updatingProfile: true }),
    [a.updateProfileDoneV5]: onUpdateProfileDoneV5,
    [a.addSkillInit]: state => ({ ...state, addingSkill: true }),
    [a.addSkillDone]: onAddSkillDone,
    [a.hideSkillInit]: state => ({ ...state, hidingSkill: true }),
    [a.hideSkillDone]: onHideSkillDone,
    [a.addWebLinkInit]: state => ({ ...state, addingWebLink: true }),
    [a.addWebLinkDone]: onAddWebLinkDone,
    [a.deleteWebLinkInit]: state => ({ ...state, deletingWebLink: true }),
    [a.deleteWebLinkDone]: onDeleteWebLinkDone,
    [a.linkExternalAccountInit]: state => ({ ...state, linkingExternalAccount: true }),
    [a.linkExternalAccountDone]: onLinkExternalAccountDone,
    [a.unlinkExternalAccountInit]: state => ({ ...state, unlinkingExternalAccount: true }),
    [a.unlinkExternalAccountDone]: onUnlinkExternalAccountDone,
    [a.getCredentialInit]: state => state,
    [a.getCredentialDone]: onGetCredentialDone,
    [a.getEmailPreferencesInit]: state => state,
    [a.getEmailPreferencesDone]: onGetEmailPreferencesDone,
    [a.saveEmailPreferencesInit]: state => ({ ...state, savingEmailPreferences: true }),
    [a.saveEmailPreferencesDone]: onSaveEmailPreferencesDone,
    [a.updatePasswordInit]: state => ({ ...state, updatingPassword: true }),
    [a.updatePasswordDone]: onUpdatePasswordDone,
    [a.verifyMemberNewEmailInit]: state => ({ ...state, verifyingEmail: true }),
    [a.verifyMemberNewEmailDone]: onVerifyMemberNewEmailDone,
    [a.updateEmailConflict]: onUpdateEmailConflict,
  }, _.defaults(initialState, {
    achievements: null,
    copilot: false,
    country: '',
    info: null,
    loadingError: false,
    skills: null,
    stats: null,
    verifyError: null,
    updateProfileSuccess: null,
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @returns {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
export function factory() {
  return Promise.resolve(create());
}

/* Reducer with the default initial state. */
export default create();
