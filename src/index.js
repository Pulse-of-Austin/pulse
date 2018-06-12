import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import Favicon from 'react-favicon';

import Root from './components/Root.jsx';

ReactDOM.render(
  (<div>
    <Favicon url='./images/favicon.ico' />
    <Root/>
  </div>
  ), document.getElementById('app')
);
