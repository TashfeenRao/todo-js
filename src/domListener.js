/* eslint-disable radix */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import DataStorage from './DataStorage';
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
      const statusChekBox = document.getElementById('todo-status');
      const priorityChekBox = document.getElementById('todo-priority');
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      const project = document.querySelector('.project').options.selectedIndex;
      const status = action.SetStatus(statusChekBox);
      const priority = action.SetStatus(priorityChekBox);
      action.createTodo(title, date, desc, DataStorage.projectList.projects[project], status, priority);
      displayer.displayAllTodos(DataStorage.todoList);
      utils.clearTodoForm();
    });
  };

  const listenForDisplayProjecToto = () => {
    const headLine = document.getElementById('headLine');
    const projects = document.querySelectorAll('#project-item');
    projects.forEach((data) => {
      data.addEventListener('click', () => {
        const str = data.getAttribute('data-id');
        const id = parseInt(str) - 1;
        displayer.displayTodoForProject(todoList.projects[id].todos());
        headLine.innerHTML = `ALL TODOS FOR ${todoList.projects[id].name}`;
      });
    });
  };

  function handleNewProject() {
    const formProject = document.getElementById('form-project');
    formProject.addEventListener('submit', (p) => {
      p.preventDefault();
      const name = document.getElementById('project-name').value;
      action.createProject(name);
      displayer.displayAllProjects(DataStorage.projectList);
      listenForDisplayProjecToto();
      utils.clearProjectForm();
    });
  }

  const listenForEdit = (id) => {
    const form = document.getElementById('edit-todo-form');
    form.addEventListener('submit', (n) => {
      n.preventDefault();
      const priorityChekBox = document.getElementById('todo-priority');
      const statusChekBox = document.getElementById('todo-status');
      const title = document.getElementById('todo-title').value;
      const desc = document.getElementById('todo-desc').value;
      const date = document.getElementById('todo-date').value;
      const status = action.SetStatus(statusChekBox);
      const priority = action.SetStatus(priorityChekBox);
      const project = document.querySelector('.project').options.selectedIndex;
      action.updateTodo(id, title, date, desc, todoList.projects[project], status, priority);
      displayer.displayAllTodos(todoList);
      utils.clearTodoForm();
    });
  };

  const listenForDelete = (todo) => {
    const deletBtn = document.getElementById('delete-icon');
    deletBtn.onclick = () => {
      action.deleteTodo(todo);
      utils.clearTodoDom();
    };
  };
  return {
    listentForNewProject,
    handleNewProject,
    listenForEdit,
    ListentForNewTodo,
    hadleNewTodo,
    listenForDisplayProjecToto,
    listenForDelete,
  };
})();

export default domListener;
