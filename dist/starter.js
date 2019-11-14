(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("starter", [], factory);
	else if(typeof exports === 'object')
		exports["starter"] = factory();
	else
		root["starter"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar request_1 = __webpack_require__(/*! ./request */ \"./src/request.ts\");\nvar default_1 = /** @class */ (function () {\n    function default_1(url) {\n        this.report(url);\n    }\n    default_1.prototype.report = function (url) {\n        return __awaiter(this, void 0, void 0, function () {\n            var res;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, request_1.default(url)];\n                    case 1:\n                        res = _a.sent();\n                        console.log(res);\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return default_1;\n}());\nexports.default = default_1;\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuICAgICAgICB0aGlzLnJlcG9ydCh1cmwpXG4gICAgfVxuICAgIHB1YmxpYyBhc3luYyByZXBvcnQodXJsKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QodXJsKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/request.ts":
/*!************************!*\
  !*** ./src/request.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = (function (url, data, method, sync, headers) {\n    if (data === void 0) { data = {}; }\n    if (method === void 0) { method = 'GET'; }\n    if (sync === void 0) { sync = false; }\n    if (headers === void 0) { headers = {}; }\n    return new Promise(function (r, rj) {\n        var xmlhttp = new XMLHttpRequest();\n        xmlhttp.onreadystatechange = function () {\n            if (xmlhttp.readyState === 4) {\n                if (xmlhttp.status === 200) {\n                    r(JSON.parse(xmlhttp.responseText));\n                }\n                else {\n                    rj(new Error('Problem retrieving data:' + xmlhttp.statusText));\n                    console.error('Problem retrieving data:' + xmlhttp.statusText);\n                }\n            }\n        };\n        if (method === 'GET' && Object.keys(data).length > 0) {\n            url = url + (url.indexOf('?') > -1 ? '&' : '?') + stringify(data);\n        }\n        xmlhttp.open(method, url, !!sync);\n        for (var x in headers) {\n            if (headers.hasOwnProperty(x)) {\n                xmlhttp.setRequestHeader(x, headers[x]);\n            }\n        }\n        xmlhttp.send(method === 'GET' || Object.keys(data).length === 0\n            ? null\n            : stringify(data));\n    });\n});\nfunction stringify(data) {\n    var res = [];\n    for (var x in data) {\n        if (data.hasOwnProperty(x)) {\n            res.push(x + \"=\" + encodeURIComponent(data[x]));\n        }\n    }\n    return res.join('&');\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVxdWVzdC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXIvLi9zcmMvcmVxdWVzdC50cz8yNDBhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChcbiAgICB1cmwsXG4gICAgZGF0YSA9IHt9LFxuICAgIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgPSAnR0VUJyxcbiAgICBzeW5jID0gZmFsc2UsXG4gICAgaGVhZGVycyA9IHt9XG4pID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHIsIHJqKSA9PiB7XG4gICAgICAgIGNvbnN0IHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgICAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh4bWxodHRwLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHIoSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmooXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1Byb2JsZW0gcmV0cmlldmluZyBkYXRhOicgKyB4bWxodHRwLnN0YXR1c1RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1Byb2JsZW0gcmV0cmlldmluZyBkYXRhOicgKyB4bWxodHRwLnN0YXR1c1RleHRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnICYmIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHVybCA9IHVybCArICh1cmwuaW5kZXhPZignPycpID4gLTEgPyAnJicgOiAnPycpICsgc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICB4bWxodHRwLm9wZW4obWV0aG9kLCB1cmwsICEhc3luYylcbiAgICAgICAgZm9yIChjb25zdCB4IGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KHgpKSB7XG4gICAgICAgICAgICAgICAgeG1saHR0cC5zZXRSZXF1ZXN0SGVhZGVyKHgsIGhlYWRlcnNbeF0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB4bWxodHRwLnNlbmQoXG4gICAgICAgICAgICBtZXRob2QgPT09ICdHRVQnIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgIDogc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgIClcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoZGF0YSkge1xuICAgIGNvbnN0IHJlczogc3RyaW5nW10gPSBbXVxuICAgIGZvciAoY29uc3QgeCBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KHgpKSB7XG4gICAgICAgICAgICByZXMucHVzaChgJHt4fT0ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhW3hdKX1gKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXMuam9pbignJicpXG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/request.ts\n");

/***/ })

/******/ });
});