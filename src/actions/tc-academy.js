import { redux } from 'topcoder-react-utils';
import { getService } from 'services/tc-academy';

const tcAcademyService = getService();

/**
 * @static
 * @desc Creates an action that signals beginning of user tc-academy certifications loading.
 * @return {Action}
 */
function getTcaCertificationsInit(userId) {
  return { userId };
}

/**
 * @static
 * @desc Creates an action that loads user tc-academy certifications from API v2.
 * @param {String} userId User id.
 * @return {Action}
 */
async function getTcaCertificationsDone(userId) {
  const res = await tcAcademyService.getCertifications(userId);

  return {
    userId,
    certifications: res,
  };
}

export default redux.createActions({
  TC_ACADEMY: {
    GET_TCA_CERTIFICATIONS_INIT: getTcaCertificationsInit,
    GET_TCA_CERTIFICATIONS_DONE: getTcaCertificationsDone,
  },
});
