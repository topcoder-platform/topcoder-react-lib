## Modules

<dl>
<dt>
<a href="actions.auth.md">actions.auth</a></dt>
<dd><p>Actions related to Topcoder authentication system.</p>
</dd>
<dt>
<a href="actions.challenge.md">actions.challenge</a></dt>
<dd><p>Actions related to Topcoder challenges APIs.</p>
</dd>
<dt>
<a href="actions.direct.md">actions.direct</a></dt>
<dd><p>Actions related to Direct API: access to projects, billing accounts,
copilot operations, and other similar stuff is handled by them.</p>
</dd>
<dt>
<a href="actions.errors.md">actions.errors</a></dt>
<dd><p>Actions related to the standard application-wide error handling and
messaging.</p>
<p>Pending to be documented. You are not supposed to use them directly anyway.</p>
</dd>
<dt>
<a href="actions.groups.md">actions.groups</a></dt>
<dd><p>Actions related to user groups.</p>
</dd>
<dt>
<a href="actions.lookup.md">actions.lookup</a></dt>
<dd><p>Actions related to lookup data.</p>
</dd>
<dt>
<a href="actions.member-tasks.md">actions.member-tasks</a></dt>
<dd><p>Actions for management of member tasks and payments. Under the hood it
is very similar to the challenge listing management, as these tasks are in
fact just challenges of a special kind); however, due to differences in the
use cases, we can implement task management more efficient with dedicated
actions and reducer; thus, this module.</p>
</dd>
<dt>
<a href="actions.members.md">actions.members</a></dt>
<dd><p>Actions related to members data.</p>
</dd>
<dt>
<a href="actions.profile.md">actions.profile</a></dt>
<dd><p>Actions for interactions with profile details API.</p>
</dd>
<dt>
<a href="actions.reviewOpportunity.md">actions.reviewOpportunity</a></dt>
<dd><p>Actions for review opportunity details API.</p>
</dd>
<dt>
<a href="actions.smp.md">actions.smp</a></dt>
<dd><p>Actions related to <em>My Submissions Management</em> page.</p>
</dd>
<dt>
<a href="actions.stats.md">actions.stats</a></dt>
<dd><p>Actions related to Topcoder statistics (at the moment, only community
 statistics).</p>
</dd>
<dt>
<a href="actions.terms.md">actions.terms</a></dt>
<dd><p>Actions related to Topcoder terms of use.</p>
</dd>
<dt>
<a href="reducers.auth.md">reducers.auth</a></dt>
<dd><p>Reducer for <a href="#module_actions.auth">actions.auth</a> actions.</p>
<p>State segment managed by this reducer has the following structure:</p>
</dd>
<dt>
<a href="reducers.challenge.md">reducers.challenge</a></dt>
<dd><p>Reducer for <a href="#module_actions.challenge">actions.challenge</a> actions.</p>
<p>State segment managed by this reducer has the following strcuture:</p>
</dd>
<dt>
<a href="reducers.direct.md">reducers.direct</a></dt>
<dd><p>Reducer for handling the results of Direct-related actions.</p>
</dd>
<dt>
<a href="reducers.errors.md">reducers.errors</a></dt>
<dd><p>Redux Reducer for application-wide error handling.</p>
<p>Description:
  Implements state reducers for application-wide error handling.</p>
</dd>
<dt>
<a href="reducers.groups.md">reducers.groups</a></dt>
<dd><p>This reducer handles information related to user-groups.</p>
<p>Corresponding segment of the Redux state is designed to have the following
fields:</p>
<p>groups {Object} - Holds loaded information about user groups. Keys of this
object are group IDs, and the values are group data object. To keep the state
flat, and our code efficient; for any group that has sub-groups, subGroups
field is removed, while subGroupsIds {String[]} field is added, and each
sub group data object is added to the groups object.</p>
<p>loading {Object} - Holds IDs of the groups being loaded. Removing ID from
this object will result in silent discard of the data loaded by the
corresponding GROUPS/GET_DONE action; though such functionality does
not look really necessary at the moment, thus we do not provide an
action to really cancel group loading.</p>
</dd>
<dt>
<a href="reducers.lookup.md">reducers.lookup</a></dt>
<dd><p>Reducer for <a href="#module_actions.lookup">actions.lookup</a> actions.</p>
<p>State segment managed by this reducer has the following structure:</p>
</dd>
<dt>
<a href="reduces.member-tasks.md">reduces.member-tasks</a></dt>
<dd><p>Member tasks reducer.</p>
</dd>
<dt>
<a href="reducers.members.md">reducers.members</a></dt>
<dd><p>Reducer for the Redux store segment that holds members data.</p>
</dd>
<dt>
<a href="reducers.my-submissions-management.md">reducers.my-submissions-management</a></dt>
<dd><p>This reducer and corresponding actions control the logic for
 submission management.</p>
</dd>
<dt>
<a href="reducers.profile.md">reducers.profile</a></dt>
<dd><p>Reducer for Profile API data</p>
</dd>
<dt>
<a href="reducers.reviewOpportunity.md">reducers.reviewOpportunity</a></dt>
<dd><p>Reducer for state.reviewOpportunity</p>
</dd>
<dt>
<a href="reducers.stats.md">reducers.stats</a></dt>
<dd><p>Reducer for state.stats. That part of Redux state is intended to keep
 user- and group-related statistics to render in the frontend.</p>
</dd>
<dt>
<a href="reducers.terms.md">reducers.terms</a></dt>
<dd><p>Reducer for state.terms.</p>
</dd>
<dt>
<a href="services.api.md">services.api</a></dt>
<dd><p>This module provides a service for conventient access to Topcoder APIs.</p>
</dd>
<dt>
<a href="services.billing.md">services.billing</a></dt>
<dd><p>Access to Topcoder billing accounts.</p>
</dd>
<dt>
<a href="services.challenges.md">services.challenges</a></dt>
<dd><p>This module provides a service for convenient manipulation with
 Topcoder challenges via TC API.</p>
</dd>
<dt>
<a href="services.communities.md">services.communities</a></dt>
<dd><p>Communities service.</p>
</dd>
<dt>
<a href="services.direct.md">services.direct</a></dt>
<dd><p>The Direct service takes care about communication with Direct APIs:
 projects, billing accounts, copilots, all these stuff should be added here,
 at least for now.</p>
</dd>
<dt>
<a href="services.groups.md">services.groups</a></dt>
<dd><p>Service for communication with group-related part of Topcoder API.</p>
<p>NOTE: Through this file, and in related contexts, by loading a user group,
or user groups data, we refer to loading the information about descendant
user groups; i.e. given some user group(s) we speak about loading the sub-
three of related child groups.</p>
<p>By group maps we refer to the object having group IDs as the keys, and
group data objects as the values. Any group object included into a group map
has its &quot;subGroups&quot; array (if present) replaced by &quot;subGroupIds&quot;, that lists
only the IDs of immediate child groups; actual child group objects from
&quot;subGroups&quot; are recursively added to the top level of the group map.
Also each group in the group map is timestamped to keep caching of
the loaded data.</p>
</dd>
<dt>
<a href="services.lookup.md">services.lookup</a></dt>
<dd><p>This module provides a service to get lookup data from Topcoder
via API V3.</p>
</dd>
<dt>
<a href="services.members.md">services.members</a></dt>
<dd><p>This module provides a service for searching for Topcoder
members via API V3.</p>
</dd>
<dt>
<a href="services.reviewOpportunities.md">services.reviewOpportunities</a></dt>
<dd><p>This module provides a service for retrieving Review Opportunities and
submitting applications.</p>
</dd>
<dt>
<a href="services.terms.md">services.terms</a></dt>
<dd><p>This module provides a service for convenient manipulation with
Topcoder challenges&#39; terms via TC API.</p>
</dd>
<dt>
<a href="services.user-settings.md">services.user-settings</a></dt>
<dd><p>User Settings service. Corresponding part of the backend is
implemented as a separate Heroku App, which is set up only for prod.
Currently, we use it to save user-defined filters in the challenge search.</p>
</dd>
<dt>
<a href="services.user.md">services.user</a></dt>
<dd><p>The User service provides functionality related to Topcoder user
 accounts.</p>
</dd>
<dt>
<a href="services.submissions.md">services.submissions</a></dt>
<dd><p>The Submissions service provides functionality related to Topcoder submissions</p>
</dd>
<dt>
<a href="challenge.filter.md">challenge.filter</a></dt>
<dd><p>Universal challenge filter. Must be used in all places where we need filter
or fetch challenges. This way we keep all related logic in the same place,
which simplifies maintenance and modifications of the code.</p>
<p>The state of challenge filter is a plain JS object, containing only plain
data fields. It allows to avoid any problems with its storage inside Redux
store; with its serialization into / deserialization from a string. Each
field of the state describes a single rule for filtering the challenges.
The filter allows only those challenges that match all defined rules.
Undefined, null fields are ignored.</p>
<p>The following fields are supported:</p>
<p>endDate {Number|String} - Permits only those challenges with submission
deadline before this date.</p>
<p>groupIds {Array} - Permits only the challenges belonging to at least one
of the groups which IDs are presented as keys in this object.</p>
<p>or {Object[]} - All other filter fields applied to the challenge with AND
logic, i.e. a challenge must satisfy each specified filter rule to match the
filter as whole. In some cases we want to have OR logic between filter rules,
and this array allows to achieve it: each object in this array is treated as
an additional filter (these object may have all the same fields as the root
filter state object), to be tested with OR logic.</p>
<p>registrationOpen {Boolean} - Permits only the challenges with open or closed
registration.</p>
<p>startDate {Number|String} - Permits only those challenges started after this
date.</p>
<p>status {Array} - Permits only the challenges with status matching one of
the keys of this object.</p>
<p>started {Boolean} - Matches only the challenges with start date in past.
It turns out that status ACTIVE also includes upcoming activated challenges,
thus we need this additional filter.</p>
<p>subtracks {Array} - Permits only the challenges belonging to at least one
of the competition subtracks presented as keys of this object.</p>
<p>tags {Array} - Permits only the challenges that have at least one of the
tags within their platform and technology tags (keywords).</p>
<p>text {String} - Free-text string which will be matched against challenge
name, its platform and technology tags. If not found anywhere, the challenge
is filtered out. Case-insensitive.</p>
<p>tracks {Object} - Permits only the challenges belonging to at least one of
the competition tracks presented as keys of this object.</p>
<p>upcoming {Boolean} - Permits only upcoming challenges.</p>
<p>users {Array} - Permits only the challenges where the specified (by handles)
users are participating.</p>
</dd>
<dt>
<a href="errors.md">errors</a></dt>
<dd><p>Utility functions for the standard error handling.</p>
</dd>
<dt>
<a href="logger.md">logger</a></dt>
<dd><p>Isomorphic logger.</p>
<p>At the server-side it outputs log messages to the console, and also sends
them to the <a href="https://logentries.com">https://logentries.com</a> service (only if LOG_ENTRIES_TOKEN is
set).</p>
<p>At the front-end side it outputs log messages to the console (only when
development build of the frontend is used), and sends them to the
<a href="https://logentries.com">https://logentries.com</a> service (both dev and prod build of the frontend
send messages to the service, proxying them through the App&#39;s server;
the proxy will forward them to the service only if LOG_ENTRIES_TOKEN is set).</p>
<p>In all case, interface of the logger matches that of the standard JS console.</p>
</dd>
<dt>
<a href="mock.md">mock</a></dt>
<dd><p>Collection of functions useful in unit tests.</p>
</dd>
<dt>
<a href="tc.md">tc</a></dt>
<dd><p>Collection of small Topcoder-related functions.</p>
</dd>
<dt>
<a href="time.md">time</a></dt>
<dd><p>Utility functions for time/date related stuff</p>
</dd>
</dl>

