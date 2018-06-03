import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import reducers from './reducers';
import './style.scss';

import SplashPage from './components/SplashPage.jsx';
import Profile from './components/Profile.jsx';
import AdminPortal from './components/AdminPortal.jsx';
import Learn from './components/Learn.jsx';
import Know from './components/Know.jsx';
import TopicPage from './components/TopicPage.jsx';

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
      <Router history={browserHistory}>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/portal' component={AdminPortal} />
          <Route path='/profile' component={Profile} />
          <Route path='/learn' component={Learn} />
          <Route path='/explore' component={Know} />
          <Route path='/topic' component={TopicPage} />
        </Switch>
    </Router>
  </Provider>
  ), document.getElementById('app')
);
