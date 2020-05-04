import todoList from './todoList';
/* eslint-disable no-plusplus */

let projecId = 0;

class Project {
  constructor(name) {
    this.id = ++projecId;
    this.name = name;
    todoList.projects.push(this);
  }
}

export default Project;