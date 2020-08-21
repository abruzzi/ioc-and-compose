import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Token from './Token';

ReactDOM.render(
  <React.StrictMode>
    <Token text="I am a token" />
  </React.StrictMode>,
  document.getElementById('root')
);

