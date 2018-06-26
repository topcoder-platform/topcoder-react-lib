import { mockAction } from 'utils/mock';

const handle = 'tcscoder';
const photoURL = 'http://url';
const skill = { tagId: 123, tagName: 'Node.js' };
const externalLink = { providerType: 'weblink', key: '1111', URL: 'http://www.github.com' };
const webLink = { providerType: 'weblink', key: '2222', URL: 'http://www.google.com' };
const linkedAccount = { providerType: 'github', social: true, userId: '623633' };
const linkedAccount2 = { providerType: 'stackoverlow', social: true, userId: '343523' };

const mockActions = {
  profile: {
    loadProfile: mockAction('LOAD_PROFILE', handle),
    getInfoDone: mockAction('GET_INFO_DONE', { handle }),
    getExternalLinksDone: mockAction('GET_EXTERNAL_LINKS_DONE', [externalLink]),
    getLinkedAccountsDone: mockAction('GET_LINKED_ACCOUNTS_DONE', { profiles: [linkedAccount] }),
    getCredentialDone: mockAction('GET_CREDENTIAL_DONE', { credential: { hasPassword: true } }),
    getEmailPreferencesDone: mockAction('GET_EMAIL_PREFERENCES_DONE', { subscriptions: { TOPCODER_NL_DATA: true } }),
    uploadPhotoInit: mockAction('UPLOAD_PHOTO_INIT'),
    uploadPhotoDone: mockAction('UPLOAD_PHOTO_DONE', { handle, photoURL }),
    deletePhotoInit: mockAction('DELETE_PHOTO_INIT'),
    deletePhotoDone: mockAction('DELETE_PHOTO_DONE', { handle }),
    updatePasswordInit: mockAction('UPDATE_PASSWORD_INIT'),
    updatePasswordDone: mockAction('UPDATE_PASSWORD_DONE'),
    updateProfileInit: mockAction('UPDATE_PROFILE_INIT'),
    updateProfileDone: mockAction('UPDATE_PROFILE_DONE', { handle, description: 'bio desc' }),
    addSkillInit: mockAction('ADD_SKILL_INIT'),
    addSkillDone: mockAction('ADD_SKILL_DONE', { handle, skills: [skill] }),
    hideSkillInit: mockAction('HIDE_SKILL_INIT'),
    hideSkillDone: mockAction('HIDE_SKILL_DONE', { handle, skills: [] }),
    addWebLinkInit: mockAction('ADD_WEB_LINK_INIT'),
    addWebLinkDone: mockAction('ADD_WEB_LINK_DONE', { handle, data: webLink }),
    deleteWebLinkInit: mockAction('DELETE_WEB_LINK_INIT'),
    deleteWebLinkDone: mockAction('DELETE_WEB_LINK_DONE', { handle, data: webLink }),
    saveEmailPreferencesInit: mockAction('SAVE_EMAIL_PREFERENCES_INIT'),
    saveEmailPreferencesDone: mockAction('SAVE_EMAIL_PREFERENCES_DONE', { handle, data: { subscriptions: { TOPCODER_NL_DATA: true } } }),
    linkExternalAccountInit: mockAction('LINK_EXTERNAL_ACCOUNT_INIT'),
    linkExternalAccountDone: mockAction('LINK_EXTERNAL_ACCOUNT_DONE', { handle, data: linkedAccount2 }),
    unlinkExternalAccountInit: mockAction('UNLINK_EXTERNAL_ACCOUNT_INIT'),
    unlinkExternalAccountDone: mockAction('UNLINK_EXTERNAL_ACCOUNT_DONE', { handle, providerType: linkedAccount2.providerType }),
  },
};
jest.setMock(require.resolve('actions/profile'), mockActions);

const reducers = require('reducers/profile');

let reducer;

function testReducer() {
  let state;

  test('Initial state', () => {
    state = reducer(undefined, {});
    expect(state).toMatchSnapshot();
  });

  test('Load profile', () => {
    state = reducer(state, mockActions.profile.loadProfile());
    expect(state).toMatchSnapshot();
  });

  test('Get member info', () => {
    state = reducer(state, mockActions.profile.getInfoDone());
    expect(state).toMatchSnapshot();
  });

  test('Get external links', () => {
    state = reducer(state, mockActions.profile.getExternalLinksDone());
    expect(state).toMatchSnapshot();
  });

  test('Get linked account', () => {
    state = reducer(state, mockActions.profile.getLinkedAccountsDone());
    expect(state).toMatchSnapshot();
  });

  test('Get credential', () => {
    state = reducer(state, mockActions.profile.getCredentialDone());
    expect(state).toMatchSnapshot();
  });

  test('Get email preferences', () => {
    state = reducer(state, mockActions.profile.getEmailPreferencesDone());
    expect(state).toMatchSnapshot();
  });

  test('Upload photo init', () => {
    state = reducer(state, mockActions.profile.uploadPhotoInit());
    expect(state).toMatchSnapshot();
  });

  test('Upload photo done', () => {
    state = reducer(state, mockActions.profile.uploadPhotoDone());
    expect(state).toMatchSnapshot();
  });

  test('Delete photo init', () => {
    state = reducer(state, mockActions.profile.deletePhotoInit());
    expect(state).toMatchSnapshot();
  });

  test('Delete photo done', () => {
    state = reducer(state, mockActions.profile.deletePhotoDone());
    expect(state).toMatchSnapshot();
  });

  test('Update profile init', () => {
    state = reducer(state, mockActions.profile.updateProfileInit());
    expect(state).toMatchSnapshot();
  });

  test('Update profile done', () => {
    state = reducer(state, mockActions.profile.updateProfileDone());
    expect(state).toMatchSnapshot();
  });

  test('Add skill init', () => {
    state = reducer(state, mockActions.profile.addSkillInit());
    expect(state).toMatchSnapshot();
  });

  test('Add skill done', () => {
    state = reducer(state, mockActions.profile.addSkillDone());
    expect(state).toMatchSnapshot();
  });

  test('Hide skill init', () => {
    state = reducer(state, mockActions.profile.hideSkillInit());
    expect(state).toMatchSnapshot();
  });

  test('Hide skill done', () => {
    state = reducer(state, mockActions.profile.hideSkillDone());
    expect(state).toMatchSnapshot();
  });

  test('Add web link init', () => {
    state = reducer(state, mockActions.profile.addWebLinkInit());
    expect(state).toMatchSnapshot();
  });

  test('Add web link done', () => {
    state = reducer(state, mockActions.profile.addWebLinkDone());
    expect(state).toMatchSnapshot();
  });

  test('Delete web link init', () => {
    state = reducer(state, mockActions.profile.deleteWebLinkInit());
    expect(state).toMatchSnapshot();
  });

  test('Delete web link done', () => {
    state = reducer(state, mockActions.profile.deleteWebLinkDone());
    expect(state).toMatchSnapshot();
  });

  test('Link external account init', () => {
    state = reducer(state, mockActions.profile.linkExternalAccountInit());
    expect(state).toMatchSnapshot();
  });

  test('Link external account done', () => {
    state = reducer(state, mockActions.profile.linkExternalAccountDone());
    expect(state).toMatchSnapshot();
  });

  test('Unlink external account init', () => {
    state = reducer(state, mockActions.profile.unlinkExternalAccountInit());
    expect(state).toMatchSnapshot();
  });

  test('Unlink external account done', () => {
    state = reducer(state, mockActions.profile.unlinkExternalAccountDone());
    expect(state).toMatchSnapshot();
  });

  test('Save email preferences init', () => {
    state = reducer(state, mockActions.profile.saveEmailPreferencesInit());
    expect(state).toMatchSnapshot();
  });

  test('Save email preferences done', () => {
    state = reducer(state, mockActions.profile.saveEmailPreferencesDone());
    expect(state).toMatchSnapshot();
  });

  test('Update password init', () => {
    state = reducer(state, mockActions.profile.updatePasswordInit());
    expect(state).toMatchSnapshot();
  });

  test('Update password done', () => {
    state = reducer(state, mockActions.profile.updatePasswordDone());
    expect(state).toMatchSnapshot();
  });
}

describe('Default reducer', () => {
  reducer = reducers.default;
  testReducer();
});

describe('Factory without server side rendering', () => {
  beforeAll((done) => {
    reducers.factory().then((res) => {
      reducer = res;
      done();
    });
  });

  testReducer();
});
