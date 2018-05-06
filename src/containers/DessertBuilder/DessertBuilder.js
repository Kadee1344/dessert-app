import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Dessert from '../../components/Dessert/Dessert';

class DessertBuilder extends Component {
    render () {
      return (
        <Aux>
          <Dessert />
          <div>Build Controls</div>
        </Aux>
      );
    }
}

export default DessertBuilder;
