<a name="module_actions.reviewOpportunity"></a>

## actions.reviewOpportunity
Actions for review opportunity details API.


* [actions.reviewOpportunity](#module_actions.reviewOpportunity)
    * [.cancelApplicationsInit()](#module_actions.reviewOpportunity.cancelApplicationsInit) ⇒ <code>Action</code>
    * [.cancelApplicationsDone(challengeId, roleIds, tokenV3)](#module_actions.reviewOpportunity.cancelApplicationsDone) ⇒ <code>Action</code>
    * [.getDetailsInit()](#module_actions.reviewOpportunity.getDetailsInit) ⇒ <code>Action</code>
    * [.getDetailsDone(challengeId, tokenV3)](#module_actions.reviewOpportunity.getDetailsDone) ⇒ <code>Action</code>
    * [.submitAppliationInit()](#module_actions.reviewOpportunity.submitAppliationInit) ⇒ <code>Action</code>
    * [.submitApplicationsDone(challengeId, roleIds, tokenV3)](#module_actions.reviewOpportunity.submitApplicationsDone) ⇒ <code>Action</code>

<a name="module_actions.reviewOpportunity.cancelApplicationsInit"></a>

### actions.reviewOpportunity.cancelApplicationsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of review application
 cancelation.

**Kind**: static method of [<code>actions.reviewOpportunity</code>](#module_actions.reviewOpportunity)  
<a name="module_actions.reviewOpportunity.cancelApplicationsDone"></a>

### actions.reviewOpportunity.cancelApplicationsDone(challengeId, roleIds, tokenV3) ⇒ <code>Action</code>
Creates an action that cancels existing applications

**Kind**: static method of [<code>actions.reviewOpportunity</code>](#module_actions.reviewOpportunity)  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>Number</code> | The ID of the challenge (not the opportunity id) |
| roleIds | <code>Array</code> | Array of roleId Numbers to cancel applications for |
| tokenV3 | <code>String</code> | Required. Topcoder auth token v3. |

<a name="module_actions.reviewOpportunity.getDetailsInit"></a>

### actions.reviewOpportunity.getDetailsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of loading the review
 opportunity details.

**Kind**: static method of [<code>actions.reviewOpportunity</code>](#module_actions.reviewOpportunity)  
<a name="module_actions.reviewOpportunity.getDetailsDone"></a>

### actions.reviewOpportunity.getDetailsDone(challengeId, tokenV3) ⇒ <code>Action</code>
Creates an action that gets details of a review opportunity for
 the specified challenge.

**Kind**: static method of [<code>actions.reviewOpportunity</code>](#module_actions.reviewOpportunity)  
**Default**: <code>test</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| challengeId | <code>Number</code> |  | The ID of the challenge (not the opportunity id) |
| tokenV3 | <code>String</code> | <code></code> | Optional. Topcoder auth token v3. |

<a name="module_actions.reviewOpportunity.submitAppliationInit"></a>

### actions.reviewOpportunity.submitAppliationInit() ⇒ <code>Action</code>
Creates an action that signals beginning of review application process.

**Kind**: static method of [<code>actions.reviewOpportunity</code>](#module_actions.reviewOpportunity)  
<a name="module_actions.reviewOpportunity.submitApplicationsDone"></a>

### actions.reviewOpportunity.submitApplicationsDone(challengeId, roleIds, tokenV3) ⇒ <code>Action</code>
Creates an action that submits application for a review opportunity.

**Kind**: static method of [<code>actions.reviewOpportunity</code>](#module_actions.reviewOpportunity)  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>Number</code> | The ID of the challenge (not the opportunity id) |
| roleIds | <code>Array</code> | Array of roleId Numbers to cancel applications for |
| tokenV3 | <code>String</code> | Required. Topcoder auth token v3. |

