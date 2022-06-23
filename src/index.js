/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './containers/App';
import 'normalize.css';
import './index.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<App />} />
    </Routes>
  </BrowserRouter>
);
