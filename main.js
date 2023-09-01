const btnSortear = document.querySelector(".sortear");
const textarea = document.querySelector("textarea");
const tegResultado =cdocument.querySelector(".resultado p");
const popUpResultado = document.querySelector(".resultado");

function pegarDadosFormulario() {
    const valorCampo = textarea.value; //pega todos os valores do textarea
    const listaNomes = valorCampo.split(","); //separa todos os nome pela virgula
    const tamanhoArray = listaNomes.length; //conta quantos nomes tem 
    const posicaoNome = gerarNomeAleatorio(tamanhoArray); //escolhe uma posicao aleatoria (nome aleatorio)
    const nome = listaNomes[posicaoNome]; //guarda o nome sorteado
    mostarResultado(nome); //mostra o resultado

    textarea.value = ""; //limpa o textarea
}
btnSortear.addEventListener("click", pegarDadosFormulario);

function gerarNomeAleatorio(tamanhoArray) {
    //RETORNA O NOME
    return Math.floor(Math.random()*(tamanhoArray - 0) + 0);
}

function mostarResultado(nome) {
    tegResultado.innerHTML = `Resultado: ${nome}`;
    popUpResultado.classList.add("mostrarResultado");
}