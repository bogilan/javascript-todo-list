const todoInput = document.querySelector('.todo-input');
const addTodoBtn = document.querySelector('.add-todo-btn');
const todoList = document.querySelector('.todo-list');


addTodoBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const todoItem = todoInput.value;
    if(todoItem) {
        const newTodo = document.createElement('li');
        newTodo.setAttribute("class", "todo-item");
        newTodo.innerHTML = `<span class="todo-text">${todoItem}</span><span class="complete-todo">&#x2713;</span> <span class="delete-todo">&#128465;</span>`
        todoList.appendChild(newTodo);
        todoInput.value = '';
    }
});

todoList.addEventListener('click', (e)=> {
    const todoItem = e.target.parentElement;
    if(e.target.classList.contains('delete-todo')) {
        todoItem.classList.add('deleted');
        setTimeout(()=> {
            todoItem.remove()}, 800);
    }
    if(e.target.classList.contains('complete-todo')) {
        todoItem.classList.toggle('completed');
    }
})
