<a name="module_services.terms"></a>

## services.terms
This module provides a service for convenient manipulation with
Topcoder challenges' terms via TC API.


* [services.terms](#module_services.terms)
    * _static_
        * [.getService(tokenV2)](#module_services.terms.getService) ⇒ <code>TermsService</code>
    * _inner_
        * [~TermsService](#module_services.terms..TermsService)
            * [new TermsService(tokenV2)](#new_module_services.terms..TermsService_new)
            * [.getChallengeTerms(challengeId)](#module_services.terms..TermsService+getChallengeTerms) ⇒ <code>Promise</code>
            * [.getCommunityTerms(communityId, tokenV3)](#module_services.terms..TermsService+getCommunityTerms) ⇒ <code>Promise</code>
            * [.getReviewOpportunityTerms(requiredTerms)](#module_services.terms..TermsService+getReviewOpportunityTerms) ⇒ <code>Promise</code>
            * [.getTermDetails(termId)](#module_services.terms..TermsService+getTermDetails) ⇒ <code>Promise</code>
            * [.getDocuSignUrl(templateId, returnUrl)](#module_services.terms..TermsService+getDocuSignUrl) ⇒ <code>Promise</code>
            * [.agreeTerm(termId)](#module_services.terms..TermsService+agreeTerm) ⇒ <code>Promise</code>

<a name="module_services.terms.getService"></a>

### services.terms.getService(tokenV2) ⇒ <code>TermsService</code>
Returns a new or existing terms service.

**Kind**: static method of [<code>services.terms</code>](#module_services.terms)  
**Returns**: <code>TermsService</code> - Terms service object  

| Param | Type | Description |
| --- | --- | --- |
| tokenV2 | <code>String</code> | Optional. Auth token for Topcoder API v2. |

<a name="module_services.terms..TermsService"></a>

### services.terms~TermsService
Service class.

**Kind**: inner class of [<code>services.terms</code>](#module_services.terms)  

* [~TermsService](#module_services.terms..TermsService)
    * [new TermsService(tokenV2)](#new_module_services.terms..TermsService_new)
    * [.getChallengeTerms(challengeId)](#module_services.terms..TermsService+getChallengeTerms) ⇒ <code>Promise</code>
    * [.getCommunityTerms(communityId, tokenV3)](#module_services.terms..TermsService+getCommunityTerms) ⇒ <code>Promise</code>
    * [.getReviewOpportunityTerms(requiredTerms)](#module_services.terms..TermsService+getReviewOpportunityTerms) ⇒ <code>Promise</code>
    * [.getTermDetails(termId)](#module_services.terms..TermsService+getTermDetails) ⇒ <code>Promise</code>
    * [.getDocuSignUrl(templateId, returnUrl)](#module_services.terms..TermsService+getDocuSignUrl) ⇒ <code>Promise</code>
    * [.agreeTerm(termId)](#module_services.terms..TermsService+agreeTerm) ⇒ <code>Promise</code>

<a name="new_module_services.terms..TermsService_new"></a>

#### new TermsService(tokenV2)

| Param | Type | Description |
| --- | --- | --- |
| tokenV2 | <code>String</code> | Optional. Auth token for Topcoder API v2. |

<a name="module_services.terms..TermsService+getChallengeTerms"></a>

#### termsService.getChallengeTerms(challengeId) ⇒ <code>Promise</code>
get all terms of specified challenge

**Kind**: instance method of [<code>TermsService</code>](#module_services.terms..TermsService)  
**Returns**: <code>Promise</code> - promise of the request result  

| Param | Type | Description |
| --- | --- | --- |
| challengeId | <code>Number</code> \| <code>String</code> | id of the challenge |

<a name="module_services.terms..TermsService+getCommunityTerms"></a>

#### termsService.getCommunityTerms(communityId, tokenV3) ⇒ <code>Promise</code>
get all terms for community

NOTE: As there is no specific endpoint to get community terms by one call
      currently we get community term ids from community service and after
      we get community terms using term ids list one by one

**Kind**: instance method of [<code>TermsService</code>](#module_services.terms..TermsService)  
**Returns**: <code>Promise</code> - resolves to the list of community terms  

| Param | Type | Description |
| --- | --- | --- |
| communityId | <code>String</code> | community id |
| tokenV3 | <code>String</code> | auth token V3 - we need to get community meta data |

<a name="module_services.terms..TermsService+getReviewOpportunityTerms"></a>

#### termsService.getReviewOpportunityTerms(requiredTerms) ⇒ <code>Promise</code>
Get the terms for Review Opportunities.  This will ensure that the
provided terms have all the necessary fields by getting anything missing
from the terms details endpoint

**Kind**: instance method of [<code>TermsService</code>](#module_services.terms..TermsService)  
**Returns**: <code>Promise</code> - resolves to the list of validated terms  

| Param | Type | Description |
| --- | --- | --- |
| requiredTerms | <code>Object</code> | Required terms for review opportunity |

<a name="module_services.terms..TermsService+getTermDetails"></a>

#### termsService.getTermDetails(termId) ⇒ <code>Promise</code>
get details of specified term

**Kind**: instance method of [<code>TermsService</code>](#module_services.terms..TermsService)  
**Returns**: <code>Promise</code> - promise of the request result  

| Param | Type | Description |
| --- | --- | --- |
| termId | <code>Number</code> \| <code>String</code> | id of the term |

<a name="module_services.terms..TermsService+getDocuSignUrl"></a>

#### termsService.getDocuSignUrl(templateId, returnUrl) ⇒ <code>Promise</code>
generate the url of DocuSign term

**Kind**: instance method of [<code>TermsService</code>](#module_services.terms..TermsService)  
**Returns**: <code>Promise</code> - promise of the request result  

| Param | Type | Description |
| --- | --- | --- |
| templateId | <code>Number</code> \| <code>String</code> | id of the term's template |
| returnUrl | <code>String</code> | callback url after finishing signing |

<a name="module_services.terms..TermsService+agreeTerm"></a>

#### termsService.agreeTerm(termId) ⇒ <code>Promise</code>
Agree a term

**Kind**: instance method of [<code>TermsService</code>](#module_services.terms..TermsService)  
**Returns**: <code>Promise</code> - promise of the request result  

| Param | Type | Description |
| --- | --- | --- |
| termId | <code>Number</code> \| <code>String</code> | id of the term |

