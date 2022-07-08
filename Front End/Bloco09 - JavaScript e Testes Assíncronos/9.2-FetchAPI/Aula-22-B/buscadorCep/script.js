const cep = document.querySelector('#cep')
const cidade = document.querySelector('#localidade')

const showData = (result) => {
  for(const campo in result) {
    if(document.querySelector('#'+campo)) {
      document.querySelector('#'+campo).value = result[campo]
    }
  }
}

cep.addEventListener('blur', () => {

  let search = cep.value.replace('-', '')
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
  .then(response => { response.json()
    .then(data =>  showData(data))  
  })
  .catch(e => console.log(`Deu Erro: ${e},${message}`))
})

// cidade.addEventListener('blur', () => {

//   let searchCidade = cidade.value
//   const options = {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'default'
//   }

//   fetch(`https://viacep.com.br/ws/${searchCidade}/json/`, options)
//   .then(response => { response.json()
//     .then(data =>  showData(data))  
//   })
//   .catch(e => console.log(`Deu Erro: ${e},${message}`))
// })

//  Existem necessidades, por exemplo um cadastramento online onde o cliente desconhece o CEP da sua rua e será necessário realizar uma pesquisa para verificar a existência de um CEP que corresponda ao endereço. Para consultar um CEP na base de dados são necessários três parâmetros obrigatórios (UF, Cidade e Logradouro), sendo que para Cidade e Logradouro também é obrigatório um número mínimo de três caracteres a fim de evitar resultados extremamente abrangentes.

// Identico a consulta por CEP, na pesquisa por endereço também é necessário informar o formato do retorno que deve ser "json" ou "xml". O resultado será ordenado pela proximidade do nome do logradouro e possui limite máximo de 50 (cinquenta) CEPs. Desta forma, quanto mais específico os parâmentros de entrada maior será a precisão do resultado.

// Exemplos de pesquisa por endereço:
// viacep.com.br/ws/RS/Porto Alegre/Domingos/json/
// viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/
// viacep.com.br/ws/RS/Porto Alegre/Domingos+Jose/json/ 