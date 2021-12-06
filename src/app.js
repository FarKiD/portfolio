import React from 'react';
import ReactDOM from 'react-dom';

import "./styles/index.scss";

import AppRouter from './routers/AppRouter';

let domContainer = document.querySelector('#root');

const jsx = (
  <AppRouter />
);

ReactDOM.render(jsx, domContainer);

