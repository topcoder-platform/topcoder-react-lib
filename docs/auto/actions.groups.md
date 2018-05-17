<a name="module_actions.groups"></a>

## actions.groups
Actions related to user groups.

**Todo**

- [ ] Some group-related actions can be found elsewhere (e.g. addition of
members to group is located inside tc-communities actions, because joining
a community is equivalent to adding user to a group). It will be great to
move such actions in here.


* [actions.groups](#module_actions.groups)
    * [.dropGroups()](#module_actions.groups.dropGroups) ⇒ <code>Action</code>
    * [.getGroupsInit(groupIds)](#module_actions.groups.getGroupsInit) ⇒ <code>Action</code>
    * [.getGroupsDone(groupIds, tokenV3)](#module_actions.groups.getGroupsDone) ⇒ <code>Action</code>

<a name="module_actions.groups.dropGroups"></a>

### actions.groups.dropGroups() ⇒ <code>Action</code>
Creates an action that removes from Redux store all group data loaded
 before by other actions in this module, and also cancels any on-going
 loading operations.

**Kind**: static method of [<code>actions.groups</code>](#module_actions.groups)  
<a name="module_actions.groups.getGroupsInit"></a>

### actions.groups.getGroupsInit(groupIds) ⇒ <code>Action</code>
Creates an action that signals beginning of group data loading.

**Kind**: static method of [<code>actions.groups</code>](#module_actions.groups)  

| Param | Type | Description |
| --- | --- | --- |
| groupIds | <code>String</code> \| <code>Array.&lt;String&gt;</code> | ID, or an array of IDs, for groups to load. |

<a name="module_actions.groups.getGroupsDone"></a>

### actions.groups.getGroupsDone(groupIds, tokenV3) ⇒ <code>Action</code>
Creates an action that loads group data.

**Kind**: static method of [<code>actions.groups</code>](#module_actions.groups)  

| Param | Type | Description |
| --- | --- | --- |
| groupIds | <code>String</code> \| <code>Array.&lt;String&gt;</code> | ID, or an array of IDs, of groups to load. |
| tokenV3 | <code>String</code> | Optional. Topcoder v3 auth token. |

