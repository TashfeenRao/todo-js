/* eslint-disable no-plusplus */
import DataStorage from './DataStorage';

let todoId = DataStorage.todoList.todos.length;

class Todo {
  constructor(title, date, desc, project) {
    this.id = ++todoId;
    this.title = title;
    this.date = date;
    this.desc = desc;
    this.priorityHigh = false;
    this.status = false;
    if (project) {
      this.setProject(project);
    }
    DataStorage.todoList.todos.push(this);
  }

  setProject(project) {
    this.projectId = project.id;
  }
}

export default Todo;