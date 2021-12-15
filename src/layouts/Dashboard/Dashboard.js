import React from 'react';
import { Header } from '../../components/UI/Header/Header';
import { Main } from "../../components/UI/Main/Main";

export const Dashboard = () => {
  return <section className={'LightTemplate'}>
    <Header/>
    <Main />
  </section>;
};