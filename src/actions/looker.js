/**
 * @module "actions.looker"
 * @desc Actions related to looker data.
 */

import { createActions } from 'redux-actions';
import { getService } from '../services/looker';

/**
 * @static
 * @desc Creates an action that gets look data by id.
 * @return {Action}
 */
async function getLookerDone(lookerId) {
  const data = await getService().getLooker(lookerId);
  return { data, lookerId };
}

export default createActions({
  LOOKER: {
    GET_LOOKER_DONE: getLookerDone,
  },
});
