import React from 'react';
// import { useState } from 'react';
// import { Header } from '../../components/UI/Header/Header';
// import { Main } from '../../components/UI/Main/Main';
// import classNames from 'classnames';
// import styles from './Dashboard.module.scss';
import {Container} from '../../components/UI/Container/Container';

export const Dashboard = ({children}) => {
  return <Container>
    {/*<Main /> // сделать grid block*/}
    <main>
      {children}
    </main>
  </Container>;
};