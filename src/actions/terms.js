/**
 * @module "actions.terms"
 * @desc Actions related to Topcoder terms of use.
 */

import _ from 'lodash';
import { createActions } from 'redux-actions';
import { config } from 'topcoder-react-utils';
import { getService } from '../services/terms';

/**
 * @static
 * @desc Creates an action that signals beginning of fetching terms data.
 * @todo Figure out the exact meaning of the argument.
 * @param {String} arg An argument. The exact meaning to be figured out.
 * @return {Action}
 */
function getTermsInit(arg) {
  return arg;
}

/**
 * @static
 * @desc Creates an action that fetches terms of the specified entity.
 * @param {Object}  entity       entity object
 * @param {String}  [entity.type]  entity type: `challenge` or `community`
 * @param {String}  [entity.id]    entity id
 * @param {Object}  tokens       object with tokenV2 and tokenV3 properties
 * @param {Boolean} mockAgreed   if true, then all terms will be mocked as
 *  agreed this only makes effect if MOCK_TERMS_SERVICE is `true` and the only
 *  purpose of this param is testing terms
 * @return {Action}
 */
function getTermsDone(entity, tokens, mockAgreed) {
  const service = getService(tokens.tokenV3);
  let termsPromise;

  // if mockAgreed=true passed, then we create an array of 10 true which we pass to the
  // terms service methods.
  // when terms service is mocked by setting MOCK_TERMS_SERVICE=true
  // it will make all terms to have agreed status (actually only first 10 will be agreed,
  // but we will hardly have even more then 3 terms per entity)
  const mockAgreedArray = mockAgreed ? Array(10 + 1).join('1').split('').map(() => true) : [];

  switch (entity.type) {
    case 'challenge': {
      termsPromise = service.getChallengeTerms(entity.terms, mockAgreedArray);
      break;
    }
    case 'community': {
      termsPromise = service.getCommunityTerms(entity.id, tokens.tokenV3, mockAgreedArray);
      break;
    }
    case 'reviewOpportunity': {
      termsPromise = service.getReviewOpportunityTerms(entity.reviewOpportunityTerms);
      break;
    }
    default:
      throw new Error(`Entity type '${entity.type}' is not supported by getTermsDone.`);
  }

  return termsPromise.then(res => ({ entity, terms: res }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of terms status check
 *  operation.
 * @return {Action}
 */
function checkStatusInit() {}

/**
 * @static
 * @desc Creates an action thatwill check if all terms of specified entity have been agreed,
 *
 * @todo As in some reason backend does not saves immediately that DocuSign term has been agreed
 * In case not all terms were agreed we try again after some delay.
 * Maximum quantity attempts and delay between attempts are configured in
 * MAX_ATTEMPTS and TIME_OUT
 *
 * @todo: Looks like the bug described above was caused by server caching responses
 * at least for getTermDetails which is used by getCommunityTerms.
 * To fix it I've added nocache random value param in the terms service
 * for getTermDetails and it looks like works so we get results immediately.
 * This still have to be tested for challenges as they use another endpoint
 * in method getChallengeTerms.
 * Also terms which use third part service DocuSign has to be also tested prior
 * to removing multiple checks.
 * In case their agreed status is updated immediately, this code
 * has to simplified and don't make several attempts, only one.
 *
 * @param {Object} entity       entity object
 * @param {String} [entity.type]  entity type `challenge` or `community`.
 * @param {String} [entity.id]    entity id
 * @param {Object} tokens       object with tokenV2 and tokenV3 properties
 *
 * @return {Acion}
 */
function checkStatusDone(entity, tokens) {
  // timeout between checking status attempts
  const TIME_OUT = 5000;

  // maximum attempts to check status
  const MAX_ATTEMPTS = 5;

  // we set this flag for getTermsDone when MOCK_TERMS_SERVICE is true
  // so that checkStatusDone resolves to all terms agreed when mocking
  const mockAgreed = config.MOCK_TERMS_SERVICE;

  /*
   * Promisified setTimeout
   * @param  {Number} timeout timeout in milliseconds
   * @return {Promise}         resolves after timeout
   */
  const delay = timeout => new Promise(((resolve) => {
    setTimeout(resolve, timeout);
  }));

  /*
   * Makes attempt to check status
   * @param  {Number} maxAttempts maximum number of attempts to perform
   * @return {Promise}            resolves to the list of term objects
   */
  const checkStatus = maxAttempts => getTermsDone(entity, tokens, mockAgreed).then((res) => {
    const allAgreed = _.every(res, 'agreed');

    // if not all terms are agreed and we still have some attempts to try
    if (!allAgreed && maxAttempts > 1) {
      return delay(TIME_OUT).then(() => checkStatus(maxAttempts - 1));
    }

    return res;
  });

  return checkStatus(MAX_ATTEMPTS);
}

/**
 * @static
 * @desc Creates an action that marks that we are about to fetch details of the
 *  specified term. If any details for another term are currently being fetched,
 * they will be silently discarded.
 * @param {Number|String} termId
 * @return {Action}
 */
function getTermDetailsInit(termId) {
  return _.toString(termId);
}

/**
 * @static
 * @desc Creates an action that fetches details of the specified term.
 * @param {Number|String} termId
 * @param {String} tokenV3
 * @return {Action}
 */
function getTermDetailsDone(termId, tokenV3) {
  const service = getService(tokenV3);
  return service.getTermDetails(termId).then(details => ({ termId, details }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of getting a DocuSign URL.
 * @param  {Number|String} templateId id of document template to sign
 * @return {Action}
 */
function getDocuSignUrlInit(templateId) {
  return _.toString(templateId);
}

/**
 * @static
 * @desc Creates an action that generates the url of DoduSign term
 * @param  {Number|String} templateId id of document template to sign
 * @param  {String} returnUrl  callback url after finishing singing
 * @param  {String} tokenV3    auth token
 * @return {Action}
 */
function getDocuSignUrlDone(templateId, returnUrl, tokenV3) {
  const service = getService(tokenV3);
  return service.getDocuSignUrl(templateId, returnUrl)
    .then(resp => ({ templateId, docuSignUrl: resp.recipientViewUrl }));
}

/**
 * @static
 * @desc Creates an action that signals beginning of terms agreement operation.
 * @param  {Number|String} termId id of term
 * @return {Action}
 */
function agreeTermInit(termId) {
  return _.toString(termId);
}

/**
 * @static
 * @desc Creates an action that agrees to a term.
 * @param  {Number|String} termId id of term
 * @param  {String} tokenV3    auth token
 * @return {Action}
 */
function agreeTermDone(termId, tokenV3) {
  const service = getService(tokenV3);
  return service.agreeTerm(termId).then(resp => ({ termId, success: resp.success }));
}

export default createActions({
  TERMS: {
    GET_TERMS_INIT: getTermsInit,
    GET_TERMS_DONE: getTermsDone,
    GET_TERM_DETAILS_INIT: getTermDetailsInit,
    GET_TERM_DETAILS_DONE: getTermDetailsDone,
    GET_DOCU_SIGN_URL_INIT: getDocuSignUrlInit,
    GET_DOCU_SIGN_URL_DONE: getDocuSignUrlDone,
    AGREE_TERM_INIT: agreeTermInit,
    AGREE_TERM_DONE: agreeTermDone,
    CHECK_STATUS_INIT: checkStatusInit,
    CHECK_STATUS_DONE: checkStatusDone,
  },
});
