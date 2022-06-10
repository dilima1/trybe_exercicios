// function sum() {
//       const value1 = document.getElementById('value1').value;
//       const value2 = document.getElementById('value2').value;
//       if(value1 === "" || value2 === ""){
//         throw new Error('Os dois campos devem ser preenchidos.');
//       }
//       try {
//         const result = parseInt(value1) + parseInt(value2);
//         document.getElementById('result').innerHTML = `Resultado: ${result}`;
//       } catch (error) {
//         document.getElementById('result').innerHTML = `Os dois campos devem ser preenchidos.`;
//       }
//       document.getElementById('value1').value = '';
//       document.getElementById('value2').value = '';
//     }
//     window.onload = () => {
//       const button = document.getElementById('button');
//       button.addEventListener('click', sum);
//     }

//PARTE II - EXERCICIO PRATICO.
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


    // Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

    // Note que o parâmetro da função já está sendo passado na chamada da função.

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
const extratoObj = Object.values(order)

console.log(`Olá ${extratoObj[3].delivery.deliveryPerson}, entrega para: ${extratoObj[0]}, Telefone: ${extratoObj[1]}, ${extratoObj[2].street}, Nº: ${extratoObj[2].number}, AP: ${extratoObj[2].apartment}. `);

}

customerInfo(order);


    // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

    // Modifique o nome da pessoa compradora.
    // Modifique o valor total da compra para R$ 50,00.



const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const extratoObj = Object.values(order)

  const mudaComprador = Object.assign({},order);
  mudaComprador.order.delivery.deliveryPerson = 'Luiz Silva';
  
  const mudaPayment = Object.assign({},order);
  mudaPayment.payment.total = 50
  console.log(`Olá ${extratoObj[3].delivery.deliveryPerson}, o total do seu pedido de ${Object.keys(extratoObj[3].pizza)} e ${extratoObj[3].drinks.coke.type} é de R$ ${extratoObj[4].total},00. `);
 
}

orderModifier(order);