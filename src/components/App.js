import styles from './App.module.css';
import React from 'react';
import Header from './Header.js';
import Search from './search/Search.js';

const App = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <Search />
    </div>
  );
};

export default App;