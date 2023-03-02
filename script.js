//your code here

const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', () => {
  const newTodo = newTodoInput.value.trim(); // remove whitespace from start and end
  if (newTodo !== '') {
    const todoItem = document.createElement('li');
    todoItem.textContent = newTodo;
    todoList.appendChild(todoItem);
    newTodoInput.value = '';
  }
});

newTodoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const newTodo = newTodoInput.value.trim(); // remove whitespace from start and end
    if (newTodo !== '') {
      const todoItem = document.createElement('li');
      todoItem.textContent = newTodo;
      todoList.appendChild(todoItem);
      newTodoInput.value = '';
    }
  }
});


