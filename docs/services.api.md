<a name="module_services.api"></a>

## services.api
This module provides a service for conventient access to Topcoder APIs.


* [services.api](#module_services.api)
    * _static_
        * [.default](#module_services.api.default)
        * [.getApiV2(token)](#module_services.api.getApiV2) ⇒ <code>Api</code>
        * [.getApiV3(token)](#module_services.api.getApiV3) ⇒ <code>Api</code>
    * _inner_
        * [~Api](#module_services.api..Api)
            * [new Api(base, token)](#new_module_services.api..Api_new)
            * [.fetch(enpoint, options)](#module_services.api..Api+fetch) ⇒ <code>Promise</code>
            * [.delete(endpoint, body)](#module_services.api..Api+delete) ⇒ <code>Promise</code>
            * [.get(endpoint)](#module_services.api..Api+get) ⇒ <code>Promise</code>
            * [.post(endpoint, body)](#module_services.api..Api+post) ⇒ <code>Promise</code>
            * [.postJson(endpoint, json)](#module_services.api..Api+postJson) ⇒ <code>Promise</code>
            * [.put(endpoint, body)](#module_services.api..Api+put) ⇒ <code>Promise</code>
            * [.putJson(endpoint, json)](#module_services.api..Api+putJson) ⇒ <code>Promise</code>
            * [.patch(endpoint, body)](#module_services.api..Api+patch) ⇒ <code>Promise</code>
            * [.patchJson(endpoint, json)](#module_services.api..Api+patchJson) ⇒ <code>Promise</code>
            * [.upload(endpoint, body, callback)](#module_services.api..Api+upload) ⇒ <code>Promise</code>

<a name="module_services.api.default"></a>

### services.api.default
The default export from the module is
 [Api](#module_services.api..Api) class.

**Kind**: static property of [<code>services.api</code>](#module_services.api)  
<a name="module_services.api.getApiV2"></a>

### services.api.getApiV2(token) ⇒ <code>Api</code>
Returns a new or existing Api object for Topcoder API v2.

**Kind**: static method of [<code>services.api</code>](#module_services.api)  
**Returns**: <code>Api</code> - API v2 service object.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Optional. Auth token for Topcoder API v2. |

<a name="module_services.api.getApiV3"></a>

### services.api.getApiV3(token) ⇒ <code>Api</code>
Returns a new or existing Api object for Topcoder API v3

**Kind**: static method of [<code>services.api</code>](#module_services.api)  
**Returns**: <code>Api</code> - API v3 service object.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Optional. Auth token for Topcoder API v3. |

<a name="module_services.api..Api"></a>

### services.api~Api
API service object. It is reused for both Topcoder API v2 and v3,
as in these cases we are fine with the same interface, and the only
thing we need to be different is the base URL and auth token to use.

**Kind**: inner class of [<code>services.api</code>](#module_services.api)  

* [~Api](#module_services.api..Api)
    * [new Api(base, token)](#new_module_services.api..Api_new)
    * [.fetch(enpoint, options)](#module_services.api..Api+fetch) ⇒ <code>Promise</code>
    * [.delete(endpoint, body)](#module_services.api..Api+delete) ⇒ <code>Promise</code>
    * [.get(endpoint)](#module_services.api..Api+get) ⇒ <code>Promise</code>
    * [.post(endpoint, body)](#module_services.api..Api+post) ⇒ <code>Promise</code>
    * [.postJson(endpoint, json)](#module_services.api..Api+postJson) ⇒ <code>Promise</code>
    * [.put(endpoint, body)](#module_services.api..Api+put) ⇒ <code>Promise</code>
    * [.putJson(endpoint, json)](#module_services.api..Api+putJson) ⇒ <code>Promise</code>
    * [.patch(endpoint, body)](#module_services.api..Api+patch) ⇒ <code>Promise</code>
    * [.patchJson(endpoint, json)](#module_services.api..Api+patchJson) ⇒ <code>Promise</code>
    * [.upload(endpoint, body, callback)](#module_services.api..Api+upload) ⇒ <code>Promise</code>

<a name="new_module_services.api..Api_new"></a>

#### new Api(base, token)
Creates a new Api object.


| Param | Type | Description |
| --- | --- | --- |
| base | <code>String</code> | Base URL of the API. |
| token | <code>String</code> | Optional. Authorization token. |

<a name="module_services.api..Api+fetch"></a>

#### api.fetch(enpoint, options) ⇒ <code>Promise</code>
Sends HTTP request to the specified API endpoint. This method is just
a convenient wrapper around isomorphic fetch(..):

 - If API service has auth token, Authorization header is automatically
   added to the request;

 - If no Content-Type header set in options, it is automatically set to
   "application/json". In case you want to avoid it, pass null into
   Content-Type header option.

For additional details see https://github.github.io/fetch/

**Kind**: instance method of [<code>Api</code>](#module_services.api..Api)  
**Returns**: <code>Promise</code> - It resolves to the HTTP response object. To get the
 actual data you probably want to call .json() method of that object.
 Mind that this promise rejects only on network errors. In case of
 HTTP errors (404, etc.) the promise will be resolved successfully,
 and you should check .status or .ok fields of the response object
 to find out the response status.  

| Param | Type | Description |
| --- | --- | --- |
| enpoint | <code>String</code> | Should start with slash, like /endpoint. |
| options | <code>Object</code> | Optional. Fetch options. |

<a name="module_services.api..Api+delete"></a>

#### api.delete(endpoint, body) ⇒ <code>Promise</code>
Sends DELETE request to the specified endpoint.

**Kind**: instance method of [<code>Api</code>](#module_services.api..Api)  

| Param | Type |
| --- | --- |
| endpoint | <code>String</code> | 
| body | <code>Blob</code> \| <code>BufferSource</code> \| <code>FormData</code> \| <code>String</code> | 

<a name="module_services.api..Api+get"></a>

#### api.get(endpoint) ⇒ <code>Promise</code>
Sends GET request to the specified endpoint.

**Kind**: instance method of [<code>Api</code>](#module_services.api..Api)  

| Param | Type |
| --- | --- |
| endpoint | <code>String</code> | 

<a name="module_services.api..Api+post"></a>

#### api.post(endpoint, body) ⇒ <code>Promise</code>
Sends POST request to the specified endpoint.

**Kind**: instance method of [<code>Api</code>](#module_services.api..Api)  

| Param | Type |
| --- | --- |
| endpoint | <code>String</code> | 
| body | <code>Blob</code> \| <code>BufferSource</code> \| <code>FormData</code> \| <code>String</code> | 

<a name="module_services.api..Api+postJson"></a>

#### api.postJson(endpoint, json) ⇒ <code>Promise</code>
Sends POST request to the specified endpoint, with JSON payload.

**Kind**: instance method of [<code>Api</code>](#module_services.api..Api)  

| Param | Type |
| --- | --- |
| endpoint | <code>String</code> | 
| json | <code>JSON</code> | 

<a name="module_services.api..Api+put"></a>

#### api.put(endpoint, body) ⇒ <code>Promise</code>
Sends PUT request to the specified endpoint.

**Kind**: instance method of [<code>Api</code>](#module_services.api..Api)  

| Param | Type |
| --- | --- |
| endpoint | <code>String</code> | 
| body | <code>Blob</code> \| <code>BufferSource</code> \| <code>FormData</code> \| <code>String</code> | 

<a name="module_services.api..Api+putJson"></a>

#### api.putJson(endpoint, json) ⇒ <code>Promise</code>
Sends PUT request to the specified endpoint.

**Kind**: instance method of [<code>Api</code>](#module_services.api..Api)  

| Param | Type |
| --- | --- |
| endpoint | <code>String</code> | 
| json | <code>JSON</code> | 

<a name="module_services.api..Api+patch"></a>

#### api.patch(endpoint, body) ⇒ <code>Promise</code>
Sends PATCH request to the specified endpoint.

**Kind**: instance method of [<code>Api</code>](#module_services.api..Api)  

| Param | Type |
| --- | --- |
| endpoint | <code>String</code> | 
| body | <code>Blob</code> \| <code>BufferSource</code> \| <code>FormData</code> \| <code>String</code> | 

<a name="module_services.api..Api+patchJson"></a>

#### api.patchJson(endpoint, json) ⇒ <code>Promise</code>
Sends PATCH request to the specified endpoint.

**Kind**: instance method of [<code>Api</code>](#module_services.api..Api)  

| Param | Type |
| --- | --- |
| endpoint | <code>String</code> | 
| json | <code>JSON</code> | 

<a name="module_services.api..Api+upload"></a>

#### api.upload(endpoint, body, callback) ⇒ <code>Promise</code>
Upload with progress

**Kind**: instance method of [<code>Api</code>](#module_services.api..Api)  

| Param | Type | Description |
| --- | --- | --- |
| endpoint | <code>String</code> |  |
| body | <code>Object</code> | and headers |
| callback | <code>function</code> | handler for update progress only works for client side for now |

