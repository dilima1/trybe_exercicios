// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

console.log("1 - Nosso Array é composto pelos numeros: " + numbers + ".");

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

console.log(
  "2 - A soma dos números do Array é: ",
  numbers[0] +
    numbers[1] +
    numbers[2] +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    numbers[6] +
    numbers[7] +
    numbers[8] +
    numbers[9] +
    "."
);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// Dica: A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

console.log(
  "3 - A média aritmetica do Array é: ",
  (numbers[0] +
    numbers[1] +
    numbers[2] +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    numbers[6] +
    numbers[7] +
    numbers[8] +
    numbers[9]) /
    numbers.length +
    "."
);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

var soma =
  (numbers[0] +
    numbers[1] +
    numbers[2] +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    numbers[6] +
    numbers[7] +
    numbers[8] +
    numbers[9]) /
  numbers.length;

if (soma > 20) {
  console.log(
    "4 - A media do Array é " + soma + " sendo assim é maior que 20."
  );
} else {
  console.log(
    "4 - A media do Array é " + soma + " sendo assim é menor que 20."
  );
}

// 🚀5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// console.log(maior);

let maior = "";

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log("5 - O valor maior do array é o número: " + maior + ".");

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// Número par
// var a = 9;
// let restoDivisao = a % 2;
// console.log(restoDivisao);
// //
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = [];

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2) {
    impar.push(numbers[index]);
  }
}
if (impar == "") {
  console.log("Nenhum valor impar encontrado");
} else {
  console.log(
    "6 - O Array contem " +
      impar.length +
      " números impares, são eles " +
      impar +
      "."
  );
}

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

for (index = 0; index < numbers.length; index += 1) {
  if (menor < numbers[index]) {
  } else {
    menor = numbers[index];
  }
}
console.log("7 - O valor menor do array é o número: " + menor + ".");

// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

var myArray = [];

for (index = 0; index < 25; index += 1) {
  myArray.push(index + 1);
}

console.log("8 - Nosso novo Array é composto pelos numeros: " + myArray + ".");

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

var resultados = [];
var resulDivisao = "";

for (index = 0; index < myArray.length; index += 1) {
  resulDivisao = myArray[index] / 2;
  resultados.push(resulDivisao);
}

console.log(
  "9 - Nosso Array dividdo por 2 resulta nos seguintes números " +
    resultados +
    "."
);

// Exercicos Bonus

// Para os próximos dois exercícios leia este artigo(http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/) e tente entender o que está acontencedo no código abaixo:

// for (let index = 1; index < array.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (array[index] < array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

// Com base na leitura que fez, considere o array numbers abaixo e faça os exercícios:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//     1. Ordene o array numbers em ordem crescente e imprima seus valores;

//     2. Ordene o array numbers em ordem decrescente e imprima seus valores;

//     3. Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
