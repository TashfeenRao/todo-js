/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import todoList from './todoList';
import action from './action';
import formRenderer from './formRenderer';
import displayer from './displayer';
import utils from './utils';

const domListener = (() => {
  const listenForListProject = () => {
    const listproject = document.getElementById('project-drop');
    console.log(listproject);
    listproject.addEventListener('click', console.log(listproject));
  };


  const ListentForNewTodo = () => {
    const newTbn = document.getElementById('new-todo-btn');
    newTbn.addEventListener('click',
      formRenderer.renderNewTodo);
    const formTodo = document.getElementById('form-todo');
    formTodo.addEventListener('submit', (n) => {
      n.preventDefault();
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      const project = document.querySelector('.project').options.selectedIndex;
      action.createTodo(title, date, desc, todoList.projects[project]);
      displayer.displayAllTodos();
      utils.clearTodoForm();
    });
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

  function listentForNewProject() {
    const formProject = document.getElementById('form-project');
    formProject.addEventListener('submit', (p) => {
      p.preventDefault();
      const name = document.getElementById('project-name').value;
      action.createProject(name);
      displayer.displayAllProjects(todoList);
      utils.clearProjectForm();
    });
  }

  const listenForEdit = (todo) => {
    const form = document.querySelector('.edit-form');
    form.addEventListener('submit', (n) => {
      n.preventDefault();
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      const project = document.querySelector('.project').options.selectedIndex;
      action.updateTodo(todo, title, date, desc);
      displayer.displayAllTodos(todoList);
      utils.clearTodoForm();
    });
  };

  return {
    listentForNewProject,
    displayProjectDropDown,
    listenForEdit,
    ListentForNewTodo,
  };
})();

export default domListener;
