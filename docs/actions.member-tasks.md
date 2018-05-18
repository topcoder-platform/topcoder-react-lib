<a name="module_actions.member-tasks"></a>

## actions.member-tasks
Actions for management of member tasks and payments. Under the hood it
is very similar to the challenge listing management, as these tasks are in
fact just challenges of a special kind); however, due to differences in the
use cases, we can implement task management more efficient with dedicated
actions and reducer; thus, this module.


* [actions.member-tasks](#module_actions.member-tasks)
    * [.PAGE_SIZE](#module_actions.member-tasks.PAGE_SIZE)
    * [.dropAll()](#module_actions.member-tasks.dropAll) ⇒ <code>Action</code>
    * [.getInit(uuid, pageNum)](#module_actions.member-tasks.getInit) ⇒ <code>Action</code>
    * [.getDone(uuid, projectId, pageNum, tokenV3)](#module_actions.member-tasks.getDone) ⇒ <code>Action</code>

<a name="module_actions.member-tasks.PAGE_SIZE"></a>

### actions.member-tasks.PAGE_SIZE
Holds the size of member tasks page for the MEMBER_TASK/GET_DONE
action. Mind that current version of TC API v3 restricts the possible page
size by 50 tasks anyway, thus setting this to a larger value will result in
problems.

**Kind**: static constant of [<code>actions.member-tasks</code>](#module_actions.member-tasks)  
<a name="module_actions.member-tasks.dropAll"></a>

### actions.member-tasks.dropAll() ⇒ <code>Action</code>
Creates an action that removes all loaded member tasks from Redux
store, and cancels any on-going loading operations.

**Kind**: static method of [<code>actions.member-tasks</code>](#module_actions.member-tasks)  
<a name="module_actions.member-tasks.getInit"></a>

### actions.member-tasks.getInit(uuid, pageNum) ⇒ <code>Action</code>
Creates an action that signals beginning of member tasks page loading.
Note that dispatching this action before a previous loading operation has
been completed will cancel the previous loading operation.

**Kind**: static method of [<code>actions.member-tasks</code>](#module_actions.member-tasks)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the loading operation. |
| pageNum | <code>Number</code> | 0-based index of the page to load (PAGE_SIZE constant  holds the page size). |

<a name="module_actions.member-tasks.getDone"></a>

### actions.member-tasks.getDone(uuid, projectId, pageNum, tokenV3) ⇒ <code>Action</code>
Creates an action that loads a page of member tasks.
Prior to this action always dispatch
[getInit](#module_actions.member-tasks.getInit) action with
the same arguments. The result of this action will be silently
discarted if its uuid is not stored in the Redux list of pending requests
to load tasks.

**Kind**: static method of [<code>actions.member-tasks</code>](#module_actions.member-tasks)  

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the loading operation. |
| projectId | <code>String</code> | Project filter for tasks. |
| pageNum | <code>Number</code> | 0-based index of the page to load (PAGE_SIZE constant  holds the page size). |
| tokenV3 | <code>String</code> | Topcoder v3 auth token. |

