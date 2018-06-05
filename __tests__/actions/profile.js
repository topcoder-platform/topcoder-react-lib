import { redux } from 'topcoder-react-utils';

import * as MembersService from 'services/members';
import * as UserService from 'services/user';

import actions from 'actions/profile';

const handle = 'tcscoder';
const tokenV3 = 'tokenV3';
const profile = { userId: 12345, handle };
const skill = { tagId: 123, tagName: 'Node.js' };
const weblink = 'https://www.google.com';
const linkedAccounts = [{
  providerType: 'github',
  social: true,
  userId: '623633',
}];

// Mock services
const mockMembersService = {
  getPresignedUrl: jest.fn().mockReturnValue(Promise.resolve()),
  uploadFileToS3: jest.fn().mockReturnValue(Promise.resolve()),
  updateMemberPhoto: jest.fn().mockReturnValue(Promise.resolve('url-of-photo')),
  updateMemberProfile: jest.fn().mockReturnValue(Promise.resolve(profile)),
  addSkill: jest.fn().mockReturnValue(Promise.resolve({ skills: [skill] })),
  hideSkill: jest.fn().mockReturnValue(Promise.resolve({ skills: [] })),
  addWebLink: jest.fn().mockReturnValue(Promise.resolve(weblink)),
  deleteWebLink: jest.fn().mockReturnValue(Promise.resolve(weblink)),
};
MembersService.getService = jest.fn().mockReturnValue(mockMembersService);

const mockUserService = {
  linkExternalAccount: jest.fn().mockReturnValue(Promise.resolve(linkedAccounts[0])),
  unlinkExternalAccount: jest.fn().mockReturnValue(Promise.resolve('unlinked')),
  getLinkedAccounts: jest.fn().mockReturnValue(Promise.resolve({ profiles: linkedAccounts })),
  getCredential: jest.fn().mockReturnValue(Promise.resolve({ credential: { hasPassword: true } })),
  getEmailPreferences:
    jest.fn().mockReturnValue(Promise.resolve({ subscriptions: { TOPCODER_NL_DATA: true } })),
  saveEmailPreferences:
    jest.fn().mockReturnValue(Promise.resolve({ subscriptions: { TOPCODER_NL_DATA: true } })),
  updatePassword: jest.fn().mockReturnValue(Promise.resolve({ update: true })),
};
UserService.getService = jest.fn().mockReturnValue(mockUserService);

test('Module exports', () => expect(actions).toMatchSnapshot());

test('profile.uploadPhotoDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.uploadPhotoDone(handle, tokenV3));
  expect(actionResult).toMatchSnapshot();
  expect(mockMembersService.getPresignedUrl).toBeCalled();
  expect(mockMembersService.uploadFileToS3).toBeCalled();
  expect(mockMembersService.updateMemberPhoto).toBeCalled();
});

test('profile.updateProfileDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.updateProfileDone(profile, tokenV3));
  expect(actionResult).toMatchSnapshot();
  expect(mockMembersService.updateMemberProfile).toBeCalled();
});

test('profile.addSkillDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.addSkillDone(handle, tokenV3, skill));
  expect(actionResult).toMatchSnapshot();
  expect(mockMembersService.addSkill).toBeCalled();
});

test('profile.hideSkillDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.hideSkillDone(handle, tokenV3, skill));
  expect(actionResult).toMatchSnapshot();
  expect(mockMembersService.hideSkill).toBeCalled();
});

test('profile.addWebLinkDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.addWebLinkDone(handle, tokenV3, weblink));
  expect(actionResult).toMatchSnapshot();
  expect(mockMembersService.addWebLink).toBeCalled();
});

test('profile.deleteWebLinkDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.deleteWebLinkDone(handle, tokenV3, weblink));
  expect(actionResult).toMatchSnapshot();
  expect(mockMembersService.deleteWebLink).toBeCalled();
});

test('profile.linkExternalAccountDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.linkExternalAccountDone(profile, tokenV3, 'github'));
  expect(actionResult).toMatchSnapshot();
  expect(mockUserService.linkExternalAccount).toBeCalled();
});

test('profile.unlinkExternalAccountDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.unlinkExternalAccountDone(profile, tokenV3, 'github'));
  expect(actionResult).toMatchSnapshot();
  expect(mockUserService.unlinkExternalAccount).toBeCalled();
});

test('profile.getLinkedAccountsDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.getLinkedAccountsDone(profile, tokenV3));
  expect(actionResult).toMatchSnapshot();
  expect(mockUserService.getLinkedAccounts).toBeCalled();
});

test('profile.getCredentialDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.getCredentialDone(profile, tokenV3));
  expect(actionResult).toMatchSnapshot();
  expect(mockUserService.getCredential).toBeCalled();
});

test('profile.getEmailPreferencesDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.getEmailPreferencesDone(profile, tokenV3));
  expect(actionResult).toMatchSnapshot();
  expect(mockUserService.getEmailPreferences).toBeCalled();
});

test('profile.saveEmailPreferencesDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.saveEmailPreferencesDone(profile, tokenV3, {}));
  expect(actionResult).toMatchSnapshot();
  expect(mockUserService.saveEmailPreferences).toBeCalled();
});

test('profile.updatePasswordDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.profile.updatePasswordDone(profile, tokenV3, 'newPassword', 'oldPassword'));
  expect(actionResult).toMatchSnapshot();
  expect(mockUserService.updatePassword).toBeCalled();
});

