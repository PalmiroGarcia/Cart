import React from 'react';
import styles from './Container.module.scss';

export const Container =({children}) =>{
  return <section className={styles.Container}>
    {children}
  </section>;
};