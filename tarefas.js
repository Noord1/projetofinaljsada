let tarefas = [];
let opcaoEscolhida = '';

while (opcaoEscolhida !== '5') {
    opcaoEscolhida = prompt(
        "MENU DE TAREFAS\n\n" +
        "1. Adicionar tarefa\n" +
        "2. Editar tarefa\n" +
        "3. Remover tarefa\n" +
        "4. Listar tarefas\n" +
        "5. Sair do Menu\n\n" +
        "Digite a opção:"
    );

    switch (opcaoEscolhida) {
        case '1':
            const nomeDaTarefa = prompt("Digite o nome da tarefa:");
            if (nomeDaTarefa) {
                tarefas.push(nomeDaTarefa + " - Pendente");
                console.log("Tarefa adicionada com sucesso!");
            } else {
                alert("O nome da tarefa não pode ser vazio.");
            }
            break;

        case '2':
            console.clear();
            console.log("--- Qual tarefa você quer editar? ---");
            for (let contador = 0; contador < tarefas.length; contador++) {
                console.log((contador + 1) + ". " + tarefas[contador]);
            }
            const numeroParaEditar = parseInt(prompt("Digite o NÚMERO da tarefa para editar:"));
            const indiceParaEditar = numeroParaEditar - 1;

            if (indiceParaEditar >= 0 && indiceParaEditar < tarefas.length) {
                const tarefaAtual = tarefas[indiceParaEditar];
                const partes = tarefaAtual.split(' - ');
                const nomeAntigo = partes[0];
                const statusAntigo = partes[1];
                
                const tarefasAtualizadas = tarefas.map((tarefa, indice) => {
                    if (indice === indiceParaEditar) {
                        const novoNome = prompt("Digite o novo nome da tarefa:", nomeAntigo);
                        const novoStatus = prompt("Digite o novo status da tarefa:", statusAntigo);
                        return novoNome + " - " + novoStatus;
                    } else {
                        return tarefa;
                    }
                });

                tarefas = tarefasAtualizadas;
                console.log("Tarefa atualizada com sucesso!");
            } else {
                alert("Número de tarefa inválido.");
            }
            break;

        case '3':
            console.clear();
            console.log("--- Qual tarefa você deseja remover? ---");
            for (let contador = 0; contador < tarefas.length; contador++) {
                console.log((contador + 1) + ". " + tarefas[contador]);
            }
            const numeroParaRemover = parseInt(prompt("Digite o NÚMERO da tarefa para remover:"));
            const indiceParaRemover = numeroParaRemover - 1;

            if (indiceParaRemover >= 0 && indiceParaRemover < tarefas.length) {
                const tarefasFiltradas = tarefas.filter((tarefa, indice) => {
                    return indice !== indiceParaRemover;
                });
                
                tarefas = tarefasFiltradas;
                console.log("Tarefa removida com sucesso!");
            } else {
                alert("Número de tarefa inválido.");
            }
            break;

        case '4':
            console.clear();
            console.log("↓ LISTA DE TAREFAS ↓");
            if (tarefas.length === 0) {
                console.log("Nenhuma tarefa cadastrada.");
            } else {
                for (let contador = 0; contador < tarefas.length; contador++) {
                    console.log((contador + 1) + ". " + tarefas[contador]);
                }
            }
            console.log("---FIM DA LISTA---");
            break;

        case '5':
            console.log("Saindo do menu...");
            break;
        case null:
            console.log("Operação cancelada. Saindo do menu.");
            opcaoEscolhida = '5';
            break;
        default:
            alert("Opção inválida.");
            break;
    }
}