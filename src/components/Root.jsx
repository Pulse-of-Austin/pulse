import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import SplashPage from './SplashPage.jsx';
import Profile from './Profile.jsx';
import AdminPortal from './AdminPortal.jsx';
import Learn from './Learn.jsx';
import Know from './Know.jsx';
import TopicPage from './TopicPage.jsx';

const Root = () => (
	<Provider store={
		createStoreWithMiddleware(
			reducers,
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)} >
		<Router history={browserHistory}>
			<Switch>
				<Route exact path='/' component={SplashPage} />
				<Route exact path='/portal' component={AdminPortal} />
				<Route path='/profile' component={Profile} />
				<Route path='/learn' component={Learn} />
				<Route path='/explore' component={Know} />
				<Route path='/topic*' component={TopicPage} />
			</Switch>
		</Router>
	</Provider>
)

export default Root;
