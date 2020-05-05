/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import Todo from './todo';
import Project from './project';
import todoList from './todoList';

const dom = (() => {
  function displayTodo() {
    const listContainer = document.querySelector('.list-container');
    const todo = todoList.todos;
    const li = document.createElement('li')
    li.id = 'todo-item';
    todo.forEach(fetch);
    function fetch(todo) {
      li.innerHTML = `
    <h2>${todo.title}</h2>
    <strong id="project-name">Project name</strong>
    <strong id="status" style="background-color: rgb(245, 106, 106);"
      >in progress</strong
    >
    <strong id="date">${todo.date}</strong>`;
      listContainer.appendChild(li);
    }
  }

  function createTodo(title, date, desc) {
    const todo = new Todo(title, date, desc);
    displayTodo();
    console.log(todo);
  }

  function createProject(name) {
    const project = new Project(name);
    console.log(project);
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
      createTodo(title, date, desc);
      clearDom();
    });


    formProject.addEventListener('submit', (p) => {
      p.preventDefault();
      const name = document.getElementById('project-name').value;
      createProject(name);
      clearDom();
    });
  }

  function displaySingleTodo() {}
  return {
    displayTodo,
    displaySingleTodo,
    createProject,
    createTodo,
    listentToDom,
  };
})();

export default dom;
