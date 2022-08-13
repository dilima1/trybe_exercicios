//  1 - Crie uma função que gere um número aleatório

//     1.1 - Defina uma função que gere um número aleatório entre 0 e 100. 

const randomNumber = () => Math.floor(Math.random() * 101);


// Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.
// Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
// Elabore a terceira função: essa função deve receber duas strings e concatená-las.



const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) =>  str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);

// 5 - Crie uma função que faça requisição para a api dog pictures.

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { 
  randomNumber,
  firstFunction,
  secondFunction,
  thirdFunction,
  fetchDog
 };