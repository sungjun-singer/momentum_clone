const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    toDos.push(newTodo);
    todoInput.value = "";
    paintTodo(newTodo);
    saveTodos();
}

let toDos = [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function sayHello(item){
    console.log(`this is the turn of ${item}`);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);

if(savedTodos !== null){
    const parseSavedTodos = JSON.parse(savedTodos);
    toDos = parseSavedTodos;
    parseSavedTodos.forEach(paintTodo);
}