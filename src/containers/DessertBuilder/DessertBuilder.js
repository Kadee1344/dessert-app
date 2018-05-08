import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Dessert from '../../components/Dessert/Dessert';

class DessertBuilder extends Component {
  //constructor (props) {
  //  super(props);
  //  this.state = {...}
  //}
  state = {
    ingredients : {
      vanilla: 0,
      chocolate: 0,
      pistachio: 0
    }
  }
  render () {
    return (
      <Aux>
        <Dessert ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default DessertBuilder;
