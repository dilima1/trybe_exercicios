// =================================================[ VARIAVES ] ========================================================================

// Exercicios do foquete, ira ajudar nos projetos

// 1. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).

const myName = "Edilson Lima";
// console.log(myName);

// 2. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.

const birthCity = "Glória do Goitá";
// console.log(birthCity);

// 3. Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.

let birthYear = "1991";
// console.log(birthYear);

// 4. Utilize o console.log() para imprimir as constantes e variáveis que você criou.

console.log(myName);
console.log(birthCity);
console.log(birthYear);

// 5. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!

birthYear = "2030";
console.log(birthYear);

// 6. Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro?

//birthCity = "Lagoa do Carro"; //quando declaramos a variavel birthcity como constante não podemos altearr seu valor.
//console.log(birthCity);

// ==============================================[ Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas ] ========================================================================
let patientId = "50";
let isEnrolled = true;
const patientInfo = {
  firstName: "Ana",
  lastName: "Santos",
};
const patientEmail = "ana@email.com";

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

//Exercicios - Tipos Primitivos - FOQUETE

// 1. Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.

const base = 5;
let height = 8;
const area = base * height;
const perimeter = base + height + base + height;
console.log(area);
console.log(perimeter);

// ================================================[ CONDIÇOES IF e ELSE ] ========================================================================
// 1. Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
const nota = 65;

// Criterios:

// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"

// 3. Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera.");
} else {
  console.log("Você foi reprovada(o)");
}

// ================================================[ OPERADORES LÓGICOS ] ========================================================================

// Exercicio OPERADOR AND - &&

// 1. Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
// 2. Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
const currentHour = 2;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
  console.log(message);
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
  console.log(message);
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
  console.log(message);
} else if (currentHour >= 11 && currentHour <= 14) {
  message = "Hora do almoço!!!";
  console.log(message);
} else if (currentHour >= 4 && currentHour <= 11) {
  message = "Hmmm, cheiro de café recém passado";
  console.log(message);
} else {
  message = "Horario fora das descrição, digite um novo horario.";
  console.log(message);
}

// Exercicio OPERADOR OR - ||

// 1. Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
let weekDay = "sabado";

// 2. Implemente condicionais para que:

if (
  weekDay === "segunda-feira" ||
  weekDay === "terça-feira" ||
  weekDay === "quarta-feira" ||
  weekDay === "quinta-feira" ||
  weekDay === "sexta-feira"
) {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido UwU");
}

// Exercicio OPERADOR NOT - !

// ================================================[ SWITCH -- CASE ] ========================================================================

const candidata = "reprovada";

switch (candidata) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera.");
    break;

  case "reprovada":
    console.log("Você foi reprovada(o).");
    break;

  default:
    console.log("não se aplica");
}
