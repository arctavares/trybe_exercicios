import React, { Component } from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <>
        <h1>Pokedex</h1>
        <div className='pokemonsContainer'>
          <Pokemon pokemons={pokemons}></Pokemon>
        </div>
      </>
    );
  }
}

export default Pokedex;
