import { actions } from '../../src';

test('smp.deleteSubmissionDone', () => {
  expect(actions.smp.deleteSubmissionDone('Token V3', 'submissionId'))
    .toMatchSnapshot();
});

describe('smp.downloadSubmission', () => {
  test('does not throw', () => {
    expect(() => actions.smp.downloadSubmission({}, 'design', '12345')).not.toThrow();
  });
});
