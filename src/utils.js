const utils = (() => {
  const clearTodoForm = () => {
    document.getElementById('todo-title').value = '';
    document.getElementById('todo-desc').value = '';
    document.getElementById('todo-date').value = '';
  };

  const clearProjectForm = () => {
    document.getElementById('project-name').value = '';
  };
  return { clearProjectForm, clearTodoForm };
})();

export default utils;
