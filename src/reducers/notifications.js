/**
 * @module "reducers.notifications"
 * @desc Reducer for {@link module:actions.notifications} actions.
 *
 * State segment managed by this reducer has the following strcuture:
 * @param {Array} authenticating=true `true` if authentication is still in
 *  progress; `false` if it has already completed or failed.
 * @param {Object} profile=null Topcoder user profile.
 * @param {String} tokenV2='' Topcoder v2 auth token.
 * @param {String} tokenV3='' Topcoder v3 auth token.
 * @param {Object} user=null Topcoder user object (user information stored in
 *  v3 auth token).
 */


import { handleActions } from 'redux-actions';

import actions from '../actions/notifications';
import logger from '../utils/logger';
import { fireErrorMessage } from '../utils/errors';


/**
 * Handles NOTIFICATIONS/GET_NOTIFICATIONS_INIT action.
 * @param {Object} state
 * @return {Object} New state
 */
function onGetNotificationsInit(state) {
  return { ...state };
}

/**
 * Handles NOTIFICATIONS/GET_NOTIFICATIONS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetNotificationsDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to get notifications!', payload);
    fireErrorMessage(
      'ERROR: Failed to load the notifications',
      'Please, try again a bit later',
    );
    return {
      ...state,
      fetchNotificationsFailure: true,
      items: [],
    };
  }

  return {
    ...state,
    items: payload,
    fetchNotificationsFailure: false,
  };
}

/**
 * Handles NOTIFICATIONS/MARK_NOTIFICATION_AS_INIT action.
 * @param {Object} state
 * @return {Object} New state
 */
function onMarkNotificationAsReadInit(state) {
  return { ...state };
}

/**
 * Handles NOTIFICATIONS/MARK_NOTIFICATION_AS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onMarkNotificationAsReadDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to mark notification as read!', payload);
    fireErrorMessage(
      'ERROR: Failed to mark the notification as read',
      'Please, try again a bit later',
    );
    return {
      ...state,
      fetchNotificationsFailure: true,
      items: [],
    };
  }

  return {
    ...state,
    items: payload,
    fetchNotificationsFailure: false,
  };
}


/**
 * Handles NOTIFICATIONS/MARK_ALL_NOTIFICATION_AS_READ_INIT action.
 * @param {Object} state
 * @return {Object} New state
 */
function onMarkAllNotificationAsReadInit(state) {
  return { ...state };
}

/**
 * Handles NOTIFICATIONS/MARK_ALL_NOTIFICATION_AS_READ_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onMarkAllNotificationAsReadDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to mark notification as read!', payload);
    fireErrorMessage(
      'ERROR: Failed to mark the notification as read',
      'Please, try again a bit later',
    );
    return {
      ...state,
      fetchNotificationsFailure: true,
      items: [],
    };
  }

  return {
    ...state,
    items: payload,
    fetchNotificationsFailure: false,
  };
}

/**
 * Handles NOTIFICATIONS/MARK_ALL_NOTIFICATION_AS_SEEN_INIT action.
 * @param {Object} state
 * @return {Object} New state
 */
function onMarkAllNotificationAsSeenInit(state) {
  return { ...state };
}

/**
 * Handles NOTIFICATIONS/MARK_ALL_NOTIFICATION_AS_SEEN_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onMarkAllNotificationAsSeenDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to mark notification as seen!', payload);
    fireErrorMessage(
      'ERROR: Failed to mark the notification as seen',
      'Please, try again a bit later',
    );
    return {
      ...state,
      fetchNotificationsFailure: true,
      items: [],
    };
  }

  return {
    ...state,
    items: payload,
    fetchNotificationsFailure: false,
  };
}

/**
 * Handles NOTIFICATIONS/DISMISS_CHALLENGE_NOTIFICATIONS_INIT action.
 * @param {Object} state
 * @return {Object} New state
 */
function onDismissChallengeNotificationsInit(state) {
  return { ...state };
}

/**
 * Handles NOTIFICATIONS/DISMISS_CHALLENGE_NOTIFICATIONS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onDismissChallengeNotificationsDone(state, { error, payload }) {
  if (error) {
    logger.error('Failed to dismiss notification!', payload);
    fireErrorMessage(
      'ERROR: Failed to dismiss the notification',
      'Please, try again a bit later',
    );
    return {
      ...state,
      fetchNotificationsFailure: true,
      items: [],
    };
  }

  return {
    ...state,
    items: payload,
    fetchNotificationsFailure: false,
  };
}


/**
 * Creates a new Members reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Members reducer.
 */
function create(initialState = {}) {
  const a = actions.notifications;
  return handleActions({
    [a.getNotificationsInit]: onGetNotificationsInit,
    [a.getNotificationsDone]: onGetNotificationsDone,
    [a.markNotificationAsReadInit]: onMarkNotificationAsReadInit,
    [a.markNotificationAsReadDone]: onMarkNotificationAsReadDone,
    [a.markAllNotificationAsReadInit]: onMarkAllNotificationAsReadInit,
    [a.markAllNotificationAsReadDone]: onMarkAllNotificationAsReadDone,
    [a.markAllNotificationAsSeenInit]: onMarkAllNotificationAsSeenInit,
    [a.markAllNotificationAsSeenDone]: onMarkAllNotificationAsSeenDone,
    [a.dismissChallengeNotificationsInit]: onDismissChallengeNotificationsInit,
    [a.dismissChallengeNotificationsDone]: onDismissChallengeNotificationsDone,
  }, initialState);
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
export function factory() {
  return Promise.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
export default create();
