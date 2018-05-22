<a name="module_reducers.reviewOpportunity"></a>

## reducers.reviewOpportunity
Reducer for state.reviewOpportunity

**Todo**

- [ ] Document state structure.


* [reducers.reviewOpportunity](#module_reducers.reviewOpportunity)
    * _static_
        * [.default](#module_reducers.reviewOpportunity.default)
        * [.factory(options)](#module_reducers.reviewOpportunity.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~buildRequiredTermsList(details)](#module_reducers.reviewOpportunity..buildRequiredTermsList) ⇒ <code>Array</code>
        * [~onGetDetailsDone(state, action)](#module_reducers.reviewOpportunity..onGetDetailsDone) ⇒ <code>Object</code>
        * [~create(initialState)](#module_reducers.reviewOpportunity..create) ⇒ <code>function</code>

<a name="module_reducers.reviewOpportunity.default"></a>

### reducers.reviewOpportunity.default
Reducer with default state.

**Kind**: static property of [<code>reducers.reviewOpportunity</code>](#module_reducers.reviewOpportunity)  
<a name="module_reducers.reviewOpportunity.factory"></a>

### reducers.reviewOpportunity.factory(options) ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.reviewOpportunity</code>](#module_reducers.reviewOpportunity)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> | <code>{}</code> | Optional. Options object for initial state. |
| [options.auth.tokenV2] | <code>String</code> | <code>&#x27;&#x27;</code> | The V2 auth token |
| [options.auth.tokenV3] | <code>String</code> | <code>&#x27;&#x27;</code> | The V3 auth token |
| [options.reviewOpportunity.challenge.id] | <code>String</code> | <code>&#x27;&#x27;</code> | The challenge id. |

<a name="module_reducers.reviewOpportunity..buildRequiredTermsList"></a>

### reducers.reviewOpportunity~buildRequiredTermsList(details) ⇒ <code>Array</code>
Generates a list of unique terms ids required for the open review roles
with an agreed field

**Kind**: inner method of [<code>reducers.reviewOpportunity</code>](#module_reducers.reviewOpportunity)  
**Returns**: <code>Array</code> - List of unique terms  

| Param | Type | Description |
| --- | --- | --- |
| details | <code>Object</code> | Review Opportuny details from API |

<a name="module_reducers.reviewOpportunity..onGetDetailsDone"></a>

### reducers.reviewOpportunity~onGetDetailsDone(state, action) ⇒ <code>Object</code>
Handles REVIEW_OPPORTUNITY/GET__DETAILS_DONE action.

**Kind**: inner method of [<code>reducers.reviewOpportunity</code>](#module_reducers.reviewOpportunity)  
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| action | <code>Object</code> | Payload will be JSON from api call |

<a name="module_reducers.reviewOpportunity..create"></a>

### reducers.reviewOpportunity~create(initialState) ⇒ <code>function</code>
Creates a new Review opportunity reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.reviewOpportunity</code>](#module_reducers.reviewOpportunity)  
**Returns**: <code>function</code> - Review opportunity reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

