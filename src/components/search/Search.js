import styles from './Search.module.css';
import React, { Fragment, useState, useRef, useEffect, useReducer } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
    if (!options.manager && !options.year && !options.zipcode && !options.stage) {
      const { data } = await axios.get('/api/accounts');
      setAccounts(data);
    } else {
      const { data } = await axios.get('/api/accounts/filter', {
        params: options
      });
      setAccounts(data);
    }
  };

  const handleChange = (e) => {
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        [e.target.name]: e.target.value
      };
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.examples}>Managers: Ginny, Jonathan, Ashley, James, Sakura</div>
      <form>
        <input onChange={handleChange} className={styles.input} type='text' name='manager' value={options.manager} placeholder='Account Manager' />
        <input onChange={handleChange} className={styles.input} type='number' name='year' value={options.year} placeholder='Year' />
        <input onChange={handleChange} className={styles.input} type='number' name='zipcode' value={options.zipcode} placeholder='ZIP Code' />
        <select onChange={handleChange} className={styles.select} name='stage' value={options.stage}>
        <option value='' disabled>Stage</option>
          <option value=''>All</option>
          <option value='engage'>Engage</option>
          <option value='familiarize'>Familiarize</option>
          <option value='initiate'>Initiate</option>
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
      <div className={styles.account_name}>{account.name}</div>
      <div className={styles.account_id}>ID: {account.id}</div>
      <div className={styles.account_stage}>
        <div className={styles.current_stage}>{account.stage}</div>
        {account.stage !== account.prediction &&
        <Fragment>
          <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          <div className={styles.predicted_stage}>{account.prediction}</div>
        </Fragment>}
      </div>
      <div className={styles.account_info}>
        <div className={styles.data}>Year: {account.year}</div>
        <div className={styles.data}>Manager: {account.manager}</div>
        <div className={styles.data}>Stage: {account.stage}</div>
        <div className={styles.data}>Employees: {account.employees}</div>
        <div className={styles.data}>ZIP Code: {account.zipcode}</div>
      </div>
    </div>
  );
};
export default Search;
