import React from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.logo}>KP:PAM</div>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Priority</li>
          <li className={styles.soon}>Accounts</li>
          <li>Search</li>
          <li className={styles.soon}>Feedback</li>
        </ul>
      </nav>
      <div className={styles.right}>
        {/* <div>
          <div className={styles.cart}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon icon={faCartShopping} className={styles.icon} flip="horizontal" />
              <div className={styles.qty}>27</div>
            </div>
            <div>Cart</div>
          </div>
        </div> */}
        <div className={styles.login}>Logout</div>
      </div>
    </header>
  );
};

export default Header;