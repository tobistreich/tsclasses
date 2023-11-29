/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar class1_1 = __webpack_require__(/*! ./class1 */ \"./class1.js\");\nvar class2_1 = __webpack_require__(/*! ./class2 */ \"./class2.js\");\nvar instance1 = new class1_1.Class1();\ninstance1.method1();\nvar instance2 = new class2_1.Class2();\ninstance2.method2();\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./class1.js":
/*!*******************!*\
  !*** ./class1.js ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Class1 = void 0;\nvar Class1 = /** @class */ (function () {\n    function Class1() {\n    }\n    Class1.prototype.method1 = function () {\n        console.log(\"Method 1 from Class 1\");\n    };\n    return Class1;\n}());\nexports.Class1 = Class1;\n\n\n//# sourceURL=webpack:///./class1.js?");

/***/ }),

/***/ "./class2.js":
/*!*******************!*\
  !*** ./class2.js ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Class2 = void 0;\nvar Class2 = /** @class */ (function () {\n    function Class2() {\n    }\n    Class2.prototype.method2 = function () {\n        console.log(\"Method 2 from Class 2\");\n    };\n    return Class2;\n}());\nexports.Class2 = Class2;\n\n\n//# sourceURL=webpack:///./class2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;