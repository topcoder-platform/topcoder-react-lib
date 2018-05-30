<a name="module_services.lookup"></a>

## services.lookup
This module provides a service to get lookup data from Topcoder
via API V3.


* [services.lookup](#module_services.lookup)
    * _static_
        * [.getService(tokenV3)](#module_services.lookup.getService) ⇒ <code>LookupService</code>
    * _inner_
        * [~LookupService](#module_services.lookup..LookupService)
            * [new LookupService(tokenV3)](#new_module_services.lookup..LookupService_new)
            * [.getTags(params)](#module_services.lookup..LookupService+getTags) ⇒ <code>Promise</code>

<a name="module_services.lookup.getService"></a>

### services.lookup.getService(tokenV3) ⇒ <code>LookupService</code>
Returns a new or existing lookup service.

**Kind**: static method of [<code>services.lookup</code>](#module_services.lookup)  
**Returns**: <code>LookupService</code> - Lookup service object  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v3. |

<a name="module_services.lookup..LookupService"></a>

### services.lookup~LookupService
**Kind**: inner class of [<code>services.lookup</code>](#module_services.lookup)  

* [~LookupService](#module_services.lookup..LookupService)
    * [new LookupService(tokenV3)](#new_module_services.lookup..LookupService_new)
    * [.getTags(params)](#module_services.lookup..LookupService+getTags) ⇒ <code>Promise</code>

<a name="new_module_services.lookup..LookupService_new"></a>

#### new LookupService(tokenV3)

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v3. |

<a name="module_services.lookup..LookupService+getTags"></a>

#### lookupService.getTags(params) ⇒ <code>Promise</code>
Gets tags.

**Kind**: instance method of [<code>LookupService</code>](#module_services.lookup..LookupService)  
**Returns**: <code>Promise</code> - Resolves to the tags.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Parameters |

