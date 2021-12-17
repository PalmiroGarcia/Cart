import React from 'react';
// import { useState } from 'react';
import { Header } from '../../components/UI/Header/Header';
// import { Main } from '../../components/UI/Main/Main';
// import classNames from 'classnames';
import styles from './Dashboard.module.scss';

export const Dashboard = ({children}) => {
  return <section className={styles.Wrapper}>
    {/*<Main /> // сделать grid block*/}
    <main>
      {children}
    </main>
  </section>;
};