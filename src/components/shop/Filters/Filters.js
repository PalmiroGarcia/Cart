import React from 'react';
import styles from './Filters.module.scss';
import {Button} from "../../UI/Button/Button";

export const Filters = () =>{

  return <ul className={styles.Wrapper}>
    <li>
      <Button onClick={()=>{console.log('All')}}>All</Button>
    </li>
    <li>
      <Button classname={styles.Button} custom={true} onClick={()=>{console.log('1')}}>Brand</Button>
    </li>
    <li>
      <Button classname={styles.Button} custom={true} onClick={()=>{console.log('2')}}>Brand</Button>
    </li>
    <li>
      <Button classname={styles.Button} custom={true} onClick={()=>{console.log('3')}}>Brand</Button>
    </li>
  </ul>
};