//  Agora vamos usar o forEach, para realizar a tabuada do 2. Veja o exemplo abaixo:

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

//  No exemplo acima, foi executado para cada elemento do array a função multipliesFor2, que imprime o parâmetro element * 2 no console.
// Agora estamos tratando de uma HOF, sendo assim é possível se utilizar também dos demais parâmetros para se resolver um problema. Como se pode fazer isso? Veja este exemplo abaixo com o uso de index no forEach:

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); 

//  Para fixar
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails:

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);

 // Array contendo a lista de emails.
// const emailList = [
//   "isa@myemail.com",
//   "lipe@myemail.com",
//   "digo@myemail.com",
//   "greg@myemail.com"
// ];

// Função callback que recebe o array emailList como parâmetro.

// const showEmailList = (list) => {
//   const div = document.querySelector("#email-list");
//   div.innerHTML = '';
// // Para cada e-mail da lista, a função cria uma tag <p> com a frase '${email}: Enviado com sucesso'
//   list.forEach((email) => {
//     const p = document.createElement("p");
//     p.innerHTML = `${email} : Enviado com sucesso!`;
//     div.appendChild(p);
//   });
// }

// const btnFilter = document.querySelector("#btn-filter");
// btnFilter.addEventListener("click", () => showEmailList(emailList));