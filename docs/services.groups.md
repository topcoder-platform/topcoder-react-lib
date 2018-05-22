<a name="module_services.groups"></a>

## services.groups
Service for communication with group-related part of Topcoder API.

NOTE: Through this file, and in related contexts, by loading a user group,
or user groups data, we refer to loading the information about descendant
user groups; i.e. given some user group(s) we speak about loading the sub-
three of related child groups.

By group maps we refer to the object having group IDs as the keys, and
group data objects as the values. Any group object included into a group map
has its "subGroups" array (if present) replaced by "subGroupIds", that lists
only the IDs of immediate child groups; actual child group objects from
"subGroups" are recursively added to the top level of the group map.
Also each group in the group map is timestamped to keep caching of
the loaded data.


* [services.groups](#module_services.groups)
    * _static_
        * [.addDescendantGroups(groupIds, knownGroups)](#module_services.groups.addDescendantGroups) ⇒ <code>Array.&lt;String&gt;</code>
        * [.checkGroupsStatus(groupIds, knownGroups, loadingGroups)](#module_services.groups.checkGroupsStatus) ⇒ <code>Object</code>
        * [.checkUserGroups(groupIds, userGroups, knownGroups)](#module_services.groups.checkUserGroups) ⇒ <code>Boolean</code>
        * [.getService(tokenV3)](#module_services.groups.getService) ⇒ <code>GroupService</code>
    * _inner_
        * [~GroupService](#module_services.groups..GroupService)
            * [new GroupService(tokenV3)](#new_module_services.groups..GroupService_new)
            * [.addMember(groupId, memberId, membershipType)](#module_services.groups..GroupService+addMember) ⇒ <code>Promise</code>
            * [.getGroup(groupId, withSubGroups)](#module_services.groups..GroupService+getGroup) ⇒ <code>Promise</code>
            * [.getGroupMap(groupIds)](#module_services.groups..GroupService+getGroupMap) ⇒ <code>Promise</code>
            * [.getMembers(groupId)](#module_services.groups..GroupService+getMembers) ⇒ <code>Promise</code>
            * [.getMembersCount(groupId, withSubGroups)](#module_services.groups..GroupService+getMembersCount) ⇒ <code>Promise</code>
        * [~handleApiResponse(response)](#module_services.groups..handleApiResponse) ⇒ <code>Promise</code>
        * [~mergeGroup(groups, group)](#module_services.groups..mergeGroup)

<a name="module_services.groups.addDescendantGroups"></a>

### services.groups.addDescendantGroups(groupIds, knownGroups) ⇒ <code>Array.&lt;String&gt;</code>
Given an array of IDs (or a single ID) of user groups, and a map of known
user groups, it returns the array including all specified user groups, and
all their known descendant groups.

**Kind**: static method of [<code>services.groups</code>](#module_services.groups)  

| Param | Type |
| --- | --- |
| groupIds | <code>String</code> \| <code>Array.&lt;String&gt;</code> | 
| knownGroups | <code>Object</code> | 

<a name="module_services.groups.checkGroupsStatus"></a>

### services.groups.checkGroupsStatus(groupIds, knownGroups, loadingGroups) ⇒ <code>Object</code>
Splits the given list of group IDs into the lists of groups being loaded,
loaded, and others.

**Kind**: static method of [<code>services.groups</code>](#module_services.groups)  
**Returns**: <code>Object</code> - Resulting object may hold four arrays with group IDs from
 "groupIds" (empty arrays will not be included into the result object):
 - "loaded" - the groups that are present in "knownGroups" and are not
   outdated;
 - "loading" - the groups that are not present in "knownGroups" (or present,
   but outdated); but they are already being loaded;
 - "missing" - the groups that are not present in "knownGroups"
   (or outdated), and are not being loaded.
 - "unknown" - the groups that are absent in "knownGroups" map.  

| Param | Type | Description |
| --- | --- | --- |
| groupIds | <code>String</code> \| <code>Array.&lt;String&gt;</code> | ID, or an array of IDs, of the group(s) we  are interested in. |
| knownGroups | <code>Object</code> | Optional. The map of already known groups (some  of them may be outdated, though). This should be of the same format as the  object on "groups.groups" path of the Redux store. Defaults to empty object. |
| loadingGroups | <code>Object</code> | Optional. Set of groups beign loaded now. This  should be of the same format as the object on "groups.loading" path of the  Redux store. Defaults to empty object. |

<a name="module_services.groups.checkUserGroups"></a>

### services.groups.checkUserGroups(groupIds, userGroups, knownGroups) ⇒ <code>Boolean</code>
Returns "true" if "userGroups" arrays includes any group specified by
"groupIds", or any group descendant from a group specified by "groupIds".
The is the map of known groups

**Kind**: static method of [<code>services.groups</code>](#module_services.groups)  

| Param | Type | Description |
| --- | --- | --- |
| groupIds | <code>String</code> \| <code>Array.&lt;String&gt;</code> |  |
| userGroups | <code>Array.&lt;Object&gt;</code> \| <code>Array.&lt;String&gt;</code> | Array of user's groups or their IDs. |
| knownGroups | <code>Object</code> | Map of known groups. |

<a name="module_services.groups.getService"></a>

### services.groups.getService(tokenV3) ⇒ <code>GroupService</code>
Returns a new or existing instance of challenge service, which works with
the specified auth token.

**Kind**: static method of [<code>services.groups</code>](#module_services.groups)  
**Returns**: <code>GroupService</code> - Instance of the service.  

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Topcoder API v3 auth token. |

<a name="module_services.groups..GroupService"></a>

### services.groups~GroupService
Service class.

**Kind**: inner class of [<code>services.groups</code>](#module_services.groups)  

* [~GroupService](#module_services.groups..GroupService)
    * [new GroupService(tokenV3)](#new_module_services.groups..GroupService_new)
    * [.addMember(groupId, memberId, membershipType)](#module_services.groups..GroupService+addMember) ⇒ <code>Promise</code>
    * [.getGroup(groupId, withSubGroups)](#module_services.groups..GroupService+getGroup) ⇒ <code>Promise</code>
    * [.getGroupMap(groupIds)](#module_services.groups..GroupService+getGroupMap) ⇒ <code>Promise</code>
    * [.getMembers(groupId)](#module_services.groups..GroupService+getMembers) ⇒ <code>Promise</code>
    * [.getMembersCount(groupId, withSubGroups)](#module_services.groups..GroupService+getMembersCount) ⇒ <code>Promise</code>

<a name="new_module_services.groups..GroupService_new"></a>

#### new GroupService(tokenV3)

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v3. |

<a name="module_services.groups..GroupService+addMember"></a>

#### groupService.addMember(groupId, memberId, membershipType) ⇒ <code>Promise</code>
Adds new member to the group.

**Kind**: instance method of [<code>GroupService</code>](#module_services.groups..GroupService)  

| Param | Type |
| --- | --- |
| groupId | <code>String</code> | 
| memberId | <code>String</code> | 
| membershipType | <code>String</code> | 

<a name="module_services.groups..GroupService+getGroup"></a>

#### groupService.getGroup(groupId, withSubGroups) ⇒ <code>Promise</code>
Gets detailed information about the group.

Notice, when "withSubGroups" argument is true (default) this method returns
a tree of group data objects, connected via their "subGroups" fields.
getMap(..) method below wraps this functionality in a more practical way!

**Kind**: instance method of [<code>GroupService</code>](#module_services.groups..GroupService)  
**Returns**: <code>Promise</code> - On success resolves to the group data object.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| groupId | <code>String</code> |  |  |
| withSubGroups | <code>Boolean</code> | <code>true</code> | Optional. Defaults to true. Specifies,  whether the response should information about sub-groups, if any. |

<a name="module_services.groups..GroupService+getGroupMap"></a>

#### groupService.getGroupMap(groupIds) ⇒ <code>Promise</code>
Gets detailed information about the specified user group(s) and their
descendant sub-groups.

**Kind**: instance method of [<code>GroupService</code>](#module_services.groups..GroupService)  
**Returns**: <code>Promise</code> - Resolves to the group map. That object will have group
 IDs as the keys, and corresponding group data objects as the values. In
 each group data object the "subGroups" field, if any, will be replaced by
"subGroupIds" (array of IDs of the immediate child groups), and the actual
 data on the sub-groups will be moved to the root of the map object.
 It also timestamps each fetched group.  

| Param | Type | Description |
| --- | --- | --- |
| groupIds | <code>String</code> \| <code>Array.&lt;String&gt;</code> | Group ID, or an array of group IDs,  to query from Topcoder API. |

<a name="module_services.groups..GroupService+getMembers"></a>

#### groupService.getMembers(groupId) ⇒ <code>Promise</code>
Gets group members.

**Kind**: instance method of [<code>GroupService</code>](#module_services.groups..GroupService)  
**Returns**: <code>Promise</code> - On sucess resolves to the array of member objects,
 which include user IDs, membership time, and some bookkeeping data.  

| Param | Type |
| --- | --- |
| groupId | <code>String</code> | 

<a name="module_services.groups..GroupService+getMembersCount"></a>

#### groupService.getMembersCount(groupId, withSubGroups) ⇒ <code>Promise</code>
Gets the number of members in the group.

**Kind**: instance method of [<code>GroupService</code>](#module_services.groups..GroupService)  
**Returns**: <code>Promise</code> - Resolves to the members count.  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>Number</code> \| <code>String</code> | ID of the group. |
| withSubGroups | <code>Boolean</code> | Optional. When this flag is set, the count  will include members of sub-groups of the specified group. |

<a name="module_services.groups..handleApiResponse"></a>

### services.groups~handleApiResponse(response) ⇒ <code>Promise</code>
Private. Handles given response from the groups API.

**Kind**: inner method of [<code>services.groups</code>](#module_services.groups)  
**Returns**: <code>Promise</code> - On success resolves to the data fetched from the API.  

| Param | Type |
| --- | --- |
| response | <code>Object</code> | 

<a name="module_services.groups..mergeGroup"></a>

### services.groups~mergeGroup(groups, group)
Private. Merges given user group (possibly a tree of user groups) into
groups map. This function intended only for internal use inside this module,
as it may mutate both arguments (hence, the corresponding ESLint rule is
disabled within this function), thus should be used only where it is safe.
For external use a similar function is provided by "utils/tc" module.

**Kind**: inner method of [<code>services.groups</code>](#module_services.groups)  

| Param | Type |
| --- | --- |
| groups | <code>Object</code> | 
| group | <code>Object</code> | 

