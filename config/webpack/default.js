module.exports = {
  // Don't include the dependencies to keep built bundle small,
  // they will be provided by the app using this lib
  externals: [
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
};
