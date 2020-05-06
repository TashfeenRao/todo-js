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

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst action = (() => {\n  const editStatus = (todo) => {\n    if (todo.status === false) {\n      todo.status = true;\n    } else {\n      todo.status = false;\n    }\n  };\n\n  const updateTodo = (todo, title, date, desc) => {\n    todo.title = title;\n    todo.date = date;\n    todo.desc = desc;\n  };\n\n  const displayStatus = (todo) => {\n    if (todo.status === true) {\n      return 'Completed';\n    }\n\n    return 'Not completed';\n  };\n\n\n  return { editStatus, displayStatus, updateTodo };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (action);\n\n\n//# sourceURL=webpack:///./src/action.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ \"./src/action.js\");\n/* eslint-disable radix */\n/* eslint-disable no-use-before-define */\n/* eslint-disable no-unused-vars */\n\n\n\n\n\nconst dom = (() => {\n  function displayTodo() {\n    const listContainer = document.querySelector('.list-container');\n    const todo = _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos;\n    const li = document.createElement('li');\n    li.id = 'todo-item';\n    todo.forEach(fetch);\n    function fetch(todo) {\n      li.dataset.id = `${todo.id}`;\n      li.innerHTML = `\n    <h2>${todo.title}</h2>\n    <strong id=\"project-name\">${todo.projects()[0].name}</strong>\n    <strong id=\"status\" style=\"background-color: rgb(245, 106, 106);\"\n      >${_action__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayStatus(todo)}</strong\n    >\n    <strong id=\"date\">${todo.date}</strong>`;\n      listContainer.appendChild(li);\n    }\n    dom.displaySingleTodo();\n  }\n\n  const displayAllProject = () => {\n    const projectElement = document.querySelector('.projects-container');\n    projectElement.innerHTML = '';\n    _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projects.forEach(lisproject);\n    function lisproject(proj) {\n      const p = document.createElement('p');\n      p.innerHTML = `${proj.name}`;\n      projectElement.appendChild(p);\n    }\n  };\n\n  function displayProjectDropDown() {\n    const listproject = document.querySelector('.project');\n    listproject.innerHTML = '';\n    const proj = _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projects;\n    proj.forEach(getProjects);\n    function getProjects(p) {\n      const option = document.createElement('option');\n      option.innerHTML = `<option dataAtribute =\"${p.id}\">${p.name}</option>`;\n      listproject.appendChild(option);\n    }\n  }\n\n  function createTodo(title, date, desc, project) {\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, date, desc, project);\n    displayTodo();\n  }\n\n  function createProject(name) {\n    const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n    displayProjectDropDown();\n    displayAllProject();\n  }\n\n  function clearDom() {\n    document.getElementById('todo-title').value = '';\n    document.getElementById('todo-desc').value = '';\n    document.getElementById('todo-date').value = '';\n    document.getElementById('project-name').value = '';\n  }\n\n  function listentToDom() {\n    const formTodo = document.getElementById('form-todo');\n    const formProject = document.getElementById('form-project');\n\n    formTodo.addEventListener('submit', (n) => {\n      n.preventDefault();\n      const title = document.getElementById('todo-title').value;\n      const desc = document.getElementById('todo-desc').value;\n      const date = document.getElementById('todo-date').value;\n      const project = document.querySelector('.project').options.selectedIndex;\n      createTodo(title, date, desc, _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projects[project]);\n      clearDom();\n    });\n\n    formProject.addEventListener('submit', (p) => {\n      p.preventDefault();\n      const name = document.getElementById('project-name').value;\n      createProject(name);\n      clearDom();\n    });\n  }\n\n  function displaySingleTodo() {\n    const todoLi = document.querySelectorAll('#todo-item');\n    const title = document.getElementById('single-title');\n    const desc = document.getElementById('desc');\n    const date = document.querySelector('.mini-data-date');\n    const status = document.getElementById('single-status');\n    todoLi.forEach((elem) => {\n      elem.addEventListener('click', () => {\n        const str = elem.getAttribute('data-id');\n        const id = parseInt(str) - 1;\n        title.innerHTML = _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[id].title;\n        desc.innerHTML = _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[id].desc;\n        date.innerHTML = _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[id].date;\n        status.innerHTML = _action__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayStatus(_todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[id]);\n        editTodo(_todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[id]);\n      });\n    });\n  }\n\n  const editTodo = (todo) => {\n    const editBtn = document.getElementById('edit');\n    editBtn.addEventListener('click', () => {\n      const todoForm = document.getElementById('form-todo');\n      todoForm.innerHTML = '';\n      const form = document.createElement('form');\n      form.innerHTML = `  <h4> Edit TODO</h4>\n      <div class=\"form-input edit-form\">\n        <label for=\"todo-title\">Title</label>\n        <input type=\"text\" id=\"todo-title\" value=\"${todo.title}\" required />\n      </div>\n\n      <div class=\"form-input\">\n        <label for=\"todo-desc\">Description</label>\n        <input type=\"text-area\" id=\"todo-desc\" value=\"${todo.desc}\" required />\n      </div>\n\n      <div class=\"form-input\">\n        <label for=\"completed\">Date</label>\n        <input type=\"date\" id=\"todo-date\" value=\"${todo.date}\" required/>\n      </div>\n\n      <div class=\"form-input\">\n        <label for=\"completed\">Completed?</label>\n        <input type=\"checkbox\" id=\"todo-status\" />\n      </div>\n      <div class=\"form-input\">\n        <button id=\"editbtn\" class=\"todo-btn\" type=\"submit\">Edit</button>\n      </div>`;\n      todoForm.appendChild(form);\n      listenForEdit(todo.id);\n    });\n  };\n\n  const listenForEdit = (todo) => {\n    const form = document.querySelector('.edit-form');\n    form.addEventListener('submit', (n) => {\n      n.preventDefault();\n      const title = document.getElementById('todo-title').value;\n      const desc = document.getElementById('todo-desc').value;\n      const date = document.getElementById('todo-date').value;\n      const project = document.querySelector('.project').options.selectedIndex;\n      _action__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateTodo(todo, title, date, desc);\n      displayTodo();\n      clearDom();\n    });\n  };\n\n  return {\n    displayTodo,\n    displaySingleTodo,\n    createProject,\n    createTodo,\n    listentToDom,\n    displayProjectDropDown,\n    displayAllProject,\n    listenForEdit,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dom);\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* eslint-disable no-unused-vars */\n\n\n\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listentToDom();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* eslint-disable no-plusplus */\n\n\nlet projecId = 0;\n\nclass Project {\n  constructor(name) {\n    this.id = ++projecId;\n    this.name = name;\n    _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.push(this);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/project.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* eslint-disable no-plusplus */\n\n\nlet todoId = 0;\n\nclass Todo {\n  constructor(title, date, desc, project) {\n    this.id = ++todoId;\n    this.title = title;\n    this.date = date;\n    this.desc = desc;\n    this.status = false;\n    if (project) {\n      this.setProject(project);\n    }\n    _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos.push(this);\n  }\n\n  setProject(project) {\n    this.projectId = project.id;\n  }\n\n  projects() {\n    return _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.filter(\n      (project) => project.id === this.projectId,\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst todoList = {\n  projects: [],\n  todos: [],\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoList);\n\n\n//# sourceURL=webpack:///./src/todoList.js?");

/***/ })

/******/ });