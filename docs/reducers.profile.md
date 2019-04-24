<a name="module_actions.profile"></a>

## actions.profile
Actions for interactions with profile details API.

**Todo**

- [ ] Some of them repeat actions in [actions.members.md](actions.members.md). The code
 should be refactored to avoid redundancy.


* [actions.profile](#module_actions.profile)
    * [.loadProfile(handle)](#module_actions.profile.loadProfile) ⇒ <code>Action</code>
    * [.clearProfile()](#module_actions.profile.clearProfile) ⇒ <code>Action</code>
    * [.getAchievementsInit()](#module_actions.profile.getAchievementsInit) ⇒ <code>Action</code>
    * [.getAchievementsDone(handle)](#module_actions.profile.getAchievementsDone) ⇒ <code>Action</code>
    * [.getAchievementsV3Done(handle)](#module_actions.profile.getAchievementsV3Done) ⇒ <code>Action</code>
    * [.getExternalAccountsInit()](#module_actions.profile.getExternalAccountsInit) ⇒ <code>Action</code>
    * [.getExternalAccountsDone(handle)](#module_actions.profile.getExternalAccountsDone) ⇒ <code>Action</code>
    * [.getExternalLinksInit()](#module_actions.profile.getExternalLinksInit) ⇒ <code>Action</code>
    * [.getExternalLinksDone(handle)](#module_actions.profile.getExternalLinksDone) ⇒ <code>Action</code>
    * [.getInfoInit()](#module_actions.profile.getInfoInit) ⇒ <code>Action</code>
    * [.getInfoDone(handle)](#module_actions.profile.getInfoDone) ⇒ <code>Action</code>
    * [.getSkillsInit()](#module_actions.profile.getSkillsInit) ⇒ <code>Action</code>
    * [.getSkillsDone(handle)](#module_actions.profile.getSkillsDone) ⇒ <code>Action</code>
    * [.getStatsInit()](#module_actions.profile.getStatsInit) ⇒ <code>Action</code>
    * [.getStatsDone(handle)](#module_actions.profile.getStatsDone) ⇒ <code>Action</code>
    * [.getLinkedAccountsInit()](#module_actions.profile.getLinkedAccountsInit) ⇒ <code>Action</code>
    * [.getLinkedAccountsDone(profile, tokenV3)](#module_actions.profile.getLinkedAccountsDone) ⇒ <code>Action</code>
    * [.getCredentialInit()](#module_actions.profile.getCredentialInit) ⇒ <code>Action</code>
    * [.getCredentialDone(profile, tokenV3)](#module_actions.profile.getCredentialDone) ⇒ <code>Action</code>
    * [.getEmailPreferencesInit()](#module_actions.profile.getEmailPreferencesInit) ⇒ <code>Action</code>
    * [.getEmailPreferencesDone(profile, tokenV3)](#module_actions.profile.getEmailPreferencesDone) ⇒ <code>Action</code>
    * [.uploadPhotoInit()](#module_actions.profile.uploadPhotoInit) ⇒ <code>Action</code>
    * [.uploadPhotoDone(handle, tokenV3, file)](#module_actions.profile.uploadPhotoDone) ⇒ <code>Action</code>
    * [.deletePhotoInit()](#module_actions.profile.deletePhotoInit) ⇒ <code>Action</code>
    * [.updateProfileInit()](#module_actions.profile.updateProfileInit) ⇒ <code>Action</code>
    * [.updateProfileDone(profile, tokenV3)](#module_actions.profile.updateProfileDone) ⇒ <code>Action</code>
    * [.addSkillInit()](#module_actions.profile.addSkillInit) ⇒ <code>Action</code>
    * [.addSkillDone(handle, tokenV3, skill)](#module_actions.profile.addSkillDone) ⇒ <code>Action</code>
    * [.hideSkillInit()](#module_actions.profile.hideSkillInit) ⇒ <code>Action</code>
    * [.hideSkillDone(handle, tokenV3, skill)](#module_actions.profile.hideSkillDone) ⇒ <code>Action</code>
    * [.addWebLinkInit()](#module_actions.profile.addWebLinkInit) ⇒ <code>Action</code>
    * [.addWebLinkDone(handle, tokenV3, webLink)](#module_actions.profile.addWebLinkDone) ⇒ <code>Action</code>
    * [.deleteWebLinkInit(key)](#module_actions.profile.deleteWebLinkInit) ⇒ <code>Action</code>
    * [.deleteWebLinkDone(handle, tokenV3, webLink)](#module_actions.profile.deleteWebLinkDone) ⇒ <code>Action</code>
    * [.linkExternalAccountInit()](#module_actions.profile.linkExternalAccountInit) ⇒ <code>Action</code>
    * [.linkExternalAccountDone(profile, tokenV3, providerType, callbackUrl)](#module_actions.profile.linkExternalAccountDone) ⇒ <code>Action</code>
    * [.unlinkExternalAccountInit(providerType)](#module_actions.profile.unlinkExternalAccountInit) ⇒ <code>Action</code>
    * [.unlinkExternalAccountDone(profile, tokenV3, providerType)](#module_actions.profile.unlinkExternalAccountDone) ⇒ <code>Action</code>
    * [.saveEmailPreferencesInit()](#module_actions.profile.saveEmailPreferencesInit) ⇒ <code>Action</code>
    * [.saveEmailPreferencesDone(profile, tokenV3, preferences)](#module_actions.profile.saveEmailPreferencesDone) ⇒ <code>Action</code>
    * [.updatePasswordInit()](#module_actions.profile.updatePasswordInit) ⇒ <code>Action</code>
    * [.updatePasswordDone(profile, tokenV3, newPassword, oldPassword)](#module_actions.profile.updatePasswordDone) ⇒ <code>Action</code>
    * [.verifyMemberNewEmailInit()](#module_actions.profile.verifyMemberNewEmailInit) ⇒ <code>Action</code>
    * [.verifyMemberNewEmailDone(handle, tokenV3, emailVerifyToken)](#module_actions.profile.verifyMemberNewEmailDone) ⇒ <code>Action</code>

<a name="module_actions.profile.loadProfile"></a>

### actions.profile.loadProfile(handle) ⇒ <code>Action</code>
Creates and action that loads user profile.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] This action does not follow the pattern with init/done pairs of
 actions. Should be improved.


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.clearProfile"></a>

### actions.profile.clearProfile() ⇒ <code>Action</code>
Creates and action that clear user profile.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] This action does not follow the pattern with init/done pairs of
 actions. Should be improved.

<a name="module_actions.profile.getAchievementsInit"></a>

### actions.profile.getAchievementsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of user achievements loading.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] This duplicates similar action in [actions.members.md](actions.members.md)!

<a name="module_actions.profile.getAchievementsDone"></a>

### actions.profile.getAchievementsDone(handle) ⇒ <code>Action</code>
Creates an action that loads user achievements from v2 API.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] This duplicates similar action in [actions.members.md](actions.members.md)!


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.getAchievementsV3Done"></a>

### actions.profile.getAchievementsV3Done(handle) ⇒ <code>Action</code>
Creates an action that loads user achievements from v3 API.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] This duplicates similar action in [actions.members.md](actions.members.md)!


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.getExternalAccountsInit"></a>

### actions.profile.getExternalAccountsInit() ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] To be documented.

<a name="module_actions.profile.getExternalAccountsDone"></a>

### actions.profile.getExternalAccountsDone(handle) ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] To be documented.


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.getExternalLinksInit"></a>

### actions.profile.getExternalLinksInit() ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] Figure out what does this action do.

<a name="module_actions.profile.getExternalLinksDone"></a>

### actions.profile.getExternalLinksDone(handle) ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] Figure out the purpose of this action


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.getInfoInit"></a>

### actions.profile.getInfoInit() ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] Figure out the purpose of this action.

<a name="module_actions.profile.getInfoDone"></a>

### actions.profile.getInfoDone(handle) ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] Figure out the purpose of this action.


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.getSkillsInit"></a>

### actions.profile.getSkillsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of loading the member's
 skills info.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.getSkillsDone"></a>

### actions.profile.getSkillsDone(handle) ⇒ <code>Action</code>
Creates an action that loads member's skills info.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |

<a name="module_actions.profile.getStatsInit"></a>

### actions.profile.getStatsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of loading member's stats.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
**Todo**

- [ ] This is similar to [actions.members.md#module_actions.members.getStatsInit](actions.members.md#module_actions.members.getStatsInit)!

<a name="module_actions.profile.getStatsDone"></a>

### actions.profile.getStatsDone(handle) ⇒ <code>Action</code>
Creates an action that loads member's stats.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |

<a name="module_actions.profile.getLinkedAccountsInit"></a>

### actions.profile.getLinkedAccountsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of getting linked accounts.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.getLinkedAccountsDone"></a>

### actions.profile.getLinkedAccountsDone(profile, tokenV3) ⇒ <code>Action</code>
Creates an action that gets linked accounts.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>Object</code> | Topcoder member profile. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |

<a name="module_actions.profile.getCredentialInit"></a>

### actions.profile.getCredentialInit() ⇒ <code>Action</code>
Creates an action that signals beginning of getting credential.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.getCredentialDone"></a>

### actions.profile.getCredentialDone(profile, tokenV3) ⇒ <code>Action</code>
Creates an action that gets credential.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>Object</code> | Topcoder member profile. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |

<a name="module_actions.profile.getEmailPreferencesInit"></a>

### actions.profile.getEmailPreferencesInit() ⇒ <code>Action</code>
Creates an action that signals beginning of getting email preferences.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.getEmailPreferencesDone"></a>

### actions.profile.getEmailPreferencesDone(profile, tokenV3) ⇒ <code>Action</code>
Creates an action that gets email preferences.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>Object</code> | Topcoder member profile. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |

<a name="module_actions.profile.uploadPhotoInit"></a>

### actions.profile.uploadPhotoInit() ⇒ <code>Action</code>
Creates an action that signals beginning of uploading user's photo.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.uploadPhotoDone"></a>

### actions.profile.uploadPhotoDone(handle, tokenV3, file) ⇒ <code>Action</code>
Creates an action that uploads user's photo.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder user handle. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
| file | <code>String</code> | The photo file. |

<a name="module_actions.profile.deletePhotoInit"></a>

### actions.profile.deletePhotoInit() ⇒ <code>Action</code>
Creates an action that signals beginning of deleting user's photo.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.updateProfileInit"></a>

### actions.profile.updateProfileInit() ⇒ <code>Action</code>
Creates an action that signals beginning of updating user's profile.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.updateProfileDone"></a>

### actions.profile.updateProfileDone(profile, tokenV3) ⇒ <code>Action</code>
Creates an action that updates user's profile.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>String</code> | Topcoder user profile. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |

<a name="module_actions.profile.addSkillInit"></a>

### actions.profile.addSkillInit() ⇒ <code>Action</code>
Creates an action that signals beginning of adding user's skill.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.addSkillDone"></a>

### actions.profile.addSkillDone(handle, tokenV3, skill) ⇒ <code>Action</code>
Creates an action that adds user's skill.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder user handle. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
| skill | <code>Object</code> | Skill to add. |

<a name="module_actions.profile.hideSkillInit"></a>

### actions.profile.hideSkillInit() ⇒ <code>Action</code>
Creates an action that signals beginning of hiding user's skill.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.hideSkillDone"></a>

### actions.profile.hideSkillDone(handle, tokenV3, skill) ⇒ <code>Action</code>
Creates an action that hides user's skill.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder user handle. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
| skill | <code>Object</code> | Skill to hide. |

<a name="module_actions.profile.addWebLinkInit"></a>

### actions.profile.addWebLinkInit() ⇒ <code>Action</code>
Creates an action that signals beginning of adding user's web link.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.addWebLinkDone"></a>

### actions.profile.addWebLinkDone(handle, tokenV3, webLink) ⇒ <code>Action</code>
Creates an action that adds user's web link.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder user handle. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
| webLink | <code>String</code> | Web link to add. |

<a name="module_actions.profile.deleteWebLinkInit"></a>

### actions.profile.deleteWebLinkInit(key) ⇒ <code>Action</code>
Creates an action that signals beginning of deleting user's web link.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| key | <code>Object</code> | Web link key to delete. |

<a name="module_actions.profile.deleteWebLinkDone"></a>

### actions.profile.deleteWebLinkDone(handle, tokenV3, webLink) ⇒ <code>Action</code>
Creates an action that deletes user's web link.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder user handle. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
| webLink | <code>String</code> | Web link to delete. |

<a name="module_actions.profile.linkExternalAccountInit"></a>

### actions.profile.linkExternalAccountInit() ⇒ <code>Action</code>
Creates an action that signals beginning of linking external account.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.linkExternalAccountDone"></a>

### actions.profile.linkExternalAccountDone(profile, tokenV3, providerType, callbackUrl) ⇒ <code>Action</code>
Creates an action that links external account.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>Object</code> | Topcoder member handle. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
| providerType | <code>String</code> | The external account service provider |
| callbackUrl | <code>String</code> | Optional. The callback url |

<a name="module_actions.profile.unlinkExternalAccountInit"></a>

### actions.profile.unlinkExternalAccountInit(providerType) ⇒ <code>Action</code>
Creates an action that signals beginning of unlinking external account.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| providerType | <code>Object</code> | External account provider type to delete. |

<a name="module_actions.profile.unlinkExternalAccountDone"></a>

### actions.profile.unlinkExternalAccountDone(profile, tokenV3, providerType) ⇒ <code>Action</code>
Creates an action that unlinks external account.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>Object</code> | Topcoder member profile. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
| providerType | <code>String</code> | The external account service provider |

<a name="module_actions.profile.saveEmailPreferencesInit"></a>

### actions.profile.saveEmailPreferencesInit() ⇒ <code>Action</code>
Creates an action that signals beginning of saving email preferences.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.saveEmailPreferencesDone"></a>

### actions.profile.saveEmailPreferencesDone(profile, tokenV3, preferences) ⇒ <code>Action</code>
Creates an action that saves email preferences.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>Object</code> | Topcoder member profile. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
| preferences | <code>Object</code> | The email preferences |

<a name="module_actions.profile.updatePasswordInit"></a>

### actions.profile.updatePasswordInit() ⇒ <code>Action</code>
Creates an action that signals beginning of updating user password.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.updatePasswordDone"></a>

### actions.profile.updatePasswordDone(profile, tokenV3, newPassword, oldPassword) ⇒ <code>Action</code>
Creates an action that updates user password.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>Object</code> | Topcoder member profile. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
| newPassword | <code>String</code> | The new password |
| oldPassword | <code>String</code> | The old password |



### actions.profile.verifyMemberNewEmailInit() ⇒ <code>Action</code>
Creates an action that signals beginning of verify member new email.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.verifyMemberNewEmailInit"></a>


### actions.profile.verifyMemberNewEmailDone(handle, tokenV3, emailVerifyToken) ⇒ <code>Action</code>
Creates an action that verify member new email.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)
<a name="module_actions.profile.verifyMemberNewEmailDone"></a>

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder member handle. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
| emailVerifyToken | <code>String</code> | The verify token of new email |
