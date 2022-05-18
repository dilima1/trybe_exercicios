let separador =
  "--------------------------------------------------------------------------";

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
console.log("1 - Bem Vinda " + info.personagem + ".");

console.log(separador);

//  🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

// {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// }

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (const key in info) {
  console.log("3 - " + key);
}

console.log(separador);

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (const key in info) {
  console.log("4 - " + info[key]);
}

console.log(separador);

//  5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (const key in info) {
  for (const key2 in info2) {
  }
  console.log("5 - " + info[key] + " e " + info2[key]);
}

console.log(separador);

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
    {
      titulo: "Harry Potter e o Prisioneiro de Azkaban",
      autor: "JK Rowling",
      editora: "Rocco",
    },
  ],
};

// 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato:
// "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log(
  "6 - O livro favorito de " +
    leitor.nome +
    " " +
    leitor.sobrenome +
    " se chama " +
    "'" +
    leitor.livrosFavoritos[0].titulo +
    "'."
);

console.log(separador);

// 🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }

console.log("7 - Adicionado");
console.log(separador);

// 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(
  leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos."
);
console.log(separador);

// ============================================= [ FUNÇÕES ] ============================================================
var fun = "Exercicos de Função";
console.log(fun);
console.log(separador);

//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(palin1) {
  let letras = "";
  for (index = palin1.length - 1; index >= 0; index -= 1) {
    letras += palin1[index];
  }
  if (palin1 === letras) {
    console.log("1 - " + true);
  } else {
    console.log("1 - " + false);
  }
}

verificaPalindrome("desenvolvimento");
console.log(separador);

//Array para resposta dos quesitos 2 e 3.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 1];
console.log("Array para questões 2 e 3 - [ " + numbers + " ]");

console.log(separador);

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//MAIOR

function descobrirIndiceMaior() {
  let maior = "";
  let indiceMaior = "";
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
      maior = numbers[index];
      indiceMaior = [index];
    }
  }
  return console.log(
    "2 - O maior valor do Array encontra-se no indice: " + indiceMaior + "."
  );
}
descobrirIndiceMaior();
console.log(separador);

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//MENOR

function descobrirIndiceMenor() {
  let menor = numbers[0];
  let indiceMenor = "";

  for (index = 0; index < numbers.length; index += 1) {
    if (menor < numbers[index]) {
    } else {
      menor = numbers[index];
      indiceMenor = [index];
    }
  }
  return console.log(
    "3 - O menor valor do Array encontra-se no indice: " + indiceMenor + "."
  );
}

descobrirIndiceMenor();
console.log(separador);

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let casais = ["Edilson", "Crislayne", "Joe", "Juliana", "Edielson", "Lilian"];
console.log("Array para a questão 4 - [ " + casais + " ]");

console.log(separador);

function palavraMaior() {
  let numeroMaior = "";
  for (index = 0; index < casais.length; index += 1) {
    if (casais[index].length > numeroMaior.length) {
      numeroMaior = casais[index];
    }
  }
  return console.log("4 - " + numeroMaior);
}

palavraMaior();

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

console.log(separador);

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

//     Valor de teste: N = 5.
//     Valor esperado no retorno da função: 1+2+3+4+5 = 15.

function somatorio(valor) {
  let valorFatorado = valor;
  let resultado = 0;

  for (let index = 0; index <= valorFatorado; index += 1) {
    resultado = resultado + index;
  }
  return console.log(resultado);
}

somatorio(5);
=======

let maior = "";

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}

//FORMA 2 de FAZER - VIDEO GUANABARA:

// function fatorial(n) {
//   let fat = 1;
//   for (let index = n; index > 1; index -= 1) {
//     fat += index;
//   }
//   return fat;
// }
// console.log(fatorial(5));

console.log(separador);

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

//     Valor de teste: 'trybe' e 'be'
//     Valor esperado no retorno da função: true
//     verificaFimPalavra('trybe', 'be');
//     Retorno esperado: true
//     verificaFimPalavra('joaofernando', 'fernan');
//     Retorno esperado: false

function verificaFimPalavra(palavra, fimPalavra) {
  let word = palavra.split("").reverse().join("");
  let ending = fimPalavra.split("").reverse().join("");
  let result;

  for (let index = 0; index < ending.length; index += 1) {
    if (word[index] !== ending[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }

  return console.log(result);
}

verificaFimPalavra("trybe", "be");


