import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './pages/routes.jsx';
import Invoice from './models/Invoice';

const invoice = Invoice.create({currency: "USD)"});

ReactDOM.render(
  <Routes invoice={invoice} />,
  document.querySelector('#root')
);