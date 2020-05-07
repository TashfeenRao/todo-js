/* eslint-disable import/no-cycle */
/* eslint-disable radix */
/* eslint-disable no-use-before-define */
import action from './action';
import formRenderer from './formRenderer';

const displayer = (() => {
  const displayAllTodos = (todoList) => {
    let listContainer = document.querySelector('.list-container');
    listContainer = '';
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
    displaySingleTodo(todoList);
  };

  const displaySingleTodo = (todoList) => {
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
        formRenderer.renderEditTodo(todoList.todos[id]);
      });
    });
  };

  const displayAllProjects = (todoList) => {
    const projectElement = document.querySelector('.projects-container');
    projectElement.innerHTML = '';
    todoList.projects.forEach(lisproject);
    function lisproject(proj) {
      const p = document.createElement('p');
      p.innerHTML = `${proj.name}`;
      projectElement.appendChild(p);
    }
  };

  function displayProjectDropDown(todoList) {
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

  return {
    displayAllTodos, displaySingleTodo, displayAllProjects, displayProjectDropDown,
  };
})();

export default displayer;