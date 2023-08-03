import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App.js';
import Accounts from './components/accounts/Accounts.js';
import Search from './components/search/Search.js';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      <Route index element={<Accounts />} />
        <Route path='/Accounts' element={<Accounts />} />
        <Route path='/search' element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>);