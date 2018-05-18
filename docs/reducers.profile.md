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

<a name="module_reducers.profile..create"></a>

### reducers.profile~create(initialState) ⇒ <code>function</code>
Creates a new Profile reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.profile</code>](#module_reducers.profile)  
**Returns**: <code>function</code> - Profile reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

