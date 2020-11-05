/**
 * @module "services.notifications"
 * @desc  This module provides a service for searching for Topcoder
 * notifications.
 */

import { getApi } from './api';

/**
 * Service class for Notifications.
 */
class NotificationService {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v5.
   */
  constructor(tokenV3) {
    this.private = {
      apiV5: getApi('V5', tokenV3),
      tokenV3,
    };
  }

  /**
   * Gets member's notification information.
   * @return {Promise} Resolves to the notification information object.
   */
  async getNotifications() {
    const apiV5 = await this.private.apiV5;
    return apiV5.get('/notifications/?platform=community&limit=20')
      .then(res => (res.ok ? res.json() : new Error(res.statusText)));
  }

  /**
   * Marks given notification as read.
   * @return {Promise} Resolves to the notification information object.
   */
  async markNotificationAsRead(item) {
    const apiV5 = await this.private.apiV5;
    return apiV5.put(`/notifications/${item}/read`)
      .then(res => (res.ok ? null : Promise.reject(new Error(res.statusText))));
  }

  /**
   * Marks all notification as read.
   * @return {Promise} Resolves to the notification information object.
   */
  async markAllNotificationAsRead() {
    const apiV5 = await this.private.apiV5;
    return apiV5.put('/notifications/read')
      .then(res => (res.ok ? null : Promise.reject(new Error(res.statusText))));
  }

  /**
   * Marks all notification as seen.
   * @return {Promise} Resolves to the notification information object.
   */
  async markAllNotificationAsSeen(items) {
    const apiV5 = await this.private.apiV5;
    return apiV5.put(`/notifications/${items}/seen`)
      .then(res => (res.ok ? null : Promise.reject(new Error(res.statusText))));
  }

  /**
   * Dismiss challenge notifications.
   * @return {Promise} Resolves to the notification information object.
   */
  async dismissChallengeNotifications(challengeID) {
    const apiV5 = await this.private.apiV5;
    return apiV5.put(`/notifications/${challengeID}/dismiss`)
      .then(res => (res.ok ? null : Promise.reject(new Error(res.statusText))));
  }
}

let lastInstance = null;
/**
 * Returns a new or existing notifications service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {NotificationService} Notification service object
 */
export function getService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new NotificationService(tokenV3);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
