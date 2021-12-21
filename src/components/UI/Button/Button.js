import React from 'react';
import styles from './Button.module.scss';

export const Button = ({children, custom = false, classname = '', onClick, onMouseEnter, onMouseLeave}) => {
    return <button className={`${classname} ${!!custom ? '' : styles.Button}`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
    </button>;
};