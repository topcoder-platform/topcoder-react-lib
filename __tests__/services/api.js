jest.useFakeTimers();
jest.mock(
  'isomorphic-fetch',
  () => jest.fn((url, ops) => Promise.resolve({ url, ops })),
);

jest.mock(
  'cross-fetch',
  () => jest.fn((url, ops) => Promise.resolve({ url, ops })),
);

const { config } = require('topcoder-react-utils');
const { getApi } = require('../../src/services/api');

describe('Test api', () => {
  const ENDPOINT = '/ENDPOINT';
  const MOCK_OPS = { OPTIONS: 'OPTIONS' };

  function testRes(res, base, token, method, body, mockOps) {
    const ops = {
      headers: {
        'Content-Type': 'application/json',
      },
      OPTIONS: mockOps ? 'OPTIONS' : undefined,
    };
    if (body) {
      ops.body = body;
    }
    if (method) {
      ops.method = method;
    }
    if (token) {
      ops.headers.Authorization = `Bearer ${token}`;
    }
    expect(res).toEqual({
      url: `${base}${ENDPOINT}`,
      ops,
    });
  }

  function testApi(api, base, token) {
    const request = api.fetch(ENDPOINT, MOCK_OPS);
    jest.runAllTimers();
    return request.then((res) => {
      testRes(res, base, token, undefined, undefined, true);
      const req = api.delete(ENDPOINT);
      jest.runAllTimers();
      return req;
    })
      .then((res) => {
        testRes(res, base, token, 'DELETE');
        const req = api.get(ENDPOINT);
        jest.runAllTimers();
        return req;
      })
      .then((res) => {
        testRes(res, base, token);
        const req = api.post(ENDPOINT, 'BODY');
        jest.runAllTimers();
        return req;
      })
      .then((res) => {
        testRes(res, base, token, 'POST', 'BODY');
        const req = api.postJson(ENDPOINT, { BODY: 'BODY' });
        jest.runAllTimers();
        return req;
      })
      .then((res) => {
        testRes(res, base, token, 'POST', JSON.stringify({ BODY: 'BODY' }));
        const req = api.put(ENDPOINT, 'BODY');
        jest.runAllTimers();
        return req;
      })
      .then((res) => {
        testRes(res, base, token, 'PUT', 'BODY');
        const req = api.putJson(ENDPOINT, { BODY: 'BODY' });
        jest.runAllTimers();
        return req;
      })
      .then((res) => {
        testRes(res, base, token, 'PUT', JSON.stringify({ BODY: 'BODY' }));
      });
  }

  let api;
  test('API v2 service works without auth token', () => {
    api = getApi('V2');
    return testApi(api, config.API.V2);
  });

  test('API v2 service works with auth token', () => {
    api = getApi('V2', 'TOKEN');
    return testApi(api, config.API.V2, 'TOKEN');
  });

  test(
    'API v2 service from the previous call is re-used, if token is the same',
    () => expect(getApi('V2', 'TOKEN')).toBe(api),
  );

  test('New API v2 service is created if token is new', () => {
    const api2 = getApi('V2', 'TOKEN2');
    expect(api2).not.toBe(api);
    return testApi(api2, config.API.V2, 'TOKEN2');
  });

  test('API v3 service works without auth token', () => {
    api = getApi('V3');
    return testApi(api, config.API.V3);
  });

  test('API v3 service works with auth token', () => {
    api = getApi('V3', 'TOKEN');
    return testApi(api, config.API.V3, 'TOKEN');
  });

  test(
    'API v3 service from the previous call is re-used, if token is the same',
    () => expect(getApi('V3', 'TOKEN')).toBe(api),
  );

  test('New API v3 service is created if token is new', () => {
    const api2 = getApi('V3', 'TOKEN2');
    expect(api2).not.toBe(api);
    return testApi(api2, config.API.V3, 'TOKEN2');
  });
});
