/**
 * @module "actions.reviewOpportunity"
 * @desc Actions for review opportunity details API.
 */

import { createActions } from 'redux-actions';

import { getReviewOpportunitiesService } from '../services/reviewOpportunities';
import { fireErrorMessage } from '../utils/errors';

/**
 * @static
 * @desc Creates an action that signals beginning of review application
 *  cancelation.
 * @return {Action}
 */
function cancelApplicationsInit() {}

/**
 * @static
 * @desc Creates an action that cancels existing applications
 * @param {Number} challengeId The ID of the challenge (not the opportunity id)
 * @param {Array} roleIds Array of roleId Numbers to cancel applications for
 * @param {String} tokenV3 Required. Topcoder auth token v3.
 * @return {Action}
 */
function cancelApplicationsDone(challengeId, roleIds, tokenV3) {
  return getReviewOpportunitiesService(tokenV3)
    .cancelApplications(challengeId, roleIds);
}

/**
 * @static
 * @desc Creates an action that signals beginning of loading the review
 *  opportunity details.
 * @return {Action}
 */
function getDetailsInit() {}

/**
 * @static
 * @desc Creates an action that gets details of a review opportunity for
 *  the specified challenge.
 * @param {Number} challengeId The ID of the challenge (not the opportunity id)
 * @param {String} tokenV3=null Optional. Topcoder auth token v3.
 * @default test
 * @return {Action}
 */
function getDetailsDone(challengeId, tokenV3) {
  return getReviewOpportunitiesService(tokenV3)
    .getDetails(challengeId)
    .catch((error) => {
      if (error.status !== 401) {
        fireErrorMessage('Error Getting Review Opportunity Details', error.content || error);
      }
      return Promise.reject(error.status);
    });
}

/**
 * @static
 * @desc Creates an action that signals beginning of review application process.
 * @return {Action}
 */
function submitAppliationInit() {}

/**
 * @static
 * @desc Creates an action that submits application for a review opportunity.
 * @param {Number} challengeId The ID of the challenge (not the opportunity id)
 * @param {Array} roleIds Array of roleId Numbers to cancel applications for
 * @param {String} tokenV3 Required. Topcoder auth token v3.
 * @return {Action}
 */
function submitApplicationsDone(challengeId, roleIds, tokenV3) {
  return getReviewOpportunitiesService(tokenV3)
    .submitApplications(challengeId, roleIds);
}

export default createActions({
  REVIEW_OPPORTUNITY: {
    CANCEL_APPLICATIONS_INIT: cancelApplicationsInit,
    CANCEL_APPLICATIONS_DONE: cancelApplicationsDone,
    GET_DETAILS_INIT: getDetailsInit,
    GET_DETAILS_DONE: getDetailsDone,
    SUBMIT_APPLICATIONS_INIT: submitAppliationInit,
    SUBMIT_APPLICATIONS_DONE: submitApplicationsDone,
  },
});
