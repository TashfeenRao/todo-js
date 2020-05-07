/* eslint-disable no-plusplus */
import todoList from './todoList';

let projecId = 0;

class Project {
  constructor(name) {
    this.id = ++projecId;
    this.name = name;
    todoList.projects.push(this);
  }

  todos() {
    return todoList.todos.filter(
      (todo) => todo.projectId === this.id,
    );
  }
}

export default Project;