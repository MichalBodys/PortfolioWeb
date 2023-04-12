import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './Styles/global.scss';
import App from './App';
import LineDrop from './Components/Linedrop/Linedrop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <LineDrop/>
    {/* <div className='cursor'></div> */}
  </React.StrictMode>
);
