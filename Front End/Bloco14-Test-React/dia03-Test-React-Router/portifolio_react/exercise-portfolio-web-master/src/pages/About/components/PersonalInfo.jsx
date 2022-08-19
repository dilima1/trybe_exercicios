import React from 'react';

import profileImg from '../../../images/profile-picture.png';
import githubIcon from '../../../images/github.svg';

import './Personal.css';

class PersonalInfo extends React.Component {
  render() {
    return (
      <aside id="personal-info">
        <img src={ profileImg } alt="Minha Foto" width="200px" />
        <h2>Nome Completo</h2>
        <p>Rua da Minha Casa, N, Meu Bairro - Cidade - UF</p>
        <p>(00) 00000-0000</p>
        <p>nome.completo@email.com</p>
        <p>
          <a href="https://github.com/nome.completo" target="_blank" rel="noopener noreferrer">
            <img src={ githubIcon } alt="GitHub" width="25px" />
          </a>
        </p>
      </aside>
    );
  }
}

export default PersonalInfo;
