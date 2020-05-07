const utils = (() => {
  const clearTodoForm = () => {
    document.getElementById('todo-title').value = '';
    document.getElementById('todo-desc').value = '';
    document.getElementById('todo-date').value = '';
  };

  const clearProjectForm = () => {
    document.getElementById('project-name').value = '';
  };

  const clearTodoDom = () => {
    const todoLi = document.querySelectorAll('#todo-item');
    const liContainer = document.querySelector('.list-container');
    const singleLi = document.querySelector('.single-item-container');

    liContainer.innerHTML = '';
    singleLi.innerHTML = '';
    todoLi.innerHtml = '';
  };
  return { clearProjectForm, clearTodoForm, clearTodoDom };
})();

export default utils;
