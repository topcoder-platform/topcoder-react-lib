<a name="module_reducers.challenge-listing"></a>

## reducers.challenge-listing
Reducer for [actions.challenge-listing](#module_actions.challenge-listing) actions.

State segment managed by this reducer has the following strcuture:

**Todo**

- [ ] Document the structure.


* [reducers.challenge-listing](#module_reducers.challenge-listing)
    * _static_
        * [.default](#module_reducers.challenge-listing.default)
        * [.factory(options)](#module_reducers.challenge-listing.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~dropChallenges(state, action)](#module_reducers.challenge-listing..dropChallenges) ⇒ <code>Object</code>
        * [~getMoreChallenges(state, action)](#module_reducers.challenge-listing..getMoreChallenges) ⇒ <code>Object</code>
        * [~expandTag(state, action)](#module_reducers.challenge-listing..expandTag) ⇒ <code>Object</code>
        * [~getAllActiveChallengesInit(state, action)](#module_reducers.challenge-listing..onGetAllActiveChallengesInit) ⇒ <code>Object</code>
        * [~getAllActiveChallengesDone(state, action)](#module_reducers.challenge-listing..onGetAllActiveChallengesDone) ⇒ <code>Object</code>
        * [~getActiveChallengesInit(state, action)](#module_reducers.challenge-listing..getActiveChallengesInit) ⇒ <code>Object</code>
        * [~getActiveChallengesDone(state, action)](#module_reducers.challenge-listing..getActiveChallengesDone) ⇒ <code>Object</code>
        * [~getRestActiveChallengesInit(state, action)](#module_reducers.challenge-listing..getRestActiveChallengesInit) ⇒ <code>Object</code>
        * [~getRestActiveChallengesDone(state, action)](#module_reducers.challenge-listing..getRestActiveChallengesDone) ⇒ <code>Object</code>
        * [~getChallengeSubtracksInit()](#module_reducers.challenge-listing..getChallengeSubtracksInit) ⇒ <code>Object</code>
        * [~getChallengeSubtracksDone(state, action)](#module_reducers.challenge-listing..getChallengeSubtracksDone) ⇒ <code>Object</code>
        * [~getChallengeTagsInit()](#module_reducers.challenge-listing..getChallengeTagsInit) ⇒ <code>Object</code>
        * [~getChallengeTagsDone(state, action)](#module_reducers.challenge-listing..getChallengeTagsDone) ⇒ <code>Object</code>
        * [~getPastChallengesInit(state, action)](#module_reducers.challenge-listing..getPastChallengesInit) ⇒ <code>Object</code>
        * [~getReviewOpportunitiesInit(state, action)](#module_reducers.challenge-listing..getReviewOpportunitiesInit) ⇒ <code>Object</code>
        * [~getReviewOpportunitiesDone(state, action)](#module_reducers.challenge-listing..getReviewOpportunitiesDone) ⇒ <code>Object</code>
        * [~getSrmsInit(state, action)](#module_reducers.challenge-listing..getSrmsInit) ⇒ <code>Object</code>
        * [~getSrmsDone(state, action)](#module_reducers.challenge-listing..getSrmsDone) ⇒ <code>Object</code>
        * [~selectCommunity(state, action)](#module_reducers.challenge-listing..selectCommunity) ⇒ <code>Object</code>
        * [~setFilter(state, action)](#module_reducers.challenge-listing..setFilter) ⇒ <code>Object</code>
        * [~setSort(state, action)](#module_reducers.challenge-listing..setSort) ⇒ <code>Object</code>
        * [~setDatePickerStatus(state, action)](#module_reducers.challenge-listing..setDatePickerStatus) ⇒ <code>Object</code>
        * [~create(initialState)](#module_reducers.challenge..create) ⇒ <code>function</code>

<a name="module_reducers.challenge-listing.default"></a>
### reducers.challenge-listing.default
Reducer with default intial state.
**Kind**: static property of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

<a name="module_reducers.challenge-listing.factory"></a>
### reducers.challenge-listing.factory() ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Resolves**: <code>Function(state, action): state</code> New reducer.  

<a name="module_reducers.challenge-listing..dropChallenges"></a>
### reducers.challenge-listing~dropChallenges(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/DROP_CHALLENGES action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.challenge-listing..getMoreChallenges"></a>
### reducers.challenge-listing~getMoreChallenges(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_MORE_CHALLENGES action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.challenge-listing..expandTag"></a>
### reducers.challenge-listing~expandTag(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/EXPAND_TAG action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.challenge-listing..getAllActiveChallengesInit"></a>
### reducers.challenge-listing~getAllActiveChallengesInit(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_ALL_ACTIVE_CHALLENGES_INIT action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> |
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getAllActiveChallengesDone"></a>
### reducers.challenge-listing~getAllActiveChallengesDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_ALL_ACTIVE_CHALLENGES_DONE action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getActiveChallengesInit"></a>
### reducers.challenge-listing~getActiveChallengesInit(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_ACTIVE_CHALLENGES_INIT action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getActiveChallengesDone"></a>
### reducers.challenge-listing~getActiveChallengesDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_ACTIVE_CHALLENGES_DONE action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getRestActiveChallengesInit"></a>
### reducers.challenge-listing~getRestActiveChallengesInit(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_REST_ACTIVE_CHALLENGES_INIT action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getRestActiveChallengesDone"></a>
### reducers.challenge-listing~getRestActiveChallengesDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_REST_ACTIVE_CHALLENGES_DONE action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getChallengeSubtracksInit"></a>
### reducers.challenge-listing~getChallengeSubtracksInit() ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_CHALLENGE_SUBTRACKS_INIT action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

<a name="module_reducers.challenge-listing..getChallengeSubtracksDone"></a>
### reducers.challenge-listing~getChallengeSubtracksDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_CHALLENGE_SUBTRACKS_DONE action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getChallengeTagsInit"></a>
### reducers.challenge-listing~getChallengeTagsInit() ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_CHALLENGE_TAGS_INIT action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)

<a name="module_reducers.challenge-listing..getChallengeTagsDone"></a>
### reducers.challenge-listing~getChallengeTagsDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_CHALLENGE_TAGS_DONE action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getPastChallengesInit"></a>
### reducers.challenge-listing~getPastChallengesInit(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_PAST_CHALLENGES_INIT action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getPastChallengesDone"></a>
### reducers.challenge-listing~getPastChallengesDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_PAST_CHALLENGES_DONE action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getReviewOpportunitiesInit"></a>
### reducers.challenge-listing~getReviewOpportunitiesInit(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_REVIEW_OPPORTUNITIES_INIT action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| uuid | <code>Object</code> |
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getReviewOpportunitiesDone"></a>
### reducers.challenge-listing~getReviewOpportunitiesDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_REVIEW_OPPORTUNITIES_DONE action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| uuid | <code>Object</code> | 
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getSrmsInit"></a>
### reducers.challenge-listing~getSrmsInit(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_SRMS_INIT action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| uuid | <code>Object</code> |
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..getSrmsDone"></a>
### reducers.challenge-listing~getSrmsDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/GET_SRMS_DONE action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| uuid | <code>Object</code> |
| action | <code>Object</code> |


<a name="module_reducers.challenge-listing..selectCommunity"></a>
### reducers.challenge-listing~selectCommunity(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/SELECT_COMMUNITY action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| uuid | <code>Object</code> |
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..setFilter"></a>
### reducers.challenge-listing~setFilter(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/SET_FILTER action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| uuid | <code>Object</code> |
| action | <code>Object</code> |

<a name="module_reducers.challenge-listing..setDatePickerStatus"></a>
### reducers.challenge-listing~setDatePickerStatus(state, action) ⇒ <code>Object</code>
Handles CHALLENGE_LISTING/SET_DATEPICKER_STATUS action.
**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)  

**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| uuid | <code>Object</code> |
| action | <code>Object</code> |


<a name="module_reducers.challenge..create"></a>

### reducers.challenge-listing~create(initialState) ⇒ <code>function</code>
Creates a new Challenge-listing reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.challenge-listing</code>](#module_reducers.challenge-listing)
**Returns**: <code>function</code> - Challenge-listing reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

