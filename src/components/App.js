import styles from './App.module.css';
import React from 'react';
import Search from './search/Search.js';
import Header from './Header.js';

const App = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <Search />
    </div>
  );
};

export default App;