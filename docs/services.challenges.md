<a name="module_services.challenges"></a>

## services.challenges
This module provides a service for convenient manipulation with
 Topcoder challenges via TC API.


* [services.challenges](#module_services.challenges)
    * _static_
        * [.normalizeChallengeDetails(v3, v3Filtered, v3User, v2, username)](#module_services.challenges.normalizeChallengeDetails) ⇒ <code>Object</code>
        * [.normalizeChallenge(challenge, username)](#module_services.challenges.normalizeChallenge)
        * [.normalizeMarathonMatch(challenge, username)](#module_services.challenges.normalizeMarathonMatch) ⇒ <code>Object</code>
        * [.getService(tokenV3, tokenV2)](#module_services.challenges.getService) ⇒ <code>ChallengesService</code>
    * _inner_
        * [~ChallengesService](#module_services.challenges..ChallengesService)
            * [new ChallengesService(tokenV3, tokenV2)](#new_module_services.challenges..ChallengesService_new)
            * [.activate(challengeId)](#module_services.challenges..ChallengesService+activate) ⇒ <code>Promise</code>
            * [.close(challengeId, winnerId)](#module_services.challenges..ChallengesService+close) ⇒ <code>Promise</code>
            * [.createTask(projectId, accountId, title, description, assignee, payment)](#module_services.challenges..ChallengesService+createTask) ⇒ <code>Promise</code>
            * [.getChallengeDetails(challengeId)](#module_services.challenges..ChallengesService+getChallengeDetails) ⇒ <code>Promise</code>
            * [.getChallengeSubtracks()](#module_services.challenges..ChallengesService+getChallengeSubtracks) ⇒ <code>Promise</code>
            * [.getChallengeTags()](#module_services.challenges..ChallengesService+getChallengeTags) ⇒ <code>Promise</code>
            * [.getChallenges(filters, params)](#module_services.challenges..ChallengesService+getChallenges) ⇒ <code>Promise</code>
            * [.getMarathonMatches(filters, params)](#module_services.challenges..ChallengesService+getMarathonMatches) ⇒ <code>Promise</code>
            * [.getSrms(params)](#module_services.challenges..ChallengesService+getSrms) ⇒ <code>Promise</code>
            * [.getUserChallenges(username, filters, params)](#module_services.challenges..ChallengesService+getUserChallenges) ⇒ <code>Promise</code>
            * [.getUserSrms(handle, params)](#module_services.challenges..ChallengesService+getUserSrms) ⇒ <code>Promise</code>
            * [.register(challengeId)](#module_services.challenges..ChallengesService+register) ⇒ <code>Promise</code>
            * [.unregister(challengeId)](#module_services.challenges..ChallengesService+unregister) ⇒ <code>Promise</code>
            * [.getUserMarathonMatches(username, filters, params)](#module_services.challenges..ChallengesService+getUserMarathonMatches) ⇒ <code>Promise</code>
            * [.getActiveChallengesCount(handle)](#module_services.challenges..ChallengesService+getActiveChallengesCount) ⇒ <code>Action</code>
            * [.submit(body, challengeId, track)](#module_services.challenges..ChallengesService+submit) ⇒ <code>Promise</code>
            * [.updateChallenge(challenge, tokenV3)](#module_services.challenges..ChallengesService+updateChallenge) ⇒ <code>Promise</code>
        * [~normalizeNameConventionForSubtrack(subTrack)](#module_services.challenges..normalizeNameConventionForSubtrack) ⇒ <code>String</code>

<a name="module_services.challenges.normalizeChallengeDetails"></a>

### services.challenges.normalizeChallengeDetails(v3, v3Filtered, v3User, v2, username) ⇒ <code>Object</code>
Normalizes a regular challenge details object received from the backend APIs.
NOTE: It is possible, that this normalization is not necessary after we
have moved to Topcoder API v3, but it is kept for now to minimize a risk of
breaking anything.

**Kind**: static method of [<code>services.challenges</code>](#module_services.challenges)  
**Returns**: <code>Object</code> - Normalized challenge object.  
**Todo**

- [ ] Why this one is exported? It should be only used internally!


| Param | Type | Description |
| --- | --- | --- |
| v3 | <code>Object</code> | Challenge object received from the /v3/challenges/{id}  endpoint. |
| v3Filtered | <code>Object</code> | Challenge object received from the  /v3/challenges?filter=id={id} endpoint. |
| v3User | <code>Object</code> | Challenge object received from the  /v3//members/{username}/challenges?filter=id={id} endpoint. If action was fired for authenticated visitor, v3_user will contain details fetched specifically for the user (thus may include additional data comparing to the standard API v3 response for the challenge details, stored in v3_filtered). |
| v2 | <code>Object</code> | Challenge object received from the /v2/{type}/challenges/{id} endpoint. |
| username | <code>String</code> | Optional. |

<a name="module_services.challenges.normalizeChallenge"></a>

### services.challenges.normalizeChallenge(challenge, username)
Normalizes a regular challenge object received from the backend.
NOTE: This function is copied from the existing code in the challenge listing
component. It is possible, that this normalization is not necessary after we
have moved to Topcoder API v3, but it is kept for now to minimize a risk of
breaking anything.

**Kind**: static method of [<code>services.challenges</code>](#module_services.challenges)  
**Todo**

- [ ] Should be used only internally!


| Param | Type | Description |
| --- | --- | --- |
| challenge | <code>Object</code> | Challenge object received from the backend. |
| username | <code>String</code> | Optional. |

<a name="module_services.challenges.normalizeMarathonMatch"></a>

### services.challenges.normalizeMarathonMatch(challenge, username) ⇒ <code>Object</code>
Normalizes a marathon match challenge object received from the backend.
NOTE: This function is copied from the existing code in the challenge listing
component. It is possible, that this normalization is not necessary after we
have moved to Topcoder API v3, but it is kept for now to minimize a risk of
breaking anything.

**Kind**: static method of [<code>services.challenges</code>](#module_services.challenges)  
**Returns**: <code>Object</code> - Normalized challenge.  

| Param | Type | Description |
| --- | --- | --- |
| challenge | <code>Object</code> | MM challenge object received from the backend. |
| username | <code>String</code> | Optional. |

<a name="module_services.challenges.getService"></a>

### services.challenges.getService(tokenV3, tokenV2) ⇒ <code>ChallengesService</code>
Returns a new or existing challenges service.

**Kind**: static method of [<code>services.challenges</code>](#module_services.challenges)  
**Returns**: <code>ChallengesService</code> - Challenges service object  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v3. |
| tokenV2 | <code>String</code> | Optional. Auth token for Topcoder API v2. |

<a name="module_services.challenges..ChallengesService"></a>

### services.challenges~ChallengesService
Challenge service.

**Kind**: inner class of [<code>services.challenges</code>](#module_services.challenges)  

* [~ChallengesService](#module_services.challenges..ChallengesService)
    * [new ChallengesService(tokenV3, tokenV2)](#new_module_services.challenges..ChallengesService_new)
    * [.activate(challengeId)](#module_services.challenges..ChallengesService+activate) ⇒ <code>Promise</code>
    * [.close(challengeId, winnerId)](#module_services.challenges..ChallengesService+close) ⇒ <code>Promise</code>
    * [.createTask(projectId, accountId, title, description, assignee, payment)](#module_services.challenges..ChallengesService+createTask) ⇒ <code>Promise</code>
    * [.getChallengeDetails(challengeId)](#module_services.challenges..ChallengesService+getChallengeDetails) ⇒ <code>Promise</code>
    * [.getChallengeSubtracks()](#module_services.challenges..ChallengesService+getChallengeSubtracks) ⇒ <code>Promise</code>
    * [.getChallengeTags()](#module_services.challenges..ChallengesService+getChallengeTags) ⇒ <code>Promise</code>
    * [.getChallenges(filters, params)](#module_services.challenges..ChallengesService+getChallenges) ⇒ <code>Promise</code>
    * [.getMarathonMatches(filters, params)](#module_services.challenges..ChallengesService+getMarathonMatches) ⇒ <code>Promise</code>
    * [.getSrms(params)](#module_services.challenges..ChallengesService+getSrms) ⇒ <code>Promise</code>
    * [.getUserChallenges(username, filters, params)](#module_services.challenges..ChallengesService+getUserChallenges) ⇒ <code>Promise</code>
    * [.getUserSrms(handle, params)](#module_services.challenges..ChallengesService+getUserSrms) ⇒ <code>Promise</code>
    * [.register(challengeId)](#module_services.challenges..ChallengesService+register) ⇒ <code>Promise</code>
    * [.unregister(challengeId)](#module_services.challenges..ChallengesService+unregister) ⇒ <code>Promise</code>
    * [.getUserMarathonMatches(username, filters, params)](#module_services.challenges..ChallengesService+getUserMarathonMatches) ⇒ <code>Promise</code>
    * [.getActiveChallengesCount(handle)](#module_services.challenges..ChallengesService+getActiveChallengesCount) ⇒ <code>Action</code>
    * [.submit(body, challengeId, track)](#module_services.challenges..ChallengesService+submit) ⇒ <code>Promise</code>
    * [.updateChallenge(challenge, tokenV3)](#module_services.challenges..ChallengesService+updateChallenge) ⇒ <code>Promise</code>

<a name="new_module_services.challenges..ChallengesService_new"></a>

#### new ChallengesService(tokenV3, tokenV2)
Creates a new ChallengeService instance.


| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v3. |
| tokenV2 | <code>String</code> | Optional. Auth token for Topcoder API v2. |

<a name="module_services.challenges..ChallengesService+activate"></a>

#### challengesService.activate(challengeId) ⇒ <code>Promise</code>
Activates the specified challenge.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Promise</code> - Resolves to null value in case of success; otherwise it
 is rejected.  

| Param | Type |
| --- | --- |
| challengeId | <code>Number</code> | 

<a name="module_services.challenges..ChallengesService+close"></a>

#### challengesService.close(challengeId, winnerId) ⇒ <code>Promise</code>
Closes the specified challenge.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Promise</code> - Resolves to null value in case of success; otherwise it
 is rejected.  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>Number</code> |  |
| winnerId | <code>Number</code> | Optional. ID of the assignee to declare the  winner. |

<a name="module_services.challenges..ChallengesService+createTask"></a>

#### challengesService.createTask(projectId, accountId, title, description, assignee, payment) ⇒ <code>Promise</code>
Creates a new payment task.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Promise</code> - Resolves to the created challenge object (payment task).  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>Number</code> |  |
| accountId | <code>Number</code> | Billing account ID. |
| title | <code>String</code> |  |
| description | <code>String</code> |  |
| assignee | <code>String</code> |  |
| payment | <code>Number</code> |  |

<a name="module_services.challenges..ChallengesService+getChallengeDetails"></a>

#### challengesService.getChallengeDetails(challengeId) ⇒ <code>Promise</code>
Gets challenge details from Topcoder API v3.
NOTE: This function also uses API v2 and other v3 endpoints for now, due
to some information is missing or
incorrect in the main v3 endpoint. This may change in the future.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Promise</code> - Resolves to the challenge object.  

| Param | Type |
| --- | --- |
| challengeId | <code>Number</code> \| <code>String</code> | 

<a name="module_services.challenges..ChallengesService+getChallengeSubtracks"></a>

#### challengesService.getChallengeSubtracks() ⇒ <code>Promise</code>
Gets possible challenge subtracks.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Promise</code> - Resolves to the array of subtrack names.  
<a name="module_services.challenges..ChallengesService+getChallengeTags"></a>

#### challengesService.getChallengeTags() ⇒ <code>Promise</code>
Gets possible challenge tags (technologies).

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Promise</code> - Resolves to the array of tag strings.  
<a name="module_services.challenges..ChallengesService+getChallenges"></a>

#### challengesService.getChallenges(filters, params) ⇒ <code>Promise</code>
Gets challenges.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Promise</code> - Resolves to the api response.  

| Param | Type | Description |
| --- | --- | --- |
| filters | <code>Object</code> | Optional. |
| params | <code>Object</code> | Optional. |

<a name="module_services.challenges..ChallengesService+getMarathonMatches"></a>

#### challengesService.getMarathonMatches(filters, params) ⇒ <code>Promise</code>
Gets marathon matches.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Promise</code> - Resolve to the api response.  

| Param | Type | Description |
| --- | --- | --- |
| filters | <code>Object</code> | Optional. |
| params | <code>Object</code> | Optional. |

<a name="module_services.challenges..ChallengesService+getSrms"></a>

#### challengesService.getSrms(params) ⇒ <code>Promise</code>
Gets SRM matches.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  

| Param | Type |
| --- | --- |
| params | <code>Object</code> | 

<a name="module_services.challenges..ChallengesService+getUserChallenges"></a>

#### challengesService.getUserChallenges(username, filters, params) ⇒ <code>Promise</code>
Gets challenges of the specified user.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Promise</code> - Resolves to the api response.  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>String</code> | User whose challenges we want to fetch. |
| filters | <code>Object</code> | Optional. |
| params | <code>Number</code> | Optional. |

<a name="module_services.challenges..ChallengesService+getUserSrms"></a>

#### challengesService.getUserSrms(handle, params) ⇒ <code>Promise</code>
Gets SRM matches related to the user.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  

| Param | Type |
| --- | --- |
| handle | <code>String</code> | 
| params | <code>Object</code> | 

<a name="module_services.challenges..ChallengesService+register"></a>

#### challengesService.register(challengeId) ⇒ <code>Promise</code>
Registers user to the specified challenge.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  

| Param | Type |
| --- | --- |
| challengeId | <code>String</code> | 

<a name="module_services.challenges..ChallengesService+unregister"></a>

#### challengesService.unregister(challengeId) ⇒ <code>Promise</code>
Unregisters user from the specified challenge.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  

| Param | Type |
| --- | --- |
| challengeId | <code>String</code> | 

<a name="module_services.challenges..ChallengesService+getUserMarathonMatches"></a>

#### challengesService.getUserMarathonMatches(username, filters, params) ⇒ <code>Promise</code>
Gets marathon matches of the specified user.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Promise</code> - Resolves to the api response.  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>String</code> | User whose challenges we want to fetch. |
| filters | <code>Object</code> | Optional. |
| params | <code>Number</code> | Optional. |

<a name="module_services.challenges..ChallengesService+getActiveChallengesCount"></a>

#### challengesService.getActiveChallengesCount(handle) ⇒ <code>Action</code>
Gets count of user's active challenges.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  
**Returns**: <code>Action</code> - Resolves to the api response.  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder user handle. |

<a name="module_services.challenges..ChallengesService+submit"></a>

#### challengesService.submit(body, challengeId, track) ⇒ <code>Promise</code>
Submits a challenge submission.  Uses APIV2 for Development submission
and APIV3 for Design submisisons.

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  

| Param | Type | Description |
| --- | --- | --- |
| body | <code>Object</code> |  |
| challengeId | <code>String</code> |  |
| track | <code>String</code> | Either DESIGN or DEVELOP |

<a name="module_services.challenges..ChallengesService+updateChallenge"></a>

#### challengesService.updateChallenge(challenge, tokenV3) ⇒ <code>Promise</code>
Updates the challenge (saves the give challenge to the API).

**Kind**: instance method of [<code>ChallengesService</code>](#module_services.challenges..ChallengesService)  

| Param | Type |
| --- | --- |
| challenge | <code>Object</code> | 
| tokenV3 | <code>String</code> | 

<a name="module_services.challenges..normalizeNameConventionForSubtrack"></a>

### services.challenges~normalizeNameConventionForSubtrack(subTrack) ⇒ <code>String</code>
Normalize name convention for subtrack

**Kind**: inner method of [<code>services.challenges</code>](#module_services.challenges)  
**Returns**: <code>String</code> - Normalized subtrack ID.  

| Param | Type | Description |
| --- | --- | --- |
| subTrack | <code>String</code> | Challenge `subTrack`. |

