import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './../store/store';
import { Provider } from 'react-redux';
import App from './App';

import './../styles/styles.css';
import './../../node_modules/toastr/build/toastr.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
