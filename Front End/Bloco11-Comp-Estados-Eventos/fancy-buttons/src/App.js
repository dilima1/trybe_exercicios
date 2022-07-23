import './App.css';
import  React from 'react';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }

    this.botaoUm = this.botaoUm.bind(this)
    this.botaoDois = this.botaoDois.bind(this)
    this.botaoTres = this.botaoTres.bind(this)
  }

  botaoUm() {
    this.setState((estadoAnterior, _propos) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
    if (this.state.numeroDeCliques1 % 2 !== 0) {
      console.log('green');
    }
  }

  botaoDois() {
    this.setState((estadoAnterior, _propos) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }

  botaoTres() {
    this.setState((estadoAnterior, _propos) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.botaoUm}>Botão 1 - Números de Cliques: {this.state.numeroDeCliques1}</button>
        <button onClick={this.botaoDois}>Botão 2 - Números de Cliques: {this.state.numeroDeCliques2}</button>
        <button onClick={this.botaoTres}>Botão 3 - Números de Cliques: {this.state.numeroDeCliques3}</button>
      </div>
    );
  }

    
}

export default App;
