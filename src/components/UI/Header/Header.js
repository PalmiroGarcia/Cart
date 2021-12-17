import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return <header className={styles.Wrapper}>
    <h3>Hello header</h3>

    <Link to={'/shop'}>Home(Shop)</Link>
    <br/>
    <Link to={'/cart'}>Cart</Link>
  </header>;
};