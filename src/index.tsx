import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import ThemeSwitch from './Components/ThemeSwitch';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <div style={{display: "none"}}><ThemeSwitch/></div>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
