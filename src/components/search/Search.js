import styles from './Search.module.css';
import React, { useState, useRef, useEffect, useReducer } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
  const [options, setOptions] = useState({
    manager: '',
    year: '',
    zipcode: '',
    stage: ''
  });
  const [accounts, setAccounts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get('/api/accounts');
    setAccounts(data);
  };

  const handleChange = (e) => {
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        [e.target.name]: e.target.value
      };
    });
  };

  useEffect(() => {
    console.log('options', options);
  }, [options])

  return (
    <div className={styles.container}>
      <form>
        <div>{options.manager}{options.zipcode}</div>
        <input onChange={handleChange} className={styles.input} type='text' name='manager' value={options.manager} placeholder='Account Manager' />
        <input onChange={handleChange} className={styles.input} type='number' name='year' value={options.year} placeholder='Year' />
        <input onChange={handleChange} className={styles.input} type='number' name='zipcode' value={options.zipcode} placeholder='ZIP Code' />
        <select onChange={handleChange} className={styles.select} name='stage' value={options.stage}>
        <option value='' disabled>Stage</option>
          <option value='priority'>Priority</option>
          <option value='engage'>Engage</option>
          <option value='familiarize'>Familiarize</option>
          <option value='initialize'>Initialize</option>
        </select>
        <button onClick={handleSubmit} className={styles.button}>Search</button>
      </form>
      <div className={styles.accounts}>
        {accounts.map((account) => {
          return <Account account={account} key={account.id} />
        })}
      </div>
    </div>
  );
};

const Account = (props) => {
  const { account } = props;

  return (
    <div className={styles.account}>
      <div className={styles.account_name}>Account Name</div>
      <div className={styles.account_id}>ID: {account.id}</div>
      <div className={styles.account_stage}>
        <div className={styles.current_stage}>{account.stage}</div>
        <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
        <div className={styles.predicted_stage}>Engage</div>
      </div>
      <div className={styles.account_info}>
        <div className={styles.data}>Manager: {account.manager}</div>
        <div className={styles.data}>Stage: {account.stage}</div>
        <div className={styles.data}>Employees: {account.employees}</div>
        <div className={styles.data}>ZIP Code: {account.zipcode}</div>
      </div>
    </div>
  );
};
export default Search;
