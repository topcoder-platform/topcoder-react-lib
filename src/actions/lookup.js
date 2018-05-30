/**
 * @module "actions.lookup"
 * @desc Actions related to lookup data.
 */

import { createActions } from 'redux-actions';
import { getService } from '../services/lookup';

/**
 * @static
 * @desc Gets approved skill tags.
 * @return {Action}
 */
function getApprovedSkills() {
  const service = getService();
  const params = {
    domain: 'SKILLS',
    status: 'APPROVED',
  };
  return service.getTags(params);
}

export default createActions({
  LOOKUP: {
    GET_APPROVED_SKILLS: getApprovedSkills,
  },
});
