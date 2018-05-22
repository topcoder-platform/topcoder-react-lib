<a name="module_reducers.stats"></a>

## reducers.stats
Reducer for state.stats. That part of Redux state is intended to keep
 user- and group-related statistics to render in the frontend.

**Todo**

- [ ] Document state segment structure.


* [reducers.stats](#module_reducers.stats)
    * _static_
        * [.default](#module_reducers.stats.default)
        * [.factory()](#module_reducers.stats.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~onGetCommunityStatsInit(state, action)](#module_reducers.stats..onGetCommunityStatsInit) ⇒ <code>Object</code>
        * [~onGetCommunityStatsDone(state, action)](#module_reducers.stats..onGetCommunityStatsDone) ⇒ <code>Object</code>
        * [~create(initialState)](#module_reducers.stats..create) ⇒ <code>function</code>

<a name="module_reducers.stats.default"></a>

### reducers.stats.default
Reducer with default initial state.

**Kind**: static property of [<code>reducers.stats</code>](#module_reducers.stats)  
<a name="module_reducers.stats.factory"></a>

### reducers.stats.factory() ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.stats</code>](#module_reducers.stats)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  
<a name="module_reducers.stats..onGetCommunityStatsInit"></a>

### reducers.stats~onGetCommunityStatsInit(state, action) ⇒ <code>Object</code>
Inits the loading of community stats.

**Kind**: inner method of [<code>reducers.stats</code>](#module_reducers.stats)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.stats..onGetCommunityStatsDone"></a>

### reducers.stats~onGetCommunityStatsDone(state, action) ⇒ <code>Object</code>
Handles result of the getCommunityStats action.

**Kind**: inner method of [<code>reducers.stats</code>](#module_reducers.stats)  
**Returns**: <code>Object</code> - New state.  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Previous state. |
| action | <code>Object</code> | Action result. |

<a name="module_reducers.stats..create"></a>

### reducers.stats~create(initialState) ⇒ <code>function</code>
Creates a new Stats reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.stats</code>](#module_reducers.stats)  
**Returns**: <code>function</code> - Stats reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

