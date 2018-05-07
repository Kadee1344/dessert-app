import React from 'react';
//import classes from './Dessert.css';
import DessertIngredient from './DessertIngredient/DessertIngredient';

const dessert = (props) => {
  return (
    <div className='test'>
      <DessertIngredient type="bread-top" />
      <DessertIngredient type="cheese" />
      <DessertIngredient type="meat" />
      <DessertIngredient type="bread-bottom" />
    </div>
  );
};

export default dessert;
