<a name="module_actions.smp"></a>

## actions.smp
Actions related to *My Submissions Management* page.


* [actions.smp](#module_actions.smp)
    * [.deleteSubmissionInit()](#module_actions.smp.deleteSubmissionInit) ⇒ <code>Action</code>
    * [.deleteSubmissionDone(tokenV3, submissionId)](#module_actions.smp.deleteSubmissionDone) ⇒ <code>Action</code>
    * [.downloadSubmission()](#module_actions.smp.downloadSubmission) ⇒ <code>Action</code>

<a name="module_actions.smp.deleteSubmissionInit"></a>

### actions.smp.deleteSubmissionInit() ⇒ <code>Action</code>
Creates an action that signals beginning of submission download.

**Kind**: static method of [<code>actions.smp</code>](#module_actions.smp)  
<a name="module_actions.smp.deleteSubmissionDone"></a>

### actions.smp.deleteSubmissionDone(tokenV3, submissionId) ⇒ <code>Action</code>
Creates an action that deletes user's submission to a challenge.

**Kind**: static method of [<code>actions.smp</code>](#module_actions.smp)  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Topcoder v3 auth token. |
| submissionId | <code>Number</code> \| <code>String</code> | Submission ID. |

<a name="module_actions.smp.downloadSubmission"></a>

### actions.smp.downloadSubmission() ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.smp</code>](#module_actions.smp)  
**Todo**

- [ ] At this moment we don't need any special JS code to download
submissions: we get them from legacy Topcoder Studio API, which is
authenticated by cookies, and can be done with a simple <a> link in
the component. Soon we'll migrate to use the new TC API instead, and
then we'll decide, whether we need operate downloads in JS, or can we
just remove this action.

