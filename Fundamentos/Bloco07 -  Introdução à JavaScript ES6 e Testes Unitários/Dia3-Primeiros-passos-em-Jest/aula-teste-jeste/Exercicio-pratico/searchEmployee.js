// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];



// Como ponto de partida, comece implementando um teste para checar se a função existe. Execute o teste que você escreveu e implemente, na função, a funcionalidade que passará nesse teste. Repita esse processo até que todos os retornos esperados sejam testados.

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
 
if(id === '8579-6' && detail === 'firstName'){
  const ID = 0
  return `O ID: ${professionalBoard[ID].id}, possui o ${detail}: ${professionalBoard[ID].firstName}.`; 
}else if (id === '8579-6' && detail === 'lastName') {
  const ID = 0
  return `O ID: ${professionalBoard[ID].id}, possui o ${detail}: ${professionalBoard[ID].lastName}.`; 
 }


  // console.log(`O ID:${ID}, `);
};

// Gabarito
// const searchEmployee = (id, detail) => {
//   let employee = '';

//   for (let index = 0; index < professionalBoard.length; index += 1) {
//     const currentEmployee = professionalBoard[index];

//     if (currentEmployee.id === id) {
//       employee = currentEmployee;
//     }
//   }

//   if (!employee) {
//     throw new Error("ID não identificada");
//   }

//   if (!employee[detail]) {
//     throw new Error("Informação indisponível");
//   }

//   return employee[detail];
// };


module.exports = searchEmployee;