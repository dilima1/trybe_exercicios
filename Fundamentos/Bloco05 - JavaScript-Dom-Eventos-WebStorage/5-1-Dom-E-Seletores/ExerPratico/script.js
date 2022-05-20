/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        */
//1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function daquiDoisAnos() {
  document.getElementsByTagName("p")[1].innerHTML =
    "Daqui a dois anos eu me vejo formado e com meu emprego, e se Deus quiser trabalhando fora do Brasil, levando assim uma vida melhor para minha esposa.";
}

daquiDoisAnos();

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function mudarCorQuadrado(mainContent) {
  mainContent = document.getElementsByClassName("main-content")[0];

  mainContent.style.backgroundColor = "rgb(76,164,109)";
}

mudarCorQuadrado();

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.

function mudarCor(mainContentQuadrado) {
  mainContentQuadrado = document.getElementsByClassName("center-content")[0];

  mainContentQuadrado.style.backgroundColor = "white";
  mainContentQuadrado.style.textAlign = "center";
}

mudarCor();

//    4. Crie uma função que corrija o texto da tag <h1>.

function corrigirTitle() {
  document.getElementsByClassName("title")[0].innerHTML =
    "Exercicio 5.1 - JavaScript";
}

corrigirTitle();

//     5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function mudarMinuscula() {
  const minuscula = document.getElementsByTagName("p");
  for (let index = 0; index < minuscula.length; index += 1) {
    minuscula[index].style.textTransform = "uppercase";
  }
}
mudarMinuscula();
//     6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function verificarConsole() {
  const console2 = document.getElementsByTagName("p");
  for (let index = 0; index < console2.length; index += 1) {
    console.log(console2[index].innerText);
  }
}
verificarConsole();
