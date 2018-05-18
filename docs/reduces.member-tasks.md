<a name="module_reduces.member-tasks"></a>

## reduces.member-tasks
Member tasks reducer.

**Todo**

- [ ] Document state segment structure.


* [reduces.member-tasks](#module_reduces.member-tasks)
    * _static_
        * [.default](#module_reduces.member-tasks.default)
        * [.factory()](#module_reduces.member-tasks.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~onDropAll(state)](#module_reduces.member-tasks..onDropAll) ⇒ <code>Object</code>
        * [~onGetInit(state, action)](#module_reduces.member-tasks..onGetInit) ⇒ <code>Object</code>
        * [~onGetDone(state, action)](#module_reduces.member-tasks..onGetDone) ⇒ <code>Object</code>
        * [~create(initialState)](#module_reduces.member-tasks..create) ⇒ <code>function</code>

<a name="module_reduces.member-tasks.default"></a>

### reduces.member-tasks.default
Reducer with default initial state.

**Kind**: static property of [<code>reduces.member-tasks</code>](#module_reduces.member-tasks)  
<a name="module_reduces.member-tasks.factory"></a>

### reduces.member-tasks.factory() ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reduces.member-tasks</code>](#module_reduces.member-tasks)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  
<a name="module_reduces.member-tasks..onDropAll"></a>

### reduces.member-tasks~onDropAll(state) ⇒ <code>Object</code>
Drops all tasks and cancels the ongoing loading operation, if it is pending.

**Kind**: inner method of [<code>reduces.member-tasks</code>](#module_reduces.member-tasks)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 

<a name="module_reduces.member-tasks..onGetInit"></a>

### reduces.member-tasks~onGetInit(state, action) ⇒ <code>Object</code>
Stores into the state meta data about the initiated loading operation.
This will effectively cancel the already pending loading operation, if any.

**Kind**: inner method of [<code>reduces.member-tasks</code>](#module_reduces.member-tasks)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reduces.member-tasks..onGetDone"></a>

### reduces.member-tasks~onGetDone(state, action) ⇒ <code>Object</code>
Handles the actual result of the loading operation.

**Kind**: inner method of [<code>reduces.member-tasks</code>](#module_reduces.member-tasks)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reduces.member-tasks..create"></a>

### reduces.member-tasks~create(initialState) ⇒ <code>function</code>
Creates a new Member tasks reducer with the specified initial state.

**Kind**: inner method of [<code>reduces.member-tasks</code>](#module_reduces.member-tasks)  
**Returns**: <code>function</code> - Member tasks reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

