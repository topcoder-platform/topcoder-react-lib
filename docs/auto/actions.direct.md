<a name="module_actions.direct"></a>

## actions.direct
Actions related to Direct API: access to projects, billing accounts,
copilot operations, and other similar stuff is handled by them.


* [actions.direct](#module_actions.direct)
    * [.dropAll()](#module_actions.direct.dropAll) ⇒ <code>Action</code>
    * [.getProjectDetailsInit(projectId)](#module_actions.direct.getProjectDetailsInit) ⇒ <code>Action</code>
    * [.getProjectDetailsDone(projectId, tokenV3)](#module_actions.direct.getProjectDetailsDone) ⇒ <code>Action</code>
    * [.getProjectPermissionsInit(projectId)](#module_actions.direct.getProjectPermissionsInit) ⇒ <code>Action</code>
    * [.getProjectPermissionsDone(projectId, tokenV3)](#module_actions.direct.getProjectPermissionsDone) ⇒ <code>Action</code>
    * [.getUserProjectsInit(tokenV3)](#module_actions.direct.getUserProjectsInit) ⇒ <code>Action</code>
    * [.getUserProjectsDone(tokenV3)](#module_actions.direct.getUserProjectsDone) ⇒ <code>Action</code>

<a name="module_actions.direct.dropAll"></a>

### actions.direct.dropAll() ⇒ <code>Action</code>
Creates an action that drops out of Redux store all Direct-related
 data, loaded by other actions from this module, and also cancels any pending
 loading operations.

**Kind**: static method of [<code>actions.direct</code>](#module_actions.direct)  
<a name="module_actions.direct.getProjectDetailsInit"></a>

### actions.direct.getProjectDetailsInit(projectId) ⇒ <code>Action</code>
Creates an action that signals beginning of project details loading.

**Kind**: static method of [<code>actions.direct</code>](#module_actions.direct)  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>Number</code> | Project ID. |

<a name="module_actions.direct.getProjectDetailsDone"></a>

### actions.direct.getProjectDetailsDone(projectId, tokenV3) ⇒ <code>Action</code>
Creates an action that loads project details.

**Kind**: static method of [<code>actions.direct</code>](#module_actions.direct)  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>Number</code> | Project ID. |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |

<a name="module_actions.direct.getProjectPermissionsInit"></a>

### actions.direct.getProjectPermissionsInit(projectId) ⇒ <code>Action</code>
Creates an action that signals beginning of project permissions
 loading.

**Kind**: static method of [<code>actions.direct</code>](#module_actions.direct)  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>Number</code> \| <code>String</code> | Project ID. |

<a name="module_actions.direct.getProjectPermissionsDone"></a>

### actions.direct.getProjectPermissionsDone(projectId, tokenV3) ⇒ <code>Action</code>
Creates an action that loads project permissions.

**Kind**: static method of [<code>actions.direct</code>](#module_actions.direct)  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>Number</code> \| <code>String</code> | Project ID. |
| tokenV3 | <code>String</code> | Topcoder v3 auth token. |

<a name="module_actions.direct.getUserProjectsInit"></a>

### actions.direct.getUserProjectsInit(tokenV3) ⇒ <code>Action</code>
Creates an action that signals beginning of loading the projects
 related with a user.

**Kind**: static method of [<code>actions.direct</code>](#module_actions.direct)  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Topcoder v3 auth token of the user for who we load  the projects. |

<a name="module_actions.direct.getUserProjectsDone"></a>

### actions.direct.getUserProjectsDone(tokenV3) ⇒ <code>Action</code>
Creates an action that loads projects related to a user.

**Kind**: static method of [<code>actions.direct</code>](#module_actions.direct)  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Topcoder auth token v3. |

