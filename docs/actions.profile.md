<a name="module_actions.profile"></a>

## actions.profile
Actions for interactions with profile details API.

**Todo**

- [ ] Some of them repeat actions in [actions.members.md](actions.members.md). The code
 should be refactored to avoid redundancy.


* [actions.profile](#module_actions.profile)
    * [.loadProfile(handle)](#module_actions.profile.loadProfile) ⇒ <code>Action</code>
    * [.getAchievementsInit()](#module_actions.profile.getAchievementsInit) ⇒ <code>Action</code>
    * [.getAchievementsDone(handle)](#module_actions.profile.getAchievementsDone) ⇒ <code>Action</code>
    * [.getExternalAccountsInit()](#module_actions.profile.getExternalAccountsInit) ⇒ <code>Action</code>
    * [.getExternalAccountsDone(handle)](#module_actions.profile.getExternalAccountsDone) ⇒ <code>Action</code>
    * [.getExternalLinksInit()](#module_actions.profile.getExternalLinksInit) ⇒ <code>Action</code>
    * [.getExternalLinksDone(handle)](#module_actions.profile.getExternalLinksDone) ⇒ <code>Action</code>
    * [.getInfoInit()](#module_actions.profile.getInfoInit) ⇒ <code>Action</code>
    * [.getInfoDone(handle)](#module_actions.profile.getInfoDone) ⇒ <code>Action</code>
    * [.getSkillsInit()](#module_actions.profile.getSkillsInit) ⇒ <code>Action</code>
    * [.getSkillsDone(handle)](#module_actions.profile.getSkillsDone) ⇒ <code>Action</code>
    * [.getStatsInit()](#module_actions.profile.getStatsInit) ⇒ <code>Action</code>
    * [.getStatsDone(handle)](#module_actions.profile.getStatsDone) ⇒ <code>Action</code>

<a name="module_actions.profile.loadProfile"></a>

### actions.profile.loadProfile(handle) ⇒ <code>Action</code>
Creates and action that loads user profile.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
**Todo**

- [ ] This action does not follow the pattern with init/done pairs of
 actions. Should be improved.


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.getAchievementsInit"></a>

### actions.profile.getAchievementsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of user achievements loading.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
**Todo**

- [ ] This duplicates similar action in [actions.members.md](actions.members.md)!

<a name="module_actions.profile.getAchievementsDone"></a>

### actions.profile.getAchievementsDone(handle) ⇒ <code>Action</code>
Creates an action that loads user achievements.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
**Todo**

- [ ] This duplicates similar action in [actions.members.md](actions.members.md)!


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.getExternalAccountsInit"></a>

### actions.profile.getExternalAccountsInit() ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
**Todo**

- [ ] To be documented.

<a name="module_actions.profile.getExternalAccountsDone"></a>

### actions.profile.getExternalAccountsDone(handle) ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
**Todo**

- [ ] To be documented.


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.getExternalLinksInit"></a>

### actions.profile.getExternalLinksInit() ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
**Todo**

- [ ] Figure out what does this action do.

<a name="module_actions.profile.getExternalLinksDone"></a>

### actions.profile.getExternalLinksDone(handle) ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
**Todo**

- [ ] Figure out the purpose of this action


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.getInfoInit"></a>

### actions.profile.getInfoInit() ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
**Todo**

- [ ] Figure out the purpose of this action.

<a name="module_actions.profile.getInfoDone"></a>

### actions.profile.getInfoDone(handle) ⇒ <code>Action</code>
**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
**Todo**

- [ ] Figure out the purpose of this action.


| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | User handle. |

<a name="module_actions.profile.getSkillsInit"></a>

### actions.profile.getSkillsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of loading the member's
 skills info.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
<a name="module_actions.profile.getSkillsDone"></a>

### actions.profile.getSkillsDone(handle) ⇒ <code>Action</code>
Creates an action that loads member's skills info.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |

<a name="module_actions.profile.getStatsInit"></a>

### actions.profile.getStatsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of loading member's stats.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  
**Todo**

- [ ] This is similar to [actions.members.md#module_actions.members.getStatsInit](actions.members.md#module_actions.members.getStatsInit)!

<a name="module_actions.profile.getStatsDone"></a>

### actions.profile.getStatsDone(handle) ⇒ <code>Action</code>
Creates an action that loads member's stats.

**Kind**: static method of [<code>actions.profile</code>](#module_actions.profile)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>String</code> | Member handle. |

