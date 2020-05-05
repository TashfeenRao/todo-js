/* eslint-disable no-unused-vars */
import Todo from './todo';

const dom = (() => {
  function displayTodo() {}

  function createTodo() {
    const title = document.getElementById('todo-title').values;
    const desc = document.getElementById('todo-desc').values;
    const date = document.getElementById('todo-date').values;
    const todo = new Todo(title, desc, date);
    console.log(todo);
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
  };
})();

export default dom;
