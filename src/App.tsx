import { Route, Routes } from 'react-router-dom';
import './App.css';

import React from 'react';
import Home from './Pages/Home';
import Game from './Pages/Game';
import Setting from './Pages/Setting';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Game' element={<Game />} />
        <Route path='Setting' element={<Setting />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
