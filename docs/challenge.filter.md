<a name="module_challenge.filter"></a>

## challenge.filter
Universal challenge filter. Must be used in all places where we need filter
or fetch challenges. This way we keep all related logic in the same place,
which simplifies maintenance and modifications of the code.

The state of challenge filter is a plain JS object, containing only plain
data fields. It allows to avoid any problems with its storage inside Redux
store; with its serialization into / deserialization from a string. Each
field of the state describes a single rule for filtering the challenges.
The filter allows only those challenges that match all defined rules.
Undefined, null fields are ignored.

The following fields are supported:

endDate {Number|String} - Permits only those challenges with submission
deadline before this date.

groupIds {Array} - Permits only the challenges belonging to at least one
of the groups which IDs are presented as keys in this object.

or {Object[]} - All other filter fields applied to the challenge with AND
logic, i.e. a challenge must satisfy each specified filter rule to match the
filter as whole. In some cases we want to have OR logic between filter rules,
and this array allows to achieve it: each object in this array is treated as
an additional filter (these object may have all the same fields as the root
filter state object), to be tested with OR logic.

registrationOpen {Boolean} - Permits only the challenges with open or closed
registration.

startDate {Number|String} - Permits only those challenges started after this
date.

status {Array} - Permits only the challenges with status matching one of
the keys of this object.

started {Boolean} - Matches only the challenges with start date in past.
It turns out that status ACTIVE also includes upcoming activated challenges,
thus we need this additional filter.

subtracks {Array} - Permits only the challenges belonging to at least one
of the competition subtracks presented as keys of this object.

tags {Array} - Permits only the challenges that have at least one of the
tags within their platform and technology tags (keywords).

text {String} - Free-text string which will be matched against challenge
name, its platform and technology tags. If not found anywhere, the challenge
is filtered out. Case-insensitive.

tracks {Object} - Permits only the challenges belonging to at least one of
the competition tracks presented as keys of this object.

upcoming {Boolean} - Permits only upcoming challenges.

users {Array} - Permits only the challenges where the specified (by handles)
users are participating.


* [challenge.filter](#module_challenge.filter)
    * _static_
        * [.addTrack(state, track)](#module_challenge.filter.addTrack) ⇒ <code>Object</code>
        * [.getFilterFunction(state)](#module_challenge.filter.getFilterFunction) ⇒ <code>function</code>
        * [.getReviewOpportunitiesFilterFunction(state)](#module_challenge.filter.getReviewOpportunitiesFilterFunction) ⇒ <code>function</code>
        * [.combine(filters)](#module_challenge.filter.combine) ⇒ <code>Object</code>
        * [.mapToBackend(filter)](#module_challenge.filter.mapToBackend) ⇒ <code>Object</code>
        * [.removeTrack(state, track)](#module_challenge.filter.removeTrack) ⇒ <code>Object</code>
        * [.setEndDate(state, date)](#module_challenge.filter.setEndDate) ⇒ <code>Object</code>
        * [.setReviewOpportunityType(state, reviewOpportunityType)](#module_challenge.filter.setReviewOpportunityType) ⇒ <code>Object</code>
        * [.setStartDate(state, date)](#module_challenge.filter.setStartDate) ⇒ <code>Object</code>
        * [.setSubtracks(state, subtracks)](#module_challenge.filter.setSubtracks) ⇒ <code>Object</code>
        * [.setTags(state, tags)](#module_challenge.filter.setTags) ⇒ <code>Object</code>
        * [.setText(state, text)](#module_challenge.filter.setText) ⇒ <code>Object</code>
    * _inner_
        * [~filterByEndDate()](#module_challenge.filter..filterByEndDate)
        * [~filterByReviewOpportunityType(opp, state)](#module_challenge.filter..filterByReviewOpportunityType) ⇒ <code>Boolean</code>

<a name="module_challenge.filter.addTrack"></a>

### challenge.filter.addTrack(state, track) ⇒ <code>Object</code>
Returns clone of the state with the specified competition track added.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  
**Returns**: <code>Object</code> - Resulting state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| track | <code>String</code> | 

<a name="module_challenge.filter.getFilterFunction"></a>

### challenge.filter.getFilterFunction(state) ⇒ <code>function</code>
Generates filter function for the state.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 

<a name="module_challenge.filter.getReviewOpportunitiesFilterFunction"></a>

### challenge.filter.getReviewOpportunitiesFilterFunction(state) ⇒ <code>function</code>
Generates a Review Opportunities filter function for the provided filter state.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 

<a name="module_challenge.filter.combine"></a>

### challenge.filter.combine(filters) ⇒ <code>Object</code>
Combines multiple filter state objects together. Resulting state describes
the filter, which matches only those challenges that satisfy each of the
filters passed in as arguments.

The main intended use of this function is to combine multiple frontend
challenge filters into a single one, that can be mapped into the
corresponding backend filter by mapToBackend(..) function.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  

| Param | Type | Description |
| --- | --- | --- |
| filters | <code>Object</code> | Input filter state objects to combine. |

<a name="module_challenge.filter.mapToBackend"></a>

### challenge.filter.mapToBackend(filter) ⇒ <code>Object</code>
Maps the frontend challenge filter into the corresponding backend (api) one.
As there is no 1:1 match between the frontend and backend challenge filters,
the resulting backend filter is always equal or broader than the given
frontend one; i.e. any challenge that satisfies the original frontend filter
will pass the backend one, though some of the challenges that pass the
backend filter may fail the frontend one.

It is assumed that this function will help us to load challenges from the
backend more specifically, though it does not prevent as from the need
always perform the final filtering at the frontend side.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  

| Param | Type |
| --- | --- |
| filter | <code>Object</code> | 

<a name="module_challenge.filter.removeTrack"></a>

### challenge.filter.removeTrack(state, track) ⇒ <code>Object</code>
Returns clone of the state with the specified competition track removed.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  
**Returns**: <code>Object</code> - Resulting state.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| track | <code>String</code> | 

<a name="module_challenge.filter.setEndDate"></a>

### challenge.filter.setEndDate(state, date) ⇒ <code>Object</code>
Clone the state and sets the end date.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| date | <code>String</code> | 

<a name="module_challenge.filter.setReviewOpportunityType"></a>

### challenge.filter.setReviewOpportunityType(state, reviewOpportunityType) ⇒ <code>Object</code>
Clones the state and sets the review opportunity type.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| reviewOpportunityType | <code>Array</code> | Possible values found in utils/tc REVIEW_OPPORTUNITY_TYPES |

<a name="module_challenge.filter.setStartDate"></a>

### challenge.filter.setStartDate(state, date) ⇒ <code>Object</code>
Clones the state and sets the start date.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| date | <code>String</code> | ISO date string. |

<a name="module_challenge.filter.setSubtracks"></a>

### challenge.filter.setSubtracks(state, subtracks) ⇒ <code>Object</code>
Clones the state and sets the subtracks.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| subtracks | <code>Array</code> | 

<a name="module_challenge.filter.setTags"></a>

### challenge.filter.setTags(state, tags) ⇒ <code>Object</code>
Clones the state and sets the tags.

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> |  |
| tags | <code>Array</code> | String array. |

<a name="module_challenge.filter.setText"></a>

### challenge.filter.setText(state, text) ⇒ <code>Object</code>
Clones fitler state and sets the free-text string for the filtering by
challenge name and tags. To clear the string set it to anything evaluating
to falst (empty string, null, undefined).

**Kind**: static method of [<code>challenge.filter</code>](#module_challenge.filter)  
**Returns**: <code>Object</code> - Resulting string.  

| Param | Type |
| --- | --- |
| state | <code>Object</code> | 
| text | <code>String</code> | 

<a name="module_challenge.filter..filterByEndDate"></a>

### challenge.filter~filterByEndDate()
Here are many similiar filerBy..(challenge, state) functions. Each of them
checks whether the given challenge fulfills the corresponding filtering rule
from the filter state object, and returns true or false depending on it.

**Kind**: inner method of [<code>challenge.filter</code>](#module_challenge.filter)  
<a name="module_challenge.filter..filterByReviewOpportunityType"></a>

### challenge.filter~filterByReviewOpportunityType(opp, state) ⇒ <code>Boolean</code>
Filter function for Review Opportunity Type, will be used internally in filter.js

**Kind**: inner method of [<code>challenge.filter</code>](#module_challenge.filter)  
**Returns**: <code>Boolean</code> - True if opp satifies the filter  

| Param | Type | Description |
| --- | --- | --- |
| opp | <code>Object</code> | Review Opportunity object |
| state | <code>Object</code> | Filter state |

