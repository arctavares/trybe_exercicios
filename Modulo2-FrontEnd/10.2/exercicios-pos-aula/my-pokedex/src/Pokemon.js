import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
    return (
      this.props.pokemons.map(pokemon => {
        return (
          <div id={pokemon.name} key={pokemon.id} className='pokemon'>
            <p>{pokemon.name}</p>
            <p>{pokemon.type}</p>
            <p>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
            <img src={pokemon.image} alt='pokemon' />
          </div>
        )
      })
    )
  }
}

export default Pokemon;