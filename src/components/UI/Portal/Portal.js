import {React, useEffect} from 'react';
import {createPortal} from 'react-dom';
import styles from './Portal.module.scss';

export const Portal = ({children, domLocation}) =>{
  let Location = !!domLocation ? domLocation : document.body;
  useEffect(()=>{
    document.body.classList.add('popup_show');

    return () =>{
      document.body.classList.remove('popup_show');
    }
  }, []);
  return createPortal(children, Location);
};