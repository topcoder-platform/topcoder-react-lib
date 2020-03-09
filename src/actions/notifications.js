/**
 * @module "actions.notifications"
 * @desc Actions related to notifications data.
 */

import _ from 'lodash';
import { createActions } from 'redux-actions';
import { getService } from '../services/notifications';

/**
  * TODO: We will need to change this based on API and
  * frontend mapping we need later.
  */
function processData(data) {
  const retData = _.map(data, (item) => {
    const object = {};
    object.id = item.id;
    object.sourceId = item.contents.id;
    object.sourceName = item.contents.name || item.contents.title;
    object.eventType = item.type;
    object.isRead = item.read;
    object.isSeen = item.seen;
    object.contents = item.contents.message || item.contents.title;
    object.version = item.version;
    object.date = item.createdAt;
    return object;
  });
  return retData;
}

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
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function getNotificationsDone(tokenV3) {
  let data;
  try {
    data = await getService(tokenV3).getNotifications();
  } catch (e) {
    data = [];
  }
  return processData(data.items || []);
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
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function markNotificationAsReadDone(item, tokenV3) {
  try {
    await getService(tokenV3).markNotificationAsRead(item.id);
  } catch (e) {
    return e;
  }
  return item;
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
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function markAllNotificationAsReadDone(tokenV3) {
  try {
    await getService(tokenV3).markAllNotificationAsRead();
  } catch (e) {
    return e;
  }
  return true;
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
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function markAllNotificationAsSeenDone(items, tokenV3) {
  try {
    await getService(tokenV3).markAllNotificationAsSeen(items);
  } catch (e) {
    return e;
  }
  return items;
}


/**
 * @static
 * @desc Creates an action that signals beginning of dismiss all challenge notifications
 *  loading.
 * @return {Action}
 */
function dismissChallengeNotificationsInit() {
  return { };
}

/**
 * @static
 * @desc Creates an action that dismisses all challenge notifications
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
async function dismissChallengeNotificationsDone(challengeId, tokenV3) {
  try {
    await getService(tokenV3).dismissChallengeNotifications(challengeId);
  } catch (e) {
    return e;
  }
  return true;
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
    DISMISS_CHALLENGE_NOTIFICATIONS_INIT: dismissChallengeNotificationsInit,
    DISMISS_CHALLENGE_NOTIFICATIONS_DONE: dismissChallengeNotificationsDone,
  },
});
