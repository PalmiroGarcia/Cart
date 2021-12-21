import {React, useEffect, useState} from 'react';
import {ProductItem} from '../ProductItem/ProductItem';
import styles from './ProductList.module.scss';

export const ProductList = () =>{
  const [productsList, setProductsList] = useState([]);
  const [isLoaded, setIsLoaded]= useState(false);

  useEffect(()=>{
    fetch('http://localhost:3000/tempdata/products.json')
      .then((response) => {
        return response.json();
      })
      .then((tempData) => {
        setProductsList(tempData);
        setIsLoaded(true);
      });
  }, []);

  return <ul className={styles.Wrapper}>
    {isLoaded ? productsList.map((product) => {
        return <ProductItem product={product} key={product._id}/>;
    })
      : <h2>Loading...</h2>}
  </ul>
};