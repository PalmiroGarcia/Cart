import {React, useContext, useEffect, useState} from 'react';
import {ProductItem} from '../ProductItem/ProductItem';
import styles from './ProductList.module.scss';
import {useSearchParams} from 'react-router-dom';

export const ProductList = ({productsList, isLoaded}) =>{
  let [searchParams, setSearchParams] = useSearchParams();
  // console.log(productsList);
  // let newPrdList;
  // useEffect((productsList)=>{
  //   (isLoaded && searchParams.getAll('filters').length > 0) ? productsList.forEach((item)=>{
  //     // console.log(searchParams.getAll('filters').find(item.properties.brand));
  //     newPrdList.push(item);
  //   }) : null;
  //   productsList.map((product) => {
  //     return console.log(product.log);
  //   })
  // }, [searchParams, productsList]);

  return <ul className={styles.Wrapper}>
    {isLoaded ? productsList.map((product) => {
        return <ProductItem product={product} key={product._id}/>;
    })
      : <h2>Loading...</h2>}
  </ul>
};