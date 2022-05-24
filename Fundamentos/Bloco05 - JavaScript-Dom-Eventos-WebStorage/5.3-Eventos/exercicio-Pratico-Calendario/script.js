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
  holiday[diaTwo].className = "day friday";
}
