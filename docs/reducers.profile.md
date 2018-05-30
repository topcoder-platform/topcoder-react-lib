<a name="module_reducers.profile"></a>

## reducers.profile
Reducer for Profile API data

**Todo**

- [ ] Document reducer state structure.


* [reducers.profile](#module_reducers.profile)
    * _static_
        * [.factory()](#module_reducers.profile.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~onGetAchievementsDone(state, action)](#module_reducers.profile..onGetAchievementsDone) ⇒ <code>Object</code>
        * [~onGetExternalAccountsDone(state, action)](#module_reducers.profile..onGetExternalAccountsDone) ⇒ <code>Object</code>
        * [~onGetExternalLinksDone(state, action)](#module_reducers.profile..onGetExternalLinksDone) ⇒ <code>Object</code>
        * [~onGetInfoDone(state, action)](#module_reducers.profile..onGetInfoDone) ⇒ <code>Object</code>
        * [~onGetSkillsDone(state, action)](#module_reducers.profile..onGetSkillsDone) ⇒ <code>Object</code>
        * [~onGetStatsDone(state, action)](#module_reducers.profile..onGetStatsDone) ⇒ <code>Object</code>
        * [~onGetActiveChallengesCountDone(state, action)](#module_reducers.profile..onGetActiveChallengesCountDone) ⇒ <code>Object</code>
        * [~onGetLinkedAccountsDone(state, action)](#module_reducers.profile..onGetLinkedAccountsDone) ⇒ <code>Object</code>
        * [~onGetCredentialDone(state, action)](#module_reducers.profile..onGetCredentialDone) ⇒ <code>Object</code>
        * [~onGetEmailPreferencesDone(state, action)](#module_reducers.profile..onGetEmailPreferencesDone) ⇒ <code>Object</code>
        * [~onUploadPhotoDone(state, action)](#module_reducers.profile..onUploadPhotoDone) ⇒ <code>Object</code>
        * [~onDeletePhotoDone(state, action)](#module_reducers.profile..onDeletePhotoDone) ⇒ <code>Object</code>
        * [~onUpdateProfileDone(state, action)](#module_reducers.profile..onUpdateProfileDone) ⇒ <code>Object</code>
        * [~onAddSkillDone(state, action)](#module_reducers.profile..onAddSkillDone) ⇒ <code>Object</code>
        * [~onHideSkillDone(state, action)](#module_reducers.profile..onHideSkillDone) ⇒ <code>Object</code>
        * [~onAddWebLinkDone(state, action)](#module_reducers.profile..onAddWebLinkDone) ⇒ <code>Object</code>
        * [~onDeleteWebLinkDone(state, action)](#module_reducers.profile..onDeleteWebLinkDone) ⇒ <code>Object</code>
        * [~onLinkExternalAccountDone(state, action)](#module_reducers.profile..onLinkExternalAccountDone) ⇒ <code>Object</code>
        * [~onUnlinkExternalAccountDone(state, action)](#module_reducers.profile..onUnlinkExternalAccountDone) ⇒ <code>Object</code>
        * [~onSaveEmailPreferencesDone(state, action)](#module_reducers.profile..onSaveEmailPreferencesDone) ⇒ <code>Object</code>
        * [~onUpdatePasswordDone(state, action)](#module_reducers.profile..onUpdatePasswordDone) ⇒ <code>Object</code>
        * [~create(initialState)](#module_reducers.profile..create) ⇒ <code>function</code>

<a name="module_reducers.profile.factory"></a>

### reducers.profile.factory() ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  
<a name="module_reducers.profile..onGetAchievementsDone"></a>

### reducers.profile~onGetAchievementsDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/GET_ACHIEVEMENTS_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onGetExternalAccountsDone"></a>

### reducers.profile~onGetExternalAccountsDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/GET_EXTERNAL_ACCOUNTS_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onGetExternalLinksDone"></a>

### reducers.profile~onGetExternalLinksDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/GET_EXTERNAL_LINKS_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onGetInfoDone"></a>

### reducers.profile~onGetInfoDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/GET_INFO_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onGetSkillsDone"></a>

### reducers.profile~onGetSkillsDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/GET_SKILLS_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onGetStatsDone"></a>

### reducers.profile~onGetStatsDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/GET_STATS_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onGetActiveChallengesCountDone"></a>

### reducers.profile~onGetActiveChallengesCountDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/GET_ACTIVE_CHALLENGES_COUNT_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onGetLinkedAccountsDone"></a>

### reducers.profile~onGetLinkedAccountsDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/GET_LINKED_ACCOUNTS_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onGetCredentialDone"></a>

### reducers.profile~onGetCredentialDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/GET_CREDENTIAL_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onGetEmailPreferencesDone"></a>

### reducers.profile~onGetEmailPreferencesDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/GET_EMAIL_PREFERENCES_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onUploadPhotoDone"></a>

### reducers.profile~onUploadPhotoDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/UPLOAD_PHOTO_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onDeletePhotoDone"></a>

### reducers.profile~onDeletePhotoDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/DELETE_PHOTO_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onUpdateProfileDone"></a>

### reducers.profile~onUpdateProfileDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/UPDATE_PROFILE_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onAddSkillDone"></a>

### reducers.profile~onAddSkillDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/ADD_SKILL_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onHideSkillDone"></a>

### reducers.profile~onHideSkillDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/HIDE_SKILL_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onAddWebLinkDone"></a>

### reducers.profile~onAddWebLinkDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/ADD_WEB_LINK_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onDeleteWebLinkDone"></a>

### reducers.profile~onDeleteWebLinkDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/DELETE_WEB_LINK_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onLinkExternalAccountDone"></a>

### reducers.profile~onLinkExternalAccountDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/LINK_EXTERNAL_ACCOUNT_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onUnlinkExternalAccountDone"></a>

### reducers.profile~onUnlinkExternalAccountDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/UNLINK_EXTERNAL_ACCOUNT_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onSaveEmailPreferencesDone"></a>

### reducers.profile~onSaveEmailPreferencesDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/SAVE_EMAIL_PREFERENCES_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..onUpdatePasswordDone"></a>

### reducers.profile~onUpdatePasswordDone(state, action) ⇒ <code>Object</code>
Handles PROFILE/UPDATE_PASSWORD_DONE action.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.profile..create"></a>

### reducers.profile~create(initialState) ⇒ <code>function</code>
Creates a new Profile reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>function</code> - Profile reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

