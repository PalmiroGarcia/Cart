import {React, useEffect} from 'react';
import {createPortal} from 'react-dom';
import styles from './Portal.module.scss';

export const Portal = ({children, domLocation, popup = true}) =>{
  let Location = !!domLocation ? domLocation : document.body;
  useEffect(()=>{
    if(popup) {
      document.body.classList.add('popup_show');

      return () => {
        document.body.classList.remove('popup_show');
      }
    }
  }, []);
  return createPortal(children, Location);
};