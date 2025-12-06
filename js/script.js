document.addEventListener("DOMContentLoaded", function() {

    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    function criarEAdicionarTarefa(textoDaTarefa) {
        const li = document.createElement("li");

        const textoNode = document.createTextNode(textoDaTarefa + " ");
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add("delete-button");

        li.appendChild(textoNode);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
    }

    todoForm.addEventListener("submit", function(e) {
        e.preventDefault(); 

        const novoTexto = todoInput.value.trim();

        if (novoTexto !== "") {
            criarEAdicionarTarefa(novoTexto);

            todoInput.value = "";
            todoInput.focus();
        }
    });

    todoList.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete-button")) {
            const liParaRemover = e.target.parentElement;
            liParaRemover.remove();
        }
    });

});