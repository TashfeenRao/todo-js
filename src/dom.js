/* eslint-disable no-unused-vars */
import Todo from './todo';
import Project from './project';

const dom = (() => {

  function displayTodo() {}

  function createTodo(title, desc, date) {
    const todo = new Todo(title, desc, date);
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
      createTodo(title, desc, date);
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
