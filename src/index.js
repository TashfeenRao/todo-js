/* eslint-disable no-unused-vars */
import css from './style.css';
import domListener from './domListener';
import DataStorage from './DataStorage';
import displayer from './displayer';
import defaulProject from './defaultProject';

DataStorage.getTodoList();
DataStorage.getProjectList();
defaulProject.seed();
displayer.displayAllProjects(DataStorage.projectList);
displayer.displayAllTodos(DataStorage.todoList);

domListener.ListentForNewTodo();
domListener.listentForNewProject();