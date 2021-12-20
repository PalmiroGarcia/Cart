import React, {useContext, useState} from 'react';
import styles from './ProductItem.module.scss';
import {CartContext} from "../../../context/CartContext";

export const ProductItem = ({product}) => {
    const [, setCounterProducts] = useContext(CartContext);
    const [cart, setCart] = useState([]);

    return <li className={styles.Wrapper}>
        <div className={styles.ImgWrapper}>
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
            <button className={styles.Button} onClick={()=>{
                setCart(prevState=>[
                    ...prevState,
                    product,
                ]);
                setCounterProducts(prevState=>prevState + 1);
            }}>I'm buying it!</button>
        </div>
    </li>;
};