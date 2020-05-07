/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import Todo from './todo';
import Project from './project';
import todoList from './todoList';

const action = (() => {
  const editStatus = (todo) => {
    if (todo.status === false) {
      todo.status = true;
    } else {
      todo.status = false;
    }
  };

  const updateTodo = (id, title, date, desc) => {
    const realId = parseInt(id) - 1;
    todoList.todos[realId].title = title;
    todoList.todos[realId].date = date;
    todoList.todos[realId].desc = desc;
  };

  const displayStatus = (todo) => {
    if (todo.status === true) {
      return 'Completed';
    }
    return 'Not completed';
  };

  const createTodo = (title, date, desc, project) => {
    const todo = new Todo(title, date, desc, project);
  };

  const createProject = (name) => {
    const project = new Project(name);
  };

  return {
    editStatus,
    displayStatus,
    updateTodo,
    createTodo,
    createProject,
  };
})();

export default action;
