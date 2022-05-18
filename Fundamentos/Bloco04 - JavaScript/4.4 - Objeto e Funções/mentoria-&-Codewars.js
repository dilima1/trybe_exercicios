let separador =
  "--------------------------------------------------------------------------";

// //Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// {
//     area: 0,
//     perimetro: 0
// }
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

function calcularArea(altura, base) {
  let perimetro = base * 2 + altura * 2;
  let area = base * altura;
  let resultado = {
    area: area,
    perimetro: perimetro,
  };
  return resultado;
}

console.log(calcularArea(2, 3));
console.log(separador);

// Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato:
// {
//     pares: 0,
//     ímpares: 0
// }

function acharParesEImpares(numbers) {
  let numeroPar = 0;
  let numeroImpar = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 0) {
      numeroPar += 1;
    } else {
      numeroImpar += 1;
    }
  }

  let objeto = {
    pares: numeroPar,
    impares: numeroImpar,
  };
  return objeto;
}
console.log(acharParesEImpares([1, 2, 3, 4, 5, 6, 7]));
console.log(separador);

// for(let i = 1; i <= 10; i += 1){
//     console.log(i);
// } contar de 1 ate 10.

// let a = "2";
// let b = 2;

// console.log(a == b);

// let eu = ['Alguém da Trybe', ' que é super legal'];
// let string = eu[0] + eu[1] + '!';
// console.log(string);

// console.log(2 === '2')
// console.log(2 === 2)
// console.log(2 == '2')

// let a = "Serei a melhor pessoa dev";
// let b = "Esse é meu jeito dev de ser!";
// let num = 2;
// let strings = [a, b];

// console.log((typeof a) == (typeof num));
// console.log((typeof strings) == 'array');
// console.log((typeof b) == a);
// console.log((typeof num) == (typeof 'number'));
// console.log((typeof strings.length) == (typeof num));

function parImpar(n) {
  if (n % 2 === 0) {
    return "Par!";
  } else {
    return "Impar!";
  }
}
console.log(parImpar(222));

/*-----------------------------------------------*/ console.log(
  separador
); /*---------------------------------------------------------*/
let titulo = "=[ Exercicios - Codewars ]=";
console.log(titulo);
/*----------------------------------------------*/ console.log(
  separador
); /*---------------------------------------------------------*/

//Escreva uma função que receba uma string de uma ou mais palavras e retorne a mesma string, mas com todas as palavras de cinco ou mais letras invertidas (assim como o nome deste Kata).  As strings passadas consistirão apenas em letras e espaços.  Os espaços serão incluídos somente quando mais de uma palavra estiver presente.

//Abaixo está o que cada uma das três funções fará.

// split() irá separar cada caractere de uma string e convertê-lo em um array.
// reverse() pegará aquele array e inverterá os elementos dentro dele.
// join() unirá os caracteres que foram revertidos pela função reverse().

function spinWords(string) {
  divisaoArray = string.split(" ");
  arrayInvertido = [];

  for (let index = 0; index < divisaoArray.length; index += 1) {
    if (divisaoArray[index].length < 5) {
      arrayInvertido.push(divisaoArray[index]);
    } else {
      arrayInvertido.push(divisaoArray[index].split("").reverse().join(""));
    }
  }
  return arrayInvertido.join(" ");
}

console.log(spinWords("Hey fellow warriors"));

/*-----------------------------------------------*/ console.log(
  separador
); /*---------------------------------------------------------*/

// Bob precisa de uma maneira rápida de calcular o volume de um paralelepípedo com três valores: o comprimento, a largura e a altura do paralelepípedo.  Escreva uma função para ajudar Bob com esse cálculo.

function getVolumeOfCuboid(length, width, height) {
  // your code here
  return length * width * height;
}

console.log(getVolumeOfCuboid(6.3, 2, 5));

/*----------------------------------------------*/ console.log(
  separador
); /*---------------------------------------------------------*/

// Precisamos de uma função que possa transformar uma string em um número.  Que formas de conseguir isso você conhece?
//  Nota: Não se preocupe, todas as entradas serão strings e cada string é uma representação perfeitamente válida de um número inteiro.

function converter(str) {
  return parseInt(str);
}

console.log(converter("1234"));

// As máquinas ATM permitem códigos PIN de 4 ou 6 dígitos e os códigos PIN não podem conter nada além de exatamente 4 dígitos ou exatamente 6 dígitos.

//  Se a função receber uma string de PIN válida, retorne true, caso contrário, retorne false.
//  Exemplos (Entrada --> Saída)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  //return true or false
}
