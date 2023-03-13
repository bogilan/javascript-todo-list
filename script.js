const todoInput = document.querySelector('.todo-input');
const addTodoBtn = document.querySelector('.add-todo-btn');
const todoList = document.querySelector('.todo-list');
const clearListBtn = document.querySelector('.clear-list-btn');

window.addEventListener('load', () => {
    todoList.innerHTML = localStorage.getItem('todos');
})

addTodoBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const todoItem = todoInput.value;
    if(todoItem) {
        const newTodo = document.createElement('li');
        newTodo.setAttribute("class", "todo-item");
        newTodo.innerHTML = `<span class="todo-text" contentEditable="true">${todoItem}</span><span class="complete-todo">&#x2713;</span> <span class="delete-todo">&#128465;</span>`
        todoList.appendChild(newTodo);
        todoInput.value = '';

        localStorage.setItem('todos', todoList.innerHTML);
    }
});

todoList.addEventListener('click', (e)=> {
    const todoItem = e.target.parentElement;
    if(e.target.classList.contains('delete-todo')) {
        todoItem.classList.add('deleted');
        setTimeout(()=> {
            todoItem.remove();
            localStorage.setItem('todos', todoList.innerHTML);
        }, 800);
    }
    if(e.target.classList.contains('complete-todo')) {
        todoItem.classList.toggle('completed');
        localStorage.setItem('todos', todoList.innerHTML);
    }
})

clearListBtn.addEventListener('click', ()=> {
    todoList.innerHTML = '';
    localStorage.setItem('todos', todoList.innerHTML);
})