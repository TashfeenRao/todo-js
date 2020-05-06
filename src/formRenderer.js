/* eslint-disable import/no-cycle */
import domListener from './domListener';

const formRenderer = (() => {
  const renderNewTodo = () => {
    const todoFormContainer = document.getElementById('form-todo');
    todoFormContainer.innerHTML = '';
    todoFormContainer.innerHTML = `         <form id="form-todo">
        <h4> NEW TODO</h4>
        <div class="form-input">
          <label for="todo-title">Title</label>
          <input type="text" id="todo-title" value="" required />
        </div>
    
        <div class="form-input">
          <label for="todo-desc">Description</label>
          <input type="text-area" id="todo-desc" value="" required />
        </div>
    
        <div class="form-input">
          <label for="completed">Date</label>
          <input type="date" id="todo-date" value="" required/>
        </div>
    
        <div class="form-input">
          <label for="project">Select project for this todo</label>
          <select class="project" id="project-drop" required>
    
          </select>
        </div>
    
        <div class="form-input">
          <label for="completed">Completed?</label>
          <input type="checkbox" id="todo-status" />
        </div>
        <div class="form-input">
          <button id="saver" class="todo-btn" type="submit">Save</button>
        </div>
      </form>`;
  };

  const renderEditTodo = (todo) => {
    const editBtn = document.getElementById('edit');
    editBtn.addEventListener('click', () => {
      const todoForm = document.getElementById('form-todo');
      todoForm.innerHTML = '';
      const form = document.createElement('form');
      form.innerHTML = `  <h4> Edit TODO</h4>
      <div class="form-input edit-form">
        <label for="todo-title">Title</label>
        <input type="text" id="todo-title" value="${todo.title}" required />
      </div>

      <div class="form-input">
        <label for="todo-desc">Description</label>
        <input type="text-area" id="todo-desc" value="${todo.desc}" required />
      </div>

      <div class="form-input">
        <label for="completed">Date</label>
        <input type="date" id="todo-date" value="${todo.date}" required/>
      </div>

      <div class="form-input">
        <label for="completed">Completed?</label>
        <input type="checkbox" id="todo-status" />
      </div>
      <div class="form-input">
        <button id="editbtn" class="todo-btn" type="submit">Edit</button>
      </div>`;
      todoForm.appendChild(form);
      domListener.listenForEdit(todo.id);
    });
  };

  return { renderNewTodo, renderEditTodo };
})();

export default formRenderer;
