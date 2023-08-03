import styles from './Accounts.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar.js';
import Main from './Main.js';

const Accounts = (props) => {
  const [accounts, setAccounts] = useState({ priority: [], engage: [], initiate: [], familiarize: [] });
  const [account, setAccount] = useState({});

  const fetchData = async () => {
    const { data } = await axios.get('/api/accounts');
    const temp = {
      priority: [],
      engage: [],
      initiate: [],
      familiarize: []
    };
    for (const account of data) {
      temp[account.stage.toLowerCase()].push(account);
      if (account.stage !== account.prediction) {
        temp.priority.push(account);
      }
    }
    setAccounts(temp);
    setAccount(temp.priority[0]);
  };

  const changeAccount = (acc) => {
    setAccount(acc);
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className={styles.container}>
      <Sidebar accounts={accounts} account={account} changeAccount={changeAccount} />
      <Main account={account} />
    </div>
  );
};

export default Accounts;