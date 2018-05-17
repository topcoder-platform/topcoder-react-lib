<a name="module_actions.members"></a>

## actions.members
Actions related to members data.


* [actions.members](#module_actions.members)
    * [.drop(handle)](#module_actions.members.drop) ⇒ <code>Action</code>
    * [.dropAll()](#module_actions.members.dropAll) ⇒ <code>Action</code>
    * [.getAchievementsInit(handle, uuid)](#module_actions.members.getAchievementsInit) ⇒ <code>Action</code>
    * [.getAchievementsDone(handle, uuid)](#module_actions.members.getAchievementsDone) ⇒ <code>Action</code>
    * [.getFinancesInit(handle, uuid)](#module_actions.members.getFinancesInit) ⇒ <code>Action</code>
    * [.getFinancesDone(handle, uuid, tokenV3)](#module_actions.members.getFinancesDone) ⇒ <code>Action</code>
    * [.getStatsInit(handle, uuid)](#module_actions.members.getStatsInit) ⇒ <code>Action</code>
    * [.getStatsDone(handle, uuid, tokenV3)](#module_actions.members.getStatsDone) ⇒ <code>Action</code>

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
Creates an action that loads member achievements.

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

