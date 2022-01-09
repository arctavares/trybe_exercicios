import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image
    }
    } = this.props;

    const { value, measurementUnit } = averageWeight;

    return (
      <div id={name} className='pokemon'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{value} {measurementUnit}</p>
        <img src={image} alt='pokemon' />
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;