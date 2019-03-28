import { mockAction } from 'utils/mock';

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

const mockActions = {
  lookup: {
    getSkillTagsInit: mockAction('LOOKUP/GET_SKILL_TAGS_INIT'),
    getSkillTagsDone: mockAction('LOOKUP/GET_SKILL_TAGS_DONE', [tag]),
    getSkillTagsDoneError: mockAction('LOOKUP/GET_SKILL_TAGS_DONE', null, 'Unknown error'),
    getCountriesInit: mockAction('LOOKUP/GET_COUNTRIES_INIT'),
    getCountriesDone: mockAction('LOOKUP/GET_COUNTRIES_DONE', [country]),
    getCountriesDoneError: mockAction('LOOKUP/GET_COUNTRIES_DONE', null, 'Unknown error'),
  },
};
jest.setMock(require.resolve('actions/lookup'), mockActions);

const reducers = require('reducers/lookup');

let reducer;

function testReducer() {
  let state;

  test('Initial state', () => {
    state = reducer(undefined, {});
    expect(state).toMatchSnapshot();
  });

  test('Get skill tags', () => {
    state = reducer(state, mockActions.lookup.getSkillTagsInit());
    state = reducer(state, mockActions.lookup.getSkillTagsDone());
    expect(state).toMatchSnapshot();
  });

  test('Get skill tags error', () => {
    state = reducer(state, mockActions.lookup.getSkillTagsDoneError());
    expect(state).toMatchSnapshot();
  });

  test('Get countries', () => {
    state = reducer(state, mockActions.lookup.getCountriesInit());
    state = reducer(state, mockActions.lookup.getCountriesDone());
    expect(state).toMatchSnapshot();
  });

  test('Get countries error', () => {
    state = reducer(state, mockActions.lookup.getCountriesDoneError());
    expect(state).toMatchSnapshot();
  });
}

describe('Default reducer', () => {
  reducer = reducers.default;
  testReducer();
});

describe('Factory without server side rendering', () => {
  beforeAll((done) => {
    reducers.factory().then((res) => {
      reducer = res;
      done();
    });
  });
  testReducer();
});
