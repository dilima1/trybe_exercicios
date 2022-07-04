// // Definição da função userFullName
// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// // Definição da função getUser
// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   // Retornamos nosso parâmetro, que será uma função (callback)
//   return param(userToReturn);
// };

// // Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
// getUser(userFullName);

//  1 - Adicione uma callback como parâmetro da função getUser.
// No código abaixo você tem a função getUser, que define um objeto com os dados de uma pessoa. Complete a função getUser de forma que ela receba uma função callback como parâmetro para realizar as operações abaixo:

//     Insira o retorno da função getUser;
//     Complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";
//     Complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian".
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Insira o retorno da função `getUser`
  return param(userToReturn)
};

console.log(getUser(userFullName));
console.log(getUser(userNationality));

//  2 - Passe, como parâmetro e como retorno, uma callback para a função getUser.
// No código abaixo você tem a função getUser modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função getUser de forma que ela receba uma callback como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:

//     Insira uma callback como parâmetro da função getUser;
//     Retorne a callback passada como parâmetro na função getUser;

const userFullNam = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationalit = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser2 = callback => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
     console.log(callback(user));;
  }, delay());
};

console.log(getUser2(userFullNam)); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
console.log(getUser2(userNationalit)); // deve imprimir "Ivan is Russian" depois de um certo tempo