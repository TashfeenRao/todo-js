/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import Todo from './todo';
import Project from './project';
import todoList from './todoList';

const action = (() => {
  const updateTodo = (id, title, date, desc, project) => {
    const realId = parseInt(id) - 1;
    todoList.todos[realId].title = title;
    todoList.todos[realId].date = date;
    todoList.todos[realId].desc = desc;
    todoList.todos[realId].projectId = project.id;
  };


  const createTodo = (title, date, desc, project) => {
    const todo = new Todo(title, date, desc, project);
  };

  const createProject = (name) => {
    const project = new Project(name);
  };

  return {
    updateTodo,
    createTodo,
    createProject,
  };
})();

export default action;
