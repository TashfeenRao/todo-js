/* eslint-disable no-plusplus */
import todoList from './todoList';

let todoId = 0;

class Todo {
  constructor(title, date, desc) {
    this.id = ++todoId;
    this.title = title;
    this.date = date;
    this.desc = desc;
    this.status = false;
    todoList.todos.push(this);
  }
}

export default Todo;