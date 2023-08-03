import styles from './App.module.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.js';

const App = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;

