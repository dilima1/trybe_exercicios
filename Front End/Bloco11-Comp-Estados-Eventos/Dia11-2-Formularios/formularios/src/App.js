import React, { Component } from 'react'
import './App.css';
import LoginForm from './components/LoginForm';

export class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="" alt="" />
        </header>

        <main className='app'>
          <LoginForm />
        </main>

      </div>
    )
  }
}

export default App