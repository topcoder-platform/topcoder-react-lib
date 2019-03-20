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
    domain: 'SKILLS',
    status: 'APPROVED',
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

export default createActions({
  LOOKUP: {
    GET_SKILL_TAGS_INIT: getSkillTagsInit,
    GET_SKILL_TAGS_DONE: getSkillTagsDone,
    GET_COUNTRIES_INIT: getCountriesInit,
    GET_COUNTRIES_DONE: getCountriesDone,
  },
});
