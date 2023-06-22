import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Routing from './routes/Routing';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Routing />
  </React.StrictMode>
);
reportWebVitals();
