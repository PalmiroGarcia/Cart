import {React, useContext, useEffect, useState} from 'react';
import {ProductItem} from '../ProductItem/ProductItem';
import styles from './ProductList.module.scss';
import {CartContext} from '../../../context/CartContext';

export const ProductList = () =>{
  const [, , productsList, isLoaded] = useContext(CartContext);

  return <ul className={styles.Wrapper}>
    {isLoaded ? productsList.map((product) => {
        return <ProductItem product={product} key={product._id}/>;
    })
      : <h2>Loading...</h2>}
  </ul>
};