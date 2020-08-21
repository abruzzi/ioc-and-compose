import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Token from './Token';

const tokens = [
  "personal",
  "work",
  "travel"
];

ReactDOM.render(
  <React.StrictMode>
    {
      tokens.map(t => (<Token key={t} text={t} isRemovable />))
    }
  </React.StrictMode>,
  document.getElementById('root')
);

