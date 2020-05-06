/* eslint-disable radix */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import todoList from './todoList';
import action from './action';
import formRenderer from './formRenderer';

const domListener = (() => {
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
    displaySingleTodo();
  }

  const ListentForNewTodo = () => {
    const newTbn = document.getElementById('new-todo-btn');
    newTbn.addEventListener('click', formRenderer.renderNewTodo);
    const formTodo = document.getElementById('form-todo');
    formTodo.addEventListener('submit', (n) => {
      n.preventDefault();
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      const project = document.querySelector('.project').options.selectedIndex;
      action.createTodo(title, date, desc, todoList.projects[project]);
      displayTodo();
      clearDom();
    });
  };

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

  function clearDom() {
    document.getElementById('todo-title').value = '';
    document.getElementById('todo-desc').value = '';
    document.getElementById('todo-date').value = '';
    document.getElementById('project-name').value = '';
  }

  function listentToDom() {
    const formProject = document.getElementById('form-project');

    formProject.addEventListener('submit', (p) => {
      p.preventDefault();
      const name = document.getElementById('project-name').value;
      action.createProject(name);
      displayProjectDropDown();
      displayAllProject();
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
        editTodo(todoList.todos[id]);
      });
    });
  }

  const editTodo = (todo) => {
    const editBtn = document.getElementById('edit');
    editBtn.addEventListener('click', () => {
      const todoForm = document.getElementById('form-todo');
      todoForm.innerHTML = '';
      const form = document.createElement('form');
      form.innerHTML = `  <h4> Edit TODO</h4>
      <div class="form-input edit-form">
        <label for="todo-title">Title</label>
        <input type="text" id="todo-title" value="${todo.title}" required />
      </div>

      <div class="form-input">
        <label for="todo-desc">Description</label>
        <input type="text-area" id="todo-desc" value="${todo.desc}" required />
      </div>

      <div class="form-input">
        <label for="completed">Date</label>
        <input type="date" id="todo-date" value="${todo.date}" required/>
      </div>

      <div class="form-input">
        <label for="completed">Completed?</label>
        <input type="checkbox" id="todo-status" />
      </div>
      <div class="form-input">
        <button id="editbtn" class="todo-btn" type="submit">Edit</button>
      </div>`;
      todoForm.appendChild(form);
      listenForEdit(todo.id);
    });
  };

  const listenForEdit = (todo) => {
    const form = document.querySelector('.edit-form');
    form.addEventListener('submit', (n) => {
      n.preventDefault();
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      const project = document.querySelector('.project').options.selectedIndex;
      action.updateTodo(todo, title, date, desc);
      displayTodo();
      clearDom();
    });
  };

  return {
    displayTodo,
    displaySingleTodo,
    listentToDom,
    displayProjectDropDown,
    displayAllProject,
    listenForEdit,
    ListentForNewTodo,
  };
})();

export default domListener;
