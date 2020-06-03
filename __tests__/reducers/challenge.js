import _ from 'lodash';
import { redux } from 'topcoder-react-utils';
import { mockAction } from '../../src/utils/mock';
import { actions } from '../../src';

const mockChallengeActions = {
  challenge: {
    getDetailsInit: mockAction('CHALLENGE/GET_DETAILS_INIT', '123456789'),
    getDetailsDone: mockAction('CHALLENGE/GET_DETAILS_DONE', Promise.resolve({
      id: 123456789,
      tag: 'v3-normalized-details',
    })),
    getDetailsDoneError: mockAction(
      'CHALLENGE/GET_DETAILS_DONE',
      { challengeId: '123456789' },
      'Unknown error',
    ),
    getSubmissionsInit: mockAction('CHALLENGE/GET_SUBMISSIONS_INIT', '123456789'),
    getSubmissionsDone: mockAction(
      'CHALLENGE/GET_SUBMISSIONS_DONE',
      Promise.resolve({ challengeId: '123456789', submissions: [{ submissionId: '1' }] }),
    ),
    getSubmissionsDoneError: mockAction(
      'CHALLENGE/GET_SUBMISSIONS_DONE',
      { challengeId: '123456789' },
      'Unknown error',
    ),
    getActiveChallengesCountDone: mockAction('CHALLENGE/GET_ACTIVE_CHALLENGES_COUNT_DONE', 5),
  },
  DETAIL_TABS: {
    DETAILS: 'details',
  },
};

_.merge(actions, mockChallengeActions);

const mockSmpActions = {
  smp: {
    deleteSubmissionDone: mockAction(
      'SMP/DELETE_SUBMISSION_DONE',
      '1',
    ),
  },
};
_.merge(actions, mockSmpActions);

jest.setMock('tc-accounts', {
  decodeToken: () => 'User object',
  isTokenExpired: () => false,
});

const reducers = require('../../src/reducers/challenge');

beforeEach(() => jest.clearAllMocks());

let reducer;
function testReducer() {
  let state;

  test('Creates expected intial state', () => {
    state = reducer(undefined, {});
    expect(state).toMatchSnapshot();
    // state = _.clone(defaultState);
  });

  test('Handles CHALLENGE/GET_DETAILS_INIT as expected', () => {
    state = reducer(state, mockChallengeActions.challenge.getDetailsInit(123456789));
    expect(state).toMatchSnapshot();
  });

  test('Handles CHALLENGE/GET_DETAILS_DONE as expected', (done) => {
    redux.resolveAction(mockChallengeActions.challenge.getDetailsDone()).then((action) => {
      state = reducer(state, action);
      expect(state).toMatchSnapshot();
    }).then(done).catch(done);
  });

  test('Handles CHALLENGE/GET_DETAILS_DONE with error as expected', () => {
    state = reducer(state, mockChallengeActions.challenge.getDetailsDoneError());
    expect(state).toMatchSnapshot();
  });

  test('Handles fetchSubmissionsInit as expected', () => {
    state = reducer(state, mockChallengeActions.challenge.getSubmissionsInit());
    expect(state).toMatchSnapshot();
  });

  test('Handles fetchSubmissionsDone as expected', (done) => {
    redux.resolveAction(mockChallengeActions.challenge.getSubmissionsDone()).then((action) => {
      state = reducer(state, action);
      expect(state).toMatchSnapshot();
    }).then(done).catch(done);
  });

  test('Handles deleteSubmissionDone as expected', () => {
    state = reducer(state, mockSmpActions.smp.deleteSubmissionDone());
    expect(state).toMatchSnapshot();
  });

  test('Handles fetchSubmissionsDoneError as expected', () => {
    state = reducer(state, mockChallengeActions.challenge.getSubmissionsDoneError());
    expect(state).toMatchSnapshot();
  });

  test('Handles getActiveChallengesCountDone as expected', () => {
    state = reducer(state, mockChallengeActions.challenge.getActiveChallengesCountDone());
    expect(state).toMatchSnapshot();
  });
}

describe('Default reducer', () => {
  beforeAll(() => {
    reducer = reducers.default;
  });

  testReducer();
});

jest.clearAllMocks();
jest.resetAllMocks();

describe('Factory without http request', () => {
  beforeAll((done) => {
    reducers.factory().then((res) => {
      reducer = res;
      done();
    });
  });

  testReducer();
});

describe('Factory with server-side rendering', () => {
  beforeAll((done) => {
    reducers.factory({
      auth: {
        tokenV2: 'TcAuthTokenV2',
        tokenV3: 'TcAuthTokenV3',
      },
      challenge: {
        challengeDetails: {
          id: '123456789',
          mySubmission: true,
        },
      },
    }).then((res) => {
      reducer = res;
      done();
    });
  });

  testReducer();
});

describe('Factory without server-side rendering', () => {
  beforeAll((done) => {
    reducers.factory({
      url: '/some-random-url',
    }).then((res) => {
      reducer = res;
      done();
    });
  });

  testReducer();
});
