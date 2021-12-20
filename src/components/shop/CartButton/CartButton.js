import {React, useState} from 'react';
import styles from './CartButton.module.scss';

export const CartButton = ({counterProducts}) =>{
  return<div className={styles.Wrapper}>
    <button className={styles.ButtonWrapper} onClick={()=>{console.log('Hello Cart')}}>
    {/*TODO переделать img, сделать спрайт*/}
    <img src="../../../../TEMPORARY_IMGS/cart.png" alt="cart"/>
  </button>
    {!!counterProducts && <div className={styles.Counter}>{counterProducts}</div>}
  </div>;
};