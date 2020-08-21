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
    <div style={{width: '800px', margin: '20px auto'}}>
      {
        tokens.map(t => (<Token key={t} text={t} isRemovable />))
      }
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

