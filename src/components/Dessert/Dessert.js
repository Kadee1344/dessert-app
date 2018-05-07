import React from 'react';
import classes from './Dessert.css';
import DessertIngredient from './DessertIngredient/DessertIngredient';

const dessert = (props) => {
  return (
    <div className={classes.HornContainer}>
      <div className={classes.Horn}>
        <DessertIngredient type='vanilla-ball' />
        <DessertIngredient type='pistachio-ball' />
        <DessertIngredient type='chocolate-ball' />      
      </div>
    </div>
  );
};

export default dessert;
