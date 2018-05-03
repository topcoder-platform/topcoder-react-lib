/* global jest */
require('topcoder-react-utils/config/jest/setup');

jest.setMock('tc-accounts', {
  decodeToken: token => (token ? {
    handle: 'username12345',
    userId: '12345',
  } : undefined),
});
