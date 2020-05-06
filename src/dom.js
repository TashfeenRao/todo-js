/* eslint-disable radix */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import Todo from './todo';
import Project from './project';
import todoList from './todoList';
import action from './action';

const dom = (() => {
  function displayTodo() {
    const listContainer = document.querySelector('.list-container');
    const todo = todoList.todos;
    const li = document.createElement('li');
    li.id = 'todo-item';
    todo.forEach(fetch);
    function fetch(todo) {
      li.dataset.id = `${todo.id}`;
      li.innerHTML = `
    <h2>${todo.title}</h2>
    <strong id="project-name">${todo.projects()[0].name}</strong>
    <strong id="status" style="background-color: rgb(245, 106, 106);"
      >${action.displayStatus(todo)}</strong
    >
    <strong id="date">${todo.date}</strong>`;
      listContainer.appendChild(li);
    }
    dom.displaySingleTodo();
  }

  const displayAllProject = () => {
    const projectElement = document.querySelector('.projects-container');
    projectElement.innerHTML = '';
    todoList.projects.forEach(lisproject);
    function lisproject(proj) {
      const p = document.createElement('p');
      p.innerHTML = `${proj.name}`;
      projectElement.appendChild(p);
    }
  };

  function displayProjectDropDown() {
    const listproject = document.querySelector('.project');
    listproject.innerHTML = '';
    const proj = todoList.projects;
    proj.forEach(getProjects);
    function getProjects(p) {
      const option = document.createElement('option');
      option.innerHTML = `<option dataAtribute ="${p.id}">${p.name}</option>`;
      listproject.appendChild(option);
    }
  }

  function createTodo(title, date, desc, project) {
    const todo = new Todo(title, date, desc, project);
    displayTodo();
  }

  function createProject(name) {
    const project = new Project(name);
    displayProjectDropDown();
    displayAllProject();
  }

  function clearDom() {
    document.getElementById('todo-title').value = '';
    document.getElementById('todo-desc').value = '';
    document.getElementById('todo-date').value = '';
    document.getElementById('project-name').value = '';
  }

  function listentToDom() {
    const formTodo = document.getElementById('form-todo');
    const formProject = document.getElementById('form-project');

    formTodo.addEventListener('submit', (n) => {
      n.preventDefault();
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      const project = document.querySelector('.project').options.selectedIndex;
      createTodo(title, date, desc, todoList.projects[project]);
      clearDom();
    });

    formProject.addEventListener('submit', (p) => {
      p.preventDefault();
      const name = document.getElementById('project-name').value;
      createProject(name);
      clearDom();
    });
  }

  function displaySingleTodo() {
    const todoLi = document.querySelectorAll('#todo-item');
    const title = document.getElementById('single-title');
    const desc = document.getElementById('desc');
    const date = document.querySelector('.mini-data-date');
    const status = document.getElementById('single-status');
    todoLi.forEach((elem) => {
      elem.addEventListener('click', () => {
        const str = elem.getAttribute('data-id');
        const id = parseInt(str) - 1;
        title.innerHTML = todoList.todos[id].title;
        desc.innerHTML = todoList.todos[id].desc;
        date.innerHTML = todoList.todos[id].date;
        status.innerHTML = action.displayStatus(todoList.todos[id]);
        action.editTodo(todoList.todos[id]);
      });
    });
    
  }

  return {
    displayTodo,
    displaySingleTodo,
    createProject,
    createTodo,
    listentToDom,
    displayProjectDropDown,
    displayAllProject,
  };
})();

export default dom;
