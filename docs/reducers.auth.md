<a name="module_reducers.auth"></a>

## reducers.auth
Reducer for [actions.auth](#module_actions.auth) actions.

State segment managed by this reducer has the following structure:


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| authenticating | <code>Boolean</code> | <code>true</code> | `true` if authentication is still in  progress; `false` if it has already completed or failed. |
| profile | <code>Object</code> | <code></code> | Topcoder user profile. |
| tokenV2 | <code>String</code> | <code>&#x27;&#x27;</code> | Topcoder v2 auth token. |
| tokenV3 | <code>String</code> | <code>&#x27;&#x27;</code> | Topcoder v3 auth token. |
| user | <code>Object</code> | <code></code> | Topcoder user object (user information stored in  v3 auth token). |


* [reducers.auth](#module_reducers.auth)
    * _static_
        * [.default](#module_reducers.auth.default)
        * [.factory(options)](#module_reducers.auth.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~onProfileLoaded(state, action)](#module_reducers.auth..onProfileLoaded)
        * [~create(initialState, mergeReducers)](#module_reducers.auth..create) ⇒ <code>function</code>

<a name="module_reducers.auth.default"></a>

### reducers.auth.default
Reducer with default initial state.

**Kind**: static property of [<code>reducers.auth</code>](#module_reducers.auth)  
<a name="module_reducers.auth.factory"></a>

### reducers.auth.factory(options) ⇒ <code>Promise</code>
Creates a new reducer.

**Kind**: static method of [<code>reducers.auth</code>](#module_reducers.auth)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> | <code>{}</code> | Optional. Options for customization of initial  state. |
| [options.auth.tokenV2] | <code>String</code> | <code>&#x27;&#x27;</code> | Optional. Topcoder v2 auth token. |
| [options.auth.tokenV3] | <code>String</code> | <code>&#x27;&#x27;</code> | Optional. Topcoder v3 auth token. |

<a name="module_reducers.auth..onProfileLoaded"></a>

### reducers.auth~onProfileLoaded(state, action)
Handles actions.auth.loadProfile action.

**Kind**: inner method of [<code>reducers.auth</code>](#module_reducers.auth)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.auth..create"></a>

### reducers.auth~create(initialState, mergeReducers) ⇒ <code>function</code>
Creates a new Auth reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.auth</code>](#module_reducers.auth)  
**Returns**: <code>function</code> - Auth reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |
| mergeReducers | <code>Object</code> | Optional. Reducers to merge. |

