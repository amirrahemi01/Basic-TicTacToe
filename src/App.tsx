import { Route, Routes } from 'react-router-dom';
import './App.css';

import React from 'react';
import Home from './Pages/Home';
import Game from './Pages/Game';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Game' element={<Game />} />
        <Route path='Setting' element={<Game />} />
        <Route path='Share' element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
