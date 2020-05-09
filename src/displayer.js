/* eslint-disable import/no-cycle */
/* eslint-disable radix */
/* eslint-disable no-use-before-define */
import formRenderer from './formRenderer';
import DataStorage from './DataStorage';
import domListener from './domListener';

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
      displayColorForPriority(todo, li);
      li.innerHTML = `<h2 >${todo.title}</h2>
      <strong id="project-name">${DataStorage.projectList.projects[todo.projectId - 1].name}</strong>
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
        <strong id="project-name">${DataStorage.projectList.projects[todo.projectId - 1].name}</strong>
       ${displayTodoStatus(todo)}`;
      listContainer.appendChild(li);
    }
    displaySingleTodo(DataStorage.todoList);
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
        domListener.listenForDelete(todoList.todos[id]);
      });
    });
  };

  const displayAllProjects = (projectList) => {
    const projectElement = document.querySelector('.projects-container');
    projectElement.innerHTML = '';
    projectList.projects.forEach(lisproject);
    function lisproject(proj) {
      const p = document.createElement('p');
      p.id = 'project-item';
      p.dataset.id = `${proj.id}`;
      p.innerHTML = `${proj.name}`;
      projectElement.appendChild(p);
    }
    domListener.listenForDisplayProjecToto();
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

  function displayProjectDropDownForEdit(todo, todoList) {
    const listproject = document.querySelector('.project');
    listproject.innerHTML = '';
    const proj = todoList.projects;
    proj.forEach(getProjects);
    function getProjects(p) {
      const option = document.createElement('option');
      option.innerHTML = `<option dataAtribute ="${p.id}"
      >${p.name}</option>`;
      listproject.appendChild(option);
      displProjectCondition(todo, p, listproject);
    }
  }

  const displProjectCondition = (todo, project, listproject) => {
    if (todo.projectId === project.id) {
      const id = parseInt(project.id) - 1;
      listproject.selectedIndex = id;
    }
  };

  const displayColorForPriority = (todo, li) => {
    if (todo.priorityHigh === true) {
      li.style.border = '1px solid red';
      li.style.backgroundColor = '#c5df32';
    }
  };

  const displayStatusForEdit = (todo) => {
    const CheckboxStatus = document.getElementById('todo-status');
    if (todo.status === true) {
      CheckboxStatus.checked = true;
    } else CheckboxStatus.checked = false;
  };

  const displayPriorityForEdit = (todo) => {
    const CheckboxStatus = document.getElementById('todo-priority');
    if (todo.priorityHigh === true) {
      CheckboxStatus.checked = true;
    } else CheckboxStatus.checked = false;
  };

  return {
    displayTodoStatus,
    displayAllTodos,
    displaySingleTodo,
    displayAllProjects,
    displayProjectDropDown,
    displayTodoForProject,
    displayProjectDropDownForEdit,
    displayColorForPriority,
    displayStatusForEdit,
    displayPriorityForEdit,
  };
})();

export default displayer;