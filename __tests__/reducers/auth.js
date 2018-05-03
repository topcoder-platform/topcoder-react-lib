import { redux } from 'topcoder-react-utils';
import { mockAction } from '../../src/utils/mock';

const dummy = 'DUMMY';

const mockActions = {
  auth: {
    loadProfile: mockAction('LOAD_PROFILE', Promise.resolve('Profile')),
    setTcTokenV2: mockAction('SET_TC_TOKEN_V2', 'Token V2'),
    setTcTokenV3: mockAction('SET_TC_TOKEN_V3', 'Token V3'),
  },
};
jest.setMock(require.resolve('../../src/actions/auth'), mockActions);

const { reducers } = require('../../src');

let reducer;

function testReducer(istate) {
  test('Initial state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual(istate);
  });

  test('Load profile', () =>
    redux.resolveAction(mockActions.auth.loadProfile()).then((action) => {
      const state = reducer({ dummy }, action);
      expect(state).toEqual({
        authenticating: false,
        dummy,
        profile: 'Profile',
      });
    }));

  test('Set TC Token V2', () => {
    const state = reducer({ dummy }, mockActions.auth.setTcTokenV2());
    expect(state).toEqual({
      dummy,
      tokenV2: 'Token V2',
    });
  });

  test('Set TC Token V3', () => {
    const state = reducer({ dummy }, mockActions.auth.setTcTokenV3());
    expect(state).toEqual({
      dummy,
      tokenV3: 'Token V3',
      user: {
        handle: 'username12345',
        userId: '12345',
      },
    });
  });

  test('Set TC Token V3 with failure', () => {
    mockActions.auth.setTcTokenV3 = mockAction('SET_TC_TOKEN_V3', null);
    const state = reducer({ dummy }, mockActions.auth.setTcTokenV3());
    expect(state).toEqual({
      dummy,
      tokenV3: null,
      user: null,
    });
    mockActions.auth.setTcTokenV3 = mockAction('SET_TC_TOKEN_V3', 'Token V3');
  });
}

describe('Default reducer', () => {
  beforeAll(() => {
    reducer = reducers.auth.default;
  });

  testReducer({
    authenticating: true,
  });
});

describe('Factory without server side rendering', () => {
  beforeAll((done) => {
    reducers.auth.factory().then((res) => {
      reducer = res;
      done();
    });
  });

  testReducer({
    authenticating: true,
    tokenV2: '',
    tokenV3: '',
    user: null,
  });
});

describe('Factory with server side rendering', () => {
  beforeAll((done) => {
    reducers.auth.factory({
      auth: {
        tokenV2: 'Token V2',
        tokenV3: 'Token V3',
      },
    }).then((res) => {
      reducer = res;
      done();
    });
  });

  testReducer({
    authenticating: false,
    profile: 'Profile',
    tokenV2: 'Token V2',
    tokenV3: 'Token V3',
    user: {
      handle: 'username12345',
      userId: '12345',
    },
  });
});
