<a name="module_reducers.lookup"></a>

## reducers.lookup
Reducer for [actions.lookup](#module_actions.lookup) actions.

State segment managed by this reducer has the following structure:


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| skillTags | <code>Array</code> | <code>&#x27;&#x27;</code> | skill tags. |


* [reducers.lookup](#module_reducers.lookup)
    * _static_
        * [.default](#module_reducers.lookup.default)
        * [.factory()](#module_reducers.lookup.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~onGetSkillTagsDone(state, action)](#module_reducers.lookup..onGetSkillTagsDone) ⇒ <code>Object</code>
        * [~create(initialState)](#module_reducers.lookup..create) ⇒ <code>function</code>

<a name="module_reducers.lookup.default"></a>

### reducers.lookup.default
Reducer with default initial state.

**Kind**: static property of [<code>reducers.lookup</code>](#module_reducers.lookup)  
<a name="module_reducers.lookup.factory"></a>

### reducers.lookup.factory() ⇒ <code>Promise</code>
Factory which creates a new reducer.

**Kind**: static method of [<code>reducers.lookup</code>](#module_reducers.lookup)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  
<a name="module_reducers.lookup..onGetSkillTagsDone"></a>

### reducers.lookup~onGetSkillTagsDone(state, action) ⇒ <code>Object</code>
Handles LOOKUP/GET_SKILL_TAGS_DONE action.

**Kind**: inner method of [<code>reducers.lookup</code>](#module_reducers.lookup)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.lookup..create"></a>

### reducers.lookup~create(initialState) ⇒ <code>function</code>
Creates a new Lookup reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.lookup</code>](#module_reducers.lookup)  
**Returns**: <code>function</code> - Lookup reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

