import React, { Component } from 'react'

export class LoginPassword extends Component {
  render() {

    const { handleChange } = this.props;

    return (
      <label>
        Senha

        <input 
        type="password" 
        ame="password" 
        id="password" 
        placeholder="Digite sua Senha" 
        onChange={ handleChange }/>
      </label>
    )
  }
}

export default LoginPassword;