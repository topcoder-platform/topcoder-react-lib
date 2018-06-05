<a name="module_reducers.members"></a>

## reducers.members
Reducer for the Redux store segment that holds members data.

**Todo**

- [ ] Document state segment structure.


* [reducers.members](#module_reducers.members)
    * _static_
        * [.default](#module_reducers.members.default)
        * [.factory()](#module_reducers.members.factory) ⇒ <code>Promise</code>
    * _inner_
        * [~onDrop(state, action)](#module_reducers.members..onDrop) ⇒ <code>Object</code>
        * [~onDropAll()](#module_reducers.members..onDropAll) ⇒ <code>Object</code>
        * [~onGetAchievementsInit(state)](#module_reducers.members..onGetAchievementsInit) ⇒ <code>Object</code>
        * [~onGetAchievementsDone(state, error)](#module_reducers.members..onGetAchievementsDone) ⇒ <code>Object</code>
        * [~onGetFinancesInit(state)](#module_reducers.members..onGetFinancesInit) ⇒ <code>Object</code>
        * [~onGetFinancesDone(state, action)](#module_reducers.members..onGetFinancesDone) ⇒ <code>Object</code>
        * [~onGetStatsInit(state, action)](#module_reducers.members..onGetStatsInit) ⇒ <code>Object</code>
        * [~onGetStatsDone(state, action)](#module_reducers.members..onGetStatsDone) ⇒ <code>Object</code>
        * [~onGetStatsHistoryInit(state, action)](#module_reducers.members..onGetStatsHistoryInit) ⇒ <code>Object</code>
        * [~onGetStatsHistoryDone(state, action)](#module_reducers.members..onGetStatsHistoryDone) ⇒ <code>Object</code>
        * [~onGetStatsDistributionInit(state, action)](#module_reducers.members..onGetStatsDistributionInit) ⇒ <code>Object</code>
        * [~onGetStatsDistributionDone(state, action)](#module_reducers.members..onGetStatsDistributionDone) ⇒ <code>Object</code>
        * [~onGetActiveChallengesInit(state, action)](#module_reducers.members..onGetActiveChallengesInit) ⇒ <code>Object</code>
        * [~onGetActiveChallengesDone(state, action)](#module_reducers.members..onGetActiveChallengesDone) ⇒ <code>Object</code>
        * [~create(initialState)](#module_reducers.members..create) ⇒ <code>function</code>

<a name="module_reducers.members.default"></a>

### reducers.members.default
Reducer with default initial state.

**Kind**: static property of [<code>reducers.members</code>](#module_reducers.members)  
<a name="module_reducers.members.factory"></a>

### reducers.members.factory() ⇒ <code>Promise</code>
Factory which creates a new reducer with its initial state tailored to the
given options object, if specified (for server-side rendering). If options
object is not specified, it creates just the default reducer. Accepted options are:

**Kind**: static method of [<code>reducers.members</code>](#module_reducers.members)  
**Resolves**: <code>Function(state, action): state</code> New reducer.  
<a name="module_reducers.members..onDrop"></a>

### reducers.members~onDrop(state, action) ⇒ <code>Object</code>
Drops information about a member.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.members..onDropAll"></a>

### reducers.members~onDropAll() ⇒ <code>Object</code>
Drops all loaded information on members.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  
<a name="module_reducers.members..onGetAchievementsInit"></a>

### reducers.members~onGetAchievementsInit(state) ⇒ <code>Object</code>
Inits the loading of member achievements.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action.handle | <code>String</code> | 
| action.uuid | <code>String</code> | 

<a name="module_reducers.members..onGetAchievementsDone"></a>

### reducers.members~onGetAchievementsDone(state, error) ⇒ <code>Object</code>
Finalizes the loading of member achievements.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| error | <code>Object</code> | 
| payload.data | <code>Array</code> | 
| payload.handle | <code>String</code> | 
| payload.uuid | <code>String</code> | 

<a name="module_reducers.members..onGetFinancesInit"></a>

### reducers.members~onGetFinancesInit(state) ⇒ <code>Object</code>
Initializes the loading of member financial information.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action.payload.handle | <code>String</code> | 
| action.payload.uuid | <code>String</code> | 

<a name="module_reducers.members..onGetFinancesDone"></a>

### reducers.members~onGetFinancesDone(state, action) ⇒ <code>Object</code>
Finalizes a pending loading of member financial information.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.members..onGetStatsInit"></a>

### reducers.members~onGetStatsInit(state, action) ⇒ <code>Object</code>
Inits the loading of member stats.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.members..onGetStatsDone"></a>

### reducers.members~onGetStatsDone(state, action) ⇒ <code>Object</code>
Finalizes the loading of member stats.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.members..onGetStatsHistoryInit"></a>

### reducers.members~onGetStatsHistoryInit(state, action) ⇒ <code>Object</code>
Inits the loading of member stats history.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.members..onGetStatsHistoryDone"></a>

### reducers.members~onGetStatsHistoryDone(state, action) ⇒ <code>Object</code>
Finalizes the loading of member stats history.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.members..onGetStatsDistributionInit"></a>

### reducers.members~onGetStatsDistributionInit(state, action) ⇒ <code>Object</code>
Inits the loading of member stats distribution.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.members..onGetStatsDistributionDone"></a>

### reducers.members~onGetStatsDistributionDone(state, action) ⇒ <code>Object</code>
Finalizes the loading of member stats distribution.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.members..onGetActiveChallengesInit"></a>

### reducers.members~onGetActiveChallengesInit(state, action) ⇒ <code>Object</code>
Inits the loading of member active challenges.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.members..onGetActiveChallengesDone"></a>

### reducers.members~onGetActiveChallengesDone(state, action) ⇒ <code>Object</code>
Finalizes the loading of member active challenges.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>Object</code> - New state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| action | <code>Object</code> | 

<a name="module_reducers.members..create"></a>

### reducers.members~create(initialState) ⇒ <code>function</code>
Creates a new Members reducer with the specified initial state.

**Kind**: inner method of [<code>reducers.members</code>](#module_reducers.members)  
**Returns**: <code>function</code> - Members reducer.  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | Optional. Initial state. |

