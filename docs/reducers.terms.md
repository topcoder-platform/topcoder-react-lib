<a name="module_reducers.terms"></a>

## reducers.terms
Reducer for state.terms.

**Todo**

- [ ] Document state segment structure.


* [reducers.terms](#module_reducers.terms)
    * _static_
        * [.default](#module_reducers.terms.default)
        * [.factory(options)](#module_reducers.terms.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~sortTerms(terms)](#module_reducers.terms..sortTerms) ⇒ <code>Array</code>
        * [~onGetTermsDone(state, action)](#module_reducers.terms..onGetTermsDone) ⇒ <code>Object</code>
        * [~onGetTermsInit(state, action)](#module_reducers.terms..onGetTermsInit) ⇒ <code>Object</code>
        * [~onCheckStatusDone(state, action)](#module_reducers.terms..onCheckStatusDone) ⇒ <code>Object</code>
        * [~onGetTermDetailsDone(state, action)](#module_reducers.terms..onGetTermDetailsDone) ⇒ <code>Object</code>
        * [~onGetDocuSignUrlDone(state, action)](#module_reducers.terms..onGetDocuSignUrlDone) ⇒ <code>Object</code>
        * [~onAgreeTermDone(state, action)](#module_reducers.terms..onAgreeTermDone) ⇒ <code>Object</code>
        * [~create(initialState)](#module_reducers.terms..create) ⇒ <code>function</code>

<a name="module_reducers.terms.default"></a>

### reducers.terms.default
Reducer with default initial state.

**Kind**: static property of [<code>reducers.terms</code>](#module_reducers.terms)  
<a name="module_reducers.terms.factory"></a>

### reducers.terms.factory(options) ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.terms</code>](#module_reducers.terms)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> | <code>{}</code> | Optional. Options object for initial state. |
| [options.auth.tokenV2] | <code>String</code> | <code>&#x27;&#x27;</code> | The V2 auth token |
| [options.auth.tokenV3] | <code>String</code> | <code>&#x27;&#x27;</code> | The V3 auth token |
| [options.terms.entity.type] | <code>String</code> | <code>&#x27;&#x27;</code> | The terms entity type:  - `challenge`  - `community`  - `reviewOpportunity` |
| [options.terms.entity.id] | <code>String</code> | <code>&#x27;&#x27;</code> | The terms entity id |

<a name="module_reducers.terms..sortTerms"></a>

### reducers.terms~sortTerms(terms) ⇒ <code>Array</code>
sort terms by agreed status

**Kind**: inner method of [<code>reducers.terms</code>](#module_reducers.terms)  
**Returns**: <code>Array</code> - sorted terms  

| Param | Type | Description |
| --- | --- | --- |
| terms | <code>Array</code> | terms to sort |

<a name="module_reducers.terms..onGetTermsDone"></a>

### reducers.terms~onGetTermsDone(state, action) ⇒ <code>Object</code>
Handles TERMS/GET_TERMS_DONE action.
Note, that it silently discards received terms if the entity of received data
mismatches the one stored in loadingTermsForEntity
of the state.

**Kind**: inner method of [<code>reducers.terms</code>](#module_reducers.terms)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.terms..onGetTermsInit"></a>

### reducers.terms~onGetTermsInit(state, action) ⇒ <code>Object</code>
Handles TERMS/GET_TERMS_INIT action.

**Kind**: inner method of [<code>reducers.terms</code>](#module_reducers.terms)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.terms..onCheckStatusDone"></a>

### reducers.terms~onCheckStatusDone(state, action) ⇒ <code>Object</code>
Handles TERMS/CHECK_STATUS_DONE action.

**Kind**: inner method of [<code>reducers.terms</code>](#module_reducers.terms)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.terms..onGetTermDetailsDone"></a>

### reducers.terms~onGetTermDetailsDone(state, action) ⇒ <code>Object</code>
Handles TERMS/GET_TERM_DETAILS_DONE action.
Note, that it silently discards received details if the termId of received
mismatches the one stored in loadingDetailsForTermId field
of the state.

**Kind**: inner method of [<code>reducers.terms</code>](#module_reducers.terms)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.terms..onGetDocuSignUrlDone"></a>

### reducers.terms~onGetDocuSignUrlDone(state, action) ⇒ <code>Object</code>
Handles TERMS/GET_DOCU_SIGN_URL_DONE action.
Note, that it silently discards received url if the templateId of received
mismatches the one stored in loadingDocuSignUrl field
of the state.

**Kind**: inner method of [<code>reducers.terms</code>](#module_reducers.terms)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.terms..onAgreeTermDone"></a>

### reducers.terms~onAgreeTermDone(state, action) ⇒ <code>Object</code>
Handles TERMS/AGREE_TERM_DONE action.
Note, that it silently discards received result if the termId of received
mismatches the one stored in agreeingTerm field
of the state.

**Kind**: inner method of [<code>reducers.terms</code>](#module_reducers.terms)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.terms..create"></a>

### reducers.terms~create(initialState) ⇒ <code>function</code>
Creates a new Profile reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.terms</code>](#module_reducers.terms)  
**Returns**: <code>function</code> - Profile reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

