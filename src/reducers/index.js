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
import basicInfo, { factory as basicInfoFactory } from './basicInfo';
import education, { factory as educationFactory } from './education';
import language, { factory as languageFactory } from './language';
import members, { factory as membersFactory } from './members';
import lookup, { factory as lookupFactory } from './lookup';
import memberTasks, { factory as memberTasksFactory } from './member-tasks';
import reviewOpportunity, { factory as reviewOpportunityFactory }
  from './reviewOpportunity';
import mySubmissionsManagement, { factory as mySubmissionsManagementFactory }
  from './my-submissions-management';


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
    basicInfo: basicInfoFactory(options),
    language: languageFactory(options),
    education: educationFactory(options),
    lookup: lookupFactory(options),
    members: membersFactory(options),
    memberTasks: memberTasksFactory(options),
    reviewOpportunity: reviewOpportunityFactory(options),
    mySubmissionsManagement: mySubmissionsManagementFactory(options),
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
  basicInfo,
  language,
  education,
  lookup,
  members,
  memberTasks,
  reviewOpportunity,
  mySubmissionsManagement,
});
