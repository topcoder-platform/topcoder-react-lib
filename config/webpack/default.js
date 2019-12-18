// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = {
  node: {
    tls: 'empty',
    fs: 'empty',
    net: 'empty',
  },
  // Don't include the dependencies to keep built bundle small,
  // they will be provided by the app using this lib
  externals: [
    'config',
    'qs',
    'lodash',
    'le_node',
    'moment',
    'moment-timezone',
    'moment-duration-format',
    'react',
    'react-dom',
    'redux',
    'redux-actions',
    'isomorphic-fetch',
    'tc-accounts',
    'to-capital-case',
    'topcoder-react-utils',
  ],
  node: {
    fs: 'empty',
  },
};
