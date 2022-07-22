import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tarefas from './App';
import Quesito3 from './Quesito3';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p> Crie uma lista de tarefas simples que:
    Utilize a função Task dentro do componente App.
    Leia as tarefas de dentro de um Array.
    Use a função map para criar cada item da lista no HTML.
    <Tarefas />
  </p>

    <p> 
    Na pasta src, crie um novo arquivo chamado Header.jsx, que representará o componente Header;
    No arquivo Header.jsx, crie uma classe React, chamada Header. Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;
    No arquivo App.js, importe o componente Header criado anteriormente;
    Renderize o componente Header no App.js;
    Na pasta src, crie um novo arquivo chamado Content.jsx, que representará o componente Content;
    Dentro do arquivo Content.jsx, crie uma classe React chamada Content;
    Ainda no arquivo Content.jsx, adicione o seguinte array:


    <Quesito3 />
  </p>
  </React.StrictMode>
);
reportWebVitals();
