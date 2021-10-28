import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <>
        <h1>Pokedex</h1>
        <div className='pokemonsContainer'>
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
      </>
    );
  }
}

export default Pokedex;
