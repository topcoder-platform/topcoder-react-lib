<a name="module_services.members"></a>

## services.members
This module provides a service for searching for Topcoder
members via API V3.


* [services.members](#module_services.members)
    * _static_
        * [.getService(tokenV3)](#module_services.members.getService) ⇒ <code>MembersService</code>
    * _inner_
        * [~MembersService](#module_services.members..MembersService)
            * [new MembersService(tokenV3)](#new_module_services.members..MembersService_new)
            * [.getMemberFinances(handle)](#module_services.members..MembersService+getMemberFinances) ⇒ <code>Promise</code>
            * [.getMemberInfo(handle)](#module_services.members..MembersService+getMemberInfo) ⇒ <code>Promise</code>
            * [.getExternalAccounts(handle)](#module_services.members..MembersService+getExternalAccounts) ⇒ <code>Promise</code>
            * [.getExternalLinks(handle)](#module_services.members..MembersService+getExternalLinks) ⇒ <code>Promise</code>
            * [.getSkills(handle)](#module_services.members..MembersService+getSkills) ⇒ <code>Promise</code>
            * [.getStats(handle)](#module_services.members..MembersService+getStats) ⇒ <code>Promise</code>
            * [.getStatsHistory(handle)](#module_services.members..MembersService+getStatsHistory) ⇒ <code>Promise</code>
            * [.getStatsDistribution(handle, track, subTrack)](#module_services.members..MembersService+getStatsDistribution) ⇒ <code>Promise</code>
            * [.getMemberSuggestions(keyword)](#module_services.members..MembersService+getMemberSuggestions) ⇒ <code>Promise</code>
            * [.addWebLink(userHandle, webLink)](#module_services.members..MembersService+addWebLink) ⇒ <code>Promise</code>
            * [.deleteWebLink(userHandle, webLinkHandle)](#module_services.members..MembersService+deleteWebLink) ⇒ <code>Promise</code>
            * [.addSkill(handle, skillTagId)](#module_services.members..MembersService+addSkill) ⇒ <code>Promise</code>
            * [.hideSkill(handle, skillTagId)](#module_services.members..MembersService+hideSkill) ⇒ <code>Promise</code>
            * [.updateMemberProfile(profile)](#module_services.members..MembersService+updateMemberProfile) ⇒ <code>Promise</code>
            * [.updateMemberPhoto(userHandle, file)](#module_services.members..MembersService+updateMemberPhoto) ⇒ <code>Promise</code>
           * [.verifyMemberNewEmail(handle, emailVerifyToken)](#module_services.members..MembersService+verifyMemberNewEmail) ⇒ <code>Promise</code>

<a name="module_services.members.getService"></a>

### services.members.getService(tokenV3) ⇒ <code>MembersService</code>
Returns a new or existing members service.

**Kind**: static method of [<code>services.members</code>](#module_services.members)
**Returns**: <code>MembersService</code> - Members service object

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v3. |

<a name="module_services.members..MembersService"></a>

### services.members~MembersService
Service class.

**Kind**: inner class of [<code>services.members</code>](#module_services.members)

* [~MembersService](#module_services.members..MembersService)
    * [new MembersService(tokenV3)](#new_module_services.members..MembersService_new)
    * [.getMemberFinances(handle)](#module_services.members..MembersService+getMemberFinances) ⇒ <code>Promise</code>
    * [.getMemberInfo(handle)](#module_services.members..MembersService+getMemberInfo) ⇒ <code>Promise</code>
    * [.getExternalAccounts(handle)](#module_services.members..MembersService+getExternalAccounts) ⇒ <code>Promise</code>
    * [.getExternalLinks(handle)](#module_services.members..MembersService+getExternalLinks) ⇒ <code>Promise</code>
    * [.getSkills(handle)](#module_services.members..MembersService+getSkills) ⇒ <code>Promise</code>
    * [.getStats(handle)](#module_services.members..MembersService+getStats) ⇒ <code>Promise</code>
    * [.getStatsHistory(handle)](#module_services.members..MembersService+getStatsHistory) ⇒ <code>Promise</code>
    * [.getStatsDistribution(handle, track, subTrack)](#module_services.members..MembersService+getStatsDistribution) ⇒ <code>Promise</code>
    * [.getMemberSuggestions(keyword)](#module_services.members..MembersService+getMemberSuggestions) ⇒ <code>Promise</code>
    * [.addWebLink(userHandle, webLink)](#module_services.members..MembersService+addWebLink) ⇒ <code>Promise</code>
    * [.deleteWebLink(userHandle, webLinkHandle)](#module_services.members..MembersService+deleteWebLink) ⇒ <code>Promise</code>
    * [.addSkill(handle, skillTagId)](#module_services.members..MembersService+addSkill) ⇒ <code>Promise</code>
    * [.hideSkill(handle, skillTagId)](#module_services.members..MembersService+hideSkill) ⇒ <code>Promise</code>
    * [.updateMemberProfile(profile)](#module_services.members..MembersService+updateMemberProfile) ⇒ <code>Promise</code>
    * [.updateMemberPhoto(userHandle, file)](#module_services.members..MembersService+updateMemberPhoto) ⇒ <code>Promise</code>
    * [.verifyMemberNewEmail(handle, emailVerifyToken)](#module_services.members..MembersService+verifyMemberNewEmail) ⇒ <code>Promise</code>

<a name="new_module_services.members..MembersService_new"></a>

#### new MembersService(tokenV3)

| Param | Type | Description |
| --- | --- | --- |
| tokenV3 | <code>String</code> | Optional. Auth token for Topcoder API v3. |

<a name="module_services.members..MembersService+getMemberFinances"></a>

#### membersService.getMemberFinances(handle) ⇒ <code>Promise</code>
Gets member's financial information.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the financial information object.

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_services.members..MembersService+getMemberInfo"></a>

#### membersService.getMemberInfo(handle) ⇒ <code>Promise</code>
Gets public information on a member.

This method does not require any authorization.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the data object.

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |

<a name="module_services.members..MembersService+getExternalAccounts"></a>

#### membersService.getExternalAccounts(handle) ⇒ <code>Promise</code>
Gets member external account info.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the stats object.

| Param | Type |
| --- | --- |
| handle | <code>String</code> |

<a name="module_services.members..MembersService+getExternalLinks"></a>

#### membersService.getExternalLinks(handle) ⇒ <code>Promise</code>
Gets member external links.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the stats object.

| Param | Type |
| --- | --- |
| handle | <code>String</code> |

<a name="module_services.members..MembersService+getSkills"></a>

#### membersService.getSkills(handle) ⇒ <code>Promise</code>
Gets member skills.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the stats object.

| Param | Type |
| --- | --- |
| handle | <code>String</code> |

<a name="module_services.members..MembersService+getStats"></a>

#### membersService.getStats(handle) ⇒ <code>Promise</code>
Gets member statistics.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the stats object.

| Param | Type |
| --- | --- |
| handle | <code>String</code> |

<a name="module_services.members..MembersService+getStatsHistory"></a>

#### membersService.getStatsHistory(handle) ⇒ <code>Promise</code>
Gets member statistics history

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the stats object.

| Param | Type |
| --- | --- |
| handle | <code>String</code> |

<a name="module_services.members..MembersService+getStatsDistribution"></a>

#### membersService.getStatsDistribution(handle, track, subTrack) ⇒ <code>Promise</code>
Gets member statistics distribution

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the stats object.

| Param | Type |
| --- | --- |
| handle | <code>String</code> |
| track | <code>String</code> |
| subTrack | <code>String</code> |

<a name="module_services.members..MembersService+getMemberSuggestions"></a>

#### membersService.getMemberSuggestions(keyword) ⇒ <code>Promise</code>
Gets a list of suggested member names for the supplied partial.

WARNING: This method requires v3 authorization.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the api response content

| Param | Type | Description |
| --- | --- | --- |
| keyword | <code>String</code> | Partial string to find suggestions for |

<a name="module_services.members..MembersService+addWebLink"></a>

#### membersService.addWebLink(userHandle, webLink) ⇒ <code>Promise</code>
Adds external web link for member.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the api response content

| Param | Type | Description |
| --- | --- | --- |
| userHandle | <code>String</code> | The user handle |
| webLink | <code>String</code> | The external web link |

<a name="module_services.members..MembersService+deleteWebLink"></a>

#### membersService.deleteWebLink(userHandle, webLinkHandle) ⇒ <code>Promise</code>
Deletes external web link for member.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the api response content

| Param | Type | Description |
| --- | --- | --- |
| userHandle | <code>String</code> | The user handle |
| webLinkHandle | <code>String</code> | The external web link handle |

<a name="module_services.members..MembersService+addSkill"></a>

#### membersService.addSkill(handle, skillTagId) ⇒ <code>Promise</code>
Adds user skill.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to operation result

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder user handle |
| skillTagId | <code>Number</code> | Skill tag id |

<a name="module_services.members..MembersService+hideSkill"></a>

#### membersService.hideSkill(handle, skillTagId) ⇒ <code>Promise</code>
Hides user skill.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to operation result

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder user handle |
| skillTagId | <code>Number</code> | Skill tag id |

<a name="module_services.members..MembersService+updateMemberProfile"></a>

#### membersService.updateMemberProfile(profile) ⇒ <code>Promise</code>
Updates member profile.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the api response content

| Param | Type | Description |
| --- | --- | --- |
| profile | <code>Object</code> | The profile to update. |

<a name="module_services.members..MembersService+updateMemberPhoto"></a>

#### membersService.updateMemberPhoto(userHandle, file) ⇒ <code>Promise</code>
Uploads and updates member photo.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the api response content

| Param | Type | Description |
| --- | --- | --- |
| userHandle | <code>String</code> | The user handle |
| file | <code>File</code> | The file to be uploaded |

<a name="module_services.members..MembersService+verifyMemberNewEmail"></a>

#### membersService.verifyMemberNewEmail(handle, emailVerifyToken) ⇒ <code>Promise</code>
Verify member new email.

**Kind**: instance method of [<code>MembersService</code>](#module_services.members..MembersService)
**Returns**: <code>Promise</code> - Resolves to the api response content

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | The member handle |
| emailVerifyToken | <code>String</code> | The verify token of new email |
