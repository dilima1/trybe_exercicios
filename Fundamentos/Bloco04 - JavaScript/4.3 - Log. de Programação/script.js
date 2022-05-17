let separador =
  "--------------------------------------------------------------------------";

// Algoritmo de como se vestir para uma festa:

// 1. Ir ate o Armario.
// 2. Abrir a porta do Armario.
// 3. Escolher uma blusa.
// 4. Escolher uma calça.
// 5. Pegar o ferro.
// 6. Passar a roupa.
// 7. Pegar a toalha.
// 8. Ir ao banheiro.
// 9. Tomar Banho.
// 10. Sair do Banheiro.
// 11. Ir para o Quarto.
// 12. Vestir a Roupa.
// 13. Pegar o pente e pentear o cabelo.
// 14. Pegar o perfume e passar.
// 15. Ir para festa.
// Fim do Algoritmo.

//  Após escrever o algoritmo, responda as seguintes perguntas:

//     Eu resolvi o problema? - SIM.
//     Havia outras maneiras de resolver o problema? - SIM.
//     A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos? Fiz um detalhamento dos passos mais não explenie com detalhes minuciosos.
//     Seria possível inverter ou retirar algum passo? - NÃO.
//     Se eu fosse um computador, conseguiria entender todas as instruções? NÂO.

//  Com o tempo e repetição, muitas dessas etapas se tornam automáticas. Porém, é extremamente útil sabermos construir um algoritmo sem codificá-lo. Por isso, até o momento da aula ao vivo, volte aos exercícios do dia anterior, 4.2, e crie um algoritmo para cada.
// Após escrever cada algoritmo, responda novamente as seguintes perguntas:

//     Eu resolvi o problema?
//     Havia outras maneiras de resolver o problema?
//     A maneira que eu escolhi foi a mais eficiente possível?
//     Seria possível inverter ou retirar algum passo?
//     Se eu fosse um computador, conseguiria entender todas as intruções?

// ** Complexidade de código

// const n = ;
// let resultado = 100;
// for (let i = 0; i <= n; i += 1){
//     resultado -= i;
// }

// console.log(resultado);

// 1. O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

const valorFatorado = 10;
let resultado = 1;

for (index = 1; index <= valorFatorado; index += 1) {
  resultado = resultado * index;
}

console.log("1 - O fatorial de " + valorFatorado + " é " + resultado + ".");
console.log(separador);

//  2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "tryber";
// let array = word.split("");
// var invertida = [];
let letras = "";

for (index = word.length - 1; index >= 0; index -= 1) {
  letras += word[index];
}
console.log(letras);
console.log(separador);

// console.log(array[5] + array[4] + array[3] + array[2] + array[1] + array[0]);

//  3- Considere o array de strings abaixo:

let array = ["java", "javascript", "python", "html", "css"];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let numeroMaior = array[0];
let numeroMenor = array[0];

for (index = 0; index < array.length; index += 1) {
  if (array[index].length > numeroMaior.length) {
    numeroMaior = array[index];
  }
}

for (index = 0; index < array.length; index += 1) {
  if (array[index].length < numeroMenor.length) {
    numeroMenor = array[index];
  }
}

console.log(numeroMaior);
console.log(numeroMenor);
console.log(separador);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (
    let currentDivisor = 2;
    currentDivisor < currentNumber;
    currentDivisor += 1
  ) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

// resultDivi1 = myArray[index] % 2;

// if (myArray[index] > 0 && myArray[index] > 1 && myArray[index] === 2) {
//   arrayPrimos.push(index);
// } else if (resultDivi1 != 0 && myArray[index] > 0 && myArray[index] > 1 && myArray[index] <= 7) {
//   arrayPrimos.push(index);
// }else if (resultDivi1 != 0 && myArray[index] / 1 === 0 && myArray[index] / myArray[index] === 0) {
//   arrayPrimos.push(index);
// }
