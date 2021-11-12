import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { Contextrovider } from './context/Context';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Contextrovider>
    <App />
    </Contextrovider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


