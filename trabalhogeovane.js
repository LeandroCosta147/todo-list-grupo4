function criarTarefa() {
    let campo = document.getElementById("entradaTarefa");
    let textoTarefa = campo.value.trim();

    if (textoTarefa) {
        let item = document.createElement("li");
        item.textContent = textoTarefa;

        item.addEventListener("click", function () {
            item.classList.toggle("feito");
        });

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("botao-remover");

        botaoRemover.onclick = function (evento) {
            evento.stopPropagation();
            item.remove();
        };

        item.appendChild(botaoRemover);
        document.getElementById("listaTarefas").appendChild(item);
        campo.value = "";
    }
}
