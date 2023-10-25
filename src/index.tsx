import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';


// MemoryRouter

// import { MemoryRouter, Route, Switch } from 'react-router-dom';

{/* <MemoryRouter initialEntries={['/', '/about', '/contact']} initialIndex={0}> */}
{/* <Switch> */}
  {/* <Route exact path="/" render={() => <div>Home Page</div>} /> */}
  {/* <Route path="/about" render={() => <div>About Page</div>} /> */}
  {/* <Route path="/contact" render={() => <div>Contact Page</div>} /> */}
  
  {/* Add the custom 404 route at the end */}
  {/* <Route component={NotFound} /> */}
{/* </Switch> */}
{/* </MemoryRouter> */}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
