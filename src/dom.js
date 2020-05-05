/* eslint-disable no-unused-vars */
import Todo from './todo';

const dom = (() => {
  function displayTodo() {}

  function createTodo(title, desc, date) {
    const todo = new Todo(title, desc, date);
  }

  function listentToDom() {
    const form = document.getElementById('form-todo');

    form.addEventListener('submit', (prev) => {
      prev.preventDefault();
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      createTodo(title, desc, date);
    });
  }

  function createProject() {}

  function displaydotoProject() {}

  function displaySingleTodo() {}
  return {
    displayTodo,
    displaydotoProject,
    displaySingleTodo,
    createProject,
    createTodo,
    listentToDom,
  };
})();

export default dom;
