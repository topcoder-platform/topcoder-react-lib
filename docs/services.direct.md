<a name="module_services.direct"></a>

## services.direct
The Direct service takes care about communication with Direct APIs:
 projects, billing accounts, copilots, all these stuff should be added here,
 at least for now.


* [services.direct](#module_services.direct)
    * _static_
        * [.getService(tokenV3)](#module_services.direct.getService) ⇒ <code>Direct</code>
    * _inner_
        * [~Direct](#module_services.direct..Direct)
            * [new Direct(tokenV3)](#new_module_services.direct..Direct_new)
            * [.getProjectDetails(projectId)](#module_services.direct..Direct+getProjectDetails) ⇒ <code>Promise</code>
            * [.getProjectPermissions(projectId, tokenV3)](#module_services.direct..Direct+getProjectPermissions) ⇒ <code>Promise</code>
            * [.getUserProjects(query)](#module_services.direct..Direct+getUserProjects) ⇒ <code>Promise</code>

<a name="module_services.direct.getService"></a>

### services.direct.getService(tokenV3) ⇒ <code>Direct</code>
Returns a new or existing [Direct](#module_services.direct..Direct) service.

**Kind**: static method of [<code>services.direct</code>](#module_services.direct)  
**Returns**: <code>Direct</code> - Direct service object.  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Topcoder auth token v3. |

<a name="module_services.direct..Direct"></a>

### services.direct~Direct
Direct service class.

**Kind**: inner class of [<code>services.direct</code>](#module_services.direct)  

* [~Direct](#module_services.direct..Direct)
    * [new Direct(tokenV3)](#new_module_services.direct..Direct_new)
    * [.getProjectDetails(projectId)](#module_services.direct..Direct+getProjectDetails) ⇒ <code>Promise</code>
    * [.getProjectPermissions(projectId, tokenV3)](#module_services.direct..Direct+getProjectPermissions) ⇒ <code>Promise</code>
    * [.getUserProjects(query)](#module_services.direct..Direct+getUserProjects) ⇒ <code>Promise</code>

<a name="new_module_services.direct..Direct_new"></a>

#### new Direct(tokenV3)
Creates a new [Direct](#module_services.direct..Direct) instance.


| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Topcoder auth token v3. Though optional,  most probably most, if not all, of the service functionality won't work  for non-authenticated visitors. |

<a name="module_services.direct..Direct+getProjectDetails"></a>

#### direct.getProjectDetails(projectId) ⇒ <code>Promise</code>
Gets details of the specified project.

**Kind**: instance method of [<code>Direct</code>](#module_services.direct..Direct)  
**Returns**: <code>Promise</code> - Resolves to the project details object.  

| Param | Type |
| --- | --- |
| projectId | <code>Number</code> | 

<a name="module_services.direct..Direct+getProjectPermissions"></a>

#### direct.getProjectPermissions(projectId, tokenV3) ⇒ <code>Promise</code>
Gets user permissions on the specified project.

**Kind**: instance method of [<code>Direct</code>](#module_services.direct..Direct)  
**Returns**: <code>Promise</code> - Resolves to the user permissions data.  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>Number</code> \| <code>String</code> |  |
| tokenV3 | <code>String</code> | Auth token for API v3. |

<a name="module_services.direct..Direct+getUserProjects"></a>

#### direct.getUserProjects(query) ⇒ <code>Promise</code>
Gets all projects the user can see.

**Kind**: instance method of [<code>Direct</code>](#module_services.direct..Direct)  
**Returns**: <code>Promise</code> - Resolves to an array of project objects.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | Optional. Query params for the request. |

