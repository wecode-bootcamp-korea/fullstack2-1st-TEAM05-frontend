import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routes';
import './styles/_reset.scss';
import './styles/_common.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
