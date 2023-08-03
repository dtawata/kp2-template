import styles from './Header.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}><Link to='/'>KP:PAM</Link></div>
        <nav className={styles.nav}>
          <ul>
            <li><Link to='/accounts'>Accounts</Link></li>
            <li><Link to='/search'>Search</Link></li>
          </ul>
        </nav>
      </div>
      <div className={styles.right}>
        <div className={styles.login}>Logout</div>
      </div>
    </header>
  );
};

export default Header;