import React, { Component } from 'react';

export class LoginEmail extends Component {

  render() {

    const { handleChange } = this.props;
    
    return (

      <label>
        Email

        <input 
        type="text" 
        name="email" 
        id="email" 
        placeholder="Digite seu Email" 
        onChange={ handleChange }/>
      </label>
    )
  }
}

export default LoginEmail;