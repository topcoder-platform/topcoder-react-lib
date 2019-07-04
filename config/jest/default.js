const config = require('topcoder-react-utils/config/jest/default');
const nodeConfig = require('config');

module.exports = {
  ...config,
  globals: {
    CONFIG: nodeConfig,
  },
};
