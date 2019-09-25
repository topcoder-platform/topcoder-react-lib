<a name="module_actions.challenge"></a>

## actions.challenge
Actions related to Topcoder challenges APIs.


* [actions.challenge](#module_actions.challenge)
    * [.dropCheckpoints()](#module_actions.challenge.dropCheckpoints) ⇒ <code>Action</code>
    * [.dropResults()](#module_actions.challenge.dropResults) ⇒ <code>Action</code>
    * [.getDetailsInit(challengeId)](#module_actions.challenge.getDetailsInit) ⇒ <code>Action</code>
    * [.getDetailsDone(challengeId, tokenV3, tokenV2)](#module_actions.challenge.getDetailsDone) ⇒ <code>Action</code>
    * [.getSubmissionsInit(challengeId)](#module_actions.challenge.getSubmissionsInit) ⇒ <code>Action</code>
    * [.getSubmissionsDone(challengeId, tokenV2)](#module_actions.challenge.getSubmissionsDone) ⇒ <code>Action</code>
    * [.registerInit()](#module_actions.challenge.registerInit) ⇒ <code>Action</code>
    * [.registerDone(auth, challengeId)](#module_actions.challenge.registerDone) ⇒ <code>Action</code>
    * [.unregisterInit()](#module_actions.challenge.unregisterInit) ⇒ <code>Action</code>
    * [.unregisterDone(auth, challengeId)](#module_actions.challenge.unregisterDone) ⇒ <code>Action</code>
    * [.loadResultsInit(challengeId)](#module_actions.challenge.loadResultsInit) ⇒ <code>Action</code>
    * [.loadResultsDone(auth, challengeId, type)](#module_actions.challenge.loadResultsDone) ⇒ <code>Action</code>
    * [.fetchCheckpointsInit()](#module_actions.challenge.fetchCheckpointsInit) ⇒ <code>Action</code>
    * [.fetchCheckpointsDone(tokenV2, challengeId)](#module_actions.challenge.fetchCheckpointsDone)
    * [.toggleCheckpointFeedback(id, open)](#module_actions.challenge.toggleCheckpointFeedback) ⇒ <code>Action</code>
    * [.updateChallengeInit(uuid)](#module_actions.challenge.updateChallengeInit) ⇒ <code>Action</code>
    * [.updateChallengeDone(uuid, challenge, tokenV3)](#module_actions.challenge.updateChallengeDone) ⇒ <code>Action</code>
    * [.getActiveChallengesCountInit()](#module_actions.challenge.getActiveChallengesCountInit) ⇒ <code>Action</code>
    * [.getActiveChallengesCountDone(handle, tokenV3)](#module_actions.challenge.getActiveChallengesCountDone) ⇒ <code>Action</code>
    * [.getSubmissionInformationInit(submissionId)](#module_actions.challenge.getSubmissionInformationInit) ⇒ <code>Action</code>
    * [.getSubmissionInformationDone(submissionId, tokenV3)](#module_actions.challenge.getSubmissionInformationDone) ⇒ <code>Action</code>

<a name="module_actions.challenge.dropCheckpoints"></a>

### actions.challenge.dropCheckpoints() ⇒ <code>Action</code>
Creates an action that drops from Redux store all checkpoints loaded
 before.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  
<a name="module_actions.challenge.dropResults"></a>

### actions.challenge.dropResults() ⇒ <code>Action</code>
Creates an action that drops from Redux store all challenge results
 loaded before.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  
<a name="module_actions.challenge.getDetailsInit"></a>

### actions.challenge.getDetailsInit(challengeId) ⇒ <code>Action</code>
Creates an action that signals beginning of challenge details loading.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>Number</code> \| <code>String</code> | Challenge ID |

<a name="module_actions.challenge.getDetailsDone"></a>

### actions.challenge.getDetailsDone(challengeId, tokenV3, tokenV2) ⇒ <code>Action</code>
Creates an action that loads challenge details.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>Number</code> \| <code>String</code> | Challenge ID. |
| tokenV3 | <code>String</code> | Topcoder v3 auth token. |
| tokenV2 | <code>String</code> | Topcoder v2 auth token. |

<a name="module_actions.challenge.getSubmissionsInit"></a>

### actions.challenge.getSubmissionsInit(challengeId) ⇒ <code>Action</code>
Creates an action that signals beginning of user submissions loading.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>String</code> | Challenge ID. |

<a name="module_actions.challenge.getSubmissionsDone"></a>

### actions.challenge.getSubmissionsDone(challengeId, tokenV2) ⇒ <code>Action</code>
Creates an action that loads user's submissions to the specified
challenge.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>String</code> | Challenge ID. |
| tokenV2 | <code>String</code> | Topcoder auth token v2. |

<a name="module_actions.challenge.registerInit"></a>

### actions.challenge.registerInit() ⇒ <code>Action</code>
Creates an action that signals beginning of registration for a
challenge.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  
<a name="module_actions.challenge.registerDone"></a>

### actions.challenge.registerDone(auth, challengeId) ⇒ <code>Action</code>
Creates an action that registers user for a challenge.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| auth | <code>Object</code> | An object that holds auth tokens. You can directly pass  here the `auth` segment of Redux store. |
| [auth.tokenV2] | <code>String</code> | Topcoder auth token v2. |
| [auth.tokenV3] | <code>String</code> | Topcoder auth token v3. |
| challengeId | <code>String</code> | Challenge ID. |

<a name="module_actions.challenge.unregisterInit"></a>

### actions.challenge.unregisterInit() ⇒ <code>Action</code>
Creates an action that signals beginning of user unregistration from a
 challenge.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  
<a name="module_actions.challenge.unregisterDone"></a>

### actions.challenge.unregisterDone(auth, challengeId) ⇒ <code>Action</code>
Creates an action that unregisters user from a challenge.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| auth | <code>Object</code> | Object that holds Topcoder auth tokens. |
| [auth.tokenV2] | <code>String</code> | v2 token. |
| [auth.tokenV3] | <code>String</code> | v3 token. |
| challengeId | <code>String</code> | Challenge ID. |

<a name="module_actions.challenge.loadResultsInit"></a>

### actions.challenge.loadResultsInit(challengeId) ⇒ <code>Action</code>
Creates an action that signals beginning of challenge results loading.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>Number</code> \| <code>String</code> | Challenge ID |

<a name="module_actions.challenge.loadResultsDone"></a>

### actions.challenge.loadResultsDone(auth, challengeId, type) ⇒ <code>Action</code>
Creates an action that loads challenge results.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| auth | <code>Object</code> | Object that holds Topcoder auth tokens. |
| [auth.tokenV2] | <code>String</code> | v2 token. |
| [auth.tokenV3] | <code>String</code> | v3 token. |
| challengeId | <code>Number</code> \| <code>String</code> | Challenge ID. Should match the one passed  in the previous [loadResultsInit](#module_actions.challenge.loadResultsInit) call. |
| type | <code>String</code> | Challenge type. |

<a name="module_actions.challenge.fetchCheckpointsInit"></a>

### actions.challenge.fetchCheckpointsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of challenge checkpoints data
 loading.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  
<a name="module_actions.challenge.fetchCheckpointsDone"></a>

### actions.challenge.fetchCheckpointsDone(tokenV2, challengeId)
Creates an action that loads challenge checkpoints data.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| tokenV2 | <code>String</code> | Topcoder v2 auth token. |
| challengeId | <code>String</code> | Challenge ID. |

<a name="module_actions.challenge.toggleCheckpointFeedback"></a>

### actions.challenge.toggleCheckpointFeedback(id, open) ⇒ <code>Action</code>
Creates an action that Toggles checkpoint details panel in the Topcoder
 Submission Management Page.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  
**Todo**

- [ ] This is UI action relevant to a specific page in specific app. Must be
 moved back to Community App.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | Checkpoint ID. |
| open | <code>Boolean</code> | Target state: `true` to expand, `false` to collapse the  details. |

<a name="module_actions.challenge.updateChallengeInit"></a>

### actions.challenge.updateChallengeInit(uuid) ⇒ <code>Action</code>
Creates an action that signals beginning of challenge details update.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  
**Todo**

- [ ] No idea, why we have this action. This functionality should be covered
 by [getDetailsInit](#module_actions.challenge.getDetailsInit) and
 [getDetailsDone](#module_actions.challenge.getDetailsDone). We need to refactor this.


| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding [updateChallengeDone](#module_actions.challenge.updateChallengeDone)). |

<a name="module_actions.challenge.updateChallengeDone"></a>

### actions.challenge.updateChallengeDone(uuid, challenge, tokenV3) ⇒ <code>Action</code>
Creates an action that updates challenge details.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  
**Todo**

- [ ] No idea, why we have this action. This functionality should be covered
 by [getDetailsInit](#module_actions.challenge.getDetailsInit) and
 [getDetailsDone](#module_actions.challenge.getDetailsDone). We need to refactor this.


| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | Operation UUID. Should match the one passed into the  previous [updateChallengeInit](#module_actions.challenge.updateChallengeInit) call. |
| challenge | <code>Object</code> | Challenge data. |
| tokenV3 | <code>String</code> | Topcoder v3 auth token. |

<a name="module_actions.challenge.getActiveChallengesCountInit"></a>

### actions.challenge.getActiveChallengesCountInit() ⇒ <code>Action</code>
Creates an action that signals beginning of getting count of user's active challenges.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  
<a name="module_actions.challenge.getActiveChallengesCountDone"></a>

### actions.challenge.getActiveChallengesCountDone(handle, tokenV3) ⇒ <code>Action</code>
Creates an action that gets count of user's active challenges from the backend.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder user handle. |
| tokenV3 | <code>String</code> | Optional. Topcoder auth token v3. Without token only  public challenges will be counted. With the token provided, the action will  also count private challenges related to this user. |

<a name="module_actions.challenge.getSubmissionInformationInit"></a>

### actions.challenge.getSubmissionInformationInit(submissionId) ⇒ <code>Action</code>
Creates an action that signals beginning of getting submission information

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)

<a name="module_actions.challenge.getSubmissionInformationDone"></a>
### actions.challenge.getSubmissionInformationDone(submissionId, tokenV3) ⇒ <code>Action</code>
Creates an action that gets submission information from the backend.

**Kind**: static method of [<code>actions.challenge</code>](#module_actions.challenge)

| Param | Type | Description |
| --- | --- | --- |
| submissionId | <code>String</code> | The id of submission |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |
