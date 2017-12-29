import 'babel-polyfill'; //Makes code backwards compatible for older browsers.
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux' //Module to create store :)
//Wrapping 'createStore' in curly brackets allows auto-creation of function that is ready to use



ReactDOM.render(
    <h1>React Redux Demo</h1>,
    document.getElementById('root')
);
