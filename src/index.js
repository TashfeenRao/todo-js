/* eslint-disable no-unused-vars */
import css from './style.css';
import domListener from './domListener';
import DataStorage from './DataStorage';

domListener.ListentForNewTodo();
domListener.listentForNewProject();

// console.log(DataStorage.todoList);
// console.log(DataStorage.projectList);
// console.log('getting todo and project');
// DataStorage.getTodoList();
DataStorage.getProjectList();
// console.log(DataStorage.todoList);
// console.log(DataStorage.projectList);

// DataStorage.todoList.todos.push('hello');
// console.log(DataStorage.todoList);
// DataStorage.saveTodolist();
// console.log('i m from local storage');
DataStorage.getTodoList();
// console.log(DataStorage.todoList);
