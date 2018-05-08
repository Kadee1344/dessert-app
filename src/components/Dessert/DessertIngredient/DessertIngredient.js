import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DessertIngredient.scss';

class DessertIngredient extends Component {
  render () {
    let ingredient = null;
    switch (this.props.type) {
      case ('vanilla'):
        ingredient = <div className="IceCreamBall IceCreamBall--vanilla"></div>;
        break;
      case ('chocolate'):
        ingredient = <div className="IceCreamBall IceCreamBall--chocolate"></div>;
        break;
      case ('pistachio'):
        ingredient = <div className="IceCreamBall IceCreamBall--pistachio"></div>;
        break;
      case ('horn'):
        ingredient = <div className="Horn"></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

DessertIngredient.PropTypes = {
  type: PropTypes.string.isRequired
};

export default DessertIngredient;
