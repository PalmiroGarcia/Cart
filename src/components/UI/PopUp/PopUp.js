import React from 'react';
import styles from './PopUp.module.scss';

export const PopUp = ({children, closePopup}) => {
  return <section className={styles.Layout}>
    {!!children
      ? children
      : <div className={styles.Wrapper}>
          <h1>Hello PopUp</h1>
          <button onClick={closePopup}>Close</button>
        </div>}
  </section>
};