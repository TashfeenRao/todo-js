domListener.ListentForNewTodo();
domListener.listentForNewProject();
const fName = 'hello';
const lName = 'hi';
const todo = { name: fName, Lasname: lName };
if (sessionStorage.todos) {
  const todos = JSON.parse(sessionStorage.getItem('todos'));
} else {
  const todos = [];
}
todos.push(todo);
sessionStorage.setItem('todos', JSON.stringify(todos));

const retrievedObject = sessionStorage.getItem('todo');
console.log('retrievedObject: ', JSON.parse(retrievedObject));