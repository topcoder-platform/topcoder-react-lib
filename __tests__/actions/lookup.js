import { redux } from 'topcoder-react-utils';

import * as LookupService from 'services/lookup';
import actions from 'actions/lookup';

const tag = {
  domain: 'SKILLS',
  id: 251,
  name: 'Jekyll',
  status: 'APPROVED',
};

const country = {
  country: 'Afghanistan',
  countryCode: 'AFG',
};

// Mock services
const mockLookupService = {
  getTags: jest.fn().mockReturnValue(Promise.resolve([tag])),
  getCountries: jest.fn().mockReturnValue(Promise.resolve([country])),
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

test('lookup.getCountriesInit', async () => {
  const actionResult = actions.lookup.getCountriesInit();
  expect(actionResult).toMatchSnapshot();
});

test('lookup.getCountriesDone', async () => {
  const actionResult = await redux.resolveAction(actions.lookup.getCountriesDone());
  expect(actionResult).toMatchSnapshot();
  expect(mockLookupService.getCountries).toBeCalled();
});
