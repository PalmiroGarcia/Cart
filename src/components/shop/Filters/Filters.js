import React from 'react';
import styles from './Filters.module.scss';

export const Filters = () =>{

  return <ul className={styles.Wrapper}>
    <li>
      <button>1</button>
    </li>
    <li>
      <button>2</button>
    </li>
    <li>
      <button>3</button>
    </li>
  </ul>
};