import {React, useEffect, useState} from 'react';
import {Dashboard} from '../Dashboard/Dashboard';
import {Routes, Route} from 'react-router-dom';
import {ShopPage} from '../../pages/shop/shop';
import {CartPage} from '../../pages/cart/cart';
import {Header} from '../../components/UI/Header/Header';
import {CartContext} from "../../context/CartContext";
import {Button} from "../../components/UI/Button/Button";

export const App = () => {
  const BODY = document.body;

  useEffect(() => {
    localStorage.getItem('Theme') && BODY.classList.add('DarkTheme');
  }, []);

  const [counterProducts, setCounterProducts] = useState(0);
  return <CartContext.Provider value={[counterProducts, setCounterProducts]}>
    <Header />
    <Button custom={true}>Hello</Button>
    <Dashboard setCounterProducts={setCounterProducts}>
      <Routes>
        <Route path={'/'} element={<ShopPage/>}/>
        <Route path={'/cart'} element={<CartPage/>}/>
        <Route path={'*'} element={<ShopPage/>}/>
      </Routes>
    </Dashboard>
  </CartContext.Provider>;
};