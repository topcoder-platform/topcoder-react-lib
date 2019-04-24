<a name="module_actions.members"></a>

## actions.members
Actions related to members data.


* [actions.members](#module_actions.members)
    * [.drop(handle)](#module_actions.members.drop) ⇒ <code>Action</code>
    * [.dropAll()](#module_actions.members.dropAll) ⇒ <code>Action</code>
    * [.getAchievementsInit(handle, uuid)](#module_actions.members.getAchievementsInit) ⇒ <code>Action</code>
    * [.getAchievementsDone(handle, uuid)](#module_actions.members.getAchievementsDone) ⇒ <code>Action</code>
    * [.getAchievementsV3Done(handle, uuid)](#module_actions.members.getAchievementsV3Done) ⇒ <code>Action</code>
    * [.getFinancesInit(handle, uuid)](#module_actions.members.getFinancesInit) ⇒ <code>Action</code>
    * [.getFinancesDone(handle, uuid, tokenV3)](#module_actions.members.getFinancesDone) ⇒ <code>Action</code>
    * [.getStatsInit(handle, uuid)](#module_actions.members.getStatsInit) ⇒ <code>Action</code>
    * [.getStatsDone(handle, uuid, tokenV3)](#module_actions.members.getStatsDone) ⇒ <code>Action</code>
    * [.getActiveChallengesInit(handle, uuid)](#module_actions.members.getActiveChallengesInit) ⇒ <code>Object</code>
    * [.getActiveChallengesDone(handle, uuid, tokenV3)](#module_actions.members.getActiveChallengesDone) ⇒ <code>Object</code>
    * [.getStatsHistoryInit(handle, uuid)](#module_actions.members.getStatsHistoryInit) ⇒ <code>Action</code>
    * [.getStatsHistoryDone(handle, uuid, tokenV3)](#module_actions.members.getStatsHistoryDone) ⇒ <code>Action</code>
    * [.getStatsDistributionInit(handle, uuid)](#module_actions.members.getStatsDistributionInit) ⇒ <code>Action</code>
    * [.getStatsDistributionDone(handle, track, subTrack, uuid, tokenV3)](#module_actions.members.getStatsDistributionDone) ⇒ <code>Action</code>

<a name="module_actions.members.drop"></a>

### actions.members.drop(handle) ⇒ <code>Action</code>
Creates an action that drops all information related to the specfied
 member.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Topcoder user handle. |

<a name="module_actions.members.dropAll"></a>

### actions.members.dropAll() ⇒ <code>Action</code>
Creates an action that drops all member information loaded by
 actions from this module.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  
<a name="module_actions.members.getAchievementsInit"></a>

### actions.members.getAchievementsInit(handle, uuid) ⇒ <code>Action</code>
Creates an action that signals beginning of member achievements
 loading.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| uuid | <code>String</code> | Loading operation UUID. |

<a name="module_actions.members.getAchievementsDone"></a>

### actions.members.getAchievementsDone(handle, uuid) ⇒ <code>Action</code>
Creates an action that loads member achievements from v2 API.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| uuid | <code>String</code> | Loading operation |

<a name="module_actions.members.getAchievementsV3Done"></a>

### actions.members.getAchievementsV3Done(handle, uuid) ⇒ <code>Action</code>
Creates an action that loads member achievements from v3 API.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| uuid | <code>String</code> | Loading operation |

<a name="module_actions.members.getFinancesInit"></a>

### actions.members.getFinancesInit(handle, uuid) ⇒ <code>Action</code>
Creates an action that signals beginning of loading the member's
 financial information.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| uuid | <code>String</code> | Operation UUID. |

<a name="module_actions.members.getFinancesDone"></a>

### actions.members.getFinancesDone(handle, uuid, tokenV3) ⇒ <code>Action</code>
Creates an action that loads member's financial information.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| uuid | <code>String</code> | Operation UUID. |
| tokenV3 | <code>String</code> | v3 auth token. |

<a name="module_actions.members.getStatsInit"></a>

### actions.members.getStatsInit(handle, uuid) ⇒ <code>Action</code>
Creates an action that signals beginning of member stats loading.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| uuid | <code>String</code> | Operation UUID. |

<a name="module_actions.members.getStatsDone"></a>

### actions.members.getStatsDone(handle, uuid, tokenV3) ⇒ <code>Action</code>
Create an action that loads member statistics.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| uuid | <code>String</code> | Operation UUID. |
| tokenV3 | <code>String</code> | v3 auth token. |

<a name="module_actions.members.getActiveChallengesInit"></a>

### actions.members.getActiveChallengesInit(handle, uuid) ⇒ <code>Object</code>
Payload creator for the action that inits the loading of member active challenges.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  
**Returns**: <code>Object</code> - Payload  

| Param | Type |
| --- | --- |
| handle | <code>String</code> | 
| uuid | <code>String</code> | 

<a name="module_actions.members.getActiveChallengesDone"></a>

### actions.members.getActiveChallengesDone(handle, uuid, tokenV3) ⇒ <code>Object</code>
Payload creator for the action that loads the member active challenges.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  
**Returns**: <code>Object</code> - Payload  

| Param | Type |
| --- | --- |
| handle | <code>String</code> | 
| uuid | <code>String</code> | 
| tokenV3 | <code>String</code> | 

<a name="module_actions.members.getStatsHistoryInit"></a>

### actions.members.getStatsHistoryInit(handle, uuid) ⇒ <code>Action</code>
Create an action that signals beginning of member stats distribution history.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| uuid | <code>String</code> | Operation UUID. |

<a name="module_actions.members.getStatsHistoryDone"></a>

### actions.members.getStatsHistoryDone(handle, uuid, tokenV3) ⇒ <code>Action</code>
Create an action that loads the member stats history.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| uuid | <code>String</code> | Operation UUID. |
| tokenV3 | <code>String</code> | v3 auth token. |

<a name="module_actions.members.getStatsDistributionInit"></a>

### actions.members.getStatsDistributionInit(handle, uuid) ⇒ <code>Action</code>
Create an action that signals beginning of member stats distribution loading.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| uuid | <code>String</code> | Operation UUID. |

<a name="module_actions.members.getStatsDistributionDone"></a>

### actions.members.getStatsDistributionDone(handle, track, subTrack, uuid, tokenV3) ⇒ <code>Action</code>
Create an action that loads the member stats distribution.

**Kind**: static method of [<code>actions.members</code>](#module_actions.members)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |
| track | <code>String</code> | Main track name. |
| subTrack | <code>String</code> | Subtrack name. |
| uuid | <code>String</code> | Operation UUID. |
| tokenV3 | <code>String</code> | v3 auth token. |

