
import React from 'react';
import Home from './Pages/Home';
import Game from './Pages/Game';
import Setting from './Pages/Setting';
import NotFound from './Pages/NotFound';
import TermOfService from './Pages/TermOfService';
import PrivacyPolicy from './Pages/PrivacyPolicy';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Game' element={<Game />} />
        <Route path='Setting' element={<Setting />} />
        <Route path='TermOfService' element={<TermOfService />} />
        <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
