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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* eslint-disable radix */\r\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n\r\nconst action = (() => {\r\n  const updateTodo = (id, title, date, desc, project, status, priority) => {\r\n    const realId = parseInt(id) - 1;\r\n    _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[realId].title = title;\r\n    _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[realId].date = date;\r\n    _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[realId].desc = desc;\r\n    _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[realId].projectId = project.id;\r\n    _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[realId].status = status;\r\n    _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[realId].priorityHigh = priority;\r\n  };\r\n\r\n\r\n  const createTodo = (title, date, desc, project, status, priority) => {\r\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, date, desc, project);\r\n    todo.status = status;\r\n    todo.priorityHigh = priority;\r\n  };\r\n\r\n  const deleteTodo = (todo) => {\r\n    const realId = parseInt(todo.id) - 1;\r\n    delete _todoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todos[realId];\r\n  };\r\n\r\n  const createProject = (name) => {\r\n    const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\r\n  };\r\n  const SetStatus = (statusChekBox) => {\r\n    if (statusChekBox.checked) {\r\n      return true;\r\n    }\r\n    return false;\r\n  };\r\n\r\n\r\n  return {\r\n    updateTodo,\r\n    createTodo,\r\n    createProject,\r\n    SetStatus,\r\n    deleteTodo,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (action);\r\n\n\n//# sourceURL=webpack:///./src/action.js?");

/***/ }),

/***/ "./src/displayer.js":
/*!**************************!*\
  !*** ./src/displayer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formRenderer */ \"./src/formRenderer.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _domListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domListener */ \"./src/domListener.js\");\n/* eslint-disable import/no-cycle */\r\n/* eslint-disable radix */\r\n/* eslint-disable no-use-before-define */\r\n\r\n\r\n\r\n\r\nconst displayer = (() => {\r\n  const headLine = document.getElementById('headLine');\r\n\r\n  const displayTodoStatus = (todo) => {\r\n    if (todo.status === true) {\r\n      return `<strong id=\"status\" style=\"background-color: rgb(80, 253, 103);\"\r\n      >Completed</strong> <strong id=\"status\" style=\"background-color: hsl(305, 59%, 51%);\"\r\n      >Due date ${todo.date}</strong>`;\r\n    }\r\n    return `<strong id=\"status\" style=\"background-color: rgb(245, 106, 106);\"\r\n    >Not completed</strong\r\n  > <strong id=\"status\" style=\"background-color: hsl(305, 59%, 51%);\"\r\n  >Due date ${todo.date}</strong>`;\r\n  };\r\n\r\n  const displayAllTodos = (todoList) => {\r\n    headLine.innerHTML = 'ALL TODOS';\r\n    const listContainer = document.querySelector('.list-container');\r\n    listContainer.innerHTML = '';\r\n    const todo = todoList.todos;\r\n    todo.forEach(fetch);\r\n    function fetch(todo) {\r\n      const li = document.createElement('li');\r\n      li.id = 'todo-item';\r\n      li.dataset.id = `${todo.id}`;\r\n      displayColorForPriority(todo, li);\r\n      li.innerHTML = `<h2 >${todo.title}</h2>\r\n      <strong id=\"project-name\">${todo.projects()[0].name}</strong>\r\n     ${displayTodoStatus(todo)}`;\r\n      listContainer.appendChild(li);\r\n    }\r\n    displaySingleTodo(todoList);\r\n  };\r\n\r\n  const displayTodoForProject = (todos) => {\r\n    const listContainer = document.querySelector('.list-container');\r\n    listContainer.innerHTML = '';\r\n    todos.forEach(fetch);\r\n    function fetch(todo) {\r\n      const li = document.createElement('li');\r\n      li.id = 'todo-item';\r\n      li.dataset.id = `${todo.id}`;\r\n      li.innerHTML = `\r\n        <h2>${todo.title}</h2>\r\n        <strong id=\"project-name\">${todo.projects()[0].name}</strong>\r\n       ${displayTodoStatus(todo)}`;\r\n      listContainer.appendChild(li);\r\n    }\r\n    displaySingleTodo(_todoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  };\r\n\r\n  const displaySingleTodo = (todoList) => {\r\n    const todoLi = document.querySelectorAll('#todo-item');\r\n    const title = document.getElementById('single-title');\r\n    const desc = document.getElementById('desc');\r\n    const status = document.getElementById('single-status');\r\n    const editBtn = document.getElementById('edit');\r\n    const deletBtn = document.getElementById('delete');\r\n    todoLi.forEach((elem) => {\r\n      elem.addEventListener('click', () => {\r\n        const str = elem.getAttribute('data-id');\r\n        const id = parseInt(str) - 1;\r\n        title.innerHTML = todoList.todos[id].title;\r\n        desc.innerHTML = todoList.todos[id].desc;\r\n        status.innerHTML = displayTodoStatus(todoList.todos[id]);\r\n        editBtn.innerHTML = '<i class=\"far fa-trash-alt\" id=\"delete-icon\"></i>';\r\n        deletBtn.innerHTML = '<i class=\"far fa-edit\" id=\"edit-icon\"></i>';\r\n        _formRenderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderEditTodo(todoList.todos[id]);\r\n        _domListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listenForDelete(todoList.todos[id]);\r\n      });\r\n    });\r\n  };\r\n\r\n  const displayAllProjects = (todoList) => {\r\n    const projectElement = document.querySelector('.projects-container');\r\n    projectElement.innerHTML = '';\r\n    todoList.projects.forEach(lisproject);\r\n    function lisproject(proj) {\r\n      const p = document.createElement('p');\r\n      p.id = 'project-item';\r\n      p.dataset.id = `${proj.id}`;\r\n      p.innerHTML = `${proj.name}`;\r\n      projectElement.appendChild(p);\r\n    }\r\n  };\r\n\r\n  function displayProjectDropDown(todoList) {\r\n    const listproject = document.querySelector('.project');\r\n    listproject.innerHTML = '';\r\n    const proj = todoList.projects;\r\n    proj.forEach(getProjects);\r\n    function getProjects(p) {\r\n      const option = document.createElement('option');\r\n      option.innerHTML = `<option dataAtribute =\"${p.id}\">${p.name}</option>`;\r\n      listproject.appendChild(option);\r\n    }\r\n  }\r\n\r\n  function displayProjectDropDownForEdit(todo, todoList) {\r\n    const listproject = document.querySelector('.project');\r\n    listproject.innerHTML = '';\r\n    const proj = todoList.projects;\r\n    proj.forEach(getProjects);\r\n    function getProjects(p) {\r\n      const option = document.createElement('option');\r\n      option.innerHTML = `<option dataAtribute =\"${p.id}\"\r\n      >${p.name}</option>`;\r\n      listproject.appendChild(option);\r\n      displProjectCondition(todo, p, listproject);\r\n    }\r\n  }\r\n\r\n  const displProjectCondition = (todo, project, listproject) => {\r\n    if (todo.projectId === project.id) {\r\n      const id = parseInt(project.id) - 1;\r\n      listproject.selectedIndex = id;\r\n    }\r\n  };\r\n\r\n  const displayColorForPriority = (todo, li) => {\r\n    if (todo.priorityHigh === true) {\r\n      li.style.border = '1px solid red';\r\n      li.style.backgroundColor = '#c5df32';\r\n    }\r\n  };\r\n\r\n  const displayStatusForEdit = (todo) => {\r\n    const CheckboxStatus = document.getElementById('todo-status');\r\n    if (todo.status === true) {\r\n      CheckboxStatus.checked = true;\r\n    } else CheckboxStatus.checked = false;\r\n  };\r\n\r\n  const displayPriorityForEdit = (todo) => {\r\n    const CheckboxStatus = document.getElementById('todo-priority');\r\n    if (todo.priorityHigh === true) {\r\n      CheckboxStatus.checked = true;\r\n    } else CheckboxStatus.checked = false;\r\n  };\r\n\r\n  return {\r\n    displayTodoStatus,\r\n    displayAllTodos,\r\n    displaySingleTodo,\r\n    displayAllProjects,\r\n    displayProjectDropDown,\r\n    displayTodoForProject,\r\n    displayProjectDropDownForEdit,\r\n    displayColorForPriority,\r\n    displayStatusForEdit,\r\n    displayPriorityForEdit,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayer);\r\n\n\n//# sourceURL=webpack:///./src/displayer.js?");

/***/ }),

/***/ "./src/domListener.js":
/*!****************************!*\
  !*** ./src/domListener.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ \"./src/action.js\");\n/* harmony import */ var _formRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formRenderer */ \"./src/formRenderer.js\");\n/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayer */ \"./src/displayer.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* eslint-disable radix */\r\n/* eslint-disable import/no-cycle */\r\n/* eslint-disable no-use-before-define */\r\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst domListener = (() => {\r\n  const listentForNewProject = () => {\r\n    const newProjectBtn = document.getElementById('new-project-btn');\r\n    newProjectBtn.addEventListener('click', _formRenderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderNewPorjectForm);\r\n  };\r\n\r\n  const ListentForNewTodo = () => {\r\n    const newTbn = document.getElementById('new-todo-btn');\r\n    newTbn.addEventListener('click', _formRenderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderNewTodo);\r\n  };\r\n\r\n  const hadleNewTodo = () => {\r\n    const formTodo = document.getElementById('new-todo-form');\r\n    formTodo.addEventListener('submit', (n) => {\r\n      n.preventDefault();\r\n      const statusChekBox = document.getElementById('todo-status');\r\n      const priorityChekBox = document.getElementById('todo-priority');\r\n      const title = document.getElementById('todo-title').value;\r\n      const desc = document.getElementById('todo-desc').value;\r\n      const date = document.getElementById('todo-date').value;\r\n      const project = document.querySelector('.project').options.selectedIndex;\r\n      const status = _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SetStatus(statusChekBox);\r\n      const priority = _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SetStatus(priorityChekBox);\r\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTodo(title, date, desc, _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[project], status, priority);\r\n      _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllTodos(_todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearTodoForm();\r\n    });\r\n  };\r\n\r\n  const listenForDisplayProjecToto = () => {\r\n    const headLine = document.getElementById('headLine');\r\n    const projects = document.querySelectorAll('#project-item');\r\n    projects.forEach((data) => {\r\n      data.addEventListener('click', () => {\r\n        const str = data.getAttribute('data-id');\r\n        const id = parseInt(str) - 1;\r\n        _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayTodoForProject(_todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[id].todos());\r\n        headLine.innerHTML = `ALL TODOS FOR ${_todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[id].name}`;\r\n      });\r\n    });\r\n  };\r\n\r\n  function handleNewProject() {\r\n    const formProject = document.getElementById('form-project');\r\n    formProject.addEventListener('submit', (p) => {\r\n      p.preventDefault();\r\n      const name = document.getElementById('project-name').value;\r\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createProject(name);\r\n      _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllProjects(_todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n      listenForDisplayProjecToto();\r\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearProjectForm();\r\n    });\r\n  }\r\n\r\n  const listenForEdit = (id) => {\r\n    const form = document.getElementById('edit-todo-form');\r\n    form.addEventListener('submit', (n) => {\r\n      n.preventDefault();\r\n      const priorityChekBox = document.getElementById('todo-priority');\r\n      const statusChekBox = document.getElementById('todo-status');\r\n      const title = document.getElementById('todo-title').value;\r\n      const desc = document.getElementById('todo-desc').value;\r\n      const date = document.getElementById('todo-date').value;\r\n      const status = _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SetStatus(statusChekBox);\r\n      const priority = _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SetStatus(priorityChekBox);\r\n      const project = document.querySelector('.project').options.selectedIndex;\r\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTodo(id, title, date, desc, _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects[project], status, priority);\r\n      _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllTodos(_todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearTodoForm();\r\n    });\r\n  };\r\n\r\n  const listenForDelete = (todo) => {\r\n    const deletBtn = document.getElementById('delete-icon');\r\n    deletBtn.onclick = () => {\r\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTodo(todo);\r\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearTodoDom();\r\n    };\r\n  };\r\n  return {\r\n    listentForNewProject,\r\n    handleNewProject,\r\n    listenForEdit,\r\n    ListentForNewTodo,\r\n    hadleNewTodo,\r\n    listenForDisplayProjecToto,\r\n    listenForDelete,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (domListener);\r\n\n\n//# sourceURL=webpack:///./src/domListener.js?");

/***/ }),

/***/ "./src/formRenderer.js":
/*!*****************************!*\
  !*** ./src/formRenderer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domListener */ \"./src/domListener.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayer */ \"./src/displayer.js\");\n/* eslint-disable import/no-cycle */\r\n\r\n\r\n\r\n\r\nconst formRenderer = (() => {\r\n  const renderNewTodo = () => {\r\n    const todoFormContainer = document.getElementById('form-todo');\r\n    todoFormContainer.innerHTML = '';\r\n    todoFormContainer.innerHTML = ` <form id=\"new-todo-form\">\r\n        <h4> NEW TODO</h4>\r\n        <div class=\"form-input\">\r\n          <label for=\"todo-title\">Title</label>\r\n          <input type=\"text\" id=\"todo-title\" value=\"\" required />\r\n        </div>\r\n    \r\n        <div class=\"form-input\">\r\n          <label for=\"todo-desc\">Description</label>\r\n          <input type=\"text-area\" id=\"todo-desc\" value=\"\" required />\r\n        </div>\r\n    \r\n        <div class=\"form-input\">\r\n          <label for=\"completed\">Due date</label>\r\n          <input type=\"date\" id=\"todo-date\" value=\"\" required/>\r\n        </div>\r\n    \r\n        <div class=\"form-input\">\r\n          <label for=\"project\">Select project for this todo</label>\r\n          <select class=\"project\" id=\"project-drop\" required>\r\n    \r\n          </select>\r\n        </div>\r\n    \r\n        <div class=\"form-input\">\r\n        <div class=\"chek-complete\">\r\n          <label for=\"completed\">Completed?</label>\r\n          <input type=\"checkbox\" id=\"todo-status\" />\r\n        </div>\r\n\r\n        <div class=\"form-priority\">\r\n            <label for=\"priority\">Priority high?</label>\r\n            <input type=\"checkbox\" id=\"todo-priority\" />\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"form-input\">\r\n          <button id=\"saver\" class=\"todo-btn\" type=\"submit\">Save</button>\r\n        </div>\r\n      </form>`;\r\n    _displayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjectDropDown(_todoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n    _domListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hadleNewTodo();\r\n  };\r\n\r\n  const renderEditTodo = (todo) => {\r\n    const editBtn = document.getElementById('edit-icon');\r\n    editBtn.addEventListener('click', () => {\r\n      const todoForm = document.getElementById('form-todo');\r\n      todoForm.innerHTML = '';\r\n      todoForm.innerHTML = ` \r\n      <form id=\"edit-todo-form\">\r\n      <h4> Edit TODO</h4>\r\n      <div class=\"form-input\">\r\n        <label for=\"todo-title\">Title</label>\r\n        <input type=\"text\" id=\"todo-title\" value=\"${todo.title}\" required />\r\n      </div>\r\n\r\n      <div class=\"form-input\">\r\n        <label for=\"todo-desc\">Description</label>\r\n        <input type=\"text-area\" id=\"todo-desc\" value=\"${todo.desc}\" required />\r\n      </div>\r\n\r\n      <div class=\"form-input\">\r\n        <label for=\"Du-date\">Due date</label>\r\n        <input type=\"date\" id=\"todo-date\" value=\"${todo.date}\" required/>\r\n      </div>\r\n\r\n      <div class=\"form-input\">\r\n      <label for=\"project\">Select project for this todo</label>\r\n      <select class=\"project\" id=\"project-drop\" required>\r\n\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-input chec-boxlist\">\r\n    <div class=\"chek-complete\">\r\n      <label for=\"completed\">Completed?</label>\r\n      <input type=\"checkbox\" id=\"todo-status\" />\r\n    </div>\r\n\r\n    <div class=\"form-priority\">\r\n        <label for=\"priority\">Priority high?</label>\r\n        <input type=\"checkbox\" id=\"todo-priority\" />\r\n    </div>\r\n    </div>\r\n\r\n\r\n      <div class=\"form-input\">\r\n        <button id=\"editbtn\" class=\"todo-btn\" type=\"submit\">Edit</button>\r\n      </div>\r\n      </form>`;\r\n      _displayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjectDropDownForEdit(todo, _todoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n      _displayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayStatusForEdit(todo);\r\n      _displayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayPriorityForEdit(todo);\r\n      _domListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listenForEdit(todo.id);\r\n    });\r\n  };\r\n\r\n  const renderNewPorjectForm = () => {\r\n    const formContainer = document.getElementById('form-todo');\r\n    formContainer.innerHTML = '';\r\n    formContainer.innerHTML = `<form id=\"form-project\">\r\n     <h4>NEW PROJECT</h4>\r\n\r\n     <div class=\"form-input\">\r\n       <label for=\"todo-projec-tile\">Project Name</label>\r\n       <input type=\"text\" id=\"project-name\" required />\r\n     </div>\r\n     <div class=\"form-input\">\r\n       <button id=\"saver\" class=\"project-btn\" type=\"submit\">Save</button>\r\n     </div>\r\n   </form>`;\r\n    _domListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleNewProject();\r\n  };\r\n\r\n  return { renderNewTodo, renderEditTodo, renderNewPorjectForm };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (formRenderer);\r\n\n\n//# sourceURL=webpack:///./src/formRenderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _domListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domListener */ \"./src/domListener.js\");\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n_domListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ListentForNewTodo();\r\n_domListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listentForNewProject();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* eslint-disable no-plusplus */\r\n\r\n\r\nlet projecId = 0;\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.id = ++projecId;\r\n    this.name = name;\r\n    _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.push(this);\r\n  }\r\n\r\n  todos() {\r\n    return _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos.filter(\r\n      (todo) => todo.projectId === this.id,\r\n    );\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/project.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* eslint-disable no-plusplus */\r\n\r\n\r\nlet todoId = 0;\r\n\r\nclass Todo {\r\n  constructor(title, date, desc, project) {\r\n    this.id = ++todoId;\r\n    this.title = title;\r\n    this.date = date;\r\n    this.desc = desc;\r\n    this.priorityHigh = false;\r\n    this.status = false;\r\n    if (project) {\r\n      this.setProject(project);\r\n    }\r\n    _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todos.push(this);\r\n  }\r\n\r\n  setProject(project) {\r\n    this.projectId = project.id;\r\n  }\r\n\r\n  projects() {\r\n    return _todoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projects.filter(\r\n      (project) => project.id === this.projectId,\r\n    );\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\r\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst todoList = {\r\n  projects: [],\r\n  todos: [],\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoList);\r\n\n\n//# sourceURL=webpack:///./src/todoList.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst utils = (() => {\r\n  const clearTodoForm = () => {\r\n    document.getElementById('todo-title').value = '';\r\n    document.getElementById('todo-desc').value = '';\r\n    document.getElementById('todo-date').value = '';\r\n  };\r\n\r\n  const clearProjectForm = () => {\r\n    document.getElementById('project-name').value = '';\r\n  };\r\n\r\n  const clearTodoDom = () => {\r\n    const todoLi = document.querySelectorAll('#todo-item');\r\n    const liContainer = document.querySelector('.list-container');\r\n    const singleLi = document.querySelector('.single-item-container');\r\n\r\n    liContainer.innerHTML = '';\r\n    singleLi.innerHTML = '';\r\n    todoLi.innerHtml = '';\r\n  };\r\n  return { clearProjectForm, clearTodoForm, clearTodoDom };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });