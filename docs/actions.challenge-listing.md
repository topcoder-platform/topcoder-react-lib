<a name="module_actions.challenge-listing"></a>

## actions.challenge-listing
Actions related to Topcoder challenge-listing APIs.


* [actions.challenge-listing](#module_actions.challenge-listing)
    * [.dropChallenges(bucket)](#module_actions.challenge-listing.dropChallenges) ⇒ <code>Action</code>
    * [.getMoreChallenges(bucket)](#module_actions.challenge-listing.getMoreChallenges) ⇒ <code>Action</code>
    * [.getAllActiveChallengesInit(uuid)](#module_actions.challenge-listing.getAllActiveChallengesInit) ⇒ <code>Action</code>
    * [.getAllActiveChallengesDone(uuid, tokenV3)](#module_actions.challenge-listing.getAllActiveChallengesDone) ⇒ <code>Action</code>
    * [.getActiveChallengesInit(uuid, page, frontFilter, sort, bucket)](#module_actions.challenge-listing.getActiveChallengesInit) ⇒ <code>Action</code>
    * [.getActiveChallengesDone(
  uuid, page, backendFilter, tokenV3, frontFilter, sort, bucket,
)](#module_actions.challenge-listing.getActiveChallengesDone) ⇒ <code>Action</code>
    * [.getRestActiveChallengesInit(uuid)](#module_actions.challenge-listing.getRestActiveChallengesInit) ⇒ <code>Action</code>
    * [.getRestActiveChallengesDone(
  uuid, tokenV3, backendFilter, frontFilter, sort, bucket,
)](#module_actions.challenge-listing.getRestActiveChallengesDone) ⇒ <code>Action</code>
    * [.getChallengeSubtracksInit()](#module_actions.challenge-listing.getChallengeSubtrackInit) ⇒ <code>Action</code>
    * [.getChallengeSubtracksDone()](#module_actions.challenge-listing.getChallengeSubtracksDone) ⇒ <code>Action</code>
    * [.getChallengeTagsInit()](#module_actions.challenge-listing.getChallengeTagsInit) ⇒ <code>Action</code>
    * [.getChallengeTagsDone()](#module_actions.challenge-listing.getChallengeTagsDone) ⇒ <code>Action</code>
    * [.getPastChallengesInit(uuid, page, frontFilter, sort)](#module_actions.challenge-listing.getPastChallengesInit) ⇒ <code>Action</code>
    * [.getPastChallengesDone(uuid, page, filter, tokenV3, frontFilter, sort)](#module_actions.challenge-listing.getPastChallengesDone) ⇒ <code>Action</code>
    * [.getReviewOpportunitiesInit(uuid, page, sort)](#module_actions.challenge-listing.getReviewOpportunitiesInit) ⇒ <code>Action</code>
    * [.getReviewOpportunitiesDone(uuid, page, tokenV3, sort, frontFilter)](#module_actions.challenge-listing.getReviewOpportunitiesDone) ⇒ <code>Action</code>
    * [.getSrmsInit(uuid)](#module_actions.challenge-listing.getSrmsInit) ⇒ <code>Action</code>
    * [.getSrmsDone(uuid, handle, params, tokenV3)](#module_actions.challenge-listing.getSrmsDone) ⇒ <code>Action</code>
    * [.expandTag(id)](#module_actions.challenge-listing.expandTag) ⇒ <code>Action</code>
    * [.selectCommunity()](#module_actions.challenge-listing.selectCommunity) ⇒ <code>Action</code>
    * [.setFilter()](#module_actions.challenge-listing.setFilter) ⇒ <code>Action</code>
    * [.setDatepickerStatus(status)](#module_actions.challenge-listing.setDatepickerStatus) ⇒ <code>Action</code>
    * [.setSort(bucket, sort)](#module_actions.challenge-listing.setSort) ⇒ <code>Action</code>


<a name="module_actions.challenge-listing.dropChallenges"></a>
### actions.challenge-listing.dropChallenges(bucket) ⇒ <code>Action</code>
Creates an action that drops from Redux store all challenges-list related loaded.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| bucket | <code>String</code> | Bucket name |


<a name="module_actions.challenge-listing.getMoreChallenges"></a>
### actions.challenge-listing.getMoreChallenges(bucket) ⇒ <code>Action</code>
Creates an action that get more challenges of bucket.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| bucket | <code>String</code> | Bucket name |


<a name="module_actions.challenge-listing.getAllActiveChallengesInit"></a>
### actions.challenge-listing.getAllActiveChallengesInit(uuid) ⇒ <code>Action</code>
Creates an action that signals beginning of all active challenges loading.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |


<a name="module_actions.challenge-listing.getAllActiveChallengesInit"></a>
### actions.challenge-listing.getAllActiveChallengesInit(uuid, tokenV3) ⇒ <code>Action</code>
Creates an action that loads all active challenges.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |
| tokenV3 | <code>String</code> | Topcoder v3 auth token. |

<a name="module_actions.challenge-listing.getActiveChallengesInit"></a>
### actions.challenge-listing.getActiveChallengesInit(uuid, page, frontFilter, sort, bucket) ⇒ <code>Action</code>
Creates an action that signals beginning of active challenges of bucket loading.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |
| page | <code>Number</code> | Page number of fetch data |
| frontFilter | <code>Object</code> | Filter Object from Client |
| sort | <code>String</code> | Sort name |
| bucket | <code>String</code> | Bucket name |


<a name="module_actions.challenge-listing.getActiveChallengesDone"></a>
### actions.challenge-listing.getActiveChallengesDone(
  uuid, page, backendFilter, tokenV3, frontFilter, sort, bucket,
) ⇒ <code>Action</code>
Creates an action that loads active challenges of bucket.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |
| page | <code>Number</code> | Page number of fetch data |
| backendFilter | <code>Object</code> | Filter Object from Backend |
| tokenV3 | <code>String</code> | Topcoder v3 auth token |
| frontFilter | <code>Object</code> | Filter Object from Client |
| sort | <code>String</code> | Sort name |
| bucket | <code>String</code> | Bucket name |


<a name="module_actions.challenge-listing.getRestActiveChallengesInit"></a>
### actions.challenge-listing.getRestActiveChallengesInit(uuid) ⇒ <code>Action</code>
Creates an action that signals beginning of rest active challenges of bucket loading.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |


<a name="module_actions.challenge-listing.getRestActiveChallengesDone"></a>
### actions.challenge-listing.getRestActiveChallengesDone(
  uuid, tokenV3, backendFilter, frontFilter, sort, bucket,
) ⇒ <code>Action</code>
Creates an action that loads rest active challenges of bucket.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |
| tokenV3 | <code>String</code> | Topcoder v3 auth token |
| backendFilter | <code>Object</code> | Filter Object from Backend |
| frontFilter | <code>Object</code> | Filter Object from Client |
| sort | <code>String</code> | Sort name |
| bucket | <code>String</code> | Bucket name |


<a name="module_actions.challenge-listing.getChallengeSubtracksInit"></a>
### actions.challenge-listing.getChallengeSubtracksInit() ⇒ <code>Action</code>
Creates an action that signals beginning of challenge substrcks loading.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

<a name="module_actions.challenge-listing.getChallengeSubtracksDone"></a>
### actions.challenge-listing.getChallengeSubtracksDone()⇒ <code>Action</code>
Creates an action that loads challenge substrcks.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

<a name="module_actions.challenge-listing.getChallengeTagsInit"></a>
### actions.challenge-listing.getChallengeTagsInit() ⇒ <code>Action</code>
Creates an action that signals beginning of challenge tags loading.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

<a name="module_actions.challenge-listing.getChallengeTagsDone"></a>
### actions.challenge-listing.getChallengeTagsDone()⇒ <code>Action</code>
Creates an action that loads challenge tags.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

<a name="module_actions.challenge-listing.getPastChallengesInit"></a>
### actions.challenge-listing.getPastChallengesInit(uuid, page, frontFilter, sort) ⇒ <code>Action</code>
Creates an action that signals beginning of past challenges loading.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |
| page | <code>Number</code> | Page number of fetch data |
| frontFilter | <code>Object</code> | Filter Object from Client |
| sort | <code>String</code> | Sort name |


<a name="module_actions.challenge-listing.getPastChallengesDone"></a>
### actions.challenge-listing.getPastChallengesDone(uuid, page, filter, tokenV3, frontFilter, sort) ⇒ <code>Action</code>
Creates an action that loads past challenges.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |
| page | <code>Number</code> | Page number of fetch data |
| filter | <code>Object</code> | Filter Object from Backend |
| tokenV3 | <code>String</code> | Topcoder v3 auth token |
| frontFilter | <code>Object</code> | Filter Object from Client |
| sort | <code>String</code> | Sort name |


<a name="module_actions.challenge-listing.getReviewOpportunitiesInit"></a>
### actions.challenge-listing.getReviewOpportunitiesInit(uuid, page, sort) ⇒ <code>Action</code>
Creates an action that signals beginning of review opportunities loading.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |
| page | <code>Number</code> | Page number of fetch data |
| sort | <code>String</code> | Sort name |


<a name="module_actions.challenge-listing.getReviewOpportunitiesDone"></a>
### actions.challenge-listing.getReviewOpportunitiesDone(uuid, page, tokenV3, sort, frontFilter) ⇒ <code>Action</code>
Creates an action that loads review oportunites.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |
| page | <code>Number</code> | Page number of fetch data |
| tokenV3 | <code>String</code> | Topcoder v3 auth token |
| sort | <code>String</code> | Sort name |
| frontFilter | <code>Object</code> | Filter Object from Client |



<a name="module_actions.challenge-listing.getSrmsInit"></a>
### actions.challenge-listing.getSrmsInit(uuid) ⇒ <code>Action</code>
Creates an action that signals beginning of SRMs loading.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |

<a name="module_actions.challenge-listing.getSrmsDone"></a>
### actions.challenge-listing.getSrmsDone(uuid, handle, params, tokenV3) ⇒ <code>Action</code>
Creates an action that SRMs.
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| uuid | <code>String</code> | UUID of the operation (the same should be passed into  the corresponding |
| handle | <code>String</code> | Topcoder member handle |
| params | <code>Object</code> | params of fetch data |
| tokenV3 | <code>String</code> | Topcoder v3 auth token |


<a name="module_actions.challenge-listing.expandTag"></a>
### actions.challenge-listing.expandTag(id) ⇒ <code>Action</code>
Creates an action that set tag id
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | Id of tag |


<a name="module_actions.challenge-listing.selectCommunity"></a>
### actions.challenge-listing.selectCommunity() ⇒ <code>Action</code>
Creates an action that pass community id
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

<a name="module_actions.challenge-listing.setFilter"></a>
### actions.challenge-listing.setFilter() ⇒ <code>Action</code>
Creates an action that pass filter value
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

<a name="module_actions.challenge-listing.setDatepickerStatus"></a>
### actions.challenge-listing.setDatepickerStatus(status) ⇒ <code>Action</code>
Creates an action that set Datepicker status
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing) 

| Param | Type | Description |
| --- | --- | --- |
| status | <code>Boolean</code> | Status datapicker |


<a name="module_actions.challenge-listing.setSort"></a>
### actions.challenge-listing.setSort(bucket, sort) ⇒ <code>Action</code>
Creates an action that set sort of bucket
**Kind**: static method of [<code>actions.challenge-listing</code>](#module_actions.challenge-listing)

| Param | Type | Description |
| --- | --- | --- |
| bucket | <code>String</code> | Bucket name |
| sort | <code>String</code> | Sort name |
