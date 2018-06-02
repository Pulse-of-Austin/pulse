import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import './style.scss';

import Main from './components/Main.jsx';
import Profile from './components/Profile.jsx';
import Favorites from './components/Favorites.jsx';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => (
  <Main />
);


ReactDOM.render(
  (
    <Provider store={
      createStoreWithMiddleware(
        reducers, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )} >
    <BrowserRouter>
      <div>
        <Route path='/' component={App} />
        <Route path='/profile' component={Profile} />
        <Route path='/favorites' component={Favorites} />
      </div>
  </BrowserRouter>
  </Provider>
  ), document.getElementById('app')
);
