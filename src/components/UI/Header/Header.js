import {React, useContext, useState} from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import {Container} from '../Container/Container';
import {ToggleThemeHandler} from '../../../utils/utils';
import {CartButton} from '../../shop/CartButton/CartButton';
import {CartContext} from "../../../context/CartContext";
import {Portal} from '../Portal/Portal';
import {PopUp} from '../PopUp/PopUp';
import {ReactDOM, createPortal} from 'react-dom';

export const Header = () => {
  const [counterProducts] = useContext(CartContext);
  const [popupVisible, setPopupVisible] = useState(false);

  return <Container>
    <header className={styles.Wrapper}>
      {/*TODO переделать на <Nav>*/}
      <div className={styles.NavWrapper}>
        <h3 className={styles.Logo}>Logo</h3>

        <Link className={styles.Link} to={'/shop'}>Home(Shop)</Link>
        <br/>
        <Link className={styles.Link} to={'/cart'}>Cart</Link>
      </div>
      <div className={styles.NavWrapper}>
        <CartButton counterProducts={counterProducts} onClickHandler={() => setPopupVisible(!popupVisible)}/>
        {popupVisible
          ? <Portal>
              <PopUp closePopup={()=>setPopupVisible(!popupVisible)} />
            </Portal>
          : null}
        <button className={styles.Button} onClick={ToggleThemeHandler}>change theme</button>
      </div>
    </header>
  </Container>;
};