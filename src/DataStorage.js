/* eslint-disable prefer-const */
const DataStorage = (() => {
  let todoList = {
    todos: [],
  };

  let projectList = {
    projects: [{ id: 1, name: 'Noukod' },
      { id: 2, name: 'Microverse' },
      { id: 3, name: 'Katkat Game' },
    ],
  };
  const getTodoList = () => {
    if (sessionStorage.todoList) {
      DataStorage.todoList = JSON.parse(sessionStorage.getItem('todoList'));
    }
    return todoList;
  };

  const saveTodolist = () => {
    sessionStorage.setItem('todoList', JSON.stringify(todoList));
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