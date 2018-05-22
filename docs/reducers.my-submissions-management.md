<a name="module_reducers.my-submissions-management"></a>

## reducers.my-submissions-management
This reducer and corresponding actions control the logic for
 submission management.

**Todo**

- [ ] Document state segment structure.


* [reducers.my-submissions-management](#module_reducers.my-submissions-management)
    * _static_
        * [.default](#module_reducers.my-submissions-management.default)
        * [.factory()](#module_reducers.my-submissions-management.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~create(initialState)](#module_reducers.my-submissions-management..create) ⇒ <code>function</code>

<a name="module_reducers.my-submissions-management.default"></a>

### reducers.my-submissions-management.default
Reducer with default initial state.

**Kind**: static property of [<code>reducers.my-submissions-management</code>](#module_reducers.my-submissions-management)  
<a name="module_reducers.my-submissions-management.factory"></a>

### reducers.my-submissions-management.factory() ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.my-submissions-management</code>](#module_reducers.my-submissions-management)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  
<a name="module_reducers.my-submissions-management..create"></a>

### reducers.my-submissions-management~create(initialState) ⇒ <code>function</code>
Creates a new Submission management reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.my-submissions-management</code>](#module_reducers.my-submissions-management)  
**Returns**: <code>function</code> - Submission management reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

