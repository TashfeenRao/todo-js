/* eslint-disable no-plusplus */
import DataStorage from './DataStorage';

let projecId = 0;

class Project {
  constructor(name) {
    this.id = ++projecId;
    this.name = name;
    DataStorage.projectList.projects.push(this);
  }

  todos() {
    return DataStorage.todoList.todos.filter(
      (todo) => todo.projectId === this.id,
    );
  }
}

export default Project;