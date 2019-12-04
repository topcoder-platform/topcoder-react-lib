/**
 * @module "actions.lookup"
 * @desc Actions related to lookup data.
 */

import { createActions } from 'redux-actions';
import { getService } from '../services/lookup';

/**
 * @static
 * @desc Creates an action that signals beginning of getting all skill tags.
 * @return {Action}
 */
function getSkillTagsInit() {}

/**
 * @static
 * @desc Creates an action that gets all skill tags.
 * @return {Action}
 */
function getSkillTagsDone() {
  const params = {
    filter: {
      domain: 'SKILLS',
      status: 'APPROVED'
    },
    limit: {
      limit: 1000
    }
  };
  return getService().getTags(params);
}

/**
 * @static
 * @desc Creates an action that signals beginning of getting all countries.
 * @return {Action}
 */
function getCountriesInit() {}

/**
 * @static
 * @desc Creates an action that gets all countries.
 * @return {Action}
 */
function getCountriesDone() {
  return getService().getCountries();
}

/**
 * @static
 * @desc Creates an action that signals beginning of getting all countries api version 5.
 * @return {Action}
 */
function getAllCountriesInit() {}

/**
 * @static
 * @desc Creates an action that gets all countries api version 5.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {Action}
 */
function getAllCountriesDone(tokenV3) {
  return getService(tokenV3).getAllCountries();
}

export default createActions({
  LOOKUP: {
    GET_SKILL_TAGS_INIT: getSkillTagsInit,
    GET_SKILL_TAGS_DONE: getSkillTagsDone,
    GET_COUNTRIES_INIT: getCountriesInit,
    GET_COUNTRIES_DONE: getCountriesDone,
    GET_ALL_COUNTRIES_INIT: getAllCountriesInit,
    GET_ALL_COUNTRIES_DONE: getAllCountriesDone,
  },
});
