/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./myFn.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./myFn.js":
/*!*****************!*\
  !*** ./myFn.js ***!
  \*****************/
/*! exports provided: myFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myFn", function() { return myFn; });
/* harmony import */ var unfetch_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unfetch/polyfill */ "./node_modules/unfetch/polyfill/polyfill.mjs");

var myFn = function myFn(a) {
  return a * a;
};

/***/ }),

/***/ "./node_modules/unfetch/polyfill/polyfill.mjs":
/*!****************************************************!*\
  !*** ./node_modules/unfetch/polyfill/polyfill.mjs ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.mjs */ "./node_modules/unfetch/src/index.mjs");

if (!self.fetch) self.fetch = _src_index_mjs__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./node_modules/unfetch/src/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/unfetch/src/index.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (url, options) {
  options = options || {};
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open(options.method || 'get', url, true);

    for (let i in options.headers) {
      request.setRequestHeader(i, options.headers[i]);
    }

    request.withCredentials = options.credentials == 'include';

    request.onload = () => {
      resolve(response());
    };

    request.onerror = reject;
    request.send(options.body || null);

    function response() {
      let keys = [],
          all = [],
          headers = {},
          header;
      request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (m, key, value) => {
        keys.push(key = key.toLowerCase());
        all.push([key, value]);
        header = headers[key];
        headers[key] = header ? `${header},${value}` : value;
      });
      return {
        ok: (request.status / 100 | 0) == 2,
        // 200-299
        status: request.status,
        statusText: request.statusText,
        url: request.responseURL,
        clone: response,
        text: () => Promise.resolve(request.responseText),
        json: () => Promise.resolve(request.responseText).then(JSON.parse),
        blob: () => Promise.resolve(new Blob([request.response])),
        headers: {
          keys: () => keys,
          entries: () => all,
          get: n => headers[n.toLowerCase()],
          has: n => n.toLowerCase() in headers
        }
      };
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map