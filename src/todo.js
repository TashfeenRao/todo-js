/* eslint-disable no-plusplus */
import todoList from './todoList';

let todoId = 0;

class Todo {
  constructor(title, date, desc, project) {
    this.id = ++todoId;
    this.title = title;
    this.date = date;
    this.desc = desc;
    this.status = false;
    if (project) {
      this.setProject(project);
    }
    todoList.todos.push(this);
  }

  setProject(project) {
    this.projectId = project.id;
  }

  projects() {
    return todoList.projects.filter(
      (project) => project.id === this.projectId,
    );
  }
}

export default Todo;
