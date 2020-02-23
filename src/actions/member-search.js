/**
 * @module "actions.member-search"
 * @desc Actions for management of members search.
 */
import _ from 'lodash'
import { createActions } from 'redux-actions';
import { getService } from '../services/member-search';

/**
 * @desc Creates an action that fetchs the members data for a search term, and
 * adds result to the store cumulatively.
 * @param {String} searchTerm the search term
 * @param {Number} offset the number of records to skip
 * @param {Number} limit the maximum number of the return results
 * @return {Action}
 */
function loadMemberSearch(searchTerm, offset = 0, limit = 10) {
  return getService().getUsernameMatches(searchTerm, offset, limit);
}

/**
 * @static
 * @desc Creates an action that fetchs the members data for a search tag, and
 * adds result to the store.
 * @param {Object} tag the tag
 * @return {Action}
 */
function loadMemberSearchForTag(tag) {
  return getService().getTopMembers(tag);
}

/**
 * @static
 * @desc Creates an action that check if the term is a tag name. If it is unable to check,
 * or invalid data returned then resets the members data and search terms data in the store
 * to intial values.
 * @param {String} searchTerm the search term
 * @return {Action}
 */
function checkIfSearchTermIsATag(searchTerm) {
  return getService().checkIfSearchTermIsATag(searchTerm);
}

/**
 * @static
 * @desc Creates an action that saves the current search term.
 * @param {String} searchTerm the search term
 * @return {Action}
 */
function setSearchTerm(searchTerm) {
  return {
    previousSearchTerm: searchTerm
  }
}

/**
 * @static
 * @desc Creates an action that saves the current search tag.
 * @param {Object} searchTag the search tag
 * @return {Action}
 */
function setSearchTag(searchTag) {
  return {
    searchTermTag: searchTag
  }
}

export default createActions({
  MEMBER_SEARCH: {
    USERNAME_SEARCH_SUCCESS: loadMemberSearch,
    CHECK_IF_SEARCH_TERM_IS_A_TAG: checkIfSearchTermIsATag,
    TOP_MEMBER_SEARCH_SUCCESS: loadMemberSearchForTag,
    CLEAR_MEMBER_SEARCH: _.noop,
    LOAD_MORE_USERNAMES: _.noop,
    MEMBER_SEARCH_SUCCESS: _.noop,
    SET_SEARCH_TERM: setSearchTerm,
    SET_SEARCH_TAG: setSearchTag,
    RESET_SEARCH_TERM: _.noop
  }
});
