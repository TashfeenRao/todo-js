/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import Todo from './todo';
import Project from './project';
import todoList from './todoList';
import DataStorage from './DataStorage';

const action = (() => {
  const updateTodo = (id, title, date, desc, project, status, priority) => {
    const realId = parseInt(id) - 1;
    DataStorage.todoList.todos[realId].title = title;
    DataStorage.todoList.todos[realId].date = date;
    DataStorage.todoList.todos[realId].desc = desc;
    DataStorage.todoList.todos[realId].projectId = project.id;
    DataStorage.todoList.todos[realId].status = status;
    DataStorage.todoList.todos[realId].priorityHigh = priority;
  };


  const createTodo = (title, date, desc, project, status, priority) => {
    const todo = new Todo(title, date, desc, project);
    todo.status = status;
    todo.priorityHigh = priority;
  };

  const deleteTodo = (todo) => {
    const realId = parseInt(todo.id) - 1;
    delete DataStorage.todoList.todos[realId];
  };

  const createProject = (name) => {
    const project = new Project(name);
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
