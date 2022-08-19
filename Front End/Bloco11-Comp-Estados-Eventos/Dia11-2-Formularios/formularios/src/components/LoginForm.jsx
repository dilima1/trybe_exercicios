import React, { Component } from 'react'
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    buttonDisabled: true
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value}, () => {
      const {email, password} = this.state;
      const buttonIsDisabled = email.length === 0 || password.length === 0;

      this.setState({
        buttonDisabled: buttonIsDisabled
      })
    
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    alert(`Foi feito com o email ${email} e a senha ${password}`);

  }

  render() {

    const { email, password, buttonDisabled } = this.state;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <LoginEmail email={ email } handleChange={ this.handleChange }/>
          <LoginPassword password={ password } handleChange={ this.handleChange }/>
          <button disabled={buttonDisabled}>Fazer Login</button>
        </form>
      </section>
    )
  }
}

export default LoginForm;