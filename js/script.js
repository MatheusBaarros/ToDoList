// Espera todo o HTML carregar antes de rodar o script
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. SELECIONAR OS ELEMENTOS ---
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    
    // --- 2. FUNÇÃO PARA ADICIONAR TAREFA ---
    function criarEAdicionarTarefa(textoDaTarefa) {
        // 1. Cria o elemento <li> (o item da lista)
        const li = document.createElement("li");

        // 2. Cria o texto da tarefa
        // (Usamos createTextNode para adicionar o texto antes do botão)
        const textoNode = document.createTextNode(textoDaTarefa + " "); // Adiciona um espaço
        
        // 3. Cria o botão de excluir
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add("delete-button"); // Adiciona a classe para o CSS

        // 4. Monta o <li>:
        li.appendChild(textoNode);   // Coloca o texto dentro do <li>
        li.appendChild(deleteButton); // Coloca o botão dentro do <li>

        // 5. Adiciona o <li> pronto na lista <ul>
        todoList.appendChild(li);
    }

    
    // --- 3. EVENTO PARA QUANDO O FORMULÁRIO FOR ENVIADO ---
    todoForm.addEventListener("submit", function(e) {
        // Previne que o formulário recarregue a página
        e.preventDefault(); 

        // Pega o valor do input, tirando espaços extras
        const novoTexto = todoInput.value.trim();

        // Só adiciona se o usuário digitou algo
        if (novoTexto !== "") {
            // Chama a função para criar o item
            criarEAdicionarTarefa(novoTexto);

            // Limpa o campo de input
            todoInput.value = "";
            // Coloca o foco de volta no input
            todoInput.focus();
        }
    });

    
    // --- 4. EVENTO PARA REMOVER TAREFA (Event Delegation) ---
    // Em vez de adicionar um listener em cada botão (o que não funcionaria
    // para novos botões), adicionamos UM listener na lista PAI.
    todoList.addEventListener("click", function(e) {
        
        // Verifica se o item clicado (e.target) TEM a classe 'delete-button'
        if (e.target.classList.contains("delete-button")) {
            
            // Se sim, pega o elemento <li> (que é o "pai" do botão)
            const liParaRemover = e.target.parentElement;
            
            // Remove o <li>
            liParaRemover.remove();
        }
    });

});