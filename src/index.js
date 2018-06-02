import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import './style.scss';

import SplashPage from './components/SplashPage.jsx';
import Profile from './components/Profile.jsx';
import Learn from './components/Learn.jsx';
import WeighIn from './components/WeighIn.jsx';
import Know from './components/Know.jsx';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => (
  <SplashPage />
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
        <Route path='/learn' component={Learn} />
        <Route path='/weign-in' component={WeighIn} />
        <Route path='/know' component={Know} />
      </div>
  </BrowserRouter>
  </Provider>
  ), document.getElementById('app')
);
