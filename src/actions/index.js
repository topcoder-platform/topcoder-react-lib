import authActions from './auth';
import smpActions from './smp';
import statsActions from './stats';
import termsActions from './terms';
import directActions from './direct';
import groupActions from './groups';
import errorActions from './errors';
import challengeActions from './challenge';
import profileActions from './profile';
import memberActions from './members';
import memberTaskActions from './member-tasks';
import reviewOpportunityActions from './reviewOpportunity';
import lookupActions from './lookup';

export const actions = {
  auth: authActions.auth,
  smp: smpActions.smp,
  challenge: challengeActions.challenge,
  terms: termsActions.terms,
  stats: statsActions.stats,
  direct: directActions.direct,
  groups: groupActions.groups,
  errors: errorActions.errors,
  profile: profileActions.profile,
  members: memberActions.members,
  memberTasks: memberTaskActions.memberTasks,
  reviewOpportunity: reviewOpportunityActions.reviewOpportunity,
  lookup: lookupActions.lookup,
};

export default undefined;
