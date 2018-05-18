<a name="module_tc"></a>

## tc
Collection of small Topcoder-related functions.


* [tc](#module_tc)
    * [.REVIEW_OPPORTUNITY_TYPES](#module_tc.REVIEW_OPPORTUNITY_TYPES)
    * [.getOptionTokens(options)](#module_tc.getOptionTokens) ⇒ <code>Object</code>
    * [.getApiResponsePayloadV3(res)](#module_tc.getApiResponsePayloadV3) ⇒ <code>Promise</code>

<a name="module_tc.REVIEW_OPPORTUNITY_TYPES"></a>

### tc.REVIEW_OPPORTUNITY_TYPES
Review Opportunity types

**Kind**: static constant of [<code>tc</code>](#module_tc)  
<a name="module_tc.getOptionTokens"></a>

### tc.getOptionTokens(options) ⇒ <code>Object</code>
Given options object it extracts 'auth.tokenV2' and 'auth.tokenV3',
if they are present there.

**Kind**: static method of [<code>tc</code>](#module_tc)  
**Returns**: <code>Object</code> - It will contain two string fields: tokenV2 and tokenV3.
 These strings will be empty if corresponding tokens are absent.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options object. For convenience, it is allowed to  call this function without "options" argument (will result in empty tokens). |

<a name="module_tc.getApiResponsePayloadV3"></a>

### tc.getApiResponsePayloadV3(res) ⇒ <code>Promise</code>
Gets payload from a standard success response from TC API v3; or throws
an error in case of a failure response.

**Kind**: static method of [<code>tc</code>](#module_tc)  
**Returns**: <code>Promise</code> - Resolves to the payload.  

| Param | Type |
| --- | --- |
| res | <code>Object</code> | 

