import { getApi } from './api';

/**
 * Topcoder Academy service class
 */
class TcAcademyService {
  constructor() {
    this.private = {
      api: getApi('V5'),
    };
  }

  /**
   *
   * @param {string} userId Get all user's certifications (completed)
   * @returns
   */
  getCertifications(userId) {
    return this.private.api.get(`/learning-paths/completed-certifications/${userId}`)
      .then(res => (res.ok ? res.json() : new Error(res.statusText)));
  }
}

/**
 * Returns a new or existing service instance.
 * @return {TcAcademyService} Topcoder Academy service instance
 */
let lastInstance = null;
export function getService() {
  if (!lastInstance) {
    lastInstance = new TcAcademyService();
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
