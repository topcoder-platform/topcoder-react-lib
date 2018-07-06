/**
 * @module "actions.education"
 * @desc Actions for interactions with profile details API.
 */
import { createActions } from 'redux-actions';

import { getService as getEducationService } from '../services/education';

function getEducationInit() {}
/**
 * @static
 * @desc Creates an action that gets linked accounts.
 *
 * @param {Object} handle Topcoder member profile.basicInfo: null
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getEducationDone(handle, tokenV3) {
  const token= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJhZG1pbmlzdHJhdG9yIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLWRldi5jb20iLCJoYW5kbGUiOiJoZWZmYW4iLCJleHAiOjE3NjYyODkyNDYsInVzZXJJZCI6IjEzMjQ1NiIsImlhdCI6MTQ1MDkyOTI0NiwiZW1haWwiOm51bGwsImp0aSI6IjEzNjljNjAwLWUwYTEtNDUyNS1hN2M3LTU2YmU3ZDgxM2Y1MSJ9.hp5peSoj-fh3KFkskvBpfUFIcJNtsv4zIMFV-D8F3JA';
  // console.log("education service returned", getEducationService(token).getEducation(handle, tokenV3));
  return getEducationService(token).getEducation(handle, tokenV3);
  //.then(data => data.json());
  }
  
  function updateEducationInit() {}

function updateEducationDone(education, handle) {
  // console.log("Updated basic info/basic info actions: ", basicInfo);
  const token= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJhZG1pbmlzdHJhdG9yIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLWRldi5jb20iLCJoYW5kbGUiOiJoZWZmYW4iLCJleHAiOjE3NjYyODkyNDYsInVzZXJJZCI6IjEzMjQ1NiIsImlhdCI6MTQ1MDkyOTI0NiwiZW1haWwiOm51bGwsImp0aSI6IjEzNjljNjAwLWUwYTEtNDUyNS1hN2M3LTU2YmU3ZDgxM2Y1MSJ9.hp5peSoj-fh3KFkskvBpfUFIcJNtsv4zIMFV-D8F3JA';
  const service= getEducationService(token);
  return service.updateEducation(education, handle);
  }
  export default createActions({
    EDUCATION: {
      GET_EDUCATION_INIT: getEducationInit,
      GET_EDUCATION_DONE: getEducationDone,
      UPDATE_EDUCATION_INIT: updateEducationInit,
      UPDATE_EDUCATION_DONE: updateEducationDone
    }
  });