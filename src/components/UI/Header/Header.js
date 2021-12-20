import React from 'react';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
import {Container} from '../Container/Container';
import {ToggleThemeHandler} from '../../../utils/utils';

export const Header = () => {
  return <Container>
    <header className={styles.Wrapper}>
      {/*TODO переделать на <Nav>*/}
      <div className={styles.NavWrapper}>
        <h3 className={styles.Logo}>Logo</h3>

        <Link className={styles.Link} to={'/shop'}>Home(Shop)</Link>
        <br/>
        <Link className={styles.Link} to={'/cart'}>Cart</Link>
      </div>
      <button className={styles.Button} onClick={ToggleThemeHandler}>change theme</button>
    </header>
  </Container>;
};