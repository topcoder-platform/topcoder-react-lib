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
};

export default undefined;
