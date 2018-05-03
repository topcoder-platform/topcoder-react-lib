const webpackMerge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies

const configFactory
  = require('topcoder-react-utils/config/webpack/lib-development');
const path = require('path');
const defaultConfig = require('./default');

const standardConfig = configFactory({
  context: path.resolve(__dirname, '../..'),
  entry: './src',
  library: 'topcoder-react-lib',
});

module.exports = webpackMerge.smart(standardConfig, defaultConfig);
