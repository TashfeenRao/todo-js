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

/***/ "./src/DataStorage.js":
/*!****************************!*\
  !*** ./src/DataStorage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable prefer-const */\nconst DataStorage = (() => {\n  let todoList = {\n    todos: [],\n  };\n\n  let projectList = {\n    projects: [],\n  };\n  const getTodoList = () => {\n    if (localStorage.todoList) {\n      DataStorage.todoList = JSON.parse(localStorage.getItem('todoList'));\n    }\n    return todoList;\n  };\n\n  const saveTodolist = () => {\n    localStorage.setItem('todoList', JSON.stringify(todoList));\n  };\n\n  const saveProjectlist = () => {\n    localStorage.setItem('projectList', JSON.stringify(projectList));\n  };\n\n  const getProjectList = () => {\n    if (localStorage.projectList) {\n      DataStorage.projectList = JSON.parse(localStorage.getItem('projectList'));\n    }\n    return projectList;\n  };\n\n  return {\n    getTodoList, getProjectList, saveTodolist, saveProjectlist, todoList, projectList,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataStorage);\n\n//# sourceURL=webpack:///./src/DataStorage.js?");

/***/ }),

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _DataStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataStorage */ \"./src/DataStorage.js\");\n/* eslint-disable radix */\n/* eslint-disable no-unused-vars */\n\n\n\n\nconst action = (() => {\n  const updateTodo = (id, title, date, desc, project, status, priority) => {\n    const realId = parseInt(id) - 1;\n    _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todoList.todos[realId].title = title;\n    _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todoList.todos[realId].date = date;\n    _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todoList.todos[realId].desc = desc;\n    _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todoList.todos[realId].projectId = project.id;\n    _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todoList.todos[realId].status = status;\n    _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todoList.todos[realId].priorityHigh = priority;\n    _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveTodolist();\n  };\n\n\n  const createTodo = (title, date, desc, project, status, priority) => {\n    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, date, desc, project);\n    todo.status = status;\n    todo.priorityHigh = priority;\n    _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveTodolist();\n  };\n\n  const deleteTodo = (todo) => {\n    const realId = parseInt(todo.id) - 1;\n    delete _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todoList.todos[realId];\n    _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveTodolist();\n  };\n\n  const createProject = (name) => {\n    const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n    _DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].saveProjectlist();\n  };\n  const SetStatus = (statusChekBox) => {\n    if (statusChekBox.checked) {\n      return true;\n    }\n    return false;\n  };\n\n\n  return {\n    updateTodo,\n    createTodo,\n    createProject,\n    SetStatus,\n    deleteTodo,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (action);\n\n\n//# sourceURL=webpack:///./src/action.js?");

/***/ }),

/***/ "./src/defaultProject.js":
/*!*******************************!*\
  !*** ./src/defaultProject.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _DataStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataStorage */ \"./src/DataStorage.js\");\n/* eslint-disable no-unused-vars */\n\n\n\nconst defaulProject = (() => {\n  const seed = () => {\n    if (_DataStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList.projects.length === 0) {\n      const noukod = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Noukod');\n      const microverese = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Microverse');\n      const katkatgame = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Katkat game');\n    }\n  };\n\n  return { seed };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaulProject);\n\n//# sourceURL=webpack:///./src/defaultProject.js?");

/***/ }),

/***/ "./src/displayer.js":
/*!**************************!*\
  !*** ./src/displayer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formRenderer */ \"./src/formRenderer.js\");\n/* harmony import */ var _DataStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataStorage */ \"./src/DataStorage.js\");\n/* harmony import */ var _domListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domListener */ \"./src/domListener.js\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable radix */\n/* eslint-disable no-use-before-define */\n\n\n\n\nconst displayer = (() => {\n  const headLine = document.getElementById('headLine');\n\n  const displayTodoStatus = (todo) => {\n    if (todo.status === true) {\n      return `<strong id=\"status\" style=\"background-color: rgb(80, 253, 103);\"\n      >Completed</strong> <strong id=\"status\" style=\"background-color: hsl(305, 59%, 51%);\"\n      >Due date ${todo.date}</strong>`;\n    }\n    return `<strong id=\"status\" style=\"background-color: rgb(245, 106, 106);\"\n    >Not completed</strong\n  > <strong id=\"status\" style=\"background-color: hsl(305, 59%, 51%);\"\n  >Due date ${todo.date}</strong>`;\n  };\n\n  const displayAllTodos = (todoList) => {\n    headLine.innerHTML = 'ALL TODOS';\n    const listContainer = document.querySelector('.list-container');\n    listContainer.innerHTML = '';\n    const todo = todoList.todos;\n    todo.forEach(fetch);\n    function fetch(todo) {\n      const li = document.createElement('li');\n      li.id = 'todo-item';\n      li.dataset.id = `${todo.id}`;\n      displayColorForPriority(todo, li);\n      li.innerHTML = `<h2 >${todo.title}</h2>\n      <strong id=\"project-name\">${_DataStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList.projects[todo.projectId - 1].name}</strong>\n     ${displayTodoStatus(todo)}`;\n      listContainer.appendChild(li);\n    }\n    displaySingleTodo(todoList);\n  };\n\n  const displayTodoForProject = (todos) => {\n    const listContainer = document.querySelector('.list-container');\n    listContainer.innerHTML = '';\n    todos.forEach(fetch);\n    function fetch(todo) {\n      const li = document.createElement('li');\n      li.id = 'todo-item';\n      li.dataset.id = `${todo.id}`;\n      li.innerHTML = `\n        <h2>${todo.title}</h2>\n        <strong id=\"project-name\">${_DataStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList.projects[todo.projectId - 1].name}</strong>\n       ${displayTodoStatus(todo)}`;\n      listContainer.appendChild(li);\n    }\n    displaySingleTodo(_DataStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList);\n  };\n\n  const displaySingleTodo = (todoList) => {\n    const todoLi = document.querySelectorAll('#todo-item');\n    const title = document.getElementById('single-title');\n    const desc = document.getElementById('desc');\n    const status = document.getElementById('single-status');\n    const editBtn = document.getElementById('edit');\n    const deletBtn = document.getElementById('delete');\n    todoLi.forEach((elem) => {\n      elem.addEventListener('click', () => {\n        const str = elem.getAttribute('data-id');\n        const id = parseInt(str) - 1;\n        title.innerHTML = todoList.todos[id].title;\n        desc.innerHTML = todoList.todos[id].desc;\n        status.innerHTML = displayTodoStatus(todoList.todos[id]);\n        editBtn.innerHTML = '<i class=\"far fa-trash-alt\" id=\"delete-icon\"></i>';\n        deletBtn.innerHTML = '<i class=\"far fa-edit\" id=\"edit-icon\"></i>';\n        _formRenderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderEditTodo(todoList.todos[id]);\n        _domListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listenForDelete(todoList.todos[id]);\n      });\n    });\n  };\n\n  const displayAllProjects = (projectList) => {\n    const projectElement = document.querySelector('.projects-container');\n    projectElement.innerHTML = '';\n    projectList.projects.forEach(lisproject);\n    function lisproject(proj) {\n      const p = document.createElement('p');\n      p.id = 'project-item';\n      p.dataset.id = `${proj.id}`;\n      p.innerHTML = `${proj.name}`;\n      projectElement.appendChild(p);\n    }\n    _domListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listenForDisplayProjecToto();\n  };\n\n  function displayProjectDropDown(todoList) {\n    const listproject = document.querySelector('.project');\n    listproject.innerHTML = '';\n    const proj = todoList.projects;\n    proj.forEach(getProjects);\n    function getProjects(p) {\n      const option = document.createElement('option');\n      option.innerHTML = `<option dataAtribute =\"${p.id}\">${p.name}</option>`;\n      listproject.appendChild(option);\n    }\n  }\n\n  function displayProjectDropDownForEdit(todo, todoList) {\n    const listproject = document.querySelector('.project');\n    listproject.innerHTML = '';\n    const proj = todoList.projects;\n    proj.forEach(getProjects);\n    function getProjects(p) {\n      const option = document.createElement('option');\n      option.innerHTML = `<option dataAtribute =\"${p.id}\"\n      >${p.name}</option>`;\n      listproject.appendChild(option);\n      displProjectCondition(todo, p, listproject);\n    }\n  }\n\n  const displProjectCondition = (todo, project, listproject) => {\n    if (todo.projectId === project.id) {\n      const id = parseInt(project.id) - 1;\n      listproject.selectedIndex = id;\n    }\n  };\n\n  const displayColorForPriority = (todo, li) => {\n    if (todo.priorityHigh === true) {\n      li.style.border = '1px solid red';\n      li.style.backgroundColor = '#c5df32';\n    }\n  };\n\n  const displayStatusForEdit = (todo) => {\n    const CheckboxStatus = document.getElementById('todo-status');\n    if (todo.status === true) {\n      CheckboxStatus.checked = true;\n    } else CheckboxStatus.checked = false;\n  };\n\n  const displayPriorityForEdit = (todo) => {\n    const CheckboxStatus = document.getElementById('todo-priority');\n    if (todo.priorityHigh === true) {\n      CheckboxStatus.checked = true;\n    } else CheckboxStatus.checked = false;\n  };\n\n  return {\n    displayTodoStatus,\n    displayAllTodos,\n    displaySingleTodo,\n    displayAllProjects,\n    displayProjectDropDown,\n    displayTodoForProject,\n    displayProjectDropDownForEdit,\n    displayColorForPriority,\n    displayStatusForEdit,\n    displayPriorityForEdit,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayer);\n\n//# sourceURL=webpack:///./src/displayer.js?");

/***/ }),

/***/ "./src/domListener.js":
/*!****************************!*\
  !*** ./src/domListener.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DataStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataStorage */ \"./src/DataStorage.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ \"./src/action.js\");\n/* harmony import */ var _formRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formRenderer */ \"./src/formRenderer.js\");\n/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayer */ \"./src/displayer.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* eslint-disable max-len */\n/* eslint-disable radix */\n/* eslint-disable import/no-cycle */\n/* eslint-disable no-use-before-define */\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n\nconst domListener = (() => {\n  const listentForNewProject = () => {\n    const newProjectBtn = document.getElementById('new-project-btn');\n    newProjectBtn.addEventListener('click', _formRenderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderNewPorjectForm);\n  };\n\n  const ListentForNewTodo = () => {\n    const newTbn = document.getElementById('new-todo-btn');\n    newTbn.addEventListener('click', _formRenderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderNewTodo);\n  };\n\n  const hadleNewTodo = () => {\n    const formTodo = document.getElementById('new-todo-form');\n    formTodo.addEventListener('submit', (n) => {\n      n.preventDefault();\n      const statusChekBox = document.getElementById('todo-status');\n      const priorityChekBox = document.getElementById('todo-priority');\n      const title = document.getElementById('todo-title').value;\n      const desc = document.getElementById('todo-desc').value;\n      const date = document.getElementById('todo-date').value;\n      const project = document.querySelector('.project').options.selectedIndex;\n      const status = _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SetStatus(statusChekBox);\n      const priority = _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SetStatus(priorityChekBox);\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTodo(title, date, desc, _DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.projects[project], status, priority);\n      _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllTodos(_DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList);\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearTodoForm();\n    });\n  };\n\n  const listenForDisplayProjecToto = () => {\n    const headLine = document.getElementById('headLine');\n    const projects = document.querySelectorAll('#project-item');\n    projects.forEach((data) => {\n      data.addEventListener('click', () => {\n        const str = data.getAttribute('data-id');\n        const id = parseInt(str) - 1;\n        _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayTodoForProject(_DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.projects[id].todos());\n        headLine.innerHTML = `ALL TODOS FOR ${_DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.projects[id].name}`;\n      });\n    });\n  };\n\n  function handleNewProject() {\n    const formProject = document.getElementById('form-project');\n    formProject.addEventListener('submit', (p) => {\n      p.preventDefault();\n      const name = document.getElementById('project-name').value;\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createProject(name);\n      _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllProjects(_DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList);\n      listenForDisplayProjecToto();\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearProjectForm();\n    });\n  }\n\n  const listenForEdit = (id) => {\n    const form = document.getElementById('edit-todo-form');\n    form.addEventListener('submit', (n) => {\n      n.preventDefault();\n      const priorityChekBox = document.getElementById('todo-priority');\n      const statusChekBox = document.getElementById('todo-status');\n      const title = document.getElementById('todo-title').value;\n      const desc = document.getElementById('todo-desc').value;\n      const date = document.getElementById('todo-date').value;\n      const status = _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SetStatus(statusChekBox);\n      const priority = _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SetStatus(priorityChekBox);\n      const project = document.querySelector('.project').options.selectedIndex;\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTodo(id, title, date, desc, _DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.projects[project], status, priority);\n      _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllTodos(_DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList);\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearTodoForm();\n    });\n  };\n\n  const listenForDelete = (todo) => {\n    const deletBtn = document.getElementById('delete-icon');\n    deletBtn.onclick = () => {\n      _action__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTodo(todo);\n      _utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearTodoDom();\n      _displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllTodos(_DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList);\n    };\n  };\n  return {\n    listentForNewProject,\n    handleNewProject,\n    listenForEdit,\n    ListentForNewTodo,\n    hadleNewTodo,\n    listenForDisplayProjecToto,\n    listenForDelete,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (domListener);\n\n\n//# sourceURL=webpack:///./src/domListener.js?");

/***/ }),

/***/ "./src/formRenderer.js":
/*!*****************************!*\
  !*** ./src/formRenderer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domListener */ \"./src/domListener.js\");\n/* harmony import */ var _DataStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataStorage */ \"./src/DataStorage.js\");\n/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayer */ \"./src/displayer.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nconst formRenderer = (() => {\n  const renderNewTodo = () => {\n    const todoFormContainer = document.getElementById('form-todo');\n    todoFormContainer.innerHTML = '';\n    todoFormContainer.innerHTML = ` <form id=\"new-todo-form\">\n        <h4> NEW TODO</h4>\n        <div class=\"form-input\">\n          <label for=\"todo-title\">Title</label>\n          <input type=\"text\" id=\"todo-title\" value=\"\" required />\n        </div>\n    \n        <div class=\"form-input\">\n          <label for=\"todo-desc\">Description</label>\n          <input type=\"text-area\" id=\"todo-desc\" value=\"\" required />\n        </div>\n    \n        <div class=\"form-input\">\n          <label for=\"completed\">Due date</label>\n          <input type=\"date\" id=\"todo-date\" value=\"\" required/>\n        </div>\n    \n        <div class=\"form-input\">\n          <label for=\"project\">Select project for this todo</label>\n          <select class=\"project\" id=\"project-drop\" required>\n    \n          </select>\n        </div>\n    \n        <div class=\"form-input\">\n        <div class=\"chek-complete\">\n          <label for=\"completed\">Completed?</label>\n          <input type=\"checkbox\" id=\"todo-status\" />\n        </div>\n\n        <div class=\"form-priority\">\n            <label for=\"priority\">Priority high?</label>\n            <input type=\"checkbox\" id=\"todo-priority\" />\n        </div>\n        </div>\n\n        <div class=\"form-input\">\n          <button id=\"saver\" class=\"todo-btn\" type=\"submit\">Save</button>\n        </div>\n      </form>`;\n    _displayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjectDropDown(_DataStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList);\n    _domListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hadleNewTodo();\n  };\n\n  const renderEditTodo = (todo) => {\n    const editBtn = document.getElementById('edit-icon');\n    editBtn.addEventListener('click', () => {\n      const todoForm = document.getElementById('form-todo');\n      todoForm.innerHTML = '';\n      todoForm.innerHTML = ` \n      <form id=\"edit-todo-form\">\n      <h4> Edit TODO</h4>\n      <div class=\"form-input\">\n        <label for=\"todo-title\">Title</label>\n        <input type=\"text\" id=\"todo-title\" value=\"${todo.title}\" required />\n      </div>\n\n      <div class=\"form-input\">\n        <label for=\"todo-desc\">Description</label>\n        <input type=\"text-area\" id=\"todo-desc\" value=\"${todo.desc}\" required />\n      </div>\n\n      <div class=\"form-input\">\n        <label for=\"Du-date\">Due date</label>\n        <input type=\"date\" id=\"todo-date\" value=\"${todo.date}\" required/>\n      </div>\n\n      <div class=\"form-input\">\n      <label for=\"project\">Select project for this todo</label>\n      <select class=\"project\" id=\"project-drop\" required>\n\n      </select>\n    </div>\n\n    <div class=\"form-input chec-boxlist\">\n    <div class=\"chek-complete\">\n      <label for=\"completed\">Completed?</label>\n      <input type=\"checkbox\" id=\"todo-status\" />\n    </div>\n\n    <div class=\"form-priority\">\n        <label for=\"priority\">Priority high?</label>\n        <input type=\"checkbox\" id=\"todo-priority\" />\n    </div>\n    </div>\n\n\n      <div class=\"form-input\">\n        <button id=\"editbtn\" class=\"todo-btn\" type=\"submit\">Edit</button>\n      </div>\n      </form>`;\n      _displayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayProjectDropDownForEdit(todo, _DataStorage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList);\n      _displayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayStatusForEdit(todo);\n      _displayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayPriorityForEdit(todo);\n      _domListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listenForEdit(todo.id);\n    });\n  };\n\n  const renderNewPorjectForm = () => {\n    const formContainer = document.getElementById('form-todo');\n    formContainer.innerHTML = '';\n    formContainer.innerHTML = `<form id=\"form-project\">\n     <h4>NEW PROJECT</h4>\n\n     <div class=\"form-input\">\n       <label for=\"todo-projec-tile\">Project Name</label>\n       <input type=\"text\" id=\"project-name\" required />\n     </div>\n     <div class=\"form-input\">\n       <button id=\"saver\" class=\"project-btn\" type=\"submit\">Save</button>\n     </div>\n   </form>`;\n    _domListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handleNewProject();\n  };\n\n  return { renderNewTodo, renderEditTodo, renderNewPorjectForm };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formRenderer);\n\n\n//# sourceURL=webpack:///./src/formRenderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _domListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domListener */ \"./src/domListener.js\");\n/* harmony import */ var _DataStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataStorage */ \"./src/DataStorage.js\");\n/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayer */ \"./src/displayer.js\");\n/* harmony import */ var _defaultProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultProject */ \"./src/defaultProject.js\");\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n\n_DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTodoList();\n_DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProjectList();\n_defaultProject__WEBPACK_IMPORTED_MODULE_4__[\"default\"].seed();\n_displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllProjects(_DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectList);\n_displayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayAllTodos(_DataStorage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].todoList);\n\n_domListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ListentForNewTodo();\n_domListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listentForNewProject();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DataStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataStorage */ \"./src/DataStorage.js\");\n/* eslint-disable no-plusplus */\n\n\nlet projecId = _DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.projects.length;\n\nclass Project {\n  constructor(name) {\n    this.id = ++projecId;\n    this.name = name;\n    _DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.projects.push(this);\n  }\n\n  todos() {\n    return _DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.todos.filter(\n      (todo) => todo.projectId === this.id,\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/project.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DataStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataStorage */ \"./src/DataStorage.js\");\n/* eslint-disable no-plusplus */\n\n\nlet todoId = _DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.todos.length;\n\nclass Todo {\n  constructor(title, date, desc, project) {\n    this.id = ++todoId;\n    this.title = title;\n    this.date = date;\n    this.desc = desc;\n    this.priorityHigh = false;\n    this.status = false;\n    if (project) {\n      this.setProject(project);\n    }\n    _DataStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.todos.push(this);\n  }\n\n  setProject(project) {\n    this.projectId = project.id;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst utils = (() => {\n  const clearTodoForm = () => {\n    document.getElementById('todo-title').value = '';\n    document.getElementById('todo-desc').value = '';\n    document.getElementById('todo-date').value = '';\n  };\n\n  const clearProjectForm = () => {\n    document.getElementById('project-name').value = '';\n  };\n\n  const clearTodoDom = () => {\n    const todoLi = document.querySelectorAll('#todo-item');\n    const liContainer = document.querySelector('.list-container');\n    const singleLi = document.querySelector('.single-item-container');\n\n    liContainer.innerHTML = '';\n    singleLi.innerHTML = '';\n    todoLi.innerHtml = '';\n  };\n  return { clearProjectForm, clearTodoForm, clearTodoDom };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });