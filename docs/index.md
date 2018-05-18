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
<a href="actions.smp.md">actions.smp</a></dt>
<dd><p>Actions related to Topcoder statistics (at the moment, only community
 statistics).</p>
</dd>
<dt>
<a href="actions.terms.md">actions.terms</a></dt>
<dd><p>Actions related to Topcoder terms of use.</p>
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
</dl>

