/**
 * @module "reducers.groups"
 * @desc
 * This reducer handles information related to user-groups.
 *
 * Corresponding segment of the Redux state is designed to have the following
 * fields:
 *
 * groups {Object} - Holds loaded information about user groups. Keys of this
 * object are group IDs, and the values are group data object. To keep the state
 * flat, and our code efficient; for any group that has sub-groups, subGroups
 * field is removed, while subGroupsIds {String[]} field is added, and each
 * sub group data object is added to the groups object.
 *
 * loading {Object} - Holds IDs of the groups being loaded. Removing ID from
 * this object will result in silent discard of the data loaded by the
 * corresponding GROUPS/GET_DONE action; though such functionality does
 * not look really necessary at the moment, thus we do not provide an
 * action to really cancel group loading.
 * @todo Document state segment structure better.
 */

import _ from 'lodash';
import { handleActions } from 'redux-actions';
import actions from '../actions/groups';
// import { getApiResponsePayload } from '../utils/tc';

/**
 * Private. Given two user group maps, it adds to "dst" the root group from
 * "src" (specified by "rootId"), and all its descendant groups. Any groups
 * in "src" not related to the sub-tree of the root group descendants are
 * not added to "dst".
 * This function mutates "dst"!
 * @param {Object} dst
 * @param {Object} src
 * @param {String} rootId
 */
function mergeGroupTree(dst, src, rootId) {
  const root = src[rootId];
  dst[rootId] = root; // eslint-disable-line no-param-reassign
  if (root.subGroupIds) {
    root.subGroupIds.forEach(id => mergeGroupTree(dst, src, id));
  }
}

/**
 * Removes from the state all loaded user groups, and cancels any on-going
 * loading of user groups.
 * @param {Object} state
 * @return {Object} New state.
 */
function onDropGroups(state) {
  return { ...state, groups: {}, loading: {} };
}

/**
 * Initiates the loading of data on the specified groups.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetGroupsInit(state, { payload }) {
  const groupIds = _.isArray(payload) ? payload : [payload];
  const loading = _.clone(state.loading);
  groupIds.forEach((id) => { loading[id] = true; });
  return { ...state, loading };
}

/**
 * Finalizes the loading of data on the specified groups.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetGroupsDone(state, action) {
  const groups = _.clone(state.groups);
  const loading = _.clone(state.loading);
  const loaded = action.payload;
  Object.values(loaded).forEach(({ id }) => {
    if (loading[id]) {
      mergeGroupTree(groups, loaded, id);
      delete loading[id];
    }
  });
  return { ...state, groups, loading };
}

function onGetMemberGroups(state, action) {
  return { ...state, memberGroups: action.payload };
}


/**
 * Creates a new Groups reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Groups reducer.
 */
function create(initialState) {
  const a = actions.groups;
  return handleActions({
    [a.dropGroups]: onDropGroups,
    [a.getGroupsInit]: onGetGroupsInit,
    [a.getGroupsDone]: onGetGroupsDone,
    [a.getMemberGroups]: onGetMemberGroups,
  }, _.defaults(initialState ? _.clone(initialState) : {}, {
    groups: {},
    loading: {},
    memberGroups: [],
  }));
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
