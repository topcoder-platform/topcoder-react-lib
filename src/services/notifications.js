/**
 * @module "services.notifications"
 * @desc  This module provides a service for searching for Topcoder
 * notifications.
 */

const eventTypes = {
  PROJECT: {
    ACTIVE: 'connect.notification.project.active',
    COMPLETED: 'connect.notification.project.completed',
  },
};

const now = new Date();
const daysAgo = d => (new Date()).setHours(now.getDay() - d);
const minutesAgo = m => (new Date()).setHours(now.getMinutes() - m);
const hoursAgo = h => (new Date()).setHours(now.getHours() - h);


/**
 * Service class.
 */
class NotificationService {
  MockNotifications = [
    {
      id: 1,
      sourceId: 111111,
      sourceName: 'Northumbrian Water (NWL) - Customer Engagement Gamification Mobile App Design Concepts Challenge ',
      eventType: eventTypes.PROJECT.ACTIVE,
      date: minutesAgo(35),
      isRead: false,
      isSeen: false,
      contents: 'Specification is modified',
      version: 1,
    },
    {
      id: 2,
      sourceId: 222222,
      sourceName: 'Eniatus Bank Internal Product Dashboard Design Challenge',
      eventType: eventTypes.PROJECT.ACTIVE,
      date: minutesAgo(40),
      isRead: false,
      isSeen: true,
      contents: 'Checkpoint review is ready',
      version: 1,
    },
    {
      id: 3,
      sourceId: 222222,
      sourceName: 'Eniatus Bank Internal Product Dashboard Design Challenge',
      eventType: eventTypes.PROJECT.ACTIVE,
      date: minutesAgo(40),
      isRead: false,
      isSeen: false,
      contents: 'Forum has been updated by fajar.mln',
      version: 1,
    },
    {
      id: 4,
      sourceId: 333333,
      sourceName: 'DLP Responsive Web Application Design Challenge',
      eventType: eventTypes.PROJECT.ACTIVE,
      date: minutesAgo(50),
      isRead: true,
      isSeen: true,
      contents: 'Forum has been updated by fajar.mln',
      version: 1,
    },
    {
      id: 5,
      sourceId: 555555,
      sourceName: 'TC Member Profile Page - Rating Details Design Challenge',
      eventType: eventTypes.PROJECT.ACTIVE,
      date: hoursAgo(1),
      isRead: false,
      isSeen: true,
      contents: 'Checkpoint Review is ready',
      version: 1,
    },
    {
      id: 6,
      sourceId: 555555,
      sourceName: 'TC Member Profile Page - Rating Details Design Challenge',
      eventType: eventTypes.PROJECT.ACTIVE,
      date: hoursAgo(1),
      isRead: true,
      isSeen: true,
      contents: 'Forum has been updated by systic',
      version: 1,
    },
    {
      id: 7,
      sourceId: 666666,
      sourceName: 'TC Member Profile Page - Rating Details Design Challenge',
      eventType: eventTypes.PROJECT.ACTIVE,
      date: hoursAgo(1),
      isRead: true,
      isSeen: true,
      contents: 'Forum has been updated by systic',
      version: 1,
    },
    {
      id: 8,
      sourceId: 10101012,
      sourceName: 'DLP Responsive Web Application Design Challenge',
      eventType: eventTypes.PROJECT.ACTIVE,
      date: hoursAgo(1),
      isRead: false,
      isSeen: false,
      contents: 'Specification is modified',
      version: 1,
    },
    {
      id: 9,
      sourceId: 777777,
      sourceName: 'Eniatus Bank Internal Product Dashboard Design Challenge ',
      eventType: eventTypes.PROJECT.ACTIVE,
      date: minutesAgo(40),
      isRead: false,
      isSeen: true,
      contents: 'Checkpoint review is ready',
      version: 1,
    },
    {
      id: 10,
      sourceId: 777777,
      sourceName: 'Eniatus Bank Internal Product Dashboard Design Challenge ',
      eventType: eventTypes.PROJECT.ACTIVE,
      date: minutesAgo(50),
      isRead: false,
      isSeen: true,
      contents: 'Checkpoint review is ready',
      version: 1,
    },
    {
      id: 11,
      sourceId: 888888,
      sourceName: 'Talent Cloud Experiences powered by Microsoft Teams Concept Design Challenge',
      eventType: eventTypes.PROJECT.COMPLETED,
      date: daysAgo(1),
      isRead: true,
      isSeen: true,
      contents: '',
      version: 1,
    },
    {
      id: 12,
      sourceId: 999999,
      sourceName: 'Telehealth Mobile Application Splash Animation Video F2F Design Challenge',
      eventType: eventTypes.PROJECT.COMPLETED,
      date: daysAgo(1),
      isRead: true,
      isSeen: true,
      contents: '',
      version: 1,
    },
    {
      id: 13,
      sourceId: 10101010,
      sourceName: 'GOVT - Integrated Poral Mobile App Design Challenge',
      eventType: eventTypes.PROJECT.COMPLETED,
      date: now,
      isRead: false,
      isSeen: false,
      contents: '',
      version: 1,
    },
  ];

  /**
   * Gets member's notification information.
   * @return {Promise} Resolves to the notification information object.
   */
  async getNotifications() {
    return this.MockNotifications;
  }

  /**
   * Marks given notification as read.
   * @return {Promise} Resolves to the notification information object.
   */
  async markNotificationAsRead(item) {
    for (let idx = 0; idx < this.MockNotifications.length; idx += 1) {
      const m = this.MockNotifications[idx];
      if (m.id === item.id) {
        m.isRead = true;
      }
    }

    return this.MockNotifications;
  }

  /**
   * Marks all notification as read.
   * @return {Promise} Resolves to the notification information object.
   */
  async markAllNotificationAsRead() {
    for (let idx = 0; idx < this.MockNotifications.length; idx += 1) {
      const m = this.MockNotifications[idx];
      m.isRead = true;
      m.isSeen = true;
    }
    return this.MockNotifications;
  }

  /**
   * Marks all notification as seen.
   * @return {Promise} Resolves to the notification information object.
   */
  async markAllNotificationAsSeen() {
    for (let idx = 0; idx < this.MockNotifications.length; idx += 1) {
      const m = this.MockNotifications[idx];
      m.isSeen = true;
    }
    return this.MockNotifications;
  }
}

let lastInstance = null;
/**
 * Returns a new or existing notifications service.
 * @return {NotificationService} Notification service object
 */
export function getService() {
  if (!lastInstance) {
    lastInstance = new NotificationService();
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
export default undefined;
