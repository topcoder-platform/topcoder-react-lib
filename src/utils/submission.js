/**
 * Various submissions functions.
 */

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
