/* eslint-disable import/no-cycle */
import domListener from './domListener';
import todoList from './todoList';
import displayer from './displayer';

const formRenderer = (() => {
  const renderNewTodo = () => {
    const todoFormContainer = document.getElementById('form-todo');
    todoFormContainer.innerHTML = '';
    todoFormContainer.innerHTML = ` <form id="new-todo-form">
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
          <label for="completed">Due date</label>
          <input type="date" id="todo-date" value="" required/>
        </div>
    
        <div class="form-input">
          <label for="project">Select project for this todo</label>
          <select class="project" id="project-drop" required>
    
          </select>
        </div>
    
        <div class="form-input">
        <div class="chek-complete">
          <label for="completed">Completed?</label>
          <input type="checkbox" id="todo-status" />
        </div>

        <div class="form-priority">
            <label for="priority">Priority high</label>
            <input type="checkbox" id="todo-priority" />
        </div>
        </div>

      

        <div class="form-input">
          <button id="saver" class="todo-btn" type="submit">Save</button>
        </div>
      </form>`;
    displayer.displayProjectDropDown(todoList);
    domListener.hadleNewTodo();
  };

  const renderEditTodo = (todo) => {
    const editBtn = document.getElementById('edit-icon');
    editBtn.addEventListener('click', () => {
      const todoForm = document.getElementById('form-todo');
      todoForm.innerHTML = '';
      todoForm.innerHTML = ` 
      <form id="edit-todo-form">
      <h4> Edit TODO</h4>
      <div class="form-input">
        <label for="todo-title">Title</label>
        <input type="text" id="todo-title" value="${todo.title}" required />
      </div>

      <div class="form-input">
        <label for="todo-desc">Description</label>
        <input type="text-area" id="todo-desc" value="${todo.desc}" required />
      </div>

      <div class="form-input">
        <label for="Du-date">Due date</label>
        <input type="date" id="todo-date" value="${todo.date}" required/>
      </div>

      <div class="form-input">
      <label for="project">Select project for this todo</label>
      <select class="project" id="project-drop" required>

      </select>
    </div>

    <div class="form-input chec-boxlist">
    <div class="chek-complete">
      <label for="completed">Completed?</label>
      <input type="checkbox" id="todo-status" />
    </div>

    <div class="form-priority">
        <label for="priority">Priority high?</label>
        <input type="checkbox" id="todo-priority" />
    </div>
    </div>


      <div class="form-input">
        <button id="editbtn" class="todo-btn" type="submit">Edit</button>
      </div>
      </form>`;
      displayer.displayProjectDropDownForEdit(todo, todoList);
      domListener.listenForEdit(todo.id);
    });
  };

  const renderNewPorjectForm = () => {
    const formContainer = document.getElementById('form-todo');
    formContainer.innerHTML = '';
    formContainer.innerHTML = `<form id="form-project">
     <h4>NEW PROJECT</h4>

     <div class="form-input">
       <label for="todo-projec-tile">Project Name</label>
       <input type="text" id="project-name" required />
     </div>
     <div class="form-input">
       <button id="saver" class="project-btn" type="submit">Save</button>
     </div>
   </form>`;
    domListener.handleNewProject();
  };

  return { renderNewTodo, renderEditTodo, renderNewPorjectForm };
})();

export default formRenderer;
