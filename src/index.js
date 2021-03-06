import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './layouts/App/App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);