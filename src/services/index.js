/**
 * Export services.
 */
import * as api from './api';
import * as billing from './billing';
import * as challenge from './challenges';
import * as direct from './direct';
import * as groups from './groups';
import * as members from './members';
import * as terms from './terms';
import * as communities from './communities';
import * as reviewOpportunities from './reviewOpportunities';
import * as userSetting from './user-settings';
import * as user from './user';
import * as lookup from './lookup';
import * as userTraits from './user-traits';
import * as submissions from './submissions';
import * as memberSearch from './member-search';
import * as notifications from './notifications';

export const services = {
  api,
  billing,
  terms,
  communities,
  challenge,
  direct,
  groups,
  members,
  user,
  userSetting,
  reviewOpportunities,
  lookup,
  userTraits,
  submissions,
  memberSearch,
  notifications,
};

export default undefined;
