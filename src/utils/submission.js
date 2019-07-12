/**
 * Various submissions functions.
 */
/* global CONFIG */
/* eslint-disable no-param-reassign */
import _ from 'lodash';

const { AV_SCAN_SCORER_REVIEW_TYPE_ID } = CONFIG;

function round(num, decimal) {
  if (_.isNaN(num)) {
    return 0;
  }
  const p1 = 10 ** (decimal + 1);
  const p2 = 10 ** decimal;
  return Math.round(num * p1 / 10) / p2;
}

function removeDecimal(num, decimal) {
  return ((num % decimal) + decimal) % decimal;
}

function toFixed(num, decimal) {
  const result = _.toFinite(round(num, decimal).toFixed(decimal));
  const integerResult = _.toFinite(removeDecimal(result, decimal));
  if (_.isInteger(integerResult)) {
    return integerResult;
  }
  return result;
}

function getMMChallengeHandleStyle(handle, registrants) {
  const style = _.get(_.find(registrants, m => m.handle === handle), 'colorStyle', null);
  if (style) return JSON.parse(style.replace(/(\w+):\s*([^;]*)/g, '{"$1": "$2"}'));
  return {};
}

/**
 * Process each submission rank of MM challenge
 * @param submissions the array of submissions
 */
function processRanks(submissions) {
  let maxFinalScore = 0;
  submissions.sort((a, b) => {
    let pA = _.get(a, 'submissions[0]', { provisionalScore: 0 }).provisionalScore;
    let pB = _.get(b, 'submissions[0]', { provisionalScore: 0 }).provisionalScore;
    if (pA === '-') pA = 0;
    if (pB === '-') pB = 0;
    return pB - pA;
  });
  _.each(submissions, (submission, i) => {
    submissions[i].provisionalRank = i + 1;
  });

  submissions.sort((a, b) => {
    let pA = _.get(a, 'submissions[0]', { provisionalScore: 0 }).finalScore;
    let pB = _.get(b, 'submissions[0]', { provisionalScore: 0 }).finalScore;
    if (pA === '-') pA = 0;
    if (pB === '-') pB = 0;
    if (pA > 0) maxFinalScore = pA;
    if (pB > 0) maxFinalScore = pB;
    return pB - pA;
  });
  if (maxFinalScore > 0) {
    _.each(submissions, (submission, i) => {
      submissions[i].finalRank = i + 1;
    });
  }
  return { submissions, maxFinalScore };
}

/**
 * Get provisional score of submission
 * @param submission
 */
export function getProvisionalScore(submission) {
  const { submissions: subs } = submission;
  if (!subs || subs.length === 0) {
    return 0;
  }
  const { provisionalScore } = subs[0];
  if (!provisionalScore || provisionalScore < 0) {
    return 0;
  }
  return provisionalScore;
}

/**
 * Get final score of submission
 * @param submission
 */
export function getFinalScore(submission) {
  const { submissions: subs } = submission;
  if (!subs || subs.length === 0) {
    return 0;
  }
  const { finalScore } = subs[0];
  if (!finalScore || finalScore < 0) {
    return 0;
  }
  return finalScore;
}

/**
 * Process submissions of MM challenge
 * @param submissions the array of submissions
 * @param resources the challenge resources
 * @param registrants the challenge registrants
 */
export function processMMSubmissions(submissions, resources, registrants) {
  const data = {};
  const result = [];

  _.each(submissions, (submission) => {
    const { memberId } = submission;
    let memberHandle;
    const resource = _.find(resources, r => _.get(r, 'userId').toString() === memberId.toString());
    if (_.isEmpty(resource)) {
      memberHandle = memberId;
    } else {
      memberHandle = _.has(resource, 'handle') ? _.get(resource, 'handle') : memberId.toString();
    }
    if (!data[memberHandle]) {
      data[memberHandle] = [];
    }
    const validReviews = _.filter(submission.review,
      r => !_.isEmpty(r) && (r.typeId !== AV_SCAN_SCORER_REVIEW_TYPE_ID));
    validReviews.sort((a, b) => {
      const dateA = new Date(a.created);
      const dateB = new Date(b.created);
      return dateB - dateA;
    });
    let provisionalScore;
    if (validReviews.length > 0) {
      provisionalScore = _.get(validReviews, '[0].score', 0);
      if (_.isString(provisionalScore)) provisionalScore = _.toFinite(provisionalScore);
      provisionalScore = toFixed(provisionalScore, 5);
    } else {
      provisionalScore = -1;
    }

    let finalScore = _.get(submission, 'reviewSummation[0].aggregateScore', 0);
    if (_.isString(finalScore)) finalScore = _.toFinite(finalScore);
    if (finalScore > 0) {
      finalScore = toFixed(finalScore, 5);
    } else {
      finalScore = 0;
    }
    data[memberHandle].push({
      submissionId: submission.id,
      submissionTime: submission.created,
      provisionalScore,
      finalScore,
    });
  });

  _.each(data, (value, key) => {
    result.push({
      submissions: [...value.sort((a, b) => new Date(b.submissionTime)
        .getTime() - new Date(a.submissionTime).getTime())],
      member: key,
      colorStyle: getMMChallengeHandleStyle(key, registrants),
    });
  });

  const { submissions: finalSubmissions, maxFinalScore } = processRanks(result);
  finalSubmissions.sort((a, b) => {
    if (maxFinalScore === 0) {
      return a.provisionalRank - b.provisionalRank;
    }
    return a.finalRank - b.finalRank;
  });

  return finalSubmissions;
}

export default undefined;
