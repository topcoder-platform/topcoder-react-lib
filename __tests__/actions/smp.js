import { actions } from '../../src';

let originalFetch;

beforeAll(() => {
  originalFetch = global.fetch;
});

afterAll(() => {
  global.fetch = originalFetch;
});

describe('smp.deleteSubmissionDone', () => {
  global.fetch = jest.fn(() => Promise.resolve());

  const a = actions.smp.deleteSubmissionDone('Token V3', 'submissionId');

  test('has expected type', () => {
    expect(a.type).toBe('SMP/DELETE_SUBMISSION_DONE');
  });

  test('Calls the correct endpoint', () => {
    expect(global.fetch).toHaveBeenCalledWith('https://api.topcoder-dev.com/v3/submissions/submissionId', {
      headers: {
        Authorization: 'Bearer Token V3',
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });
  });

  test('payload be submissionId', () =>
    a.payload.then(res => expect(res).toEqual('submissionId')));
});

describe('smp.downloadSubmission', () => {
  test('does not throw', () => {
    expect(() =>
      actions.smp.downloadSubmission({}, 'design', '12345')).not.toThrow();
  });
});
