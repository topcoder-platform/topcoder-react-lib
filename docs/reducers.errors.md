<a name="module_reducers.errors"></a>

## reducers.errors
Redux Reducer for application-wide error handling.

Description:
  Implements state reducers for application-wide error handling.

**Todo**

- [ ] Document state segment structure.


* [reducers.errors](#module_reducers.errors)
    * _static_
        * [.default](#module_reducers.errors.default)
        * [.factory()](#module_reducers.errors.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~create(initialState, mergeReducers)](#module_reducers.errors..create) ⇒ <code>function</code>

<a name="module_reducers.errors.default"></a>

### reducers.errors.default
Reducer with default initial state.

**Kind**: static property of [<code>reducers.errors</code>](#module_reducers.errors)  
<a name="module_reducers.errors.factory"></a>

### reducers.errors.factory() ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.errors</code>](#module_reducers.errors)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  
<a name="module_reducers.errors..create"></a>

### reducers.errors~create(initialState, mergeReducers) ⇒ <code>function</code>
Creates a new Errors reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.errors</code>](#module_reducers.errors)  
**Returns**: <code>function</code> - Errors reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |
| mergeReducers | <code>Object</code> | Optional. Reducers to merge. |

