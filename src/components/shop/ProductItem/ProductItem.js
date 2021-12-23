import React, {useContext, useState} from 'react';
import styles from './ProductItem.module.scss';
import {CartContext} from "../../../context/CartContext";
import {Button} from "../../UI/Button/Button";

export const ProductItem = ({product}) => {
  const [, setCounterProducts] = useContext(CartContext);
  const [cart, setCart] = useState([]);

  return <li className={styles.Wrapper}>
    <div className={`${styles.ImgWrapper} AnimContainer`}>
      <picture>
        <source src={product.img.mobile} media="(max-width:768px)" type="image/jpeg"/>
        <source src={product.img.desktop} media="(min-width: 769px)" type="image/jpeg"/>
        <img className={styles.Image} src={product.img.desktop} alt={product.title}/>
      </picture>
    </div>
    <div className={styles.ProductInfo}>
      <div>
        <h2 className={styles.ProductName}>
          {product.title}
        </h2>
        <p className={styles.PropertiesWrapper}>
          <b>Size:</b> {product.properties.size}"
        </p>
        <p className={styles.PricesWrapper}>
          {!!product.prices.sale ? <>
            <del className={styles.OldPrice}>${(product.prices.price).toFixed(2)}</del>
            <strong
              className={styles.NewPrice}>${(product.prices.price - (product.prices.price * product.prices.sale / 100)).toFixed(2)}</strong>
          </> : <strong className={styles.Price}>${(product.prices.price).toFixed(2)}</strong>}
        </p>
      </div>
      {/*TODO сделать компонент кнопку*/}
      <Button classname={styles.Btn} onMouseEnter={(it) => {
        it.target.parentNode.parentNode.querySelector('.AnimContainer').classList.add('Animate-start');
      }} onMouseLeave={(itt) => {
        itt.target.parentNode.parentNode.querySelector('.AnimContainer').classList.add('Animate-finish');
        itt.target.parentNode.parentNode.querySelector('.AnimContainer').classList.remove('Animate-start');
        const remove_class_timeout = setTimeout(() => {
          itt.target.parentNode.parentNode.querySelector('.AnimContainer').classList.remove('Animate-finish');
          clearTimeout(remove_class_timeout);
        }, 400);
      }} onClick={() => {
        setCart(prevState => [
          ...prevState,
          product,
        ]);
        setCounterProducts(prevState => prevState + 1);
      }}>TO CART</Button>
    </div>
  </li>;
};