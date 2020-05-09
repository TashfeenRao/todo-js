/* eslint-disable no-unused-vars */
import css from './style.css';
import domListener from './domListener';
import DataStorage from './DataStorage';
import displayer from './displayer';

DataStorage.getTodoList();
DataStorage.getProjectList();
console.log(DataStorage.projectList.projects);
displayer.displayAllProjects(DataStorage.projectList);
displayer.displayAllTodos(DataStorage.todoList);

domListener.ListentForNewTodo();
domListener.listentForNewProject();

// console.log(DataStorage.todoList);
// console.log(DataStorage.projectList);
// console.log('getting todo and project');
// DataStorage.getTodoList();

// DataStorage.todoList.todos.push('hello');
// console.log(DataStorage.todoList);
// DataStorage.saveTodolist();
// console.log('i m from local storage');
// console.log(DataStorage.todoList);
