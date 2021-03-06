const sub = (num1, num2) => num1 - num2;

const sum = (num1, num2) => num1 + num2;

const calculator = (func) => func(10, 5);

console.log(calculator(sum));

//  Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:

// // Ao chamar a função doingThings:
// doingThings(wakeUp);

// // Ela deve retornar o valor do respectivo parâmetro, neste caso:
// // Acordando!!

const acor = () => 'Acordando';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(cafe));