/**
 * @module "actions.notifications"
 * @desc Actions related to notifications data.
 */

import { createActions } from 'redux-actions';
import { getService } from '../services/notifications';

/**
 * @static
 * @desc Creates an action that signals beginning of notifications
 *  loading.
 * @return {Action}
 */
function getNotificationsInit() {
  return { };
}

/**
 * @static
 * @desc Creates an action that loads member achievements.
 * @return {Action}
 */
async function getNotificationsDone(item) {
  let data;
  try {
    data = await getService().getNotifications(item);
  } catch (e) {
    data = [];
  }

  return data;
}

/**
 * @static
 * @desc Creates an action that signals beginning of mark notification as read
 *  loading.
 * @return {Action}
 */
function markNotificationAsReadInit() {
  return { };
}

/**
 * @static
 * @desc Creates an action that marks notification as read.
 * @return {Action}
 */
async function markNotificationAsReadDone(item) {
  let data;
  try {
    data = await getService().markNotificationAsRead(item);
  } catch (e) {
    data = [];
  }
  return data;
}

/**
 * @static
 * @desc Creates an action that signals beginning of mark all notification as read
 *  loading.
 * @return {Action}
 */
function markAllNotificationAsReadInit() {
  return { };
}

/**
 * @static
 * @desc Creates an action that marks all notification as read.
 * @return {Action}
 */
async function markAllNotificationAsReadDone() {
  let data;
  try {
    data = await getService().markAllNotificationAsRead();
  } catch (e) {
    data = [];
  }
  return data;
}


/**
 * @static
 * @desc Creates an action that signals beginning of mark all notification as seen
 *  loading.
 * @return {Action}
 */
function markAllNotificationAsSeenInit() {
  return { };
}

/**
 * @static
 * @desc Creates an action that marks all notification as seen.
 * @return {Action}
 */
async function markAllNotificationAsSeenDone() {
  let data;
  try {
    data = await getService().markAllNotificationAsSeen();
  } catch (e) {
    data = [];
  }
  return data;
}


export default createActions({
  NOTIFICATIONS: {
    GET_NOTIFICATIONS_INIT: getNotificationsInit,
    GET_NOTIFICATIONS_DONE: getNotificationsDone,
    MARK_NOTIFICATION_AS_READ_INIT: markNotificationAsReadInit,
    MARK_NOTIFICATION_AS_READ_DONE: markNotificationAsReadDone,
    MARK_ALL_NOTIFICATION_AS_READ_INIT: markAllNotificationAsReadInit,
    MARK_ALL_NOTIFICATION_AS_READ_DONE: markAllNotificationAsReadDone,
    MARK_ALL_NOTIFICATION_AS_SEEN_INIT: markAllNotificationAsSeenInit,
    MARK_ALL_NOTIFICATION_AS_SEEN_DONE: markAllNotificationAsSeenDone,
  },
});
