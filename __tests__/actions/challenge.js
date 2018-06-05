import { redux } from 'topcoder-react-utils';
import { actions } from '../../src';

jest.mock('../../src/services/challenges');

const mockFetch = resolvesTo => jest.fn(() =>
  Promise.resolve({ json: () => resolvesTo }));

let originalFetch;

beforeAll(() => {
  originalFetch = global.fetch;
});

afterAll(() => {
  global.fetch = originalFetch;
});

describe('challenge.fetchChallengeInit', () => {
  const a = actions.challenge.getDetailsInit(12345);

  test('has expected type', () => {
    expect(a.type).toBe('CHALLENGE/GET_DETAILS_INIT');
  });

  test('payload is the challenge ID, converted to string, if necessary', () =>
    expect(a.payload).toBe('12345'));
});

describe('challenge.fetchSubmissionsInit', () => {
  const a = actions.challenge.getSubmissionsInit(12345);

  test('has expected type', () => {
    expect(a.type).toBe('CHALLENGE/GET_SUBMISSIONS_INIT');
  });

  test('payload is challengeId', () =>
    expect(a.payload).toBe('12345'));
});

describe('challenge.getDetailsDone', () => {
  global.fetch = mockFetch({ result: { content: ['DUMMY DATA'] } });

  const a = actions.challenge.getDetailsDone(12345);

  test('has expected type', () => {
    expect(a.type).toBe('CHALLENGE/GET_DETAILS_DONE');
  });

  const mockChallenge =
    require('../../src/services/__mocks__/data/challenge-normalized.json');

  test('payload is a promise which resolves to the expected object', () =>
    a.payload.then((res) => {
      res.communities = Array.from(res.communities);
      expect(res).toEqual(mockChallenge);
    }));
});

describe('challenge.fetchSubmissionsDone', () => {
  global.fetch = mockFetch({
    challengeId: '12345',
    submissions: 'DUMMY DATA',
  });

  const a = actions.challenge.getSubmissionsDone(12345, {});

  test('has expected type', () => {
    expect(a.type).toBe('CHALLENGE/GET_SUBMISSIONS_DONE');
  });

  test('payload is a promise which resolves to the expected object', () =>
    a.payload.then(res => expect(res).toEqual({
      challengeId: '12345',
      submissions: 'DUMMY DATA',
    })));
});

test('challenge.getActiveChallengesCountInit', () => {
  const actionResult = actions.challenge.getActiveChallengesCountInit();
  expect(actionResult).toMatchSnapshot();
});

test('challenge.getActiveChallengesCountDone', async () => {
  const actionResult =
    await redux.resolveAction(actions.challenge.getActiveChallengesCountDone('handle', 'tokenV3'));
  expect(actionResult).toMatchSnapshot();
});
