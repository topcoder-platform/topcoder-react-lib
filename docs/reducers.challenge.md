<a name="module_reducers.challenge"></a>

## reducers.challenge
Reducer for [actions.challenge](#module_actions.challenge) actions.

State segment managed by this reducer has the following strcuture:

**Todo**

- [ ] Document the structure.


* [reducers.challenge](#module_reducers.challenge)
    * _static_
        * [.default](#module_reducers.challenge.default)
        * [.factory(options)](#module_reducers.challenge.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~onGetDetailsInit(state, action)](#module_reducers.challenge..onGetDetailsInit) ⇒ <code>Object</code>
        * [~onGetDetailsDone(state, action)](#module_reducers.challenge..onGetDetailsDone) ⇒ <code>Object</code>
        * [~onGetSubmissionsInit(state, action)](#module_reducers.challenge..onGetSubmissionsInit) ⇒ <code>Object</code>
        * [~onGetSubmissionsDone(state, action)](#module_reducers.challenge..onGetSubmissionsDone)
        * [~onFetchCheckpointsDone(state, action)](#module_reducers.challenge..onFetchCheckpointsDone)
        * [~onLoadResultsInit(state, action)](#module_reducers.challenge..onLoadResultsInit) ⇒ <code>Object</code>
        * [~onLoadResultsDone(state, action)](#module_reducers.challenge..onLoadResultsDone) ⇒ <code>Object</code>
        * [~onRegisterDone(state, action)](#module_reducers.challenge..onRegisterDone) ⇒ <code>Object</code>
        * [~onUnregisterDone(state, action)](#module_reducers.challenge..onUnregisterDone) ⇒ <code>Object</code>
        * [~onUpdateChallengeInit(state, actions)](#module_reducers.challenge..onUpdateChallengeInit) ⇒ <code>Object</code>
        * [~onUpdateChallengeDone(state, actions)](#module_reducers.challenge..onUpdateChallengeDone) ⇒ <code>Object</code>
        * [~onGetActiveChallengesCountDone(state, action)](#module_reducers.challenge..onGetActiveChallengesCountDone) ⇒ <code>Object</code>
        * [~onGetSubmissionInformationInit(state, action)](#module_reducers.challenge..onGetSubmissionInformationInit) ⇒ <code>Object</code>
        * [~onGetSubmissionInformationDone(state, action)](#module_reducers.challenge..onGetSubmissionInformationDone) ⇒ <code>Object</code>
        * [~create(initialState)](#module_reducers.challenge..create) ⇒ <code>function</code>

<a name="module_reducers.challenge.default"></a>

### reducers.challenge.default
Reducer with default intial state.

**Kind**: static property of [<code>reducers.challenge</code>](#module_reducers.challenge)  
<a name="module_reducers.challenge.factory"></a>

### reducers.challenge.factory(options) ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.challenge</code>](#module_reducers.challenge)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> | <code>{}</code> | Optional. Factory options. |
| [options.auth.tokenV2] | <code>String</code> | <code>&#x27;&#x27;</code> | Optional. Topcoder v2 auth token. |
| [options.auth.tokenV3] | <code>String</code> | <code>&#x27;&#x27;</code> | Optional. Topcoder v3 auth token. |
| [options.challenge.challengeDetails.id] | <code>String</code> | <code>&#x27;&#x27;</code> | Optional. ID of  the challenge to load details for. |
| [options.challenge.challengeDetails.mySubmission] | <code>Boolean</code> | <code>false</code> | Optional. The flag indicates whether load my submission. |

<a name="module_reducers.challenge..onGetDetailsInit"></a>

### reducers.challenge~onGetDetailsInit(state, action) ⇒ <code>Object</code>
Handles CHALLENGE/GET_DETAILS_INIT action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  
**Returns**: <code>Object</code> - New state  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.challenge..onGetDetailsDone"></a>

### reducers.challenge~onGetDetailsDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE/GET_DETAILS_DONE action.
Note, that it silently discards received details if the ID of received
challenge mismatches the one stored in loadingDetailsForChallengeId field
of the state.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.challenge..onGetSubmissionsInit"></a>

### reducers.challenge~onGetSubmissionsInit(state, action) ⇒ <code>Object</code>
Handles CHALLENGE/GET_SUBMISSION_INIT action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.challenge..onGetSubmissionsDone"></a>

### reducers.challenge~onGetSubmissionsDone(state, action)
Handles challengeActions.fetchSubmissionsDone action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Previous state. |
| action | <code>Object</code> | Action. |

<a name="module_reducers.challenge..onFetchCheckpointsDone"></a>

### reducers.challenge~onFetchCheckpointsDone(state, action)
Handles challengeActions.fetchCheckpointsDone action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Previous state. |
| action | <code>Object</code> | Action. |

<a name="module_reducers.challenge..onLoadResultsInit"></a>

### reducers.challenge~onLoadResultsInit(state, action) ⇒ <code>Object</code>
Handles CHALLENGE/LOAD_RESULTS_INIT action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.challenge..onLoadResultsDone"></a>

### reducers.challenge~onLoadResultsDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE/LOAD_RESULTS_DONE action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.challenge..onRegisterDone"></a>

### reducers.challenge~onRegisterDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE/REGISTER_DONE action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.challenge..onUnregisterDone"></a>

### reducers.challenge~onUnregisterDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE/UNREGISTER_DONE action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.challenge..onUpdateChallengeInit"></a>

### reducers.challenge~onUpdateChallengeInit(state, actions) ⇒ <code>Object</code>
Handles CHALLENGE/UPDATE_CHALLENGE_INIT.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  
**Returns**: <code>Object</code> - New state.  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Old state. |
| actions | <code>Object</code> | Action. |

<a name="module_reducers.challenge..onUpdateChallengeDone"></a>

### reducers.challenge~onUpdateChallengeDone(state, actions) ⇒ <code>Object</code>
Handles CHALLENGE/UPDATE_CHALLENGE_DONE.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  
**Returns**: <code>Object</code> - New state.  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Old state. |
| actions | <code>Object</code> | Action. |

<a name="module_reducers.challenge..onGetActiveChallengesCountDone"></a>

### reducers.challenge~onGetActiveChallengesCountDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE/GET_ACTIVE_CHALLENGES_COUNT_DONE action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)
**Returns**: <code>Object</code> - New state  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | Old state. |
| action | <code>Object</code> | Action payload/error |

<a name="module_reducers.challenge..onGetSubmissionInformationInit"></a>

### reducers.challenge~onGetSubmissionInformationInit(state, action) ⇒ <code>Object</code>
Handles CHALLENGE/GET_SUBMISSION_INFORMATION_INIT action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)
**Returns**: <code>Object</code> - New state

| Param | Type |
| --- | --- |
| state | <code>Object</code> |
| action | <code>Object</code> |

<a name="module_reducers.challenge..onGetSubmissionInformationDone"></a>

### reducers.challenge~onGetSubmissionInformationDone(state, action) ⇒ <code>Object</code>
Handles CHALLENGE/GET_SUBMISSION_INFORMATION_DONE action.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)
**Returns**: <code>Object</code> - New state.

| Param | Type |
| --- | --- |
| state | <code>Object</code> |
| action | <code>Object</code> |

<a name="module_reducers.challenge..create"></a>

### reducers.challenge~create(initialState) ⇒ <code>function</code>
Creates a new Challenge reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.challenge</code>](#module_reducers.challenge)  
**Returns**: <code>function</code> - Challenge reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

