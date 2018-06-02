import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import './style.scss';

import Main from './components/Main.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import Favorites from './components/Favorites.jsx';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => (
  <Main />
);


ReactDOM.render(
  (
  <Provider store={createStoreWithMiddleware(reducers)} >
    <BrowserRouter>
      <div>
        <Route path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/favorites' component={Favorites} />
      </div>
  </BrowserRouter>
  </Provider>
  ), document.getElementById('app')
);
