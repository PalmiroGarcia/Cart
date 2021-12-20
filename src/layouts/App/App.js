import {React, useEffect} from 'react';
import {Dashboard} from '../Dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom';
import {ShopPage} from '../../pages/shop/shop';
import {CartPage} from '../../pages/cart/cart';
import {Header} from '../../components/UI/Header/Header';

export const App = () => {
  const BODY = document.body;

  useEffect(() => {
    localStorage.getItem('Theme') && BODY.classList.add('DarkTheme');
  }, []);

  return <>
    <Header/>
    <Dashboard>
      <Routes>
        <Route path={'/'} element={<ShopPage/>}/>
        <Route path={'/cart'} element={<CartPage/>}/>
        <Route path={'*'} element={<ShopPage/>}/>
      </Routes>
    </Dashboard>
  </>;
};