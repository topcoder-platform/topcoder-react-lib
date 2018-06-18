/**
 * @module "reducers.settings"
 * @desc Reducer for the Redux store segment that holds traits data.
 */

import { handleActions } from 'redux-actions';
import logger from '../utils/logger';
import actions from '../actions/settings';
import { fireErrorMessage } from '../utils/errors';

/**
 * reducer function to process GET_ALL_USER_TRAITS action
 * @param {Object} state
 * @param {Object} payload
 * @return {Object} New state.
 */
function onGetAllUserTraits(state, { error, payload }) {
  if (error) {
    logger.error('Failed to get all user traits', payload);
    return {
      ...state,
      userTraits: [],
    };
  }

  return {
    ...state,
    userTraits: payload.data,
  };
}

/**
 * reducer function to process ADD_USER_TRAIT action
 * @param {Object} state
 * @param {Object} payload
 * @return {Object} New state.
 */
function onAddUserTrait(state, { error, payload }) {
  if (error) {
    logger.error('Failed to add user trait', payload);
    fireErrorMessage('Failed to add user trait', '');
    return {
      ...state,
      isSavingTrait: false,
    };
  }
  const newData = payload.result[0];
  return {
    ...state,
    userTraits: [...state.userTraits, newData],
    isSavingTrait: false,
  };
}

/**
 * reducer function to process UPDATE_USER_TRAIT action
 * @param {Object} state
 * @param {Object} payload
 * @return {Object} New state.
 */
function onUpdateUserTrait(state, { error, payload }) {
  if (error) {
    logger.error('Failed to update user trait', payload);
    fireErrorMessage('Failed to update user trait', '');
    return {
      ...state,
      isSavingTrait: false,
    };
  }
  const newData = payload.result[0];
  const newUserTraits = state.userTraits.filter(trait => trait.traitId !== payload.traitId);
  newUserTraits.push(newData);

  return {
    ...state,
    userTraits: newUserTraits,
    isSavingTrait: false,
  };
}

/**
 * reducer function to process DELETE_USER_TRAIT action
 * @param {Object} state
 * @param {Object} payload
 * @return {Object} New state.
 */
function onDeleteUserTrait(state, { error, payload }) {
  if (error) {
    logger.error('Failed to delete user trait', payload);
    fireErrorMessage('Failed to delete user trait', '');
    return state;
  }
  const newUserTraits = state.userTraits.filter(trait => trait.traitId !== payload.traitId);
  return {
    ...state,
    userTraits: newUserTraits,
  };
}

/**
 * reducer function to change the trait saving state
 * @param {Object} state old state
 * @param {Bool} payload new saving state
 * @return {Object} state new state
 */
function onSetTraitSavingState(state, payload) {
  return {
    ...state,
    isSavingTrait: payload.saving,
  };
}

/**
 * Creates a new user trait reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} userTraits reducer.
 */
function create(initialState = {
  userTraits: [],
  isSavingTrait: false,
}) {
  const a = actions.settings;
  return handleActions({
    [a.getAllUserTraits]: onGetAllUserTraits,
    [a.addUserTrait]: onAddUserTrait,
    [a.deleteUserTrait]: onDeleteUserTrait,
    [a.updateUserTrait]: onUpdateUserTrait,
    [a.setTraitSavingState]: onSetTraitSavingState,
  }, initialState);
}

export function factory() {
  return Promise.resolve(create());
}

export default create();
