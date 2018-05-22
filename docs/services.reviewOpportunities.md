<a name="module_services.reviewOpportunities"></a>

## services.reviewOpportunities
This module provides a service for retrieving Review Opportunities and
submitting applications.


* [services.reviewOpportunities](#module_services.reviewOpportunities)
    * _static_
        * [.getReviewOpportunitiesService(tokenV3)](#module_services.reviewOpportunities.getReviewOpportunitiesService) ⇒ <code>MembersService</code>
    * _inner_
        * [~ReviewOpportunitiesService](#module_services.reviewOpportunities..ReviewOpportunitiesService)
            * [new ReviewOpportunitiesService(tokenV3)](#new_module_services.reviewOpportunities..ReviewOpportunitiesService_new)
            * [.getReviewOpportunities(limit, offset)](#module_services.reviewOpportunities..ReviewOpportunitiesService+getReviewOpportunities) ⇒ <code>Promise</code>
            * [.getDetails(challengeId)](#module_services.reviewOpportunities..ReviewOpportunitiesService+getDetails) ⇒ <code>Promise</code>
            * [.submitApplications(challengeId, roleIds)](#module_services.reviewOpportunities..ReviewOpportunitiesService+submitApplications) ⇒ <code>Promise</code>
            * [.cancelApplications(challengeId, roleIds)](#module_services.reviewOpportunities..ReviewOpportunitiesService+cancelApplications) ⇒ <code>Promise</code>

<a name="module_services.reviewOpportunities.getReviewOpportunitiesService"></a>

### services.reviewOpportunities.getReviewOpportunitiesService(tokenV3) ⇒ <code>MembersService</code>
Returns a new or existing review opportunities service.

**Kind**: static method of [<code>services.reviewOpportunities</code>](#module_services.reviewOpportunities)  
**Returns**: <code>MembersService</code> - Members service object  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v3. |

<a name="module_services.reviewOpportunities..ReviewOpportunitiesService"></a>

### services.reviewOpportunities~ReviewOpportunitiesService
Service class.

**Kind**: inner class of [<code>services.reviewOpportunities</code>](#module_services.reviewOpportunities)  

* [~ReviewOpportunitiesService](#module_services.reviewOpportunities..ReviewOpportunitiesService)
    * [new ReviewOpportunitiesService(tokenV3)](#new_module_services.reviewOpportunities..ReviewOpportunitiesService_new)
    * [.getReviewOpportunities(limit, offset)](#module_services.reviewOpportunities..ReviewOpportunitiesService+getReviewOpportunities) ⇒ <code>Promise</code>
    * [.getDetails(challengeId)](#module_services.reviewOpportunities..ReviewOpportunitiesService+getDetails) ⇒ <code>Promise</code>
    * [.submitApplications(challengeId, roleIds)](#module_services.reviewOpportunities..ReviewOpportunitiesService+submitApplications) ⇒ <code>Promise</code>
    * [.cancelApplications(challengeId, roleIds)](#module_services.reviewOpportunities..ReviewOpportunitiesService+cancelApplications) ⇒ <code>Promise</code>

<a name="new_module_services.reviewOpportunities..ReviewOpportunitiesService_new"></a>

#### new ReviewOpportunitiesService(tokenV3)

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v3. |

<a name="module_services.reviewOpportunities..ReviewOpportunitiesService+getReviewOpportunities"></a>

#### reviewOpportunitiesService.getReviewOpportunities(limit, offset) ⇒ <code>Promise</code>
Gets a list of currently open Review Opportunities.

**Kind**: instance method of [<code>ReviewOpportunitiesService</code>](#module_services.reviewOpportunities..ReviewOpportunitiesService)  
**Returns**: <code>Promise</code> - Resolves to the api response in JSON.  

| Param | Type | Description |
| --- | --- | --- |
| limit | <code>Number</code> | The max number to return in one call. |
| offset | <code>Number</code> | Offset, used with limit to lazy load. |

<a name="module_services.reviewOpportunities..ReviewOpportunitiesService+getDetails"></a>

#### reviewOpportunitiesService.getDetails(challengeId) ⇒ <code>Promise</code>
Gets the details of the review opportunity for the corresponding challenge

**Kind**: instance method of [<code>ReviewOpportunitiesService</code>](#module_services.reviewOpportunities..ReviewOpportunitiesService)  
**Returns**: <code>Promise</code> - Resolves to the api response in JSON.  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>Number</code> | The ID of the challenge (not the opportunity id) |

<a name="module_services.reviewOpportunities..ReviewOpportunitiesService+submitApplications"></a>

#### reviewOpportunitiesService.submitApplications(challengeId, roleIds) ⇒ <code>Promise</code>
Submits review opportunity application for the specified challenge

**Kind**: instance method of [<code>ReviewOpportunitiesService</code>](#module_services.reviewOpportunities..ReviewOpportunitiesService)  
**Returns**: <code>Promise</code> - Resolves to the api response in JSON.  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>Number</code> | The ID of the challenge (not the opportunity id) |
| roleIds | <code>Array</code> | List of review role IDs to apply for |

<a name="module_services.reviewOpportunities..ReviewOpportunitiesService+cancelApplications"></a>

#### reviewOpportunitiesService.cancelApplications(challengeId, roleIds) ⇒ <code>Promise</code>
Cancels review opportunity application for the specified challenge

**Kind**: instance method of [<code>ReviewOpportunitiesService</code>](#module_services.reviewOpportunities..ReviewOpportunitiesService)  
**Returns**: <code>Promise</code> - Resolves to the api response in JSON.  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>Number</code> | The ID of the challenge (not the opportunity id) |
| roleIds | <code>Array</code> | List of review role IDs to cancel applications for |

