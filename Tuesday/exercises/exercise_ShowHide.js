const button = document.getElementById("box");

button.addEventListener("mouseover", function () {
    const message = document.getElementById("message");
    const list = message.classList;
    list.add("showMessage");
    list.remove("hideMessage");
});

button.addEventListener("mouseout", function () {
    const message = document.getElementById("message");
    const list = message.classList;
    list.remove("showMessage");
    list.add("hideMessage");
});

// Manipulating the DOM
function createTodo() {
    const newTodoText = document.getElementById("newTodoText").value;
    const newLi = document.createElement("li");

    newLi.textContent = newTodoText;
    document.getElementById("todoList").appendChild(newLi);
}

document.getElementById("newTodoText").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        createTodo();
    }
});

document.getElementById("addTodo").addEventListener("click", function () {
    createTodo();
});
