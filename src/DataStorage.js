/* eslint-disable prefer-const */

const DataStorage = (() => {
  let todoList = {
    todos: [],
  };

  let projectList = {
    projects: [],
  };
  const getTodoList = () => {
    if (sessionStorage.todoList) {
      todoList = JSON.parse(sessionStorage.getItem('todoList'));
    }
    return todoList;
  };

  const saveTodolist = () => {
    sessionStorage.setItem('todoList', JSON.stringify(todoList));
  };

  const saveProjectlist = (projectList) => {
    localStorage.setItem('projectList', JSON.stringify(projectList));
  };

  const getProjectList = () => {
    if (localStorage.projectList) {
      projectList = JSON.parse(localStorage.getItem('projectList'));
    }
    return projectList;
  };

  return {
    getTodoList, getProjectList, saveTodolist, saveProjectlist, todoList, projectList,
  };
})();

export default DataStorage;
