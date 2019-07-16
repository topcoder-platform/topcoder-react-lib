# Topcoder React Lib
![Dev Build Status](https://img.shields.io/circleci/project/github/topcoder-platform/topcoder-react-lib/develop.svg?label=develop)
![Master Build Status](https://img.shields.io/circleci/project/github/topcoder-platform/topcoder-react-lib/master.svg?label=master)
![Latest NPM Release](https://img.shields.io/npm/v/topcoder-react-lib.svg)
![NPM Downloads](https://img.shields.io/npm/dm/topcoder-react-lib.svg)

The [Topcoder](https://www.topcoder.com) lib for internal ReactJS projects.

### Configuration for AV-Scan scorer review type ID

Change the property in `AV_SCAN_SCORER_REVIEW_TYPE_ID` in config.

### Development
```shell
# Install dependencies
npm install

# Run test & build
npm test
npm run build

# Go to other project which depends on the topcoder-react-lib, config its package.json so 
# that the 'topcoder-react-lib' points to the local foler path of topcoder-react-lib:
#
# "dependencies": {
#   "topcoder-react-lib": "<local-path-to-topcoder-react-lib>",
#   ......
# }
#
```

### License
UNLICENSED &mdash; for internal Topcoder projects only.
