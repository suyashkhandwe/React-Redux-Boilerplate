import 'babel-polyfill'; //Makes code backwards compatible for older browsers.
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'; //Module to create store :)
//Wrapping 'createStore' in curly brackets allows auto-creation of function that is ready to use
import allReducers from './reducers';
import App from './components/app'

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
