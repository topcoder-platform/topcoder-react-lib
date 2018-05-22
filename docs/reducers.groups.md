<a name="module_reducers.groups"></a>

## reducers.groups
This reducer handles information related to user-groups.

Corresponding segment of the Redux state is designed to have the following
fields:

groups {Object} - Holds loaded information about user groups. Keys of this
object are group IDs, and the values are group data object. To keep the state
flat, and our code efficient; for any group that has sub-groups, subGroups
field is removed, while subGroupsIds {String[]} field is added, and each
sub group data object is added to the groups object.

loading {Object} - Holds IDs of the groups being loaded. Removing ID from
this object will result in silent discard of the data loaded by the
corresponding GROUPS/GET_DONE action; though such functionality does
not look really necessary at the moment, thus we do not provide an
action to really cancel group loading.

**Todo**

- [ ] Document state segment structure better.


* [reducers.groups](#module_reducers.groups)
    * _static_
        * [.default](#module_reducers.groups.default)
        * [.factory()](#module_reducers.groups.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~mergeGroupTree(dst, src, rootId)](#module_reducers.groups..mergeGroupTree)
        * [~onDropGroups(state)](#module_reducers.groups..onDropGroups) ⇒ <code>Object</code>
        * [~onGetGroupsInit(state, action)](#module_reducers.groups..onGetGroupsInit) ⇒ <code>Object</code>
        * [~onGetGroupsDone(state, action)](#module_reducers.groups..onGetGroupsDone) ⇒ <code>Object</code>
        * [~create(initialState)](#module_reducers.groups..create) ⇒ <code>function</code>

<a name="module_reducers.groups.default"></a>

### reducers.groups.default
Reducer with default initial state.

**Kind**: static property of [<code>reducers.groups</code>](#module_reducers.groups)  
<a name="module_reducers.groups.factory"></a>

### reducers.groups.factory() ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.groups</code>](#module_reducers.groups)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  
<a name="module_reducers.groups..mergeGroupTree"></a>

### reducers.groups~mergeGroupTree(dst, src, rootId)
Private. Given two user group maps, it adds to "dst" the root group from
"src" (specified by "rootId"), and all its descendant groups. Any groups
in "src" not related to the sub-tree of the root group descendants are
not added to "dst".
This function mutates "dst"!

**Kind**: inner method of [<code>reducers.groups</code>](#module_reducers.groups)  

| Param | Type |
| --- | --- |
| dst | <code>Object</code> | 
| src | <code>Object</code> | 
| rootId | <code>String</code> | 

<a name="module_reducers.groups..onDropGroups"></a>

### reducers.groups~onDropGroups(state) ⇒ <code>Object</code>
Removes from the state all loaded user groups, and cancels any on-going
loading of user groups.

**Kind**: inner method of [<code>reducers.groups</code>](#module_reducers.groups)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 

<a name="module_reducers.groups..onGetGroupsInit"></a>

### reducers.groups~onGetGroupsInit(state, action) ⇒ <code>Object</code>
Initiates the loading of data on the specified groups.

**Kind**: inner method of [<code>reducers.groups</code>](#module_reducers.groups)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.groups..onGetGroupsDone"></a>

### reducers.groups~onGetGroupsDone(state, action) ⇒ <code>Object</code>
Finalizes the loading of data on the specified groups.

**Kind**: inner method of [<code>reducers.groups</code>](#module_reducers.groups)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.groups..create"></a>

### reducers.groups~create(initialState) ⇒ <code>function</code>
Creates a new Groups reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.groups</code>](#module_reducers.groups)  
**Returns**: <code>function</code> - Groups reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

