//  Agora você vai fazer alguns exercícios de fixação.

//     🚀 Se liga nesse foguete!
//     Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

//     🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

//     Modifique a estrutura da função para que ela seja uma arrow function.
//     Modifique as concatenações para template literals. 
 const testingScope = (escopo) => {
        if (escopo === true) {
          let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
          console.log(ifScope);
        } else {
          let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          elseScope = `${elseScope} otimo, fui utilizada no escopo!`
          console.log(elseScope);
        }
      }
      testingScope(false);

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
      console.log(`Os numeros ${numberOrder} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉


