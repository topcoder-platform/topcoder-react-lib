<a name="module_services.submissions"></a>

## services.submissions
This module provides a service to get submissions data from Topcoder
via API V5.


* [services.submissions](#module_services.submissions)
    * _static_
        * [.getService(tokenV3)](#module_services.submissions.getService) ⇒ <code>SubmissionsService</code>
    * _inner_
        * [~SubmissionsService](#module_services.submissions..SubmissionsService)
            * [new SubmissionsService(tokenV3)](#new_module_services.submissions..SubmissionsService_new)
            * [.getSubmissions(filters, params)](#module_services.submissions..SubmissionsService+getSubmissions) ⇒ <code>Promise</code>
            * [.getSubmissionInformation(submissionId)](#module_services.submissions..SubmissionsService+getSubmissionInformation) ⇒ <code>Promise</code>

<a name="module_services.submissions.getService"></a>

### services.submissions.getService(tokenV3) ⇒ <code>SubmissionsService</code>
Returns a new or existing submissions service.

**Kind**: static method of [<code>services.submissions</code>](#module_services.submissions)
**Returns**: <code>SubmissionsService</code> - Submissions service object

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v5. |

<a name="module_services.submissions..SubmissionsService"></a>

### services.submissions~SubmissionsService
**Kind**: inner class of [<code>services.submissions</code>](#module_services.submissions)

* [~SubmissionsService](#module_services.submissions..SubmissionsService)
    * [new SubmissionsService(tokenV3)](#new_module_services.submissions..SubmissionsService_new)
    * [.getSubmissions(filters, params)](#module_services.submissions..SubmissionsService+getSubmissions) ⇒ <code>Promise</code>
    * [.getSubmissionInformation(submissionId)](#module_services.submissions..SubmissionsService+getSubmissionInformation) ⇒ <code>Promise</code>

<a name="new_module_services.submissions..SubmissionsService_new"></a>

#### new SubmissionsService(tokenV3)

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v5. |

<a name="module_services.submissions..SubmissionsService+getSubmissions"></a>

#### submissionsService.getSubmissions(filters, params) ⇒ <code>Promise</code>
Gets submissions.

**Kind**: instance method of [<code>SubmissionsService</code>](#module_services.submissions..SubmissionsService)
**Returns**: <code>Promise</code> - Resolves to the submissions.

| Param | Type | Description |
| --- | --- | --- |
| filters | <code>Object</code> | Filters |
| params | <code>Object</code> | Parameters |

<a name="module_services.submissions..SubmissionsService+getSubmissionInformation"></a>

#### submissionsService.getSubmissionInformation(submissionId) ⇒ <code>Promise</code>
Gets submission information.

**Kind**: instance method of [<code>SubmissionsService</code>](#module_services.submissions..SubmissionsService)
**Returns**: <code>Promise</code> - Resolves to the submission information.

| Param | Type | Description |
| --- | --- | --- |
| submissionId | <code>String</code> | The id of submission |
