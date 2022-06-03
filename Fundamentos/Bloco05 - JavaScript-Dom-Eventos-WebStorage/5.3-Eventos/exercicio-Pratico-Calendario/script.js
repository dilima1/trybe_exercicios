function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//  🚀 Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// 1.1    Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
let listDays = document.querySelector("#days");

for (let index = 0; index < dezDaysList.length; index += 1) {
  let days = dezDaysList[index];
  let daysListItem = document.createElement("li");
  daysListItem.className = "day";
  daysListItem.innerText = days;

  listDays.appendChild(daysListItem);
}
//length = 33

//1.2 - Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
//24 - 34 - 25 - 35 e 31 - 41 - posição feriados

let holiday = document.querySelectorAll("li");
let feriados = [34, 35, 41];

for (let index = 0; index < feriados.length; index += 1) {
  let dia = feriados[index];
  holiday[dia].className = "day holiday";
}

//1.3     Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

let sextaFeiras = [14, 21, 28, 35];
for (let index = 0; index < sextaFeiras.length; index += 1) {
  let diaTwo = sextaFeiras[index];
  holiday[diaTwo].classList.add("friday");
}

// 🚀 Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//     Adicione a este botão a ID "btn-holiday".
//     Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

let button = document.querySelector(".buttons-container");

function createButton(string) {
  let newButton = document.createElement("button");
  newButton.id = "btn-holiday";
  newButton.innerText = string;
  newButton.addEventListener("click", feriadoTwo);
  return newButton;
}

button.appendChild(createButton("Feriados"));

//  🚀 Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

//     É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function feriadoTwo() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let classe = listDays.childNodes[index];
    if (classe.className.includes("holiday")) {
      // listDays.childNodes[index].style.backgroundColor = "red";
      // listDays.childNodes[index].style.color = "white";
      if (classe.style.backgroundColor === "red") {
        classe.style.backgroundColor = "rgb(238,238,238)";
      } else {
        classe.style.backgroundColor = "red";
      }
    }
  }
}

// 🚀 Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

//     Adicione a este botão o ID "btn-friday".
//     Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
let buttonFriday = document.querySelector(".buttons-container");

function createButton2(string) {
  let newButtonTwo = document.createElement("button");
  newButtonTwo.id = "btn-friday";
  newButtonTwo.innerText = string;
  newButtonTwo.addEventListener("click", sextou);
  return newButtonTwo;
}

buttonFriday.appendChild(createButton2("Sexta-Feiras"));

// 🚀 Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

//     É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
function sextou() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let classe = listDays.childNodes[index];
    console.log(classe);
    if (classe.className.includes("friday")) {
      if (classe.innerText === "SEXTOU!!!") {
        listDays.childNodes[5].innerText = "4";
        listDays.childNodes[12].innerText = "11";
        listDays.childNodes[19].innerText = "18";
        listDays.childNodes[26].innerText = "25";
      } else {
        classe.innerText = "SEXTOU!!!";
      }
    }
  }
}

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

//     Dica - Propriedade: event.target.

let list = document.querySelector("#days");

function aumentar(e) {
  e.target.style.fontSize = "xx-large";
}

function diminuir(e) {
  e.target.style.fontSize = "";
}

list.addEventListener("mouseover", aumentar, false);
list.addEventListener("mouseout", diminuir, false);

// 🚀 Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

//     O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

let localTarefa = document.querySelector(".my-tasks");
let buttonTarefa = document.querySelector("#btn-add");

function inserirTarefa(tarefa) {
  let newSpan = document.createElement("span");
  // let quebraLinha = document.createElement("br");
  newSpan.innerHTML = tarefa;
  localTarefa.appendChild(newSpan);
  // localTarefa.appendChild(quebraLinha);
}
inserirTarefa("Projetos");

// 🚀 Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.

//     O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//     O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function adicionaCorLegenda(cor, text) {
  let newDiv = document.createElement("div");
  newDiv.id = "task";
  newDiv.style.backgroundColor = cor;
  localTarefa.appendChild(newDiv);
}
adicionaCorLegenda("red", "Projeto");

// 🚀 Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.

//     Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
let selectedClass = document.getElementById("task");

function selectClass() {
  if (selectedClass.className === "") {
    selectedClass.classList = "task selected";
  } else {
    selectedClass.classList = "task";
  }
}

selectedClass.addEventListener("click", selectClass);

// 🚀 Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

//     Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function mudaCor(e) {
  if (
    e.target.style.backgroundColor === "" ||
    e.target.style.backgroundColor === "rgb(238, 238, 238)"
  ) {
    e.target.style.backgroundColor = "RED";
    e.target.style.color = "white";
    // console.log(e.target.style.backgroundColor);
  } else {
    e.target.style.backgroundColor = "#eee";
    e.target.style.color = "#777";
    // console.log(e.target.style.backgroundColor);
  }
}

list.addEventListener("click", mudaCor, false);

// 🚀 Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

//     Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
//     Ao pressionar a tecla "enter" o evento também deverá ser disparado.
//     Dica - Propriedade: key.
