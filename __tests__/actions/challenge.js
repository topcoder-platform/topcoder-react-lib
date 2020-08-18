import { actions } from '../../src';

jest.mock('../../src/services/challenges');

test('challenge.fetchChallengeInit', () => {
  expect(actions.challenge.getDetailsInit(123456789)).toMatchSnapshot();
});

test('challenge.fetchSubmissionsInit', () => {
  expect(actions.challenge.getSubmissionsInit(123456789)).toMatchSnapshot();
});


test('challenge.getDetailsDone', () => {
  expect(actions.challenge.getDetailsDone(123456789)).toMatchSnapshot();
});

test('challenge.fetchSubmissionsDone', () => {
  expect(actions.challenge.getSubmissionsDone(123456789, {})).toMatchSnapshot();
});

test('challenge.getActiveChallengesCountInit', () => {
  expect(actions.challenge.getActiveChallengesCountInit()).toMatchSnapshot();
});

test('challenge.getActiveChallengesCountDone', async () => {
  expect(actions.challenge.getActiveChallengesCountDone('handle', 'tokenV3')).toMatchSnapshot();
});
