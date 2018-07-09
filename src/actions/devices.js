/**
 * @module "actions.devices"
 * @desc Actions for interactions with profile details API.
 */
import { createActions } from 'redux-actions';

import { getService as getDevicesService } from '../services/devices';

function getDevicesInit() {}
/**
 * @static
 * @desc Creates an action that gets linked accounts.
 *
 * @param {Object} handle Topcoder member profile.basicInfo: null
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getDevicesDone(handle, tokenV3) {
  const token= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJhZG1pbmlzdHJhdG9yIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLWRldi5jb20iLCJoYW5kbGUiOiJoZWZmYW4iLCJleHAiOjE3NjYyODkyNDYsInVzZXJJZCI6IjEzMjQ1NiIsImlhdCI6MTQ1MDkyOTI0NiwiZW1haWwiOm51bGwsImp0aSI6IjEzNjljNjAwLWUwYTEtNDUyNS1hN2M3LTU2YmU3ZDgxM2Y1MSJ9.hp5peSoj-fh3KFkskvBpfUFIcJNtsv4zIMFV-D8F3JA';
  // console.log("education service returned", getEducationService(token).getEducation(handle, tokenV3));
  return getDevicesService(token).getDevices(handle, tokenV3);
  //.then(data => data.json());
  }
  
  function updateDevicesInit() {}

function updateDevicesDone(device, handle) {
  // console.log("Updated basic info/basic info actions: ", basicInfo);
  const token= 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJhZG1pbmlzdHJhdG9yIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLWRldi5jb20iLCJoYW5kbGUiOiJoZWZmYW4iLCJleHAiOjE3NjYyODkyNDYsInVzZXJJZCI6IjEzMjQ1NiIsImlhdCI6MTQ1MDkyOTI0NiwiZW1haWwiOm51bGwsImp0aSI6IjEzNjljNjAwLWUwYTEtNDUyNS1hN2M3LTU2YmU3ZDgxM2Y1MSJ9.hp5peSoj-fh3KFkskvBpfUFIcJNtsv4zIMFV-D8F3JA';
  const service= getDevicesService(token);
  return service.updateDevices(device, handle);
  }
  export default createActions({
    DEVICES: {
      GET_DEVICES_INIT: getDevicesInit,
      GET_DEVICES_DONE: getDevicesDone,
      UPDATE_DEVICES_INIT: updateDevicesInit,
      UPDATE_DEVICES_DONE: updateDevicesDone
    }
  });