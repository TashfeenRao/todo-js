/* eslint-disable no-unused-vars */
import css from './style.css';
import dom from './dom';

dom.displayTodo();

const form = document.getElementById('form-todo');
form.addEventListener('submit', (prev) => {
  prev.preventDefault();
  dom.createTodo();
});