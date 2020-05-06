const action = (() => {
  const editStatus = (todo) => {
    if (todo.status === false) {
      todo.status = true;
    } else {
      todo.status = false;
    }
  };

  const displayStatus = (todo) => {
    if (todo.status === true) {
      return 'Completed';
    }

    return 'Not completed';
  };

  const editTodo = (todo) => {
    const editBtn = document.getElementById('edit');
    editBtn.addEventListener('click', () => {
      const todoForm = document.getElementById('form-todo');
      todoForm.innerHTML = '';
      const form = document.createElement('form');
      form.innerHTML = `  <h4> Edit TODO</h4>
      <div class="form-input">
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
    });
  };
  return { editStatus, displayStatus, editTodo };
})();

export default action;
