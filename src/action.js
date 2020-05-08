/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import Todo from './todo';
import Project from './project';
import todoList from './todoList';
import DataStorage from './DataStorage';

const action = (() => {
  const updateTodo = (id, title, date, desc, project, status, priority) => {
    const realId = parseInt(id) - 1;
    todoList.todos[realId].title = title;
    todoList.todos[realId].date = date;
    todoList.todos[realId].desc = desc;
    todoList.todos[realId].projectId = project.id;
    todoList.todos[realId].status = status;
    todoList.todos[realId].priorityHigh = priority;
    console.log(localStorage);
  };


  const createTodo = (title, date, desc, project, status, priority) => {
    const todo = new Todo(title, date, desc, project);
    todo.status = status;
    todo.priorityHigh = priority;
  };

  const deleteTodo = (todo) => {
    const realId = parseInt(todo.id) - 1;
    delete todoList.todos[realId];
    console.log(localStorage);
  };

  const createProject = (name) => {
    const project = new Project(name);
    console.log(localStorage);
  };
  const SetStatus = (statusChekBox) => {
    if (statusChekBox.checked) {
      return true;
    }
    return false;
  };


  return {
    updateTodo,
    createTodo,
    createProject,
    SetStatus,
    deleteTodo,
  };
})();

export default action;
