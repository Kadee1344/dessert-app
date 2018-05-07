import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DessertIngredient.scss';

class DessertIngredient extends Component {
  render () {
    let ingredient = null;
    switch (this.props.type) {
      case ('vanilla-ball'):
        ingredient = <div className="IceCreamBall IceCreamBall--vanilla"></div>;
        break;
      case ('chocolate-ball'):
        ingredient = <div className="IceCreamBall IceCreamBall--chocolate"></div>;
        break;
      case ('pistachio-ball'):
        ingredient = <div className="IceCreamBall IceCreamBall--pistachio"></div>;
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
