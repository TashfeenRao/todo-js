/* eslint-disable import/no-cycle */
/* eslint-disable radix */
/* eslint-disable no-use-before-define */
import formRenderer from './formRenderer';
import todoList from './todoList';

const displayer = (() => {
  const headLine = document.getElementById('headLine');

  const displayTodoStatus = (todo) => {
    if (todo.status === true) {
      return `<strong id="status" style="background-color: rgb(80, 253, 103);"
      >Completed</strong> <strong id="status" style="background-color: hsl(305, 59%, 51%);"
      >Due date ${todo.date}</strong>`;
    }
    return `<strong id="status" style="background-color: rgb(245, 106, 106);"
    >Not completed</strong
  > <strong id="status" style="background-color: hsl(305, 59%, 51%);"
  >Due date ${todo.date}</strong>`;
  };

  const displayAllTodos = (todoList) => {
    headLine.innerHTML = 'ALL TODOS';
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = '';
    const todo = todoList.todos;
    todo.forEach(fetch);
    function fetch(todo) {
      const li = document.createElement('li');
      li.id = 'todo-item';
      li.dataset.id = `${todo.id}`;
      li.innerHTML = `
        <h2>${todo.title}</h2>
        <strong id="project-name">${todo.projects()[0].name}</strong>
       ${displayTodoStatus(todo)}`;
      listContainer.appendChild(li);
    }
    displaySingleTodo(todoList);
  };

  const displayTodoForProject = (todos) => {
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = '';
    todos.forEach(fetch);
    function fetch(todo) {
      const li = document.createElement('li');
      li.id = 'todo-item';
      li.dataset.id = `${todo.id}`;
      li.innerHTML = `
        <h2>${todo.title}</h2>
        <strong id="project-name">${todo.projects()[0].name}</strong>
       ${displayTodoStatus(todo)}`;
      listContainer.appendChild(li);
    }
    displaySingleTodo(todoList);
  };

  const displaySingleTodo = (todoList) => {
    const todoLi = document.querySelectorAll('#todo-item');
    const title = document.getElementById('single-title');
    const desc = document.getElementById('desc');
    const status = document.getElementById('single-status');
    const editBtn = document.getElementById('edit');
    const deletBtn = document.getElementById('delete');
    todoLi.forEach((elem) => {
      elem.addEventListener('click', () => {
        const str = elem.getAttribute('data-id');
        const id = parseInt(str) - 1;
        title.innerHTML = todoList.todos[id].title;
        desc.innerHTML = todoList.todos[id].desc;
        status.innerHTML = displayTodoStatus(todoList.todos[id]);
        editBtn.innerHTML = '<i class="far fa-trash-alt" id="delete-icon"></i>';
        deletBtn.innerHTML = '<i class="far fa-edit" id="edit-icon"></i>';
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
      p.id = 'project-item';
      p.dataset.id = `${proj.id}`;
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
    displayTodoStatus,
    displayAllTodos,
    displaySingleTodo,
    displayAllProjects,
    displayProjectDropDown,
    displayTodoForProject,
  };
})();

export default displayer;
