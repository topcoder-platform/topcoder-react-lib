import { mockAction } from 'utils/mock';

const tag = {
  domain: 'SKILLS',
  id: 251,
  name: 'Jekyll',
  status: 'APPROVED',
};

const mockActions = {
  lookup: {
    getSkillTagsInit: mockAction('LOOKUP/GET_SKILL_TAGS_INIT'),
    getSkillTagsDone: mockAction('LOOKUP/GET_SKILL_TAGS_DONE', [tag]),
    getSkillTagsDoneError: mockAction('LOOKUP/GET_SKILL_TAGS_DONE', null, 'Unknown error'),
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
