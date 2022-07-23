import React, { Component } from 'react'
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';

export class LoginForm extends Component {
    state = {
      email: '',
      password: '',
      buttonDisabled: false
    }

    handleChange(event) {
      console.log(event.target.value);
    }

  render() {

    const { email, password } = this.state;

    return (
      <section>
        <h1>Login</h1>
        <LoginEmail email={ email } handleChange={ this.handleChange }/>
        <LoginPassword password={ password } handleChange={ this.handleChange }/>

        <button disabled>Fazer Login</button>
      </section>
    )
  }
}

export default LoginForm;