import { redux } from 'topcoder-react-utils';

import * as challengeService from 'services/challenges';
import actions from 'actions/challenge-listing';
import * as challenges from './mock-challenges.json';

// Mock services
const mockChallengeService = {
  getChallenges: jest.fn(
    (filter, param) => {
      const meta = {
        allChallengesCount: 10,
        myChallengesCount: 5,
        ongoingChallengesCount: 5,
        openChallengesCount: 5,
        totalCount: 10,
      };
      let c = challenges;
      if (param.offset > challenges.length - 1) {
        c = [];
      }
      const res = {
        challenges: c,
        meta,
      };
      Promise.resolve(res);
    },
  ),

};
challengeService.getService = jest.fn().mockReturnValue(mockChallengeService);

test('Module exports', () => expect(actions).toMatchSnapshot());

test('challengeListing.getAllActiveChallengesInit', async () => {
  const actionResult = actions.challengeListing.getAllActiveChallengesInit();
  expect(actionResult).toMatchSnapshot();
});

test('challengeListing.getRestActiveChallengesInit', async () => {
  const actionResult = actions.challengeListing.getRestActiveChallengesInit();
  expect(actionResult).toMatchSnapshot();
});

test('challengeListing.getPastChallengesInit', async () => {
  const actionResult = actions.challengeListing.getPastChallengesInit();
  expect(actionResult).toMatchSnapshot();
});

test('challengeListing.getActiveChallengesInit', async () => {
  const actionResult = actions.challengeListing.getActiveChallengesInit();
  expect(actionResult).toMatchSnapshot();
});

test('challengeList.getActiveChallengesDone', async () => {
  const actionResult = await redux.resolveAction(
    actions.challengeListing.getActiveChallengesDone('12345', 0, {}, null, {}),
  );
  expect(actionResult).toMatchSnapshot();
});
