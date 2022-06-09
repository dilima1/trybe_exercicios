let separador = ("-------------------------------------------------------------------------------------------------------")
console.log(separador);
console.log(`PARTE 1`);
console.log(separador);
//  Agora você vai fazer alguns exercícios de fixação - PARTE I

//     🚀 Se liga nesse foguete!
//     Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

//     🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

//     Modifique a estrutura da função para que ela seja uma arrow function.
//     Modifique as concatenações para template literals. 
 const testingScope = (escopo) => {
        if (escopo === true) {
          let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = `1 - ${ifScope} ótimo, fui utilizada no escopo!`;
          console.log(ifScope);
        } else {
          let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          elseScope = `1 - ${elseScope} otimo, fui utilizada no escopo!`
          console.log(elseScope);
        }
      }
      testingScope(false);

console.log(separador);

    //   2.🚀 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

    // Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

    // Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). 
    // Spoiler: É possível realizar uma função que ordene qualquer array de números.
    // Copie o código abaixo.

     const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // Seu código aqui.
      function compararNumeros(a, b) {
        return a - b;
      }
      let numberOrder = oddsAndEvens.sort(compararNumeros)
      console.log(`2 - Os numeros ${numberOrder} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

console.log(separador);
console.log(`PARTE 2`);
console.log(separador);

//  Parte II
// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

//     1. Crie uma função que receba um número e retorne seu fatorial.

//     Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
//     Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.
let num = 5;
const factorial = (n) => {return (n == 1 || n == 0) ? 1 : n * factorial(n - 1);}

console.log(`1 - Fatorial de ${num} é ${factorial(num)}.`);
console.log(separador);

//     2. Crie uma função que receba uma frase e retorne qual a maior palavra.

//     Exemplo:

//       

let longestWord = ('Antônio foi no banheiro e não sabemos o que aconteceu').split(" ");
let palavraMaior = longestWord[0]

const letterBig = () => {
for (index = 0; index < longestWord.length; index += 1) {
  if (longestWord[index].length > palavraMaior.length) {
    palavraMaior = longestWord[index];
  }
}
return `2 - ${palavraMaior}`;
}
console.log(letterBig());

console.log(separador);

//     3. 🚀 Crie uma página que contenha:

//     Um botão ao qual será associado um event listener;
//     Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
//     Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
const button = document.getElementById('button');

const adicionarClique = () => {
const localClique = document.querySelector('#receberClique')
let campClick = Number(document.getElementById('receberClique').valueOf().innerHTML)
let = clickCount = 1
localClique.innerHTML = campClick += clickCount 

}

button.addEventListener('click', adicionarClique)

//     4. 🚀 Crie um código JavaScript com a seguinte especificação:

// Não se esqueça de usar template literals

//     Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
//     Exemplo:
//         String determinada: "Tryber x aqui!"
//         Parâmetro: "Bebeto"
//         Retorno: "Tryber Bebeto aqui!"
let skills = ['HTML', 'CSS', 'GIT', 'Esforçado', 'Determinado'];
skillsOrdem = skills.sort()
let name1 = "Edilson"
const func1 = (name) => {
  return `Tryber ${name} aqui!`
}
let funcao1 = func1(name1)

//     Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.


//     Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

const func2 = () => {
  
  return `${funcao1} 
  Minhas cinco principais habilidades são:
  ${skillsOrdem[0]};
  ${skills[1]};
  ${skills[2]};
  ${skills[3]};
  ${skills[4]}`

}

console.log(func2());

//     Exemplo:
//     "Tryber x aqui!
//     Minhas cinco principais habilidades são:
//         JavaScript;
//         HTML; ...
//     #goTrybe".



