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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* eslint-disable radix */\n/* eslint-disable no-unused-vars */\n\n\n\n\nconst action = (() => {\n  const editStatus = (todo) => {\n    if (todo.status === false) {\n      todo.status = true;\n    } else {\n      todo.status = false;\n    }\n  };\n\n  const updateTodo = (id, title, date, desc) => {\n    const realId = parseInt(id) - 1;\n    _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[realId].title = title;\n    _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[realId].date = date;\n    _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[realId].desc = desc;\n  };\n\n  const displayStatus = (todo) => {\n    if (todo.status === true) {\n      return 'Completed';\n    }\n    return 'Not completed';\n  };\n\n  const createTodo = (title, date, desc, project) => {\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, date, desc, project);\n  };\n\n  const createProject = (name) => {\n    const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n  };\n\n  return {\n    editStatus,\n    displayStatus,\n    updateTodo,\n    createTodo,\n    createProject,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (action);\n\n\n//# sourceURL=webpack:///./src/action.js?");

/***/ }),

/***/ "./src/displayer.js":
/*!**************************!*\
  !*** ./src/displayer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"./src/action.js\");\n/* harmony import */ var _formRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formRenderer */ \"./src/formRenderer.js\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable radix */\n/* eslint-disable no-use-before-define */\n\n\n\nconst displayer = (() => {\n  const displayAllTodos = (todoList) => {\n    const listContainer = document.querySelector('.list-container');\n    listContainer.innerHTML = '';\n    const todo = todoList.todos;\n    const li = document.createElement('li');\n    li.id = 'todo-item';\n    todo.forEach(fetch);\n    function fetch(todo) {\n      li.dataset.id = `${todo.id}`;\n      li.innerHTML = `\n        <h2>${todo.title}</h2>\n        <strong id=\"project-name\">${todo.projects()[0].name}</strong>\n        <strong id=\"status\" style=\"background-color: rgb(245, 106, 106);\"\n          >${_action__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayStatus(todo)}</strong\n        >\n        <strong id=\"date\">${todo.date}</strong>`;\n      listContainer.appendChild(li);\n    }\n    displaySingleTodo(todoList);\n  };\n\n  const displaySingleTodo = (todoList) => {\n    const todoLi = document.querySelectorAll('#todo-item');\n    const title = document.getElementById('single-title');\n    const desc = document.getElementById('desc');\n    const date = document.querySelector('.mini-data-date');\n    const status = document.getElementById('single-status');\n    todoLi.forEach((elem) => {\n      elem.addEventListener('click', () => {\n        const str = elem.getAttribute('data-id');\n        const id = parseInt(str) - 1;\n        title.innerHTML = todoList.todos[id].title;\n        desc.innerHTML = todoList.todos[id].desc;\n        date.innerHTML = todoList.todos[id].date;\n        status.innerHTML = _action__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayStatus(todoList.todos[id]);\n        _formRenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderEditTodo(todoList.todos[id]);\n      });\n    });\n  };\n\n  const displayAllProjects = (todoList) => {\n    const projectElement = document.querySelector('.projects-container');\n    projectElement.innerHTML = '';\n    todoList.projects.forEach(lisproject);\n    function lisproject(proj) {\n      const p = document.createElement('p');\n      p.innerHTML = `${proj.name}`;\n      projectElement.appendChild(p);\n    }\n  };\n\n  function displayProjectDropDown(todoList) {\n    const listproject = document.querySelector('.project');\n    listproject.innerHTML = '';\n    const proj = todoList.projects;\n    proj.forEach(getProjects);\n    function getProjects(p) {\n      const option = document.createElement('option');\n      option.innerHTML = `<option dataAtribute =\"${p.id}\">${p.name}</option>`;\n      listproject.appendChild(option);\n    }\n  }\n\n  return {\n    displayAllTodos,\n    displaySingleTodo,\n    displayAllProjects,\n    displayProjectDropDown,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayer);\n\n\n//# sourceURL=webpack:///./src/displayer.js?");

/***/ }),

/***/ "./src/domListener.js":
/*!****************************!*\
  !*** ./src/domListener.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ \"./src/action.js\");\n/* harmony import */ var _formRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formRenderer */ \"./src/formRenderer.js\");\n/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayer */ \"./src/displayer.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable no-use-before-define */\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n\nconst domListener = (() => {\n  const listenForListProject = () => {\n    const listproject = document.getElementById('project-drop');\n    console.log(listproject);\n    listproject.addEventListener('click', console.log(listproject));\n  };\n\n\n  const ListentForNewTodo = () => {\n    const newTbn = document.getElementById('new-todo-btn');\n    newTbn.addEventListener('click', _formRenderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderNewTodo);\n  };\n\n  const hadleNewTodo = () => {\n    const formTodo = document.getElementById('new-todo-form');\n    formTodo.addEventListener('submit', (n) => {\n      n.preventDefault();\n      const title = document.getElementById('todo-title').value;\n      const desc = document.getElementById('todo-desc').value;\n      const date = document.getElementById('todo-date').value;\n      const project = document.querySelector('.project').options.selectedIndex;\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTodo(title, date, desc, _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[project]);\n      _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllTodos(_todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearTodoForm();\n    });\n  };\n\n  function listentForNewProject() {\n    const formProject = document.getElementById('form-project');\n    formProject.addEventListener('submit', (p) => {\n      p.preventDefault();\n      const name = document.getElementById('project-name').value;\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createProject(name);\n      _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllProjects(_todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearProjectForm();\n    });\n  }\n\n  const listenForEdit = (id) => {\n    const form = document.getElementById('edit-todo-form');\n    form.addEventListener('submit', (n) => {\n      n.preventDefault();\n      const title = document.getElementById('todo-title').value;\n      const desc = document.getElementById('todo-desc').value;\n      const date = document.getElementById('todo-date').value;\n      const project = document.querySelector('.project').options.selectedIndex;\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTodo(id, title, date, desc, _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[project]);\n      _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllTodos(_todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearTodoForm();\n    });\n  };\n\n  return {\n    listentForNewProject,\n    listenForEdit,\n    ListentForNewTodo,\n    hadleNewTodo,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (domListener);\n\n\n//# sourceURL=webpack:///./src/domListener.js?");

/***/ }),

/***/ "./src/formRenderer.js":
/*!*****************************!*\
  !*** ./src/formRenderer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domListener */ \"./src/domListener.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayer */ \"./src/displayer.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nconst formRenderer = (() => {\n  const renderNewTodo = () => {\n    const todoFormContainer = document.getElementById('form-todo');\n    todoFormContainer.innerHTML = '';\n    todoFormContainer.innerHTML = `         <form id=\"new-todo-form\">\n        <h4> NEW TODO</h4>\n        <div class=\"form-input\">\n          <label for=\"todo-title\">Title</label>\n          <input type=\"text\" id=\"todo-title\" value=\"\" required />\n        </div>\n    \n        <div class=\"form-input\">\n          <label for=\"todo-desc\">Description</label>\n          <input type=\"text-area\" id=\"todo-desc\" value=\"\" required />\n        </div>\n    \n        <div class=\"form-input\">\n          <label for=\"completed\">Date</label>\n          <input type=\"date\" id=\"todo-date\" value=\"\" required/>\n        </div>\n    \n        <div class=\"form-input\">\n          <label for=\"project\">Select project for this todo</label>\n          <select class=\"project\" id=\"project-drop\" required>\n    \n          </select>\n        </div>\n    \n        <div class=\"form-input\">\n          <label for=\"completed\">Completed?</label>\n          <input type=\"checkbox\" id=\"todo-status\" />\n        </div>\n        <div class=\"form-input\">\n          <button id=\"saver\" class=\"todo-btn\" type=\"submit\">Save</button>\n        </div>\n      </form>`;\n    _displayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjectDropDown(_todoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    _domListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hadleNewTodo();\n  };\n\n  const renderEditTodo = (todo) => {\n    const editBtn = document.getElementById('edit');\n    editBtn.addEventListener('click', () => {\n      const todoForm = document.getElementById('form-todo');\n      todoForm.innerHTML = '';\n      todoForm.innerHTML = ` \n      <form id=\"edit-todo-form\">\n      <h4> Edit TODO</h4>\n      <div class=\"form-input\">\n        <label for=\"todo-title\">Title</label>\n        <input type=\"text\" id=\"todo-title\" value=\"${todo.title}\" required />\n      </div>\n\n      <div class=\"form-input\">\n        <label for=\"todo-desc\">Description</label>\n        <input type=\"text-area\" id=\"todo-desc\" value=\"${todo.desc}\" required />\n      </div>\n\n      <div class=\"form-input\">\n        <label for=\"completed\">Date</label>\n        <input type=\"date\" id=\"todo-date\" value=\"${todo.date}\" required/>\n      </div>\n\n      <div class=\"form-input\">\n      <label for=\"project\">Select project for this todo</label>\n      <select class=\"project\" id=\"project-drop\" required>\n\n      </select>\n    </div>\n\n      <div class=\"form-input\">\n        <label for=\"completed\">Completed?</label>\n        <input type=\"checkbox\" id=\"todo-status\" />\n      </div>\n      <div class=\"form-input\">\n        <button id=\"editbtn\" class=\"todo-btn\" type=\"submit\">Edit</button>\n      </div>\n      </form>`;\n      _displayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjectDropDown(_todoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n      _domListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listenForEdit(todo.id);\n    });\n  };\n\n  return { renderNewTodo, renderEditTodo };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formRenderer);\n\n\n//# sourceURL=webpack:///./src/formRenderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _domListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domListener */ \"./src/domListener.js\");\n/* eslint-disable no-unused-vars */\n\n\n\n_domListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ListentForNewTodo();\n_domListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listentForNewProject();\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* eslint-disable no-plusplus */\n\n\nlet todoId = 0;\n\nclass Todo {\n  constructor(title, date, desc, project) {\n    this.id = ++todoId;\n    this.title = title;\n    this.date = date;\n    this.desc = desc;\n    this.status = false;\n    if (project) {\n      this.setProject(project);\n    }\n    _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos.push(this);\n  }\n\n  setProject(project) {\n    this.projectId = project.id;\n  }\n\n  projects() {\n    return _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.filter((project) => project.id === this.projectId);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst todoList = {\n  projects: [],\n  todos: [],\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoList);\n\n\n//# sourceURL=webpack:///./src/todoList.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst utils = (() => {\n  const clearTodoForm = () => {\n    document.getElementById('todo-title').value = '';\n    document.getElementById('todo-desc').value = '';\n    document.getElementById('todo-date').value = '';\n  };\n\n  const clearProjectForm = () => {\n    document.getElementById('project-name').value = '';\n  };\n  return { clearProjectForm, clearTodoForm };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });