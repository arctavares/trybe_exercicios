import React, { Component } from 'react';

export default class PersonalForm extends Component {
  render() {
    const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <div id='myForm'>
        <label>Nome: </label>
        <input
          type='text'
          maxLength='40'
          required
        />

        <label>Email: </label>
        <input
          type='email'
          maxLength='50'
          required
        />

        <label>CPF: </label>
        <input
          type='email'
          maxLength='11'
          required
        />

        <label>Endereço: </label>
        <textarea
          maxLength='200'
          required
        />

        <label>Cidade: </label>
        <input
          type='text'
          required
        />
        <label>Estado: </label>
        <select name='state' id='state'>
          {states.map(state => {
            return <option value={state}>{state}</option>
          })}
        </select>
      </div>
    )
  }

}
