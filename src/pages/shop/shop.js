import React, {useEffect, useState} from 'react';
import {ProductList} from '../../components/shop/ProductList/ProductList';
import {Filters} from '../../components/shop/Filters/Filters';
import {useSearchParams} from 'react-router-dom';

export const ShopPage = () => {
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

  return <>
    <Filters/>
    <ProductList productsList={productsList} isLoaded={isLoaded}/>
  </>;
};