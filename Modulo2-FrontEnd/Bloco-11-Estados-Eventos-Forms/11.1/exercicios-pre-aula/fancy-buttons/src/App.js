import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */


class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  constructor() {
    super()

    this.state = {
      botao1: 0,
      botao2: 0,
      botao3: 0,
    }

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      botao1: estadoAnterior.botao1 + 1,
    }))
  }
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      botao2: estadoAnterior.botao2 + 1,
    }))
  }
  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      botao3: estadoAnterior.botao3 + 1,
    }))
  }

  render() {

    return (
      <>
        <button
          onClick={this.handleClick1}
          style={{ backgroundColor: this.buttonColor(this.state.botao1) }}
        >{this.state.botao1}</button>
        <button onClick={this.handleClick2}>{this.state.botao2}</button>
        <button onClick={this.handleClick3}>{this.state.botao3}</button>
      </>
    )
  }
}

export default App;