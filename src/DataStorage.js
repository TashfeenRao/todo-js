/* eslint-disable prefer-const */
const DataStorage = (() => {
  let todoList = {
    todos: [],
  };

  let projectList = {
    projects: [],
  };
  const getTodoList = () => {
    if (localStorage.todoList) {
      DataStorage.todoList = JSON.parse(localStorage.getItem('todoList'));
    }
    return todoList;
  };

  const saveTodolist = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  };

  const saveProjectlist = () => {
    localStorage.setItem('projectList', JSON.stringify(projectList));
  };

  const getProjectList = () => {
    if (localStorage.projectList) {
      DataStorage.projectList = JSON.parse(localStorage.getItem('projectList'));
    }
    return projectList;
  };

  return {
    getTodoList, getProjectList, saveTodolist, saveProjectlist, todoList, projectList,
  };
})();

export default DataStorage;