(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("topcoder-react-utils"), require("lodash"), require("redux-actions"), require("isomorphic-fetch"), require("moment"), require("moment-duration-format"), require("qs"), require("tc-accounts"), require("le_node"));
	else if(typeof define === 'function' && define.amd)
		define(["topcoder-react-utils", "lodash", "redux-actions", "isomorphic-fetch", "moment", "moment-duration-format", "qs", "tc-accounts", "le_node"], factory);
	else if(typeof exports === 'object')
		exports["topcoder-react-lib"] = factory(require("topcoder-react-utils"), require("lodash"), require("redux-actions"), require("isomorphic-fetch"), require("moment"), require("moment-duration-format"), require("qs"), require("tc-accounts"), require("le_node"));
	else
		root["topcoder-react-lib"] = factory(root["topcoder-react-utils"], root["lodash"], root["redux-actions"], root["isomorphic-fetch"], root["moment"], root["moment-duration-format"], root["qs"], root["tc-accounts"], root["le_node"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_96__, __WEBPACK_EXTERNAL_MODULE_68__, __WEBPACK_EXTERNAL_MODULE_167__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_185__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(119);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(3);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(22);
var has = __webpack_require__(24);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(54)('wks');
var uid = __webpack_require__(41);
var Symbol = __webpack_require__(9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(95);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(143);

var _keys2 = _interopRequireDefault(_keys);

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(29);

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getApiV2 = getApiV2;
exports.getApiV3 = getApiV3;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(96);

var _topcoderReactUtils = __webpack_require__(7);

var _time = __webpack_require__(97);

var _errors = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* The minimal delay [ms] between API calls. To avoid problems with the requests
 * rate limits configured in Topcoder APIs, we throttle requests rate at the
 * client side, and at server-side, in dev mode (which is meant to be used for
 * local development. */
var MIN_API_CALL_DELAY = _topcoderReactUtils.isomorphy.isDevBuild() ? 1000 : 200; /* global fetch */
/**
 * @module "services.api"
 * @desc This module provides a service for conventient access to Topcoder APIs.
 */

var API_THROTTLING = true;

var lastApiCallTimestamp = Date.now();

/**
 * @static
 * @member default
 * @desc The default export from the module is
 *  {@link module:services.api~Api} class.
 */

/**
 * API service object. It is reused for both Topcoder API v2 and v3,
 * as in these cases we are fine with the same interface, and the only
 * thing we need to be different is the base URL and auth token to use.
 */

var Api = function () {
  /**
   * Creates a new Api object.
   * @param {String} base Base URL of the API.
   * @param {String} token Optional. Authorization token.
   */
  function Api(base, token) {
    (0, _classCallCheck3.default)(this, Api);

    this.private = {
      base: base,
      token: token
    };
  }

  /**
   * Sends HTTP request to the specified API endpoint. This method is just
   * a convenient wrapper around isomorphic fetch(..):
   *
   *  - If API service has auth token, Authorization header is automatically
   *    added to the request;
   *
   *  - If no Content-Type header set in options, it is automatically set to
   *    "application/json". In case you want to avoid it, pass null into
   *    Content-Type header option.
   *
   * For additional details see https://github.github.io/fetch/
   * @param {String} enpoint Should start with slash, like /endpoint.
   * @param {Object} options Optional. Fetch options.
   * @return {Promise} It resolves to the HTTP response object. To get the
   *  actual data you probably want to call .json() method of that object.
   *  Mind that this promise rejects only on network errors. In case of
   *  HTTP errors (404, etc.) the promise will be resolved successfully,
   *  and you should check .status or .ok fields of the response object
   *  to find out the response status.
   */


  (0, _createClass3.default)(Api, [{
    key: 'fetch',
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(endpoint) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _private, base, token, headers, now;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _private = this.private, base = _private.base, token = _private.token;
                headers = options.headers ? _lodash2.default.clone(options.headers) : {};

                if (token) headers.Authorization = 'Bearer ' + token;

                _context.t0 = headers['Content-Type'];
                _context.next = _context.t0 === null ? 6 : _context.t0 === undefined ? 8 : 10;
                break;

              case 6:
                delete headers['Content-Type'];
                return _context.abrupt('break', 10);

              case 8:
                headers['Content-Type'] = 'application/json';
                return _context.abrupt('break', 10);

              case 10:
                if (!(API_THROTTLING && (_topcoderReactUtils.isomorphy.isClientSide() || _topcoderReactUtils.isomorphy.isDevBuild()))) {
                  _context.next = 19;
                  break;
                }

                now = Date.now();

                lastApiCallTimestamp += MIN_API_CALL_DELAY;

                if (!(lastApiCallTimestamp > now)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 16;
                return (0, _time.delay)(lastApiCallTimestamp - now);

              case 16:
                _context.next = 19;
                break;

              case 18:
                lastApiCallTimestamp = now;

              case 19:
                return _context.abrupt('return', fetch('' + base + endpoint, (0, _extends3.default)({}, options, {
                  headers: headers
                })).catch(function (e) {
                  (0, _errors.setErrorIcon)(_errors.ERROR_ICON_TYPES.NETWORK, '' + base + endpoint, e.message);
                  throw e;
                }));

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }())

    /**
     * Sends DELETE request to the specified endpoint.
     * @param {String} endpoint
     * @param {Blob|BufferSource|FormData|String} body
     * @return {Promise}
     */

  }, {
    key: 'delete',
    value: function _delete(endpoint, body) {
      return this.fetch(endpoint, {
        body: body,
        method: 'DELETE'
      });
    }

    /**
     * Sends GET request to the specified endpoint.
     * @param {String} endpoint
     * @return {Promise}
     */

  }, {
    key: 'get',
    value: function get(endpoint) {
      return this.fetch(endpoint);
    }

    /**
     * Sends POST request to the specified endpoint.
     * @param {String} endpoint
     * @param {Blob|BufferSource|FormData|String} body
     * @return {Promise}
     */

  }, {
    key: 'post',
    value: function post(endpoint, body) {
      return this.fetch(endpoint, {
        body: body,
        method: 'POST'
      });
    }

    /**
     * Sends POST request to the specified endpoint, with JSON payload.
     * @param {String} endpoint
     * @param {JSON} json
     * @return {Promise}
     */

  }, {
    key: 'postJson',
    value: function postJson(endpoint, json) {
      return this.post(endpoint, (0, _stringify2.default)(json));
    }

    /**
     * Sends PUT request to the specified endpoint.
     * @param {String} endpoint
     * @param {Blob|BufferSource|FormData|String} body
     * @return {Promise}
     */

  }, {
    key: 'put',
    value: function put(endpoint, body) {
      return this.fetch(endpoint, {
        body: body,
        method: 'PUT'
      });
    }

    /**
     * Sends PUT request to the specified endpoint.
     * @param {String} endpoint
     * @param {JSON} json
     * @return {Promise}
     */

  }, {
    key: 'putJson',
    value: function putJson(endpoint, json) {
      return this.put(endpoint, (0, _stringify2.default)(json));
    }

    /**
     * Sends PATCH request to the specified endpoint.
     * @param {String} endpoint
     * @param {Blob|BufferSource|FormData|String} body
     * @return {Promise}
     */

  }, {
    key: 'patch',
    value: function patch(endpoint, body) {
      return this.fetch(endpoint, {
        body: body,
        method: 'PATCH'
      });
    }

    /**
     * Sends PATCH request to the specified endpoint.
     * @param {String} endpoint
     * @param {JSON} json
     * @return {Promise}
     */

  }, {
    key: 'patchJson',
    value: function patchJson(endpoint, json) {
      return this.patch(endpoint, (0, _stringify2.default)(json));
    }

    /**
     * Upload with progress
     * @param {String} endpoint
     * @param {Object} body and headers
     * @param {Function} callback handler for update progress only works for client side for now
     * @return {Promise}
     */

  }, {
    key: 'upload',
    value: function upload(endpoint, options, onProgress) {
      var _private2 = this.private,
          base = _private2.base,
          token = _private2.token;

      var headers = options.headers ? _lodash2.default.clone(options.headers) : {};
      if (token) headers.Authorization = 'Bearer ' + token;
      if (_topcoderReactUtils.isomorphy.isClientSide()) {
        return new _promise2.default(function (res, rej) {
          var xhr = new XMLHttpRequest(); //eslint-disable-line
          xhr.open(options.method, '' + base + endpoint);
          (0, _keys2.default)(headers).forEach(function (key) {
            if (headers[key] != null) {
              xhr.setRequestHeader(key, headers[key]);
            }
          });
          xhr.onload = function (e) {
            return res(e.target.responseText);
          };
          xhr.onerror = rej;
          if (xhr.upload && onProgress) {
            xhr.upload.onprogress = function (evt) {
              if (evt.lengthComputable) onProgress(evt.loaded / evt.total);
            };
          }
          xhr.send(options.body);
        });
      }
      return this.fetch(endpoint, options);
    }
  }]);
  return Api;
}();

exports.default = Api;

/*
 * Topcoder API v2.
 */

var lastApiV2 = null;
/**
 * Returns a new or existing Api object for Topcoder API v2.
 * @param {String} token Optional. Auth token for Topcoder API v2.
 * @return {Api} API v2 service object.
 */
function getApiV2(token) {
  if (!lastApiV2 || lastApiV2.private.token !== token) {
    lastApiV2 = new Api(_topcoderReactUtils.config.API.V2, token);
  }
  return lastApiV2;
}

/*
 * Topcoder API v3.
 */

var lastApiV3 = null;
/**
 * Returns a new or existing Api object for Topcoder API v3
 * @param {String} token Optional. Auth token for Topcoder API v3.
 * @return {Api} API v3 service object.
 */
function getApiV3(token) {
  if (!lastApiV3 || lastApiV3.private.token !== token) {
    lastApiV3 = new Api(_topcoderReactUtils.config.API.V3, token);
  }
  return lastApiV3;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(95);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(29);

var _stringify2 = _interopRequireDefault(_stringify);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _topcoderReactUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module logger
 *
 * @desc
 * Isomorphic logger.
 *
 * At the server-side it outputs log messages to the console, and also sends
 * them to the https://logentries.com service (only if LOG_ENTRIES_TOKEN is
 * set).
 *
 * At the front-end side it outputs log messages to the console (only when
 * development build of the frontend is used), and sends them to the
 * https://logentries.com service (both dev and prod build of the frontend
 * send messages to the service, proxying them through the App's server;
 * the proxy will forward them to the service only if LOG_ENTRIES_TOKEN is set).
 *
 * In all case, interface of the logger matches that of the standard JS console.
 *
 * @todo This module does not belong here, it should be moved to
 * `topcoder-react-utils`.
 */
/* eslint-disable global-require */
/* eslint-disable no-console */

var logger = {};

/* global fetch */

_lodash2.default.functions(console).forEach(function (func) {
  logger[func] = _topcoderReactUtils.isomorphy.isDevBuild() || _topcoderReactUtils.isomorphy.isServerSide() ? console[func] : _lodash2.default.noop;
});

var leLogger = void 0;
if (_topcoderReactUtils.isomorphy.isServerSide()) {
  var token = _topcoderReactUtils.config.LOG_ENTRIES_TOKEN;
  if (token) {
    var LeLogger = __webpack_require__(185);
    leLogger = new LeLogger({ token: token });
  }
} else {
  var _log = function _log(type) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    fetch('/community-app-assets/api/logger', {
      body: (0, _stringify2.default)({
        data: rest,
        type: type
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'ApiKey ' + _topcoderReactUtils.config.SERVER_API_KEY
      },
      method: 'POST'
    }).catch(function () {
      /* TODO: Network or server are down. We should msg it to the user somehow
       */
    });
  };
  leLogger = {
    err: function err() {
      for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        rest[_key2] = arguments[_key2];
      }

      return _log.apply(undefined, ['err'].concat(rest));
    },
    info: function info() {
      for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        rest[_key3] = arguments[_key3];
      }

      return _log.apply(undefined, ['info'].concat(rest));
    },
    log: function log() {
      for (var _len4 = arguments.length, rest = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        rest[_key4] = arguments[_key4];
      }

      return _log.apply(undefined, ['log'].concat(rest));
    },
    warning: function warning() {
      for (var _len5 = arguments.length, rest = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        rest[_key5] = arguments[_key5];
      }

      return _log.apply(undefined, ['warn'].concat(rest));
    }
  };
}

if (leLogger) {
  var extend = function extend(base, le) {
    logger[base] = function () {
      for (var _len6 = arguments.length, rest = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        rest[_key6] = arguments[_key6];
      }

      if (_topcoderReactUtils.isomorphy.isDevBuild() || _topcoderReactUtils.isomorphy.isServerSide()) {
        var _console;

        (_console = console)[base].apply(_console, rest);
      }
      var msg = '';
      rest.forEach(function (item) {
        var it = item;
        if (!_lodash2.default.isString(it)) {
          it = (0, _stringify2.default)(it);
          if (!_lodash2.default.isString(it)) it = String(it);
        }
        msg = '' + msg + it + ' ';
      });
      leLogger[le](msg);
    };
  };
  extend('error', 'err');
  extend('info', 'info');
  extend('log', 'log');
  extend('warn', 'warning');
}

exports.default = logger;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(148);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            return step("next", value);
          }, function (err) {
            return step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(77);
var toPrimitive = __webpack_require__(49);
var dP = Object.defineProperty;

exports.f = __webpack_require__(19) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(23)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR_ICON_TYPES = undefined;

var _setImmediate2 = __webpack_require__(168);

var _setImmediate3 = _interopRequireDefault(_setImmediate2);

exports.setErrorsStore = setErrorsStore;
exports.fireErrorMessage = fireErrorMessage;
exports.clearAllErrorIcons = clearAllErrorIcons;
exports.setErrorIcon = setErrorIcon;
exports.clearErrorIcon = clearErrorIcon;

var _topcoderReactUtils = __webpack_require__(7);

var _errors = __webpack_require__(69);

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module errors
 * @desc Utility functions for the standard error handling.
 * @todo They will be moved to `topcoder-react-utils` soon.
 */

var ERROR_ICON_TYPES = exports.ERROR_ICON_TYPES = {
  NETWORK: 'network',
  API: 'api'
};

var store = void 0; // Will be set only when rendering client-side

function setErrorsStore(s) {
  store = s;
}

/**
 * The function behaves similarly to javascript alert()
 * it will show a modal error diaglog with styling until the user clicks OK.
 */
function fireErrorMessage(title, details) {
  if (_topcoderReactUtils.isomorphy.isClientSide() && store) {
    (0, _setImmediate3.default)(function () {
      store.dispatch(_errors2.default.errors.newError(title, details));
    });
  }
}

/**
 * clear all error icons
 */
function clearAllErrorIcons() {
  if (_topcoderReactUtils.isomorphy.isClientSide() && store) {
    (0, _setImmediate3.default)(function () {
      store.dispatch(_errors2.default.errors.clearAllErrorIcons());
    });
  }
}

/**
 * add error message to error icon in bottom left in the screen.
 * @param id  id of error icon type (ERROR_ICON_TYPES.NETWORK or ERROR_ICON_TYPES.API)
 * @param title icon hover title
 * @param message icon hover message
 */
function setErrorIcon(id, title, message) {
  if (_topcoderReactUtils.isomorphy.isClientSide() && store) {
    (0, _setImmediate3.default)(function () {
      store.dispatch(_errors2.default.errors.setErrorIcon(id, title, message));
    });
  }
}

/**
 * clear all error message for an error icon.
 * @param id  id of error icon type to clear
 */
function clearErrorIcon(id) {
  if (_topcoderReactUtils.isomorphy.isClientSide() && store) {
    (0, _setImmediate3.default)(function () {
      store.dispatch(_errors2.default.errors.clearErrorIcon(id));
    });
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(31);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var createDesc = __webpack_require__(32);
module.exports = __webpack_require__(19) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50);
var defined = __webpack_require__(51);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(78);
var enumBugKeys = __webpack_require__(55);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(132)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(57)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiResponsePayloadV3 = exports.REVIEW_OPPORTUNITY_TYPES = exports.COMPETITION_TRACKS = undefined;

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Gets payload from a standard success response from TC API v3; or throws
 * an error in case of a failure response.
 * @param {Object} res
 * @return {Promise} Resolves to the payload.
 */
var getApiResponsePayloadV3 = exports.getApiResponsePayloadV3 = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(res) {
    var x;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (res.ok) {
              _context.next = 2;
              break;
            }

            throw new Error(res.statusText);

          case 2:
            _context.next = 4;
            return res.json();

          case 4:
            x = _context.sent.result;

            if (x.success) {
              _context.next = 7;
              break;
            }

            throw new Error(x.content);

          case 7:
            return _context.abrupt('return', x.content);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getApiResponsePayloadV3(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module tc
 * @desc Collection of small Topcoder-related functions.
 * @todo More TC-related utils should be moved here from Community-app.
 */

/**
 * Codes of the Topcoder communities.
 */
/* TODO: These are originally motivated by Topcoder API v2. Topcoder API v3
 * uses upper-case literals to encode the tracks. At some point, we should
 * update it in this code as well! */
var COMPETITION_TRACKS = exports.COMPETITION_TRACKS = {
  DATA_SCIENCE: 'data_science',
  DESIGN: 'design',
  DEVELOP: 'develop'
};

/**
 * Review Opportunity types
 */
var REVIEW_OPPORTUNITY_TYPES = exports.REVIEW_OPPORTUNITY_TYPES = {
  'Contest Review': 'Review',
  'Spec Review': 'Specification Review',
  'Iterative Review': 'Iterative Review'
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(51);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
var global = __webpack_require__(9);
var hide = __webpack_require__(22);
var Iterators = __webpack_require__(27);
var TO_STRING_TAG = __webpack_require__(6)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(16).f;
var has = __webpack_require__(24);
var TAG = __webpack_require__(6)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var call = __webpack_require__(82);
var isArrayIter = __webpack_require__(83);
var anObject = __webpack_require__(18);
var toLength = __webpack_require__(40);
var getIterFn = __webpack_require__(58);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(52);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(125);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(134);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(18);
var dPs = __webpack_require__(130);
var enumBugKeys = __webpack_require__(55);
var IE_PROTO = __webpack_require__(53)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(48)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(81).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(33);
var TAG = __webpack_require__(6)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ORDER_BY = undefined;

var _stringify = __webpack_require__(29);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _set = __webpack_require__(71);

var _set2 = _interopRequireDefault(_set);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

/**
 * Helper method that checks for HTTP error response and throws Error in this case.
 * @param {Object} res HTTP response object
 * @return {Object} API JSON response object
 * @private
 */
var checkError = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(res) {
    var jsonRes;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (res.ok) {
              _context.next = 3;
              break;
            }

            if (res.status >= 500) {
              (0, _errors.setErrorIcon)(_errors.ERROR_ICON_TYPES.API, '/challenges', res.statusText);
            }
            throw new Error(res.statusText);

          case 3:
            _context.next = 5;
            return res.json();

          case 5:
            jsonRes = _context.sent.result;

            if (!(jsonRes.status !== 200)) {
              _context.next = 8;
              break;
            }

            throw new Error(jsonRes.content);

          case 8:
            return _context.abrupt('return', jsonRes);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function checkError(_x) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * Challenge service.
 */


exports.normalizeChallengeDetails = normalizeChallengeDetails;
exports.normalizeChallenge = normalizeChallenge;
exports.normalizeMarathonMatch = normalizeMarathonMatch;
exports.getService = getService;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = __webpack_require__(68);

var _moment2 = _interopRequireDefault(_moment);

var _qs = __webpack_require__(39);

var _qs2 = _interopRequireDefault(_qs);

var _tcAccounts = __webpack_require__(46);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _errors = __webpack_require__(20);

var _tc = __webpack_require__(30);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module "services.challenges"
 * @desc This module provides a service for convenient manipulation with
 *  Topcoder challenges via TC API.
 */

var ORDER_BY = exports.ORDER_BY = {
  SUBMISSION_END_DATE: 'submissionEndDate'
};

/**
 * Normalize name convention for subtrack
 * @param {String} subTrack Challenge `subTrack`.
 * @returns {String} Normalized subtrack ID.
 */
function normalizeNameConventionForSubtrack(subTrack) {
  switch (subTrack) {
    case 'Copilot Posting':
      return 'COPILOT_POSTING';
    case 'Web Design':
      return 'WEB_DESIGNS';
    case 'Logo Design':
      return 'LOGO_DESIGN';
    case 'Banners/Icons':
      return 'BANNERS_OR_ICONS';
    case 'Application Front-End Design':
      return 'APPLICATION_FRONT_END_DESIGN';
    case 'Widget or Mobile Screen Design':
      return 'WIDGET_OR_MOBILE_SCREEN_DESIGN';
    case 'Front-End Flash':
      return 'FRONT_END_FLASH';
    case 'Print/Presentation':
      return 'PRINT_OR_PRESENTATION';
    case 'Wireframes':
      return 'WIREFRAMES';
    case 'Idea Generation':
      return 'IDEA_GENERATION';
    case 'Studio Other':
      return 'STUDIO_OTHER';
    case 'Conceptualization':
      return 'CONCEPTUALIZATION';
    case 'Specification':
      return 'SPECIFICATION';
    case 'Architecture':
      return 'ARCHITECTURE';
    case 'Design':
      return 'DESIGN';
    case 'Development':
      return 'DEVELOPMENT';
    case 'RIA Build Competition':
      return 'RIA_BUILD_COMPETITION';
    case 'UI Prototype Competition':
      return 'UI_PROTOTYPE_COMPETITION';
    case 'Assembly Competition':
      return 'ASSEMBLY_COMPETITION';
    case 'Test Suites':
      return 'TEST_SUITES';
    case 'Test Scenarios':
      return 'TEST_SCENARIOS';
    case 'Content Creation':
      return 'CONTENT_CREATION';
    case 'Bug Hunt':
      return 'BUG_HUNT';
    case 'Design First2Finish':
      return 'DESIGN_FIRST_2_FINISH';
    case 'Code':
      return 'CODE';
    case 'First2Finish':
      return 'FIRST_2_FINISH';
    case 'Marathon Match':
    case 'DEVELOP_MARATHON_MATCH':
      return 'MARATHON_MATCH';
    default:
      return subTrack;
  }
}

/**
 * Normalizes a regular challenge details object received from the backend APIs.
 * NOTE: It is possible, that this normalization is not necessary after we
 * have moved to Topcoder API v3, but it is kept for now to minimize a risk of
 * breaking anything.
 * @todo Why this one is exported? It should be only used internally!
 * @param {Object} v3 Challenge object received from the /v3/challenges/{id}
 *  endpoint.
 * @param {Object} v3Filtered Challenge object received from the
 *  /v3/challenges?filter=id={id} endpoint.
 * @param {Object} v3User Challenge object received from the
 *  /v3//members/{username}/challenges?filter=id={id} endpoint.
 * If action was fired for authenticated visitor, v3_user will contain
 * details fetched specifically for the user (thus may include additional
 * data comparing to the standard API v3 response for the challenge details,
 * stored in v3_filtered).
 * @param {Object} v2 Challenge object received from the /v2/{type}/challenges/{id} endpoint.
 * @param {String} username Optional.
 * @return {Object} Normalized challenge object.
 */
function normalizeChallengeDetails(v3, v3Filtered, v3User, username) {
  // Normalize exising data to make it consistent with the rest of the code
  var challenge = (0, _extends3.default)({}, v3, {

    id: v3.challengeId,
    reliabilityBonus: v3Filtered.reliabilityBonus || 0,
    status: (v3.currentStatus || '').toUpperCase(),

    name: v3.challengeName,
    projectId: Number(v3.projectId),
    forumId: Number(v3.forumId),
    introduction: v3.introduction || '',
    detailedRequirements: v3.detailedRequirements,
    finalSubmissionGuidelines: v3.finalSubmissionGuidelines,
    screeningScorecardId: Number(v3.screeningScorecardId),
    reviewScorecardId: Number(v3.reviewScorecardId),
    numberOfCheckpointsPrizes: v3.numberOfCheckpointsPrizes,
    topCheckPointPrize: v3.topCheckPointPrize,
    submissionsViewable: v3.submissionsViewable || 'false',
    reviewType: v3.reviewType,
    allowStockArt: v3.allowStockArt === 'true',
    fileTypes: v3.filetypes || [],
    environment: v3.environment,
    codeRepo: v3.codeRepo,
    forumLink: v3.forumLink,
    submissionLimit: Number(v3.submissionLimit) || 0,
    drPoints: v3.digitalRunPoints,
    directUrl: v3.directUrl,
    technologies: _lodash2.default.isArray(v3.technology) ? v3.technology.join(', ') : '',
    platforms: _lodash2.default.isArray(v3.platforms) ? v3.platforms.join(', ') : '',
    prizes: v3.prize || [],
    events: v3.event ? [{
      eventName: v3.event.eventShortDesc,
      eventId: v3.event.id,
      description: v3.event.eventDescription
    }] : [],
    mainEvent: v3.event ? {
      eventName: v3.event.eventShortDesc,
      eventId: v3.event.id,
      description: v3.event.eventDescription
    } : {},
    terms: v3.terms,
    submissions: v3.submissions,
    checkpoints: v3.checkpoints,
    documents: v3.documents || [],
    numRegistrants: v3.numberOfRegistrants,
    numberOfCheckpointSubmissions: v3.numberOfCheckpointSubmissions
  });

  // Fill missing data from v3_filtered
  if (v3Filtered) {
    var groups = {};
    if (v3Filtered.groupIds) {
      v3Filtered.groupIds.forEach(function (id) {
        groups[id] = true;
      });
    }

    // Normalize name convention for subtrack
    var newsubTrack = normalizeNameConventionForSubtrack(v3Filtered.subTrack);
    _lodash2.default.defaults(challenge, {
      componentId: v3Filtered.componentId,
      contestId: v3Filtered.contestId,

      track: newsubTrack === 'MARATHON_MATCH' ? 'DATA_SCIENCE' : v3Filtered.track,
      subTrack: newsubTrack,
      submissionEndDate: v3Filtered.submissionEndDate, // Dates are not correct in v3
      submissionEndTimestamp: v3Filtered.submissionEndDate, // Dates are not correct in v3

      /* Taking phases from v3_filtered, because dates are not correct in v3 */
      allPhases: v3Filtered.allPhases || [],

      /* Taking phases from v3_filtered, because dates are not correct in v3 */
      currentPhases: v3Filtered.currentPhases || [],

      /* Taking winners from v3_filtered, because winners are returned empty in v3 */
      winners: v3Filtered.winners || [],

      /* v3 returns incorrect value for numberOfSubmissions for some reason */
      numSubmissions: v3Filtered.numSubmissions,
      groups: groups
    });
  }

  // Fill missing data from v3_user
  if (v3User) {
    _lodash2.default.defaults(challenge, {
      userDetails: v3User.userDetails
    });
  }

  // Fill some derived data
  var registrationOpen = _lodash2.default.some(challenge.allPhases, function (phase) {
    return phase.phaseType === 'Registration' && phase.phaseStatus === 'Open';
  }) ? 'Yes' : 'No';
  _lodash2.default.defaults(challenge, {
    communities: new _set2.default([_tc.COMPETITION_TRACKS[challenge.track]]),
    registrationOpen: registrationOpen,
    users: username ? (0, _defineProperty3.default)({}, username, true) : {}
  });

  // A hot fix to show submissions for on-going challenges
  if (!challenge.submissions || !challenge.submissions.length) {
    challenge.submissions = v3.registrants.filter(function (r) {
      return r.submissionDate || '';
    }).sort(function (a, b) {
      return (a.submissionDate || '').localeCompare(b.submissionDate || '');
    });
  }

  return challenge;
}

/**
 * Normalizes a regular challenge object received from the backend.
 * NOTE: This function is copied from the existing code in the challenge listing
 * component. It is possible, that this normalization is not necessary after we
 * have moved to Topcoder API v3, but it is kept for now to minimize a risk of
 * breaking anything.
 * @todo Should be used only internally!
 * @param {Object} challenge Challenge object received from the backend.
 * @param {String} username Optional.
 */
function normalizeChallenge(challenge, username) {
  var registrationOpen = challenge.allPhases.filter(function (d) {
    return d.phaseType === 'Registration';
  })[0].phaseStatus === 'Open' ? 'Yes' : 'No';
  var groups = {};
  if (challenge.groupIds) {
    challenge.groupIds.forEach(function (id) {
      groups[id] = true;
    });
  }

  // Normalize name convention for subtrack
  var newsubTrack = normalizeNameConventionForSubtrack(challenge.subTrack);
  _lodash2.default.set(challenge, 'subTrack', newsubTrack);
  _lodash2.default.set(challenge, 'track', newsubTrack === 'MARATHON_MATCH' ? 'DATA_SCIENCE' : challenge.track);
  _lodash2.default.defaults(challenge, {
    communities: new _set2.default([_tc.COMPETITION_TRACKS[challenge.track]]),
    groups: groups,
    platforms: '',
    registrationOpen: registrationOpen,
    submissionEndTimestamp: challenge.submissionEndDate,
    users: username ? (0, _defineProperty3.default)({}, username, true) : {}
  });
  /* eslint-disable no-param-reassign */
  if (!challenge.prizes) challenge.prizes = challenge.prize || [];
  if (!challenge.totalPrize) {
    challenge.totalPrize = challenge.prizes.reduce(function (sum, x) {
      return sum + x;
    }, 0);
  }
  if (!challenge.technologies) challenge.technologies = '';
  /* eslint-enable no-param-reassign */
}

/**
 * Normalizes a marathon match challenge object received from the backend.
 * NOTE: This function is copied from the existing code in the challenge listing
 * component. It is possible, that this normalization is not necessary after we
 * have moved to Topcoder API v3, but it is kept for now to minimize a risk of
 * breaking anything.
 * @param {Object} challenge MM challenge object received from the backend.
 * @param {String} username Optional.
 * @return {Object} Normalized challenge.
 */
function normalizeMarathonMatch(challenge, username) {
  var startDate = _lodash2.default.get(challenge, 'rounds[0].codingStartAt') || challenge.startDate;
  var endDate = _lodash2.default.get(challenge, 'rounds[0].codingEndAt') || challenge.endDate;
  var endTimestamp = new Date(endDate).getTime();
  var status = endTimestamp > Date.now() ? 'Open' : 'Close';
  var allPhases = [{
    actualStartTime: startDate,
    challengeId: challenge.id,
    phaseType: 'Registration',
    phaseStatus: status,
    scheduledEndTime: endDate
  }, {
    actualStartTime: startDate,
    challengeId: challenge.id,
    phaseType: 'Submission',
    phaseStatus: status,
    scheduledEndTime: endDate
  }];
  var groups = {};
  if (challenge.groupIds) {
    challenge.groupIds.forEach(function (id) {
      groups[id] = true;
    });
  }
  _lodash2.default.defaults(challenge, {
    challengeCommunity: 'Data',
    challengeType: 'Marathon',
    allPhases: allPhases,
    currentPhases: allPhases.filter(function (phase) {
      return phase.phaseStatus === 'Open';
    }),
    communities: new _set2.default([_tc.COMPETITION_TRACKS.DATA_SCIENCE]),
    currentPhaseName: endTimestamp > Date.now() ? 'Registration' : '',
    groups: groups,
    numRegistrants: challenge.userIds ? challenge.userIds.length : 0,
    numSubmissions: 0, // currently challenge doesn't return submission value
    platforms: '',
    prizes: [0],
    registrationOpen: endTimestamp > Date.now() && challenge.status !== 'PAST' ? 'Yes' : 'No',
    registrationStartDate: challenge.startDate,
    submissionEndDate: challenge.endDate,
    submissionEndTimestamp: endTimestamp,
    technologies: '',
    totalPrize: 0,
    track: 'DATA_SCIENCE',
    status: endTimestamp > Date.now() ? 'ACTIVE' : 'COMPLETED',
    subTrack: 'MARATHON_MATCH',
    users: username ? { username: true } : {}
  });
  /* eslint-disable no-param-reassign */
  challenge.endDate = endDate;
  challenge.startDate = startDate;
  if (challenge.status === 'PAST') challenge.status = 'COMPLETED';
  /* eslint-enable no-param-reassign */
}
var ChallengesService = function () {
  /**
   * Creates a new ChallengeService instance.
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   * @param {String} tokenV2 Optional. Auth token for Topcoder API v2.
   */
  function ChallengesService(tokenV3, tokenV2) {
    var _this = this;

    (0, _classCallCheck3.default)(this, ChallengesService);

    /**
     * Private function being re-used in all methods related to getting
     * challenges. It handles query-related arguments in the uniform way:
     * @param {String} endpoint API V3 endpoint, where the request will be send.
     * @param {Object} filters Optional. A map of filters to pass as `filter`
     *  query parameter (this function takes care to stringify it properly).
     * @param {Object} params Optional. A map of any other parameters beside
     *  `filter`.
     */
    var getChallenges = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(endpoint) {
        var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var query, url, res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = (0, _extends3.default)({
                  filter: _qs2.default.stringify(filters, { encode: false })
                }, params);
                url = endpoint + '?' + _qs2.default.stringify(query);
                _context2.next = 4;
                return _this.private.api.get(url).then(checkError);

              case 4:
                res = _context2.sent;
                return _context2.abrupt('return', {
                  challenges: res.content || [],
                  totalCount: res.metadata.totalCount
                });

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this);
      }));

      return function getChallenges(_x2) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.private = {
      api: (0, _api.getApiV3)(tokenV3),
      apiV2: (0, _api.getApiV2)(tokenV2),
      getChallenges: getChallenges,
      tokenV2: tokenV2,
      tokenV3: tokenV3
    };
  }

  /**
   * Activates the specified challenge.
   * @param {Number} challengeId
   * @return {Promise} Resolves to null value in case of success; otherwise it
   *  is rejected.
   */


  (0, _createClass3.default)(ChallengesService, [{
    key: 'activate',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(challengeId) {
        var res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.private.api.post('/challenges/' + challengeId + '/activate');

              case 2:
                res = _context3.sent;

                if (res.ok) {
                  _context3.next = 5;
                  break;
                }

                throw new Error(res.statusText);

              case 5:
                _context3.next = 7;
                return res.json();

              case 7:
                res = _context3.sent.result;

                if (!(res.status !== 200)) {
                  _context3.next = 10;
                  break;
                }

                throw new Error(res.content);

              case 10:
                return _context3.abrupt('return', res.content);

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function activate(_x5) {
        return _ref5.apply(this, arguments);
      }

      return activate;
    }()

    /**
     * Closes the specified challenge.
     * @param {Number} challengeId
     * @param {Number} winnerId Optional. ID of the assignee to declare the
     *  winner.
     * @return {Promise} Resolves to null value in case of success; otherwise it
     *  is rejected.
     */

  }, {
    key: 'close',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(challengeId, winnerId) {
        var url, res;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = '/challenges/' + challengeId + '/close';

                if (winnerId) url = url + '?winnerId=' + winnerId;
                _context4.next = 4;
                return this.private.api.post(url);

              case 4:
                res = _context4.sent;

                if (res.ok) {
                  _context4.next = 7;
                  break;
                }

                throw new Error(res.statusText);

              case 7:
                _context4.next = 9;
                return res.json();

              case 9:
                res = _context4.sent.result;

                if (!(res.status !== 200)) {
                  _context4.next = 12;
                  break;
                }

                throw new Error(res.content);

              case 12:
                return _context4.abrupt('return', res.content);

              case 13:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function close(_x6, _x7) {
        return _ref6.apply(this, arguments);
      }

      return close;
    }()

    /**
     * Creates a new payment task.
     * @param {Number} projectId
     * @param {Number} accountId Billing account ID.
     * @param {String} title
     * @param {String} description
     * @param {String} assignee
     * @param {Number} payment
     * @return {Promise} Resolves to the created challenge object (payment task).
     */

  }, {
    key: 'createTask',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(projectId, accountId, title, description, assignee, payment) {
        var payload, res;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                payload = {
                  param: {
                    assignees: [assignee],
                    billingAccountId: accountId,
                    confidentialityType: 'public',
                    milestoneId: 1,
                    name: title,
                    prizes: payment ? [payment] : [],
                    projectId: projectId,
                    registrationStartsAt: (0, _moment2.default)().toISOString(),
                    reviewType: 'INTERNAL',
                    subTrack: 'FIRST_2_FINISH',
                    task: true
                  }
                };
                _context5.next = 3;
                return this.private.api.postJson('/challenges', payload);

              case 3:
                res = _context5.sent;

                if (res.ok) {
                  _context5.next = 6;
                  break;
                }

                throw new Error(res.statusText);

              case 6:
                _context5.next = 8;
                return res.json();

              case 8:
                res = _context5.sent.result;

                if (!(res.status !== 200)) {
                  _context5.next = 11;
                  break;
                }

                throw new Error(res.content);

              case 11:
                return _context5.abrupt('return', res.content);

              case 12:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createTask(_x8, _x9, _x10, _x11, _x12, _x13) {
        return _ref7.apply(this, arguments);
      }

      return createTask;
    }()

    /**
     * Gets challenge details from Topcoder API v3.
     * NOTE: This function also uses API v2 and other v3 endpoints for now, due
     * to some information is missing or
     * incorrect in the main v3 endpoint. This may change in the future.
     * @param {Number|String} challengeId
     * @return {Promise} Resolves to the challenge object.
     */

  }, {
    key: 'getChallengeDetails',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(challengeId) {
        var challengeV3, challengeV3Filtered, username, challengeV3User, challenge;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.private.api.get('/challenges/' + challengeId).then(checkError).then(function (res) {
                  return res.content;
                });

              case 2:
                challengeV3 = _context6.sent;
                _context6.next = 5;
                return this.private.getChallenges('/challenges/', { id: challengeId }).then(function (res) {
                  return res.challenges[0];
                });

              case 5:
                challengeV3Filtered = _context6.sent;
                username = this.private.tokenV3 && (0, _tcAccounts.decodeToken)(this.private.tokenV3).handle;
                _context6.t0 = username;

                if (!_context6.t0) {
                  _context6.next = 12;
                  break;
                }

                _context6.next = 11;
                return this.getUserChallenges(username, { id: challengeId }).then(function (res) {
                  return res.challenges[0];
                });

              case 11:
                _context6.t0 = _context6.sent;

              case 12:
                challengeV3User = _context6.t0;
                challenge = normalizeChallengeDetails(challengeV3, challengeV3Filtered, challengeV3User, username);


                challenge.fetchedWithAuth = Boolean(this.private.api.private.token);

                return _context6.abrupt('return', challenge);

              case 16:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getChallengeDetails(_x14) {
        return _ref8.apply(this, arguments);
      }

      return getChallengeDetails;
    }()

    /**
     * Gets possible challenge subtracks.
     * @return {Promise} Resolves to the array of subtrack names.
     */

  }, {
    key: 'getChallengeSubtracks',
    value: function getChallengeSubtracks() {
      return this.private.api.get('/challenge-types').then(function (res) {
        return res.ok ? res.json() : new Error(res.statusText);
      }).then(function (res) {
        return res.result.status === 200 ? res.result.content : new Error(res.result.content);
      });
    }

    /**
     * Gets possible challenge tags (technologies).
     * @return {Promise} Resolves to the array of tag strings.
     */

  }, {
    key: 'getChallengeTags',
    value: function getChallengeTags() {
      return this.private.api.get('/technologies').then(function (res) {
        return res.ok ? res.json() : new Error(res.statusText);
      }).then(function (res) {
        return res.result.status === 200 ? res.result.content : new Error(res.result.content);
      });
    }

    /**
     * Gets challenges.
     * @param {Object} filters Optional.
     * @param {Object} params Optional.
     * @return {Promise} Resolves to the api response.
     */

  }, {
    key: 'getChallenges',
    value: function getChallenges(filters, params) {
      return this.private.getChallenges('/challenges/', filters, params).then(function (res) {
        res.challenges.forEach(function (item) {
          return normalizeChallenge(item);
        });
        return res;
      });
    }

    /**
     * Gets marathon matches.
     * @param {Object} filters Optional.
     * @param {Object} params Optional.
     * @return {Promise} Resolve to the api response.
     */

  }, {
    key: 'getMarathonMatches',
    value: function getMarathonMatches(filters, params) {
      return this.private.getChallenges('/marathonMatches/', filters, params).then(function (res) {
        res.challenges.forEach(function (item) {
          return normalizeMarathonMatch(item);
        });
        return res;
      });
    }

    /**
     * Gets SRM matches.
     * @param {Object} params
     * @return {Promise}
     */

  }, {
    key: 'getSrms',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(params) {
        var res;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.private.api.get('/srms/?' + _qs2.default.stringify(params));

              case 2:
                res = _context7.sent;
                return _context7.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getSrms(_x15) {
        return _ref9.apply(this, arguments);
      }

      return getSrms;
    }()

    /**
     * Gets challenges of the specified user.
     * @param {String} username User whose challenges we want to fetch.
     * @param {Object} filters Optional.
     * @param {Number} params Optional.
     * @return {Promise} Resolves to the api response.
     */

  }, {
    key: 'getUserChallenges',
    value: function getUserChallenges(username, filters, params) {
      var endpoint = '/members/' + username.toLowerCase() + '/challenges/';
      return this.private.getChallenges(endpoint, filters, params).then(function (res) {
        res.challenges.forEach(function (item) {
          return normalizeChallenge(item, username);
        });
        return res;
      });
    }

    /**
     * Gets SRM matches related to the user.
     * @param {String} handle
     * @param {Object} params
     * @return {Promise}
     */

  }, {
    key: 'getUserSrms',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(handle, params) {
        var url, res;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                url = '/members/' + handle + '/srms/?' + _qs2.default.stringify(params);
                _context8.next = 3;
                return this.private.api.get(url);

              case 3:
                res = _context8.sent;
                return _context8.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 5:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getUserSrms(_x16, _x17) {
        return _ref10.apply(this, arguments);
      }

      return getUserSrms;
    }()

    /**
     * Registers user to the specified challenge.
     * @param {String} challengeId
     * @return {Promise}
     */

  }, {
    key: 'register',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(challengeId) {
        var endpoint, res;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                endpoint = '/challenges/' + challengeId + '/register';
                _context9.next = 3;
                return this.private.api.postJson(endpoint);

              case 3:
                res = _context9.sent;

                if (res.ok) {
                  _context9.next = 6;
                  break;
                }

                throw new Error(res.statusText);

              case 6:
                return _context9.abrupt('return', res.json());

              case 7:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function register(_x18) {
        return _ref11.apply(this, arguments);
      }

      return register;
    }()

    /**
     * Unregisters user from the specified challenge.
     * @param {String} challengeId
     * @return {Promise}
     */

  }, {
    key: 'unregister',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(challengeId) {
        var endpoint, res;
        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                endpoint = '/challenges/' + challengeId + '/unregister';
                _context10.next = 3;
                return this.private.api.post(endpoint);

              case 3:
                res = _context10.sent;

                if (res.ok) {
                  _context10.next = 6;
                  break;
                }

                throw new Error(res.statusText);

              case 6:
                return _context10.abrupt('return', res.json());

              case 7:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function unregister(_x19) {
        return _ref12.apply(this, arguments);
      }

      return unregister;
    }()

    /**
     * Gets marathon matches of the specified user.
     * @param {String} username User whose challenges we want to fetch.
     * @param {Object} filters Optional.
     * @param {Number} params Optional.
     * @return {Promise} Resolves to the api response.
     */

  }, {
    key: 'getUserMarathonMatches',
    value: function getUserMarathonMatches(username, filters, params) {
      var endpoint = '/members/' + username.toLowerCase() + '/mms/';
      return this.private.getChallenges(endpoint, filters, params);
    }

    /**
     * Submits a challenge submission.  Uses APIV2 for Development submission
     * and APIV3 for Design submisisons.
     * @param {Object} body
     * @param {String} challengeId
     * @param {String} track Either DESIGN or DEVELOP
     * @return {Promise}
     */

  }, {
    key: 'submit',
    value: function submit(body, challengeId, track, onProgress) {
      var api = void 0;
      var contentType = void 0;
      var url = void 0;

      if (track === 'DESIGN') {
        api = this.private.api;

        contentType = 'application/json';
        url = '/submissions/'; // The submission info is contained entirely in the JSON body
      } else {
        api = this.private.apiV2;
        // contentType = 'multipart/form-data';
        contentType = null;
        url = '/develop/challenges/' + challengeId + '/upload';
      }

      return api.upload(url, {
        body: body,
        headers: { 'Content-Type': contentType },
        method: 'POST'
      }, onProgress).then(function (res) {
        var jres = JSON.parse(res);
        // Return result for Develop submission
        if (track === 'DEVELOP') {
          return jres;
        }
        // Design Submission requires an extra "Processing" POST
        var procId = jres.result.content.id;
        return api.upload('/submissions/' + procId + '/process/', {
          body: (0, _stringify2.default)({ param: jres.result.content }),
          headers: { 'Content-Type': contentType },
          method: 'POST'
        }, onProgress).then(function (procres) {
          return JSON.parse(procres);
        });
      }, function (err) {
        _logger2.default.error('Failed to submit to the challenge #' + challengeId, err);
        throw err;
      });
    }

    /**
     * Updates the challenge (saves the give challenge to the API).
     * @param {Object} challenge
     * @param {String} tokenV3
     * @return {Promise}
     */

  }, {
    key: 'updateChallenge',
    value: function () {
      var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(challenge) {
        var URL, body, res;
        return _regenerator2.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                URL = '/challenges/' + challenge.id;
                body = { param: challenge };
                _context11.next = 4;
                return this.private.api.putJson(URL, body);

              case 4:
                res = _context11.sent;

                if (res.ok) {
                  _context11.next = 7;
                  break;
                }

                throw new Error(res.statusText);

              case 7:
                _context11.next = 9;
                return res.json();

              case 9:
                res = _context11.sent.result;

                if (!(res.status !== 200)) {
                  _context11.next = 12;
                  break;
                }

                throw new Error(res.content);

              case 12:
                return _context11.abrupt('return', res.content);

              case 13:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function updateChallenge(_x20) {
        return _ref13.apply(this, arguments);
      }

      return updateChallenge;
    }()
  }]);
  return ChallengesService;
}();

var lastInstance = null;
/**
 * Returns a new or existing challenges service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @param {String} tokenV2 Optional. Auth token for Topcoder API v2.
 * @return {ChallengesService} Challenges service object
 */
function getService(tokenV3, tokenV2) {
  if (!lastInstance || lastInstance.private.tokenV3 !== tokenV3 || lastInstance.tokenV2 !== tokenV2) {
    lastInstance = new ChallengesService(tokenV3, tokenV2);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
exports.default = undefined;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(33);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(54)('keys');
var uid = __webpack_require__(41);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 56 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(43);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(80);
var hide = __webpack_require__(22);
var Iterators = __webpack_require__(27);
var $iterCreate = __webpack_require__(129);
var setToStringTag = __webpack_require__(37);
var getPrototypeOf = __webpack_require__(131);
var ITERATOR = __webpack_require__(6)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(45);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(27);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {



/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(21);
var invoke = __webpack_require__(139);
var html = __webpack_require__(81);
var cel = __webpack_require__(48);
var global = __webpack_require__(9);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(33)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(31);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(22);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(6);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(41)('meta');
var isObject = __webpack_require__(17);
var has = __webpack_require__(24);
var setDesc = __webpack_require__(16).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(23)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(43);
var wksExt = __webpack_require__(65);
var defineProperty = __webpack_require__(16).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module "actions.errors"
 * @desc Actions related to the standard application-wide error handling and
 * messaging.
 *
 * Pending to be documented. You are not supposed to use them directly anyway.
 *
 * @todo This module does not belong to `topcoder-react-lib`, it will be moved
 *  to `topcoder-react-utils` soon.
 */
exports.default = (0, _reduxActions.createActions)({
  ERRORS: {
    CLEAR_ERROR: _lodash2.default.noop,
    NEW_ERROR: function NEW_ERROR(title, details) {
      return { title: title, details: details };
    },
    CLEAR_ALL_ERROR_ICONS: _lodash2.default.noop,
    SET_ERROR_ICON: function SET_ERROR_ICON(id, title, message) {
      return { id: id, title: title, message: message };
    },
    CLEAR_ERROR_ICON: function CLEAR_ERROR_ICON(id) {
      return { id: id };
    }
  }
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @desc Creates an action that signals beginning of submission download.
 * @return {Action}
 */
function deleteSubmissionInit() {}

/**
 * @static
 * @desc Creates an action that deletes user's submission to a challenge.
 * @param {String} tokenV3 Topcoder v3 auth token.
 * @param {Number|String} submissionId Submission ID.
 * @return {Action}
 */
/**
 * @module "actions.smp"
 * @desc Actions related to *My Submissions Management* page.
 */

function deleteSubmissionDone(tokenV3, submissionId) {
  return (0, _api.getApiV3)(tokenV3).delete('/submissions/' + submissionId).then(function () {
    return submissionId;
  });
}

/**
 * @static
 * @todo At this moment we don't need any special JS code to download
 * submissions: we get them from legacy Topcoder Studio API, which is
 * authenticated by cookies, and can be done with a simple <a> link in
 * the component. Soon we'll migrate to use the new TC API instead, and
 * then we'll decide, whether we need operate downloads in JS, or can we
 * just remove this action.
 * @return {Action}
 */
function downloadSubmission(tokens, type, submissionId) {
  _lodash2.default.noop(tokens, type, submissionId);
}

exports.default = (0, _reduxActions.createActions)({
  SMP: {
    DELETE_SUBMISSION_DONE: deleteSubmissionDone,
    DELETE_SUBMISSION_INIT: deleteSubmissionInit,
    DOWNLOAD_SUBMISSION: downloadSubmission
  }
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(171), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _set = __webpack_require__(71);

var _set2 = _interopRequireDefault(_set);

exports.addDescendantGroups = addDescendantGroups;
exports.checkGroupsStatus = checkGroupsStatus;
exports.checkUserGroups = checkUserGroups;
exports.getService = getService;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _topcoderReactUtils = __webpack_require__(7);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* The value of USER_GROUP_MAXAGE constant converted to [ms]. */
/**
 * @module "services.groups"
 * @desc Service for communication with group-related part of Topcoder API.
 *
 * NOTE: Through this file, and in related contexts, by loading a user group,
 * or user groups data, we refer to loading the information about descendant
 * user groups; i.e. given some user group(s) we speak about loading the sub-
 * three of related child groups.
 *
 * By group maps we refer to the object having group IDs as the keys, and
 * group data objects as the values. Any group object included into a group map
 * has its "subGroups" array (if present) replaced by "subGroupIds", that lists
 * only the IDs of immediate child groups; actual child group objects from
 * "subGroups" are recursively added to the top level of the group map.
 * Also each group in the group map is timestamped to keep caching of
 * the loaded data.
 */

var USER_GROUP_MAXAGE = _topcoderReactUtils.config.USER_GROUP_MAXAGE * 1000;

/**
 * Given an array of IDs (or a single ID) of user groups, and a map of known
 * user groups, it returns the array including all specified user groups, and
 * all their known descendant groups.
 * @param {String|String[]} groupIds
 * @param {Object} knownGroups
 * @return {String[]}
 */
function addDescendantGroups(groupIds, knownGroups) {
  var res = _lodash2.default.isArray(groupIds) ? groupIds : [groupIds];
  var visitedGroupsIds = new _set2.default();
  var pos = 0;
  while (pos < res.length) {
    var id = res[pos];
    if (!visitedGroupsIds.has(id)) {
      visitedGroupsIds.add(id);
      var g = knownGroups[id];
      if (g && g.subGroupIds) res = res.concat(g.subGroupIds);
    }
    pos += 1;
  }
  return _lodash2.default.uniq(res);
}

/**
 * Splits the given list of group IDs into the lists of groups being loaded,
 * loaded, and others.
 * @param {String|String[]} groupIds ID, or an array of IDs, of the group(s) we
 *  are interested in.
 * @param {Object} knownGroups Optional. The map of already known groups (some
 *  of them may be outdated, though). This should be of the same format as the
 *  object on "groups.groups" path of the Redux store. Defaults to empty object.
 * @param {Object} loadingGroups Optional. Set of groups beign loaded now. This
 *  should be of the same format as the object on "groups.loading" path of the
 *  Redux store. Defaults to empty object.
 * @return {Object} Resulting object may hold four arrays with group IDs from
 *  "groupIds" (empty arrays will not be included into the result object):
 *  - "loaded" - the groups that are present in "knownGroups" and are not
 *    outdated;
 *  - "loading" - the groups that are not present in "knownGroups" (or present,
 *    but outdated); but they are already being loaded;
 *  - "missing" - the groups that are not present in "knownGroups"
 *    (or outdated), and are not being loaded.
 *  - "unknown" - the groups that are absent in "knownGroups" map.
 */
function checkGroupsStatus(groupIds) {
  var knownGroups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var loadingGroups = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var loaded = [];
  var loading = [];
  var missing = [];
  var unknown = [];
  var now = Date.now();
  var tested = new _set2.default();
  var ids = _lodash2.default.isArray(groupIds) ? groupIds : [groupIds];
  ids.forEach(function (id) {
    if (tested.has(id)) return;
    tested.add(id);
    var g = knownGroups[id];
    if (!g) unknown.push(id);
    if (g && (now - g.timestamp || 0) < USER_GROUP_MAXAGE) loaded.push(id);else if (loadingGroups[id]) loading.push(id);else missing.push(id);
  });
  return {
    loaded: loaded.length ? loaded : null,
    loading: loading.length ? loading : null,
    missing: missing.length ? missing : null,
    unknown: unknown.length ? unknown : null
  };
}

/**
 * Returns "true" if "userGroups" arrays includes any group specified by
 * "groupIds", or any group descendant from a group specified by "groupIds".
 * The is the map of known groups
 * @param {String|String[]} groupIds
 * @param {Object[]|String[]} userGroups Array of user's groups or their IDs.
 * @param {Object} knownGroups Map of known groups.
 * @return {Boolean}
 */
function checkUserGroups(groupIds, userGroups, knownGroups) {
  var queue = _lodash2.default.isArray(groupIds) ? groupIds : [groupIds];
  if (!queue.length) return true;
  if (!userGroups.length) return false;

  /* Algorithmically, "knownGroups" stores, in compressed form, data on
   * known trees of user groups; and we want to check whether any of groups
   * from "userGroups" belong to sub-trees having groups from "groupIds" as
   * their roots. So, we do a breadth-frist search through the group trees. */
  var userGroupIds = new _set2.default();
  var visitedGroupIds = new _set2.default();
  userGroups.forEach(function (g) {
    return userGroupIds.add(_lodash2.default.isObject(g) ? g.id : g);
  });
  var pos = 0;
  while (pos < queue.length) {
    var id = queue[pos];
    if (userGroupIds.has(id)) return true;
    visitedGroupIds.add(id);
    var g = knownGroups[id];
    if (g && g.subGroupIds) {
      g.subGroupIds.forEach(function (sgId) {
        return !visitedGroupIds.has(sgId) ? queue.push(sgId) : null;
      });
    }
    pos += 1;
  }
  return false;
}

/**
 * Private. Handles given response from the groups API.
 * @param {Object} response
 * @return {Promise} On success resolves to the data fetched from the API.
 */
function handleApiResponse(response) {
  if (!response.ok) throw new Error(response.statusText);
  return response.json().then(function (_ref) {
    var result = _ref.result;

    if (result.status !== 200) throw new Error(result.content);
    return result.content;
  });
}

/**
 * Private. Merges given user group (possibly a tree of user groups) into
 * groups map. This function intended only for internal use inside this module,
 * as it may mutate both arguments (hence, the corresponding ESLint rule is
 * disabled within this function), thus should be used only where it is safe.
 * For external use a similar function is provided by "utils/tc" module.
 * @param {Object} groups
 * @param {Object} group
 */
function mergeGroup(groups, group) {
  /* eslint-disable no-param-reassign */
  var sg = group.subGroups;
  group.timestamp = Date.now();
  if (sg && sg.length) {
    group.subGroupIds = sg.map(function (g) {
      return g.id;
    });
    sg.forEach(function (g) {
      return mergeGroup(groups, g);
    });
  }
  delete group.subGroups;
  groups[group.id] = group;
  /* eslint-enable no-param-reassign */
}

/**
 * Service class.
 */

var GroupService = function () {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  function GroupService(tokenV3) {
    (0, _classCallCheck3.default)(this, GroupService);

    this.private = {
      api: (0, _api.getApiV3)(tokenV3),
      tokenV3: tokenV3
    };
  }

  /**
   * Adds new member to the group.
   * @param {String} groupId
   * @param {String} memberId
   * @param {String} membershipType
   * @return {Promise}
   */


  (0, _createClass3.default)(GroupService, [{
    key: 'addMember',
    value: function addMember(groupId, memberId, membershipType) {
      return this.private.api.postJson('/groups/' + groupId + '/members', {
        param: { memberId: memberId, membershipType: membershipType }
      }).then(handleApiResponse);
    }

    /**
     * Gets detailed information about the group.
     *
     * Notice, when "withSubGroups" argument is true (default) this method returns
     * a tree of group data objects, connected via their "subGroups" fields.
     * getMap(..) method below wraps this functionality in a more practical way!
     *
     * @param {String} groupId
     * @param {Boolean} withSubGroups Optional. Defaults to true. Specifies,
     *  whether the response should information about sub-groups, if any.
     * @return {Promise} On success resolves to the group data object.
     */

  }, {
    key: 'getGroup',
    value: function getGroup(groupId) {
      var withSubGroups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var url = '/groups/' + groupId;
      if (withSubGroups) {
        url = url + '/getSubGroups?includeSubGroups=true&oneLevel=false';
      }
      return this.private.api.get(url).then(handleApiResponse);
    }

    /**
     * Gets detailed information about the specified user group(s) and their
     * descendant sub-groups.
     *
     * @param {String|String[]} groupIds Group ID, or an array of group IDs,
     *  to query from Topcoder API.
     * @return {Promise} Resolves to the group map. That object will have group
     *  IDs as the keys, and corresponding group data objects as the values. In
     *  each group data object the "subGroups" field, if any, will be replaced by
     * "subGroupIds" (array of IDs of the immediate child groups), and the actual
     *  data on the sub-groups will be moved to the root of the map object.
     *  It also timestamps each fetched group.
     */

  }, {
    key: 'getGroupMap',
    value: function getGroupMap(groupIds) {
      var _this = this;

      var res = {};
      var seen = new _set2.default();
      var query = _lodash2.default.isArray(groupIds) ? groupIds : [groupIds];
      var promises = query.map(function (id) {
        if (seen.has(id)) return null;
        seen.add(id);
        return _this.getGroup(id).then(function (group) {
          return mergeGroup(res, group);
        }).catch(function (err) {
          /* In case we have failed to get some of the requested groups,
          * we just send error message to logs, and serve the result with
          * those groups that we managed to get. Otherwise it will be to
          * easy to break our code by minor mistakes in the group-related
          * configuration in the API and in the App. */
          _logger2.default.error('Failed to get user group #' + id, err);

          /* Empty group with timestamp is added to the result, as we still
          * want to cache the result, even if the result is that we cannot
          * load this group, at least for this visitor. */
          res[id] = { id: id, timestamp: Date.now() };
        });
      });
      return _promise2.default.all(promises).then(function () {
        return res;
      });
    }

    /**
     * Gets group members.
     * @param {String} groupId
     * @return {Promise} On sucess resolves to the array of member objects,
     *  which include user IDs, membership time, and some bookkeeping data.
     */

  }, {
    key: 'getMembers',
    value: function getMembers(groupId) {
      return this.private.api.get('/groups/' + groupId + '/members').then(handleApiResponse);
    }

    /**
     * Gets the number of members in the group.
     * @param {Number|String} groupId ID of the group.
     * @param {Boolean} withSubGroups Optional. When this flag is set, the count
     *  will include members of sub-groups of the specified group.
     * @return {Promise} Resolves to the members count.
     */

  }, {
    key: 'getMembersCount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(groupId, withSubGroups) {
        var url, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = '/groups/' + groupId + '/membersCount';

                if (withSubGroups) url += '?includeSubGroups=true';
                _context.next = 4;
                return this.private.api.get(url);

              case 4:
                res = _context.sent;

                if (res.ok) {
                  _context.next = 7;
                  break;
                }

                throw new Error(res.statusText);

              case 7:
                _context.next = 9;
                return res.json();

              case 9:
                res = _context.sent.result;

                if (res.success) {
                  _context.next = 12;
                  break;
                }

                throw new Error(res.content);

              case 12:
                return _context.abrupt('return', Number(res.content));

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMembersCount(_x4, _x5) {
        return _ref2.apply(this, arguments);
      }

      return getMembersCount;
    }()
  }]);
  return GroupService;
}();

var lastInstance = null;
/**
 * Returns a new or existing instance of challenge service, which works with
 * the specified auth token.
 * @param {String} tokenV3 Optional. Topcoder API v3 auth token.
 * @return {GroupService} Instance of the service.
 */
function getService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new GroupService(tokenV3);
  }
  return lastInstance;
}

exports.default = undefined;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(42);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _reduxActions = __webpack_require__(2);

var _user = __webpack_require__(74);

var _members = __webpack_require__(75);

var _challenges = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @desc Creates and action that loads user profile.
 * @todo This action does not follow the pattern with init/done pairs of
 *  actions. Should be improved.
 * @param {String} handle User handle.
 * @return {Action}
 */
/**
 * @module "actions.profile"
 * @desc Actions for interactions with profile details API.
 * @todo Some of them repeat actions in {@link actions.members.md}. The code
 *  should be refactored to avoid redundancy.
 */
function loadProfile(handle) {
  return handle;
}

/**
 * @static
 * @desc Creates an action that signals beginning of user achievements loading.
 * @todo This duplicates similar action in {@link actions.members.md}!
 * @return {Action}
 */
function getAchievementsInit() {}

/**
 * @static
 * @desc Creates an action that loads user achievements.
 * @todo This duplicates similar action in {@link actions.members.md}!
 * @param {String} handle User handle.
 * @return {Action}
 */
function getAchievementsDone(handle) {
  return (0, _user.getService)().getUserPublic(handle);
}

/**
 * @static
 * @todo To be documented.
 * @return {Action}
 */
function getExternalAccountsInit() {}

/**
 * @static
 * @todo To be documented.
 * @param {String} handle User handle.
 * @return {Action}
 */
function getExternalAccountsDone(handle) {
  return (0, _members.getService)().getExternalAccounts(handle);
}

/**
 * @static
 * @todo Figure out what does this action do.
 * @return {Action}
 */
function getExternalLinksInit() {}

/**
 * @static
 * @todo Figure out the purpose of this action
 * @param {String} handle User handle.
 * @return {Action}
 */
function getExternalLinksDone(handle) {
  return (0, _members.getService)().getExternalLinks(handle);
}

/**
 * @static
 * @todo Figure out the purpose of this action.
 * @return {Action}
 */
function getInfoInit() {}

/**
 * @static
 * @todo Figure out the purpose of this action.
 * @param {String} handle User handle.
 * @return {Action}
 */
function getInfoDone(handle) {
  return (0, _members.getService)().getMemberInfo(handle);
}

/**
 * @static
 * @desc Creates an action that signals beginning of loading the member's
 *  skills info.
 * @return {Action}
 */
function getSkillsInit() {}

/**
 * @static
 * @desc Creates an action that loads member's skills info.
 * @param {String} handle Member handle.
 * @return {Action}
 */
function getSkillsDone(handle) {
  return (0, _members.getService)().getSkills(handle);
}

/**
 * @static
 * @desc Creates an action that signals beginning of loading member's stats.
 * @todo This is similar to {@link actions.members.md#module_actions.members.getStatsInit}!
 * @return {Action}
 */
function getStatsInit() {}

/**
 * @static
 * @desc Creates an action that loads member's stats.
 * @param {String} handle Member handle.
 * @return {Action}
 */
function getStatsDone(handle) {
  return (0, _members.getService)().getStats(handle);
}

/**
 * @static
 * @desc Creates an action that signals beginning of getting count of user's active challenges.
 * @return {Action}
 */
function getActiveChallengesCountInit() {}

/**
 * @static
 * @desc Creates an action that gets count of user's active challenges from the backend.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Optional. Topcoder auth token v3. Without token only
 *  public challenges will be counted. With the token provided, the action will
 *  also count private challenges related to this user.
 * @return {Action}
 */
function getActiveChallengesCountDone(handle, tokenV3) {
  var service = (0, _challenges.getService)(tokenV3);
  var filter = { status: 'ACTIVE' };
  var params = { limit: 1, offset: 0 };

  var calls = [];
  calls.push(service.getUserChallenges(handle, filter, params));
  calls.push(service.getUserMarathonMatches(handle, filter, params));

  return _promise2.default.all(calls).then(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        uch = _ref2[0],
        umm = _ref2[1];

    return uch.totalCount + umm.totalCount;
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of getting linked accounts.
 * @return {Action}
 */
function getLinkedAccountsInit() {}

/**
 * @static
 * @desc Creates an action that gets linked accounts.
 *
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getLinkedAccountsDone(profile, tokenV3) {
  var service = (0, _user.getService)(tokenV3);
  return service.getLinkedAccounts(profile.userId);
}

/**
 * @static
 * @desc Creates an action that signals beginning of getting credential.
 * @return {Action}
 */
function getCredentialInit() {}

/**
 * @static
 * @desc Creates an action that gets credential.
 *
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getCredentialDone(profile, tokenV3) {
  var service = (0, _user.getService)(tokenV3);
  return service.getCredential(profile.userId);
}

/**
 * @static
 * @desc Creates an action that signals beginning of getting email preferences.
 * @return {Action}
 */
function getEmailPreferencesInit() {}

/**
 * @static
 * @desc Creates an action that gets email preferences.
 *
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getEmailPreferencesDone(profile, tokenV3) {
  var service = (0, _user.getService)(tokenV3);
  return service.getEmailPreferences(profile.userId);
}

/**
 * @static
 * @desc Creates an action that signals beginning of uploading user's photo.
 * @return {Action}
 */
function uploadPhotoInit() {}

/**
 * @static
 * @desc Creates an action that uploads user's photo.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} file The photo file.
 * @return {Action}
 */
function uploadPhotoDone(handle, tokenV3, file) {
  var service = (0, _members.getService)(tokenV3);
  return service.getPresignedUrl(handle, file).then(function (res) {
    return service.uploadFileToS3(res);
  }).then(function (res) {
    return service.updateMemberPhoto(res);
  }).then(function (photoURL) {
    return { handle: handle, photoURL: photoURL };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of deleting user's photo.
 * @return {Action}
 */
function deletePhotoInit() {}

/**
 * @static
 * @desc Creates an action that signals beginning of updating user's profile.
 * @return {Action}
 */
function updateProfileInit() {}

/**
 * @static
 * @desc Creates an action that updates user's profile.
 * @param {String} profile Topcoder user profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function updateProfileDone(profile, tokenV3) {
  var service = (0, _members.getService)(tokenV3);
  return service.updateMemberProfile(profile);
}

/**
 * @static
 * @desc Creates an action that signals beginning of adding user's skill.
 * @return {Action}
 */
function addSkillInit() {}

/**
 * @static
 * @desc Creates an action that adds user's skill.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {Object} skill Skill to add.
 * @return {Action}
 */
function addSkillDone(handle, tokenV3, skill) {
  var service = (0, _members.getService)(tokenV3);
  return service.addSkill(handle, skill.tagId).then(function (res) {
    return { skills: res.skills, handle: handle, skill: skill };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of hiding user's skill.
 * @return {Action}
 */
function hideSkillInit() {}

/**
 * @static
 * @desc Creates an action that hides user's skill.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {Object} skill Skill to hide.
 * @return {Action}
 */
function hideSkillDone(handle, tokenV3, skill) {
  var service = (0, _members.getService)(tokenV3);
  return service.hideSkill(handle, skill.tagId).then(function (res) {
    return { skills: res.skills, handle: handle, skill: skill };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of adding user's web link.
 * @return {Action}
 */
function addWebLinkInit() {}

/**
 * @static
 * @desc Creates an action that adds user's web link.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} webLink Web link to add.
 * @return {Action}
 */
function addWebLinkDone(handle, tokenV3, webLink) {
  var service = (0, _members.getService)(tokenV3);
  return service.addWebLink(handle, webLink).then(function (res) {
    return { data: res, handle: handle };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of deleting user's web link.
 * @param {Object} key Web link key to delete.
 * @return {Action}
 */
function deleteWebLinkInit(_ref3) {
  var key = _ref3.key;

  return { key: key };
}

/**
 * @static
 * @desc Creates an action that deletes user's web link.
 * @param {String} handle Topcoder user handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} webLink Web link to delete.
 * @return {Action}
 */
function deleteWebLinkDone(handle, tokenV3, webLink) {
  var service = (0, _members.getService)(tokenV3);
  return service.deleteWebLink(handle, webLink.key).then(function (res) {
    return { data: res, handle: handle };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of linking external account.
 * @return {Action}
 */
function linkExternalAccountInit() {}

/**
 * @static
 * @desc Creates an action that links external account.
 * @param {Object} profile Topcoder member handle.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} providerType The external account service provider
 * @param {String} callbackUrl Optional. The callback url
 * @return {Action}
 */
function linkExternalAccountDone(profile, tokenV3, providerType, callbackUrl) {
  var service = (0, _user.getService)(tokenV3);
  return service.linkExternalAccount(profile.userId, providerType, callbackUrl).then(function (res) {
    return { data: res, handle: profile.handle };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of unlinking external account.
 * @param {Object} providerType External account provider type to delete.
 * @return {Action}
 */
function unlinkExternalAccountInit(_ref4) {
  var providerType = _ref4.providerType;

  return { providerType: providerType };
}

/**
 * @static
 * @desc Creates an action that unlinks external account.
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} providerType The external account service provider
 * @return {Action}
 */
function unlinkExternalAccountDone(profile, tokenV3, providerType) {
  var service = (0, _user.getService)(tokenV3);
  return service.unlinkExternalAccount(profile.userId, providerType).then(function () {
    return { providerType: providerType, handle: profile.handle };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of saving email preferences.
 * @return {Action}
 */
function saveEmailPreferencesInit() {}

/**
 * @static
 * @desc Creates an action that saves email preferences.
 *
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {Object} preferences The email preferences
 * @return {Action}
 */
function saveEmailPreferencesDone(profile, tokenV3, preferences) {
  var service = (0, _user.getService)(tokenV3);
  return service.saveEmailPreferences(profile, preferences).then(function (res) {
    return { data: res, handle: profile.handle };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of updating user password.
 * @return {Action}
 */
function updatePasswordInit() {}

/**
 * @static
 * @desc Creates an action that updates user password.
 *
 * @param {Object} profile Topcoder member profile.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @param {String} newPassword The new password
 * @param {String} oldPassword The old password
 * @return {Action}
 */
function updatePasswordDone(profile, tokenV3, newPassword, oldPassword) {
  var service = (0, _user.getService)(tokenV3);
  return service.updatePassword(profile.userId, newPassword, oldPassword).then(function (res) {
    return { data: res, handle: profile.handle };
  });
}

exports.default = (0, _reduxActions.createActions)({
  PROFILE: {
    LOAD_PROFILE: loadProfile,
    GET_ACHIEVEMENTS_INIT: getAchievementsInit,
    GET_ACHIEVEMENTS_DONE: getAchievementsDone,
    GET_EXTERNAL_ACCOUNTS_INIT: getExternalAccountsInit,
    GET_EXTERNAL_ACCOUNTS_DONE: getExternalAccountsDone,
    GET_EXTERNAL_LINKS_INIT: getExternalLinksInit,
    GET_EXTERNAL_LINKS_DONE: getExternalLinksDone,
    GET_INFO_INIT: getInfoInit,
    GET_INFO_DONE: getInfoDone,
    GET_SKILLS_INIT: getSkillsInit,
    GET_SKILLS_DONE: getSkillsDone,
    GET_STATS_INIT: getStatsInit,
    GET_STATS_DONE: getStatsDone,
    GET_ACTIVE_CHALLENGES_COUNT_INIT: getActiveChallengesCountInit,
    GET_ACTIVE_CHALLENGES_COUNT_DONE: getActiveChallengesCountDone,
    GET_LINKED_ACCOUNTS_INIT: getLinkedAccountsInit,
    GET_LINKED_ACCOUNTS_DONE: getLinkedAccountsDone,
    GET_EMAIL_PREFERENCES_INIT: getEmailPreferencesInit,
    GET_EMAIL_PREFERENCES_DONE: getEmailPreferencesDone,
    GET_CREDENTIAL_INIT: getCredentialInit,
    GET_CREDENTIAL_DONE: getCredentialDone,
    UPLOAD_PHOTO_INIT: uploadPhotoInit,
    UPLOAD_PHOTO_DONE: uploadPhotoDone,
    DELETE_PHOTO_INIT: deletePhotoInit,
    DELETE_PHOTO_DONE: updateProfileDone,
    UPDATE_PROFILE_INIT: updateProfileInit,
    UPDATE_PROFILE_DONE: updateProfileDone,
    ADD_SKILL_INIT: addSkillInit,
    ADD_SKILL_DONE: addSkillDone,
    HIDE_SKILL_INIT: hideSkillInit,
    HIDE_SKILL_DONE: hideSkillDone,
    ADD_WEB_LINK_INIT: addWebLinkInit,
    ADD_WEB_LINK_DONE: addWebLinkDone,
    DELETE_WEB_LINK_INIT: deleteWebLinkInit,
    DELETE_WEB_LINK_DONE: deleteWebLinkDone,
    LINK_EXTERNAL_ACCOUNT_INIT: linkExternalAccountInit,
    LINK_EXTERNAL_ACCOUNT_DONE: linkExternalAccountDone,
    UNLINK_EXTERNAL_ACCOUNT_INIT: unlinkExternalAccountInit,
    UNLINK_EXTERNAL_ACCOUNT_DONE: unlinkExternalAccountDone,
    SAVE_EMAIL_PREFERENCES_INIT: saveEmailPreferencesInit,
    SAVE_EMAIL_PREFERENCES_DONE: saveEmailPreferencesDone,
    UPDATE_PASSWORD_INIT: updatePasswordInit,
    UPDATE_PASSWORD_DONE: updatePasswordDone
  }
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(29);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

var _slicedToArray2 = __webpack_require__(42);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.getService = getService;

var _topcoderReactUtils = __webpack_require__(7);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _tc = __webpack_require__(30);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module "services.user"
 * @desc The User service provides functionality related to Topcoder user
 *  accounts.
 */
var auth0 = void 0;
if (_topcoderReactUtils.isomorphy.isClientSide()) {
  var Auth0 = __webpack_require__(193); /* eslint-disable-line global-require */
  auth0 = new Auth0({
    domain: _topcoderReactUtils.config.AUTH0.DOMAIN,
    clientID: _topcoderReactUtils.config.AUTH0.CLIENT_ID,
    callbackOnLocationHash: true,
    sso: false
  });
}

/**
 * Gets social user data.
 * @param {Object} profile The user social profile
 * @param {*} accessToken The access token
 * @returns {Object} Social user data
 */
function getSocialUserData(profile, accessToken) {
  var socialProvider = profile.identities[0].connection;
  var firstName = '';
  var lastName = '';
  var handle = '';
  var email = profile.email || '';

  var socialUserId = profile.user_id.substring(profile.user_id.lastIndexOf('|') + 1);
  var splitName = void 0;

  if (socialProvider === 'google-oauth2') {
    firstName = profile.given_name;
    lastName = profile.family_name;
    handle = profile.nickname;
  } else if (socialProvider === 'facebook') {
    firstName = profile.given_name;
    lastName = profile.family_name;
    handle = firstName + '.' + lastName;
  } else if (socialProvider === 'twitter') {
    splitName = profile.name.split(' ');
    var _splitName = splitName;

    var _splitName2 = (0, _slicedToArray3.default)(_splitName, 1);

    firstName = _splitName2[0];

    if (splitName.length > 1) {
      var _splitName3 = splitName;

      var _splitName4 = (0, _slicedToArray3.default)(_splitName3, 2);

      lastName = _splitName4[1];
    }
    handle = profile.screen_name;
  } else if (socialProvider === 'github') {
    splitName = profile.name.split(' ');
    var _splitName5 = splitName;

    var _splitName6 = (0, _slicedToArray3.default)(_splitName5, 1);

    firstName = _splitName6[0];

    if (splitName.length > 1) {
      var _splitName7 = splitName;

      var _splitName8 = (0, _slicedToArray3.default)(_splitName7, 2);

      lastName = _splitName8[1];
    }
    handle = profile.nickname;
  } else if (socialProvider === 'bitbucket') {
    firstName = profile.first_name;
    lastName = profile.last_name;
    handle = profile.username;
  } else if (socialProvider === 'stackoverflow') {
    firstName = profile.first_name;
    lastName = profile.last_name;
    handle = socialUserId;
  } else if (socialProvider === 'dribbble') {
    firstName = profile.first_name;
    lastName = profile.last_name;
    handle = socialUserId;
  }

  var token = accessToken;
  var tokenSecret = null;
  if (profile.identities[0].access_token) {
    token = profile.identities[0].access_token;
  }
  if (profile.identities[0].access_token_secret) {
    tokenSecret = profile.identities[0].access_token_secret;
  }
  return {
    socialUserId: socialUserId,
    username: handle,
    firstname: firstName,
    lastname: lastName,
    email: email,
    socialProfile: profile,
    socialProvider: socialProvider,
    accessToken: token,
    accessTokenSecret: tokenSecret
  };
}

/**
 * Service class.
 */

var User = function () {
  /**
   * Creates a new User service.
   * @param {String} tokenV3 Topcoder auth tokenV3.
   * @param {String} tokenV2 TC auth token v2.
   */
  function User(tokenV3, tokenV2) {
    (0, _classCallCheck3.default)(this, User);

    this.private = {
      api: (0, _api.getApiV3)(tokenV3),
      apiV2: (0, _api.getApiV2)(tokenV2),
      tokenV2: tokenV2,
      tokenV3: tokenV3
    };
  }

  /**
   * Gets user achievements. Does not need auth.
   * @param {String} username
   * @return {Object}
   */


  (0, _createClass3.default)(User, [{
    key: 'getAchievements',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(username) {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.private.apiV2.get('/users/' + username);

              case 2:
                res = _context.sent;

                if (res.ok) {
                  _context.next = 5;
                  break;
                }

                throw new Error(res.statusText);

              case 5:
                _context.next = 7;
                return res.json();

              case 7:
                _context.t0 = _context.sent.Achievements;

                if (_context.t0) {
                  _context.next = 10;
                  break;
                }

                _context.t0 = [];

              case 10:
                return _context.abrupt('return', _context.t0);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAchievements(_x) {
        return _ref.apply(this, arguments);
      }

      return getAchievements;
    }()

    /**
     * Gets public user info. Does not need auth.
     * @param {String} username
     * @return {Object}
     */

  }, {
    key: 'getUserPublic',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(username) {
        var res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.private.apiV2.get('/users/' + username);

              case 2:
                res = _context2.sent;

                if (res.ok) {
                  _context2.next = 5;
                  break;
                }

                throw new Error(res.statusText);

              case 5:
                return _context2.abrupt('return', res.json() || null);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getUserPublic(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getUserPublic;
    }()

    /**
     * Gets user data object for the specified username.
     *
     * NOTE: Only admins are authorized to use the underlying endpoint.
     *
     * @param {String} username
     * @return {Promise} Resolves to the user data object.
     */

  }, {
    key: 'getUser',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(username) {
        var url, res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = '/users?filter=handle%3D' + username;
                _context3.next = 3;
                return this.private.api.get(url);

              case 3:
                res = _context3.sent;
                _context3.next = 6;
                return (0, _tc.getApiResponsePayloadV3)(res);

              case 6:
                return _context3.abrupt('return', _context3.sent[0]);

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUser(_x3) {
        return _ref3.apply(this, arguments);
      }

      return getUser;
    }()

    /**
     * Gets email preferences.
     *
     * NOTE: Only admins are authorized to use the underlying endpoint.
     *
     * @param {Number} userId The TopCoder user id
     * @returns {Promise} Resolves to the email preferences result
     */

  }, {
    key: 'getEmailPreferences',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(userId) {
        var url, res;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = '/users/' + userId + '/preferences/email';
                _context4.next = 3;
                return this.private.api.get(url);

              case 3:
                res = _context4.sent;
                return _context4.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getEmailPreferences(_x4) {
        return _ref4.apply(this, arguments);
      }

      return getEmailPreferences;
    }()

    /**
     * Saves email preferences.
     *
     * NOTE: Only admins are authorized to use the underlying endpoint.
     *
     * @param {Object} user The TopCoder user
     * @param {Object} preferences The email preferences
     * @returns {Promise} Resolves to the email preferences result
     */

  }, {
    key: 'saveEmailPreferences',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref6, preferences) {
        var firstName = _ref6.firstName,
            lastName = _ref6.lastName,
            userId = _ref6.userId;
        var settings, url, res;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                settings = {
                  firstName: firstName,
                  lastName: lastName,
                  subscriptions: {}
                };


                if (!preferences) {
                  settings.subscriptions.TOPCODER_NL_GEN = true;
                } else {
                  settings.subscriptions = preferences;
                }
                url = '/users/' + userId + '/preferences/email';
                _context5.next = 5;
                return this.private.api.putJson(url, { param: settings });

              case 5:
                res = _context5.sent;
                return _context5.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function saveEmailPreferences(_x5, _x6) {
        return _ref5.apply(this, arguments);
      }

      return saveEmailPreferences;
    }()

    /**
     * Gets credential for the specified user id.
     *
     * NOTE: Only admins are authorized to use the underlying endpoint.
     *
     * @param {Number} userId The user id
     * @return {Promise} Resolves to the linked accounts array.
     */

  }, {
    key: 'getCredential',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(userId) {
        var url, res;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                url = '/users/' + userId + '?fields=credential';
                _context6.next = 3;
                return this.private.api.get(url);

              case 3:
                res = _context6.sent;
                return _context6.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getCredential(_x7) {
        return _ref7.apply(this, arguments);
      }

      return getCredential;
    }()

    /**
     * Updates user password.
     *
     * NOTE: Only admins are authorized to use the underlying endpoint.
     *
     * @param {Number} userId The user id
     * @param {String} newPassword The new password
     * @param {String} oldPassword The old password
     * @return {Promise} Resolves to the update result.
     */

  }, {
    key: 'updatePassword',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(userId, newPassword, oldPassword) {
        var credential, url, res;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                credential = {
                  password: newPassword,
                  currentPassword: oldPassword
                };
                url = '/users/' + userId;
                _context7.next = 4;
                return this.private.api.patchJson(url, { param: { credential: credential } });

              case 4:
                res = _context7.sent;
                return _context7.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 6:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function updatePassword(_x8, _x9, _x10) {
        return _ref8.apply(this, arguments);
      }

      return updatePassword;
    }()

    /**
     * Gets linked accounts for the specified user id.
     *
     * NOTE: Only admins are authorized to use the underlying endpoint.
     *
     * @param {Number} userId The user id
     * @return {Promise} Resolves to the linked accounts array.
     */

  }, {
    key: 'getLinkedAccounts',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(userId) {
        var url, res;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                url = '/users/' + userId + '?fields=profiles';
                _context8.next = 3;
                return this.private.api.get(url);

              case 3:
                res = _context8.sent;
                return _context8.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 5:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getLinkedAccounts(_x11) {
        return _ref9.apply(this, arguments);
      }

      return getLinkedAccounts;
    }()

    /**
     * Unlinks external account.
     * @param {Number} userId The TopCoder user id
     * @param {String} provider The external account service provider
     * @returns {Promise} Resolves to the unlink result
     */

  }, {
    key: 'unlinkExternalAccount',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(userId, provider) {
        var url, res;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                url = '/users/' + userId + '/profiles/' + provider;
                _context9.next = 3;
                return this.private.api.delete(url);

              case 3:
                res = _context9.sent;
                return _context9.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 5:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function unlinkExternalAccount(_x12, _x13) {
        return _ref10.apply(this, arguments);
      }

      return unlinkExternalAccount;
    }()

    /**
     * Links external account.
     * @param {Number} userId The TopCoder user id
     * @param {String} provider The external account service provider
     * @param {String} callbackUrl Optional. The callback url
     * @returns {Promise} Resolves to the linked account result
     */

  }, {
    key: 'linkExternalAccount',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(userId, provider, callbackUrl) {
        var _this = this;

        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt('return', new _promise2.default(function (resolve, reject) {
                  auth0.signin({
                    popup: true,
                    connection: provider,
                    scope: 'openid profile offline_access',
                    state: callbackUrl
                  }, function (authError, profile, idToken, accessToken) {
                    if (authError) {
                      _logger2.default.error('Error signing in - onSocialLoginFailure', authError);
                      reject(authError);
                      return;
                    }

                    var socialData = getSocialUserData(profile, accessToken);

                    var postData = {
                      userId: socialData.socialUserId,
                      name: socialData.username,
                      email: socialData.email,
                      emailVerified: false,
                      providerType: socialData.socialProvider,
                      context: {
                        handle: socialData.username,
                        accessToken: socialData.accessToken,
                        auth0UserId: profile.user_id
                      }
                    };
                    if (socialData.accessTokenSecret) {
                      postData.context.accessTokenSecret = socialData.accessTokenSecret;
                    }
                    _logger2.default.debug('link API postdata: ' + (0, _stringify2.default)(postData));
                    _this.private.api.postJson('/users/' + userId + '/profiles', { param: postData }).then(function (resp) {
                      return (0, _tc.getApiResponsePayloadV3)(resp).then(function (result) {
                        _logger2.default.debug('Succesfully linked account: ' + (0, _stringify2.default)(result));
                        resolve(postData);
                      });
                    }).catch(function (err) {
                      _logger2.default.error('Error linking account', err);
                      reject(err);
                    });
                  });
                }));

              case 1:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function linkExternalAccount(_x14, _x15, _x16) {
        return _ref11.apply(this, arguments);
      }

      return linkExternalAccount;
    }()
  }]);
  return User;
}();

var lastInstance = null;

/**
 * Returns a new or existing User service for the specified tokenV3.
 * @param {String} tokenV3 Optional. Topcoder auth token v3.
 * @param {String} tokenV2 Optional. TC auth token v2.
 * @return {Api} API v3 service object.
 */
function getService(tokenV3, tokenV2) {
  if (!lastInstance || lastInstance.private.tokenV2 !== tokenV2 || lastInstance.private.tokenV3 !== tokenV3) {
    lastInstance = new User(tokenV3, tokenV2);
  }
  return lastInstance;
}

/**
 * @static
 * @member default
 * @desc Default export is {@link module:services.user~User} class.
 */
exports.default = User;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = __webpack_require__(29);

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getService = getService;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _tc = __webpack_require__(30);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Service class.
 */
/**
 * @module "services.members"
 * @desc  This module provides a service for searching for Topcoder
 * members via API V3.
 */

/* global XMLHttpRequest */
var MembersService = function () {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  function MembersService(tokenV3) {
    (0, _classCallCheck3.default)(this, MembersService);

    this.private = {
      api: (0, _api.getApiV3)(tokenV3),
      tokenV3: tokenV3
    };
  }

  /**
   * Gets member's financial information.
   * @param {String} handle User handle.
   * @return {Promise} Resolves to the financial information object.
   */


  (0, _createClass3.default)(MembersService, [{
    key: 'getMemberFinances',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(handle) {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.private.api.get('/members/' + handle + '/financial');

              case 2:
                res = _context.sent;
                return _context.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMemberFinances(_x) {
        return _ref.apply(this, arguments);
      }

      return getMemberFinances;
    }()

    /**
     * Gets public information on a member.
     *
     * This method does not require any authorization.
     *
     * @param {String} handle Member handle.
     * @return {Promise} Resolves to the data object.
     */

  }, {
    key: 'getMemberInfo',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(handle) {
        var res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.private.api.get('/members/' + handle);

              case 2:
                res = _context2.sent;
                return _context2.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMemberInfo(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getMemberInfo;
    }()

    /**
     * Gets member external account info.
     * @param {String} handle
     * @return {Promise} Resolves to the stats object.
     */

  }, {
    key: 'getExternalAccounts',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(handle) {
        var res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.private.api.get('/members/' + handle + '/externalAccounts');

              case 2:
                res = _context3.sent;
                return _context3.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getExternalAccounts(_x3) {
        return _ref3.apply(this, arguments);
      }

      return getExternalAccounts;
    }()

    /**
     * Gets member external links.
     * @param {String} handle
     * @return {Promise} Resolves to the stats object.
     */

  }, {
    key: 'getExternalLinks',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(handle) {
        var res;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.private.api.get('/members/' + handle + '/externalLinks');

              case 2:
                res = _context4.sent;
                return _context4.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getExternalLinks(_x4) {
        return _ref4.apply(this, arguments);
      }

      return getExternalLinks;
    }()

    /**
     * Gets member skills.
     * @param {String} handle
     * @return {Promise} Resolves to the stats object.
     */

  }, {
    key: 'getSkills',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(handle) {
        var res;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.private.api.get('/members/' + handle + '/skills');

              case 2:
                res = _context5.sent;
                return _context5.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getSkills(_x5) {
        return _ref5.apply(this, arguments);
      }

      return getSkills;
    }()

    /**
     * Gets member statistics.
     * @param {String} handle
     * @return {Promise} Resolves to the stats object.
     */

  }, {
    key: 'getStats',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(handle) {
        var res;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.private.api.get('/members/' + handle + '/stats');

              case 2:
                res = _context6.sent;
                return _context6.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getStats(_x6) {
        return _ref6.apply(this, arguments);
      }

      return getStats;
    }()

    /**
     * Gets a list of suggested member names for the supplied partial.
     *
     * WARNING: This method requires v3 authorization.
     *
     * @param {String} keyword Partial string to find suggestions for
     * @return {Promise} Resolves to the api response content
     */

  }, {
    key: 'getMemberSuggestions',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(keyword) {
        var res;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.private.api.get('/members/_suggest/' + keyword);

              case 2:
                res = _context7.sent;
                return _context7.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getMemberSuggestions(_x7) {
        return _ref7.apply(this, arguments);
      }

      return getMemberSuggestions;
    }()

    /**
     * Adds external web link for member.
     * @param {String} userHandle The user handle
     * @param {String} webLink The external web link
     * @return {Promise} Resolves to the api response content
     */

  }, {
    key: 'addWebLink',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(userHandle, webLink) {
        var res;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.private.api.postJson('/members/' + userHandle + '/externalLinks', { param: { url: webLink } });

              case 2:
                res = _context8.sent;
                return _context8.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function addWebLink(_x8, _x9) {
        return _ref8.apply(this, arguments);
      }

      return addWebLink;
    }()

    /**
     * Deletes external web link for member.
     * @param {String} userHandle The user handle
     * @param {String} webLinkHandle The external web link handle
     * @return {Promise} Resolves to the api response content
     */

  }, {
    key: 'deleteWebLink',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(userHandle, webLinkHandle) {
        var body, res;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                body = {
                  param: {
                    handle: webLinkHandle
                  }
                };
                _context9.next = 3;
                return this.private.api.delete('/members/' + userHandle + '/externalLinks/' + webLinkHandle, (0, _stringify2.default)(body));

              case 3:
                res = _context9.sent;
                return _context9.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 5:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function deleteWebLink(_x10, _x11) {
        return _ref9.apply(this, arguments);
      }

      return deleteWebLink;
    }()

    /**
     * Adds user skill.
     * @param {String} handle Topcoder user handle
     * @param {Number} skillTagId Skill tag id
     * @return {Promise} Resolves to operation result
     */

  }, {
    key: 'addSkill',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(handle, skillTagId) {
        var body, res;
        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                body = {
                  param: {
                    skills: (0, _defineProperty3.default)({}, skillTagId, {
                      hidden: false
                    })
                  }
                };
                _context10.next = 3;
                return this.private.api.patchJson('/members/' + handle + '/skills', body);

              case 3:
                res = _context10.sent;
                return _context10.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 5:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function addSkill(_x12, _x13) {
        return _ref10.apply(this, arguments);
      }

      return addSkill;
    }()

    /**
     * Hides user skill.
     * @param {String} handle Topcoder user handle
     * @param {Number} skillTagId Skill tag id
     * @return {Promise} Resolves to operation result
     */

  }, {
    key: 'hideSkill',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(handle, skillTagId) {
        var body, res;
        return _regenerator2.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                body = {
                  param: {
                    skills: (0, _defineProperty3.default)({}, skillTagId, {
                      hidden: true
                    })
                  }
                };
                _context11.next = 3;
                return this.private.api.fetch('/members/' + handle + '/skills', {
                  body: (0, _stringify2.default)(body),
                  method: 'PATCH'
                });

              case 3:
                res = _context11.sent;
                return _context11.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 5:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function hideSkill(_x14, _x15) {
        return _ref11.apply(this, arguments);
      }

      return hideSkill;
    }()

    /**
     * Updates member profile.
     * @param {Object} profile The profile to update.
     * @return {Promise} Resolves to the api response content
     */

  }, {
    key: 'updateMemberProfile',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(profile) {
        var res;
        return _regenerator2.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.private.api.putJson('/members/' + profile.handle, { param: profile });

              case 2:
                res = _context12.sent;
                return _context12.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function updateMemberProfile(_x16) {
        return _ref12.apply(this, arguments);
      }

      return updateMemberProfile;
    }()

    /**
     * Gets presigned url for member photo file.
     * @param {String} userHandle The user handle
     * @param {File} file The file to get its presigned url
     * @return {Promise} Resolves to the api response content
     */

  }, {
    key: 'getPresignedUrl',
    value: function () {
      var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(userHandle, file) {
        var res, payload;
        return _regenerator2.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.private.api.postJson('/members/' + userHandle + '/photoUploadUrl', { param: { contentType: file.type } });

              case 2:
                res = _context13.sent;
                _context13.next = 5;
                return (0, _tc.getApiResponsePayloadV3)(res);

              case 5:
                payload = _context13.sent;
                return _context13.abrupt('return', {
                  preSignedURL: payload.preSignedURL,
                  token: payload.token,
                  file: file,
                  userHandle: userHandle
                });

              case 7:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getPresignedUrl(_x17, _x18) {
        return _ref13.apply(this, arguments);
      }

      return getPresignedUrl;
    }()

    /**
     * Updates member photo.
     * @param {Object} S3Response The response from uploadFileToS3() function.
     * @return {Promise} Resolves to the api response content
     */

  }, {
    key: 'updateMemberPhoto',
    value: function () {
      var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(S3Response) {
        var res;
        return _regenerator2.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.private.api.putJson('/members/' + S3Response.userHandle + '/photo', { param: S3Response.body });

              case 2:
                res = _context14.sent;
                return _context14.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function updateMemberPhoto(_x19) {
        return _ref14.apply(this, arguments);
      }

      return updateMemberPhoto;
    }()

    /**
     * Uploads file to S3.
     * @param {Object} presignedUrlResponse The presigned url response from
     *                                      getPresignedUrl() function.
     * @return {Promise} Resolves to the api response content
     */

  }, {
    key: 'uploadFileToS3',
    value: function uploadFileToS3(presignedUrlResponse) {
      _lodash2.default.noop(this);
      return new _promise2.default(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('PUT', presignedUrlResponse.preSignedURL, true);
        xhr.setRequestHeader('Content-Type', presignedUrlResponse.file.type);

        xhr.onreadystatechange = function () {
          var status = xhr.status;

          if ((status >= 200 && status < 300 || status === 304) && xhr.readyState === 4) {
            resolve({
              userHandle: presignedUrlResponse.userHandle,
              body: {
                token: presignedUrlResponse.token,
                contentType: presignedUrlResponse.file.type
              }
            });
          } else if (status >= 400) {
            var err = new Error('Could not upload image to S3');
            err.status = status;
            reject(err);
          }
        };

        xhr.onerror = function (err) {
          _logger2.default.error('Could not upload image to S3', err);

          reject(err);
        };

        xhr.send(presignedUrlResponse.file);
      });
    }
  }]);
  return MembersService;
}();

var lastInstance = null;
/**
 * Returns a new or existing members service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {MembersService} Members service object
 */
function getService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new MembersService(tokenV3);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
exports.default = undefined;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(42);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _reduxActions = __webpack_require__(2);

var _tcAccounts = __webpack_require__(46);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @desc Creates an action that loads Topcoder user profile from v3 API.
 * @param {String} userTokenV3 v3 authentication token.
 * @return {Action}
 */
function loadProfileDone(userTokenV3) {
  if (!userTokenV3) return _promise2.default.resolve(null);
  var user = (0, _tcAccounts.decodeToken)(userTokenV3);
  var api = (0, _api.getApiV3)(userTokenV3);
  return _promise2.default.all([api.get('/members/' + user.handle).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res.result.status === 200 ? res.result.content : {};
  }), api.get('/groups?memberId=' + user.userId + '&membershipType=user').then(function (res) {
    return res.json();
  }).then(function (res) {
    return res.result.status === 200 ? res.result.content : [];
  })]).then(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        profile = _ref2[0],
        groups = _ref2[1];

    return (0, _extends3.default)({}, profile, { groups: groups });
  });
}

/**
 * @static
 * @desc Creates an action that sets Topcoder v2 authentication token.
 * @param {String} tokenV2 Topcoder v2 authentication token.
 * @return {Action}
 */
/**
 * @module "actions.auth"
 * @desc Actions related to Topcoder authentication system.
 */

function setTcTokenV2(tokenV2) {
  return tokenV2;
}

/**
 * @static
 * @desc Creates an action that decodes Topcoder v3 authentication token,
 * to get user object, and then writes both the token and the user object into
 * Redux store.
 * @param {String} tokenV3 Topcoder v3 authentication token.
 * @return {Action}
 */
function setTcTokenV3(tokenV3) {
  return tokenV3;
}

exports.default = (0, _reduxActions.createActions)({
  AUTH: {
    LOAD_PROFILE: loadProfileDone,
    SET_TC_TOKEN_V2: setTcTokenV2,
    SET_TC_TOKEN_V3: setTcTokenV3
  }
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(19) && !__webpack_require__(23)(function () {
  return Object.defineProperty(__webpack_require__(48)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(24);
var toIObject = __webpack_require__(25);
var arrayIndexOf = __webpack_require__(123)(false);
var IE_PROTO = __webpack_require__(53)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(18);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(27);
var ITERATOR = __webpack_require__(6)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(18);
var aFunction = __webpack_require__(31);
var SPECIES = __webpack_require__(6)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var isObject = __webpack_require__(17);
var newPromiseCapability = __webpack_require__(62);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var core = __webpack_require__(3);
var dP = __webpack_require__(16);
var DESCRIPTORS = __webpack_require__(19);
var SPECIES = __webpack_require__(6)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(6)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(34);
var createDesc = __webpack_require__(32);
var toIObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(49);
var has = __webpack_require__(24);
var IE8_DOM_DEFINE = __webpack_require__(77);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(19) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(158), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(33);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(78);
var hiddenKeys = __webpack_require__(55).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(165), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_96__;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDuration = exports.delay = undefined;

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Returns a Promise that resolves after the specified delay.
 * @param {Number} time Delay [ms].
 * @return {Promise}
 */
var delay = exports.delay = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(time) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new _promise2.default(function (resolve) {
              return setTimeout(function () {
                return resolve();
              }, time);
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function delay(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Standard duration formatting for listings and details
 *
 * @param {Number} time Time in milliseconds
 * @return {String} Formatted duration
 */


var _moment = __webpack_require__(68);

var _moment2 = _interopRequireDefault(_moment);

__webpack_require__(167);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module time
 * @desc Utility functions for time/date related stuff
 */
var HOUR_MS = 60 * 60 * 1000;
var DAY_MS = 24 * HOUR_MS;var formatDuration = exports.formatDuration = function formatDuration(time) {
  var format = void 0;
  if (time > DAY_MS) format = 'D[d] H[h]';else if (time > HOUR_MS) format = 'H[h] m[min]';else format = 'm[min] s[s]';

  return _moment2.default.duration(time).format(format);
};

exports.default = undefined;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * @static
 * @desc Create an action that gets statistics related to the specified
 * community. Data will be loaded into `stats.communities[communityId]` path of
 * the Redux store.
 * @todo The action should be refactored, see comments in the code.
 * @param {Object} community details of the community.
 * @param {String} uuid Operation UUID
 * @param {Array} challenges challenges from challengeListing to filter and do statistics
 * @param {String} token V3 Topcoder auth token. It is necessary to get data
 *  related to private groups.
 * @return {Action}
 */
/* TODO: This code should be moved to a dedicated service. */
var getCommunityStatsDone = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(community, uuid, challenges, token) {
    var filtered, filterFunction, totalPrize, groupService, result, groupId;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            /* TODO: At the moment, this component loads challenge objects to calculate
            * the number of challenges and the total prize. Probably in future, we'll
            * have a special API to get these data. */
            filtered = challenges.filter(function (x) {
              return x.status === 'ACTIVE';
            });

            if (community.challengeFilter) {
              filterFunction = Filter.getFilterFunction(community.challengeFilter);

              filtered = filtered.filter(filterFunction);
            }
            totalPrize = filtered.reduce(function (total, challenge) {
              return total + (challenge.totalPrize || 0);
            }, 0);
            groupService = (0, _groups.getService)(token);
            result = {
              community: community.communityId,
              stats: {},
              uuid: uuid
            };

            if (filtered.length) result.stats.numChallenges = filtered.length;
            if (totalPrize) result.stats.openPrizes = '$' + totalPrize.toLocaleString();

            groupId = _lodash2.default.get(community, 'groupIds[0]');

            if (!groupId) {
              _context.next = 13;
              break;
            }

            _context.next = 12;
            return groupService.getMembersCount(groupId, true);

          case 12:
            result.stats.numMembers = _context.sent;

          case 13:
            return _context.abrupt('return', result);

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', {
              community: community.communityId,
              stats: {},
              uuid: uuid
            });

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 16]]);
  }));

  return function getCommunityStatsDone(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _filter = __webpack_require__(99);

var Filter = _interopRequireWildcard(_filter);

var _groups = __webpack_require__(72);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @desc Creates an action that signals beginning of the loading community
 *  stats.
 * @param {Object} community Community meta-data object.
 * @param {String} [community.communityId] Community ID.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */
/**
 * @module "actions.stats"
 * @desc Actions related to Topcoder statistics (at the moment, only community
 *  statistics).
 */

function getCommunityStatsInit(community, uuid) {
  return { community: community.communityId, uuid: uuid };
}exports.default = (0, _reduxActions.createActions)({
  STATS: {
    GET_COMMUNITY_STATS_INIT: getCommunityStatsInit,
    GET_COMMUNITY_STATS_DONE: getCommunityStatsDone
  }
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__(71);

var _set2 = _interopRequireDefault(_set);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.addTrack = addTrack;
exports.getFilterFunction = getFilterFunction;
exports.getReviewOpportunitiesFilterFunction = getReviewOpportunitiesFilterFunction;
exports.combine = combine;
exports.mapToBackend = mapToBackend;
exports.removeTrack = removeTrack;
exports.setEndDate = setEndDate;
exports.setReviewOpportunityType = setReviewOpportunityType;
exports.setStartDate = setStartDate;
exports.setSubtracks = setSubtracks;
exports.setTags = setTags;
exports.setText = setText;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = __webpack_require__(68);

var _moment2 = _interopRequireDefault(_moment);

var _tc = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Here are many similiar filerBy..(challenge, state) functions. Each of them
 * checks whether the given challenge fulfills the corresponding filtering rule
 * from the filter state object, and returns true or false depending on it.
 */

function filterByEndDate(challenge, state) {
  if (!state.endDate) return true;
  return (0, _moment2.default)(state.endDate).isAfter(challenge.registrationStartDate);
} /**
   * @module "challenge.filter"
   *
   * @desc
   * Universal challenge filter. Must be used in all places where we need filter
   * or fetch challenges. This way we keep all related logic in the same place,
   * which simplifies maintenance and modifications of the code.
   *
   * The state of challenge filter is a plain JS object, containing only plain
   * data fields. It allows to avoid any problems with its storage inside Redux
   * store; with its serialization into / deserialization from a string. Each
   * field of the state describes a single rule for filtering the challenges.
   * The filter allows only those challenges that match all defined rules.
   * Undefined, null fields are ignored.
   *
   * The following fields are supported:
   *
   * endDate {Number|String} - Permits only those challenges with submission
   * deadline before this date.
   *
   * groupIds {Array} - Permits only the challenges belonging to at least one
   * of the groups which IDs are presented as keys in this object.
   *
   * or {Object[]} - All other filter fields applied to the challenge with AND
   * logic, i.e. a challenge must satisfy each specified filter rule to match the
   * filter as whole. In some cases we want to have OR logic between filter rules,
   * and this array allows to achieve it: each object in this array is treated as
   * an additional filter (these object may have all the same fields as the root
   * filter state object), to be tested with OR logic.
   *
   * registrationOpen {Boolean} - Permits only the challenges with open or closed
   * registration.
   *
   * startDate {Number|String} - Permits only those challenges started after this
   * date.
   *
   * status {Array} - Permits only the challenges with status matching one of
   * the keys of this object.
   *
   * started {Boolean} - Matches only the challenges with start date in past.
   * It turns out that status ACTIVE also includes upcoming activated challenges,
   * thus we need this additional filter.
   *
   * subtracks {Array} - Permits only the challenges belonging to at least one
   * of the competition subtracks presented as keys of this object.
   *
   * tags {Array} - Permits only the challenges that have at least one of the
   * tags within their platform and technology tags (keywords).
   *
   * text {String} - Free-text string which will be matched against challenge
   * name, its platform and technology tags. If not found anywhere, the challenge
   * is filtered out. Case-insensitive.
   *
   * tracks {Object} - Permits only the challenges belonging to at least one of
   * the competition tracks presented as keys of this object.
   *
   * upcoming {Boolean} - Permits only upcoming challenges.
   *
   * users {Array} - Permits only the challenges where the specified (by handles)
   * users are participating.
   */

function filterByGroupIds(challenge, state) {
  if (!state.groupIds) return true;
  return state.groupIds.some(function (id) {
    return challenge.groups[id];
  });
}

function filterByRegistrationOpen(challenge, state) {
  if (_lodash2.default.isUndefined(state.registrationOpen)) return true;
  var isRegOpen = function isRegOpen() {
    if (challenge.registrationOpen) {
      return challenge.registrationOpen === 'Yes';
    }
    if (challenge.subTrack === 'MARATHON_MATCH') {
      return challenge.status !== 'PAST';
    }
    var registrationPhase = challenge.allPhases.find(function (item) {
      return item.phaseType === 'Registration';
    });
    if (!registrationPhase || registrationPhase.phaseStatus !== 'Open') {
      return false;
    }
    if (challenge.track === 'DESIGN') {
      var checkpointPhase = challenge.allPhases.find(function (item) {
        return item.phaseType === 'Checkpoint Submission';
      });
      return !checkpointPhase || checkpointPhase.phaseStatus !== 'Closed';
    }
    return true;
  };
  return isRegOpen() === state.registrationOpen;
}

/**
 * Filter function for Review Opportunity Type, will be used internally in filter.js
 * @param {Object} opp Review Opportunity object
 * @param {Object} state Filter state
 * @return {Boolean} True if opp satifies the filter
 */
function filterByReviewOpportunityType(opp, state) {
  if (!state.reviewOpportunityType) return true;
  return opp.type === state.reviewOpportunityType;
}

function filterByStartDate(challenge, state) {
  if (!state.startDate) return true;
  return (0, _moment2.default)(state.startDate).isBefore(challenge.submissionEndDate);
}

function filterByStarted(challenge, state) {
  if (_lodash2.default.isUndefined(state.started)) return true;
  return (0, _moment2.default)(challenge.registrationStartDate).isBefore(Date.now());
}

function filterByStatus(challenge, state) {
  if (!state.status) return true;
  return state.status.includes(challenge.status);
}

function filterBySubtracks(challenge, state) {
  if (!state.subtracks) return true;

  /* TODO: Although this is taken from the current code in prod,
   * it probably does not work in all cases. It should be double-checked,
   * why challenge subtracks in challenge objects are different from those
   * return from the API as the list of possible subtracks. */
  var filterSubtracks = state.subtracks.map(function (item) {
    return item.toLowerCase().replace(/[_ ]/g, '');
  });
  var challengeSubtrack = challenge.subTrack.toLowerCase().replace(/[_ ]/g, '');
  return filterSubtracks.includes(challengeSubtrack);
}

function filterByTags(challenge, state) {
  if (!state.tags) return true;
  var platforms = challenge.platforms,
      technologies = challenge.technologies;

  var str = (platforms + ' ' + technologies).toLowerCase();
  return state.tags.some(function (tag) {
    return str.includes(tag.toLowerCase());
  });
}

function filterByText(challenge, state) {
  if (!state.text) return true;
  var str = (challenge.name + ' ' + challenge.platforms + ' ' + challenge.technologies).toLowerCase();
  return str.includes(state.text.toLowerCase());
}

function filterByTrack(challenge, state) {
  if (!state.tracks) return true;

  /* Development challenges having Data Science tech tag, still should be
   * included into data science track. */
  if (state.tracks[_tc.COMPETITION_TRACKS.DATA_SCIENCE] && _lodash2.default.includes(challenge.technologies, 'Data Science')) {
    return true;
  }

  return _lodash2.default.keys(state.tracks).some(function (track) {
    return challenge.communities.has(track);
  });
}

function filterByUpcoming(challenge, state) {
  if (_lodash2.default.isUndefined(state.upcoming)) return true;
  return (0, _moment2.default)().isBefore(challenge.registrationStartDate);
}

function filterByUsers(challenge, state) {
  if (!state.users) return true;
  return state.users.find(function (user) {
    return challenge.users[user];
  });
}

/**
 * Returns clone of the state with the specified competition track added.
 * @param {Object} state
 * @param {String} track
 * @return {Object} Resulting state.
 */
function addTrack(state, track) {
  /* When state has no tracks field all tracks are allowed, thus no need to
   * touch the object. */
  if (!state.tracks) return state;

  var res = _lodash2.default.clone(state);
  res.tracks = _lodash2.default.clone(res.tracks);
  res.tracks[track] = true;

  /* Selecting all tracks is the same as having no tracks field. To keep the
   * state more simple at any time, we remove tracks field in such case. */
  if (!_lodash2.default.values(_tc.COMPETITION_TRACKS).some(function (item) {
    return !res.tracks[item];
  })) {
    delete res.tracks;
  }

  return res;
}

/**
 * Generates filter function for the state.
 * @param {Object} state
 * @return {Function}
 */
function getFilterFunction(state) {
  return function (challenge) {
    var test = filterByStatus(challenge, state) && filterByTrack(challenge, state) && filterByUpcoming(challenge, state) && filterByGroupIds(challenge, state) && filterByText(challenge, state) && filterByTags(challenge, state) && filterBySubtracks(challenge, state) && filterByUsers(challenge, state) && filterByEndDate(challenge, state) && filterByStartDate(challenge, state) && filterByStarted(challenge, state) && filterByRegistrationOpen(challenge, state);
    if (!test && state.or) {
      var pos = 0;
      while (!test && pos < state.or.length) {
        test = getFilterFunction(state.or[pos])(challenge);
        pos += 1;
      }
    }
    return test;
  };
}

/**
 * Generates a Review Opportunities filter function for the provided filter state.
 * @param {Object} state
 * @return {Function}
 */
function getReviewOpportunitiesFilterFunction(state) {
  return function (opp) {
    // Review Opportunity objects have a challenge field which
    // is largely compatible with many of the existing filter functions
    // especially after a few normalization tweaks
    var challenge = (0, _extends3.default)({}, opp.challenge, {
      // This allows filterByText to search for Review Types and Challenge Titles
      name: opp.challenge.title + ' ' + _tc.REVIEW_OPPORTUNITY_TYPES[opp.type],
      registrationStartDate: opp.startDate, // startDate of Review, not Challenge
      subTrack: opp.challenge.subTrack || '', // Sometimes back-end doesn't return this field
      submissionEndDate: opp.startDate, // Currently uses startDate for both date comparisons
      communities: new _set2.default([// Used to filter by Track, and communities at a future date
      opp.challenge.track.toLowerCase()])
    });

    return filterByTrack(challenge, state) && filterByText(challenge, state) && filterByTags(challenge, state) && filterBySubtracks(challenge, state) && filterByEndDate(challenge, state) && filterByStartDate(challenge, state) && filterByReviewOpportunityType(opp, state);
  };
}

/* ************************************************************************** */
/* Below is a group of functions that allow to combine multiple challenge
 * filters together. If you are not adding a new filter functionality, just
 * look for the exported combine(..) function.
 *
 * All other helper functions in this section take two filter state objects as
 * arguments, and combine some of the filter rules, merging the resulting one
 * into the first filter state object.
 */

/* NOTE: Current implementation ignores plenty of rules when combining filters.
 * It is fine for the only current use case: we use combine just before calling
 * to mapToBackend(..) function, to map several frontend filters to the
 * matching backend one. The way mapToBackend(..) works, this ignoring of
 * some rules is not a big deal (resulting backend filter will be not that
 * specific, as it probably could be, but due to the current api limitations
 * we cannot be too specific anyway). If you are going to use this for anything
 * else - thing twice what are you doing? If you need it for filtering, it is
 * just a lot easier to filter by each frontend filter in turns, rather than
 * combine them into a single filter. */

/* This ESLint rule is disabled for combineXXX(..) functions, as they are
 * intended to be used only internally, with a newly constructed object
 * passed in as the first argument (i.e. we take care that there is no
 * side-effects to mutate it within this module, and these functions
 * are not exported outside of the module). */
/* eslint-disable no-param-reassign */

function combineArrayRules(a, b, ruleName) {
  var or = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (a[ruleName] && b[ruleName]) {
    if (or) a[ruleName] = _lodash2.default.uniq(a[ruleName].concat(b[ruleName]));else a[ruleName] = _lodash2.default.intersection(a[ruleName], b[ruleName]);
  } else if (b[ruleName]) a[ruleName] = b[ruleName];
}

function combineEndDate(a, b) {
  if (a.endDate && b.endDate) {
    a.endDate = _moment2.default.min(a.endDate, b.endDate).format();
  } else if (b.endDate) a.endDate = b.endDate;
}

function combineStartDate(a, b) {
  if (a.startDate && b.startDate) {
    a.startDate = _moment2.default.max(a.startDate, b.startDate).format();
  } else if (b.startDate) a.startDate = b.startDate;
}

function combineTracks(a, b) {
  if (a.tracks && b.tracks) {
    _lodash2.default.forIn(a.tracks, function (value, key) {
      if (!b.tracks[key]) delete a.tracks[key];
    });
  } else if (b.tracks) a.tracks = b.tracks;
}

/* eslint-enable no-param-reassign */

/**
 * Combines multiple filter state objects together. Resulting state describes
 * the filter, which matches only those challenges that satisfy each of the
 * filters passed in as arguments.
 *
 * The main intended use of this function is to combine multiple frontend
 * challenge filters into a single one, that can be mapped into the
 * corresponding backend filter by mapToBackend(..) function.
 *
 * @param {Object} filters Input filter state objects to combine.
 * @return {Object}
 */
function combine() {
  var res = {};

  for (var _len = arguments.length, filters = Array(_len), _key = 0; _key < _len; _key++) {
    filters[_key] = arguments[_key];
  }

  filters.forEach(function (filter) {
    combineEndDate(res, filter);
    combineArrayRules(res, filter, 'groupIds');
    /* TODO: The registrationOpen rule is just ignored for now. */
    combineStartDate(res, filter);
    combineArrayRules(res, filter, 'or', true);
    combineArrayRules(res, filter, 'status');
    combineArrayRules(res, filter, 'subtracks');
    combineArrayRules(res, filter, 'tags');
    /* TODO: The text rule is just ignored for now. */
    combineTracks(res, filter);
    /* TODO: The upcoming rule is just ignored for now. */
    /* TODO: The users rule is just ignored for now. */
  });
  return res;
}

/* ************************************************************************** */
/* Below is a group of function that allow to map a frontend filter into the
 * corresponding backend (api) one. If you are not adding a new filter
 * functionality, just look for the exported mapToBackend(..) function. */

/**
 * Maps the frontend challenge filter into the corresponding backend (api) one.
 * As there is no 1:1 match between the frontend and backend challenge filters,
 * the resulting backend filter is always equal or broader than the given
 * frontend one; i.e. any challenge that satisfies the original frontend filter
 * will pass the backend one, though some of the challenges that pass the
 * backend filter may fail the frontend one.
 *
 * It is assumed that this function will help us to load challenges from the
 * backend more specifically, though it does not prevent as from the need
 * always perform the final filtering at the frontend side.
 *
 * @param {Object} filter
 * @return {Object}
 */
function mapToBackend(filter) {
  if (filter.or) return {};

  var res = {};
  if (filter.groupIds) res.groupIds = filter.groupIds.join(',');

  /* NOTE: Right now the frontend challenge filter by tag works different,
   * it looks for matches in the challenge name OR in the techs / platforms. */
  // if (filter.tags) res.technologies = filter.tags.join(',');

  return res;
}

/**
 * Returns clone of the state with the specified competition track removed.
 * @param {Object} state
 * @param {String} track
 * @return {Object} Resulting state.
 */
function removeTrack(state, track) {
  var res = _lodash2.default.clone(state);
  if (res.tracks) res.tracks = _lodash2.default.clone(res.tracks);else {
    res.tracks = {};
    _lodash2.default.forIn(_tc.COMPETITION_TRACKS, function (item) {
      res.tracks[item] = true;
    });
  }
  delete res.tracks[track];
  return res;
}

/**
 * Clone the state and sets the end date.
 * @param {Object} state
 * @param {String} date
 * @return {Object}
 */
function setEndDate(state, date) {
  if (date) return (0, _extends3.default)({}, state, { endDate: date });
  if (!state.endDate) return state;
  var res = _lodash2.default.clone(state);
  delete res.endDate;
  return res;
}

/**
 * Clones the state and sets the review opportunity type.
 * @param {Object} state
 * @param {Array} reviewOpportunityType Possible values found in utils/tc REVIEW_OPPORTUNITY_TYPES
 * @return {Object}
 */
function setReviewOpportunityType(state, reviewOpportunityType) {
  if (reviewOpportunityType) return (0, _extends3.default)({}, state, { reviewOpportunityType: reviewOpportunityType });
  if (!state.reviewOpportunityType) return state;
  var res = _lodash2.default.clone(state);
  delete res.reviewOpportunityType;
  return res;
}

/**
 * Clones the state and sets the start date.
 * @param {Object} state
 * @param {String} date ISO date string.
 * @return {Object}
 */
function setStartDate(state, date) {
  if (date) return (0, _extends3.default)({}, state, { startDate: date });
  if (!state.startDate) return state;
  var res = _lodash2.default.clone(state);
  delete res.startDate;
  return res;
}

/**
 * Clones the state and sets the subtracks.
 * @param {Object} state
 * @param {Array} subtracks
 * @return {Object}
 */
function setSubtracks(state, subtracks) {
  if (subtracks && subtracks.length) return (0, _extends3.default)({}, state, { subtracks: subtracks });
  if (!state.subtracks) return state;
  var res = _lodash2.default.clone(state);
  delete res.subtracks;
  return res;
}

/**
 * Clones the state and sets the tags.
 * @param {Object} state
 * @param {Array} tags String array.
 * @return {Object}
 */
function setTags(state, tags) {
  if (tags && tags.length) return (0, _extends3.default)({}, state, { tags: tags });
  if (!state.tags) return state;
  var res = _lodash2.default.clone(state);
  delete res.tags;
  return res;
}

/**
 * Clones fitler state and sets the free-text string for the filtering by
 * challenge name and tags. To clear the string set it to anything evaluating
 * to falst (empty string, null, undefined).
 * @param {Object} state
 * @param {String} text
 * @return {Object} Resulting string.
 */
function setText(state, text) {
  if (!text && !state.text) return state;
  var res = _lodash2.default.clone(state);
  if (text) res.text = text;else delete res.text;
  return res;
}

exports.default = undefined;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _topcoderReactUtils = __webpack_require__(7);

var _terms = __webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @desc Creates an action that signals beginning of fetching terms data.
 * @todo Figure out the exact meaning of the argument.
 * @param {String} arg An argument. The exact meaning to be figured out.
 * @return {Action}
 */
/**
 * @module "actions.terms"
 * @desc Actions related to Topcoder terms of use.
 */

function getTermsInit(arg) {
  return arg;
}

/**
 * @static
 * @desc Creates an action that fetches terms of the specified entity.
 * @param {Object}  entity       entity object
 * @param {String}  [entity.type]  entity type: `challenge` or `community`
 * @param {String}  [entity.id]    entity id
 * @param {Object}  tokens       object with tokenV2 and tokenV3 properties
 * @param {Boolean} mockAgreed   if true, then all terms will be mocked as
 *  agreed this only makes effect if MOCK_TERMS_SERVICE is `true` and the only
 *  purpose of this param is testing terms
 * @return {Action}
 */
function getTermsDone(entity, tokens, mockAgreed) {
  var service = (0, _terms.getService)(tokens.tokenV2);
  var termsPromise = void 0;

  // if mockAgreed=true passed, then we create an array of 10 true which we pass to the
  // terms service methods.
  // when terms service is mocked by setting MOCK_TERMS_SERVICE=true
  // it will make all terms to have agreed status (actually only first 10 will be agreed,
  // but we will hardly have even more then 3 terms per entity)
  var mockAgreedArray = mockAgreed ? Array(10 + 1).join('1').split('').map(function () {
    return true;
  }) : [];

  switch (entity.type) {
    case 'challenge':
      {
        termsPromise = service.getChallengeTerms(entity.id, mockAgreedArray);
        break;
      }
    case 'community':
      {
        termsPromise = service.getCommunityTerms(entity.id, tokens.tokenV3, mockAgreedArray);
        break;
      }
    case 'reviewOpportunity':
      {
        termsPromise = service.getReviewOpportunityTerms(entity.reviewOpportunityTerms);
        break;
      }
    default:
      throw new Error('Entity type \'' + entity.type + '\' is not supported by getTermsDone.');
  }

  return termsPromise.then(function (res) {
    return { entity: entity, terms: res.terms };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of terms status check
 *  operation.
 * @return {Action}
 */
function checkStatusInit() {}

/**
 * @static
 * @desc Creates an action thatwill check if all terms of specified entity have been agreed,
 *
 * @todo As in some reason backend does not saves immediately that DocuSign term has been agreed
 * In case not all terms were agreed we try again after some delay.
 * Maximum quantity attempts and delay between attempts are configured in
 * MAX_ATTEMPTS and TIME_OUT
 *
 * @todo: Looks like the bug described above was caused by server caching responses
 * at least for getTermDetails which is used by getCommunityTerms.
 * To fix it I've added nocache random value param in the terms service
 * for getTermDetails and it looks like works so we get results immediately.
 * This still have to be tested for challenges as they use another endpoint
 * in method getChallengeTerms.
 * Also terms which use third part service DocuSign has to be also tested prior
 * to removing multiple checks.
 * In case their agreed status is updated immediately, this code
 * has to simplified and don't make several attempts, only one.
 *
 * @param {Object} entity       entity object
 * @param {String} [entity.type]  entity type `challenge` or `community`.
 * @param {String} [entity.id]    entity id
 * @param {Object} tokens       object with tokenV2 and tokenV3 properties
 *
 * @return {Acion}
 */
function checkStatusDone(entity, tokens) {
  // timeout between checking status attempts
  var TIME_OUT = 5000;

  // maximum attempts to check status
  var MAX_ATTEMPTS = 5;

  // we set this flag for getTermsDone when MOCK_TERMS_SERVICE is true
  // so that checkStatusDone resolves to all terms agreed when mocking
  var mockAgreed = _topcoderReactUtils.config.MOCK_TERMS_SERVICE;

  /*
   * Promisified setTimeout
   * @param  {Number} timeout timeout in milliseconds
   * @return {Promise}         resolves after timeout
   */
  var delay = function delay(timeout) {
    return new _promise2.default(function (resolve) {
      setTimeout(resolve, timeout);
    });
  };

  /*
   * Makes attempt to check status
   * @param  {Number} maxAttempts maximum number of attempts to perform
   * @return {Promise}            resolves to the list of term objects
   */
  var checkStatus = function checkStatus(maxAttempts) {
    return getTermsDone(entity, tokens, mockAgreed).then(function (res) {
      var allAgreed = _lodash2.default.every(res.terms, 'agreed');

      // if not all terms are agreed and we still have some attempts to try
      if (!allAgreed && maxAttempts > 1) {
        return delay(TIME_OUT).then(function () {
          return checkStatus(maxAttempts - 1);
        });
      }

      return res.terms;
    });
  };

  return checkStatus(MAX_ATTEMPTS);
}

/**
 * @static
 * @desc Creates an action that marks that we are about to fetch details of the
 *  specified term. If any details for another term are currently being fetched,
 * they will be silently discarded.
 * @param {Number|String} termId
 * @return {Action}
 */
function getTermDetailsInit(termId) {
  return _lodash2.default.toString(termId);
}

/**
 * @static
 * @desc Creates an action that fetches details of the specified term.
 * @param {Number|String} termId
 * @param {String} tokenV2
 * @return {Action}
 */
function getTermDetailsDone(termId, tokenV2) {
  var service = (0, _terms.getService)(tokenV2);
  return service.getTermDetails(termId).then(function (details) {
    return { termId: termId, details: details };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of getting a DocuSign URL.
 * @param  {Number|String} templateId id of document template to sign
 * @return {Action}
 */
function getDocuSignUrlInit(templateId) {
  return _lodash2.default.toString(templateId);
}

/**
 * @static
 * @desc Creates an action that generates the url of DoduSign term
 * @param  {Number|String} templateId id of document template to sign
 * @param  {String} returnUrl  callback url after finishing singing
 * @param  {String} tokenV2    auth token
 * @return {Action}
 */
function getDocuSignUrlDone(templateId, returnUrl, tokenV2) {
  var service = (0, _terms.getService)(tokenV2);
  return service.getDocuSignUrl(templateId, returnUrl).then(function (resp) {
    return { templateId: templateId, docuSignUrl: resp.recipientViewUrl };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of terms agreement operation.
 * @param  {Number|String} termId id of term
 * @return {Action}
 */
function agreeTermInit(termId) {
  return _lodash2.default.toString(termId);
}

/**
 * @static
 * @desc Creates an action that agrees to a term.
 * @param  {Number|String} termId id of term
 * @param  {String} tokenV2    auth token
 * @return {Action}
 */
function agreeTermDone(termId, tokenV2) {
  var service = (0, _terms.getService)(tokenV2);
  return service.agreeTerm(termId).then(function (resp) {
    return { termId: termId, success: resp.success };
  });
}

exports.default = (0, _reduxActions.createActions)({
  TERMS: {
    GET_TERMS_INIT: getTermsInit,
    GET_TERMS_DONE: getTermsDone,
    GET_TERM_DETAILS_INIT: getTermDetailsInit,
    GET_TERM_DETAILS_DONE: getTermDetailsDone,
    GET_DOCU_SIGN_URL_INIT: getDocuSignUrlInit,
    GET_DOCU_SIGN_URL_DONE: getDocuSignUrlDone,
    AGREE_TERM_INIT: agreeTermInit,
    AGREE_TERM_DONE: agreeTermDone,
    CHECK_STATUS_INIT: checkStatusInit,
    CHECK_STATUS_DONE: checkStatusDone
  }
});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getService = getService;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _topcoderReactUtils = __webpack_require__(7);

var _communities = __webpack_require__(103);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Service class.
 */
/**
 * @module "services.terms"
 * @desc This module provides a service for convenient manipulation with
 * Topcoder challenges' terms via TC API.
 */

var TermsService = function () {
  /**
   * @param {String} tokenV2 Optional. Auth token for Topcoder API v2.
   */
  function TermsService(tokenV2) {
    (0, _classCallCheck3.default)(this, TermsService);

    this.private = {
      api: (0, _api.getApiV2)(tokenV2),
      tokenV2: tokenV2
    };
  }

  /**
   * get all terms of specified challenge
   * @param  {Number|String} challengeId id of the challenge
   * @return {Promise}       promise of the request result
   */


  (0, _createClass3.default)(TermsService, [{
    key: 'getChallengeTerms',
    value: function getChallengeTerms(challengeId) {
      var _this = this;

      if (this.private.tokenV2) {
        var registered = false;
        return this.private.api.get('/terms/' + challengeId + '?role=Submitter').then(function (res) {
          return res.json();
        }).then(function (res) {
          if (res.error) {
            if (res.error.details === 'You are already registered for this challenge.') {
              registered = true;
            }
            return _this.private.api.get('/terms/' + challengeId + '?role=Submitter&noauth=true').then(function (resp) {
              if (resp.ok) {
                return resp.json().then(function (result) {
                  if (registered) {
                    // eslint-disable-next-line no-param-reassign
                    _lodash2.default.forEach(result.terms, function (t) {
                      t.agreed = true;
                    });
                  }
                  return result;
                });
              }
              return new Error(resp.statusText);
            });
          }
          return res;
        });
      }
      return this.private.api.get('/terms/' + challengeId + '?role=Submitter&noauth=true').then(function (resp) {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error(resp.statusText);
      });
    }

    /**
     * get all terms for community
     *
     * NOTE: As there is no specific endpoint to get community terms by one call
     *       currently we get community term ids from community service and after
     *       we get community terms using term ids list one by one
     *
     * @param {String} communityId community id
     * @param {String} tokenV3     auth token V3 - we need to get community meta data
     *
     * @return {Promise} resolves to the list of community terms
     */

  }, {
    key: 'getCommunityTerms',
    value: function getCommunityTerms(communityId, tokenV3) {
      var _this2 = this;

      var communityService = (0, _communities.getService)(tokenV3);

      return communityService.getMetadata(communityId).then(function (meta) {
        if (meta.terms && meta.terms.length) {
          return _promise2.default.all(meta.terms.map(function (termId) {
            return _this2.getTermDetails(termId);
          })).then(function (terms) {
            return terms.map(function (term) {
              return _lodash2.default.omit(term, 'text');
            }) // don't include text as it's big and we need it for list
            ;
          });
        }

        return [];
      }).then(function (terms) {
        return {
          terms: terms
        };
      });
    }

    /**
     * Get the terms for Review Opportunities.  This will ensure that the
     * provided terms have all the necessary fields by getting anything missing
     * from the terms details endpoint
     *
     * @param {Object} requiredTerms Required terms for review opportunity
     *
     * @return {Promise} resolves to the list of validated terms
     */

  }, {
    key: 'getReviewOpportunityTerms',
    value: function getReviewOpportunityTerms(requiredTerms) {
      var _this3 = this;

      var promises = requiredTerms.map(function (term) {
        // Agreed field is present, all the necessary information is present for this term, but will
        // need to verify if agreed is false as user may have agreed to terms after data was loaded
        if (term.agreed) {
          return _promise2.default.resolve(term);
        }
        // Otherwise grab new details from terms api
        return _this3.getTermDetails(term.termsOfUseId).then(function (res) {
          return _lodash2.default.pick(res, ['termsOfUseId', 'agreed', 'title']);
        });
      });

      return _promise2.default.all(promises).then(function (terms) {
        return { terms: terms };
      });
    }

    /**
     * get details of specified term
     * @param  {Number|String} termId id of the term
     * @return {Promise}       promise of the request result
     */

  }, {
    key: 'getTermDetails',
    value: function getTermDetails(termId) {
      // looks like server cache responses, to prevent it we add nocache param with always new value
      var nocache = new Date().getTime();
      return this.private.api.get('/terms/detail/' + termId + '?nocache=' + nocache).then(function (res) {
        return res.ok ? res.json() : _promise2.default.reject(res.json());
      });
    }

    /**
     * generate the url of DocuSign term
     * @param  {Number|String} templateId id of the term's template
     * @param  {String}        returnUrl  callback url after finishing signing
     * @return {Promise}       promise of the request result
     */

  }, {
    key: 'getDocuSignUrl',
    value: function getDocuSignUrl(templateId, returnUrl) {
      return this.private.api.post('/terms/docusign/viewURL?templateId=' + templateId + '&returnUrl=' + returnUrl).then(function (res) {
        return res.ok ? res.json() : _promise2.default.reject(res.json());
      });
    }

    /**
     * Agree a term
     * @param  {Number|String} termId id of the term
     * @return {Promise}       promise of the request result
     */

  }, {
    key: 'agreeTerm',
    value: function agreeTerm(termId) {
      return this.private.api.post('/terms/' + termId + '/agree').then(function (res) {
        return res.ok ? res.json() : _promise2.default.reject(res.json());
      });
    }
  }]);
  return TermsService;
}();

var lastInstance = null;
/**
 * Returns a new or existing terms service.
 * @param {String} tokenV2 Optional. Auth token for Topcoder API v2.
 * @return {TermsService} Terms service object
 */
function getService(tokenV2) {
  /* Because of Topcoder backend restrictions, it is not straightforward to test
   * terms-related functionality in any other way than just providing an option
   * to run the app against mock terms service. */
  if (_topcoderReactUtils.config.MOCK_TERMS_SERVICE) {
    /* eslint-disable global-require */
    return __webpack_require__(186).getService(tokenV2);
    /* eslint-enable global-require */
  }
  if (!lastInstance || tokenV2 && lastInstance.private.tokenV2 !== tokenV2) {
    lastInstance = new TermsService(tokenV2);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
exports.default = undefined;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getService = getService;

var _isomorphicFetch = __webpack_require__(96);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _qs = __webpack_require__(39);

var _qs2 = _interopRequireDefault(_qs);

var _topcoderReactUtils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Client-side version of the service.
 */
var Communities = function () {
  /**
   * Creates a new {@link module:services.communities~Communities} instance.
   * @param {String} tokenV3
   */
  function Communities(tokenV3) {
    (0, _classCallCheck3.default)(this, Communities);

    this.private = { tokenV3: tokenV3 };
  }

  /**
   * Gets the list of communities accessible to the member of specified groups.
   * @param {String[]} userGroupIds
   * @return {Promise} Resolves to the array of community data objects. Each of
   *  the objects indludes only the most important data on the community.
   */


  (0, _createClass3.default)(Communities, [{
    key: 'getList',
    value: function getList(userGroupIds) {
      var url = '/community-app-assets/api/tc-communities?' + _qs2.default.stringify({ groups: userGroupIds });
      if (_topcoderReactUtils.config.URL && _topcoderReactUtils.config.URL.COMMUNITY_APP) {
        url = _topcoderReactUtils.config.URL.COMMUNITY_APP + 'url';
      }
      return (0, _isomorphicFetch2.default)(url, {
        headers: {
          authorization: this.private.tokenV3
        }
      }).then(function (res) {
        return res.json();
      });
    }

    /**
     * Gets metadata for the specified community.
     * @param {String} communityId
     * @return {Promise} Resolves to the community metadata.
     */

  }, {
    key: 'getMetadata',
    value: function getMetadata(communityId) {
      var url = '/community-app-assets/api/tc-communities/' + communityId + '/meta';
      if (_topcoderReactUtils.config.URL && _topcoderReactUtils.config.URL.COMMUNITY_APP) {
        url = _topcoderReactUtils.config.URL.COMMUNITY_APP + 'url';
      }
      return (0, _isomorphicFetch2.default)(url, {
        headers: {
          authorization: this.private.tokenV3
        }
      }).then(function (res) {
        return res.json();
      });
    }
  }]);
  return Communities;
}(); /**
      * @module "services.communities"
      * @desc Communities service.
      */


var lastInstance = null;

/**
 * Returns a new or existing communities service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {Communities} Communties service object
 */
function getService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new Communities(tokenV3);
  }
  return lastInstance;
}

exports.default = undefined;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * @static
 * @desc Creates an action that loads projects related to a user.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
var getUserProjectsDone = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(tokenV3) {
    var projects;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _direct.getService)(tokenV3).getUserProjects({
              hasActiveBillingAccount: true
            });

          case 2:
            projects = _context.sent;
            return _context.abrupt('return', { tokenV3: tokenV3, projects: projects });

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUserProjectsDone(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _direct = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @desc Creates an action that drops out of Redux store all Direct-related
 *  data, loaded by other actions from this module, and also cancels any pending
 *  loading operations.
 * @return {Action}
 */
function dropAll() {
  return null;
}

/**
 * @static
 * @desc Creates an action that signals beginning of project details loading.
 * @param {Number} projectId Project ID.
 * @return {Action}
 */
/**
 * @module "actions.direct"
 * @desc Actions related to Direct API: access to projects, billing accounts,
 * copilot operations, and other similar stuff is handled by them.
 */

function getProjectDetailsInit(projectId) {
  return projectId;
}

/**
 * @static
 * @desc Creates an action that loads project details.
 * @param {Number} projectId Project ID.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Action}
 */
function getProjectDetailsDone(projectId, tokenV3) {
  return (0, _direct.getService)(tokenV3).getProjectDetails(projectId);
}

/**
 * @static
 * @desc Creates an action that signals beginning of project permissions
 *  loading.
 * @param {Number|String} projectId Project ID.
 * @return {Action}
 */
function getProjectPermissionsInit(projectId) {
  return _lodash2.default.toNumber(projectId);
}

/**
 * @static
 * @desc Creates an action that loads project permissions.
 * @param {Number|String} projectId Project ID.
 * @param {String} tokenV3 Topcoder v3 auth token.
 * @return {Action}
 */
function getProjectPermissionsDone(projectId, tokenV3) {
  return (0, _direct.getService)(tokenV3).getProjectPermissions(projectId).then(function (permissions) {
    return { permissions: permissions, projectId: projectId };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of loading the projects
 *  related with a user.
 * @param {String} tokenV3 Topcoder v3 auth token of the user for who we load
 *  the projects.
 * @return {Action}
 */
function getUserProjectsInit(tokenV3) {
  return tokenV3;
}exports.default = (0, _reduxActions.createActions)({
  DIRECT: {
    DROP_ALL: dropAll,
    GET_PROJECT_DETAILS_INIT: getProjectDetailsInit,
    GET_PROJECT_DETAILS_DONE: getProjectDetailsDone,
    GET_PROJECT_PERMISSIONS_INIT: getProjectPermissionsInit,
    GET_PROJECT_PERMISSIONS_DONE: getProjectPermissionsDone,
    GET_USER_PROJECTS_INIT: getUserProjectsInit,
    GET_USER_PROJECTS_DONE: getUserProjectsDone
  }
});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getService = getService;

var _qs = __webpack_require__(39);

var _qs2 = _interopRequireDefault(_qs);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Direct service class.
 */
/**
 * @module "services.direct"
 * @desc The Direct service takes care about communication with Direct APIs:
 *  projects, billing accounts, copilots, all these stuff should be added here,
 *  at least for now.
 */

var Direct = function () {
  /**
   * Creates a new {@link module:services.direct~Direct} instance.
   * @param {String} tokenV3 Optional. Topcoder auth token v3. Though optional,
   *  most probably most, if not all, of the service functionality won't work
   *  for non-authenticated visitors.
   */
  function Direct(tokenV3) {
    (0, _classCallCheck3.default)(this, Direct);

    this.private = {
      api: (0, _api.getApiV3)(tokenV3),
      tokenV3: tokenV3
    };
  }

  /**
   * Gets details of the specified project.
   * @param {Number} projectId
   * @return {Promise} Resolves to the project details object.
   */


  (0, _createClass3.default)(Direct, [{
    key: 'getProjectDetails',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(projectId) {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.private.api.get('/direct/projects/' + projectId);

              case 2:
                res = _context.sent;

                if (res.ok) {
                  _context.next = 5;
                  break;
                }

                throw new Error(res.statusText);

              case 5:
                _context.next = 7;
                return res.json();

              case 7:
                res = _context.sent.result;

                if (!(res.status !== 200)) {
                  _context.next = 10;
                  break;
                }

                throw new Error(res.content);

              case 10:
                return _context.abrupt('return', res.content);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProjectDetails(_x) {
        return _ref.apply(this, arguments);
      }

      return getProjectDetails;
    }()

    /**
     * Gets user permissions on the specified project.
     * @param {Number|String} projectId
     * @param {String} tokenV3 Auth token for API v3.
     * @return {Promise} Resolves to the user permissions data.
     */

  }, {
    key: 'getProjectPermissions',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(projectId) {
        var URL, res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                URL = '/direct/projects/' + projectId + '/permissions';
                _context2.next = 3;
                return this.private.api.get(URL);

              case 3:
                res = _context2.sent;

                if (res.ok) {
                  _context2.next = 6;
                  break;
                }

                throw new Error(res.statusText);

              case 6:
                _context2.next = 8;
                return res.json();

              case 8:
                res = _context2.sent.result;

                if (!(res.status !== 200)) {
                  _context2.next = 11;
                  break;
                }

                throw new Error(res.content);

              case 11:
                return _context2.abrupt('return', res.content);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getProjectPermissions(_x2) {
        return _ref2.apply(this, arguments);
      }

      return getProjectPermissions;
    }()

    /**
     * Gets all projects the user can see.
     * @param {Object} query Optional. Query params for the request.
     * @return {Promise} Resolves to an array of project objects.
     */

  }, {
    key: 'getUserProjects',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(query) {
        var url, res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = '/direct/projects/user';

                if (query) url += '?' + _qs2.default.stringify(query);
                _context3.next = 4;
                return this.private.api.get(url);

              case 4:
                res = _context3.sent;

                if (res.ok) {
                  _context3.next = 7;
                  break;
                }

                throw new Error(res.statusText);

              case 7:
                _context3.next = 9;
                return res.json();

              case 9:
                res = _context3.sent.result;

                if (!(res.status !== 200)) {
                  _context3.next = 12;
                  break;
                }

                throw new Error(res.content);

              case 12:
                return _context3.abrupt('return', res.content);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUserProjects(_x3) {
        return _ref3.apply(this, arguments);
      }

      return getUserProjects;
    }()
  }]);
  return Direct;
}();

var lastInstance = null;
/**
 * Returns a new or existing {@link module:services.direct~Direct} service.
 * @param {String} tokenV3 Optional. Topcoder auth token v3.
 * @return {Direct} Direct service object.
 */
function getService(tokenV3) {
  if (!lastInstance || lastInstance.private.tokenV3 !== tokenV3) {
    lastInstance = new Direct(tokenV3);
  }
  return lastInstance;
}

exports.default = undefined;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(2);

var _groups = __webpack_require__(72);

/**
 * @static
 * @desc Creates an action that removes from Redux store all group data loaded
 *  before by other actions in this module, and also cancels any on-going
 *  loading operations.
 * @return {Action}
 */
/**
 * @module "actions.groups"
 * @desc Actions related to user groups.
 * @todo Some group-related actions can be found elsewhere (e.g. addition of
 * members to group is located inside tc-communities actions, because joining
 * a community is equivalent to adding user to a group). It will be great to
 * move such actions in here.
 */

function dropGroups() {
  return undefined;
}

/**
 * @static
 * @desc Creates an action that signals beginning of group data loading.
 * @param {String|String[]} groupIds ID, or an array of IDs, for groups to load.
 * @return {Action}
 */
function getGroupsInit(groupIds) {
  return groupIds;
}

/**
 * @static
 * @desc Creates an action that loads group data.
 * @param {String|String[]} groupIds ID, or an array of IDs, of groups to load.
 * @param {String} tokenV3 Optional. Topcoder v3 auth token.
 * @return {Action}
 */
function getGroupsDone(groupIds, tokenV3) {
  return (0, _groups.getService)(tokenV3).getGroupMap(groupIds);
}

exports.default = (0, _reduxActions.createActions)({
  GROUPS: {
    DROP_GROUPS: dropGroups,
    GET_GROUPS_INIT: getGroupsInit,
    GET_GROUPS_DONE: getGroupsDone
  }
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _challenges = __webpack_require__(47);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @desc Creates an action that drops from Redux store all checkpoints loaded
 *  before.
 * @return {Action}
 */
/**
 * @module "actions.challenge"
 * @desc Actions related to Topcoder challenges APIs.
 */

function dropCheckpoints() {}

/**
 * @static
 * @desc Creates an action that drops from Redux store all challenge results
 *  loaded before.
 * @return {Action}
 */
function dropResults() {}

/**
 * @static
 * @desc Creates an action that signals beginning of challenge details loading.
 * @param {Number|String} challengeId Challenge ID
 * @return {Action}
 */
function getDetailsInit(challengeId) {
  return _lodash2.default.toString(challengeId);
}

/**
 * @static
 * @desc Creates an action that loads challenge details.
 * @param {Number|String} challengeId Challenge ID.
 * @param {String} tokenV3 Topcoder v3 auth token.
 * @param {String} tokenV2 Topcoder v2 auth token.
 * @return {Action}
 */
function getDetailsDone(challengeId, tokenV3, tokenV2) {
  var service = (0, _challenges.getService)(tokenV3, tokenV2);
  var v3Promise = service.getChallengeDetails(challengeId);
  return v3Promise;
}

/**
 * @static
 * @desc Creates an action that signals beginning of user submissions loading.
 * @param {String} challengeId Challenge ID.
 * @return {Action}
 */
function getSubmissionsInit(challengeId) {
  /* As a safeguard, we enforce challengeId to be string (in case somebody
   * passes in a number, by mistake). */
  return _lodash2.default.toString(challengeId);
}

/**
 * @static
 * @desc Creates an action that loads user's submissions to the specified
 * challenge.
 * @param {String} challengeId Challenge ID.
 * @param {String} tokenV2  Topcoder auth token v2.
 * @return {Action}
 */
function getSubmissionsDone(challengeId, tokenV2) {
  return (0, _api.getApiV2)(tokenV2).fetch('/challenges/submissions/' + challengeId + '/mySubmissions').then(function (response) {
    return response.json();
  }).then(function (response) {
    return {
      challengeId: _lodash2.default.toString(challengeId),
      submissions: response.submissions
    };
  }).catch(function (error) {
    var err = { challengeId: _lodash2.default.toString(challengeId), error: error };
    throw err;
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of registration for a
 * challenge.
 * @return {Action}
 */
function registerInit() {}

/**
 * @static
 * @desc Creates an action that registers user for a challenge.
 * @param {Object} auth An object that holds auth tokens. You can directly pass
 *  here the `auth` segment of Redux store.
 * @param [auth.tokenV2]{String} Topcoder auth token v2.
 * @param [auth.tokenV3]{String} Topcoder auth token v3.
 * @param {String} challengeId Challenge ID.
 * @return {Action}
 */
function registerDone(auth, challengeId) {
  return (0, _challenges.getService)(auth.tokenV3).register(challengeId)
  /* As a part of registration flow we silently update challenge details,
   * reusing for this purpose the corresponding action handler. */
  .then(function () {
    return getDetailsDone(challengeId, auth.tokenV3, auth.tokenV2);
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of user unregistration from a
 *  challenge.
 * @return {Action}
 */
function unregisterInit() {}

/**
 * @static
 * @desc Creates an action that unregisters user from a challenge.
 * @param {Object} auth Object that holds Topcoder auth tokens.
 * @param {String} [auth.tokenV2] v2 token.
 * @param {String} [auth.tokenV3] v3 token.
 * @param {String} challengeId Challenge ID.
 * @return {Action}
 */
function unregisterDone(auth, challengeId) {
  return (0, _challenges.getService)(auth.tokenV3).unregister(challengeId)
  /* As a part of unregistration flow we silently update challenge details,
   * reusing for this purpose the corresponding action handler. */
  .then(function () {
    return getDetailsDone(challengeId, auth.tokenV3, auth.tokenV2);
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of challenge results loading.
 * @param {Number|String} challengeId Challenge ID
 * @return {Action}
 */
function loadResultsInit(challengeId) {
  return _lodash2.default.toString(challengeId);
}

/**
 * @static
 * @desc Creates an action that loads challenge results.
 * @param {Object} auth Object that holds Topcoder auth tokens.
 * @param {String} [auth.tokenV2] v2 token.
 * @param {String} [auth.tokenV3] v3 token.
 * @param {Number|String} challengeId Challenge ID. Should match the one passed
 *  in the previous {@link module:actions.challenge.loadResultsInit} call.
 * @param {String} type Challenge type.
 * @return {Action}
 */
function loadResultsDone(auth, challengeId, type) {
  return (0, _api.getApiV2)(auth.tokenV2).fetch('/' + type + '/challenges/result/' + challengeId).then(function (response) {
    return response.json();
  }).then(function (response) {
    return {
      challengeId: _lodash2.default.toString(challengeId),
      results: response.results
    };
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of challenge checkpoints data
 *  loading.
 * @return {Action}
 */
function fetchCheckpointsInit() {}

/**
 * @static
 * @desc Creates an action that loads challenge checkpoints data.
 * @param {String} tokenV2 Topcoder v2 auth token.
 * @param {String} challengeId Challenge ID.
 */
function fetchCheckpointsDone(tokenV2, challengeId) {
  var endpoint = '/design/challenges/checkpoint/' + challengeId;
  return (0, _api.getApiV2)(tokenV2).fetch(endpoint).then(function (response) {
    if (response.status !== 200) {
      throw response.status;
    } else {
      return response.json();
    }
  }).then(function (response) {
    // Expanded key is used for UI expand/collapse.
    response.checkpointResults.forEach(function (checkpoint, index) {
      response.checkpointResults[index].expanded = false;
    });
    return {
      challengeId: Number(challengeId),
      checkpoints: response
    };
  }).catch(function (error) {
    return {
      error: error,
      challengeId: Number(challengeId)
    };
  });
}

/**
 * @static
 * @desc Creates an action that Toggles checkpoint details panel in the Topcoder
 *  Submission Management Page.
 * @todo This is UI action relevant to a specific page in specific app. Must be
 *  moved back to Community App.
 * @param {Number} id Checkpoint ID.
 * @param {Boolean} open Target state: `true` to expand, `false` to collapse the
 *  details.
 * @return {Action}
 */
function toggleCheckpointFeedback(id, open) {
  return { id: id, open: open };
}

/**
 * @static
 * @desc Creates an action that signals beginning of challenge details update.
 * @todo No idea, why we have this action. This functionality should be covered
 *  by {@link module:actions.challenge.getDetailsInit} and
 *  {@link module:actions.challenge.getDetailsDone}. We need to refactor this.
 * @param {String} uuid UUID of the operation (the same should be passed into
 *  the corresponding {@link module:actions.challenge.updateChallengeDone}).
 * @return {Action}
 */
function updateChallengeInit(uuid) {
  return uuid;
}

/**
 * @static
 * @desc Creates an action that updates challenge details.
 * @todo No idea, why we have this action. This functionality should be covered
 *  by {@link module:actions.challenge.getDetailsInit} and
 *  {@link module:actions.challenge.getDetailsDone}. We need to refactor this.
 * @param {String} uuid Operation UUID. Should match the one passed into the
 *  previous {@link module:actions.challenge.updateChallengeInit} call.
 * @param {Object} challenge Challenge data.
 * @param {String} tokenV3 Topcoder v3 auth token.
 * @return {Action}
 */
function updateChallengeDone(uuid, challenge, tokenV3) {
  return (0, _challenges.getService)(tokenV3).updateChallenge(challenge).then(function (res) {
    return { uuid: uuid, res: res };
  });
}

exports.default = (0, _reduxActions.createActions)({
  CHALLENGE: {
    DROP_CHECKPOINTS: dropCheckpoints,
    DROP_RESULTS: dropResults,
    FETCH_CHECKPOINTS_INIT: fetchCheckpointsInit,
    FETCH_CHECKPOINTS_DONE: fetchCheckpointsDone,
    GET_DETAILS_INIT: getDetailsInit,
    GET_DETAILS_DONE: getDetailsDone,
    GET_SUBMISSIONS_INIT: getSubmissionsInit,
    GET_SUBMISSIONS_DONE: getSubmissionsDone,
    LOAD_RESULTS_INIT: loadResultsInit,
    LOAD_RESULTS_DONE: loadResultsDone,
    REGISTER_INIT: registerInit,
    REGISTER_DONE: registerDone,
    TOGGLE_CHECKPOINT_FEEDBACK: toggleCheckpointFeedback,
    UNREGISTER_INIT: unregisterInit,
    UNREGISTER_DONE: unregisterDone,
    UPDATE_CHALLENGE_INIT: updateChallengeInit,
    UPDATE_CHALLENGE_DONE: updateChallengeDone
  }
});

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Expose `JSON.parse` method or fallback if not
 * exists on `window`
 */

module.exports = 'undefined' === typeof window.JSON
  ? __webpack_require__(213).parse
  : window.JSON.parse;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * @static
 * @desc Creates an action that loads member achievements.
 * @param {String} handle Member handle.
 * @param {String} uuid Loading operation
 * @return {Action}
 */
var getAchievementsDone = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(handle, uuid) {
    var data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = void 0;
            _context.prev = 1;
            _context.next = 4;
            return (0, _user.getService)().getAchievements(handle);

          case 4:
            data = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);

            data = [];

          case 10:
            return _context.abrupt('return', { data: data, handle: handle, uuid: uuid });

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function getAchievementsDone(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * @static
 * @desc Creates an action that signals beginning of loading the member's
 *  financial information.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */


/**
 * @static
 * @desc Creates an action that loads member's financial information.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */
var getFinancesDone = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(handle, uuid, tokenV3) {
    var data;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _members.getService)(tokenV3).getMemberFinances(handle);

          case 2:
            data = _context2.sent;
            return _context2.abrupt('return', { data: data, handle: handle, uuid: uuid });

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getFinancesDone(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * @static
 * @desc Creates an action that signals beginning of member stats loading.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @return {Action}
 */


var getStatsInit = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(handle, uuid) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', { handle: handle, uuid: uuid });

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getStatsInit(_x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * @static
 * @desc Create an action that loads member statistics.
 * @param {String} handle Member handle.
 * @param {String} uuid Operation UUID.
 * @param {String} tokenV3 v3 auth token.
 * @return {Action}
 */


var getStatsDone = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(handle, uuid, tokenV3) {
    var data;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _members.getService)(tokenV3).getStats(handle);

          case 2:
            data = _context4.sent;
            return _context4.abrupt('return', { data: data, handle: handle, uuid: uuid });

          case 4:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getStatsDone(_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();

var _reduxActions = __webpack_require__(2);

var _members = __webpack_require__(75);

var _user = __webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @desc Creates an action that drops all information related to the specfied
 *  member.
 * @param {String} handle Topcoder user handle.
 * @return {Action}
 */
function drop(handle) {
  return handle;
}

/**
 * @static
 * @desc Creates an action that drops all member information loaded by
 *  actions from this module.
 * @return {Action}
 */
/**
 * @module "actions.members"
 * @desc Actions related to members data.
 */

function dropAll() {}

/**
 * @static
 * @desc Creates an action that signals beginning of member achievements
 *  loading.
 * @param {String} handle Member handle.
 * @param {String} uuid Loading operation UUID.
 * @return {Action}
 */
function getAchievementsInit(handle, uuid) {
  return { handle: handle, uuid: uuid };
}function getFinancesInit(handle, uuid) {
  return { handle: handle, uuid: uuid };
}exports.default = (0, _reduxActions.createActions)({
  MEMBERS: {
    DROP: drop,
    DROP_ALL: dropAll,
    GET_ACHIEVEMENTS_INIT: getAchievementsInit,
    GET_ACHIEVEMENTS_DONE: getAchievementsDone,
    GET_FINANCES_INIT: getFinancesInit,
    GET_FINANCES_DONE: getFinancesDone,
    GET_STATS_INIT: getStatsInit,
    GET_STATS_DONE: getStatsDone
  }
});

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PAGE_SIZE = undefined;

var _reduxActions = __webpack_require__(2);

var _challenges = __webpack_require__(47);

/**
 * Holds the size of member tasks page for the MEMBER_TASK/GET_DONE
 * action. Mind that current version of TC API v3 restricts the possible page
 * size by 50 tasks anyway, thus setting this to a larger value will result in
 * problems.
 */
/**
 * @module "actions.member-tasks"
 * @desc Actions for management of member tasks and payments. Under the hood it
 * is very similar to the challenge listing management, as these tasks are in
 * fact just challenges of a special kind); however, due to differences in the
 * use cases, we can implement task management more efficient with dedicated
 * actions and reducer; thus, this module.
 */

var PAGE_SIZE = exports.PAGE_SIZE = 50;

/**
 * @static
 * @desc Creates an action that removes all loaded member tasks from Redux
 * store, and cancels any on-going loading operations.
 * @return {Action}
 */
function dropAll() {
  return null;
}

/**
 * @static
 * @desc Creates an action that signals beginning of member tasks page loading.
 * Note that dispatching this action before a previous loading operation has
 * been completed will cancel the previous loading operation.
 * @param {String} uuid UUID of the loading operation.
 * @param {Number} pageNum 0-based index of the page to load (PAGE_SIZE constant
 *  holds the page size).
 * @return {Action}
 */
function getInit(uuid, pageNum) {
  return { pageNum: pageNum, uuid: uuid };
}

/**
 * @static
 * @desc Creates an action that loads a page of member tasks.
 * Prior to this action always dispatch
 * {@link module:actions.member-tasks.getInit} action with
 * the same arguments. The result of this action will be silently
 * discarted if its uuid is not stored in the Redux list of pending requests
 * to load tasks.
 * @param {String} uuid UUID of the loading operation.
 * @param {String} projectId Project filter for tasks.
 * @param {Number} pageNum 0-based index of the page to load (PAGE_SIZE constant
 *  holds the page size).
 * @param {String} tokenV3 Topcoder v3 auth token.
 * @return {Action}
 */
function getDone(uuid, projectId, pageNum, tokenV3) {
  return (0, _challenges.getService)(tokenV3).getChallenges({
    isTask: 1,
    projectId: projectId
  }, {
    limit: PAGE_SIZE,
    offset: pageNum * PAGE_SIZE
  }).then(function (_ref) {
    var challenges = _ref.challenges,
        totalCount = _ref.totalCount;
    return {
      projectId: projectId,
      tasks: challenges,
      totalCount: totalCount,
      uuid: uuid
    };
  });
}

exports.default = (0, _reduxActions.createActions)({
  MEMBER_TASKS: {
    DROP_ALL: dropAll,
    GET_INIT: getInit,
    GET_DONE: getDone
  }
});

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _reduxActions = __webpack_require__(2);

var _reviewOpportunities = __webpack_require__(112);

var _errors = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @desc Creates an action that signals beginning of review application
 *  cancelation.
 * @return {Action}
 */
function cancelApplicationsInit() {}

/**
 * @static
 * @desc Creates an action that cancels existing applications
 * @param {Number} challengeId The ID of the challenge (not the opportunity id)
 * @param {Array} roleIds Array of roleId Numbers to cancel applications for
 * @param {String} tokenV3 Required. Topcoder auth token v3.
 * @return {Action}
 */
/**
 * @module "actions.reviewOpportunity"
 * @desc Actions for review opportunity details API.
 */

function cancelApplicationsDone(challengeId, roleIds, tokenV3) {
  return (0, _reviewOpportunities.getReviewOpportunitiesService)(tokenV3).cancelApplications(challengeId, roleIds);
}

/**
 * @static
 * @desc Creates an action that signals beginning of loading the review
 *  opportunity details.
 * @return {Action}
 */
function getDetailsInit() {}

/**
 * @static
 * @desc Creates an action that gets details of a review opportunity for
 *  the specified challenge.
 * @param {Number} challengeId The ID of the challenge (not the opportunity id)
 * @param {String} tokenV3=null Optional. Topcoder auth token v3.
 * @default test
 * @return {Action}
 */
function getDetailsDone(challengeId, tokenV3) {
  return (0, _reviewOpportunities.getReviewOpportunitiesService)(tokenV3).getDetails(challengeId).catch(function (error) {
    if (error.status !== 401) {
      (0, _errors.fireErrorMessage)('Error Getting Review Opportunity Details', error.content || error);
    }
    return _promise2.default.reject(error.status);
  });
}

/**
 * @static
 * @desc Creates an action that signals beginning of review application process.
 * @return {Action}
 */
function submitAppliationInit() {}

/**
 * @static
 * @desc Creates an action that submits application for a review opportunity.
 * @param {Number} challengeId The ID of the challenge (not the opportunity id)
 * @param {Array} roleIds Array of roleId Numbers to cancel applications for
 * @param {String} tokenV3 Required. Topcoder auth token v3.
 * @return {Action}
 */
function submitApplicationsDone(challengeId, roleIds, tokenV3) {
  return (0, _reviewOpportunities.getReviewOpportunitiesService)(tokenV3).submitApplications(challengeId, roleIds);
}

exports.default = (0, _reduxActions.createActions)({
  REVIEW_OPPORTUNITY: {
    CANCEL_APPLICATIONS_INIT: cancelApplicationsInit,
    CANCEL_APPLICATIONS_DONE: cancelApplicationsDone,
    GET_DETAILS_INIT: getDetailsInit,
    GET_DETAILS_DONE: getDetailsDone,
    SUBMIT_APPLICATIONS_INIT: submitAppliationInit,
    SUBMIT_APPLICATIONS_DONE: submitApplicationsDone
  }
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getReviewOpportunitiesService = getReviewOpportunitiesService;

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Service class.
 */
var ReviewOpportunitiesService = function () {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  function ReviewOpportunitiesService(tokenV3) {
    (0, _classCallCheck3.default)(this, ReviewOpportunitiesService);

    this.private = {
      api: (0, _api.getApiV3)(tokenV3),
      tokenV3: tokenV3
    };
  }

  /**
   * Gets a list of currently open Review Opportunities.
   * @param {Number} limit The max number to return in one call.
   * @param {Number} offset Offset, used with limit to lazy load.
   * @return {Promise} Resolves to the api response in JSON.
   */


  (0, _createClass3.default)(ReviewOpportunitiesService, [{
    key: 'getReviewOpportunities',
    value: function getReviewOpportunities(limit, offset) {
      var endpoint = '/reviewOpportunities?limit=' + limit + '&offset=' + offset;
      return this.private.api.get(endpoint).then(function (res) {
        return res.ok ? res.json() : _promise2.default.reject(new Error('Error Code: ' + res.status));
      }).then(function (res) {
        return res.result.status === 200 ? res.result.content : _promise2.default.reject(res.result.content);
      });
    }

    /**
     * Gets the details of the review opportunity for the corresponding challenge
     * @param {Number} challengeId The ID of the challenge (not the opportunity id)
     * @return {Promise} Resolves to the api response in JSON.
     */

  }, {
    key: 'getDetails',
    value: function getDetails(challengeId) {
      var endpoint = '/reviewOpportunities/' + challengeId;
      return this.private.api.get(endpoint).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.result.status === 200 ? res.result.content : _promise2.default.reject(res.result);
      });
    }

    /**
     * Submits review opportunity application for the specified challenge
     * @param {Number} challengeId The ID of the challenge (not the opportunity id)
     * @param {Array} roleIds List of review role IDs to apply for
     * @return {Promise} Resolves to the api response in JSON.
     */

  }, {
    key: 'submitApplications',
    value: function submitApplications(challengeId, roleIds) {
      var endpoint = '/reviewOpportunities/' + challengeId + '/applications?reviewApplicationRoleIds=' + roleIds.join(',');
      return this.private.api.post(endpoint, {}).then(function (res) {
        return JSON.parse(res);
      });
    }

    /**
     * Cancels review opportunity application for the specified challenge
     * @param {Number} challengeId The ID of the challenge (not the opportunity id)
     * @param {Array} roleIds List of review role IDs to cancel applications for
     * @return {Promise} Resolves to the api response in JSON.
     */

  }, {
    key: 'cancelApplications',
    value: function cancelApplications(challengeId, roleIds) {
      var endpoint = '/reviewOpportunities/' + challengeId + '/applications?reviewApplicationRoleIds=' + roleIds.join(',');
      return this.private.api.delete(endpoint, {}).then(function (res) {
        return JSON.parse(res);
      });
    }
  }]);
  return ReviewOpportunitiesService;
}(); /**
      * @module "services.reviewOpportunities"
      * @desc This module provides a service for retrieving Review Opportunities and
      * submitting applications.
      */


var lastInstance = null;
/**
 * Returns a new or existing review opportunities service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {MembersService} Members service object
 */
function getReviewOpportunitiesService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new ReviewOpportunitiesService(tokenV3);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
exports.default = undefined;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(2);

var _lookup = __webpack_require__(114);

/**
 * @static
 * @desc Gets approved skill tags.
 * @return {Action}
 */
/**
 * @module "actions.lookup"
 * @desc Actions related to lookup data.
 */

function getApprovedSkills() {
  var service = (0, _lookup.getService)();
  var params = {
    domain: 'SKILLS',
    status: 'APPROVED'
  };
  return service.getTags(params);
}

exports.default = (0, _reduxActions.createActions)({
  LOOKUP: {
    GET_APPROVED_SKILLS: getApprovedSkills
  }
});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(14);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(15);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getService = getService;

var _qs = __webpack_require__(39);

var _qs2 = _interopRequireDefault(_qs);

var _tc = __webpack_require__(30);

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LookupService = function () {
  /**
   * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
   */
  function LookupService(tokenV3) {
    (0, _classCallCheck3.default)(this, LookupService);

    this.private = {
      api: (0, _api.getApiV3)(tokenV3),
      tokenV3: tokenV3
    };
  }

  /**
   * Gets tags.
   * @param {Object} params Parameters
   * @return {Promise} Resolves to the tags.
   */


  (0, _createClass3.default)(LookupService, [{
    key: 'getTags',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(params) {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.private.api.get('/tags/?' + _qs2.default.stringify(params));

              case 2:
                res = _context.sent;
                return _context.abrupt('return', (0, _tc.getApiResponsePayloadV3)(res));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTags(_x) {
        return _ref.apply(this, arguments);
      }

      return getTags;
    }()
  }]);
  return LookupService;
}(); /**
      * @module "services.lookup"
      * @desc  This module provides a service to get lookup data from Topcoder
      * via API V3.
      */


var lastInstance = null;
/**
 * Returns a new or existing lookup service.
 * @param {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {LookupService} Lookup service object
 */
function getService(tokenV3) {
  if (!lastInstance || tokenV3 !== lastInstance.private.tokenV3) {
    lastInstance = new LookupService(tokenV3);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
exports.default = undefined;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(233);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _smp = __webpack_require__(70);

var _smp2 = _interopRequireDefault(_smp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new Submission management reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Submission management reducer.
 */
function create(initialState) {
  var _handleActions;

  return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, _smp2.default.smp.deleteSubmissionDone, function (state) {
    return (0, _extends3.default)({}, state, {
      deletingSubmission: false
    });
  }), (0, _defineProperty3.default)(_handleActions, _smp2.default.smp.deleteSubmissionInit, function (state) {
    return (0, _extends3.default)({}, state, {
      deletingSubmission: true
    });
  }), _handleActions), _lodash2.default.defaults(initialState, {}));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
/**
 * @module "reducers.my-submissions-management"
 * @desc  This reducer and corresponding actions control the logic for
 *  submission management.
 * @todo Document state segment structure.
 */
function factory() {
  return _promise2.default.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
exports.default = create();

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mock = exports.time = exports.tc = exports.errors = exports.logger = exports.challenge = exports.services = exports.actions = exports.reducers = exports.reducerFactory = exports.reducerFactories = undefined;

var _actions = __webpack_require__(118);

Object.defineProperty(exports, 'actions', {
  enumerable: true,
  get: function get() {
    return _actions.actions;
  }
});

var _services = __webpack_require__(217);

Object.defineProperty(exports, 'services', {
  enumerable: true,
  get: function get() {
    return _services.services;
  }
});

var _utils = __webpack_require__(220);

Object.defineProperty(exports, 'challenge', {
  enumerable: true,
  get: function get() {
    return _utils.challenge;
  }
});
Object.defineProperty(exports, 'logger', {
  enumerable: true,
  get: function get() {
    return _utils.logger;
  }
});
Object.defineProperty(exports, 'errors', {
  enumerable: true,
  get: function get() {
    return _utils.errors;
  }
});
Object.defineProperty(exports, 'tc', {
  enumerable: true,
  get: function get() {
    return _utils.tc;
  }
});
Object.defineProperty(exports, 'time', {
  enumerable: true,
  get: function get() {
    return _utils.time;
  }
});
Object.defineProperty(exports, 'mock', {
  enumerable: true,
  get: function get() {
    return _utils.mock;
  }
});

var _reducers = __webpack_require__(222);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducerFactories = _reducers.factories;
exports.reducerFactory = _reducers.factory; /**
                                             * Export the lib.
                                             */

exports.reducers = _reducers2.default;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = undefined;

var _auth = __webpack_require__(76);

var _auth2 = _interopRequireDefault(_auth);

var _smp = __webpack_require__(70);

var _smp2 = _interopRequireDefault(_smp);

var _stats = __webpack_require__(98);

var _stats2 = _interopRequireDefault(_stats);

var _terms = __webpack_require__(101);

var _terms2 = _interopRequireDefault(_terms);

var _direct = __webpack_require__(104);

var _direct2 = _interopRequireDefault(_direct);

var _groups = __webpack_require__(106);

var _groups2 = _interopRequireDefault(_groups);

var _errors = __webpack_require__(69);

var _errors2 = _interopRequireDefault(_errors);

var _challenge = __webpack_require__(107);

var _challenge2 = _interopRequireDefault(_challenge);

var _profile = __webpack_require__(73);

var _profile2 = _interopRequireDefault(_profile);

var _members = __webpack_require__(109);

var _members2 = _interopRequireDefault(_members);

var _memberTasks = __webpack_require__(110);

var _memberTasks2 = _interopRequireDefault(_memberTasks);

var _reviewOpportunity = __webpack_require__(111);

var _reviewOpportunity2 = _interopRequireDefault(_reviewOpportunity);

var _lookup = __webpack_require__(113);

var _lookup2 = _interopRequireDefault(_lookup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = exports.actions = {
  auth: _auth2.default.auth,
  smp: _smp2.default.smp,
  challenge: _challenge2.default.challenge,
  terms: _terms2.default.terms,
  stats: _stats2.default.stats,
  direct: _direct2.default.direct,
  groups: _groups2.default.groups,
  errors: _errors2.default.errors,
  profile: _profile2.default.profile,
  members: _members2.default.members,
  memberTasks: _memberTasks2.default.memberTasks,
  reviewOpportunity: _reviewOpportunity2.default.reviewOpportunity,
  lookup: _lookup2.default.lookup
};

exports.default = undefined;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(122) });


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(56);
var pIE = __webpack_require__(34);
var toObject = __webpack_require__(35);
var IObject = __webpack_require__(50);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(23)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(25);
var toLength = __webpack_require__(40);
var toAbsoluteIndex = __webpack_require__(124);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(52);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(126), __esModule: true };

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(28);
module.exports = __webpack_require__(133);


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(128);
var step = __webpack_require__(79);
var Iterators = __webpack_require__(27);
var toIObject = __webpack_require__(25);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(57)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(44);
var descriptor = __webpack_require__(32);
var setToStringTag = __webpack_require__(37);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(22)(IteratorPrototype, __webpack_require__(6)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(16);
var anObject = __webpack_require__(18);
var getKeys = __webpack_require__(26);

module.exports = __webpack_require__(19) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(24);
var toObject = __webpack_require__(35);
var IE_PROTO = __webpack_require__(53)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(52);
var defined = __webpack_require__(51);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(45);
var ITERATOR = __webpack_require__(6)('iterator');
var Iterators = __webpack_require__(27);
module.exports = __webpack_require__(3).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);
__webpack_require__(28);
module.exports = __webpack_require__(136);


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var get = __webpack_require__(58);
module.exports = __webpack_require__(3).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(28);
__webpack_require__(36);
__webpack_require__(138);
__webpack_require__(141);
__webpack_require__(142);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(43);
var global = __webpack_require__(9);
var ctx = __webpack_require__(21);
var classof = __webpack_require__(45);
var $export = __webpack_require__(5);
var isObject = __webpack_require__(17);
var aFunction = __webpack_require__(31);
var anInstance = __webpack_require__(60);
var forOf = __webpack_require__(38);
var speciesConstructor = __webpack_require__(84);
var task = __webpack_require__(61).set;
var microtask = __webpack_require__(140)();
var newPromiseCapabilityModule = __webpack_require__(62);
var perform = __webpack_require__(85);
var promiseResolve = __webpack_require__(86);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(6)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(63)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(37)($Promise, PROMISE);
__webpack_require__(87)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(88)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 139 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var macrotask = __webpack_require__(61).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(33)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(5);
var core = __webpack_require__(3);
var global = __webpack_require__(9);
var speciesConstructor = __webpack_require__(84);
var promiseResolve = __webpack_require__(86);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(62);
var perform = __webpack_require__(85);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
module.exports = __webpack_require__(3).Object.keys;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(35);
var $keys = __webpack_require__(26);

__webpack_require__(146)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5);
var core = __webpack_require__(3);
var fails = __webpack_require__(23);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(3);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module, process) {

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _setPrototypeOf = __webpack_require__(150);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(154);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(157);

var _typeof3 = _interopRequireDefault(_typeof2);

var _iterator = __webpack_require__(91);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(92);

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol = typeof _symbol2.default === "function" && _iterator2.default || "@@iterator";

  var inModule = ( false ? "undefined" : (0, _typeof3.default)(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = (0, _create2.default)((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (_setPrototypeOf2.default) {
      (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
    }
    genFun.prototype = (0, _create2.default)(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument ? _promise2.default.resolve(value.arg).then(invokeNext, invokeThrow) : _promise2.default.resolve(value).then(function (unwrapped) {
        // When a yielded Promise is resolved, its final value becomes
        // the .value of the Promise<{value,done}> result for the
        // current iteration. If the Promise is rejected, however, the
        // result for this iteration will be rejected with the same
        // reason. Note that rejections of yielded Promises are not
        // thrown back into the generator function, as is the case
        // when an awaited Promise is rejected. This difference in
        // behavior between yield and await is important, because it
        // allows the consumer to decide what to do with the yielded
        // rejection (swallow it and continue, manually .throw it back
        // into the generator, abandon iteration, whatever). With
        // await, by contrast, there is no opportunity to examine the
        // rejection reason outside the generator function, so the
        // only option is to throw it from the await expression, and
        // let the generator function handle the exception.
        result.value = unwrapped;
        return result;
      });
    }

    if ((typeof process === "undefined" ? "undefined" : (0, _typeof3.default)(process)) === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return invoke(method, arg);
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : new _promise2.default(function (resolve) {
        resolve(callInvokeWithMethodAndArg());
      });
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          context._sent = arg;

          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
(typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64), __webpack_require__(149)(module), __webpack_require__(89)))

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(151), __esModule: true };

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
module.exports = __webpack_require__(3).Object.setPrototypeOf;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(5);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(153).set });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(17);
var anObject = __webpack_require__(18);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(21)(Function.call, __webpack_require__(90).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(156);
var $Object = __webpack_require__(3).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(44) });


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(91);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(92);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
__webpack_require__(36);
module.exports = __webpack_require__(65).f('iterator');


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
__webpack_require__(59);
__webpack_require__(163);
__webpack_require__(164);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(9);
var has = __webpack_require__(24);
var DESCRIPTORS = __webpack_require__(19);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(80);
var META = __webpack_require__(66).KEY;
var $fails = __webpack_require__(23);
var shared = __webpack_require__(54);
var setToStringTag = __webpack_require__(37);
var uid = __webpack_require__(41);
var wks = __webpack_require__(6);
var wksExt = __webpack_require__(65);
var wksDefine = __webpack_require__(67);
var enumKeys = __webpack_require__(161);
var isArray = __webpack_require__(93);
var anObject = __webpack_require__(18);
var isObject = __webpack_require__(17);
var toIObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(49);
var createDesc = __webpack_require__(32);
var _create = __webpack_require__(44);
var gOPNExt = __webpack_require__(162);
var $GOPD = __webpack_require__(90);
var $DP = __webpack_require__(16);
var $keys = __webpack_require__(26);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(94).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(34).f = $propertyIsEnumerable;
  __webpack_require__(56).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(43)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(22)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(56);
var pIE = __webpack_require__(34);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(25);
var gOPN = __webpack_require__(94).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67)('asyncIterator');


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67)('observable');


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(166);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(19), 'Object', { defineProperty: __webpack_require__(16).f });


/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_167__;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(169), __esModule: true };

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(170);
module.exports = __webpack_require__(3).setImmediate;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(5);
var $task = __webpack_require__(61);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(28);
__webpack_require__(36);
__webpack_require__(172);
__webpack_require__(178);
__webpack_require__(181);
__webpack_require__(183);
module.exports = __webpack_require__(3).Set;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(173);
var validate = __webpack_require__(100);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(174)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(16).f;
var create = __webpack_require__(44);
var redefineAll = __webpack_require__(63);
var ctx = __webpack_require__(21);
var anInstance = __webpack_require__(60);
var forOf = __webpack_require__(38);
var $iterDefine = __webpack_require__(57);
var step = __webpack_require__(79);
var setSpecies = __webpack_require__(87);
var DESCRIPTORS = __webpack_require__(19);
var fastKey = __webpack_require__(66).fastKey;
var validate = __webpack_require__(100);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var $export = __webpack_require__(5);
var meta = __webpack_require__(66);
var fails = __webpack_require__(23);
var hide = __webpack_require__(22);
var redefineAll = __webpack_require__(63);
var forOf = __webpack_require__(38);
var anInstance = __webpack_require__(60);
var isObject = __webpack_require__(17);
var setToStringTag = __webpack_require__(37);
var dP = __webpack_require__(16).f;
var each = __webpack_require__(175)(0);
var DESCRIPTORS = __webpack_require__(19);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(21);
var IObject = __webpack_require__(50);
var toObject = __webpack_require__(35);
var toLength = __webpack_require__(40);
var asc = __webpack_require__(176);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(177);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var isArray = __webpack_require__(93);
var SPECIES = __webpack_require__(6)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(5);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(179)('Set') });


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(45);
var from = __webpack_require__(180);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(38);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(182)('Set');


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(5);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(184)('Set');


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(5);
var aFunction = __webpack_require__(31);
var ctx = __webpack_require__(21);
var forOf = __webpack_require__(38);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_185__;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getService = getService;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _termsAuth = __webpack_require__(187);

var _termsAuth2 = _interopRequireDefault(_termsAuth);

var _termsDocuSignDetails = __webpack_require__(188);

var _termsDocuSignDetails2 = _interopRequireDefault(_termsDocuSignDetails);

var _termsNoauth = __webpack_require__(189);

var _termsNoauth2 = _interopRequireDefault(_termsNoauth);

var _termsReviewer = __webpack_require__(190);

var _termsReviewer2 = _interopRequireDefault(_termsReviewer);

var _termsReviewerDetails = __webpack_require__(191);

var _termsReviewerDetails2 = _interopRequireDefault(_termsReviewerDetails);

var _termsTopcoderDetails = __webpack_require__(192);

var _termsTopcoderDetails2 = _interopRequireDefault(_termsTopcoderDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reviewTermsAgreed = false; /**
                                * Mock version of Terms service. To be used both for Jest testing, and for
                                * manual testing inside the app (see MOCK_TERMS_SERVICE constant
                                * in the app config).
                                *
                                * NOTE: At the moment this mock does not care much about authorization
                                * (i.e. the presence of auth token), as the real backend api acts a bit
                                * surprising and non-intuitive at the moment, so it is a bit difficult
                                * to imitate it exactly.
                                */

var TermsService = function () {
  /**
   * @param {String} tokenV2 Optional. Auth token for Topcoder API v2.
   */
  function TermsService(tokenV2) {
    (0, _classCallCheck3.default)(this, TermsService);

    this.private = {
      tokenV2: tokenV2
    };
  }

  /**
   * Mock of getChallengeTerms(..) method.
   * The second argument is optional. If present, it should be an array of
   * boolean values, and it will override acceptance status of terms read
   * from the JSON data file.
   * @param {String} challengeId
   * @param {Array} agreed Optional.
   */


  (0, _createClass3.default)(TermsService, [{
    key: 'getChallengeTerms',
    value: function getChallengeTerms(challengeId, agreed) {
      var res = _lodash2.default.clone(this.private.tokenV2 ? _termsAuth2.default : _termsNoauth2.default);
      res.serverInformation.currentTime = Date.now();
      res.requesterInformation.receivedParams.challengeId = _lodash2.default.toString(challengeId);
      if (this.private.tokenV2 && _lodash2.default.isArray(agreed)) {
        for (var i = 0; i < Math.min(agreed.length, res.terms.length); i += 1) {
          res.terms[i].agreed = agreed[i];
        }
      }
      return _promise2.default.resolve(res);
    }

    /**
     * Mock of getCommunityTerms(..) method.
     *
     * @param {String} communityId community id
     * @param {String} tokenV3     auth token V3
     * @param {Array}  agreed      Optional. If present, it should be an array of
     *                             boolean values, and it will override acceptance
     *                             status of terms read from the JSON data file.
     *
     * @return {Promise} resolves to the list of mocked terms
     */

  }, {
    key: 'getCommunityTerms',
    value: function getCommunityTerms(challengeId, tokenV3, agreed) {
      var res = _lodash2.default.clone(this.private.tokenV2 ? _termsAuth2.default : _termsNoauth2.default);
      res.serverInformation.currentTime = Date.now();
      if (this.private.tokenV2 && _lodash2.default.isArray(agreed)) {
        for (var i = 0; i < Math.min(agreed.length, res.terms.length); i += 1) {
          res.terms[i].agreed = agreed[i];
          delete res.terms[i].text;
        }
      }
      return _promise2.default.resolve(res);
    }

    /**
     * Mock of getReviewOpportunityTerms(..) method.
     */
    /* eslint-disable class-methods-use-this */

  }, {
    key: 'getReviewOpportunityTerms',
    value: function getReviewOpportunityTerms() {
      var res = _lodash2.default.clone(_termsReviewer2.default);
      res.terms[0].agreed = reviewTermsAgreed;
      res.terms[1].agreed = reviewTermsAgreed;
      return _promise2.default.resolve(res);
    }
    /* eslint-enable class-methods-use-this */

    /**
     * Mock of getTermDetails(..) method.
     * In the case of Topcoder challenge terms there is "agreed" field in the
     * response. If the second argument is passed into this method, it will
     * override the value of this field from JSON file with mock data.
     * @param {Number} termId
     * @param {Boolean} agreed Optional.
     */

  }, {
    key: 'getTermDetails',
    value: function getTermDetails(termId, agreed) {
      _lodash2.default.noop(this);
      var res = void 0;
      switch (termId) {
        case 20704:
          // eslint-disable-next-line
          agreed = reviewTermsAgreed;
          res = _lodash2.default.clone(_termsReviewerDetails2.default);
          break;
        case 21153:
          // eslint-disable-next-line
          if (reviewTermsAgreed) agreed = reviewTermsAgreed;
          res = _lodash2.default.clone(_termsDocuSignDetails2.default);
          break;
        case 21193:
        case 21194:
          res = _lodash2.default.clone(_termsTopcoderDetails2.default);
          break;
        default:
          throw new Error('Unknown termId \'' + termId + '\'!');
      }
      if (!_lodash2.default.isUndefined(agreed)) res.agreed = agreed;
      res.serverInformation.currentTime = Date.now();
      res.termsOfUseId = termId;
      res.requesterInformation.receivedParams.termsOfUseId = _lodash2.default.toString(termId);
      return _promise2.default.resolve(res);
    }
  }, {
    key: 'getDocuSignUrl',
    value: function getDocuSignUrl(templateId, returnUrl) {
      _lodash2.default.noop(this);

      /* TODO: It has not been tracked explicitely, what is the response of
       * the real api here. It sure contains "recipientViewUrl", and this is
       * the only thing we need for our purposes now. However, it might also
       * have another useful datafields. This should be explored. */
      return _promise2.default.resolve({
        recipientViewUrl: '/community-app-assets/api/mock/docu-sign?returnUrl=' + returnUrl
      });
    }
  }, {
    key: 'agreeTerm',
    value: function agreeTerm(termId) {
      _lodash2.default.noop(termId, this);

      if (termId === 20704) {
        reviewTermsAgreed = true;
      }

      /* TODO: It has not been tracked explicitely, what is the response of
       * the real api here. It sure contains "success" field, and this is
       * the only thing we need for our purposes now. However, it might also
       * have another useful datafields. This should be explored. */
      return _promise2.default.resolve({ success: true });
    }
  }]);
  return TermsService;
}();

/**
 * Returns a new or existing terms service.
 * @param  {String} tokenV3 Optional. Auth token for Topcoder API v3.
 * @return {Object} Terms service object
 */


var lastInstance = null;
function getService(tokenV2) {
  /* eslint-disable no-console */
  console.error('WARNING:\n    Mock version of DocuSign service is used! Should you see this message in\n    production, contact support as soon as possible!');
  /* eslint-enable no-console */
  if (!lastInstance || tokenV2 && lastInstance.private.tokenV2 !== tokenV2) {
    lastInstance = new TermsService(tokenV2);
  }
  return lastInstance;
}

/* Using default export would be confusing in this case. */
exports.default = undefined;

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = {"terms":[{"termsOfUseId":21153,"title":"Appirio NDA v2.0","url":"http://community.topcoder.com/tc?module=Terms&tuid=21153","agreeabilityType":"DocuSignable","agreed":false,"templateId":"fake-template-id"},{"termsOfUseId":21193,"title":"Standard Terms for Topcoder Competitions v2.1","url":"","agreeabilityType":"Electronically-agreeable","agreed":true,"templateId":null},{"termsOfUseId":21194,"title":"Test Terms","url":"","agreeabilityType":"Electronically-agreeable","agreed":false,"templateId":null}],"serverInformation":{"serverName":"Topcoder API","apiVersion":"0.0.1","requestDuration":29,"currentTime":1504878884618},"requesterInformation":{"id":"1b37607c519c318194ce6da08c519c0a3f7c9855-7FSFCyd6oSX2mV6Z","remoteIP":"12.34.567.890","receivedParams":{"role":"Submitter","apiVersion":"v2","challengeId":"30059255","action":"getChallengeTerms"}}}

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = {"termsOfUseId":21153,"title":"Appirio NDA v2.0","url":"http://community.topcoder.com/tc?module=Terms&tuid=21153","agreeabilityType":"DocuSignable","text":"<p>\r\nTo agree to the Appirio NDA, please electronically sign the document by following this link:\r\n<a href=\"https://community.topcoder.com/tc?module=SignDocument&templateId=fake-template-id\">\r\nhttps://community.topcoder.com/tc?module=SignDocument&templateId=fake-template-id</a>\r\n</p>\r\n\r\n<p>\r\nOnce signed, you will be automatically added to the NDA terms of use and notified by email. \r\n</p>","agreed":false,"docusignTemplateId":"fake-template-id","serverInformation":{"serverName":"TopCoder API","apiVersion":"0.0.1","requestDuration":4,"currentTime":1504891122158},"requesterInformation":{"id":"d9994de712597c11d1caad64996d9fa0d9b4aa2c-w2VCwwGwnN6EeyhK","remoteIP":"12.34.56.789","receivedParams":{"apiVersion":"v2","termsOfUseId":"21153","action":"getTermsOfUse"}}}

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = {"terms":[{"termsOfUseId":21193,"title":"Standard Terms for Topcoder Competitions v2.1","url":"","agreeabilityType":"Electronically-agreeable","templateId":null},{"termsOfUseId":21153,"title":"Appirio NDA v2.0","url":"http://community.topcoder.com/tc?module=Terms&tuid=21153","agreeabilityType":"DocuSignable","templateId":"fake-template-id"}],"serverInformation":{"serverName":"Topcoder API","apiVersion":"0.0.1","requestDuration":11471,"currentTime":1504879510947},"requesterInformation":{"id":"456f987dee6e9823179c8184fd3509ffdf9c613a-FyefLdEpb8UHgFQF","remoteIP":"12.34.567.890","receivedParams":{"role":"Submitter","noauth":"true","apiVersion":"v2","challengeId":"30059255","action":"getChallengeTerms"}}}

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = {"terms":[{"termsOfUseId":21153,"title":"Appirio NDA v2.0","url":"http://community.topcoder.com/tc?module=Terms&tuid=21153","agreeabilityType":"DocuSignable","agreed":false,"templateId":"fake-template-id"},{"termsOfUseId":20704,"title":"Standard Reviewer Terms v1.0","url":"","agreeabilityType":"Electronically-agreeable","agreed":false,"templateId":null}],"serverInformation":{"serverName":"Topcoder API","apiVersion":"0.0.1","requestDuration":29,"currentTime":1504878884618},"requesterInformation":{"id":"1b37607c519c318194ce6da08c519c0a3f7c9855-7FSFCyd6oSX2mV6Z","remoteIP":"12.34.567.890","receivedParams":{"role":"Submitter","apiVersion":"v2","challengeId":"30059255","action":"getChallengeTerms"}}}

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = {"termsOfUseId":20704,"title":"Standard Reviewer Terms v1.0","url":"","text":"<h3>Standard Reviewer Terms (Version 1.0)</h3>\r\n\r\n<p>THESE ARE THE TERMS AND CONDITIONS (\"TERMS\") UNDER WHICH YOU AGREE TO WORK UNDER AS A TOPCODER REVIEW BOARD MEMBER.  THESE TERMS AND CONDITIONS AFFECT YOUR RIGHTS AND YOU SHOULD READ THEM CAREFULLY BEFORE AGREEING TO THEM.  IN THESE TERMS AND CONDITIONS, \"WE,\" \"US,\" \"ITS\" AND \"OUR\" REFER TO TOPCODER, INC. AND \"YOU\" AND \"YOUR\" REFER TO YOU. </p>\r\n\r\n<p>It is understood that We need, and You have, expertise in evaluating and critiquing software designs and/or software development solutions.  Furthermore, You agree that You are ready, willing, and able to undertake the performance of evaluating and critiquing such software designs and/or software development solutions submitted to Us, and You agree to assign and transfer your rights as a result of performing such services.</p>\r\n\r\n<p>In consideration of the premises and the mutual promises and covenants set forth herein, and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows:</p>\r\n\r\n<h4>1.0\tDefinitions:</h4>\r\n<p>As used in these Terms, the following capitalized terms shall have the following meanings unless otherwise indicated:</p>\r\n\r\n<p>1.1.\t\"Development(s)\" shall mean any idea, design, concept, development, component, algorithm, process, method, formula, code, software, technique, technology, discovery or improvement, whether or not patentable, made, conceived, created, discovered, invented or reduced to practice by You in connection with the performance of services hereunder. </p>\r\n\r\n<p>1.2.\t\"Intellectual Property Rights\" shall mean all intellectual property rights worldwide arising under statutory or common law or by contract and whether or not perfected, now existing or hereafter filed, issued or acquired, including all patent rights; all rights associated with works of authorship including copyrights and moral rights; rights relating to the protection of trade secrets and confidential information; and any right analogous to those set forth herein and any other proprietary rights relating to intangible property, other than Trademarks.</p>\r\n\r\n<p>1.3.\t\"TopCoder Information\" shall mean TopCoder's and TopCoder Software's specifications, descriptions, architecture, plans, interfaces, and code for TopCoder's and TopCoder Software's hardware, software, and web site; TopCoder's competitions and competition operation procedures; TopCoder's and TopCoder Software's business and operational plans; and derivatives of the foregoing.  The TopCoder Information shall be Confidential Information hereunder.</p>\r\n\r\n<p>1.4.\t\"Software Component\" shall mean all software and related materials, technology and documentation (including without limitation design documents, source code and object code) to be evaluated and assessed by You for Us hereunder in accordance with our requirements, as set forth herein and in other documents provided by Us.  The Software Component shall be Confidential Information hereunder.</p>\r\n\r\n<h4>2.\tServices:</h4>\r\n\r\n<p>2.1\tYou hereby agree to provide services relating to the evaluation and assessment of the Software Component.  You agree to perform such services according to and in conformity with the following specifications, in addition to any specifications and/or scheduled provided by Us in our sole discretion (the \"Services\"):</p>\r\n\r\n<ul>Architecture Review Board requirements per component project:\r\n<li>If assigned the role of Primary Architect, as designated by Us, You will review all component submissions to check if all required elements are present as defined in the Design Screening Scorecard. If all required elements are present, then the reviewer objectively scores the design on a series of questions in the Design Screening Scorecard. This process will narrow down the component submissions to the top components, which will go on to a more detailed review.</li>\r\n<li>All Architecture Review Board members for a component will fill out a subjective review for each component that passes the screening phase.  This review is performed through a series of questions in the Design Review Scorecard. Each question requires both a score and comments.</li>\r\n<li>The Primary Architect is responsible for aggregating all review comments.  This includes resolving any conflicts between differing architect comments.  The Primary Architect may deem some suggestions as mandatory with our permission.</li>\r\n<li>The Primary Architect is responsible for giving final review to the component submission once the comments have been applied.  This includes ensuring that mandatory suggestions have been implemented, and that all suggestions implemented have been done correctly.</li>\r\n<li>All interaction with designers, our personnel and other Architecture Review Board members should occur in the online forum on www.topcodersoftware.com.</li>\r\n</ul>\r\n\r\n<ul>Development Review Board requirements per component project:\r\n\r\n<li>If assigned the role of Primary Reviewer, as designated by Us, You will review all component submissions to check if all required elements are present as defined in the Development Screening Scorecard. If all required elements are present, then the reviewer objectively scores the development solution on a series of questions in the Development Screening Scorecard. This process will narrow down the component submissions to the top components, which will go on to a more detailed review.</li>\r\n<li>All Development Review Board members for a component will fill out a subjective review for each component that passes the screening phase.  This review is performed through a series of questions in the Development Review Scorecard. Each question requires both a score and comments.  In addition, the reviewers will each be assigned one of the following roles, which defines what type of test cases they are responsible for submitting:</li>\r\n<ul type=\"circle\">\r\n<li>Stress Tester - Develop test cases to stress test component solutions in order to get performance metrics on throughput and capacity.</li>\r\n<li>Accuracy Tester - Develop test cases to test the accuracy of the component.  Each public method should be tested to ensure it returns the expected result.</li>\r\n<li>Failure Tester - Develop test cases to test different input types for all constructor methods and public methods that are not covered in the developer unit test cases or the designer test cases.</li>\r\n</ul>\r\n<li>All interaction with designers, developers, our personnel and other Development Review Board members should occur in the online forum on www.topcodersoftware.com.</li>\r\n</ul>\r\n\r\n<p>2.2\tYou agree to commit sufficient time and resources to perform the Services according to the schedule set forth by Us.  You shall promptly notify Us of any circumstances, as such circumstances arise, that may reasonably be anticipated to lead to a material deviation from the schedule.</p>\r\n\r\n<p>2.3\tYou agree to keep Us updated, promptly upon our request, of any progress, problems, and/or developments of which You are aware regarding the Services.  We shall have the right to require such updates in writing from You in a format specified by Us or acceptable to Us in our sole discretion.  You shall conduct and conclude the Services in a professional manner.</p>\r\n\r\n<h4>3.\tConsideration/Compensation:</h4>\r\n\r\n<p>3.1\tFee.  In consideration for performance of the Services required by You, We shall pay You the fee set forth on TopCoder's website and/or in other correspondence from Us to You (the \"Fee\").  The Fee shall be in U.S. Dollars and may be paid in installments, as set forth on our website or in other correspondence from Us.  The Fee shall be paid upon the conclusion of the review period, and once completed scorecards have been received, provided the completed scorecards are submitted to Us by the deadline as set forth on the website and/or in the correspondence from Us.</p>\r\n\r\n<p>3.2\tRoyalty Payments.</p>\r\n  \r\n<p>(a)\tDefinitions.  As used in this Section 3, the following capitalized terms shall have the following meanings unless otherwise indicated:</p>\r\n<ul>\r\n<li>(i)\t\"Royalty Percentage\" shall mean the percentage of the Royalty Pool to be distributed by Us, at our sole discretion, to all review board members who evaluate the Software Components. </li>\r\n<li>(ii) \"Royalty Pool Percentage\" shall mean the percentage of total revenue We derive from the sale of Software Components.  We, in our sole discretion, shall determine the Royalty Pool Percentage and may modify or amend the Royalty Pool Percentage at any time for any or no reason.  </li>\r\n<li>(iii) \"Royalty Pool\" shall mean the portion of our revenues that We distribute as royalty payments to the designers, architects, developers and quality assurance developers who designed, evaluated, developed and tested the applicable Software Components.  The Royalty Pool shall be determined by multiplying (x) the Royalty Pool Percentage by (y) the total revenues received by Us from licenses of the applicable Software Components during the respective fiscal quarter.  </li>\r\n<li>(iv) \"Revenue Receipt Date\" shall mean the date on which We first receive payment of revenue from licenses of an applicable Software Components.  </li>\r\n</ul>\r\n\r\n<p>(b)\tIn consideration of Your evaluation of the Software Components and performance of Your obligations hereunder, We may pay to You a royalty (the \"Royalty Payment\").  The Royalty Payment to be paid shall be a portion of the Royalty Pool.  The Royalty Pool shall be distributed as follows:</p>\r\n\r\n<ul>\r\n<li>(i)  25% to all Architecture Review Board members.  (This amount will be distributed equally amongst all review board members.)</li>\r\n<li>(ii)  25% to all Development Review Board members.  (This amount will be distributed equally amongst all review board members.)</li>\r\n<li>(iii)  25% to the winning designer</li>\r\n<li>(iv)  25% to the winning developer</li>\r\n</ul>\r\n\r\n<p>3.3\tTotal Payment.  The sum of the Fee and the Royalty Payments shall be the total payment due to You.  Any and all out-of-pocket expenses incurred by You in connection with performing the obligations hereunder are your sole responsibility.  We will not reimburse You for any expenses incurred.</p>\r\n\r\n<p>3.4\tYou shall not be entitled to receive any other compensation or any benefits from Us in connection with the Services.  Except as otherwise required by law, We shall not withhold any sums or payments made to You for social security or other federal, state or local tax liabilities or contributions, and all withholdings, liabilities, and contributions shall be solely your responsibility.  Further, You understand and agree that the Services are not covered under the unemployment compensation laws and are not intended to be covered by workers' compensation laws.</p>\r\n\r\n<h4>4.\tOwnership and Rights:</h4>\r\n\r\n<p>4.1\tYou hereby acknowledge and agree that We own, solely and exclusively, all right, title and interest, including all Intellectual Property Rights, in and to the TopCoder Information.  In addition, You hereby irrevocably and unconditionally transfer and assign to Us all right, title and interest You had, have, may have or acquire in or to all Developments and Software Components, and You agree to execute and deliver such documents, certificates, assignments and other writings, and take such other actions as may be necessary or desirable to vest in Us the ownership rights granted to Us hereunder.</p>\r\n\r\n<p>4.2\tYou further agree that any and all works of authorship created, authored or developed by You hereunder shall be deemed to be \"works made for hire\" within the meaning of the United States Copyright Law and, as such, all rights therein including copyright shall belong solely and exclusively to Us from the time of their creation.  To the extent any such work of authorship may not be deemed to be a work made for hire, You agree to, and do hereby, irrevocably and unconditionally transfer and assign to Us all right, title and interest including copyright in and to such work.</p>\r\n\r\n<p>4.3\tYou agree that if We are unable, because of your unavailability, or for any other reason, to secure your signature to apply for or to pursue any application for any United States or foreign patents, mask work, copyright or trademark registrations covering the assignments to Us above, then You hereby irrevocably designates and appoints Us and your duly authorized officers and agents as your agent and attorney in fact, to act for and in your behalf and stead to execute and file any such applications and to do all other lawfully permitted acts to further the prosecution and issuance of patents, copyright, mask work and trademark registrations thereon with the same legal force and effect as if executed by your authorized agent.</p>\r\n\r\n<p>4.4\tAll Intellectual Property Rights owned by a party as of the date You agree to these Terms shall remain the property of such party and no licenses or other rights with respect to such intellectual property are granted to the other party except as expressly set forth herein.</p>\r\n\r\n<p>4.5\tNothing in these terms shall be construed as granting You any right or license under any of our Intellectual Property Right (including any rights We may have in any patents, copyrights, trademarks, service marks or any trade secrets), by implication, estoppel or otherwise, except as expressly set forth herein.</p>\r\n\r\n<h4>5.\tConfidential Information:</h4>\r\n\r\n<p>5.1\t\"Confidential Information\" shall mean any information, in whatever form, provided by Us to You with obligation of confidentiality, or designated by Us in writing as confidential, proprietary or marked with words of like import when provided to You, and information orally conveyed if We state at the time of oral conveyance or promptly thereafter that such information is confidential.  Notwithstanding anything to the contrary contained herein, information about or relating to our software, our system interfaces, our hardware and software architecture, our business, operational and marketing plans, our member lists and database, all information and technology provided by Us to You to enable You to perform your obligations hereunder, TopCoder Information, and any and all Developments shall be considered Confidential Information.</p>\r\n\r\n<p>5.2\tConfidential Information shall not include information which (a) was in your possession without confidentiality restriction prior to disclosure by Us hereunder; (b) at or after the time of disclosure by Us becomes generally available to the public through no act or omission on our part; (c) is developed by You independently of and without reference to any Confidential Information You receive from Us; or (d) has come into your possession without confidentiality restriction from a third party and such third party is under no obligation to Us to maintain the confidentiality of such information.</p>\r\n\r\n<p>5.3\tYou acknowledge the confidential and proprietary nature of Confidential Information and agree (i) to hold Confidential Information in confidence and to take all reasonable precautions to protect such Confidential Information (including, without limitation, all precautions You employ with respect to your own confidential materials), (ii) not to divulge any such Confidential Information to any third person; and (iii) not to make any use whatsoever of such Confidential Information except as expressly authorized herein.</p>\r\n\r\n<p>5.4\tIn the event You are ordered to disclose Confidential Information pursuant to a judicial or government request, requirement or order, You shall promptly notify Us and upon our request, You shall, at our expense, take reasonable steps to assist Us in contesting such request, requirement or order or in otherwise protecting our rights prior to disclosure.  </p>\r\n\r\n<p>5.5\tYou agree not to reproduce or copy by any means Confidential Information, except as reasonably required to perform the Services.  Upon termination of your performance of the Services as a review board member, your right to use Confidential Information shall immediately terminate.  In addition, upon such termination, or upon demand by Us at any time, You shall return promptly to Us or destroy, at our option, all tangible materials and computer data that disclose or embody Confidential Information. </p>\r\n\r\n<p>5.6\tYou agree that any breach of these terms by You could cause irreparable damage to Us.  In view of the difficulties of placing a monetary value on the Confidential Information, We shall have, in addition to any and all remedies of law, the right to an injunction or other equitable relief, and may be entitled to a preliminary and final injunction without the necessity of posting any bond or undertaking in connection therewith to prevent any further breach or further unauthorized use of Confidential Information.  This remedy is separate from any other remedy We may have. </p>\r\n\r\n<h4>6.\tRepresentations and Warranties:</h4>\r\n\r\n<p>6.1\tYou represent and warrant that:\r\n<ul>\r\n<li>(a) You are at least 18 years old;</li>\r\n<li>(b) You are either (i) a U.S. citizen, (ii) a lawful permanent resident of the U.S., (iii) currently residing in the U.S. with proper and valid work authorization to work as an independent contractor, or (iv) a non-U.S. citizen, not living in the U.S. and performing the Services while residing in your country of residence;</li>\r\n<li>(c)\tYou are legally able and have the power and authority to execute, deliver and perform the Services and any other agreements contemplated hereby and to consummate the transactions contemplated hereby;</li>\r\n<li>(d)\tNo impediment exists to You agreeing to these Terms, and no other agreement has been or shall be made with any third party which will interfere with its performance;</li>\r\n<li>(e)\tYou shall use Your own independently developed code, and shall not copy or include code from any other party, including publicly available \"Open Source\" code that is or may be subject to licensing restrictions, without our prior written permission; and</li>\r\n<li>(f)\tAny services performed by You as a review board member shall be performed in a professional and workmanlike manner.</li>\r\n</ul>\r\n</p>\r\n\r\n<h4>7.\tIntellectual Property Indemnification:</h4>\r\n\r\n<p>7.1\tYou shall indemnify, hold harmless and defend Us and our customers from and against any and all suits, actions, damages, costs, losses, expenses (including settlement awards and reasonable attorneys' fees) and other liabilities arising from or in connection with any claim alleging that, to your knowledge, any Development and/or Software Component violates any trade secret right, or infringes any copyright, patent, trademark, or other intellectual property interest, in any country, and shall pay all costs and damages awarded.  We shall promptly notify You of any such claim of which We are aware.</p>\r\n\r\n<p>7.2\tYour obligations shall not extend to any claim for violation or infringement resulting solely from your compliance with any specific or direct written instructions from Us if such infringement would have been avoided but for such compliance.</p>\r\n\r\n<h4>8.\tIndependent Contractors:</h4>\r\n\r\n<p>8.1\tBoth parties expressly agree and understand that You are an independent contractor and nothing herein nor the services rendered hereunder is meant, or shall be construed in any way or manner, to create a relationship of employer and employee, principal and agent, partners or any other relationship other than that of independent parties contracting with each other solely for the purpose of carrying out the provisions of these Terms.  Accordingly, You acknowledge and agree that You shall not be entitled to any benefits provided by Us to our employees.  You shall be responsible for any and all out-of-pocket expenses incurred in connection with performing the Services.  In addition, You shall have sole and exclusive responsibility for the payment of all federal, state and local income taxes, for all employment and disability insurance and for Social Security and other similar taxes with respect to any compensation provided by Us hereunder.  You further agree that if We pay or become liable for such taxes or related civil penalties or interest as a result of your failure to pay taxes or report same, or due to our failure to withhold taxes, You shall indemnify and hold us harmless for any such liability.  You shall assume and accept all responsibilities which are imposed on independent contractors by any statute, regulation, rule of law, or otherwise.  You are not our agent and are not authorized and shall not have the power or authority to bind Us or incur any liability or obligation, or act on behalf of Us.  At no time shall You represent that You are our agent, or that any of the views, advice, statements and/or information that may be provided while performing the Services are ours.</p>\r\n\r\n<p>8.2\tWe are entitled to provide You with general guidance to assist You in completing the scope of work to our satisfaction, You are ultimately responsible for directing and controlling the performance of the task and the scope of work, in accordance with these Terms.  You shall use your best efforts, energy and skill in your own name and in such manner as You see fit.</p>","agreeabilityType":"Electronically-agreeable","serverInformation":{"serverName":"Topcoder API","apiVersion":"0.0.1","requestDuration":52,"currentTime":1504892902498},"requesterInformation":{"id":"d8c441f8332161f71533f368c09aeead856e4366-K1RdFai7LCAgXVu5","remoteIP":"12.34.56.78","receivedParams":{"apiVersion":"v2","termsOfUseId":"21193","action":"getTermsOfUse"}}}

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = {"termsOfUseId":21193,"title":"Standard Terms for Topcoder Competitions v2.1","url":"","agreeabilityType":"Electronically-agreeable","text":"<html>\r\n<head>\r\n<link type=\"text/css\" rel=\"stylesheet\" href=\"/css/main.css\">\r\n<style type=\"text/css\">\r\n   strong { color: #cc0000; }\r\n</style>\r\n</head>\r\n<body>\r\n<div style=\"background: #FFFFFF; padding: 15px; text-align:left;\">\r\n\r\n<h2>Terms & Conditions of Use at topcoder </h2>\r\n\r\n<h3>Acceptance of Terms and Conditions</h3>\r\n\r\nWelcome to topcoder.com (and related sub-domains (the \"Website\"). By using the Website, you are indicating your agreement to these Terms and Conditions of Use (\"Terms of Use\"), including, without limitation, our privacy policy. If you do not agree to these Terms of Use, please do not use the Website and exit now. \r\n</br></br>\r\n\r\nThroughout these Terms of Use, the words \"we,\" \"us,\" \"our,\" and topcoder refer to Topcoder, Inc., Appirio Inc. and their parents, subsidiaries and affiliates collectively.  The term \"Submissions\" shall refer to any entry, component of an entry, or contents of a posting onto the Website submitted in connection with Competitions.  \"Competitions\" shall refer to challenges, matches, tournaments or other competitions that take place on the Website or in connection with the topcoder Open (\"TCO\").  You and any other user of this Website that enters any Submissions with respect to Competitions shall be referred to herein as a \"Contestant\" in such capacity.\r\n</br></br>\r\n\r\n\r\nWe may revise these Terms of Use at any time without prior notice by updating this page and such revisions will be effective upon posting to this page. Please check this page periodically for any changes. Your continued use of this Website following the posting of any revisions to these Terms of Use will mean you accept those changes. We reserve the right to alter, suspend or discontinue any aspect of www.topcoder.com, including your access to it. Unless explicitly stated, any new features will be subject to these Terms of Use. \r\n</br></br>\r\n\r\n<h3>General Eligibility</h3>\r\nOur Website is not intended for use by children under the age of 13.  You must have your parents\" permission to use this Website if you have not reached the age of majority in your jurisdiction of primary residence and citizenship.  You must be at least 18 years old and have reached the age of majority in your jurisdiction of primary residence and citizenship to participate in any Competitions. \r\n</br></br>\r\n\r\nUnless otherwise stated in the rules of a Competition, you are not eligible to participate in such Competition if you are a resident of the Quebec province of Canada, Iran, Cuba, North Korea, Crimea Region of Ukraine, Sudan or Syria. In addition, you are not eligible to participate in any Competition if you are on the Specially Designated National list promulgated and amended, from time to time, by the United States Department of the Treasury.\r\n</br></br>\r\n\r\nFor Competitions that offer a cash prize and/or to participate in TCO, additional eligibility requirements apply.  Please see the \"Prize Payments\" and \"Additional TCO Terms\" sections of this Terms of Use for additional eligibility requirements.\r\n</br></br>\r\n\r\nWe may assign, novate or subcontract any or all of our rights and obligations under these Terms of Use at any time. \r\n</br></br>\r\n\r\nIf you have any questions regarding these Terms of Use, contact us at <a href=\"mailto:support@topcoder.com\">support@topcoder.com</a>.\r\n</br></br>\r\n\r\n<h3>Accounts; Passwords; Security</h3>\r\nYou may need to set up an account in order to use some of the features of the Website. You may not use a third party\"s account without permission. When you are setting up your account, you must give us accurate and complete information. This means that you cannot set up an account using a name or contact information that does not apply to you, and you must provide accurate and current information on all registration forms that are part of the Website. You may only set up one account.  You have complete responsibility for your account and everything that happens on your account. This means you need to be careful with your password. If you find out that someone is using your account without your permission, you must let us know immediately. You may not transfer your account to someone else. We are not liable for any damages or losses caused by someone using your account without your permission. However, if we (or anyone else) suffer any damage due to the unauthorized use of your account, you may be liable. \r\n</br></br>\r\n\r\nBy registering for an account with us, you are also hereby registered to compete in the TCO.  The TCO is a series of Competitions held in four (4) online periods (each, a \"Period\") throughout the year (which such periods are posted on the Website), and which leads up to an onsite tournament annually which will be held at a location and time to be determined by topcoder.  Your registration and participation in the TCO constitutes agreement with any additional applicable TCO terms and conditions (the \"TCO Rules\") that topocder may impose at its sole discretion as well as these Terms of Use, including those available at: http://tco15.topcoder.com/overview/competition-rules/.  NO PURCHASE NECESSARY TO ENTER OR WIN, A PURCHASE WILL NOT INCREASE YOUR CHANCE OF WINNING.\r\n\r\n\r\n<h3>Competitions</h3>\r\n\r\n\r\nIn addition to these Terms of Use, we may provide specific Official Rules and Regulations and other documentation for certain activities on this Website, including with respect to Competitions conducted by us and those in conjunction with third parties. These Terms of Use are incorporated by reference into the specific Official Rules and Regulations which appear in connection with information about a particular Competition. To the extent that any conflict exists between these Terms of Use and any specific Official Rules and Regulations, the Official Rules and Regulations for that Competition in which you choose to participate shall govern. \r\n\r\n<h3>Ownership Rights of Submissions</h3>\r\n<h4><strong><strong>Winning Submissions</strong></strong></h4>\r\n\r\nExcept with respect to \"Fun Challenges\", you hereby assign, grant and transfer and agree to assign, grant and transfer to us all right and title in and to any and all Submissions made by you in connection with a Competition for which you are paid a cash prize or other good and valuable compensation (or for which topcoder has in good faith made available for payment pending your completion of tocpoder\"s payment requirements) (any such Submission, a \"Winning Submission\"), along with any and all copyright, patent, trade secret, moral right, and other intellectual property rights, in and to any and all such Winning Submissions.  To the extent any rights in a Winning Submission are not assignable, you hereby grant and agree to grant to topcoder under any and all such rights an irrevocable, paid-up, royalty free, perpetual, exclusive, sublicensable (directly or indirectly through multiple tiers), transferable, and worldwide license to use and permit others to use such Winning Submission in any manner desired by us (and/or our contest sponsors or customers) without restriction or accounting to you, including, without limitation, the right to make, have made, sell, offer for sale, use, rent, lease, import, copy, prepare derivative works, publicly display, publicly perform, and distribute all or any part of such Winning Submission and modifications and combinations thereof and to sublicense (directly or indirectly through multiple tiers) or transfer any and all such rights. Further, you hereby waive and agree to waive in favor of topcoder any moral right or other right or claim that is contrary to the intent of a complete transfer of rights to topcoder in each Winning Submission.  You agree to promptly execute such documents and perform such acts as we may reasonably require to perfect our entire right, title, and interest in and to each and every Winning Submission, including a topcoder Competition Assignment Agreement if requested by topcoder and/or a sponsor of a Competition.  \r\n\r\n</br></br>\r\n<h4><strong>Other Submissions</strong></h4>\r\n\r\nExcept with respect to \"Fun Challenges\", the ownership rights in and to any Submission that is not a Winning Submission shall remain with the Contestant, except that to the extent you are required to enter into a Non-Disclosure Agreement in connection with a Competition (a \"Competition NDA\"), you understand and agree that the rights in and to any confidential information of the sponsor of a Competition shall remain the property of such Competition sponsor and you shall be bound by and the terms of such Competition NDA shall apply with respect to your rights in and to the Submission.  The current version of the Competition NDA is posted in the \"direct tool\" available on the Website.  In addition, by participating in a Competition and uploading a Submission, regardless of whether it is a Winning Submission or not, you consent to and you hereby grant Topcoder, other Topcoder members, Appirio, the Competition sponsor and their affiliates, employees, contractors and third parties engaged by them a license to review, revise, scan, comment on and/or update your Submission in connection with the Competition, without any payment to or further approval from you. You agree that this consent and license spans the length of the Competition and cannot be revoked.\r\n\r\n</br></br>\r\n<h4><strong>Fun Challenges</strong></h4>\r\n\r\n\"Fun Challenges\" are Competitions that do not have any winners or prizes associated with them, and are intended purely for the fun of participating and collaborating with fellow topcoder members throughout the world. All Submissions in connection with Fun Challenges will be made publicly available and without any restrictions on use by anyone worldwide.  By entering into a Fun Challenge and uploading a Submission in connection with a Fun Challenge, you hereby waive and release any and all ownership, copyright, patent, trade secret, moral right, and other intellectual property rights, in and to any and all such Submissions without the expectation of any payment or consideration of any kind.\r\n\r\n</br></br>\r\n<h4><strong>Contest Materials</strong></h4>\r\n\r\nYou hereby further acknowledge and understand that Competition sponsors, topcoder and Appirio engage, has engaged and will in the future engage in the development, preparation, production, acquisition and dissemination of creative, educational, artistic and other material (collectively, the \"Materials\"), including without limitation Materials that may be similar or identical to your Submission. You also acknowledge that other persons, including our employees and employees of a Competition sponsor, may previously have originated and may hereafter originate Materials that are similar or identical to your Submission. You agree that you will not be entitled to any compensation because of the use by Sponsor of any such similar or identical material. Without limitation of the foregoing, we, our customers and any Competition sponsor may use, without any payment or other obligation whatsoever to you, any part of the Materials, and any idea or concept contained therein, that (a) is similar or identical to, or contains significant elements encompassed in, a concept that is under consideration or in development by us or the Competition sponsor before or at the time of your entry, (b) is not unique, novel, original, and concrete so as to be entitled to protection under applicable laws, (c) has been made public by anyone at the time of its submission to the Competition sponsor or us or otherwise is in the public domain, (d) would be freely usable by a third person if it had not been accepted as a Submission or the subject of any agreement, (e) is not protected by United States copyright law, or (f) is similar or identical to, or contains significant elements encompassed in, an idea, concept or material that is independently created by us, a Competition sponsor or any third party.  You agree that our or a Competition sponsor\"s development, preparation, production, acquisition, dissemination and/or exploitation of Materials similar or identical to your Submission or containing features, ideas, material and/or elements similar to or identical with those contained in your Submission shall not entitle you to any compensation or other right or remedy. As an inducement to us or a Competition sponsor to accept your Submission for entry into the contest, you hereby waive any claim or right of action against us, the Competition sponsor\"s and their successors in connection with use of any Materials (or any portions thereof) whether or not such Materials are similar or identical to your Submission or contain any features, ideas, material and/or elements that are similar or identical to those contained in your Submission. Acceptance by us (or a Competition sponsor, as applicable) of a Submission is not an admission by us or a Competition sponsor of the novelty or originality of the Submission.\r\n</br></br>\r\n\r\n\r\nUnless agreed otherwise in writing, the sponsor of a contest administered through the Website, topcoder or Appirio (as applicable) owns and will retain ownership (including all intellectual property rights) in and to any materials that are not Submissions, which materials may be tangible or intangible, that you develop that are a result of a contest administered through the Website (\"Contest Materials\"), and any modifications, improvements and derivative works thereto (including any such materials that incorporate any of Contestant\"s ideas, feedback or suggestions). \r\n\r\n</br></br>\r\n<h4><strong>U.S. Federal Government Rights & Restrictions</strong></h4>\r\n\r\nFor any Competition sponsored by, on behalf of, or for the benefit of the U.S. Federal Government, Contestants may be subject to the Federal Acquisition Regulations and agree to comply with applicable provisions of the Federal Acquisition Regulations (\"FAR\") and all other laws and regulations applicable to providing goods and services to the U.S. Federal Government.  In particular, Winning Submissions be considered \"Commercial Items\" and Contestants may be classified as \"Subcontractors\" according to the U.S. Federal Government, and by entering a Submission in connection with a Competition, the Contestant hereby agrees to be bound by all laws and regulations applicable to the sale of commercial items by subcontractors to the U.S. Federal Government including FAR 52.212-5(e) and FAR 52.244-6(c)(1)..   \r\nUser Content\r\n</br></br>\r\n\r\nYou are solely responsible for any User Content you post to the Website, and the consequences of posting or publishing it. By \"User Content\", we mean any Content you post to the Website. \"Content\" means information, data, text, software, music, sound, photos, graphics, videos, messages, tags, interactive features, or any other materials. When we say \"post\", we include posting, uploading, sharing, submitting or otherwise providing User Content in any manner in connection with the Website. For the avoidance of doubt, Submissions and Contest Materials are User Content.\r\n</br></br>\r\n\r\nYou may not:\r\n</br></br>\r\n<ul>\r\n<li>Use our Website for any illegal purpose</li>\r\n<li>Submit User Content that you don\"t have the right to submit (including but not limited to material covered by someone else\"s copyright, patent, trade secret, privacy policy, publicity policy, or any other proprietary right)</li>\r\n<li>Disguise in any way the origin of any User Content you submit (including but not limited to forging headers)</li>\r\n<li>Submit any User Content that contains lies or misrepresentations that could damage Us or anyone else</li>\r\n<li>Submit User Content that is obscene, illegal, defamatory, libelous, threatening, pornographic, harassing, hateful, or encourages criminal conduct, give rise to civil liability, violate any law, or is otherwise inappropriate</li>\r\n<li>Transmit any advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes or any other solicitation</li>\r\n<li>Impersonate anyone else or misrepresent your affiliation with any other person or entity</li>\r\n<li>Use meta tags or any other hidden text utilizing any of our or our suppliers\" names, products names, or trademarks</li>\r\n<li>Upload, launch, post email or transmit any material (including any bot, worm, spider, script, or virus) that may harm or corrupt this Website, or anyone else\"s computer systems or data</li>\r\n<li>Use our Website to harm minors in any way</li>\r\n<li>Collect or gather other people\"s personal information (including account information)</li>\r\n<li>Submit User Content that disparages us or our partners and affiliates</li>\r\n<li>Solicit any users of our Website for any commercial purpose</li>\r\n</ul>\r\n</br></br>\r\n\r\nWe have the sole right, but not necessarily the obligation, to delete at any time any User Content that violates these rules or that we believe to be inappropriate for any reason.\r\n</br></br>\r\n\r\nIf you post User Content, you are making a guarantee to us that you either own all the Content you are posting, or you have the right to post the Content. Unless otherwise expressly permitted, you may not copy or include in any User Content any code from any third party, including \"open source\" code or other code that is or may be subject to license terms.  Furthermore, you are guaranteeing that you have the right to allow us to make your User Content available for others to view and use as part of the Website without requiring that any such use be subject to additional obligations or terms. If you do not have these rights, do not post the Content. By posting your User Content, you do not lose any ownership rights you may have to it. However, unless otherwise governed by the Official Rules and Regulations governing a specific Competition, you do grant us a worldwide, irrevocable, non-exclusive, royalty-free, fully-paid, sublicenseable (through multiple tiers of distribution) and transferable license to use, reproduce, modify, distribute, prepare derivative works of, display, and perform your User Content in connection with the Website and our business, in any media formats or in tangible form and through any media channels now known or hereinafter developed. You also grant each user of the Website a non-exclusive royalty-free, fully-paid, sublicenseable and transferable license to access your User Content through the Website, and to use, reproduce, distribute, prepare derivative works of, display and perform your User Content as permitted through the functionality of the Website and under these Terms of Service.\r\n</br></br>\r\n\r\nYou understand that once you post User Content, your content becomes public. We are not responsible for keeping any User Content confidential.\r\n</br></br>\r\n\r\nWe generally do not review any of the User Content posted by our users. We do not endorse any User Content or support any views, opinions, recommendations, or advice that may be in user submissions. User Content comes from a variety of sources, and we make no promises about the reliability of any source or the accuracy, usefulness, safety, or intellectual property rights of any user submission. You may be offended by User Content that you see on the Website. You may find some of it to be inaccurate, offensive, indecent, or objectionable. However, you agree not to hold us responsible in any way for your use of our Website, including your exposure to User Content.\r\n</br></br>\r\n\r\nWe reserve the right to remove any postings or other uploaded materials in response to complaints of infringement, obscenity or defamation or to otherwise review or edit such materials as appropriate, in our sole discretion and without notice.\r\n</br></br>\r\n\r\nIn addition to the above terms governing User Content, as a condition of participating in the TCO, you agree to permit topcoder to describe, publicize, and link to any User Content submitted or posted in connection with TCO.  You may not cheat; all ideas for Submissions submitted in connection with the TCO shall be solely yours; you may not collaborate on any Submissions entered in connection with the TCO unless otherwise set forth in the TCO Rules.  IN ORDER TO BE ELIGIBLE FOR THE TCO, YOU WARRANT THAT YOUR SUBMISSION FOR EACH COMPETITION THAT IS PART OF THE TCO:\r\n</br></br>\r\nDoes not include or anticipate the inclusion of any unsuitable or offensive content, including nudity, sexually explicit, disparaging, libelous or other inappropriate content;\r\n</br></br>\r\n\r\nDoes not include or anticipate the inclusion of any content that is in violation of or infringes third party intellectual property rights including, but not limited to copyrights, including music copyrights, trademarks, and rights of publicity;\r\n</br></br>\r\n\r\nHas not been entered in previous contests, or won previous awards;\r\n</br></br>\r\n\r\nHas not been published or distributed previously in any media;\r\n</br></br>\r\n\r\nIs suitable for a general audience; and\r\n</br></br>\r\n\r\nDoes not contain any claims that are not and cannot be substantiated or that would be false and/or misleading to a reasonable consumer.\r\n\r\n<h3>Copyright, Trademark and Other Intellectual Property</h3>\r\n\r\n<h4><strong>Protection</strong></h4>\r\nExcept as otherwise indicated, this Website and its entire contents (including, but not limited to, the text, photographs, information, software, graphics, images, sound, and animation) are owned by us and are protected by domestic and international copyright, trademark, patent, and other intellectual property laws. All copyrightable text and graphics, the selection, arrangement, and presentation of all materials (including information in the public domain), and the overall design of this Website are \"2014 topcoder. All rights reserved. We hereby give you permission to download and print materials from this Website for the sole purposes of viewing, reading, and retaining for reference the materials for non-commercial use. Any other copying, distribution, retransmission, or modification of information or materials on this Website, whether in electronic or other form, without our express prior written permission is strictly prohibited. You further agree that you will not disassemble, decompile, reverse engineer or otherwise modify the material on this Website. Any unauthorized or prohibited use may subject the offender to civil liability and criminal prosecution under applicable laws. \r\n\r\n</br></br>\r\n<h4><strong>Notice</strong></h4>\r\nAll trademarks, service marks, and trade names are proprietary to us or other respective owners that have granted us the right and license to use their marks. \r\n\r\n</br></br>\r\n<h4><strong>Copyright Complaints</strong></h4>\r\nWe respect the intellectual property of others, and we ask you to do the same. We may, in appropriate circumstances and at our sole discretion, terminate the access of users who infringe the copyright rights of others. \r\nIf you believe that your work has been copied and is accessible at our Website in a way that constitutes copyright infringement, or that our Website contains links or other references to another online location that contains material or activity that infringes your copyright rights, you may notify us by providing our copyright agent the information required by the U.S. Online Copyright Infringement Liability Limitation Act of the U.S. Digital Millennium Copyright Act, 17 U.S.C. \"512. Our agent for notice of claims of copyright infringement on or regarding this Website can be reached as follows: \r\n</br></br>\r\n\r\n<table>\r\n<tbody>\r\n<tr>\r\n<td width=\"66\">BY E-MAIL:</td>\r\n<td width=\"777\"><a href=\"mailto:support@topcoder.com\">GC@appirio.com</a></td>\r\n</tr>\r\n<tr>\r\n<td width=\"66\">BY MAIL:</td>\r\n<td width=\"777\">Dan Lascell</br>\r\n\r\nTopcoder, Inc.</br>\r\n\r\n760 Market Street</br>\r\n\r\nSan Francisco, CA 94102</td>\r\n</tr>\r\n<tr>\r\n<td width=\"66\">BY PHONE:</td>\r\n<td width=\"777\">(650) 268-9911</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</br></br>\r\n\r\nRepeat infringers will be blocked from accessing the topcoder Website. \r\n\r\n</br></br>\r\n<h4><strong>Marketing Materials</strong></h4>\r\n\r\n\r\nYou hereby authorize us and any Competition sponsors to publicize the results of any Competition, including your name and account name (handle). Contestant hereby grants to us and any Competition sponsors the absolute right and permission to use your name, address (city and state), testimonial statement (or statements in different words which have substantially the same meaning), voice, photograph and/or other likeness in any and all advertising and promotional materials, or to refrain from doing so, in any manner or media whatsoever, worldwide, for advertising and promotional purposes in conjunction with this and similar Competitions without notice to you and without further compensation. You shall have no right of approval, no claim to any compensation, and no claim arising out of the use, alteration, distortion or illusionary effect or use in any composite form of your name, address, testimonial statement, voice, photograph or likeness.</br></br>\r\n\r\nYou understand that we own all photographs of you taken by us and we may copyright material containing such photographs.\r\n</br></br>\r\n\r\n<h4><strong>Indemnification and Release</strong></h4>\r\nBy accessing our Website, you agree to indemnify us and any parent, subsidiary, sponsor or affiliated entities, our officers and employees, and officers and employees of any parent, subsidiary, sponsor or affiliated entities and hold them harmless from any and all claims and expenses, including attorney's fees, arising from your use of our Website including any material (including third-party material) that you post on our Website and any services or products available through our Website. In addition, you hereby release us and any parent, subsidiary, sponsor or affiliated entities, our officers and employees, and officers and employees of any parent, subsidiary, sponsor or affiliated entities from any and all claims, demands, debts, obligations, damages (actual or consequential), costs, and expenses of any kind or nature whatsoever, whether known or unknown, suspected or unsuspected, disclosed or undisclosed, that you may have against them arising out of or in any way related to such disputes and/or to any services or products available at our Website. You hereby agree to waive all laws that may limit the efficacy of such releases. \r\n</br></br>\r\n\r\nBy registering and/or participating in the TCO or a Competition, you agree to release topcoder and any Competition sponsor(s), and its affiliates and agents, and the officers, employees, affiliates, advertising and promotions agencies, prize suppliers, and all of their employees, officers, directors, shareholder's and agents (collectively, the \"Releasees\") from any and all liability or any injuries, loss or damage of any kind arising from or in connection with the TCO or a Competition, the use of any Submission, or the acceptance or use of any prize won, except where prohibited by law. Releasees assume no responsibility for incomplete, misdirected, damaged or illegible entries nor for any delayed Submissions or those not received for whatever reason, including without limitation due to internet or e-mail server failure, telephone, human, or other higherror or for any technical or other malfunctions that may occur including any injury or damage to your or any other person's computer relating to or resulting from participation in the Tournament or a Competition or downloading any materials during or for the TCO or a Competition.\r\n</br></br>\r\n\r\n<h4><strong>Disclaimer</strong></h4>\r\nTHE MATERIALS AND SERVICES ON OUR WEB SITE ARE PROVIDED \"AS IS\" AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE MATERIALS WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS WEB SITE OR THE SERVER(S) THAT MAKES OUR WEB SITE AVAILABLE OR ANY ADVERTISED OR HYPERLINKED SITE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT OUR SITE, SERVER(S), ADVERTISED OR HYPERLINKED SITES WILL BE ACCESSIBLE AT ALL TIMES. WE DO NOT WARRANT THAT SUCH ERRORS, DEFECTS OR INTERRUPTIONS IN SERVICE WILL NOT AFFECT THE RESULTS OF OUR COMPETITIONS, AND WE DISCLAIM ANY RESPONSIBILITY FOR REDUCED PERFORMANCE IN COMPETITIONS DUE TO SUCH PROBLEMS. WE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF OUR WEB SITE WITH RESPECT TO CORRECTNESS, ACCURACY, RELIABILITY, GRAPHICS, LINKS OR OTHERWISE. YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. TO THE EXTENT THAT APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU. \r\n</br></br>\r\n\r\nDocuments, graphics and other materials appearing at our Website may include technical inaccuracies, typographical errors, and out-of-date information and use of such documents, graphics or other materials is at your own risk. \r\nYou represent and warrant that neither you nor any member of your immediate family, nor anyone living in your household, is an employee of topcoder or Competition sponsors, regardless of commitment date as sponsor, including any companies involved in the production (including prize suppliers), implementation and distribution of this tournament and their advertising or promotion agencies, parent companies, service providers, agents, officers, subsidiaries or affiliates, or any other persons or entities directly associated with the tournament, and that neither you nor any immediate family member nor anyone living in your household is connected with any of the above.\r\n\r\n</br></br>\r\n<h4><strong>Limitation of Liability</strong></h4>\r\n\r\nTO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, TOPCODER] SHALL NOT BE LIABLE FOR ANY DAMAGES (INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES), WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF WINNINGS, DATA OR OTHER DAMAGE TO ANY OTHER INTANGIBLE PROPERTY, EVEN IF TOPCODER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, RESULTING FROM (i) THE USE OR INABILITY TO USE THIS WEB SITE, (ii) THE DISCLOSURE OF, UNAUTHORIZED ACCESS TO OR ALTERATION OF ANY TRANSMISSION OR DATA, (iii) THE STATEMENTS OR CONDUCT OF ANY THIRD PARTY OR (iv) ANY OTHER MATTER RELATING TO TOPCODER. \r\n\r\n</br></br>\r\n<h4><strong>Prize Payment</strong></h4>\r\n\r\nYou understand that neither we, the Competition sponsors nor their parent corporations, subsidiaries, affiliates, agents, assigns, etc. or any entity connected with a Competition will be responsible for any costs (including, without limitation, any federal, state or local taxes) Contestant may incur in connection with any Contest or any prize Contestant may be awarded. However, Contestant understands that topcoder may make withholdings from any prize that Contestant may be awarded in order to comply with applicable tax laws. Contestant agrees to sign any applicable forms necessary to distribute the prize as required by tax authorities.\r\n</br></br>\r\n\r\nAll cash prizes are listed and shall be awarded in USD. All prizes will be awarded in each Competition, provided a qualified number of Submissions are received and the requisite number of Contestants participate in a round of a Competition.  A Competition sponsor may award prizes to more than one Submission with respect to any Competition.  If a Contestant cannot or will not accept a prize, then the prize will be forfeited and may be awarded to the next highest scoring Submission. Unless otherwise provided herein, by participating in a Competition and/or the TCO, a Contestant acknowledges and agrees that if his/her Submission is selected as a winner, the Contestant will receive a cash award only upon verification of all applicable eligibility requirements. Cash prizes will be paid out by topcoder (or its designee) in the US in US dollars no later than 90 days following the conclusion of the Competition or the conclusion of the TCO (as applicable). Taxes, if any, are the sole responsibility of the winner(s). Prizes which remain unclaimed or undeliverable for a period of six (6) months will be forfeited. \r\n</br></br>\r\n\r\nAs a condition of winning and redeeming a cash prize, Contestants will be required to submit a completed (i) Contestant Questionnaire and all post Competition surveys, (ii) if requested, an Affidavit of Eligibility and Liability and Publicity Release, unless a notarized copy is already on file with topcoder (iii) IRS Form W-9 or W-8BEN, as appropriate if one is not already on file with topcoder, (iv) with respect to the TCO, a topcoder Competition Assignment Agreement, if one is not already on file with topcoder, and (v) with respect to the TCO, a Travel form. In completing any requested Affidavit of Eligibility and Liability and Publicity Release, a Contestant who wins a cash prize (a) confirms his/her eligibility, (b) represents and warrants that he/she has not cheated, (c) verifies the accuracy of the demographic information submitted to, and contained in, the topcoder member database, (d) authorizes topcoder to publicize the results of the Competition and/or the TCO, (e) agrees to sign any applicable forms required by tax authorities, (f) grants topcoder a license to all information submitted during the Competition and/or the TCO, and (g) releases topcoder from liability arising out of any prize won.  topcoder requires all Contestants to complete the Form W-9 or W-8BEN for tax reporting purposes. Providing false information in the registration process or in the required forms described in this paragraph will result in a forfeiture of a cash prize. If a winning Contestant (i) does not reply to a notification from topcoder or the notification is undeliverable, (ii) in the case of TCO, does not return a requested Affidavit of Eligibility/Liability/Publicity release completed and signed within ten (10) days of date of prize notification, or (iii) is not otherwise in compliance with these Rules or the rules of a Competition, the Contestant will be disqualified and forfeit any prize, and topcoder may, at our discretion, select and notify another Contestant. Participatory prizes and non-cash prizes will be mailed within one month following the conclusion of the Competition or the TCO (as applicable) to the address provided by the Contestant in their topcoder profile. Unclaimed or undeliverable participatory prizes will be forfeited. Contestants who do not submit the required information by the applicable deadlines forfeit their prizes. Please allow 6-12 weeks for delivery. If a Contestant\"s prize is returned, topcoder will resend that prize to a secondary address provided a request is made by the prizewinning Contestant. topcoder is not responsible for lost or stolen items and will not send additional prizes in the event a prize is not received. Each Contestant that participates in the Onsite portion of the TCO is eligible to receive only one (1) TCO T-shirt during the TCO, which may only be picked up by the Contestant at the TCO.\r\n\r\n</br></br>\r\n<h4><strong>Links to Other Web Sites and Services</strong></h4>\r\n\r\nTo the extent that our Website contains links to other Websites and outside services and resources, we do not control the availability and content of those Websites, services or resources, nor do we necessarily review or endorse materials available at or through such other Websites. Viewing other Websites or utilizing outside services and resources is done at your own risk. We shall not be liable for any loss or damage caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource. \r\n</br></br>\r\n\r\n<h4><strong>Other Restrictions on Conduct</strong></h4>\r\nWe are making the Website available to you for your information and personal use only. You may not (and you agree not to) use, copy, distribute, transmit, broadcast, sell, or do anything else with the Website for any other purpose.\r\n</br></br>\r\n\r\nYou agree not to disrupt, modify or interfere with the functioning of our Website or any services provided on or through our Website or with any associated software, hardware or servers in any way and you agree not to impede or interfere with others' use of our Website. This includes your agreement that you will not cheat; that the idea for the code and/or challenge(s) submitted by you is yours alone. This also includes your agreement that you will not provide your topcoder information including, but not limited to, your topcoder handle and rating, to any third party for the purpose of pursuing employment opportunities without the written consent of topcoder. If you are contacted by a third-party regarding employment opportunities and/or media interest as a result in your participation in topcoder Competitions, you agree to promptly notify topcoder of such contact. You also agree not to alter or tamper with any information or materials on, or associated with our Website or services provided on or through our Website. \r\nWe do not necessarily endorse, support, sanction, encourage, verify or agree with the comments, opinions, or other statements made public at our Website by users through our Competitions, forums or other interactive services available at our Website. Any information or material sent by users to any forums, including advice and opinions, represents the views and is the responsibility of those users and does not necessarily represent our views. \r\n</br></br>\r\n\r\nYou agree that no impediment exists to you joining the topcoder Website, and your participation in topcoder's Website and the Competitions it offers will not interfere with your performance of any other agreement or obligation which has been or will be made with any third party. \r\n</br></br>\r\n\r\n<h4><strong>Provisions Applicable to Chinese Citizens and Expatriates Residing in China</strong></h4>\r\ntopcoder hereby incorporates into these Terms of Use and into our Privacy Policy the provisions of China's Decision on Safeguarding the Security of the Internet (the \"Decision\"). \r\n</br></br>\r\n\r\nAccording to Section 1 of the Decision \"to ensure operational security of the Internet, the person or organization perpetrating any of the following acts in violation of the criminal law shall be penalized according to the criminal code:\r\n</br></br>\r\n<ol>\r\n<li>1.\tUnauthorized penetration into the computer and information system of the state affair, national defense or high-tech departments of the state;</li>\r\n<li>2.\tIntentional composition or dissemination of computer virus or other destructive programs, or attacking the computer system or telecommunication network and resulting in damage or destruction of such computer systems or telecommunication network;</li>\r\n<li>3.\tUnauthorized disruption of operation of the computer network or telecommunication service and resulting in malfunction of such network or telecommunication systems in violation of the laws or regulations of the state.\"</li>\r\n</ol>\r\n</br></br>\r\nAccording to Section 2 of the Decision, \"to protect national security and social stability, the person or organization perpetrating any of the following acts in violation of the criminal law shall be penalized according to the criminal code:\r\n</br></br>\r\n<ol>\r\n<li>1.\tDisseminating rumor or slander on the Internet, or publishing or diffusing maleficent information to instigate subversion of the state power or socialist system, advocate abruption of the country or harm unity of the country;</li>\r\n<li>2.\tStealing or disclosing the national or military secrets on the Internet;</li>\r\n<li>3.\tInstigating inter-ethnic enmity or prejudice, or disrupting ethnic unity on the Internet; and</li>\r\n<li>4.\tEstablishing or organizing heresies on the Internet and impeding the implementation of laws and regulations of the state.\"</li>\r\n</ol>\r\n</br></br>\r\n\r\nSection 3 of the Decision also stipulates that \"to safeguard the order of the socialist market economy and social stability, the person or organization perpetrating any of the following acts in violation of the criminal law shall be penalized according to the criminal code:\r\n</br></br>\r\n<ol>\r\n<li>1.\tSelling fake or shoddy goods on the Internet or making false or misleading propaganda of commodities on the Internet;</li>\r\n<li>2.\tHurting others' commercial fame or reputation of products on the Internet;</li>\r\n<li>3.\tInfringing upon others' intellectual property rights on the Internet;</li>\r\n<li>4.\tCompiling and distributing false information on the Internet to affect securities or futures transactions or disrupt order of the financial markets; and</li>\r\n<li>5.\tEstablishing pornographic web sites or web pages, providing links to pornographic web sites, or disseminating pornographic magazines, films, audio and videos materials or graphics on the Internet.\"</li>\r\n</ol>\r\n</br></br>\r\nSection 4 of the Decision stipulates that \"to protect the legal rights of personal safety and property of individuals, legal persons and other organizations, the person or organization perpetrating any of the following acts in violation of the criminal law shall be penalized according to the criminal code:\r\n</br></br>\r\n<ol>\r\n<li>1.\tInsulting others or drawing up slanders against others on the Internet;</li>\r\n<li>2.\tIllegally intercepting, modifying or deleting others' emails or other database materials and infringing rights of the citizen of freedom and secrets in communicating and letter transmitting; and</li>\r\n<li>3.\tPerpetrating theft, fraud, or blackmailing on the Internet.\"</li>\r\n</ol>\r\n\r\n<h4><strong>Choice of Law and Forum</strong></h4>\r\n\r\nThese Terms of Use are governed by the laws of the state of California. You hereby agree to submit to the exclusive jurisdiction of the courts of San Francisco County, California. To the extent that applicable laws have mandatory application to this agreement or give you the right to bring action in any other courts, the above limitations may not apply to you. Use of this Website is unauthorized in any jurisdiction that does not give full effect to all provisions of these Terms of Use. \r\n\r\n</br></br>\r\n<h4><strong>Severability and Enforceability</strong></h4>\r\n\r\nIf any provision or portion of these Terms of Use is held illegal, invalid, or unenforceable, in whole or in part, it shall be modified to the minimum extent necessary to correct any deficiencies or replaced with a provision which is as close as is legally permissible to the provision found invalid or unenforceable and shall not affect the legality, validity or enforceability of any other provisions or portions of these Terms of Use. \r\n\r\n</br></br>\r\n<h4><strong>Termination/Exclusion</strong></h4>\r\n\r\nWe reserve the right, in our sole discretion, to revoke any and all privileges associated with accessing and/or competing on our Website, and to take any other action we deem appropriate including but not limited to terminating or suspending your use of www.topcoder.com, for no reason or any reason whatsoever, including improper use of this Website or failure to comply with these Terms of Use. \r\n</br></br>\r\n\r\n<h3>Additional TCO Terms</h3>\r\n\r\n<h4><strong>Eligibility</strong></h4>\r\nThe TCO and each Competition that is part of the TCO is open to all members of the topcoder Website who have agreed to these Terms of Use and who are at least 18 years of age at the time of registration and have attained the age of majority in their jurisdiction of primary residence and citizenship.  In addition to the other terms and eligibility criteria set forth in these Terms and Use, to be eligible to participate in the TCO, you must be (i) a U.S. citizen, (ii) a lawful permanent resident of the U.S., (iii) a temporary resident, asylee, refugee of the U.S., or have a lawfully issued work authorization card permitting unrestricted employment in the U.S., or (iv) a non-U.S. resident authorized in the country in which the member resides while participating in the TCO to perform services as an independent contractor; or (v) with respect to any Competition designated by us as an \"Algorithm Competition\", be in the United States under a valid and current visa issued by the United States government which does not prohibit receiving a cash prize. \r\n</br></br>\r\n\r\nViolation of these Terms of Use may result in disqualification from the TCO and/or further consequences as determined in our sole discretion. Current employees of topcoder and those involved in the development, production (including prize suppliers and sponsors), implementation and distribution of the TCO (including Competitions run as part of the TCO) and their advertising or promotion agencies, parent companies, service providers, agents, officers, subsidiaries or affiliates, or any other persons or entities directly associated with the TCO and members of their immediate families and/or persons living in the same household as such persons, are ineligible to enter the TCO and related Competitions. Current employees of any TCO sponsor (or Competition sponsor that is part of TCO) or their parent companies, subsidiaries or affiliates which such Competition sponsor or TCO Sponsor, as applicable, is involved in the preparation, administration or judging of the TCO (and any related Competitions) and members of their employees' immediate families and/or persons living in the same household as such employees, are ineligible to enter the TCO.\r\n\r\n</br></br>\r\n<h4><strong>topcoder\"s Discretion regarding the TCO</strong></h4>\r\n\r\nAll decisions relating to the viability of Submissions, the ranking of Submissions and all other matters pertaining to the TCO are within the sole discretion of topcoder or its designee and shall be final and binding in all respects. By participating in the TCO and/or a Competition that is part of the TCO, a Contestant who wins a prize releases and agrees to hold harmless topcoder its affiliates, subsidiaries, sponsors, advertising and promotion agencies, and prize suppliers, and all of their respective directors, officers, employees, representatives and agents, from and against any and all liability for any loss, property damage or damage to person, including without limitation, death and injury, due in whole or in part, directly or indirectly, from or arising out of participation in the TCO, or participation in any TCO-related activity, or the receipt, use or misuse of a prize. topcoder reserves the right to limit the participation of any person in the TCO, amend or interpret these rules or official communications governing the TCO or cancel the TCO or any TCO-related Competition for any reason with prior notice. Notices for any such amendment, interpretation or cancellation will be deemed to have been given by posting on the Website and by virtue of a Contestant's continued participation in the TCO. A Contestant may terminate participation in the TCO upon written notice to topcoder.\r\n\r\n</br></br>\r\n<h4><strong>TCO Logistics</strong></h4>\r\n\r\nAll Contestants who have advanced or won a trip to the onsite portion of the TCO (\"Onsite Contestants\") must arrive at the event no later than the date and time specified in the TCO Rules. All Onsite Contestants must confirm their attendance at the onsite event no later than the date specified in the TCO Rules. In order to confirm attendance, Onsite Contestants must have acquired any necessary travel visas and confirm their ability to travel to the United States no later than the date specified in the TCO Rules. If an Onsite Contestant is required to travel from outside the United States, the Onsite Contestant must show proof of a visa and/or passport by the date specified in the TCO Rules. Onsite Contestants may email a copy of their documents as instructed in the TCO Rules. Onsite Contestants who fail to meet this requirement may be replaced as an Onsite Contestant. Contestants who are otherwise eligible to compete in any or all of the Competitions will be permitted to participate in the online portions of any/all of them. However, in the event a Contestant advances to the onsite finals in more than one Competition and any of the times for the onsite rounds of the Competitions overlap, the Onsite Contestant may participate in either, but not both, Competitions. The Onsite Contestant must notify topcoder of the Competition in which she/he will participate as an Onsite Contestant no later than the date specified in the TCO Rules.\r\n</br></br>\r\n\r\ntopcoderwill issue visa invitation letters (upon request) to international Contestants who require one to obtain a travel visa to enter the United States. All registered TCO Contestants may request a visa invitation letter in respect of the year of the upcoming TCO. Contestants must fill out the visa letter request form in its entirety before a visa letter will be mailed. Contestants have until the date and time specified in the TCO Rules to request a letter. Visas can take a significant amount of time to obtain in certain countries, so it is in a Contestant's best interests to request one well before the deadline. The cost of obtaining a visa is the sole responsibility of the Contestant. See more information about travel visas. The TCO involves a large number of visa applications by topcoder members. By applying for a visa to attend the TCO, Contestant understands that topcoder will cooperate with all requests by consulates, the Department of Homeland Security, and law enforcement in connection with such Contestant's visa, including information about the visa applicants' attendance at the TCO. Any abuse of the visa application process or any visa obtained for the TCO is considered a serious violation of US law and these Terms of Use, and, among other things, the Contestant will be subject to discipline by topcoder.\r\n</br></br>\r\n\r\ntopcoder will provide air travel arrangements for each Onsite Contestant. The flight will be reserved and paid for by topcoder. Onsite Contestants will arrive on the date specified in the TCO Rules and depart the day after the final day of the Onsite portion of the TCO. At topcoder's sole discretion, topcoder will pay for each Onsite Contestant's airfare up to $1,500, but reserves the right to make exceptions to the maximum amount based on individual circumstances. If an Onsite Contestant wishes to take a flight other than the one provided by topcoder and/or wishes to stay at a hotel other than the one provided by topcoder, the Onsite Contestant shall be responsible for the entire cost of such deviation from the accommodations and travel arrangements provided by topcoder. In addition, the Onsite Contestant agrees to reimburse topcoder for any costs, penalties, fines or fees incurred by topcoder as a result of such deviation. Ground transportation to and from the airport will be provided for each Onsite Contestant by topcoder, as well as private hotel accommodations and certain meals. All other expenses are the responsibility of the Onsite Contestant. topcoder will not provide travel, lodging accommodations, or visa assistance for any guests of an Onsite Contestant. If an Onsite Contestant is eliminated or chooses not to utilize the travel accommodations provide by topcoder for any reason after he/she is confirmed as a finalist and travel accommodations have already been made for the Onsite Contestant by topcoder for the onsite finals, that Onsite Contestant may be held responsible for reimbursing topcoder for the cost of such accommodations. topcoder reserves the right to withhold any future cash prizes won by the Onsite Contestant until the cost of such accommodations has been fully reimbursed. Onsite Contestants must complete the following items and submit them to topcoder by the date specified in the TCO Rules (failure to submit these items will disqualify an Onsite Contestant from advancing to the onsite event):\r\n</br></br>\r\n\r\nConfirmation of attendance/proof of travel documents \" Please confirm your attendance onsite as directed in the TCO Rules. If you require a passport and/or visa to visit the United States, you must show proof of your documents.\r\n</br></br>\r\n\r\nPlease submit a member photo, if you have not already done so.\r\n</br></br>\r\n\r\nPlease also submit a fun photo to be shared during your onsite introduction.\r\n</br></br>\r\n\r\nPlease ensure the information listed in your topcoder profile is current. We may need to mail your plane tickets or contact you via telephone.\r\n</br></br>\r\n\r\nComplete the Onsite Contestant Questionnaire - your responses may be published in the program for the TCO.\r\n</br></br>\r\n\r\nTravel form - provide topcoder with the appropriate travel information for your trip to the onsite event.\r\n</br></br>\r\n\r\nApplicable tax forms (unless one is already on file with topcoder).\r\n\r\n\r\n</div>\r\n</body>\r\n</html>\r\n\r\n\r\n","agreed":false,"serverInformation":{"serverName":"Topcoder API","apiVersion":"0.0.1","requestDuration":52,"currentTime":1504892902498},"requesterInformation":{"id":"d8c441f8332161f71533f368c09aeead856e4366-K1RdFai7LCAgXVu5","remoteIP":"12.34.56.78","receivedParams":{"apiVersion":"v2","termsOfUseId":"21193","action":"getTermsOfUse"}}}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module dependencies.
 */

var Base64Url         = __webpack_require__(194);
var assert_required   = __webpack_require__(196);
var is_array          = __webpack_require__(197);
var index_of          = __webpack_require__(198);

var qs                = __webpack_require__(39);
var xtend             = __webpack_require__(199);
var trim              = __webpack_require__(205);
var reqwest           = __webpack_require__(206);
var WinChan           = __webpack_require__(207);

var jsonp             = __webpack_require__(208);
var jsonpOpts         = { param: 'cbx', timeout: 8000, prefix: '__auth0jp' };

var same_origin       = __webpack_require__(212);
var json_parse        = __webpack_require__(108);
var LoginError        = __webpack_require__(214);
var use_jsonp         = __webpack_require__(215);

/**
 * Check if running in IE.
 *
 * @returns {Number} -1 if not IE, IE version otherwise.
 */
function isInternetExplorer() {
  var rv = -1; // Return value assumes failure.
  var ua = navigator.userAgent;
  var re;
  if (navigator.appName === 'Microsoft Internet Explorer') {
    re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
    if (re.exec(ua) != null) {
      rv = parseFloat(RegExp.$1);
    }
  }
  // IE > 11
  else if (ua.indexOf('Trident') > -1) {
    re = new RegExp('rv:([0-9]{2,2}[\.0-9]{0,})');
    if (re.exec(ua) !== null) {
      rv = parseFloat(RegExp.$1);
    }
  }

  return rv;
}

/**
 * Stringify popup options object into
 * `window.open` string options format
 *
 * @param {Object} popupOptions
 * @private
 */

function stringifyPopupSettings(popupOptions) {
  var settings = '';

  for (var key in popupOptions) {
    settings += key + '=' + popupOptions[key] + ',';
  }

  return settings.slice(0, -1);
}


/**
 * Check that a key has been set to something different than null
 * or undefined.
 *
 * @param {Object} obj
 * @param {String} key
 */
function checkIfSet(obj, key) {
  /*
   * false      != null -> true
   * true       != null -> true
   * undefined  != null -> false
   * null       != null -> false
   */
  return !!(obj && obj[key] != null);
}

function handleRequestError(err, callback) {
  var status = err.status;
  var responseText = 'string' === typeof err.responseText ? err.responseText : err;

  var isAffectedIEVersion = isInternetExplorer() === 10 || isInternetExplorer() === 11;
  var zeroStatus = (!status || status === 0);

  var onLine = !!window.navigator.onLine;

  // Request failed because we are offline.
  if (zeroStatus && !onLine ) {
    status = 0;
    responseText = {
      code: 'offline'
    };
  // http://stackoverflow.com/questions/23229723/ie-10-11-cors-status-0
  // XXX IE10 when a request fails in CORS returns status code 0
  // See: http://caniuse.com/#search=navigator.onLine
  } else if (zeroStatus && isAffectedIEVersion) {
    status = 401;
    responseText = {
      code: 'invalid_user_password'
    };
  // If not IE10/11 and not offline it means that Auth0 host is unreachable:
  // Connection Timeout or Connection Refused.
  } else if (zeroStatus) {
    status = 0;
    responseText = {
      code: 'connection_refused_timeout'
    };
  }

  var error = new LoginError(status, responseText);
  callback(error);
}

/**
 * join url from protocol
 */

function joinUrl(protocol, domain, endpoint) {
  return protocol + '//' + domain + endpoint;
}

/**
 * Create an `Auth0` instance with `options`
 *
 * @class Auth0
 * @constructor
 */
function Auth0 (options) {
  // XXX Deprecated: We prefer new Auth0(...)
  if (!(this instanceof Auth0)) {
    return new Auth0(options);
  }

  assert_required(options, 'clientID');
  assert_required(options, 'domain');

  this._useJSONP = null != options.forceJSONP ?
                    !!options.forceJSONP :
                    use_jsonp() && !same_origin('https:', options.domain);

  this._clientID = options.clientID;
  this._callbackURL = options.callbackURL || document.location.href;
  this._shouldRedirect = !!options.callbackURL;
  this._domain = options.domain;
  this._callbackOnLocationHash = false || options.callbackOnLocationHash;
  this._cordovaSocialPlugins = {
    facebook: this._phonegapFacebookLogin
  };
  this._useCordovaSocialPlugins = false || options.useCordovaSocialPlugins;
  this._sendClientInfo = null != options.sendSDKClientInfo ? options.sendSDKClientInfo : true;
}

/**
 * Export version with `Auth0` constructor
 *
 * @property {String} version
 */

Auth0.version = __webpack_require__(216).str;

/**
 * Export client info object
 *
 *
 * @property {Hash}
 */

Auth0.clientInfo = { name: 'auth0.js', version: Auth0.version };


/**
 * Wraps calls to window.open so it can be overriden in Electron.
 *
 * In Electron, window.open returns an object which provides limited control
 * over the opened window (see
 * http://electron.atom.io/docs/v0.36.0/api/window-open/).
 */
Auth0.prototype.openWindow = function(url, name, options) {
  return window.open(url, name, stringifyPopupSettings(options));
}

/**
 * Redirect current location to `url`
 *
 * @param {String} url
 * @private
 */

Auth0.prototype._redirect = function (url) {
  global.window.location = url;
};

Auth0.prototype._getCallbackOnLocationHash = function(options) {
  return (options && typeof options.callbackOnLocationHash !== 'undefined') ?
    options.callbackOnLocationHash : this._callbackOnLocationHash;
};

Auth0.prototype._getCallbackURL = function(options) {
  return (options && typeof options.callbackURL !== 'undefined') ?
    options.callbackURL : this._callbackURL;
};

Auth0.prototype._getClientInfoString = function () {
  var clientInfo = JSON.stringify(Auth0.clientInfo);
  return Base64Url.encode(clientInfo);
};

Auth0.prototype._getClientInfoHeader = function () {
  return {
    'Auth0-Client': this._getClientInfoString()
  };
};

/**
 * Renders and submits a WSFed form
 *
 * @param {Object} options
 * @param {Function} formHtml
 * @private
 */

Auth0.prototype._renderAndSubmitWSFedForm = function (options, formHtml) {
  var div = document.createElement('div');
  div.innerHTML = formHtml;
  var form = document.body.appendChild(div).children[0];

  if (options.popup && !this._getCallbackOnLocationHash(options)) {
    form.target = 'auth0_signup_popup';
  }

  form.submit();
};

/**
 * Resolve response type as `token` or `code`
 *
 * @return {Object} `scope` and `response_type` properties
 * @private
 */

Auth0.prototype._getMode = function (options) {
  return {
    scope: 'openid',
    response_type: this._getCallbackOnLocationHash(options) ? 'token' : 'code'
  };
};

Auth0.prototype._configureOfflineMode = function(options) {
  if (options.scope && options.scope.indexOf('offline_access') >= 0) {
    options.device = options.device || 'Browser';
  }
};

/**
 * Get user information from API
 *
 * @param {Object} profile
 * @param {String} id_token
 * @param {Function} callback
 * @private
 */

Auth0.prototype._getUserInfo = function (profile, id_token, callback) {

  if (!(profile && !profile.user_id)) {
    return callback(null, profile);
  }

  // the scope was just openid
  var _this = this;
  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/tokeninfo';
  var url = joinUrl(protocol, domain, endpoint);

  var fail = function (status, description) {
    var error = new Error(status + ': ' + (description || ''));

    // These two properties are added for compatibility with old versions (no Error instance was returned)
    error.error = status;
    error.error_description = description;

    callback(error);
  };

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify({id_token: id_token}), jsonpOpts, function (err, resp) {
      if (err) {
        return fail(0, err.toString());
      }

      return resp.status === 200 ?
        callback(null, resp.user) :
        fail(resp.status, resp.err || resp.error);
    });
  }

  return reqwest({
    url:          same_origin(protocol, domain) ? endpoint : url,
    method:       'post',
    type:         'json',
    crossOrigin:  !same_origin(protocol, domain),
    data:         {id_token: id_token}
  }).fail(function (err) {
    fail(err.status, err.responseText);
  }).then(function (userinfo) {
    callback(null, userinfo);
  });

};

/**
 * Get profile data by `id_token`
 *
 * @param {String} id_token
 * @param {Function} callback
 * @method getProfile
 */

Auth0.prototype.getProfile = function (id_token, callback) {
  if ('function' !== typeof callback) {
    throw new Error('A callback function is required');
  }
  if (!id_token || typeof id_token !== 'string') {
    return callback(new Error('Invalid token'));
  }

  this._getUserInfo(this.decodeJwt(id_token), id_token, callback);
};

/**
 * Validate a user
 *
 * @param {Object} options
 * @param {Function} callback
 * @method validateUser
 */

Auth0.prototype.validateUser = function (options, callback) {
  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/public/api/users/validate_userpassword';
  var url = joinUrl(protocol, domain, endpoint);

  var query = xtend(
    options,
    {
      client_id:    this._clientID,
      username:     trim(options.username || options.email || '')
    });

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(err);
      }
      if('error' in resp && resp.status !== 404) {
        return callback(new Error(resp.error));
      }
      callback(null, resp.status === 200);
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'text',
    data:    query,
    crossOrigin: !same_origin(protocol, domain),
    error: function (err) {
      if (err.status !== 404) { return callback(new Error(err.responseText)); }
      callback(null, false);
    },
    success: function (resp) {
      callback(null, resp.status === 200);
    }
  });
};

/**
 * Decode Json Web Token
 *
 * @param {String} jwt
 * @method decodeJwt
 */

Auth0.prototype.decodeJwt = function (jwt) {
  var encoded = jwt && jwt.split('.')[1];
  return json_parse(Base64Url.decode(encoded));
};

/**
 * Given the hash (or a query) of an URL returns a dictionary with only relevant
 * authentication information. If succeeds it will return the following fields:
 * `profile`, `id_token`, `access_token` and `state`. In case of error, it will
 * return `error` and `error_description`.
 *
 * @method parseHash
 * @param {String} [hash=window.location.hash] URL to be parsed
 * @example
 *      var auth0 = new Auth0({...});
 *
 *      // Returns {profile: {** decoded id token **}, state: "good"}
 *      auth0.parseHash('#id_token=.....&state=good&foo=bar');
 *
 *      // Returns {error: "invalid_credentials", error_description: undefined}
 *      auth0.parseHash('#error=invalid_credentials');
 *
 *      // Returns {error: "invalid_credentials", error_description: undefined}
 *      auth0.parseHash('?error=invalid_credentials');
 *
 */

Auth0.prototype.parseHash = function (hash) {
  hash = hash || window.location.hash;
  var parsed_qs;
  if (hash.match(/error/)) {
    hash = hash.substr(1).replace(/^\//, '');
    parsed_qs = qs.parse(hash);
    var err = {
      error: parsed_qs.error,
      error_description: parsed_qs.error_description
    };
    return err;
  }
  if(!hash.match(/access_token/)) {
    // Invalid hash URL
    return null;
  }
  hash = hash.substr(1).replace(/^\//, '');
  parsed_qs = qs.parse(hash);
  var id_token = parsed_qs.id_token;
  var refresh_token = parsed_qs.refresh_token;
  var prof = this.decodeJwt(id_token);
  var invalidJwt = function (error) {
    var err = {
      error: 'invalid_token',
      error_description: error
    };
    return err;
  };

  // aud should be the clientID
  var audiences = is_array(prof.aud) ? prof.aud : [ prof.aud ];
  if (index_of(audiences, this._clientID) === -1) {
    return invalidJwt(
      'The clientID configured (' + this._clientID + ') does not match with the clientID set in the token (' + audiences.join(', ') + ').');
  }

  // iss should be the Auth0 domain (i.e.: https://contoso.auth0.com/)
  if (prof.iss && prof.iss !== 'https://' + this._domain + '/') {
    return invalidJwt(
      'The domain configured (https://' + this._domain + '/) does not match with the domain set in the token (' + prof.iss + ').');
  }

  return {
    profile: prof,
    id_token: id_token,
    access_token: parsed_qs.access_token,
    state: parsed_qs.state,
    refresh_token: refresh_token
  };
};

/**
 * Signup
 *
 * @param {Object} options Signup Options
 * @param {String} email New user email
 * @param {String} password New user password
 *
 * @param {Function} callback
 * @method signup
 */

Auth0.prototype.signup = function (options, callback) {
  var _this = this;

  var opts = {
    client_id: this._clientID,
    redirect_uri: this._getCallbackURL(options),
    username: trim(options.username || ''),
    email: trim(options.email || options.username || ''),
    tenant: this._domain.split('.')[0]
  };

  var query = xtend(this._getMode(options), options, opts);

  this._configureOfflineMode(query);

  // TODO Change this to a property named 'disableSSO' for consistency.
  // By default, options.sso is true
  if (!checkIfSet(options, 'sso')) {
    options.sso = true;
  }

  if (!checkIfSet(options, 'auto_login')) {
    options.auto_login = true;
  }

  var popup;

  var will_popup = options.auto_login && options.popup
    && (!this._getCallbackOnLocationHash(options) || options.sso);

  if (will_popup) {
    popup = this._buildPopupWindow(options);
  }

  function success () {
    if (options.auto_login) {
      return _this.login(options, callback);
    }

    if ('function' === typeof callback) {
      return callback();
    }
  }

  function fail (status, resp) {
    var error = new LoginError(status, resp);

    // when failed we want the popup closed if opened
    if (popup && 'function' === typeof popup.kill) {
      popup.kill();
    }

    if ('function' === typeof callback) {
      return callback(error);
    }

    throw error;
  }

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/dbconnections/signup';
  var url = joinUrl(protocol, domain, endpoint);

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return fail(0, err);
      }

      return resp.status == 200 ? success() :
              fail(resp.status, resp.err || resp.error);
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'html',
    data:    query,
    success: success,
    crossOrigin: !same_origin(protocol, domain),
    error: function (err) {
      fail(err.status, err.responseText);
    }
  });
};

/**
 * Change password
 *
 * @param {Object} options
 * @param {Function} callback
 * @method changePassword
 */

Auth0.prototype.changePassword = function (options, callback) {
  var query = {
    tenant:         this._domain.split('.')[0],
    client_id:      this._clientID,
    connection:     options.connection,
    username:       trim(options.username || ''),
    email:          trim(options.email || options.username || ''),
    password:       options.password
  };


  function fail (status, resp) {
    var error = new LoginError(status, resp);
    if (callback) {
      return callback(error);
    }
  }

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/dbconnections/change_password';
  var url = joinUrl(protocol, domain, endpoint);

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return fail(0, err);
      }
      return resp.status == 200 ?
              callback(null, resp.message) :
              fail(resp.status, resp.err || resp.error);
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'html',
    data:    query,
    crossOrigin: !same_origin(protocol, domain),
    error: function (err) {
      fail(err.status, err.responseText);
    },
    success: function (r) {
      callback(null, r);
    }
  });
};

/**
 * Builds query string to be passed to /authorize based on dict key and values.
 *
 * @param {Array} args
 * @param {Array} blacklist
 * @private
 */

Auth0.prototype._buildAuthorizeQueryString = function (args, blacklist) {
  var query = this._buildAuthorizationParameters(args, blacklist);
  return qs.stringify(query);
};

/**
 * Builds parameter dictionary to be passed to /authorize based on dict key and values.
 *
 * @param {Array} args
 * @param {Array} blacklist
 * @private
 */

Auth0.prototype._buildAuthorizationParameters = function(args, blacklist) {
  var query = xtend.apply(null, args);

  // Adds offline mode to the query
  this._configureOfflineMode(query);

  // Adds client SDK information (when enabled)
  if ( this._sendClientInfo ) query['auth0Client'] = this._getClientInfoString();

  // Elements to filter from query string
  blacklist = blacklist || ['popup', 'popupOptions'];

  var i, key;

  for (i = 0; i < blacklist.length; i++) {
    key = blacklist[i];
    delete query[key];
  }

  if (query.connection_scope && is_array(query.connection_scope)){
    query.connection_scope = query.connection_scope.join(',');
  }

  return query;
};

/**
 * Login user
 *
 * @param {Object} options
 * @param {Function} callback
 * @method login
 */

Auth0.prototype.login = Auth0.prototype.signin = function (options, callback) {
  // TODO Change this to a property named 'disableSSO' for consistency.
  // By default, options.sso is true
  if (!checkIfSet(options, 'sso')) {
    options.sso = true;
  }

  if (typeof options.passcode !== 'undefined') {
    return this.loginWithPasscode(options, callback);
  }

  if (typeof options.username !== 'undefined' ||
      typeof options.email !== 'undefined') {
    return this.loginWithUsernamePassword(options, callback);
  }

  if (!!window.cordova || !!window.electron) {
    return this.loginPhonegap(options, callback);
  }

  if (!!options.popup && this._getCallbackOnLocationHash(options)) {
    return this.loginWithPopup(options, callback);
  }

  this._authorize(options);
};

Auth0.prototype._authorize = function(options) {
  var qs = [
    this._getMode(options),
    options,
    {
      client_id: this._clientID,
      redirect_uri: this._getCallbackURL(options)
    }
  ];

  var query = this._buildAuthorizeQueryString(qs);

  var url = joinUrl('https:', this._domain, '/authorize?' + query);

  if (options.popup) {
    this._buildPopupWindow(options, url);
  } else {
    this._redirect(url);
  }
};

/**
 * Compute `options.width` and `options.height` for the popup to
 * open and return and extended object with optimal `top` and `left`
 * position arguments for the popup windows
 *
 * @param {Object} options
 * @private
 */

Auth0.prototype._computePopupPosition = function (options) {
  options = options || {};
  var width = options.width || 500;
  var height = options.height || 600;

  var screenX = typeof window.screenX !== 'undefined' ? window.screenX : window.screenLeft;
  var screenY = typeof window.screenY !== 'undefined' ? window.screenY : window.screenTop;
  var outerWidth = typeof window.outerWidth !== 'undefined' ? window.outerWidth : document.body.clientWidth;
  var outerHeight = typeof window.outerHeight !== 'undefined' ? window.outerHeight : (document.body.clientHeight - 22);
  // XXX: what is the 22?

  // Use `outerWidth - width` and `outerHeight - height` for help in
  // positioning the popup centered relative to the current window
  var left = screenX + (outerWidth - width) / 2;
  var top = screenY + (outerHeight - height) / 2;

  return { width: width, height: height, left: left, top: top };
};

/**
 * loginPhonegap method is triggered when !!window.cordova is true.
 *
 * @method loginPhonegap
 * @private
 * @param {Object}    options   Login options.
 * @param {Function}  callback  To be called after login happened. Callback arguments
 *                              should be:
 *                              function (err, profile, idToken, accessToken, state)
 *
 * @example
 *      var auth0 = new Auth0({ clientId: '...', domain: '...'});
 *
 *      auth0.signin({}, function (err, profile, idToken, accessToken, state) {
 *        if (err) {
 *         alert(err);
 *         return;
 *        }
 *
 *        alert('Welcome ' + profile.name);
 *      });
 */

Auth0.prototype.loginPhonegap = function (options, callback) {
  if (this._shouldAuthenticateWithCordovaPlugin(options.connection)) {
    this._socialPhonegapLogin(options, callback);
    return;
  }

  var mobileCallbackURL = joinUrl('https:', this._domain, '/mobile');
  var _this = this;
  var qs = [
    this._getMode(options),
    options,
    {
      client_id: this._clientID,
      redirect_uri: mobileCallbackURL
    }
  ];

  if ( this._sendClientInfo ) {
    qs.push({ auth0Client: this._getClientInfoString() });
  }

  var query = this._buildAuthorizeQueryString(qs);

  var popupUrl = joinUrl('https:', this._domain, '/authorize?' + query);

  var popupOptions = xtend({location: 'yes'} ,
    options.popupOptions);

  // This wasn't send before so we don't send it now either
  delete popupOptions.width;
  delete popupOptions.height;

  var ref = this.openWindow(popupUrl, '_blank', popupOptions);
  var answered = false;

  function errorHandler(event) {
    if (answered) { return; }
    callback(new Error(event.message), null, null, null, null);
    answered = true;
    return ref.close();
  }

  function startHandler(event) {
    if (answered) { return; }

    if ( event.url && !(event.url.indexOf(mobileCallbackURL + '#') === 0 ||
                       event.url.indexOf(mobileCallbackURL + '?') === 0)) { return; }

    var result = _this.parseHash(event.url.slice(mobileCallbackURL.length));

    if (!result) {
      callback(new Error('Error parsing hash'), null, null, null, null);
      answered = true;
      return ref.close();
    }

    if (result.id_token) {
      _this.getProfile(result.id_token, function (err, profile) {
        callback(err, profile, result.id_token, result.access_token, result.state, result.refresh_token);
      });
      answered = true;
      return ref.close();
    }

    // Case where we've found an error
    callback(new Error(result.err || result.error || 'Something went wrong'), null, null, null, null);
    answered = true;
    return ref.close();
  }

  function exitHandler() {
    if (answered) { return; }

    callback(new Error('Browser window closed'), null, null, null, null);

    ref.removeEventListener('loaderror', errorHandler);
    ref.removeEventListener('loadstart', startHandler);
    ref.removeEventListener('exit', exitHandler);
  }

  ref.addEventListener('loaderror', errorHandler);
  ref.addEventListener('loadstart', startHandler);
  ref.addEventListener('exit', exitHandler);

};

/**
 * loginWithPopup method is triggered when login method receives a {popup: true} in
 * the login options.
 *
 * @method loginWithPopup
 * @param {Object}   options    Login options.
 * @param {function} callback   To be called after login happened (whether
 *                              success or failure). This parameter is mandatory when
 *                              option callbackOnLocationHash is truthy but should not
 *                              be used when falsy.
 * @example
 *       var auth0 = new Auth0({ clientId: '...', domain: '...', callbackOnLocationHash: true });
 *
 *       // Error! No callback
 *       auth0.login({popup: true});
 *
 *       // Ok!
 *       auth0.login({popup: true}, function () { });
 *
 * @example
 *       var auth0 = new Auth0({ clientId: '...', domain: '...'});
 *
 *       // Ok!
 *       auth0.login({popup: true});
 *
 *       // Error! No callback will be executed on response_type=code
 *       auth0.login({popup: true}, function () { });
 * @private
 */

Auth0.prototype.loginWithPopup = function(options, callback) {
  var _this = this;

  if (!callback) {
    throw new Error('popup mode should receive a mandatory callback');
  }

  var qs = [this._getMode(options), options, { client_id: this._clientID, owp: true }];

  if (this._sendClientInfo) {
    qs.push({ auth0Client: this._getClientInfoString() });
  }

  var query = this._buildAuthorizeQueryString(qs);
  var popupUrl = joinUrl('https:', this._domain, '/authorize?' + query);

  var popupPosition = this._computePopupPosition(options.popupOptions);
  var popupOptions = xtend(popupPosition, options.popupOptions);

  var popup = WinChan.open({
    url: popupUrl,
    relay_url: 'https://' + this._domain + '/relay.html',
    window_features: stringifyPopupSettings(popupOptions)
  }, function (err, result) {
    // Eliminate `_current_popup` reference manually because
    // Winchan removes `.kill()` method from window and also
    // doesn't call `.kill()` by itself
    _this._current_popup = null;

    // Winchan always returns string errors, we wrap them inside Error objects
    if (err) {
      return callback(new LoginError(err), null, null, null, null, null);
    }

    // Handle edge case with generic error
    if (!result) {
      return callback(new LoginError('Something went wrong'), null, null, null, null, null);
    }

    // Handle profile retrieval from id_token and respond
    if (result.id_token) {
      return _this.getProfile(result.id_token, function (err, profile) {
        callback(err, profile, result.id_token, result.access_token, result.state, result.refresh_token);
      });
    }

    // Case where the error is returned at an `err` property from the result
    if (result.err) {
      return callback(new LoginError(result.err.status, result.err.details || result.err), null, null, null, null, null);
    }

    // Case for sso_dbconnection_popup returning error at result.error instead of result.err
    if (result.error) {
      return callback(new LoginError(result.status, result.details || result), null, null, null, null, null);
    }

    // Case we couldn't match any error, we return a generic one
    return callback(new LoginError('Something went wrong'), null, null, null, null, null);
  });

  popup.focus();
};

/**
 * _shouldAuthenticateWithCordovaPlugin method checks whether Auth0 is properly configured to
 * handle authentication of a social connnection using a phonegap plugin.
 *
 * @param {String}   connection    Name of the connection.
 * @private
 */

Auth0.prototype._shouldAuthenticateWithCordovaPlugin = function(connection) {
  var socialPlugin = this._cordovaSocialPlugins[connection];
  return this._useCordovaSocialPlugins && !!socialPlugin;
};

/**
 * _socialPhonegapLogin performs social authentication using a phonegap plugin
 *
 * @param {String}   connection   Name of the connection.
 * @param {function} callback     To be called after login happened (whether
 *                                success or failure).
 * @private
 */

Auth0.prototype._socialPhonegapLogin = function(options, callback) {
  var socialAuthentication = this._cordovaSocialPlugins[options.connection];
  var _this = this;
  socialAuthentication(options.connection_scope, function(error, accessToken, extras) {
    if (error) {
      callback(error, null, null, null, null);
      return;
    }
    var loginOptions = xtend({ access_token: accessToken }, options, extras);
    _this.loginWithSocialAccessToken(loginOptions, callback);
  });
};

/**
 * _phonegapFacebookLogin performs social authentication with Facebook using phonegap-facebook-plugin
 *
 * @param {Object}   scopes     FB scopes used to login. It can be an Array of String or a single String.
 *                              By default is ["public_profile"]
 * @param {function} callback   To be called after login happened (whether success or failure). It will
 *                              yield the accessToken and any extra information neeeded by Auth0 API
 *                              or an Error if the authentication fails. Callback should be:
 *                              function (err, accessToken, extras) { }
 * @private
 */

Auth0.prototype._phonegapFacebookLogin = function(scopes, callback) {
  if (!window.facebookConnectPlugin || !window.facebookConnectPlugin.login) {
    callback(new Error('missing plugin phonegap-facebook-plugin'), null, null);
    return;
  }

  var fbScopes;
  if (scopes && is_array(scopes)){
    fbScopes = scopes;
  } else if (scopes) {
    fbScopes = [scopes];
  } else {
    fbScopes = ['public_profile'];
  }
  window.facebookConnectPlugin.login(fbScopes, function (state) {
    callback(null, state.authResponse.accessToken, {});
  }, function(error) {
    callback(new Error(error), null, null);
  });
};

/**
 * This method handles the scenario where a db connection is used with
 * popup: true and sso: true.
 *
 * @private
 */
Auth0.prototype.loginWithUsernamePasswordAndSSO = function (options, callback) {
  var _this = this;
  var popupPosition = this._computePopupPosition(options.popupOptions);
  var popupOptions = xtend(popupPosition, options.popupOptions);

  var payload = {
    // TODO What happens with i18n?
    username:   options.username,
    password:   options.password,
    connection: options.connection,
    state:      options.state,
    scope:      options.scope
  };

  if (options._csrf) {
    payload._csrf = options._csrf;
  }

  var popup = WinChan.open({
    url: 'https://' + this._domain + '/sso_dbconnection_popup/' + this._clientID,
    relay_url: 'https://' + this._domain + '/relay.html',
    window_features: stringifyPopupSettings(popupOptions),
    popup: this._current_popup,
    params: {
      domain:   this._domain,
      clientID: this._clientID,
      options:  payload
    }
  }, function (err, result) {
    // Eliminate `_current_popup` reference manually because
    // Winchan removes `.kill()` method from window and also
    // doesn't call `.kill()` by itself
    _this._current_popup = null;

    // Winchan always returns string errors, we wrap them inside Error objects
    if (err) {
      return callback(new LoginError(err), null, null, null, null, null);
    }

    // Handle edge case with generic error
    if (!result) {
      return callback(new LoginError('Something went wrong'), null, null, null, null, null);
    }

    // Handle profile retrieval from id_token and respond
    if (result.id_token) {
      return _this.getProfile(result.id_token, function (err, profile) {
        callback(err, profile, result.id_token, result.access_token, result.state, result.refresh_token);
      });
    }

    // Case where the error is returned at an `err` property from the result
    if (result.err) {
      return callback(new LoginError(result.err.status, result.err.details || result.err), null, null, null, null, null);
    }

    // Case for sso_dbconnection_popup returning error at result.error instead of result.err
    if (result.error) {
      return callback(new LoginError(result.status, result.details || result), null, null, null, null, null);
    }

    // Case we couldn't match any error, we return a generic one
    return callback(new LoginError('Something went wrong'), null, null, null, null, null);
  });

  popup.focus();
};

/**
 * Login with Resource Owner (RO)
 *
 * @param {Object} options
 * @param {Function} callback
 * @method loginWithResourceOwner
 */

Auth0.prototype.loginWithResourceOwner = function (options, callback) {
  var _this = this;
  var query = xtend(
    this._getMode(options),
    options,
    {
      client_id:    this._clientID,
      username:     trim(options.username || options.email || ''),
      grant_type:   'password'
    });

  this._configureOfflineMode(query);

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/oauth/ro';
  var url = joinUrl(protocol, domain, endpoint);

  if ( this._sendClientInfo && this._useJSONP ) {
    query['auth0Client'] = this._getClientInfoString();
  }

  function enrichGetProfile(resp, callback) {
    _this.getProfile(resp.id_token, function (err, profile) {
      callback(err, profile, resp.id_token, resp.access_token, resp.state, resp.refresh_token);
    });
  }

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(err);
      }
      if('error' in resp) {
        var error = new LoginError(resp.status, resp.error);
        return callback(error);
      }
      enrichGetProfile(resp, callback);
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'json',
    data:    query,
    headers: this._getClientInfoHeader(),
    crossOrigin: !same_origin(protocol, domain),
    success: function (resp) {
      enrichGetProfile(resp, callback);
    },
    error: function (err) {
      handleRequestError(err, callback);
    }
  });
};

/**
 * Login with Social Access Token
 *
 * @param {Object} options
 * @param {Function} callback
 * @method loginWithSocialAccessToken
 */

Auth0.prototype.loginWithSocialAccessToken = function (options, callback) {
  var _this = this;
  var query = this._buildAuthorizationParameters([
      { scope: 'openid' },
      options,
      { client_id: this._clientID }
    ]);

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/oauth/access_token';
  var url = joinUrl(protocol, domain, endpoint);

  function enrichGetProfile(resp, callback) {
    _this.getProfile(resp.id_token, function (err, profile) {
      callback(err, profile, resp.id_token, resp.access_token, resp.state, resp.refresh_token);
    });
  }

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(err);
      }
      if('error' in resp) {
        var error = new LoginError(resp.status, resp.error);
        return callback(error);
      }
      enrichGetProfile(resp, callback);
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'json',
    data:    query,
    headers: this._getClientInfoHeader(),
    crossOrigin: !same_origin(protocol, domain),
    success: function (resp) {
      enrichGetProfile(resp, callback);
    },
    error: function (err) {
      handleRequestError(err, callback);
    }
  });
};

/**
 * Open a popup, store the winref in the instance and return it.
 *
 * We usually need to call this method before any ajax transaction in order
 * to prevent the browser to block the popup.
 *
 * @param  {[type]}   options  [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 * @private
 */

Auth0.prototype._buildPopupWindow = function (options, url) {
  if (this._current_popup && !this._current_popup.closed) {
    return this._current_popup;
  }

  url = url || 'about:blank'

  var _this = this;
  var defaults = { width: 500, height: 600 };
  var opts = xtend(defaults, options.popupOptions || {});
  var popupOptions = stringifyPopupSettings(opts);

  this._current_popup = window.open(url, 'auth0_signup_popup', popupOptions);

  if (!this._current_popup) {
    throw new Error('Popup window cannot not been created. Disable popup blocker or make sure to call Auth0 login or singup on an UI event.');
  }

  this._current_popup.kill = function () {
    this.close();
    _this._current_popup = null;
  };

  return this._current_popup;
};

/**
 * Login with Username and Password
 *
 * @param {Object} options
 * @param {Function} callback
 * @method loginWithUsernamePassword
 */

Auth0.prototype.loginWithUsernamePassword = function (options, callback) {
  // XXX: Warning: This check is whether callback arguments are
  // fn(err) case callback.length === 1 (a redirect should be performed) vs.
  // fn(err, profile, id_token, access_token, state) callback.length > 1 (no
  // redirect should be performed)
  //
  // Note: Phonegap/Cordova:
  // As the popup is launched using the InAppBrowser plugin the SSO cookie will
  // be set on the InAppBrowser browser. That's why the browser where the app runs
  // won't get the sso cookie. Therefore, we don't allow username password using
  // popup with sso: true in Cordova/Phonegap and we default to resource owner auth.
  if (callback && callback.length > 1 && (!options.sso || window.cordova)) {
    return this.loginWithResourceOwner(options, callback);
  }

  var _this = this;
  var popup;

  // TODO We should deprecate this, really hacky and confuses people.
  if (options.popup  && !this._getCallbackOnLocationHash(options)) {
    popup = this._buildPopupWindow(options);
  }

  // When a callback with more than one argument is specified and sso: true then
  // we open a popup and do authentication there.
  if (callback && callback.length > 1 && options.sso ) {
    return this.loginWithUsernamePasswordAndSSO(options, callback);
  }

  var query = xtend(
    this._getMode(options),
    options,
    {
      client_id: this._clientID,
      redirect_uri: this._getCallbackURL(options),
      username: trim(options.username || options.email || ''),
      tenant: this._domain.split('.')[0]
    });

  this._configureOfflineMode(query);

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/usernamepassword/login';
  var url = joinUrl(protocol, domain, endpoint);

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        if (popup && popup.kill) { popup.kill(); }
        return callback(err);
      }
      if('error' in resp) {
        if (popup && popup.kill) { popup.kill(); }
        var error = new LoginError(resp.status, resp.error);
        return callback(error);
      }
      _this._renderAndSubmitWSFedForm(options, resp.form);
    });
  }

  function return_error (error) {
    if (callback) {
      return callback(error);
    }
    throw error;
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'html',
    data:    query,
    headers: this._getClientInfoHeader(),
    crossOrigin: !same_origin(protocol, domain),
    success: function (resp) {
      _this._renderAndSubmitWSFedForm(options, resp);
    },
    error: function (err) {
      if (popup && popup.kill) {
        popup.kill();
      }
      handleRequestError(err, return_error);
    }
  });
};

/**
 * Login with phone number and passcode
 *
 * @param {Object} options
 * @param {Function} callback
 * @method loginWithPhoneNumber
 */
Auth0.prototype.loginWithPasscode = function (options, callback) {

  if (options.email == null && options.phoneNumber == null) {
    throw new Error('email or phoneNumber is required for authentication');
  }

  if (options.passcode == null) {
    throw new Error('passcode is required for authentication');
  }

  options.connection = options.email == null ? 'sms' : 'email';

  if (!this._shouldRedirect) {
    options = xtend(options, {
      username: options.email == null ? options.phoneNumber : options.email,
      password: options.passcode,
      sso: false
    });

    delete options.email;
    delete options.phoneNumber;
    delete options.passcode;

    return this.loginWithResourceOwner(options, callback);
  }

  var verifyOptions = {connection: options.connection};

  if (options.phoneNumber) {
    options.phone_number = options.phoneNumber;
    delete options.phoneNumber;

    verifyOptions.phone_number = options.phone_number;
  }

  if (options.email) {
    verifyOptions.email = options.email;
  }

  options.verification_code = options.passcode;
  delete options.passcode;

  verifyOptions.verification_code = options.verification_code;

  var _this = this;
  this._verify(verifyOptions, function(error) {
    if (error) {
      return callback(error);
    }
    _this._verify_redirect(options);
  });
};

Auth0.prototype._verify = function(options, callback) {
  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/passwordless/verify';
  var url = joinUrl(protocol, domain, endpoint);

  var data = options;

  if (this._useJSONP) {
    if (this._sendClientInfo) {
      data['auth0Client'] = this._getClientInfoString();
    }

    return jsonp(url + '?' + qs.stringify(data), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(new Error(0 + ': ' + err.toString()));
      }
      // /**/ typeof __auth0jp0 === 'function' && __auth0jp0({"status":400});
      return resp.status === 200 ? callback(null, true) : callback({status: resp.status});
    });
  }

  return reqwest({
    url:          same_origin(protocol, domain) ? endpoint : url,
    method:       'post',
    headers:      this._getClientInfoHeader(),
    crossOrigin:  !same_origin(protocol, domain),
    data:         data
  })
  .fail(function (err) {
    try {
      callback(JSON.parse(err.responseText));
    } catch (e) {
      var error = new Error(err.status + '(' + err.statusText + '): ' + err.responseText);
      error.statusCode = err.status;
      error.error = err.statusText;
      error.message = err.responseText;
      callback(error);
    }
  })
  .then(function (result) {
    callback(null, result);
  });
}

Auth0.prototype._verify_redirect = function(options) {
  var qs = [
    this._getMode(options),
    options,
    {
      client_id: this._clientID,
      redirect_uri: this._getCallbackURL(options)
    }
  ];

  var query = this._buildAuthorizeQueryString(qs);
  var url = joinUrl('https:', this._domain, '/passwordless/verify_redirect?' + query);

  this._redirect(url);
};

// TODO Document me
Auth0.prototype.renewIdToken = function (id_token, callback) {
  this.getDelegationToken({
    id_token: id_token,
    scope: 'passthrough',
    api: 'auth0'
  }, callback);
};

// TODO Document me
Auth0.prototype.refreshToken = function (refresh_token, callback) {
  this.getDelegationToken({
    refresh_token: refresh_token,
    scope: 'passthrough',
    api: 'auth0'
  }, callback);
};

/**
 * Get delegation token for certain addon or certain other clientId
 *
 * @example
 *
 *     auth0.getDelegationToken({
 *      id_token:   '<user-id-token>',
 *      target:     '<app-client-id>'
 *      api_type: 'auth0'
 *     }, function (err, delegationResult) {
 *        if (err) return console.log(err.message);
 *        // Do stuff with delegation token
 *        expect(delegationResult.id_token).to.exist;
 *        expect(delegationResult.token_type).to.eql('Bearer');
 *        expect(delegationResult.expires_in).to.eql(36000);
 *     });
 *
 * @example
 *
 *      // get a delegation token from a Firebase API App
  *     auth0.getDelegationToken({
 *      id_token:   '<user-id-token>',
 *      target:     '<app-client-id>'
 *      api_type: 'firebase'
 *     }, function (err, delegationResult) {
 *      // Use your firebase token here
 *    });
 *
 * @method getDelegationToken
 * @param {Object} [options]
 * @param {String} [id_token]
 * @param {String} [target]
 * @param {String} [api_type]
 * @param {Function} [callback]
 */
Auth0.prototype.getDelegationToken = function (options, callback) {
  options = options || {};

  if (!options.id_token && !options.refresh_token ) {
    throw new Error('You must send either an id_token or a refresh_token to get a delegation token.');
  }

  var query = xtend({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    client_id:  this._clientID,
    target: options.targetClientId || this._clientID,
    api_type: options.api
  }, options);

  delete query.hasOwnProperty;
  delete query.targetClientId;
  delete query.api;

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/delegation';
  var url = joinUrl(protocol, domain, endpoint);

  if (this._useJSONP) {
    return jsonp(url + '?' + qs.stringify(query), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(err);
      }
      if('error' in resp) {
        var error = new LoginError(resp.status, resp.error_description || resp.error);
        return callback(error);
      }
      callback(null, resp);
    });
  }

  reqwest({
    url:     same_origin(protocol, domain) ? endpoint : url,
    method:  'post',
    type:    'json',
    data:    query,
    crossOrigin: !same_origin(protocol, domain),
    success: function (resp) {
      callback(null, resp);
    },
    error: function (err) {
      try {
        callback(JSON.parse(err.responseText));
      }
      catch (e) {
        var er = err;
        var isAffectedIEVersion = isInternetExplorer() === 10 || isInternetExplorer() === 11;
        var zeroStatus = (!er.status || er.status === 0);

        // Request failed because we are offline.
        // See: http://caniuse.com/#search=navigator.onLine
        if (zeroStatus && !window.navigator.onLine) {
          er = {};
          er.status = 0;
          er.responseText = {
            code: 'offline'
          };
        // http://stackoverflow.com/questions/23229723/ie-10-11-cors-status-0
        // XXX IE10 when a request fails in CORS returns status code 0
        // XXX This is not handled by handleRequestError as the errors are different
        } else if (zeroStatus && isAffectedIEVersion) {
          er = {};
          er.status = 401;
          er.responseText = {
            code: 'invalid_operation'
          };
        // If not IE10/11 and not offline it means that Auth0 host is unreachable:
        // Connection Timeout or Connection Refused.
        } else if (zeroStatus) {
          er = {};
          er.status = 0;
          er.responseText = {
            code: 'connection_refused_timeout'
          };
        } else {
          er.responseText = err;
        }
        callback(new LoginError(er.status, er.responseText));
      }
    }
  });
};

/**
 * Trigger logout redirect with
 * params from `query` object
 *
 * @example
 *
 *     auth0.logout();
 *     // redirects to -> 'https://yourapp.auth0.com/logout'
 *
 * @example
 *
 *     auth0.logout({returnTo: 'http://logout'});
 *     // redirects to -> 'https://yourapp.auth0.com/logout?returnTo=http://logout'
 *
 * @method logout
 * @param {Object} query
 */

Auth0.prototype.logout = function (query) {
  var url = joinUrl('https:', this._domain, '/logout');
  if (query) {
    url += '?' + qs.stringify(query);
  }
  this._redirect(url);
};

/**
 * Get single sign on Data
 *
 * @example
 *
 *     auth0.getSSOData(function (err, ssoData) {
 *       if (err) return console.log(err.message);
 *       expect(ssoData.sso).to.exist;
 *     });
 *
 * @example
 *
 *     auth0.getSSOData(false, fn);
 *
 * @method getSSOData
 * @param {Boolean} withActiveDirectories
 * @param {Function} cb
 */

Auth0.prototype.getSSOData = function (withActiveDirectories, cb) {
  if (typeof withActiveDirectories === 'function') {
    cb = withActiveDirectories;
    withActiveDirectories = false;
  }

  var noResult = {sso: false};

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/user/ssodata';
  var url = joinUrl(protocol, domain, endpoint);
  var sameOrigin = same_origin(protocol, domain);
  var data = {};

  if (withActiveDirectories) {
    data = {ldaps: 1, client_id: this._clientID};
  }

  if (this._useJSONP) {
    var jsonpOptions = xtend({}, jsonpOpts, { timeout: 3000 });
    data['auth0Client'] = this._getClientInfoString();
    url += '?' + qs.stringify(data);

    return jsonp(url, jsonpOptions, function (err, resp) {
      cb(null, err ? noResult : resp);
    });
  }

  reqwest({
    url:             sameOrigin ? endpoint : url,
    method:          'get',
    type:            'json',
    data:            data,
    crossOrigin:     !sameOrigin,
    withCredentials: !sameOrigin,
    timeout:         3000
  }).fail(function(err) {
    var error = new Error("There was an error in the request that obtains the user's country");
    error.cause = err;
    cb(null, noResult);
  }).then(function(resp) {
    cb(null, resp);
  });
};

/**
 * Get all configured connections for a client
 *
 * @example
 *
 *     auth0.getConnections(function (err, conns) {
 *       if (err) return console.log(err.message);
 *       expect(conns.length).to.be.above(0);
 *       expect(conns[0].name).to.eql('Apprenda.com');
 *       expect(conns[0].strategy).to.eql('adfs');
 *       expect(conns[0].status).to.eql(false);
 *       expect(conns[0].domain).to.eql('Apprenda.com');
 *       expect(conns[0].domain_aliases).to.eql(['Apprenda.com', 'foo.com', 'bar.com']);
 *     });
 *
 * @method getConnections
 * @param {Function} callback
 */
// XXX We may change the way this method works in the future to use client's s3 file.

Auth0.prototype.getConnections = function (callback) {
  return jsonp('https://' + this._domain + '/public/api/' + this._clientID + '/connections', jsonpOpts, callback);
};

/**
 * Send email or SMS to do passwordless authentication
 *
 * @example
 *     // To send an email
 *     auth0.startPasswordless({email: 'foo@bar.com'}, function (err, result) {
 *       if (err) return console.log(err.error_description);
 *       console.log(result);
 *     });
 *
 * @example
 *     // To send a SMS
 *     auth0.startPasswordless({phoneNumber: '+14251112222'}, function (err, result) {
 *       if (err) return console.log(err.error_description);
 *       console.log(result);
 *     });
 *
 * @method startPasswordless
 * @param {Object} options
 * @param {Function} callback
 */

Auth0.prototype.startPasswordless = function (options, callback) {
  if ('object' !== typeof options) {
    throw new Error('An options object is required');
  }
  if ('function' !== typeof callback) {
    throw new Error('A callback function is required');
  }
  if (!options.email && !options.phoneNumber) {
    throw new Error('An `email` or a `phoneNumber` is required.');
  }

  var protocol = 'https:';
  var domain = this._domain;
  var endpoint = '/passwordless/start';
  var url = joinUrl(protocol, domain, endpoint);

  var data = {client_id: this._clientID};
  if (options.email) {
    data.email = options.email;
    data.connection = 'email';
    if (options.authParams) {
      data.authParams = options.authParams;
    }

    if (!options.send || options.send === "link") {
      if (!data.authParams) {
        data.authParams = {};
      }

      data.authParams.redirect_uri = this._callbackURL;
      data.authParams.response_type = this._shouldRedirect && !this._callbackOnLocationHash ?
        "code" : "token";
    }

    if (options.send) {
      data.send = options.send;
    }
  } else {
    data.phone_number = options.phoneNumber;
    data.connection = 'sms';
  }

  if (this._useJSONP) {
    if (this._sendClientInfo) {
      data['auth0Client'] = this._getClientInfoString();
    }

    return jsonp(url + '?' + qs.stringify(data), jsonpOpts, function (err, resp) {
      if (err) {
        return callback(new Error(0 + ': ' + err.toString()));
      }
      return resp.status === 200 ? callback(null, true) : callback(resp.err || resp.error);
    });
  }

  return reqwest({
    url:          same_origin(protocol, domain) ? endpoint : url,
    method:       'post',
    type:         'json',
    headers:      this._getClientInfoHeader(),
    crossOrigin:  !same_origin(protocol, domain),
    data:         data
  })
  .fail(function (err) {
    try {
      callback(JSON.parse(err.responseText));
    } catch (e) {
      var error = new Error(err.status + '(' + err.statusText + '): ' + err.responseText);
      error.statusCode = err.status;
      error.error = err.statusText;
      error.message = err.responseText;
      callback(error);
    }
  })
  .then(function (result) {
    callback(null, result);
  });
};

Auth0.prototype.requestMagicLink = function(attrs, cb) {
  return this.startPasswordless(attrs, cb);
};

Auth0.prototype.requestEmailCode = function(attrs, cb) {
  attrs.send = "code";
  return this.startPasswordless(attrs, cb);
};

Auth0.prototype.verifyEmailCode = function(attrs, cb) {
  attrs.passcode = attrs.code;
  delete attrs.code;
  return this.login(attrs, cb);
};

Auth0.prototype.requestSMSCode = function(attrs, cb) {
  return this.startPasswordless(attrs, cb);
};

Auth0.prototype.verifySMSCode = function(attrs, cb) {
  attrs.passcode = attrs.code;
  delete attrs.code;
  return this.login(attrs, cb);
};

/**
 * Expose `Auth0` constructor
 */

module.exports = Auth0;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)))

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var Base64 = __webpack_require__(195);

/**
 * Expose `base64_url_decode`
 */

module.exports = {
  encode: encode,
  decode: decode
};

/**
 * Encode a `base64` `encodeURIComponent` string
 *
 * @param {string} str
 * @public
 */

function encode(str) {
  return Base64.btoa(str)
      .replace(/\+/g, '-') // Convert '+' to '-'
      .replace(/\//g, '_') // Convert '/' to '_'
      .replace(/=+$/, ''); // Remove ending '='
}

/**
 * Decode a `base64` `encodeURIComponent` string
 *
 * @param {string} str
 * @public
 */

function decode(str) {
  // Add removed at end '='
  str += Array(5 - str.length % 4).join('=');

  str = str
    .replace(/\-/g, '+') // Convert '-' to '+'
    .replace(/\_/g, '/'); // Convert '_' to '/'

  return Base64.atob(str);
}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

;(function () {

  var
    object =  true ? exports : this, // #8: web workers
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    INVALID_CHARACTER_ERR = (function () {
      // fabricate a suitable error object
      try { document.createElement('$'); }
      catch (error) { return error; }}());

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  object.btoa || (
  object.btoa = function (input) {
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars, output = '';
      // if the next input index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      input.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = input.charCodeAt(idx += 3/4);
      if (charCode > 0xFF) throw INVALID_CHARACTER_ERR;
      block = block << 8 | charCode;
    }
    return output;
  });

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  object.atob || (
  object.atob = function (input) {
    input = input.replace(/=+$/, '')
    if (input.length % 4 == 1) throw INVALID_CHARACTER_ERR;
    for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = input.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  });

}());


/***/ }),
/* 196 */
/***/ (function(module, exports) {

/**
 * Expose `required`
 */

module.exports = required;

/**
 * Assert `prop` as requirement of `obj`
 *
 * @param {Object} obj
 * @param {prop} prop
 * @public
 */

function required (obj, prop) {
  if (!obj[prop]) {
    throw new Error(prop + ' is required.');
  }
}


/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * Module dependencies.
 */

var toString = Object.prototype.toString;

/**
 * Resolve `isArray` as native or fallback
 */

module.exports = null != Array.isArray
  ? Array.isArray
  : isArray;

/**
 * Wrap `Array.isArray` Polyfill for IE9
 * source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 *
 * @param {Array} array
 * @public
 */

function isArray (array) {
  return toString.call(array) === '[object Array]';
};


/***/ }),
/* 198 */
/***/ (function(module, exports) {

/**
 * Resolve `isArray` as native or fallback
 */

module.exports = Array.prototype.indexOf
  ? nativeIndexOf
  : polyfillIndexOf;


function nativeIndexOf(array, searchElement, fromIndex) {
  return array.indexOf(searchElement, fromIndex);
}


function polyfillIndexOf(array, searchElement, fromIndex) {
  // Production steps of ECMA-262, Edition 5, 15.4.4.14
  // Reference: http://es5.github.io/#x15.4.4.14

  var k;

  // 1. Let O be the result of calling ToObject passing
  //    the array value as the argument.
  if (array == null) {
    throw new TypeError('"array" is null or not defined');
  }

  var O = Object(array);

  // 2. Let lenValue be the result of calling the Get
  //    internal method of O with the argument "length".
  // 3. Let len be ToUint32(lenValue).
  var len = O.length >>> 0;

  // 4. If len is 0, return -1.
  if (len === 0) {
    return -1;
  }

  // 5. If argument fromIndex was passed let n be
  //    ToInteger(fromIndex); else let n be 0.
  var n = +fromIndex || 0;

  if (Math.abs(n) === Infinity) {
    n = 0;
  }

  // 6. If n >= len, return -1.
  if (n >= len) {
    return -1;
  }

  // 7. If n >= 0, then Let k be n.
  // 8. Else, n<0, Let k be len - abs(n).
  //    If k is less than 0, then let k be 0.
  k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

  // 9. Repeat, while k < len
  while (k < len) {
    // a. Let Pk be ToString(k).
    //   This is implicit for LHS operands of the in operator
    // b. Let kPresent be the result of calling the
    //    HasProperty internal method of O with argument Pk.
    //   This step can be combined with c
    // c. If kPresent is true, then
    //    i.  Let elementK be the result of calling the Get
    //        internal method of O with the argument ToString(k).
    //   ii.  Let same be the result of applying the
    //        Strict Equality Comparison Algorithm to
    //        searchElement and elementK.
    //  iii.  If same is true, return k.
    if (k in O && O[k] === searchElement) {
      return k;
    }
    k++;
  }
  return -1;
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var Keys = __webpack_require__(200)
var hasKeys = __webpack_require__(204)

module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        if (!hasKeys(source)) {
            continue
        }

        var keys = Keys(source)

        for (var j = 0; j < keys.length; j++) {
            var name = keys[j]
            target[name] = source[name]
        }
    }

    return target
}


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = Object.keys || __webpack_require__(201);



/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
	"use strict";

	// modified from https://github.com/kriskowal/es5-shim
	var has = Object.prototype.hasOwnProperty,
		toString = Object.prototype.toString,
		forEach = __webpack_require__(202),
		isArgs = __webpack_require__(203),
		hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString'),
		hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype'),
		dontEnums = [
			"toString",
			"toLocaleString",
			"valueOf",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"constructor"
		],
		keysShim;

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object',
			isFunction = toString.call(object) === '[object Function]',
			isArguments = isArgs(object),
			theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError("Object.keys called on a non-object");
		}

		if (isArguments) {
			forEach(object, function (value) {
				theKeys.push(value);
			});
		} else {
			var name,
				skipProto = hasProtoEnumBug && isFunction;

			for (name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(name);
				}
			}
		}

		if (hasDontEnumBug) {
			var ctor = object.constructor,
				skipConstructor = ctor && ctor.prototype === object;

			forEach(dontEnums, function (dontEnum) {
				if (!(skipConstructor && dontEnum === 'constructor') && has.call(object, dontEnum)) {
					theKeys.push(dontEnum);
				}
			});
		}
		return theKeys;
	};

	module.exports = keysShim;
}());



/***/ }),
/* 202 */
/***/ (function(module, exports) {

var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

var isFunction = function (fn) {
	var isFunc = (typeof fn === 'function' && !(fn instanceof RegExp)) || toString.call(fn) === '[object Function]';
	if (!isFunc && typeof window !== 'undefined') {
		isFunc = fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt;
	}
	return isFunc;
};

module.exports = function forEach(obj, fn) {
	if (!isFunction(fn)) {
		throw new TypeError('iterator must be a function');
	}
	var i, k,
		isString = typeof obj === 'string',
		l = obj.length,
		context = arguments.length > 2 ? arguments[2] : null;
	if (l === +l) {
		for (i = 0; i < l; i++) {
			if (context === null) {
				fn(isString ? obj.charAt(i) : obj[i], i, obj);
			} else {
				fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj);
			}
		}
	} else {
		for (k in obj) {
			if (hasOwn.call(obj, k)) {
				if (context === null) {
					fn(obj[k], k, obj);
				} else {
					fn.call(context, obj[k], k, obj);
				}
			}
		}
	}
};



/***/ }),
/* 203 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toString.call(value);
	var isArguments = str === '[object Arguments]';
	if (!isArguments) {
		isArguments = str !== '[object Array]'
			&& value !== null
			&& typeof value === 'object'
			&& typeof value.length === 'number'
			&& value.length >= 0
			&& toString.call(value.callee) === '[object Function]';
	}
	return isArguments;
};



/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = hasKeys

function hasKeys(source) {
    return source !== null &&
        (typeof source === "object" ||
        typeof source === "function")
}


/***/ }),
/* 205 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2014
  * https://github.com/ded/reqwest
  */

!function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else context[name] = definition()
}('reqwest', this, function () {

  var win = window
    , doc = document
    , httpsRe = /^http/
    , protocolRe = /(^\w+):\/\//
    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
    , byTag = 'getElementsByTagName'
    , readyState = 'readyState'
    , contentType = 'Content-Type'
    , requestedWith = 'X-Requested-With'
    , head = doc[byTag]('head')[0]
    , uniqid = 0
    , callbackPrefix = 'reqwest_' + (+new Date())
    , lastValue // data stored by the most recent JSONP callback
    , xmlHttpRequest = 'XMLHttpRequest'
    , xDomainRequest = 'XDomainRequest'
    , noop = function () {}

    , isArray = typeof Array.isArray == 'function'
        ? Array.isArray
        : function (a) {
            return a instanceof Array
          }

    , defaultHeaders = {
          'contentType': 'application/x-www-form-urlencoded'
        , 'requestedWith': xmlHttpRequest
        , 'accept': {
              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
            , 'xml':  'application/xml, text/xml'
            , 'html': 'text/html'
            , 'text': 'text/plain'
            , 'json': 'application/json, text/javascript'
            , 'js':   'application/javascript, text/javascript'
          }
      }

    , xhr = function(o) {
        // is it x-domain
        if (o['crossOrigin'] === true) {
          var xhr = win[xmlHttpRequest] ? new XMLHttpRequest() : null
          if (xhr && 'withCredentials' in xhr) {
            return xhr
          } else if (win[xDomainRequest]) {
            return new XDomainRequest()
          } else {
            throw new Error('Browser does not support cross-origin requests')
          }
        } else if (win[xmlHttpRequest]) {
          return new XMLHttpRequest()
        } else {
          return new ActiveXObject('Microsoft.XMLHTTP')
        }
      }
    , globalSetupOptions = {
        dataFilter: function (data) {
          return data
        }
      }

  function succeed(r) {
    var protocol = protocolRe.exec(r.url);
    protocol = (protocol && protocol[1]) || window.location.protocol;
    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response;
  }

  function handleReadyState(r, success, error) {
    return function () {
      // use _aborted to mitigate against IE err c00c023f
      // (can't read props on aborted request objects)
      if (r._aborted) return error(r.request)
      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
      if (r.request && r.request[readyState] == 4) {
        r.request.onreadystatechange = noop
        if (succeed(r)) success(r.request)
        else
          error(r.request)
      }
    }
  }

  function setHeaders(http, o) {
    var headers = o['headers'] || {}
      , h

    headers['Accept'] = headers['Accept']
      || defaultHeaders['accept'][o['type']]
      || defaultHeaders['accept']['*']

    var isAFormData = typeof FormData === 'function' && (o['data'] instanceof FormData);
    // breaks cross-origin requests with legacy browsers
    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
    for (h in headers)
      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
  }

  function setCredentials(http, o) {
    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
      http.withCredentials = !!o['withCredentials']
    }
  }

  function generalCallback(data) {
    lastValue = data
  }

  function urlappend (url, s) {
    return url + (/\?/.test(url) ? '&' : '?') + s
  }

  function handleJsonp(o, fn, err, url) {
    var reqId = uniqid++
      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
      , match = url.match(cbreg)
      , script = doc.createElement('script')
      , loaded = 0
      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

    if (match) {
      if (match[3] === '?') {
        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
      } else {
        cbval = match[3] // provided callback func name
      }
    } else {
      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
    }

    win[cbval] = generalCallback

    script.type = 'text/javascript'
    script.src = url
    script.async = true
    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
      // need this for IE due to out-of-order onreadystatechange(), binding script
      // execution to an event listener gives us control over when the script
      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
      script.htmlFor = script.id = '_reqwest_' + reqId
    }

    script.onload = script.onreadystatechange = function () {
      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
        return false
      }
      script.onload = script.onreadystatechange = null
      script.onclick && script.onclick()
      // Call the user callback with the last value stored and clean up values and scripts.
      fn(lastValue)
      lastValue = undefined
      head.removeChild(script)
      loaded = 1
    }

    // Add the script to the DOM head
    head.appendChild(script)

    // Enable JSONP timeout
    return {
      abort: function () {
        script.onload = script.onreadystatechange = null
        err({}, 'Request is aborted: timeout', {})
        lastValue = undefined
        head.removeChild(script)
        loaded = 1
      }
    }
  }

  function getRequest(fn, err) {
    var o = this.o
      , method = (o['method'] || 'GET').toUpperCase()
      , url = typeof o === 'string' ? o : o['url']
      // convert non-string objects to query-string form unless o['processData'] is false
      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
        ? reqwest.toQueryString(o['data'])
        : (o['data'] || null)
      , http
      , sendWait = false

    // if we're working on a GET request and we have data then we should append
    // query string to end of URL and not post data
    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
      url = urlappend(url, data)
      data = null
    }

    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)

    // get the xhr from the factory if passed
    // if the factory returns null, fall-back to ours
    http = (o.xhr && o.xhr(o)) || xhr(o)

    http.open(method, url, o['async'] === false ? false : true)
    setHeaders(http, o)
    setCredentials(http, o)
    if (win[xDomainRequest] && http instanceof win[xDomainRequest]) {
        http.onload = fn
        http.onerror = err
        // NOTE: see
        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
        http.onprogress = function() {}
        sendWait = true
    } else {
      http.onreadystatechange = handleReadyState(this, fn, err)
    }
    o['before'] && o['before'](http)
    if (sendWait) {
      setTimeout(function () {
        http.send(data)
      }, 200)
    } else {
      http.send(data)
    }
    return http
  }

  function Reqwest(o, fn) {
    this.o = o
    this.fn = fn

    init.apply(this, arguments)
  }

  function setType(header) {
    // json, javascript, text/plain, text/html, xml
    if (header.match('json')) return 'json'
    if (header.match('javascript')) return 'js'
    if (header.match('text')) return 'html'
    if (header.match('xml')) return 'xml'
  }

  function init(o, fn) {

    this.url = typeof o == 'string' ? o : o['url']
    this.timeout = null

    // whether request has been fulfilled for purpose
    // of tracking the Promises
    this._fulfilled = false
    // success handlers
    this._successHandler = function(){}
    this._fulfillmentHandlers = []
    // error handlers
    this._errorHandlers = []
    // complete (both success and fail) handlers
    this._completeHandlers = []
    this._erred = false
    this._responseArgs = {}

    var self = this

    fn = fn || function () {}

    if (o['timeout']) {
      this.timeout = setTimeout(function () {
        timedOut()
      }, o['timeout'])
    }

    if (o['success']) {
      this._successHandler = function () {
        o['success'].apply(o, arguments)
      }
    }

    if (o['error']) {
      this._errorHandlers.push(function () {
        o['error'].apply(o, arguments)
      })
    }

    if (o['complete']) {
      this._completeHandlers.push(function () {
        o['complete'].apply(o, arguments)
      })
    }

    function complete (resp) {
      o['timeout'] && clearTimeout(self.timeout)
      self.timeout = null
      while (self._completeHandlers.length > 0) {
        self._completeHandlers.shift()(resp)
      }
    }

    function success (resp) {
      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
      resp = (type !== 'jsonp') ? self.request : resp
      // use global data filter on response text
      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
        , r = filteredResponse
      try {
        resp.responseText = r
      } catch (e) {
        // can't assign this in IE<=8, just ignore
      }
      if (r) {
        switch (type) {
        case 'json':
          try {
            resp = win.JSON ? win.JSON.parse(r) : eval('(' + r + ')')
          } catch (err) {
            return error(resp, 'Could not parse JSON in response', err)
          }
          break
        case 'js':
          resp = eval(r)
          break
        case 'html':
          resp = r
          break
        case 'xml':
          resp = resp.responseXML
              && resp.responseXML.parseError // IE trololo
              && resp.responseXML.parseError.errorCode
              && resp.responseXML.parseError.reason
            ? null
            : resp.responseXML
          break
        }
      }

      self._responseArgs.resp = resp
      self._fulfilled = true
      fn(resp)
      self._successHandler(resp)
      while (self._fulfillmentHandlers.length > 0) {
        resp = self._fulfillmentHandlers.shift()(resp)
      }

      complete(resp)
    }

    function timedOut() {
      self._timedOut = true
      self.request.abort()      
    }

    function error(resp, msg, t) {
      resp = self.request
      self._responseArgs.resp = resp
      self._responseArgs.msg = msg
      self._responseArgs.t = t
      self._erred = true
      while (self._errorHandlers.length > 0) {
        self._errorHandlers.shift()(resp, msg, t)
      }
      complete(resp)
    }

    this.request = getRequest.call(this, success, error)
  }

  Reqwest.prototype = {
    abort: function () {
      this._aborted = true
      this.request.abort()
    }

  , retry: function () {
      init.call(this, this.o, this.fn)
    }

    /**
     * Small deviation from the Promises A CommonJs specification
     * http://wiki.commonjs.org/wiki/Promises/A
     */

    /**
     * `then` will execute upon successful requests
     */
  , then: function (success, fail) {
      success = success || function () {}
      fail = fail || function () {}
      if (this._fulfilled) {
        this._responseArgs.resp = success(this._responseArgs.resp)
      } else if (this._erred) {
        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._fulfillmentHandlers.push(success)
        this._errorHandlers.push(fail)
      }
      return this
    }

    /**
     * `always` will execute whether the request succeeds or fails
     */
  , always: function (fn) {
      if (this._fulfilled || this._erred) {
        fn(this._responseArgs.resp)
      } else {
        this._completeHandlers.push(fn)
      }
      return this
    }

    /**
     * `fail` will execute when the request fails
     */
  , fail: function (fn) {
      if (this._erred) {
        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._errorHandlers.push(fn)
      }
      return this
    }
  , 'catch': function (fn) {
      return this.fail(fn)
    }
  }

  function reqwest(o, fn) {
    return new Reqwest(o, fn)
  }

  // normalize newline variants according to spec -> CRLF
  function normalize(s) {
    return s ? s.replace(/\r?\n/g, '\r\n') : ''
  }

  function serial(el, cb) {
    var n = el.name
      , t = el.tagName.toLowerCase()
      , optCb = function (o) {
          // IE gives value="" even where there is no value attribute
          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
          if (o && !o['disabled'])
            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
        }
      , ch, ra, val, i

    // don't serialize elements that are disabled or without a name
    if (el.disabled || !n) return

    switch (t) {
    case 'input':
      if (!/reset|button|image|file/i.test(el.type)) {
        ch = /checkbox/i.test(el.type)
        ra = /radio/i.test(el.type)
        val = el.value
        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
      }
      break
    case 'textarea':
      cb(n, normalize(el.value))
      break
    case 'select':
      if (el.type.toLowerCase() === 'select-one') {
        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
      } else {
        for (i = 0; el.length && i < el.length; i++) {
          el.options[i].selected && optCb(el.options[i])
        }
      }
      break
    }
  }

  // collect up all form elements found from the passed argument elements all
  // the way down to child elements; pass a '<form>' or form fields.
  // called with 'this'=callback to use for serial() on each element
  function eachFormElement() {
    var cb = this
      , e, i
      , serializeSubtags = function (e, tags) {
          var i, j, fa
          for (i = 0; i < tags.length; i++) {
            fa = e[byTag](tags[i])
            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
          }
        }

    for (i = 0; i < arguments.length; i++) {
      e = arguments[i]
      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
    }
  }

  // standard query string style serialization
  function serializeQueryString() {
    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
  }

  // { 'name': 'value', ... } style serialization
  function serializeHash() {
    var hash = {}
    eachFormElement.apply(function (name, value) {
      if (name in hash) {
        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
        hash[name].push(value)
      } else hash[name] = value
    }, arguments)
    return hash
  }

  // [ { name: 'name', value: 'value' }, ... ] style serialization
  reqwest.serializeArray = function () {
    var arr = []
    eachFormElement.apply(function (name, value) {
      arr.push({name: name, value: value})
    }, arguments)
    return arr
  }

  reqwest.serialize = function () {
    if (arguments.length === 0) return ''
    var opt, fn
      , args = Array.prototype.slice.call(arguments, 0)

    opt = args.pop()
    opt && opt.nodeType && args.push(opt) && (opt = null)
    opt && (opt = opt.type)

    if (opt == 'map') fn = serializeHash
    else if (opt == 'array') fn = reqwest.serializeArray
    else fn = serializeQueryString

    return fn.apply(null, args)
  }

  reqwest.toQueryString = function (o, trad) {
    var prefix, i
      , traditional = trad || false
      , s = []
      , enc = encodeURIComponent
      , add = function (key, value) {
          // If value is a function, invoke it and return its value
          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
          s[s.length] = enc(key) + '=' + enc(value)
        }
    // If an array was passed in, assume that it is an array of form elements.
    if (isArray(o)) {
      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in o) {
        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
      }
    }

    // spaces should be + according to spec
    return s.join('&').replace(/%20/g, '+')
  }

  function buildParams(prefix, obj, traditional, add) {
    var name, i, v
      , rbracket = /\[\]$/

    if (isArray(obj)) {
      // Serialize array item.
      for (i = 0; obj && i < obj.length; i++) {
        v = obj[i]
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v)
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
        }
      }
    } else if (obj && obj.toString() === '[object Object]') {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
      }

    } else {
      // Serialize scalar item.
      add(prefix, obj)
    }
  }

  reqwest.getcallbackPrefix = function () {
    return callbackPrefix
  }

  // jQuery and Zepto compatibility, differences can be remapped here so you can call
  // .ajax.compat(options, callback)
  reqwest.compat = function (o, fn) {
    if (o) {
      o['type'] && (o['method'] = o['type']) && delete o['type']
      o['dataType'] && (o['type'] = o['dataType'])
      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
    }
    return new Reqwest(o, fn)
  }

  reqwest.ajaxSetup = function (options) {
    options = options || {}
    for (var k in options) {
      globalSetupOptions[k] = options[k]
    }
  }

  return reqwest
});


/***/ }),
/* 207 */
/***/ (function(module, exports) {

var WinChan = (function() {
  var RELAY_FRAME_NAME = "__winchan_relay_frame";
  var CLOSE_CMD = "die";

  // a portable addListener implementation
  function addListener(w, event, cb) {
    if(w.attachEvent) w.attachEvent('on' + event, cb);
    else if (w.addEventListener) w.addEventListener(event, cb, false);
  }

  // a portable removeListener implementation
  function removeListener(w, event, cb) {
    if(w.detachEvent) w.detachEvent('on' + event, cb);
    else if (w.removeEventListener) w.removeEventListener(event, cb, false);
  }


  // checking for IE8 or above
  function isInternetExplorer() {
    if (typeof navigator === 'undefined') {
      return false;
    }

    var rv = -1; // Return value assumes failure.
    var ua = navigator.userAgent;
    if (navigator.appName === 'Microsoft Internet Explorer') {
      var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
        rv = parseFloat(RegExp.$1);
    }
    // IE > 11
    else if (ua.indexOf("Trident") > -1) {
      var re = new RegExp("rv:([0-9]{2,2}[\.0-9]{0,})");
      if (re.exec(ua) !== null) {
        rv = parseFloat(RegExp.$1);
      }
    }

    return rv >= 8;
  }

  // checking Mobile Firefox (Fennec)
  function isFennec() {
    try {
      // We must check for both XUL and Java versions of Fennec.  Both have
      // distinct UA strings.
      var userAgent = navigator.userAgent;
      return (userAgent.indexOf('Fennec/') != -1) ||  // XUL
             (userAgent.indexOf('Firefox/') != -1 && userAgent.indexOf('Android') != -1);   // Java
    } catch(e) {}
    return false;
  }

  // feature checking to see if this platform is supported at all
  function isSupported() {
    return (typeof window !== 'undefined' && window.JSON && window.JSON.stringify &&
            window.JSON.parse && window.postMessage);
  }

  // given a URL, extract the origin. Taken from: https://github.com/firebase/firebase-simple-login/blob/d2cb95b9f812d8488bdbfba51c3a7c153ba1a074/js/src/simple-login/transports/WinChan.js#L25-L30
  function extractOrigin(url) {
    if (!/^https?:\/\//.test(url)) url = window.location.href;
    var m = /^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(url);
    if (m) return m[1];
    return url;
  }

  // find the relay iframe in the opener
  function findRelay() {
    var loc = window.location;
    var frames = window.opener.frames;
    for (var i = frames.length - 1; i >= 0; i--) {
      try {
        if (frames[i].location.protocol === window.location.protocol &&
            frames[i].location.host === window.location.host &&
            frames[i].name === RELAY_FRAME_NAME)
        {
          return frames[i];
        }
      } catch(e) { }
    }
    return;
  }

  var isIE = isInternetExplorer();

  if (isSupported()) {
    /*  General flow:
     *                  0. user clicks
     *  (IE SPECIFIC)   1. caller adds relay iframe (served from trusted domain) to DOM
     *                  2. caller opens window (with content from trusted domain)
     *                  3. window on opening adds a listener to 'message'
     *  (IE SPECIFIC)   4. window on opening finds iframe
     *                  5. window checks if iframe is "loaded" - has a 'doPost' function yet
     *  (IE SPECIFIC5)  5a. if iframe.doPost exists, window uses it to send ready event to caller
     *  (IE SPECIFIC5)  5b. if iframe.doPost doesn't exist, window waits for frame ready
     *  (IE SPECIFIC5)  5bi. once ready, window calls iframe.doPost to send ready event
     *                  6. caller upon reciept of 'ready', sends args
     */
    return {
      open: function(opts, cb) {
        if (!cb) throw "missing required callback argument";

        // test required options
        var err;
        if (!opts.url) err = "missing required 'url' parameter";
        if (!opts.relay_url) err = "missing required 'relay_url' parameter";
        if (err) setTimeout(function() { cb(err); }, 0);

        // supply default options
        if (!opts.window_name) opts.window_name = null;
        if (!opts.window_features || isFennec()) opts.window_features = undefined;

        // opts.params may be undefined

        var iframe;

        // sanity check, are url and relay_url the same origin?
        var origin = extractOrigin(opts.url);
        if (origin !== extractOrigin(opts.relay_url)) {
          return setTimeout(function() {
            cb('invalid arguments: origin of url and relay_url must match');
          }, 0);
        }

        var messageTarget;

        if (isIE) {
          // first we need to add a "relay" iframe to the document that's served
          // from the target domain.  We can postmessage into a iframe, but not a
          // window
          iframe = document.createElement("iframe");
          // iframe.setAttribute('name', framename);
          iframe.setAttribute('src', opts.relay_url);
          iframe.style.display = "none";
          iframe.setAttribute('name', RELAY_FRAME_NAME);
          document.body.appendChild(iframe);
          messageTarget = iframe.contentWindow;
        }

        var w = opts.popup || window.open(opts.url, opts.window_name, opts.window_features);
        if (opts.popup) {
          w.location.href = opts.url;
        }

        if (!messageTarget) messageTarget = w;

        // lets listen in case the window blows up before telling us
        var closeInterval = setInterval(function() {
          if (w && w.closed) {
            cleanup();
            if (cb) {
              cb('User closed the popup window');
              cb = null;
            }
          }
        }, 500);

        var req = JSON.stringify({a: 'request', d: opts.params});

        // cleanup on unload
        function cleanup() {
          if (iframe) document.body.removeChild(iframe);
          iframe = undefined;
          if (closeInterval) closeInterval = clearInterval(closeInterval);
          removeListener(window, 'message', onMessage);
          removeListener(window, 'unload', cleanup);
          if (w) {
            try {
              w.close();
            } catch (securityViolation) {
              // This happens in Opera 12 sometimes
              // see https://github.com/mozilla/browserid/issues/1844
              messageTarget.postMessage(CLOSE_CMD, origin);
            }
          }
          w = messageTarget = undefined;
        }

        addListener(window, 'unload', cleanup);

        function onMessage(e) {
          if (e.origin !== origin) { return; }
          try {
            var d = JSON.parse(e.data);
            if (d.a === 'ready') messageTarget.postMessage(req, origin);
            else if (d.a === 'error') {
              cleanup();
              if (cb) {
                cb(d.d);
                cb = null;
              }
            } else if (d.a === 'response') {
              cleanup();
              if (cb) {
                cb(null, d.d);
                cb = null;
              }
            }
          } catch(err) { }
        }

        addListener(window, 'message', onMessage);

        return {
          close: cleanup,
          focus: function() {
            if (w) {
              try {
                w.focus();
              } catch (e) {
                // IE7 blows up here, do nothing
              }
            }
          }
        };
      },
      onOpen: function(cb) {
        var o = "*";
        var msgTarget = isIE ? findRelay() : window.opener;
        if (!msgTarget) throw "can't find relay frame";
        function doPost(msg) {
          msg = JSON.stringify(msg);
          if (isIE) msgTarget.doPost(msg, o);
          else msgTarget.postMessage(msg, o);
        }

        function onMessage(e) {
          // only one message gets through, but let's make sure it's actually
          // the message we're looking for (other code may be using
          // postmessage) - we do this by ensuring the payload can
          // be parsed, and it's got an 'a' (action) value of 'request'.
          var d;
          try {
            d = JSON.parse(e.data);
          } catch(err) { }
          if (!d || d.a !== 'request') return;
          removeListener(window, 'message', onMessage);
          o = e.origin;
          if (cb) {
            // this setTimeout is critically important for IE8 -
            // in ie8 sometimes addListener for 'message' can synchronously
            // cause your callback to be invoked.  awesome.
            setTimeout(function() {
              cb(o, d.d, function(r) {
                cb = undefined;
                doPost({a: 'response', d: r});
              });
            }, 0);
          }
        }

        function onDie(e) {
          if (e.data === CLOSE_CMD) {
            try { window.close(); } catch (o_O) {}
          }
        }
        addListener(isIE ? msgTarget : window, 'message', onMessage);
        addListener(isIE ? msgTarget : window, 'message', onDie);

        // we cannot post to our parent that we're ready before the iframe
        // is loaded. (IE specific possible failure)
        try {
          doPost({a: "ready"});
        } catch(e) {
          // this code should never be exectued outside IE
          addListener(msgTarget, 'load', function(e) {
            doPost({a: "ready"});
          });
        }

        // if window is unloaded and the client hasn't called cb, it's an error
        var onUnload = function() {
          try {
            // IE8 doesn't like this...
            removeListener(isIE ? msgTarget : window, 'message', onDie);
          } catch (ohWell) { }
          if (cb) doPost({ a: 'error', d: 'client closed window' });
          cb = undefined;
          // explicitly close the window, in case the client is trying to reload or nav
          try { window.close(); } catch (e) { }
        };
        addListener(window, 'unload', onUnload);
        return {
          detach: function() {
            removeListener(window, 'unload', onUnload);
          }
        };
      }
    };
  } else {
    return {
      open: function(url, winopts, arg, cb) {
        setTimeout(function() { cb("unsupported browser"); }, 0);
      },
      onOpen: function(cb) {
        setTimeout(function() { cb("unsupported browser"); }, 0);
      }
    };
  }
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = WinChan;
}


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var debug = __webpack_require__(209)('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';
  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;

  // generate a unique id for this request
  var id = prefix + (count++);

  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    script.parentNode.removeChild(script);
    window[id] = noop;
  }

  window[id] = function(data){
    debug('jsonp got', data);
    if (timer) clearTimeout(timer);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);
}


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(210);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = Object({"BABEL_ENV":"production","NODE_ENV":"production"}).DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(89)))

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(211);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 212 */
/***/ (function(module, exports) {

/**
 * Check for same origin policy
 */

var protocol = window.location.protocol;
var domain = window.location.hostname;
var port = window.location.port;

module.exports = same_origin;

function same_origin (tprotocol, tdomain, tport) {
  tport = tport || '';
  return protocol === tprotocol && domain === tdomain && port === tport;
}


/***/ }),
/* 213 */
/***/ (function(module, exports) {

/*
    json2.js
    2011-10-19

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON = {};

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

module.exports = JSON

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var json_parse = __webpack_require__(108);

/**
 * Expose `LoginError`
 */

module.exports = LoginError;

/**
 * Create a `LoginError` by extend of `Error`
 *
 * @param {Number} status
 * @param {String} details
 * @public
 */

function LoginError(status, details) {
  var obj;

  if (typeof details == 'string') {
    try {
      obj = json_parse(details);
    } catch (er) {
      obj = { message: details };
    }
  } else {
    obj = details || { description: 'server error' };
  }

  if (!obj.code) {
    obj.code = obj.error;
  }

  if ('unauthorized' === obj.code) {
    status = 401;
  }

  var message = obj.description || obj.message || obj.error;

  if ('PasswordStrengthError' === obj.name) {
    message = "Password is not strong enough.";
  }

  var err = Error.call(this, message);

  err.status = status;
  err.name = obj.code;
  err.code = obj.code;
  err.details = obj;

  if (status === 0) {
    if (!err.code || err.code !== 'offline') {
      err.code = 'Unknown';
      err.message = 'Unknown error.';
    }
  }

  return err;
}

/**
 * Extend `LoginError.prototype` with `Error.prototype`
 * and `LoginError` as constructor
 */

if (Object && Object.create) {
  LoginError.prototype = Object.create(Error.prototype, {
    constructor: { value: LoginError }
  });
}


/***/ }),
/* 215 */
/***/ (function(module, exports) {

/**
 * Expose `use_jsonp`
 */

module.exports = use_jsonp;

/**
 * Return true if `jsonp` is required
 *
 * @return {Boolean}
 * @public
 */

function use_jsonp() {
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : null;

  if (xhr && 'withCredentials' in xhr) {
    return false;
  }

  // We no longer support XDomainRequest for IE8 and IE9 for CORS because it has many quirks.
  // if ('XDomainRequest' in window && window.location.protocol === 'https:') {
  //   return false;
  // }

  return true;
}

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = { str: "6.8.4" };


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.services = undefined;

var _api = __webpack_require__(10);

var api = _interopRequireWildcard(_api);

var _billing = __webpack_require__(218);

var billing = _interopRequireWildcard(_billing);

var _challenges = __webpack_require__(47);

var challenge = _interopRequireWildcard(_challenges);

var _direct = __webpack_require__(105);

var direct = _interopRequireWildcard(_direct);

var _groups = __webpack_require__(72);

var groups = _interopRequireWildcard(_groups);

var _members = __webpack_require__(75);

var members = _interopRequireWildcard(_members);

var _terms = __webpack_require__(102);

var terms = _interopRequireWildcard(_terms);

var _communities = __webpack_require__(103);

var communities = _interopRequireWildcard(_communities);

var _reviewOpportunities = __webpack_require__(112);

var reviewOpportunities = _interopRequireWildcard(_reviewOpportunities);

var _userSettings = __webpack_require__(219);

var userSetting = _interopRequireWildcard(_userSettings);

var _user = __webpack_require__(74);

var user = _interopRequireWildcard(_user);

var _lookup = __webpack_require__(114);

var lookup = _interopRequireWildcard(_lookup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Export services.
 */
var services = exports.services = {
  api: api,
  billing: billing,
  terms: terms,
  communities: communities,
  challenge: challenge,
  direct: direct,
  groups: groups,
  members: members,
  user: user,
  userSetting: userSetting,
  reviewOpportunities: reviewOpportunities,
  lookup: lookup
};

exports.default = undefined;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getService = getService;

var _api = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @member default
 * @desc Default module export is
 *  {@link module:services.billing~Billing} class.
 */

/**
 * Billing service object.
 */
var Billing = function () {
  /**
   * Creates a new service.
   * @param {String} tokenV3 Topcoder auth token v3.
   */
  function Billing(tokenV3) {
    (0, _classCallCheck3.default)(this, Billing);

    this.private = {
      api: (0, _api.getApiV3)(tokenV3),
      tokenV3: tokenV3
    };
  }

  /**
   * Gets billing accounts accessible to service user.
   * @return {Promise} Resolves to the list of billing account objects.
   */


  (0, _createClass3.default)(Billing, [{
    key: 'getUserBillingAccounts',
    value: function getUserBillingAccounts() {
      return this.private.api.fetch();
    }
  }]);
  return Billing;
}(); /**
      * @module "services.billing"
      * @desc Access to Topcoder billing accounts.
      */


var lastInstance = null;

/**
 * Returns a new or existing Billing service for the user specified by token.
 * @param {String} tokenV3 Topcoder auth token v3.
 * @return {Billing} Billing service instance.
 */
function getService(tokenV3) {
  if (!lastInstance || lastInstance.private.tokenV3 !== tokenV3) {
    lastInstance = new Billing(tokenV3);
  }
  return lastInstance;
}

exports.default = Billing;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(29);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(11);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(12);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.getUserSettingsService = getUserSettingsService;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _topcoderReactUtils = __webpack_require__(7);

var _api = __webpack_require__(10);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @member default
 * @desc Default export is {@link module:services.user-settings~UserSettings}
 *  class.
 */

/**
 * Service class.
 */
var UserSettings = function () {
  /**
   * @param {String} tokenV2
   */
  function UserSettings(tokenV2) {
    (0, _classCallCheck3.default)(this, UserSettings);

    this.private = {
      api: new _api2.default(_topcoderReactUtils.config.URL.USER_SETTINGS, tokenV2),
      token: tokenV2
    };
  }

  /**
   * Removes the filter specified by ID.
   * @param {String} id
   * @return {Promise}
   */


  (0, _createClass3.default)(UserSettings, [{
    key: 'deleteFilter',
    value: function deleteFilter(id) {
      return this.private.api.delete('/saved-searches/' + id).then(function (res) {
        return res.ok ? null : new Error(res.statusText);
      });
    }

    /**
     * Gets saved filters.
     * @return {Promise}
     */

  }, {
    key: 'getFilters',
    value: function getFilters() {
      return this.private.api.get('/saved-searches').then(function (res) {
        return res.ok ? res.json() : new Error(res.statusText);
      }).then(function (res) {
        return res.map(function (item) {
          /* NOTE: Previous version of the challenge listing saved filter in
           * different format (like an URL query string). This try/catch block
           * effectively differentiate between the old (unsupported) and new
           * format of the filters. */
          var filter = void 0;
          try {
            filter = JSON.parse(item.filter);
          } catch (e) {
            _lodash2.default.noop();
          }
          return (0, _extends3.default)({}, item, { filter: filter });
        });
      }).then(function (res) {
        return res.filter(function (item) {
          return item.filter;
        });
      });
    }

    /**
     * Saves filter.
     * @param {String} name
     * @param {Object} filter
     */

  }, {
    key: 'saveFilter',
    value: function saveFilter(name, filter) {
      return this.private.api.postJson('/saved-searches', {
        filter: (0, _stringify2.default)(filter),
        name: name,
        type: 'develop'
      }).then(function (res) {
        return res.ok ? res.json() : new Error(res.statusText);
      });
    }

    /**
     * Updates filter.
     * @param {String} id
     * @param {String} name
     * @param {Object} filter
     * @return {Promise}
     */

  }, {
    key: 'updateFilter',
    value: function updateFilter(id, name, filter) {
      return this.private.api.putJson('/saved-searches/' + id, {
        filter: (0, _stringify2.default)(filter),
        name: name,
        type: 'develop'
      }).then(function (res) {
        return res.ok ? res.json() : new Error(res.statusText);
      });
    }
  }]);
  return UserSettings;
}(); /**
      * @module "services.user-settings"
      * @desc User Settings service. Corresponding part of the backend is
      * implemented as a separate Heroku App, which is set up only for prod.
      * Currently, we use it to save user-defined filters in the challenge search.
      */

var lastUserSettings = null;

/**
 * Returns a new or existing instance of UserSettings service.
 * @param {String} tokenV2 Topcoder auth token v2.
 * @return {UserSettings}
 */
function getUserSettingsService(tokenV2) {
  if (!lastUserSettings || lastUserSettings.private.token !== tokenV2) {
    lastUserSettings = new UserSettings(tokenV2);
  }
  return lastUserSettings;
}

exports.default = UserSettings;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = exports.mock = exports.time = exports.tc = exports.logger = exports.challenge = undefined;

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _tc = __webpack_require__(30);

var tc = _interopRequireWildcard(_tc);

var _time = __webpack_require__(97);

var time = _interopRequireWildcard(_time);

var _mock = __webpack_require__(221);

var mock = _interopRequireWildcard(_mock);

var _errors = __webpack_require__(20);

var errors = _interopRequireWildcard(_errors);

var _filter = __webpack_require__(99);

var filter = _interopRequireWildcard(_filter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Export utils.
 */
var challenge = {
  filter: filter
};

exports.challenge = challenge;
exports.logger = _logger2.default;
exports.tc = tc;
exports.time = time;
exports.mock = mock;
exports.errors = errors;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockAction = mockAction;
/**
 * @module mock
 * @desc Collection of functions useful in unit tests.
 * @todo This will be moved to Jest utils in `topcoder-react-utils` soon.
 */

/**
 * Creates a mock Flux Standard Action creator.
 * TODO: Additional options to set errors, etc. should be added.
 * TODO: It may be handier to return action created wrapped into Jest mock
 *  function.
 * @param {String} type Action type.
 * @param {Any} payload Action payload.
 * @param {Any} error Has error or not.
 */
function mockAction(type, payload, error) {
  var res = function res() {
    return { type: type, payload: payload, error: error };
  };
  res.toString = function () {
    return type;
  };
  return res;
}

exports.default = undefined;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factories = undefined;
exports.factory = factory;

var _topcoderReactUtils = __webpack_require__(7);

var _auth = __webpack_require__(223);

var _auth2 = _interopRequireDefault(_auth);

var _stats = __webpack_require__(224);

var _stats2 = _interopRequireDefault(_stats);

var _terms = __webpack_require__(225);

var _terms2 = _interopRequireDefault(_terms);

var _direct = __webpack_require__(226);

var _direct2 = _interopRequireDefault(_direct);

var _groups = __webpack_require__(227);

var _groups2 = _interopRequireDefault(_groups);

var _errors = __webpack_require__(232);

var _errors2 = _interopRequireDefault(_errors);

var _challenge = __webpack_require__(237);

var _challenge2 = _interopRequireDefault(_challenge);

var _profile = __webpack_require__(238);

var _profile2 = _interopRequireDefault(_profile);

var _members = __webpack_require__(239);

var _members2 = _interopRequireDefault(_members);

var _lookup = __webpack_require__(240);

var _lookup2 = _interopRequireDefault(_lookup);

var _memberTasks = __webpack_require__(241);

var _memberTasks2 = _interopRequireDefault(_memberTasks);

var _reviewOpportunity = __webpack_require__(242);

var _reviewOpportunity2 = _interopRequireDefault(_reviewOpportunity);

var _mySubmissionsManagement = __webpack_require__(116);

var _mySubmissionsManagement2 = _interopRequireDefault(_mySubmissionsManagement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Export reducers.
 */
function factory(options) {
  return _topcoderReactUtils.redux.resolveReducers({
    auth: (0, _auth.factory)(options),
    stats: (0, _stats.factory)(options),
    terms: (0, _terms.factory)(options),
    direct: (0, _direct.factory)(options),
    groups: (0, _groups.factory)(options),
    errors: (0, _errors.factory)(options),
    challenge: (0, _challenge.factory)(options),
    profile: (0, _profile.factory)(options),
    lookup: (0, _lookup.factory)(options),
    members: (0, _members.factory)(options),
    memberTasks: (0, _memberTasks.factory)(options),
    reviewOpportunity: (0, _reviewOpportunity.factory)(options),
    mySubmissionsManagement: (0, _mySubmissionsManagement.factory)(options)
  });
}

var factories = exports.factories = {
  authFactory: _auth.factory,
  statsFactory: _stats.factory,
  termsFactory: _terms.factory,
  directFactory: _direct.factory,
  groupsFactory: _groups.factory,
  errorsFactory: _errors.factory,
  challengeFactory: _challenge.factory,
  profileFactory: _profile.factory,
  lookupFactory: _lookup.factory,
  membersFactory: _members.factory,
  memberTasksFactory: _memberTasks.factory,
  reviewOpportunityFactory: _reviewOpportunity.factory,
  mySubmissionsManagementFactory: _mySubmissionsManagement.factory
};

exports.default = {
  auth: _auth2.default,
  stats: _stats2.default,
  terms: _terms2.default,
  direct: _direct2.default,
  groups: _groups2.default,
  errors: _errors2.default,
  challenge: _challenge2.default,
  profile: _profile2.default,
  lookup: _lookup2.default,
  members: _members2.default,
  memberTasks: _memberTasks2.default,
  reviewOpportunity: _reviewOpportunity2.default,
  mySubmissionsManagement: _mySubmissionsManagement2.default
};

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _tcAccounts = __webpack_require__(46);

var _topcoderReactUtils = __webpack_require__(7);

var _auth = __webpack_require__(76);

var _auth2 = _interopRequireDefault(_auth);

var _profile = __webpack_require__(73);

var _profile2 = _interopRequireDefault(_profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Handles actions.auth.loadProfile action.
 * @param {Object} state
 * @param {Object} action
 */
function onProfileLoaded(state, action) {
  return (0, _extends3.default)({}, state, {
    authenticating: false,
    profile: action.payload
  });
}

/**
 * Creates a new Auth reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Auth reducer.
 */
/**
 * @module "reducers.auth"
 * @desc Reducer for {@link module:actions.auth} actions.
 *
 * State segment managed by this reducer has the following structure:
 * @param {Boolean} authenticating=true `true` if authentication is still in
 *  progress; `false` if it has already completed or failed.
 * @param {Object} profile=null Topcoder user profile.
 * @param {String} tokenV2='' Topcoder v2 auth token.
 * @param {String} tokenV3='' Topcoder v3 auth token.
 * @param {Object} user=null Topcoder user object (user information stored in
 *  v3 auth token).
 */

function create(initialState) {
  var _redux$handleActions;

  return _topcoderReactUtils.redux.handleActions((_redux$handleActions = {}, (0, _defineProperty3.default)(_redux$handleActions, _auth2.default.auth.loadProfile, onProfileLoaded), (0, _defineProperty3.default)(_redux$handleActions, _auth2.default.auth.setTcTokenV2, function (state, action) {
    return (0, _extends3.default)({}, state, {
      tokenV2: action.payload
    });
  }), (0, _defineProperty3.default)(_redux$handleActions, _auth2.default.auth.setTcTokenV3, function (state, _ref) {
    var payload = _ref.payload;
    return (0, _extends3.default)({}, state, {
      tokenV3: payload,
      user: payload ? (0, _tcAccounts.decodeToken)(payload) : null
    });
  }), (0, _defineProperty3.default)(_redux$handleActions, 'COMMUNITY_ACTIONS/TC_COMMUNITY/JOIN_DONE', function COMMUNITY_ACTIONSTC_COMMUNITYJOIN_DONE(state, _ref2) {
    var payload = _ref2.payload;
    return (0, _extends3.default)({}, state, {
      profile: (0, _extends3.default)({}, state.profile, {
        groups: state.profile.groups.concat({ id: payload.groupId.toString() })
      })
    });
  }), (0, _defineProperty3.default)(_redux$handleActions, _profile2.default.profile.uploadPhotoDone, function (state, _ref3) {
    var payload = _ref3.payload,
        error = _ref3.error;

    if (error) {
      return state;
    }
    if (!state.profile || state.profile.handle !== payload.handle) {
      return state;
    }
    return (0, _extends3.default)({}, state, {
      profile: (0, _extends3.default)({}, state.profile, {
        photoURL: payload.photoURL
      })
    });
  }), (0, _defineProperty3.default)(_redux$handleActions, _profile2.default.profile.deletePhotoDone, function (state, _ref4) {
    var payload = _ref4.payload,
        error = _ref4.error;

    if (error) {
      return state;
    }
    if (!state.profile || state.profile.handle !== payload.handle) {
      return state;
    }
    return (0, _extends3.default)({}, state, {
      profile: (0, _extends3.default)({}, state.profile, {
        photoURL: null
      })
    });
  }), (0, _defineProperty3.default)(_redux$handleActions, _profile2.default.profile.updateProfileDone, function (state, _ref5) {
    var payload = _ref5.payload,
        error = _ref5.error;

    if (error) {
      return state;
    }
    if (!state.profile || state.profile.handle !== payload.handle) {
      return state;
    }
    return (0, _extends3.default)({}, state, {
      profile: (0, _extends3.default)({}, state.profile, payload)
    });
  }), _redux$handleActions), _lodash2.default.defaults(initialState, {
    authenticating: true,
    profile: null,
    tokenV2: '',
    tokenV3: '',
    user: null
  }));
}

/**
 * Creates a new reducer.
 * @param {Object} options={} Optional. Options for customization of initial
 *  state.
 * @param {String} [options.auth.tokenV2=''] Optional. Topcoder v2 auth token.
 * @param {String} [options.auth.tokenV3=''] Optional. Topcoder v3 auth token.
 * @returns {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var state = {
    tokenV2: _lodash2.default.get(options.auth, 'tokenV2'),
    tokenV3: _lodash2.default.get(options.auth, 'tokenV3')
  };

  if (state.tokenV3) {
    state.user = (0, _tcAccounts.decodeToken)(state.tokenV3);
    return _topcoderReactUtils.redux.resolveAction(_auth2.default.auth.loadProfile(state.tokenV3)).then(function (res) {
      return create(onProfileLoaded(state, res), options.mergeReducers);
    });
  }
  return _promise2.default.resolve(create(state, options.mergeReducers));
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
exports.default = create();

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = __webpack_require__(4);

var _extends5 = _interopRequireDefault(_extends4);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _stats = __webpack_require__(98);

var _stats2 = _interopRequireDefault(_stats);

var _errors = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Inits the loading of community stats.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetCommunityStatsInit(state, action) {
  var _action$payload = action.payload,
      community = _action$payload.community,
      uuid = _action$payload.uuid;

  var res = state.communities[community];
  res = res ? _lodash2.default.clone(res) : {};
  res.loadingUuid = uuid;
  return (0, _extends5.default)({}, state, {
    communities: (0, _extends5.default)({}, state.communities, (0, _defineProperty3.default)({}, community, res))
  });
}

/**
 * Handles result of the getCommunityStats action.
 * @param {Object} state Previous state.
 * @param {Object} action Action result.
 * @return {Object} New state.
 */
/**
 * @module "reducers.stats"
 * @desc Reducer for state.stats. That part of Redux state is intended to keep
 *  user- and group-related statistics to render in the frontend.
 * @todo Document state segment structure.
 */

function onGetCommunityStatsDone(state, _ref) {
  var error = _ref.error,
      payload = _ref.payload;

  if (error) {
    _logger2.default.error('Failed to load community stats', payload);
    (0, _errors.fireErrorMessage)('Failed to load community stats', '');
    return state;
  }

  var community = payload.community,
      stats = payload.stats,
      uuid = payload.uuid;

  if (_lodash2.default.get(state.communities[community], 'loadingUuid') !== uuid) {
    return state;
  }
  return (0, _extends5.default)({}, state, {
    communities: (0, _extends5.default)({}, state.communities, (0, _defineProperty3.default)({}, community, {
      data: stats,
      timestamp: Date.now()
    }))
  });
}

/**
 * Creates a new Stats reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Stats reducer.
 */
function create() {
  var _handleActions;

  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var a = _stats2.default.stats;
  return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, a.getCommunityStatsInit, onGetCommunityStatsInit), (0, _defineProperty3.default)(_handleActions, a.getCommunityStatsDone, onGetCommunityStatsDone), _handleActions), _lodash2.default.defaults(_lodash2.default.clone(initialState), {
    communities: {}
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  return _promise2.default.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
exports.default = create();

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _topcoderReactUtils = __webpack_require__(7);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _terms = __webpack_require__(101);

var _terms2 = _interopRequireDefault(_terms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * sort terms by agreed status
 * @param  {Array} terms terms to sort
 * @return {Array}       sorted terms
 */
/**
 * @module "reducers.terms"
 * @desc Reducer for state.terms.
 * @todo Document state segment structure.
 */
function sortTerms(terms) {
  return _lodash2.default.sortBy(terms, function (t) {
    return t.agreed ? 0 : 1;
  });
}

/**
 * Handles TERMS/GET_TERMS_DONE action.
 * Note, that it silently discards received terms if the entity of received data
 * mismatches the one stored in loadingTermsForEntity
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetTermsDone(state, action) {
  if (action.error) {
    _logger2.default.error('Failed to get terms!', action.payload);
    return (0, _extends3.default)({}, state, {
      terms: [],
      getTermsFailure: action.error,
      loadingTermsForEntity: null
    });
  }

  if (!_lodash2.default.isEqual(action.payload.entity, state.loadingTermsForEntity)) {
    return state;
  }

  return (0, _extends3.default)({}, state, {
    entity: action.payload.entity,
    terms: sortTerms(action.payload.terms),
    getTermsFailure: false,
    loadingTermsForEntity: null
  });
}

/**
 * Handles TERMS/GET_TERMS_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetTermsInit(state, action) {
  return (0, _extends3.default)({}, state, {
    getTermsFailure: false,
    loadingTermsForEntity: action.payload,
    terms: [],
    entity: action.payload
  });
}

/**
 * Handles TERMS/CHECK_STATUS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onCheckStatusDone(state, action) {
  if (action.error) {
    _logger2.default.error('Check terms status failed!', action.payload);
    return (0, _extends3.default)({}, state, {
      checkingStatus: false,
      checkStatusError: action.payload,
      canRegister: false
    });
  }
  var canRegister = _lodash2.default.every(action.payload, 'agreed');
  var selectedTerm = _lodash2.default.find(action.payload, function (t) {
    return !t.agreed;
  });
  return (0, _extends3.default)({}, state, {
    checkingStatus: false,
    checkStatusError: false,
    canRegister: canRegister,
    terms: sortTerms(action.payload),
    selectedTerm: selectedTerm
  });
}

/**
 * Handles TERMS/GET_TERM_DETAILS_DONE action.
 * Note, that it silently discards received details if the termId of received
 * mismatches the one stored in loadingDetailsForTermId field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetTermDetailsDone(state, action) {
  if (action.error) {
    _logger2.default.error('Failed to get term details!', action.payload);
    return (0, _extends3.default)({}, state, {
      details: null,
      getTermDetailsFailure: action.payload,
      loadingDetailsForTermId: ''
    });
  }

  if (_lodash2.default.toString(action.payload.termId) !== state.loadingDetailsForTermId) {
    return state;
  }

  return (0, _extends3.default)({}, state, action.payload, {
    getTermDetailsFailure: false,
    loadingDetailsForTermId: ''
  });
}

/**
 * Handles TERMS/GET_DOCU_SIGN_URL_DONE action.
 * Note, that it silently discards received url if the templateId of received
 * mismatches the one stored in loadingDocuSignUrl field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetDocuSignUrlDone(state, action) {
  if (action.error) {
    _logger2.default.error('Failed to get docu sign url!', action.payload);
    return (0, _extends3.default)({}, state, {
      docuSignUrl: '',
      getDocuSignUrlFailure: action.payload,
      loadingDocuSignUrl: ''
    });
  }

  if (_lodash2.default.toString(action.payload.templateId) !== state.loadingDocuSignUrl) {
    return state;
  }
  return (0, _extends3.default)({}, state, action.payload, {
    getDocuSignUrlFailure: false,
    loadingDocuSignUrl: ''
  });
}

/**
 * Handles TERMS/AGREE_TERM_DONE action.
 * Note, that it silently discards received result if the termId of received
 * mismatches the one stored in agreeingTerm field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onAgreeTermDone(state, action) {
  if (action.error) {
    _logger2.default.error('Failed to agree term!', action.payload);
    return (0, _extends3.default)({}, state, {
      agreeTermFailure: action.payload,
      agreeingTerm: ''
    });
  }

  if (_lodash2.default.toString(action.payload.termId) !== state.agreeingTerm) {
    return state;
  }
  if (action.payload.success) {
    var terms = _lodash2.default.cloneDeep(state.terms);
    var term = _lodash2.default.find(terms, ['termsOfUseId', action.payload.termId]);
    term.agreed = true;
    var selectedTerm = _lodash2.default.find(terms, function (t) {
      return !t.agreed;
    });
    return (0, _extends3.default)({}, state, {
      terms: terms,
      selectedTerm: selectedTerm,
      agreeTermFailure: false,
      agreeingTerm: ''
    });
  }
  return (0, _extends3.default)({}, state, {
    agreeTermFailure: false,
    agreeingTerm: ''
  });
}

/**
 * Creates a new Profile reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function(state, action): state} Profile reducer.
 */
function create(initialState) {
  var _redux$handleActions;

  return _topcoderReactUtils.redux.handleActions((_redux$handleActions = {}, (0, _defineProperty3.default)(_redux$handleActions, _terms2.default.terms.getTermsInit, onGetTermsInit), (0, _defineProperty3.default)(_redux$handleActions, _terms2.default.terms.getTermsDone, onGetTermsDone), (0, _defineProperty3.default)(_redux$handleActions, _terms2.default.terms.getTermDetailsInit, function (state, _ref) {
    var payload = _ref.payload;
    return (0, _extends3.default)({}, state, {
      getTermDetailsFailure: false,
      loadingDetailsForTermId: payload,
      details: null,
      termId: payload
    });
  }), (0, _defineProperty3.default)(_redux$handleActions, _terms2.default.terms.getTermDetailsDone, onGetTermDetailsDone), (0, _defineProperty3.default)(_redux$handleActions, _terms2.default.terms.getDocuSignUrlInit, function (state, _ref2) {
    var payload = _ref2.payload;
    return (0, _extends3.default)({}, state, {
      getDocuSignUrlFailure: false,
      loadingDocuSignUrl: payload,
      docuSignUrl: '',
      templateId: payload
    });
  }), (0, _defineProperty3.default)(_redux$handleActions, _terms2.default.terms.getDocuSignUrlDone, onGetDocuSignUrlDone), (0, _defineProperty3.default)(_redux$handleActions, _terms2.default.terms.agreeTermInit, function (state, _ref3) {
    var payload = _ref3.payload;
    return (0, _extends3.default)({}, state, {
      agreeTermFailure: false,
      agreeingTerm: payload
    });
  }), (0, _defineProperty3.default)(_redux$handleActions, _terms2.default.terms.agreeTermDone, onAgreeTermDone), (0, _defineProperty3.default)(_redux$handleActions, _terms2.default.terms.checkStatusInit, function (state) {
    return (0, _extends3.default)({}, state, {
      checkingStatus: true
    });
  }), (0, _defineProperty3.default)(_redux$handleActions, _terms2.default.terms.checkStatusDone, onCheckStatusDone), _redux$handleActions), _lodash2.default.defaults(initialState, {
    terms: [],
    selectedTerm: null
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @param {Object} options={} Optional. Options object for initial state.
 * @param {String} [options.auth.tokenV2=''] The V2 auth token
 * @param {String} [options.auth.tokenV3=''] The V3 auth token
 * @param {String} [options.terms.entity.type=''] The terms entity type:
 *  - `challenge`
 *  - `community`
 *  - `reviewOpportunity`
 * @param {String} [options.terms.entity.id=''] The terms entity id
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var entityType = _lodash2.default.get(options, 'terms.entity.type');
  var entityId = _lodash2.default.get(options, 'terms.entity.id');

  if (entityType && entityId) {
    var entity = options.terms.entity;

    var tokens = {
      tokenV2: _lodash2.default.get(options.auth, 'tokenV2'),
      tokenV3: _lodash2.default.get(options.auth, 'tokenV3')
    };
    return _topcoderReactUtils.redux.resolveAction(_terms2.default.terms.getTermsDone(entity, tokens)).then(function (termsDoneAction) {
      // we have to init first, otherwise results will be ignored by onGetTermsDone
      var state = onGetTermsInit({}, _terms2.default.terms.getTermsInit(entity));
      state = onGetTermsDone(state, termsDoneAction);

      return create(state);
    });
  }

  return _promise2.default.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
exports.default = create();

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _tcAccounts = __webpack_require__(46);

var _direct = __webpack_require__(104);

var _direct2 = _interopRequireDefault(_direct);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _errors = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module "reducers.direct"
 * @desc Reducer for handling the results of Direct-related actions.
 * @todo Document state segment structure.
 */

var ERROR_MSG_GET_USER_PROJECTS_WITHOUT_AUTH_TOKEN = 'Cannot get user projects without auth token';

/**
 * Drops out all data and cancels any ongoing data loading related to this
 * reducer.
 * @param {Object} state
 * @return {Object} New state.
 */
function onDropAll(state) {
  return (0, _extends3.default)({}, state, {
    loadingProjectDetailsForId: 0,
    loadingProjectsForUsername: '',
    projectDetails: {},
    projects: []
  });
}

/**
 * Inits loading of the specified project, cancelling the ongoing loading of
 * project details, if any.
 * @param {Object} state
 * @param {Object} action Its payload is the projectId.
 * @return {Object} New state.
 */
function onGetProjectDetailsInit(state, _ref) {
  var payload = _ref.payload;

  return (0, _extends3.default)({}, state, {
    loadingProjectDetailsForId: payload
  });
}

/**
 * Stores loaded project details to the state.
 * @param {Object} state
 * @param {Object} action Its payload is the project details object.
 * @return {Object} New state.
 */
function onGetProjectDetailsDone(state, _ref2) {
  var error = _ref2.error,
      payload = _ref2.payload;

  if (error) {
    _logger2.default.error('Failed to load project details', payload);
    throw payload;
  }
  if (payload.project.projectId !== state.loadingProjectDetailsForId) {
    return state;
  }
  return (0, _extends3.default)({}, state, {
    loadingProjectDetailsForId: 0,
    projectDetails: payload
  });
}

/**
 * Handler for the GET_PROJECT_PERMISSIONS_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetProjectPermissionsInit(state, _ref3) {
  var payload = _ref3.payload;

  var projectPermissions = (0, _extends3.default)({}, state.projectPermissions, {
    loadingForProjectId: payload
  });
  return (0, _extends3.default)({}, state, { projectPermissions: projectPermissions });
}

/**
 * Handler for the GET_PROJECT_PERMISSIONS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetProjectPermissionsDone(state, _ref4) {
  var error = _ref4.error,
      payload = _ref4.payload;

  if (error) {
    (0, _errors.fireErrorMessage)('Failed to load project permissions', '');
    _logger2.default.error('Failed to load project permissions', payload);
  }
  var permissions = payload.permissions,
      projectId = payload.projectId;

  if (projectId !== state.projectPermissions.loadingForProjectId) return state;
  var projectPermissions = {
    loadingForProjectId: 0,
    permissions: permissions,
    projectId: projectId,
    timestamp: Date.now()
  };
  return (0, _extends3.default)({}, state, { projectPermissions: projectPermissions });
}

/**
 * Handles initialization of projects loading.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetUserProjectsInit(state, _ref5) {
  var tokenV3 = _ref5.payload;

  if (!tokenV3) {
    _logger2.default.error(ERROR_MSG_GET_USER_PROJECTS_WITHOUT_AUTH_TOKEN);
    throw new Error(ERROR_MSG_GET_USER_PROJECTS_WITHOUT_AUTH_TOKEN);
  }
  return (0, _extends3.default)({}, state, {
    loadingProjectsForUsername: (0, _tcAccounts.decodeToken)(tokenV3).handle
  });
}

/**
 * Handles the result of projects loading.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetUserProjectsDone(state, _ref6) {
  var error = _ref6.error,
      payload = _ref6.payload;

  if (error) {
    _logger2.default.error(payload);
    throw payload;
  }
  var projects = payload.projects,
      tokenV3 = payload.tokenV3;

  if (!tokenV3) {
    _logger2.default.error(ERROR_MSG_GET_USER_PROJECTS_WITHOUT_AUTH_TOKEN);
    throw new Error(ERROR_MSG_GET_USER_PROJECTS_WITHOUT_AUTH_TOKEN);
  }
  if ((0, _tcAccounts.decodeToken)(tokenV3).handle !== state.loadingProjectsForUsername) {
    return state;
  }
  return (0, _extends3.default)({}, state, {
    loadingProjectsForUsername: '',
    projects: projects.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    })
  });
}

/**
 * Creates a new Direct reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Direct reducer.
 */
function create() {
  var _handleActions;

  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var a = _direct2.default.direct;
  return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, a.dropAll, onDropAll), (0, _defineProperty3.default)(_handleActions, a.getProjectDetailsInit, onGetProjectDetailsInit), (0, _defineProperty3.default)(_handleActions, a.getProjectDetailsDone, onGetProjectDetailsDone), (0, _defineProperty3.default)(_handleActions, a.getProjectPermissionsInit, onGetProjectPermissionsInit), (0, _defineProperty3.default)(_handleActions, a.getProjectPermissionsDone, onGetProjectPermissionsDone), (0, _defineProperty3.default)(_handleActions, a.getUserProjectsInit, onGetUserProjectsInit), (0, _defineProperty3.default)(_handleActions, a.getUserProjectsDone, onGetUserProjectsDone), _handleActions), _lodash2.default.defaults(initialState, {
    /* If we are loading details of some project, this field holds the project
     * ID; zero otherwise. */
    loadingProjectDetailsForId: 0,

    /* Holds username of the user which projects are being loaded; empty
     * string if nothing is being loaded at the moment. */
    loadingProjectsForUsername: '',

    /* Holds details of some project, or an empty object. */
    projectDetails: {},

    projectPermissions: {
      loadingForProjectId: 0,
      permissions: [],
      projectId: 0,
      timestamp: 0
    },

    /* Holds the array of loaded projects. */
    projects: []
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  return _promise2.default.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
exports.default = create();

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _values = __webpack_require__(228);

var _values2 = _interopRequireDefault(_values);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _groups = __webpack_require__(106);

var _groups2 = _interopRequireDefault(_groups);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Private. Given two user group maps, it adds to "dst" the root group from
 * "src" (specified by "rootId"), and all its descendant groups. Any groups
 * in "src" not related to the sub-tree of the root group descendants are
 * not added to "dst".
 * This function mutates "dst"!
 * @param {Object} dst
 * @param {Object} src
 * @param {String} rootId
 */
function mergeGroupTree(dst, src, rootId) {
  var root = src[rootId];
  dst[rootId] = root; // eslint-disable-line no-param-reassign
  if (root.subGroupIds) {
    root.subGroupIds.forEach(function (id) {
      return mergeGroupTree(dst, src, id);
    });
  }
}

/**
 * Removes from the state all loaded user groups, and cancels any on-going
 * loading of user groups.
 * @param {Object} state
 * @return {Object} New state.
 */
/**
 * @module "reducers.groups"
 * @desc
 * This reducer handles information related to user-groups.
 *
 * Corresponding segment of the Redux state is designed to have the following
 * fields:
 *
 * groups {Object} - Holds loaded information about user groups. Keys of this
 * object are group IDs, and the values are group data object. To keep the state
 * flat, and our code efficient; for any group that has sub-groups, subGroups
 * field is removed, while subGroupsIds {String[]} field is added, and each
 * sub group data object is added to the groups object.
 *
 * loading {Object} - Holds IDs of the groups being loaded. Removing ID from
 * this object will result in silent discard of the data loaded by the
 * corresponding GROUPS/GET_DONE action; though such functionality does
 * not look really necessary at the moment, thus we do not provide an
 * action to really cancel group loading.
 * @todo Document state segment structure better.
 */

function onDropGroups(state) {
  return (0, _extends3.default)({}, state, { groups: {}, loading: {} });
}

/**
 * Initiates the loading of data on the specified groups.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetGroupsInit(state, _ref) {
  var payload = _ref.payload;

  var groupIds = _lodash2.default.isArray(payload) ? payload : [payload];
  var loading = _lodash2.default.clone(state.loading);
  groupIds.forEach(function (id) {
    loading[id] = true;
  });
  return (0, _extends3.default)({}, state, { loading: loading });
}

/**
 * Finalizes the loading of data on the specified groups.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetGroupsDone(state, action) {
  var groups = _lodash2.default.clone(state.groups);
  var loading = _lodash2.default.clone(state.loading);
  var loaded = action.payload;
  (0, _values2.default)(loaded).forEach(function (_ref2) {
    var id = _ref2.id;

    if (loading[id]) {
      mergeGroupTree(groups, loaded, id);
      delete loading[id];
    }
  });
  return (0, _extends3.default)({}, state, { groups: groups, loading: loading });
}

/**
 * Creates a new Groups reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Groups reducer.
 */
function create(initialState) {
  var _handleActions;

  var a = _groups2.default.groups;
  return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, a.dropGroups, onDropGroups), (0, _defineProperty3.default)(_handleActions, a.getGroupsInit, onGetGroupsInit), (0, _defineProperty3.default)(_handleActions, a.getGroupsDone, onGetGroupsDone), _handleActions), _lodash2.default.defaults(initialState ? _lodash2.default.clone(initialState) : {}, {
    groups: {},
    loading: {}
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  return _promise2.default.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
exports.default = create();

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(229), __esModule: true };

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(230);
module.exports = __webpack_require__(3).Object.values;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(5);
var $values = __webpack_require__(231)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(26);
var toIObject = __webpack_require__(25);
var isEnum = __webpack_require__(34).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _toConsumableArray2 = __webpack_require__(115);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends4 = __webpack_require__(4);

var _extends5 = _interopRequireDefault(_extends4);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _initialErrorIconStat; /**
                            * @module "reducers.errors"
                            * @desc Redux Reducer for application-wide error handling.
                            *
                            * Description:
                            *   Implements state reducers for application-wide error handling.
                            * @todo Document state segment structure.
                            */


exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _errors = __webpack_require__(69);

var _errors2 = _interopRequireDefault(_errors);

var _errors3 = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialErrorIconState = (_initialErrorIconStat = {}, (0, _defineProperty3.default)(_initialErrorIconStat, _errors3.ERROR_ICON_TYPES.NETWORK, []), (0, _defineProperty3.default)(_initialErrorIconStat, _errors3.ERROR_ICON_TYPES.API, []), _initialErrorIconStat);

/**
 * Creates a new Errors reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @param {Object} mergeReducers Optional. Reducers to merge.
 * @return {Function} Errors reducer.
 */
function create(initialState) {
  var _handleActions;

  var a = _errors2.default.errors;

  return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, a.clearError, function (state) {
    return (0, _extends5.default)({}, state, { alerts: state.alerts.slice(1) });
  }), (0, _defineProperty3.default)(_handleActions, a.newError, function (state, _ref) {
    var payload = _ref.payload;
    return (0, _extends5.default)({}, state, {
      alerts: [].concat((0, _toConsumableArray3.default)(state.alerts), [{ title: payload.title, details: payload.details }])
    });
  }), (0, _defineProperty3.default)(_handleActions, a.clearAllErrorIcons, function (state) {
    return (0, _extends5.default)({}, state, {
      icons: initialErrorIconState
    });
  }), (0, _defineProperty3.default)(_handleActions, a.setErrorIcon, function (state, _ref2) {
    var _ref2$payload = _ref2.payload,
        id = _ref2$payload.id,
        title = _ref2$payload.title,
        message = _ref2$payload.message;
    return (0, _extends5.default)({}, state, { icons: (0, _extends5.default)({}, state.icons, (0, _defineProperty3.default)({}, id, [].concat((0, _toConsumableArray3.default)(state.icons[id]), [{ title: title, message: message }]))) });
  }), (0, _defineProperty3.default)(_handleActions, a.clearErrorIcon, function (state, _ref3) {
    var id = _ref3.payload.id;
    return (0, _extends5.default)({}, state, { icons: (0, _extends5.default)({}, state.icons, (0, _defineProperty3.default)({}, id, [])) });
  }), _handleActions), _lodash2.default.defaults(initialState, { alerts: [], icons: initialErrorIconState }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  return _promise2.default.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
exports.default = create();

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(234), __esModule: true };

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(28);
__webpack_require__(235);
module.exports = __webpack_require__(3).Array.from;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(21);
var $export = __webpack_require__(5);
var toObject = __webpack_require__(35);
var call = __webpack_require__(82);
var isArrayIter = __webpack_require__(83);
var toLength = __webpack_require__(40);
var createProperty = __webpack_require__(236);
var getIterFn = __webpack_require__(58);

$export($export.S + $export.F * !__webpack_require__(88)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(16);
var createDesc = __webpack_require__(32);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(42);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _topcoderReactUtils = __webpack_require__(7);

var _challenge = __webpack_require__(107);

var _challenge2 = _interopRequireDefault(_challenge);

var _smp = __webpack_require__(70);

var _smp2 = _interopRequireDefault(_smp);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _errors = __webpack_require__(20);

var _mySubmissionsManagement = __webpack_require__(116);

var _mySubmissionsManagement2 = _interopRequireDefault(_mySubmissionsManagement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Handles CHALLENGE/GET_DETAILS_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state
 */
/**
 * @module "reducers.challenge"
 * @desc Reducer for {@link module:actions.challenge} actions.
 *
 * State segment managed by this reducer has the following strcuture:
 * @todo Document the structure.
 */

function onGetDetailsInit(state, action) {
  var challengeId = action.payload;
  return state.details && _lodash2.default.toString(state.details.id) !== challengeId ? (0, _extends3.default)({}, state, {
    fetchChallengeFailure: false,
    loadingDetailsForChallengeId: challengeId,
    details: null
  }) : (0, _extends3.default)({}, state, {
    fetchChallengeFailure: false,
    loadingDetailsForChallengeId: challengeId
  });
}

/**
 * Handles CHALLENGE/GET_DETAILS_DONE action.
 * Note, that it silently discards received details if the ID of received
 * challenge mismatches the one stored in loadingDetailsForChallengeId field
 * of the state.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetDetailsDone(state, action) {
  if (action.error) {
    _logger2.default.error('Failed to get challenge details!', action.payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to load the challenge', 'Please, try again a bit later');
    return (0, _extends3.default)({}, state, {
      fetchChallengeFailure: action.error,
      loadingDetailsForChallengeId: ''
    });
  }

  var details = action.payload;
  if (_lodash2.default.toString(details.id) !== state.loadingDetailsForChallengeId) {
    return state;
  }

  return (0, _extends3.default)({}, state, {
    details: details,
    fetchChallengeFailure: false,
    loadingDetailsForChallengeId: ''
  });
}

/**
 * Handles CHALLENGE/GET_SUBMISSION_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetSubmissionsInit(state, action) {
  return (0, _extends3.default)({}, state, {
    loadingSubmissionsForChallengeId: action.payload,
    mySubmissions: { challengeId: '', v2: null }
  });
}

/**
 * Handles challengeActions.fetchSubmissionsDone action.
 * @param {Object} state Previous state.
 * @param {Object} action Action.
 */
function onGetSubmissionsDone(state, action) {
  if (action.error) {
    _logger2.default.error('Failed to get user\'s submissions for the challenge', action.payload);
    return (0, _extends3.default)({}, state, {
      loadingSubmissionsForChallengeId: '',
      mySubmissions: { challengeId: '', v2: null }
    });
  }

  var _action$payload = action.payload,
      challengeId = _action$payload.challengeId,
      submissions = _action$payload.submissions;

  if (challengeId !== state.loadingSubmissionsForChallengeId) return state;

  return (0, _extends3.default)({}, state, {
    loadingSubmissionsForChallengeId: '',
    mySubmissions: { challengeId: challengeId, v2: submissions }
  });
}

/**
 * Handles challengeActions.fetchCheckpointsDone action.
 * @param {Object} state Previous state.
 * @param {Object} action Action.
 */
function onFetchCheckpointsDone(state, action) {
  if (action.error) {
    return (0, _extends3.default)({}, state, {
      loadingCheckpoints: false
    });
  }
  if (state.details && state.details.id === action.payload.challengeId) {
    return (0, _extends3.default)({}, state, {
      checkpoints: action.payload.checkpoints,
      loadingCheckpoints: false
    });
  }
  return state;
}

/**
 * Handles CHALLENGE/LOAD_RESULTS_INIT action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onLoadResultsInit(state, _ref) {
  var payload = _ref.payload;

  return (0, _extends3.default)({}, state, { loadingResultsForChallengeId: payload });
}

/**
 * Handles CHALLENGE/LOAD_RESULTS_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onLoadResultsDone(state, action) {
  if (action.payload.challengeId !== state.loadingResultsForChallengeId) {
    return state;
  }
  if (action.error) {
    _logger2.default.error(action.payload);
    return (0, _extends3.default)({}, state, {
      loadingResultsForChallengeId: '',
      results: null,
      resultsLoadedForChallengeId: ''
    });
  }
  return (0, _extends3.default)({}, state, {
    loadingResultsForChallengeId: '',
    results: action.payload.results,
    resultsLoadedForChallengeId: action.payload.challengeId
  });
}

/**
 * Handles CHALLENGE/REGISTER_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onRegisterDone(state, action) {
  if (action.error) {
    _logger2.default.error('Failed to register for the challenge!', action.payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to register for the challenge!');
    return (0, _extends3.default)({}, state, { registering: false });
  }
  /* As a part of registration flow we silently update challenge details,
   * reusing for this purpose the corresponding action handler. Thus, we
   * should also reuse corresponding reducer to generate proper state. */
  return onGetDetailsDone((0, _extends3.default)({}, state, {
    registering: false,
    loadingDetailsForChallengeId: _lodash2.default.toString(state.details.id)
  }), action);
}

/**
 * Handles CHALLENGE/UNREGISTER_DONE action.
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
function onUnregisterDone(state, action) {
  if (action.error) {
    _logger2.default.error('Failed to register for the challenge!', action.payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to unregister for the challenge!');
    return (0, _extends3.default)({}, state, { unregistering: false });
  }
  /* As a part of unregistration flow we silently update challenge details,
   * reusing for this purpose the corresponding action handler. Thus, we
   * should also reuse corresponding reducer to generate proper state. */
  return onGetDetailsDone((0, _extends3.default)({}, state, {
    unregistering: false,
    loadingDetailsForChallengeId: _lodash2.default.toString(state.details.id)
  }), action);
}

/**
 * Handles CHALLENGE/UPDATE_CHALLENGE_INIT.
 * @param {Object} state Old state.
 * @param {Object} actions Action.
 * @return {Object} New state.
 */
function onUpdateChallengeInit(state, _ref2) {
  var payload = _ref2.payload;

  return (0, _extends3.default)({}, state, { updatingChallengeUuid: payload });
}

/**
 * Handles CHALLENGE/UPDATE_CHALLENGE_DONE.
 * @param {Object} state Old state.
 * @param {Object} actions Action.
 * @return {Object} New state.
 */
function onUpdateChallengeDone(state, _ref3) {
  var error = _ref3.error,
      payload = _ref3.payload;

  if (error) {
    (0, _errors.fireErrorMessage)('Failed to save the challenge!', '');
    _logger2.default.error('Failed to save the challenge', payload);
    return state;
  }
  if (payload.uuid !== state.updatingChallengeUuid) return state;

  /* Due to the normalization of challenge APIs responses done when a challenge
   * is loaded, many pieces of our code expect different information in a format
   * different from API v3 response, thus if we just save entire payload.res
   * into the Redux state segment, it will break our app. As a rapid fix, let's
   * just save only the data which are really supposed to be updated in the
   * current use case (editing of challenge specs). */
  var res = _lodash2.default.pick(payload.res, ['detailedRequirements', 'introduction', 'round1Introduction', 'round2Introduction', 'submissionGuidelines']);

  return (0, _extends3.default)({}, state, {
    details: (0, _extends3.default)({}, state.details, res),
    updatingChallengeUuid: ''
  });
}

/**
 * Creates a new Challenge reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Challenge reducer.
 */
function create(initialState) {
  var _handleActions;

  var a = _challenge2.default.challenge;
  return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, a.dropCheckpoints, function (state) {
    return (0, _extends3.default)({}, state, { checkpoints: null });
  }), (0, _defineProperty3.default)(_handleActions, a.dropResults, function (state) {
    return (0, _extends3.default)({}, state, { results: null });
  }), (0, _defineProperty3.default)(_handleActions, a.getDetailsInit, onGetDetailsInit), (0, _defineProperty3.default)(_handleActions, a.getDetailsDone, onGetDetailsDone), (0, _defineProperty3.default)(_handleActions, a.getSubmissionsInit, onGetSubmissionsInit), (0, _defineProperty3.default)(_handleActions, a.getSubmissionsDone, onGetSubmissionsDone), (0, _defineProperty3.default)(_handleActions, _smp2.default.smp.deleteSubmissionDone, function (state, _ref4) {
    var payload = _ref4.payload;
    return (0, _extends3.default)({}, state, {
      mySubmissions: (0, _extends3.default)({}, state.mySubmissions, {
        v2: state.mySubmissions.v2.filter(function (subm) {
          return subm.submissionId !== payload;
        })
      })
    });
  }), (0, _defineProperty3.default)(_handleActions, a.registerInit, function (state) {
    return (0, _extends3.default)({}, state, { registering: true });
  }), (0, _defineProperty3.default)(_handleActions, a.registerDone, onRegisterDone), (0, _defineProperty3.default)(_handleActions, a.unregisterInit, function (state) {
    return (0, _extends3.default)({}, state, { unregistering: true });
  }), (0, _defineProperty3.default)(_handleActions, a.unregisterDone, onUnregisterDone), (0, _defineProperty3.default)(_handleActions, a.loadResultsInit, onLoadResultsInit), (0, _defineProperty3.default)(_handleActions, a.loadResultsDone, onLoadResultsDone), (0, _defineProperty3.default)(_handleActions, a.fetchCheckpointsInit, function (state) {
    return (0, _extends3.default)({}, state, {
      checkpoints: null,
      loadingCheckpoints: true
    });
  }), (0, _defineProperty3.default)(_handleActions, a.fetchCheckpointsDone, onFetchCheckpointsDone), (0, _defineProperty3.default)(_handleActions, a.updateChallengeInit, onUpdateChallengeInit), (0, _defineProperty3.default)(_handleActions, a.updateChallengeDone, onUpdateChallengeDone), _handleActions), _lodash2.default.defaults(initialState, {
    details: null,
    loadingCheckpoints: false,
    loadingDetailsForChallengeId: '',
    loadingResultsForChallengeId: '',
    mySubmissions: {},
    checkpoints: null,
    registering: false,
    results: null,
    resultsLoadedForChallengeId: '',
    unregistering: false,
    updatingChallengeUuid: ''
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 *
 * @param {Object} options={} Optional. Factory options.
 * @param {String} [options.auth.tokenV2=''] Optional. Topcoder v2 auth token.
 * @param {String} [options.auth.tokenV3=''] Optional. Topcoder v3 auth token.
 * @param {String} [options.challenge.challengeDetails.id=''] Optional. ID of
 *  the challenge to load details for.
 * @param {Boolean} [options.challenge.challengeDetails.mySubmission=false]
 *  Optional. The flag indicates whether load my submission.
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /* Server-side rendering of Submission Management Page. */

  /* TODO: This shares some common logic with the next "if" block, which
   * should be re-used there. */
  /* TODO: For completely server-side rendering it is also necessary to load
   * terms, etc. */

  var tokens = {
    tokenV2: _lodash2.default.get(options.auth, 'tokenV2'),
    tokenV3: _lodash2.default.get(options.auth, 'tokenV3')
  };

  var state = {};
  var challengeId = _lodash2.default.get(options, 'challenge.challengeDetails.id');
  var mySubmission = _lodash2.default.get(options, 'challenge.challengeDetails.mySubmission');

  if (challengeId && !mySubmission) {
    return _topcoderReactUtils.redux.resolveAction(_challenge2.default.challenge.getDetailsDone(challengeId, tokens.tokenV3, tokens.tokenV2)).then(function (details) {
      var track = _lodash2.default.get(details, 'payload.track', '').toLowerCase();
      var checkpointsPromise = track === 'design' ? _topcoderReactUtils.redux.resolveAction(_challenge2.default.challenge.fetchCheckpointsDone(tokens.tokenV2, challengeId)) : null;
      var resultsPromise = _lodash2.default.get(details, 'payload.status', '') === 'COMPLETED' ? _topcoderReactUtils.redux.resolveAction(_challenge2.default.challenge.loadResultsDone(tokens, challengeId, track)) : null;
      return _promise2.default.all([details, checkpointsPromise, resultsPromise]);
    }).then(function (_ref5) {
      var _ref6 = (0, _slicedToArray3.default)(_ref5, 3),
          details = _ref6[0],
          checkpoints = _ref6[1],
          results = _ref6[2];

      state = (0, _extends3.default)({}, state, {
        loadingCheckpoints: true,
        loadingDetailsForChallengeId: challengeId,
        loadingResultsForChallengeId: challengeId
      });
      state = onGetDetailsDone(state, details);
      if (checkpoints) state = onFetchCheckpointsDone(state, checkpoints);
      if (results) state = onLoadResultsDone(state, results);
      return state;
    }).then(function (res) {
      return _topcoderReactUtils.redux.combineReducers(create(res), { mySubmissionsManagement: _mySubmissionsManagement2.default });
    });
  }

  if (challengeId && mySubmission) {
    return _promise2.default.all([_topcoderReactUtils.redux.resolveAction(_challenge2.default.challenge.getDetailsDone(challengeId, tokens.tokenV3, tokens.tokenV2)), _topcoderReactUtils.redux.resolveAction(_challenge2.default.challenge.getSubmissionsDone(challengeId, tokens.tokenV2))]).then(function (_ref7) {
      var _ref8 = (0, _slicedToArray3.default)(_ref7, 2),
          challenge = _ref8[0],
          submissions = _ref8[1];

      state = (0, _extends3.default)({}, state, {
        loadingSubmissionsForChallengeId: challengeId,
        loadingDetailsForChallengeId: challengeId
      });
      state = onGetDetailsDone(state, challenge);
      return onGetSubmissionsDone(state, submissions);
    }).then(function (res) {
      return _topcoderReactUtils.redux.combineReducers(create(res), { mySubmissionsManagement: _mySubmissionsManagement2.default });
    });
  }

  /* Otherwise this part of Redux state is initialized empty. */
  return _promise2.default.resolve(_topcoderReactUtils.redux.combineReducers(create(state), { mySubmissionsManagement: _mySubmissionsManagement2.default }));
}

/**
 * @static
 * @member default
 * @desc Reducer with default intial state.
 */
exports.default = _topcoderReactUtils.redux.combineReducers(create(), { mySubmissionsManagement: _mySubmissionsManagement2.default });

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = __webpack_require__(115);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _profile = __webpack_require__(73);

var _profile2 = _interopRequireDefault(_profile);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _errors = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Handles PROFILE/GET_ACHIEVEMENTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetAchievementsDone(state, _ref) {
  var payload = _ref.payload,
      error = _ref.error;

  if (error) {
    return (0, _extends3.default)({}, state, { loadingError: true });
  }

  return (0, _extends3.default)({}, state, {
    achievements: payload.Achievements,
    copilot: payload.copilot,
    country: payload.country,
    loadingError: false
  });
}

/**
 * Handles PROFILE/GET_EXTERNAL_ACCOUNTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
/**
 * @module "reducers.profile"
 * @desc Reducer for Profile API data
 * @todo Document reducer state structure.
 */
function onGetExternalAccountsDone(state, _ref2) {
  var payload = _ref2.payload,
      error = _ref2.error;

  if (error) {
    return (0, _extends3.default)({}, state, { loadingError: true });
  }

  return (0, _extends3.default)({}, state, {
    externalAccounts: payload
  });
}

/**
 * Handles PROFILE/GET_EXTERNAL_LINKS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetExternalLinksDone(state, _ref3) {
  var payload = _ref3.payload,
      error = _ref3.error;

  if (error) {
    return (0, _extends3.default)({}, state, { loadingError: true });
  }

  return (0, _extends3.default)({}, state, {
    externalLinks: payload
  });
}

/**
 * Handles PROFILE/GET_INFO_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetInfoDone(state, _ref4) {
  var payload = _ref4.payload,
      error = _ref4.error;

  if (error) {
    return (0, _extends3.default)({}, state, { loadingError: true });
  }

  return (0, _extends3.default)({}, state, { info: payload, loadingError: false });
}

/**
 * Handles PROFILE/GET_SKILLS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetSkillsDone(state, _ref5) {
  var payload = _ref5.payload,
      error = _ref5.error;

  if (error) {
    return (0, _extends3.default)({}, state, { loadingError: true });
  }

  return (0, _extends3.default)({}, state, { skills: payload.skills, loadingError: false });
}

/**
 * Handles PROFILE/GET_STATS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetStatsDone(state, _ref6) {
  var payload = _ref6.payload,
      error = _ref6.error;

  if (error) {
    return (0, _extends3.default)({}, state, { loadingError: true });
  }

  return (0, _extends3.default)({}, state, { stats: payload, loadingError: false });
}

/**
 * Handles PROFILE/GET_ACTIVE_CHALLENGES_COUNT_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetActiveChallengesCountDone(state, _ref7) {
  var payload = _ref7.payload,
      error = _ref7.error;

  if (error) {
    return (0, _extends3.default)({}, state, { loadingError: true });
  }

  return (0, _extends3.default)({}, state, { activeChallengesCount: payload, loadingError: false });
}

/**
 * Handles PROFILE/GET_LINKED_ACCOUNTS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetLinkedAccountsDone(state, _ref8) {
  var payload = _ref8.payload,
      error = _ref8.error;

  if (error) {
    return (0, _extends3.default)({}, state, { loadingError: true });
  }

  return (0, _extends3.default)({}, state, { linkedAccounts: payload.profiles, loadingError: false });
}

/**
 * Handles PROFILE/GET_CREDENTIAL_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetCredentialDone(state, _ref9) {
  var payload = _ref9.payload,
      error = _ref9.error;

  if (error) {
    return (0, _extends3.default)({}, state, { loadingError: true });
  }

  return (0, _extends3.default)({}, state, { credential: payload.credential, loadingError: false });
}

/**
 * Handles PROFILE/GET_EMAIL_PREFERENCES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onGetEmailPreferencesDone(state, _ref10) {
  var payload = _ref10.payload,
      error = _ref10.error;

  if (error) {
    return (0, _extends3.default)({}, state, { loadingError: true });
  }

  return (0, _extends3.default)({}, state, { emailPreferences: payload.subscriptions, loadingError: false });
}

/**
 * Handles PROFILE/UPLOAD_PHOTO_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onUploadPhotoDone(state, _ref11) {
  var payload = _ref11.payload,
      error = _ref11.error;

  var newState = (0, _extends3.default)({}, state, { uploadingPhoto: false });

  if (error) {
    _logger2.default.error('Failed to upload user photo', payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to upload photo!');
    return newState;
  }

  if (!newState.info || newState.info.handle !== payload.handle) {
    return newState;
  }

  return (0, _extends3.default)({}, newState, {
    info: (0, _extends3.default)({}, newState.info, {
      photoURL: payload.photoURL
    })
  });
}

/**
 * Handles PROFILE/DELETE_PHOTO_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onDeletePhotoDone(state, _ref12) {
  var payload = _ref12.payload,
      error = _ref12.error;

  var newState = (0, _extends3.default)({}, state, { deletingPhoto: false });

  if (error) {
    _logger2.default.error('Failed to delete user photo', payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to delete photo!');
    return newState;
  }

  if (!newState.info || newState.info.handle !== payload.handle) {
    return newState;
  }

  return (0, _extends3.default)({}, newState, {
    info: (0, _extends3.default)({}, newState.info, {
      photoURL: null
    })
  });
}

/**
 * Handles PROFILE/UPDATE_PROFILE_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onUpdateProfileDone(state, _ref13) {
  var payload = _ref13.payload,
      error = _ref13.error;

  var newState = (0, _extends3.default)({}, state, { updatingProfile: false });

  if (error) {
    _logger2.default.error('Failed to update user profile', payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to update user profile!');
    return newState;
  }

  if (!newState.info || newState.info.handle !== payload.handle) {
    return newState;
  }

  return (0, _extends3.default)({}, newState, {
    info: (0, _extends3.default)({}, newState.info, payload)
  });
}

/**
 * Handles PROFILE/ADD_SKILL_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onAddSkillDone(state, _ref14) {
  var payload = _ref14.payload,
      error = _ref14.error;

  var newState = (0, _extends3.default)({}, state, { addingSkill: false });

  if (error) {
    _logger2.default.error('Failed to add user skill', payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to add user skill!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle) {
    return newState;
  }

  return (0, _extends3.default)({}, newState, {
    skills: payload.skills
  });
}

/**
 * Handles PROFILE/HIDE_SKILL_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onHideSkillDone(state, _ref15) {
  var payload = _ref15.payload,
      error = _ref15.error;

  var newState = (0, _extends3.default)({}, state, { hidingSkill: false });

  if (error) {
    _logger2.default.error('Failed to remove user skill', payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to remove user skill!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle) {
    return newState;
  }

  return (0, _extends3.default)({}, newState, {
    skills: payload.skills
  });
}

/**
 * Handles PROFILE/ADD_WEB_LINK_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onAddWebLinkDone(state, _ref16) {
  var payload = _ref16.payload,
      error = _ref16.error;

  var newState = (0, _extends3.default)({}, state, { addingWebLink: false });

  if (error) {
    _logger2.default.error('Failed to add web link', payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to add web link!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle || !payload.data) {
    return newState;
  }

  return (0, _extends3.default)({}, newState, {
    externalLinks: [].concat((0, _toConsumableArray3.default)(newState.externalLinks), [payload.data])
  });
}

/**
 * Handles PROFILE/DELETE_WEB_LINK_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onDeleteWebLinkDone(state, _ref17) {
  var payload = _ref17.payload,
      error = _ref17.error;

  var newState = (0, _extends3.default)({}, state, { deletingWebLink: false });

  if (error) {
    _logger2.default.error('Failed to delete web link', payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to delete web link!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle || !payload.data) {
    return newState;
  }

  return (0, _extends3.default)({}, newState, {
    externalLinks: _lodash2.default.filter(newState.externalLinks, function (el) {
      return el.key !== payload.data.key;
    })
  });
}

/**
 * Handles PROFILE/LINK_EXTERNAL_ACCOUNT_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onLinkExternalAccountDone(state, _ref18) {
  var payload = _ref18.payload,
      error = _ref18.error;

  var newState = (0, _extends3.default)({}, state, { linkingExternalAccount: false });

  if (error) {
    _logger2.default.error('Failed to link external account', payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to link external account!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle || !payload.data) {
    return newState;
  }

  return (0, _extends3.default)({}, newState, {
    linkedAccounts: [].concat((0, _toConsumableArray3.default)(newState.linkedAccounts), [payload.data])
  });
}

/**
 * Handles PROFILE/UNLINK_EXTERNAL_ACCOUNT_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onUnlinkExternalAccountDone(state, _ref19) {
  var payload = _ref19.payload,
      error = _ref19.error;

  var newState = (0, _extends3.default)({}, state, { unlinkingExternalAccount: false });

  if (error) {
    _logger2.default.error('Failed to unlink external account', payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to unlink external account!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle) {
    return newState;
  }

  return (0, _extends3.default)({}, newState, {
    linkedAccounts: _lodash2.default.filter(newState.linkedAccounts, function (el) {
      return el.providerType !== payload.providerType;
    })
  });
}

/**
 * Handles PROFILE/SAVE_EMAIL_PREFERENCES_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onSaveEmailPreferencesDone(state, _ref20) {
  var payload = _ref20.payload,
      error = _ref20.error;

  var newState = (0, _extends3.default)({}, state, { savingEmailPreferences: false });

  if (error) {
    _logger2.default.error('Failed to save email preferences', payload);
    (0, _errors.fireErrorMessage)('ERROR: Failed to save email preferences!');
    return newState;
  }

  if (newState.profileForHandle !== payload.handle || !payload.data) {
    return newState;
  }

  return (0, _extends3.default)({}, newState, {
    emailPreferences: payload.data.subscriptions
  });
}

/**
 * Handles PROFILE/UPDATE_PASSWORD_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
function onUpdatePasswordDone(state, _ref21) {
  var payload = _ref21.payload,
      error = _ref21.error;

  var newState = (0, _extends3.default)({}, state, { updatingPassword: false });

  if (error) {
    _logger2.default.error('Failed to update password', payload);
  }
  return newState;
}

/**
 * Creates a new Profile reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Profile reducer.
 */
function create(initialState) {
  var _handleActions;

  var a = _profile2.default.profile;
  return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, a.loadProfile, function (state, action) {
    return (0, _extends3.default)({}, state, { profileForHandle: action.payload });
  }), (0, _defineProperty3.default)(_handleActions, a.getAchievementsInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_handleActions, a.getAchievementsDone, onGetAchievementsDone), (0, _defineProperty3.default)(_handleActions, a.getExternalAccountsInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_handleActions, a.getExternalAccountsDone, onGetExternalAccountsDone), (0, _defineProperty3.default)(_handleActions, a.getExternalLinksInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_handleActions, a.getExternalLinksDone, onGetExternalLinksDone), (0, _defineProperty3.default)(_handleActions, a.getInfoInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_handleActions, a.getInfoDone, onGetInfoDone), (0, _defineProperty3.default)(_handleActions, a.getSkillsInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_handleActions, a.getSkillsDone, onGetSkillsDone), (0, _defineProperty3.default)(_handleActions, a.getStatsInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_handleActions, a.getStatsDone, onGetStatsDone), (0, _defineProperty3.default)(_handleActions, a.getLinkedAccountsInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_handleActions, a.getLinkedAccountsDone, onGetLinkedAccountsDone), (0, _defineProperty3.default)(_handleActions, a.getActiveChallengesCountInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_handleActions, a.getActiveChallengesCountDone, onGetActiveChallengesCountDone), (0, _defineProperty3.default)(_handleActions, a.uploadPhotoInit, function (state) {
    return (0, _extends3.default)({}, state, { uploadingPhoto: true });
  }), (0, _defineProperty3.default)(_handleActions, a.uploadPhotoDone, onUploadPhotoDone), (0, _defineProperty3.default)(_handleActions, a.deletePhotoInit, function (state) {
    return (0, _extends3.default)({}, state, { deletingPhoto: true });
  }), (0, _defineProperty3.default)(_handleActions, a.deletePhotoDone, onDeletePhotoDone), (0, _defineProperty3.default)(_handleActions, a.updateProfileInit, function (state) {
    return (0, _extends3.default)({}, state, { updatingProfile: true });
  }), (0, _defineProperty3.default)(_handleActions, a.updateProfileDone, onUpdateProfileDone), (0, _defineProperty3.default)(_handleActions, a.addSkillInit, function (state) {
    return (0, _extends3.default)({}, state, { addingSkill: true });
  }), (0, _defineProperty3.default)(_handleActions, a.addSkillDone, onAddSkillDone), (0, _defineProperty3.default)(_handleActions, a.hideSkillInit, function (state) {
    return (0, _extends3.default)({}, state, { hidingSkill: true });
  }), (0, _defineProperty3.default)(_handleActions, a.hideSkillDone, onHideSkillDone), (0, _defineProperty3.default)(_handleActions, a.addWebLinkInit, function (state) {
    return (0, _extends3.default)({}, state, { addingWebLink: true });
  }), (0, _defineProperty3.default)(_handleActions, a.addWebLinkDone, onAddWebLinkDone), (0, _defineProperty3.default)(_handleActions, a.deleteWebLinkInit, function (state) {
    return (0, _extends3.default)({}, state, { deletingWebLink: true });
  }), (0, _defineProperty3.default)(_handleActions, a.deleteWebLinkDone, onDeleteWebLinkDone), (0, _defineProperty3.default)(_handleActions, a.linkExternalAccountInit, function (state) {
    return (0, _extends3.default)({}, state, { linkingExternalAccount: true });
  }), (0, _defineProperty3.default)(_handleActions, a.linkExternalAccountDone, onLinkExternalAccountDone), (0, _defineProperty3.default)(_handleActions, a.unlinkExternalAccountInit, function (state) {
    return (0, _extends3.default)({}, state, { unlinkingExternalAccount: true });
  }), (0, _defineProperty3.default)(_handleActions, a.unlinkExternalAccountDone, onUnlinkExternalAccountDone), (0, _defineProperty3.default)(_handleActions, a.getCredentialInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_handleActions, a.getCredentialDone, onGetCredentialDone), (0, _defineProperty3.default)(_handleActions, a.getEmailPreferencesInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_handleActions, a.getEmailPreferencesDone, onGetEmailPreferencesDone), (0, _defineProperty3.default)(_handleActions, a.saveEmailPreferencesInit, function (state) {
    return (0, _extends3.default)({}, state, { savingEmailPreferences: true });
  }), (0, _defineProperty3.default)(_handleActions, a.saveEmailPreferencesDone, onSaveEmailPreferencesDone), (0, _defineProperty3.default)(_handleActions, a.updatePasswordInit, function (state) {
    return (0, _extends3.default)({}, state, { updatingPassword: true });
  }), (0, _defineProperty3.default)(_handleActions, a.updatePasswordDone, onUpdatePasswordDone), _handleActions), _lodash2.default.defaults(initialState, {
    achievements: null,
    copilot: false,
    country: '',
    info: null,
    loadingError: false,
    skills: null,
    stats: null
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @returns {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  return _promise2.default.resolve(create());
}

/* Reducer with the default initial state. */
exports.default = create();

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends8 = __webpack_require__(4);

var _extends9 = _interopRequireDefault(_extends8);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _members = __webpack_require__(109);

var _members2 = _interopRequireDefault(_members);

var _errors = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Drops information about a member.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onDrop(state, _ref) {
  var payload = _ref.payload;

  if (!state[payload]) return state;
  return _lodash2.default.omit(state, payload);
}

/**
 * Drops all loaded information on members.
 * @return {Object} New state.
 */
/**
 * @module "reducers.members"
 * @desc Reducer for the Redux store segment that holds members data.
 * @todo Document state segment structure.
 */

function onDropAll() {
  return {};
}

/**
 * Inits the loading of member achievements.
 * @param {Object} state
 * @param {String} action.handle
 * @param {String} action.uuid
 * @return {Object} New state.
 */
function onGetAchievementsInit(state, action) {
  var _action$payload = action.payload,
      handle = _action$payload.handle,
      uuid = _action$payload.uuid;

  var res = state[handle];
  res = res ? _lodash2.default.clone(res) : {};
  res.achievements = { loadingUuid: uuid };
  return (0, _extends9.default)({}, state, (0, _defineProperty3.default)({}, handle, res));
}

/**
 * Finalizes the loading of member achievements.
 * @param {Object} state
 * @param {Object} error
 * @param {Array} payload.data
 * @param {String} payload.handle
 * @param {String} payload.uuid
 * @return {Object} New state.
 */
function onGetAchievementsDone(state, _ref2) {
  var error = _ref2.error,
      payload = _ref2.payload;

  if (error) {
    _logger2.default.error('Failed to load member achievements', payload);
    (0, _errors.fireErrorMessage)('Failed to load member achievements');
    return state;
  }

  var data = payload.data,
      handle = payload.handle,
      uuid = payload.uuid;

  if (uuid !== _lodash2.default.get(state[handle], 'achievements.loadingUuid')) return state;
  return (0, _extends9.default)({}, state, (0, _defineProperty3.default)({}, handle, (0, _extends9.default)({}, state[handle], {
    achievements: { data: data, timestamp: Date.now() }
  })));
}

/**
 * Initializes the loading of member financial information.
 * @param {Object} state
 * @param {String} action.payload.handle
 * @param {String} action.payload.uuid
 * @return {Object} New state.
 */
function onGetFinancesInit(state, action) {
  var _action$payload2 = action.payload,
      handle = _action$payload2.handle,
      uuid = _action$payload2.uuid;

  var envelop = (0, _extends9.default)({}, state[handle] || {}, {
    finances: {
      loadingUuid: uuid,
      timestamp: 0
    }
  });
  return (0, _extends9.default)({}, state, (0, _defineProperty3.default)({}, handle, envelop));
}

/**
 * Finalizes a pending loading of member financial information.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetFinancesDone(state, _ref3) {
  var error = _ref3.error,
      payload = _ref3.payload;

  if (error) {
    _logger2.default.error('Failed to get user financial info', payload);
    (0, _errors.fireErrorMessage)('Failed to get user financial info', '');
    return state;
  }

  var data = payload.data,
      handle = payload.handle,
      uuid = payload.uuid;

  if (uuid !== _lodash2.default.get(state[handle], 'finances.loadingUuid')) return state;
  return (0, _extends9.default)({}, state, (0, _defineProperty3.default)({}, handle, (0, _extends9.default)({}, state[handle], {
    finances: {
      data: data,
      loadingUuid: '',
      timestamp: Date.now()
    }
  })));
}

/**
 * Inits the loading of member stats.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetStatsInit(state, action) {
  var _action$payload3 = action.payload,
      handle = _action$payload3.handle,
      uuid = _action$payload3.uuid;

  var res = state[handle];
  res = res ? _lodash2.default.clone(res) : {};
  res.stats = { loadingUuid: uuid };
  return (0, _extends9.default)({}, state, (0, _defineProperty3.default)({}, handle, res));
}

/**
 * Finalizes the loading of member stats.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetStatsDone(state, _ref4) {
  var error = _ref4.error,
      payload = _ref4.payload;

  if (error) {
    _logger2.default.error('Failed to get member stats', payload);
    (0, _errors.fireErrorMessage)('Failed to get member stats', '');
    return state;
  }

  var data = payload.data,
      handle = payload.handle,
      uuid = payload.uuid;

  if (uuid !== _lodash2.default.get(state[handle], 'stats.loadingUuid')) return state;
  return (0, _extends9.default)({}, state, (0, _defineProperty3.default)({}, handle, (0, _extends9.default)({}, state[handle], {
    stats: { data: data, timestamp: Date.now() }
  })));
}

/**
 * Creates a new Members reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Members reducer.
 */
function create() {
  var _handleActions;

  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var a = _members2.default.members;
  return (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, a.drop, onDrop), (0, _defineProperty3.default)(_handleActions, a.dropAll, onDropAll), (0, _defineProperty3.default)(_handleActions, a.getAchievementsInit, onGetAchievementsInit), (0, _defineProperty3.default)(_handleActions, a.getAchievementsDone, onGetAchievementsDone), (0, _defineProperty3.default)(_handleActions, a.getFinancesInit, onGetFinancesInit), (0, _defineProperty3.default)(_handleActions, a.getFinancesDone, onGetFinancesDone), (0, _defineProperty3.default)(_handleActions, a.getStatsInit, onGetStatsInit), (0, _defineProperty3.default)(_handleActions, a.getStatsDone, onGetStatsDone), _handleActions), initialState);
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  return _promise2.default.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
exports.default = create();

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _reduxActions = __webpack_require__(2);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _lookup = __webpack_require__(113);

var _lookup2 = _interopRequireDefault(_lookup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Handles LOOKUP/GET_APPROVED_SKILLS action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
/**
 * @module "reducers.lookup"
 * @desc Reducer for {@link module:actions.lookup} actions.
 *
 * State segment managed by this reducer has the following structure:
 * @param {Array} approvedSkills='' approved skill tags.
 */
function onGetApprovedSkills(state, _ref) {
  var payload = _ref.payload,
      error = _ref.error;

  if (error) {
    _logger2.default.error('Failed to get approved skill tags', payload);
    return (0, _extends3.default)({}, state, { loadingApprovedSkillsError: true });
  }

  return (0, _extends3.default)({}, state, {
    loadingApprovedSkillsError: false,
    approvedSkills: payload
  });
}

/**
 * Creates a new Lookup reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Lookup reducer.
 */
function create() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var a = _lookup2.default.lookup;
  return (0, _reduxActions.handleActions)((0, _defineProperty3.default)({}, a.getApprovedSkills, onGetApprovedSkills), _lodash2.default.defaults(initialState, {
    approvedSkills: []
  }));
}

/**
 * Factory which creates a new reducer.
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  return _promise2.default.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
exports.default = create();

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _topcoderReactUtils = __webpack_require__(7);

var _logger = __webpack_require__(13);

var _logger2 = _interopRequireDefault(_logger);

var _memberTasks = __webpack_require__(110);

var _memberTasks2 = _interopRequireDefault(_memberTasks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Drops all tasks and cancels the ongoing loading operation, if it is pending.
 * @param {Object} state
 * @return {Object} New state.
 */
/**
 * @module "reduces.member-tasks"
 * @desc Member tasks reducer.
 * @todo Document state segment structure.
 */
/* global alert */

function onDropAll(state) {
  return (0, _extends3.default)({}, state, {
    allLoaded: false,
    lastRequestedPageNum: -1,
    loadingUuid: '',
    tasks: [],
    timestamp: 0
  });
}

/**
 * Stores into the state meta data about the initiated loading operation.
 * This will effectively cancel the already pending loading operation, if any.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetInit(state, _ref) {
  var payload = _ref.payload;

  return (0, _extends3.default)({}, state, {
    lastRequestedPageNum: payload.pageNum,
    loadingUuid: payload.uuid
  });
}

/**
 * Handles the actual result of the loading operation.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onGetDone(state, _ref2) {
  var error = _ref2.error,
      payload = _ref2.payload;

  /* Bails out in case of error. */
  if (error) {
    _logger2.default.error(payload);
    /* NOTE: For now, using alert to inform about failures is kind of fine. */
    /* eslint-disable no-alert */
    if (_topcoderReactUtils.isomorphy.isClientSide()) alert('Failed to load member tasks');
    /* eslint-enable no-alert */
    return state;
  }

  /* Silently ignores the action, if it has unexpected UUID. */
  var projectId = payload.projectId,
      tasks = payload.tasks,
      uuid = payload.uuid;

  if (uuid !== state.loadingUuid) return state;

  /* Generates the map of old tasks, and the count of old tasks related to
   * the specified project. */
  var taskMap = {};
  state.tasks.forEach(function (task) {
    taskMap[task.id] = task;
  });

  /* Merges newly loaded tasks into the map of old ones. */
  tasks.forEach(function (task) {
    taskMap[task.id] = task;
  });

  /* If the first page of tasks has been loaded, updates its timestamp. */
  var timestamps = state.timestamps;

  if (!state.lastRequestedPageNum) {
    timestamps = _lodash2.default.clone(timestamps);
    timestamps[projectId] = Date.now();
  }

  return (0, _extends3.default)({}, state, {
    allLoaded: tasks.length < _memberTasks.PAGE_SIZE,
    loadingUuid: '',
    tasks: _lodash2.default.values(taskMap),
    timestamps: timestamps
  });
}

/**
 * Creates a new Member tasks reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Member tasks reducer.
 */
function create() {
  var _redux$handleActions;

  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var a = _memberTasks2.default.memberTasks;
  return _topcoderReactUtils.redux.handleActions((_redux$handleActions = {}, (0, _defineProperty3.default)(_redux$handleActions, a.dropAll, onDropAll), (0, _defineProperty3.default)(_redux$handleActions, a.getInit, onGetInit), (0, _defineProperty3.default)(_redux$handleActions, a.getDone, onGetDone), _redux$handleActions), _lodash2.default.defaults(initialState, {
    /* It is set true when a request to load tasks loads less tasks than a full
     * task page size. It is reset to false each time the page number 0 starts
     * to load. If you load task pages sequentially from the very first page,
     * with the same projectId and user specified by auth token, this flag
     * signals you when there is no more tasks to load. */
    allLoaded: false,

    /* Holds the number of the last requested task page. */
    lastRequestedPageNum: -1,

    /* Equals to the loading operation UUID when the result is pending; equals
     * empty string when nothing is being loaded. */
    loadingUuid: '',

    /* The list of tasks loaded so far. For better performance and user
     * experience it may contain tasks related to projects queried before;
     * be sure to filter it according to your needs. */
    tasks: [],

    /* Keys of this object are projectIds, and values keep the timestamps
     * corresponding to latest updates of the first page of tasks related
     * to those projects. */
    timestamps: {}
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  return _promise2.default.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default initial state.
 */
exports.default = create();

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(1);

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

exports.factory = factory;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _topcoderReactUtils = __webpack_require__(7);

var _reviewOpportunity = __webpack_require__(111);

var _reviewOpportunity2 = _interopRequireDefault(_reviewOpportunity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a list of unique terms ids required for the open review roles
 * with an agreed field
 *
 * @param {Object} details Review Opportuny details from API
 * @return {Array} List of unique terms
 */
function buildRequiredTermsList(details) {
  var roles = details.payments.map(function (payment) {
    return payment.role;
  });

  var requiredTerms = _lodash2.default.uniqBy(details.challenge.terms
  // Sometimes roles such as Primary Reviewer have no directly equal
  // terms entry.  Include the plain Reviewer terms when present as a back-up.
  .filter(function (term) {
    return term.role === 'Reviewer' || _lodash2.default.includes(roles, term.role);
  }).map(function (term) {
    return _lodash2.default.pick(term, ['termsOfUseId', 'agreed', 'title']);
  }), function (term) {
    return term.termsOfUseId;
  });

  return requiredTerms || [];
}

/**
 * Handles REVIEW_OPPORTUNITY/GET__DETAILS_DONE action.
 * @param {Object} state
 * @param {Object} action Payload will be JSON from api call
 * @return {Object} New state
 */
/**
 * @module "reducers.reviewOpportunity"
 * @desc Reducer for state.reviewOpportunity
 * @todo Document state structure.
 */

function onGetDetailsDone(state, _ref) {
  var payload = _ref.payload,
      error = _ref.error;

  if (error) {
    return (0, _extends3.default)({}, state, {
      authError: true,
      isLoadingDetails: false
    });
  }

  return (0, _extends3.default)({}, state, {
    details: payload,
    isLoadingDetails: false,
    requiredTerms: buildRequiredTermsList(payload)
  });
}

/**
 * Creates a new Review opportunity reducer with the specified initial state.
 * @param {Object} initialState Optional. Initial state.
 * @return {Function} Review opportunity reducer.
 */
function create(initialState) {
  var _redux$handleActions;

  var a = _reviewOpportunity2.default.reviewOpportunity;
  return _topcoderReactUtils.redux.handleActions((_redux$handleActions = {}, (0, _defineProperty3.default)(_redux$handleActions, a.cancelApplicationsInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_redux$handleActions, a.cancelApplicationsDone, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_redux$handleActions, a.getDetailsInit, function (state) {
    return (0, _extends3.default)({}, state, { isLoadingDetails: true });
  }), (0, _defineProperty3.default)(_redux$handleActions, a.getDetailsDone, onGetDetailsDone), (0, _defineProperty3.default)(_redux$handleActions, a.submitApplicationsInit, function (state) {
    return state;
  }), (0, _defineProperty3.default)(_redux$handleActions, a.submitApplicationsDone, function (state) {
    return state;
  }), _redux$handleActions), _lodash2.default.defaults(initialState, {
    authError: false,
    details: null,
    isLoadingDetails: false,
    requiredTerms: []
  }));
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * given options object, if specified (for server-side rendering). If options
 * object is not specified, it creates just the default reducer. Accepted options are:
 * @param {Object} options={} Optional. Options object for initial state.
 * @param {String} [options.auth.tokenV2=''] The V2 auth token
 * @param {String} [options.auth.tokenV3=''] The V3 auth token
 * @param {String} [options.reviewOpportunity.challenge.id=''] The challenge id.
 * @return {Promise}
 * @resolves {Function(state, action): state} New reducer.
 */
function factory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var challengeId = _lodash2.default.get(options, 'reviewOpportunity.challenge.id');

  if (challengeId) {
    var tokens = {
      tokenV2: _lodash2.default.get(options.auth, 'tokenV2'),
      tokenV3: _lodash2.default.get(options.auth, 'tokenV3')
    };

    var a = _reviewOpportunity2.default.reviewOpportunity;
    return _topcoderReactUtils.redux.resolveAction(a.getDetailsDone(challengeId, tokens.tokenV3)).then(function (_ref2) {
      var error = _ref2.error,
          payload = _ref2.payload;

      var initialState = {};
      initialState.details = error ? null : payload;
      initialState.requiredTerms = error ? [] : buildRequiredTermsList(payload);
      create(initialState);
    });
  }

  return _promise2.default.resolve(create());
}

/**
 * @static
 * @member default
 * @desc Reducer with default state.
 */
exports.default = create();

/***/ })
/******/ ]);
});