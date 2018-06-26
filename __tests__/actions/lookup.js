import { redux } from 'topcoder-react-utils';

import * as LookupService from 'services/lookup';
import actions from 'actions/lookup';

const tag = {
  domain: 'SKILLS',
  id: 251,
  name: 'Jekyll',
  status: 'APPROVED',
};

// Mock services
const mockLookupService = {
  getTags: jest.fn().mockReturnValue(Promise.resolve([tag])),
};
LookupService.getService = jest.fn().mockReturnValue(mockLookupService);

test('Module exports', () => expect(actions).toMatchSnapshot());

test('lookup.getSkillTagsInit', async () => {
  const actionResult = actions.lookup.getSkillTagsInit();
  expect(actionResult).toMatchSnapshot();
});

test('lookup.getSkillTagsDone', async () => {
  const actionResult = await redux.resolveAction(actions.lookup.getSkillTagsDone());
  expect(actionResult).toMatchSnapshot();
  expect(mockLookupService.getTags).toBeCalled();
});
