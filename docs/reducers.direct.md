<a name="module_reducers.direct"></a>

## reducers.direct
Reducer for handling the results of Direct-related actions.

**Todo**

- [ ] Document state segment structure.


* [reducers.direct](#module_reducers.direct)
    * _static_
        * [.default](#module_reducers.direct.default)
        * [.factory()](#module_reducers.direct.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~onDropAll(state)](#module_reducers.direct..onDropAll) ⇒ <code>Object</code>
        * [~onGetProjectDetailsInit(state, action)](#module_reducers.direct..onGetProjectDetailsInit) ⇒ <code>Object</code>
        * [~onGetProjectDetailsDone(state, action)](#module_reducers.direct..onGetProjectDetailsDone) ⇒ <code>Object</code>
        * [~onGetProjectPermissionsInit(state, action)](#module_reducers.direct..onGetProjectPermissionsInit) ⇒ <code>Object</code>
        * [~onGetProjectPermissionsDone(state, action)](#module_reducers.direct..onGetProjectPermissionsDone) ⇒ <code>Object</code>
        * [~onGetUserProjectsInit(state, action)](#module_reducers.direct..onGetUserProjectsInit) ⇒ <code>Object</code>
        * [~onGetUserProjectsDone(state, action)](#module_reducers.direct..onGetUserProjectsDone) ⇒ <code>Object</code>
        * [~create(initialState, mergeReducers)](#module_reducers.direct..create) ⇒ <code>function</code>

<a name="module_reducers.direct.default"></a>

### reducers.direct.default
Reducer with default initial state.

**Kind**: static property of [<code>reducers.direct</code>](#module_reducers.direct)  
<a name="module_reducers.direct.factory"></a>

### reducers.direct.factory() ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.direct</code>](#module_reducers.direct)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  
<a name="module_reducers.direct..onDropAll"></a>

### reducers.direct~onDropAll(state) ⇒ <code>Object</code>
Drops out all data and cancels any ongoing data loading related to this
reducer.

**Kind**: inner method of [<code>reducers.direct</code>](#module_reducers.direct)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 

<a name="module_reducers.direct..onGetProjectDetailsInit"></a>

### reducers.direct~onGetProjectDetailsInit(state, action) ⇒ <code>Object</code>
Inits loading of the specified project, cancelling the ongoing loading of
project details, if any.

**Kind**: inner method of [<code>reducers.direct</code>](#module_reducers.direct)  
**Returns**: <code>Object</code> - New state.  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Its payload is the projectId. |

<a name="module_reducers.direct..onGetProjectDetailsDone"></a>

### reducers.direct~onGetProjectDetailsDone(state, action) ⇒ <code>Object</code>
Stores loaded project details to the state.

**Kind**: inner method of [<code>reducers.direct</code>](#module_reducers.direct)  
**Returns**: <code>Object</code> - New state.  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Its payload is the project details object. |

<a name="module_reducers.direct..onGetProjectPermissionsInit"></a>

### reducers.direct~onGetProjectPermissionsInit(state, action) ⇒ <code>Object</code>
Handler for the GET_PROJECT_PERMISSIONS_INIT action.

**Kind**: inner method of [<code>reducers.direct</code>](#module_reducers.direct)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.direct..onGetProjectPermissionsDone"></a>

### reducers.direct~onGetProjectPermissionsDone(state, action) ⇒ <code>Object</code>
Handler for the GET_PROJECT_PERMISSIONS_DONE action.

**Kind**: inner method of [<code>reducers.direct</code>](#module_reducers.direct)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.direct..onGetUserProjectsInit"></a>

### reducers.direct~onGetUserProjectsInit(state, action) ⇒ <code>Object</code>
Handles initialization of projects loading.

**Kind**: inner method of [<code>reducers.direct</code>](#module_reducers.direct)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.direct..onGetUserProjectsDone"></a>

### reducers.direct~onGetUserProjectsDone(state, action) ⇒ <code>Object</code>
Handles the result of projects loading.

**Kind**: inner method of [<code>reducers.direct</code>](#module_reducers.direct)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.direct..create"></a>

### reducers.direct~create(initialState, mergeReducers) ⇒ <code>function</code>
Creates a new Direct reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.direct</code>](#module_reducers.direct)  
**Returns**: <code>function</code> - Direct reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |
| mergeReducers | <code>Object</code> | Optional. Reducers to merge. |

