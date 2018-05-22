<a name="module_services.communities"></a>

## services.communities
Communities service.


* [services.communities](#module_services.communities)
    * _static_
        * [.getService(tokenV3)](#module_services.communities.getService) ⇒ <code>Communities</code>
    * _inner_
        * [~Communities](#module_services.communities..Communities)
            * [new Communities(tokenV3)](#new_module_services.communities..Communities_new)
            * [.getList(userGroupIds)](#module_services.communities..Communities+getList) ⇒ <code>Promise</code>
            * [.getMetadata(communityId)](#module_services.communities..Communities+getMetadata) ⇒ <code>Promise</code>

<a name="module_services.communities.getService"></a>

### services.communities.getService(tokenV3) ⇒ <code>Communities</code>
Returns a new or existing communities service.

**Kind**: static method of [<code>services.communities</code>](#module_services.communities)  
**Returns**: <code>Communities</code> - Communties service object  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v3. |

<a name="module_services.communities..Communities"></a>

### services.communities~Communities
Client-side version of the service.

**Kind**: inner class of [<code>services.communities</code>](#module_services.communities)  

* [~Communities](#module_services.communities..Communities)
    * [new Communities(tokenV3)](#new_module_services.communities..Communities_new)
    * [.getList(userGroupIds)](#module_services.communities..Communities+getList) ⇒ <code>Promise</code>
    * [.getMetadata(communityId)](#module_services.communities..Communities+getMetadata) ⇒ <code>Promise</code>

<a name="new_module_services.communities..Communities_new"></a>

#### new Communities(tokenV3)
Creates a new [Communities](#module_services.communities..Communities) instance.


| Param | Type |
| --- | --- |
| tokenV3 | <code>String</code> | 

<a name="module_services.communities..Communities+getList"></a>

#### communities.getList(userGroupIds) ⇒ <code>Promise</code>
Gets the list of communities accessible to the member of specified groups.

**Kind**: instance method of [<code>Communities</code>](#module_services.communities..Communities)  
**Returns**: <code>Promise</code> - Resolves to the array of community data objects. Each of
 the objects indludes only the most important data on the community.  

| Param | Type |
| --- | --- |
| userGroupIds | <code>Array.&lt;String&gt;</code> | 

<a name="module_services.communities..Communities+getMetadata"></a>

#### communities.getMetadata(communityId) ⇒ <code>Promise</code>
Gets metadata for the specified community.

**Kind**: instance method of [<code>Communities</code>](#module_services.communities..Communities)  
**Returns**: <code>Promise</code> - Resolves to the community metadata.  

| Param | Type |
| --- | --- |
| communityId | <code>String</code> | 

