import {React, useContext} from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import {Container} from '../Container/Container';
import {ToggleThemeHandler} from '../../../utils/utils';
import {CartButton} from '../../shop/CartButton/CartButton';
import {CartContext} from "../../../context/CartContext";

export const Header = () => {
    const [counterProducts] = useContext(CartContext);
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
                <CartButton counterProducts={counterProducts}/>
                <button className={styles.Button} onClick={ToggleThemeHandler}>change theme</button>
            </div>
        </header>
    </Container>;
};