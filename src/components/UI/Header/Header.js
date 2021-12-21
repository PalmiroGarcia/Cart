import {React, useContext, useState} from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import {Container} from '../Container/Container';
import {ToggleThemeHandler} from '../../../utils/utils';
import {CartButton} from '../../shop/CartButton/CartButton';
import {CartContext} from "../../../context/CartContext";
import {Portal} from '../Portal/Portal';
import {PopUp} from '../PopUp/PopUp';
import {Button} from "../Button/Button";

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
        <Button onClick={ToggleThemeHandler}>change theme</Button>
      </div>
    </header>
  </Container>;
};