import React from 'react';
import classes from './Dessert.css';
import DessertIngredient from './DessertIngredient/DessertIngredient';

const dessert = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])]
      .map((_, i) => {
        return <DessertIngredient key={igKey + 1} type={igKey} />;
      });
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);;
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    console.log('asdasdsd');
    transformedIngredients = <p className={classes.AddIceCreamTitle}>Please start adding ice cream ball!</p>;
  }

  return (
    <div className={classes.HornContainer}>
      {transformedIngredients}
      <DessertIngredient type='horn' />
    </div>
  );
};

export default dessert;
