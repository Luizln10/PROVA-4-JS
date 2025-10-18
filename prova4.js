let listaCompras = []

while (true) {
    let acao = prompt("Escolha uma ação: adicionar, remover, atualizar, exibir, sair").toLowerCase()

    if (acao === "sair") break

    if (acao === "adicionar") {
        let item = prompt("Digite o item para adicionar:")
        listaCompras.push(item)
    } else if (acao === "remover") {
        let indice = parseInt(prompt("Digite o índice do item a remover:"))
        if (indice >= 0 && indice < listaCompras.length) {
            listaCompras.splice(indice, 1)
        } else {
            alert("Índice inválido.")
        }
    } else if (acao === "atualizar") {
        let indice = parseInt(prompt("Digite o índice do item a atualizar:"))
        if (indice >= 0 && indice < listaCompras.length) {
            let novoItem = prompt("Digite o novo valor do item:")
            listaCompras[indice] = novoItem
        } else {
            alert("Índice inválido.")
        }
    } else if (acao === "exibir") {
        for (let [i, item] of listaCompras.entries()) {
            console.log(`${i}: ${item}`)
        }
    } else {
        alert("Ação inválida.")
    }
}
