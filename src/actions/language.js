/**
 * @module "actions.language"
 * @desc Actions for interactions with profile details API.
 */
import { createActions } from 'redux-actions';

import { getService as getLanguageService } from '../services/language';

function getLanguageInit() {}
/**
 * @static
 * @desc Creates an action that gets linked accounts.
 *
 * @param {Object} handle Topcoder member profile.basicInfo: null
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getLanguageDone(handle, tokenV3) {
  const token= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJhZG1pbmlzdHJhdG9yIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLWRldi5jb20iLCJoYW5kbGUiOiJoZWZmYW4iLCJleHAiOjE3NjYyODkyNDYsInVzZXJJZCI6IjEzMjQ1NiIsImlhdCI6MTQ1MDkyOTI0NiwiZW1haWwiOm51bGwsImp0aSI6IjEzNjljNjAwLWUwYTEtNDUyNS1hN2M3LTU2YmU3ZDgxM2Y1MSJ9.hp5peSoj-fh3KFkskvBpfUFIcJNtsv4zIMFV-D8F3JA';
  return getLanguageService(token).getLanguage(handle, tokenV3);
      //.then(data => data.json());
  }
  
  function updateLanguageInit() {}

// function updateBasicInfoDone(basicInfo) {
//   console.log("Updated basic info/basic info actions: ", basicInfo);
//   const token= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJhZG1pbmlzdHJhdG9yIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLWRldi5jb20iLCJoYW5kbGUiOiJoZWZmYW4iLCJleHAiOjE3NjYyODkyNDYsInVzZXJJZCI6IjEzMjQ1NiIsImlhdCI6MTQ1MDkyOTI0NiwiZW1haWwiOm51bGwsImp0aSI6IjEzNjljNjAwLWUwYTEtNDUyNS1hN2M3LTU2YmU3ZDgxM2Y1MSJ9.hp5peSoj-fh3KFkskvBpfUFIcJNtsv4zIMFV-D8F3JA';
//   const service= getBasicInfoService(token);
//   return service.updateBasicInfo(basicInfo);
//   }
  export default createActions({
    LANGUAGE: {
      GET_LANGUAGE_INIT: getLanguageInit,
      GET_LANGUAGE_DONE: getLanguageDone,
    //   UPDATE_BASIC_INFO_INIT: updateBasicInfoInit,
    //   UPDATE_BASIC_INFO_DONE: updateBasicInfoDone
    }
  });