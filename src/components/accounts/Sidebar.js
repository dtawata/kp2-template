import styles from './Sidebar.module.css';
import React from 'react';

const Sidebar = (props) => {
  const { accounts, account, changeAccount } = props;
  console.log('accounts', accounts);

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <div className={styles.title}>
          <div className={styles.title_text}>Priority</div>
          {accounts.priority.length !== 0 && <div className={styles.title_num}>{accounts.priority.length}</div>}
        </div>
        {accounts.priority.map((account) => {
          return <Account account={account} changeAccount={changeAccount} key={account.id} />
        })}
      </div>

      <div className={styles.category}>
        <div className={styles.title}>
          <div className={styles.title_text}>Engage</div>
          {accounts.engage.length !== 0 && <div className={styles.title_num}>{accounts.engage.length}</div>}
        </div>
        {accounts.engage.map((account) => {
          return <Account account={account} changeAccount={changeAccount} key={account.id} />
        })}
      </div>

      <div className={styles.category}>
        <h3 className={styles.title}>
          <div className={styles.title_text}>Initiate</div>
          {accounts.initiate.length !== 0 && <div className={styles.title_num}>{accounts.initiate.length}</div>}
        </h3>
        {accounts.initiate.map((account) => {
          return <Account account={account} changeAccount={changeAccount} key={account.id} />
        })}
      </div>

      <div className={styles.category}>
        <div className={styles.title}>
          <div className={styles.title_text}>Familiarize</div>
          {accounts.familiarize.length !== 0 && <div className={styles.title_num}>{accounts.familiarize.length}</div>}
        </div>
        {accounts.familiarize.map((account) => {
          return <Account account={account} changeAccount={changeAccount} key={account.id} />
        })}
      </div>

    </div>
  );
};

const Account = (props) => {
  const { account, changeAccount } = props;

  return (
    <div onClick={() => { changeAccount(account); }} className={styles.account}>{account.name}</div>
  );
};

export default Sidebar;