/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import todoList from './todoList';
import action from './action';
import formRenderer from './formRenderer';
import displayer from './displayer';
import utils from './utils';

const domListener = (() => {
  const listentForNewProject = () => {
    const newProjectBtn = document.getElementById('new-project-btn');
    newProjectBtn.addEventListener('click', formRenderer.renderNewPorjectForm);
  };


  const ListentForNewTodo = () => {
    const newTbn = document.getElementById('new-todo-btn');
    newTbn.addEventListener('click', formRenderer.renderNewTodo);
  };

  const hadleNewTodo = () => {
    const formTodo = document.getElementById('new-todo-form');
    formTodo.addEventListener('submit', (n) => {
      n.preventDefault();
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      const project = document.querySelector('.project').options.selectedIndex;
      action.createTodo(title, date, desc, todoList.projects[project]);
      displayer.displayAllTodos(todoList);
      utils.clearTodoForm();
    });
  };

  function handleNewProject() {
    const formProject = document.getElementById('form-project');
    formProject.addEventListener('submit', (p) => {
      p.preventDefault();
      const name = document.getElementById('project-name').value;
      action.createProject(name);
      displayer.displayAllProjects(todoList);
      utils.clearProjectForm();
    });
  }

  const listenForEdit = (id) => {
    const form = document.getElementById('edit-todo-form');
    form.addEventListener('submit', (n) => {
      n.preventDefault();
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      const project = document.querySelector('.project').options.selectedIndex;
      action.updateTodo(id, title, date, desc, todoList.projects[project]);
      displayer.displayAllTodos(todoList);
      utils.clearTodoForm();
    });
  };

  return {
    listentForNewProject,
    handleNewProject,
    listenForEdit,
    ListentForNewTodo,
    hadleNewTodo,
  };
})();

export default domListener;
