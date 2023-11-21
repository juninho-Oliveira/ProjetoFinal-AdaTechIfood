/*
Lógica de Programação - Projeto final
O que?
Desenvolver, utilizando os conceitos abordados ao longo do módulo, uma aplicação de lista de tarefas (ToDo List).

---

Requisitos
Dentre as funcionalidades, espera-se que seja possível:

Adicionar uma tarefa
Editar uma tarefa salva
Remover uma tarefa salva
Listar todas as tarefas salvas
Obter uma tarefa, através de um parâmetro (id)

---

Observações
Não haverá a persistência das tarefas em banco de dados. Para isso, podem utilizar um array para armazenar a lista das tarefas cadastradas.
*/

let lista = [
  {id: 1, nome: "Trabalhar", status: "Pendente"},
];

//Adicionar uma tarefa
function addTarefa (id, nome, status) {
  lista.push({id, nome, status})
  return lista
}

addTarefa(2, "Estudar", "Em andamento")
addTarefa(3, "Compras", "Pendente")

//Editar uma tarefa salva
function editarTarefa(nome) {

}

editarTarefa()

//Remover uma tarefa salva
function removerTarefa (nome) {
  for(i in lista) {
    if(nome === lista[i].nome) {
      lista.splice(i, 1)
      return `Tarefa ${nome}, removida!`
    }
  }
  return `Tarefa ${nome}, não existe na sua lista de tarefas `
}

removerTarefa('Estudar')


//Listar todas as tarefas salvas
function listarTarefasSalva (lista) {
  lista.forEach(element => {
    console.log(element)
  });
}

listarTarefasSalva(lista)



//Obter uma tarefa, através de um parâmetro (id)
function idTarefa (id) {
  for(i in lista) {
    if(id === lista[i].id) {
      return console.log(`ID: ${id} Nome: ${lista[i].nome} Status: ${lista[i].status}`)
    }
  }
  return console.log(`Tarefa com o ID: ${id}, não existe na sua lista de tarefas `)

}

idTarefa(3)
idTarefa(1)
idTarefa(2)
