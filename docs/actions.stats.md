<a name="module_actions.stats"></a>

## actions.stats
Actions related to Topcoder statistics (at the moment, only community
 statistics).

<a name="module_actions.stats.getCommunityStatsInit"></a>

### actions.stats.getCommunityStatsInit(community, uuid) ⇒ <code>Action</code>
Creates an action that signals beginning of the loading community
 stats.

**Kind**: static method of [<code>actions.stats</code>](#module_actions.stats)  

| Param | Type | Description |
| --- | --- | --- |
| community | <code>Object</code> | Community meta-data object. |
| [community.communityId] | <code>String</code> | Community ID. |
| uuid | <code>String</code> | Operation UUID. |

