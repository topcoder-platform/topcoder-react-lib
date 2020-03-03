/**
 * @module "reducers.member-search"
 * @desc Reducer for {@link module:actions.member-search} actions.
 *
 * State segment managed by this reducer has the following structure:
 * @param {Boolean} pageLoaded  `true` if loading members data for a search term is done
 *                              `false`if starting loading members data for a search term,
 * or loading failed
 * @param {Boolean} loadingMore `true` if request for loading more data is in progress;
 * otherwise `false`
 * @param {Boolean} error       `true` if failed to load member data; otherwise `false`
 * @param {Number}  totalCount   the number of matched members for a search term
 * @param {Boolean} moreMatchesAvailable `true` if there are more matched members, for
 * a search term, to load; otherwise `false`
 * @param {Array<{}>} usernameMatches contains loaded members data for a search term
 * @param {Array<{}>} topMembers contains loaded members data for a search tag
 * @param {String} previousSearchTerm the current search term
 * @param {Object} searchTermTag the current search tag data if the search term is a tag name;
 * otherwise `null`
 */
import _ from 'lodash';
import { redux } from 'topcoder-react-utils';
import actions from '../actions/member-search';
import { fireErrorMessage } from '../utils/errors';

/**
 * @private
 * Returns the new state with the intial members data.
 */
function memberSearchFailure(state) {
  return Object.assign({}, state, {
    loadingMore: false,
    error: true,
    totalCount: 0,
    usernameMatches: [],
    topMembers: [],
  });
}

/**
 * @private
 * Returns the new state with the intial search terms data.
 */
function resetSearchTerm(state) {
  return Object.assign({}, state, {
    pageLoaded: false,
    previousSearchTerm: null,
    searchTermTag: null,
  });
}

/**
 * @private
 * Returns the new state with the intial members and search terms data.
 */
function memberSearchFailureAndResetSearchTerm(state) {
  let newState = state;
  newState = memberSearchFailure(newState);
  newState = resetSearchTerm(newState);
  return newState;
}

/**
 * Handles the actual results of loading members data for a search term cumulatively,
 * and clear members data on request failure.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onUsernameSearchSuccess(state, action) {
  const { payload } = action;
  if (action.error) {
    fireErrorMessage('Could not fetch username matches', '');
    return memberSearchFailure(state);
  }

  return Object.assign({}, state, {
    loadingMore: false,
    totalCount: payload.totalCount,
    moreMatchesAvailable: state.usernameMatches.length + payload.usernameMatches.length
      < payload.totalCount,
    usernameMatches: state.usernameMatches.concat(payload.usernameMatches),
  });
}

/**
 * Clear members data and search terms data on request failure of checking if the search term is
 * a tag name.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state if error; otherwise the same state.
 */
function onCheckIfSearchTermIsATag(state, action) {
  if (action.error) {
    fireErrorMessage('Could not determine if search term is a tag', '');
    return memberSearchFailureAndResetSearchTerm(state);
  }

  return state;
}

/**
 * Handles the actual results of loading members data for a search tag, and
 * clear members data and search terms data on request failure.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onTopMemberSearchSuccess(state, action) {
  const { payload } = action;
  if (action.error) {
    fireErrorMessage('Could not fetch top members', '');
    return memberSearchFailureAndResetSearchTerm(state);
  }

  return Object.assign({}, state, {
    topMembers: payload.topMembers,
  });
}

/**
 * Clear members data to the intial state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onClearMemberSearch(state) {
  return Object.assign({}, state, {
    pageLoaded: false,
    loadingMore: false,
    error: false,
    totalCount: 0,
    usernameMatches: [],
    topMembers: [],
  });
}

/**
 * Marks the request of loading more members data for a search term as in progress
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onLoadMoreUsernames(state) {
  return Object.assign({}, state, {
    loadingMore: true,
  });
}

/**
 * Marks the loaded members data for a search term or search tag (if any) as ready.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onMemberSearchSuccess(state) {
  return Object.assign({}, state, {
    pageLoaded: true,
  });
}

/**
 * Handles setting the current search term.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onSetSearchTerm(state, action) {
  const { payload } = action;
  return Object.assign({}, state, {
    error: false,
    previousSearchTerm: payload.previousSearchTerm,
  });
}

/**
 * Handles setting the current search tag.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onSetSearchTag(state, action) {
  const { payload } = action;
  return Object.assign({}, state, {
    searchTermTag: payload.searchTermTag,
  });
}

/**
 * Handles clearing the current search term and search tag.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onResetSearchTerm(state) {
  return resetSearchTerm(state);
}

/**
 * Creates a new member search reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} member search reducer.
 */
function create(initialState = {}) {
  const a = actions.memberSearch;
  return redux.handleActions({
    [a.usernameSearchSuccess]: onUsernameSearchSuccess,
    [a.checkIfSearchTermIsATag]: onCheckIfSearchTermIsATag,
    [a.topMemberSearchSuccess]: onTopMemberSearchSuccess,
    [a.clearMemberSearch]: onClearMemberSearch,
    [a.loadMoreUsernames]: onLoadMoreUsernames,
    [a.memberSearchSuccess]: onMemberSearchSuccess,
    [a.setSearchTerm]: onSetSearchTerm,
    [a.setSearchTag]: onSetSearchTag,
    [a.resetSearchTerm]: onResetSearchTerm,
  }, _.defaults(initialState, {
    pageLoaded: false,
    loadingMore: false,
    error: false,
    totalCount: 0,
    moreMatchesAvailable: false,
    usernameMatches: [],
    topMembers: [],
    previousSearchTerm: null,
    searchTermTag: null,
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
