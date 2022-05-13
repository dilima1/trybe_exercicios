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

console.log(soma);

// 🚀5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
