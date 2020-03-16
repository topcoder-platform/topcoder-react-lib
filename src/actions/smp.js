/**
 * @module "actions.smp"
 * @desc Actions related to *My Submissions Management* page.
 */

import _ from 'lodash';
import { createActions } from 'redux-actions';
import { getApi } from '../services/api';
import { getService as getSubmissionService } from '../services/submissions';

/**
 * @static
 * @desc Creates an action that signals beginning of submission download.
 * @return {Action}
 */
function deleteSubmissionInit() {}

/**
 * @static
 * @desc Creates an action that deletes user's submission to a challenge.
 * @param {String} tokenV5 Topcoder v5 auth token.
 * @param {Number|String} submissionId Submission ID.
 * @return {Action}
 */
function deleteSubmissionDone(tokenV5, submissionId) {
  const submissionsService = getSubmissionService(tokenV5);
  const filters = { legacySubmissionId: submissionId };

  // from the legacy submissionId first get the GUID of the submission
  // and pass that id to the V5 api
  return submissionsService.getSubmissions(filters, {})
    .then((submissions) => {
      if (submissions.length === 0) {
        throw new Error(`Submission ${submissionId} does not exist.`);
      }
      return getApi('V5', tokenV5).delete(`/submissions/${submissions[0].id}`)
        .then(res => (res.ok ? submissionId : new Error(res.statusText)))
        .then(res => res);
    });
}

/**
 * @static
 * @todo At this moment we don't need any special JS code to download
 * submissions: we get them from legacy Topcoder Studio API, which is
 * authenticated by cookies, and can be done with a simple <a> link in
 * the component. Soon we'll migrate to use the new TC API instead, and
 * then we'll decide, whether we need operate downloads in JS, or can we
 * just remove this action.
 * @return {Action}
 */
function downloadSubmission(tokens, type, submissionId) {
  _.noop(tokens, type, submissionId);
}

export default createActions({
  SMP: {
    DELETE_SUBMISSION_DONE: deleteSubmissionDone,
    DELETE_SUBMISSION_INIT: deleteSubmissionInit,
    DOWNLOAD_SUBMISSION: downloadSubmission,
  },
});
