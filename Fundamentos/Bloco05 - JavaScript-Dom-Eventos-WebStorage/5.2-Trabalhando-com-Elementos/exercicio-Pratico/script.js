//1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let tagBody = document.getElementsByTagName("body");
let elementoPrimeiroRequisito = document.createElement("h1");
elementoPrimeiroRequisito.innerText = "Exercício 5.2 - JavaScript DOM";
tagBody[0].appendChild(elementoPrimeiroRequisito);

//2. 🚀 Adicione a tag main com a classe main-content como filho da tag body;

let elementoSegundoQuesito = document.createElement("main");
elementoSegundoQuesito.className = "main-content";
tagBody[0].appendChild(elementoSegundoQuesito);

//3. 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let tagMain = document.getElementsByClassName("main-content")[0];
let elementoTerceiroQuesito = document.createElement("section");
elementoTerceiroQuesito.className = "center-content";
tagMain.appendChild(elementoTerceiroQuesito);

//4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let tagSection = document.getElementsByClassName("center-content")[0];
let elementoQuartoQuesito = document.createElement("p");
elementoQuartoQuesito.innerText =
  "Esse texto foi inserido via javaScript dentro de uma tag P, para atendimento do requisito 4.";
tagSection.appendChild(elementoQuartoQuesito);

//5.🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let elementoQuintoQuesito = document.createElement("section");
elementoQuintoQuesito.className = "left-content";
tagMain.appendChild(elementoQuintoQuesito);

//6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let elementoSextoQuesito = document.createElement("section");
elementoSextoQuesito.className = "right-content";
tagMain.appendChild(elementoSextoQuesito);

//7. 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let leftContent = document.getElementsByClassName("left-content")[0];
let elementoSetimoQuesito = document.createElement("img");
elementoSetimoQuesito.src = "https://picsum.photos/200";
elementoSetimoQuesito.className = "small-image";
leftContent.appendChild(elementoSetimoQuesito);

// //8. 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let rightContent = document.getElementsByClassName("right-content")[0];
let elementoOitavoQuesito = document.createElement("ul");
elementoOitavoQuesito.className = "list-numbers";
rightContent.appendChild(elementoOitavoQuesito);
let listaNumeros = [
  "Um",
  "Dois",
  "Tres",
  "Quatro",
  "Cinco",
  "Seis",
  "Sete",
  "Oito",
  "Nove",
  "Dez",
];

let listNumbers = document.querySelector(".list-numbers");

for (let index = 0; index < listaNumeros.length; index += 1) {
  let numbers = listaNumeros[index];

  let numbersListItem = document.createElement("li");
  numbersListItem.innerText = numbers;

  listNumbers.appendChild(numbersListItem);
}

//9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

// for (let index = 0; index < 3; index += 1) {
//   let elementoNonoQuesito = document.createElement("h1");
//   tagMain.appendChild(elementoNonoQuesito);
// }
//   let elementoNonoQuesito = document.createElement("h3");
// let elementoNonoQuesito2 = document.createElement("h3");
// let elementoNonoQuesito3 = document.createElement("h3");
// tagMain.appendChild(elementoNonoQuesito);
// tagMain.appendChild(elementoNonoQuesito2);
// tagMain.appendChild(elementoNonoQuesito3);

//Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

//1. 🚀 Adicione a classe title na tag h1 criada;

elementoPrimeiroRequisito.className = "title";

//2. Adicione a classe description nas 3 tags h3 criadas;

let tagH3 = document.getElementsByTagName("h3");

for (let index = 0; index < tagH3.length; index += 1) {
  tagH3[index].className = "description";
}

//3. 🚀 Remova a section criado no passo 5(left-content) (aquele que possui a classe left-content). Utilize a função .removeChild();

let removerSectionCinco = document.querySelector(".main-content");

removerSectionCinco.removeChild(removerSectionCinco.childNodes[1]);

//4. 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

let centralizar = document.querySelector(".right-content");

centralizar.style.marginRight = "auto";

//5. 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

let trocarCor = document.querySelector(".main-content");

trocarCor.style.backgroundColor = "green";

//6. 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

//nove
removerSectionCinco.removeChild(removerSectionCinco.childNodes[2]);
removerSectionCinco.removeChild(removerSectionCinco.childNodes[2]);
removerSectionCinco.removeChild(removerSectionCinco.childNodes[2]);

//10

let apagarItem = document.querySelector(".right-content");

apagarItem.removeChild(apagarItem.childNodes[0]);
