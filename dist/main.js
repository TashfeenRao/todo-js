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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n\r\nconst dom = (() => {\r\n  function displayTodo() {\r\n    const listContainer = document.querySelector('.list-container');\r\n    const todo = _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos;\r\n    const li = document.createElement('li')\r\n    li.id = 'todo-item';\r\n    todo.forEach(Fetch);\r\n    function Fetch(todo) {\r\n      li.innerHTML = `\r\n    <h2>${todo.title}</h2>\r\n    <strong id=\"project-name\">Project name</strong>\r\n    <strong id=\"status\" style=\"background-color: rgb(245, 106, 106);\"\r\n      >in progress</strong\r\n    >\r\n    <strong id=\"date\">date</strong>`;\r\n      listContainer.appendChild(li);\r\n    }\r\n  }\r\n\r\n  function createTodo(title, desc, date) {\r\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, desc, date);\r\n    displayTodo();\r\n    console.log(todo);\r\n  }\r\n\r\n  function createProject(name) {\r\n    const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\r\n    console.log(project);\r\n  }\r\n\r\n  function clearDom() {\r\n    document.getElementById('todo-title').value = '';\r\n    document.getElementById('todo-desc').value = '';\r\n    document.getElementById('todo-date').value = '';\r\n    document.getElementById('project-name').value = '';\r\n  }\r\n\r\n  function listentToDom() {\r\n    const formTodo = document.getElementById('form-todo');\r\n    const formProject = document.getElementById('form-project');\r\n\r\n    formTodo.addEventListener('submit', (n) => {\r\n      n.preventDefault();\r\n      const title = document.getElementById('todo-title').value;\r\n      const desc = document.getElementById('todo-desc').value;\r\n      const date = document.getElementById('todo-date').value;\r\n      createTodo(title, desc, date);\r\n      clearDom();\r\n    });\r\n\r\n\r\n    formProject.addEventListener('submit', (p) => {\r\n      p.preventDefault();\r\n      const name = document.getElementById('project-name').value;\r\n      createProject(name);\r\n      clearDom();\r\n    });\r\n  }\r\n\r\n  function displaySingleTodo() {}\r\n  return {\r\n    displayTodo,\r\n    displaySingleTodo,\r\n    createProject,\r\n    createTodo,\r\n    listentToDom,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dom);\r\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayTodo();\r\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listentToDom();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* eslint-disable no-plusplus */\r\n\r\n\r\nlet projecId = 0;\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.id = ++projecId;\r\n    this.name = name;\r\n    _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.push(this);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* eslint-disable no-plusplus */\r\n\r\n\r\nlet todoId = 0;\r\n\r\nclass Todo {\r\n  constructor(title, date, desc, project) {\r\n    this.id = ++todoId;\r\n    this.title = title;\r\n    this.date = date;\r\n    this.desc = desc;\r\n    this.status = false;\r\n    if (project) {\r\n      this.setProject(project);\r\n    }\r\n    _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos.push(this);\r\n  }\r\n\r\n  setProject(project) {\r\n    this.projectId = project.id;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\r\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst todoList = { projects: [], todos: [] };\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoList);\n\n//# sourceURL=webpack:///./src/todoList.js?");

/***/ })

/******/ });