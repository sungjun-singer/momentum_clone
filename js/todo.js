const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

function handleTodoSubmit(event){ 
    event.preventDefault(); // submit의 기본 동작 막아준다.
    const newTodo = todoInput.value; // 텍스트박스에 쓴 할일을 newTodo변수에 저장하고
    const newTodoObj = { // newTodoObj 객체를 생성한다. text : newTodo , id : Date.now()로 랜덤번호를 생성.
        text : newTodo,
        id : Date.now(),
    }
    toDos.push(newTodoObj); // 전역으로 생성된 toDos배열에 newTodoObj 객체를 추가한다.
    todoInput.value = ""; // 추가한 후에 텍스트박스는 빈칸으로 두고.
    paintTodo(newTodoObj); // paintTodo함수를 실행한다.
    saveTodos(); // saveTodos 함수를 실행한다.
}

let toDos = []; // 전역으로 toDos배열을 생성한다.

function saveTodos(){ // localStorage에 키는 "todos" 값은 toDos배열의 값을 텍스트로 변환해서 저장하는 함수.
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => (todo.id).toString() !== li.id);
    // console.log(toDos);
    saveTodos();
}

function paintTodo(newTodoObj){ // 화면에 li형태로 할일 목록을 그려주는 함수
    const li = document.createElement("li"); // li태그 생성
    li.id = newTodoObj.id; // newTodoObj객체의 id를 li태그의 id로 설정한다.
    const span = document.createElement("span"); // span태그 생성
    span.innerText = newTodoObj.text; // span태그의 텍스트 값을 newTodoObj객체의 text값으로 설정한다.
    const button = document.createElement("button"); // button태그 생성
    button.innerText = "❌"; // button태그 안의 값을 ❌로 한다.
    button.addEventListener("click", deleteTodo); // 버튼을 눌렀을때 deleteTodo함수가 실행되도록 한다.
    li.appendChild(span); // li태그 안에 span태그를 넣는다
    li.appendChild(button); // li태그 안에 button태그를 넣는다
    todoList.appendChild(li); // todoList(ul태그)안에 li태그를 넣는다.
}

todoForm.addEventListener("submit", handleTodoSubmit); // todoForm에 submit이벤트가 발생했을때마다 handleTodoSubmit 함수를 실행시킨다.

const savedTodos = localStorage.getItem(TODOS_KEY); // saveTodos에 localStorage에서 TODOS_KEY("todos")의 키의 value값을 가져와서 저장한다.

if(savedTodos !== null){
    const parseSavedTodos = JSON.parse(savedTodos); // JSON.parse를 통해 텍스트를 배열로 전환하고 parseSavedTodos에 저장한다.
    toDos = parseSavedTodos; // todos에 parseSavedTodos 할당.
    parseSavedTodos.forEach(paintTodo); // parseSavedTodos 배열의 각각의 요소에 paintTodo함수를 적용한다. forEach는 item매개변수를 할당시킨다.
}