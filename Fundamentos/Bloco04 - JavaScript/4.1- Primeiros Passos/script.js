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
let patientId = '50';
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
const area = base * height ;
const perimeter = base + height + base + height
console.log(area);
console.log(perimeter);

// ================================================[ CONDIÇOES IF e ELSE ] ========================================================================
