import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/search" element={<>Search</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
