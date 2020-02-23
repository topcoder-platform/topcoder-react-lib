/**
 * Export reducers.
 */
import { redux } from 'topcoder-react-utils';

import auth, { factory as authFactory } from './auth';
import stats, { factory as statsFactory } from './stats';
import terms, { factory as termsFactory } from './terms';
import direct, { factory as directFactory } from './direct';
import groups, { factory as groupsFactory } from './groups';
import errors, { factory as errorsFactory } from './errors';
import challenge, { factory as challengeFactory } from './challenge';
import profile, { factory as profileFactory } from './profile';
import members, { factory as membersFactory } from './members';
import lookup, { factory as lookupFactory } from './lookup';
import memberTasks, { factory as memberTasksFactory } from './member-tasks';
import reviewOpportunity, { factory as reviewOpportunityFactory }
  from './reviewOpportunity';
import mySubmissionsManagement, { factory as mySubmissionsManagementFactory }
  from './my-submissions-management';
import settings, { factory as settingsFactory }
  from './settings';
import looker, { factory as lookerFactory }
  from './looker';
import memberSearch, { factory as memberSearchFactory } from './member-search';

export function factory(options) {
  return redux.resolveReducers({
    auth: authFactory(options),
    stats: statsFactory(options),
    terms: termsFactory(options),
    direct: directFactory(options),
    groups: groupsFactory(options),
    errors: errorsFactory(options),
    challenge: challengeFactory(options),
    profile: profileFactory(options),
    lookup: lookupFactory(options),
    members: membersFactory(options),
    memberTasks: memberTasksFactory(options),
    reviewOpportunity: reviewOpportunityFactory(options),
    mySubmissionsManagement: mySubmissionsManagementFactory(options),
    settings: settingsFactory(options),
    looker: lookerFactory(options),
    memberSearch: memberSearchFactory(options),
  });
}

export default ({
  auth,
  stats,
  terms,
  direct,
  groups,
  errors,
  challenge,
  profile,
  lookup,
  members,
  memberTasks,
  reviewOpportunity,
  mySubmissionsManagement,
  settings,
  looker,
  memberSearch,
});
