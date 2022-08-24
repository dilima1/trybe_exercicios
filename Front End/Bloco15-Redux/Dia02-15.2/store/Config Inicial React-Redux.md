                                       =[ Configuração basica de uma aplicação React Redux ]=

Em primeiro lugar devemos pensar na criação de um arquivo src/store/index.js com o seguinte conteúdo:

import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;

 A função createStore sempre receberá como parâmetro um rootReducer. Portanto, deve-se criar um rootReducer no arquivo src/reducers/index.js.

 Com o arquivo index.js criado na pasta /reducers devemos adicionar o codigo abaixo:

import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({ myReducer });

export default rootReducer;

    Dica: O método combineReducers que, como diz seu nome, combina reducers, deve receber um objeto com os reducers criados. Sem ele, só poderíamos usar um reducer em nossa aplicação.

    Mesmo que tenhamos apenas um reducer é uma boa prática que utilizemos o combineReducers, pois caso nossa aplicação cresça e necessite de mais de um reducer não será necessário alterar sua lógica.


 **Codigo do reducer, aquivo myReducer.js criado na pasta /reducers**

const INITIAL_STATE = {
  state: '',
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}

export default myReducer;

    Dica: Com o intuito de facilitar a utilização do Redux, recomendamos fortemente que você instale a extensão Redux Devtools no seu navegador. Para podermos utilizar essa ferramenta, é necessário o pacote @redux-devtools/extension. 
    A instalação dele é feita com o seguinte comando: 
    npm install --save @redux-devtools/extension

    Se a extensão e o pacote do Redux Devtools não estiver instalada, a linha de configuração dela apresentará um erro.

Observe o código abaixo de uma store configurada com a extensão:

import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;

A action possui sempre uma propriedade type única. Essa propriedade é utilizada pelo Redux para identificar a ação que será realizada, esse conceito recebe o nome de action type.

    export const newAction = (state) => ({ type: 'NEW_ACTION', state });
