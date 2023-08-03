import styles from './Main.module.css';
import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';

const Main = (props) => {
  const { account } = props;

  return (
    <div className={styles.container}>
      <div className={styles.account}>
        {account.stage !== account.prediction && <div className={styles.banner}>Account is ready for the next stage: {account.prediction}</div>}
        <div className={styles.account_top}>
          <div className={styles.account_name}>{account.name} <span className={styles.account_num}>ID: {account.id}</span></div>
          <div className={styles.stage}>
            <div className={styles.current_stage}>{account.stage}</div>
            {account.stage !== account.prediction &&
            <Fragment>
              <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
              <div className={styles.predicted_stage}>{account.prediction}</div>
            </Fragment>}
          </div>
        </div>
        <div className={styles.account_mid}>
          <div className={styles.account_mid_left}>
            <h3>Account Information</h3>
            <div className={styles.data}>Year: {account.year}</div>
            <div className={styles.data}>Account Manager: {account.manager}</div>
            <div className={styles.data}>Account Stage: {account.stage}</div>
            <div className={styles.data}>ZIP Code: {account.zipcode}</div>
            <div className={styles.data}>Number of Employees: {account.employees}</div>
          </div>
          <div className={styles.account_mid_right}>
            <h3>PAM Recommendation</h3>
            <div className={styles.data}>Recommended Account Stage: {account.prediction}</div>
            <div className={styles.data}>Date: 08/01/23</div>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contact_left}>
          <h3 className={styles.title}>Point of Contact</h3>
          <div className={styles.contact_info}>
            <FontAwesomeIcon icon={faUser} className={styles.user_icon} />
            <div>
              <div className={styles.user_name}>John Doe</div>
              <div className={styles.user_info}>Role: Manager</div>
              <div className={styles.user_info}>Phone #: 213-786-3196</div>
              <div className={styles.user_info}>Email: doe.john@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={styles.contact_right}>
          <div className={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
    </div>
  );
};

export default Main;