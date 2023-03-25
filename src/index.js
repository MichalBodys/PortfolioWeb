import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/global.scss';
import App from './App';
import LineDrop from './Components/Linedrop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <LineDrop/>
  </React.StrictMode>
);
