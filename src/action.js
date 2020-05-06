/* eslint-disable no-unused-vars */
import Todo from './todo';

const action = (() => {
  const editStatus = (todo) => {
    if (todo.status === false) {
      todo.status = true;
    } else {
      todo.status = false;
    }
  };

  const updateTodo = (todo, title, date, desc) => {
    todo.title = title;
    todo.date = date;
    todo.desc = desc;
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

  return {
    editStatus, displayStatus, updateTodo, createTodo,
  };
})();

export default action;
