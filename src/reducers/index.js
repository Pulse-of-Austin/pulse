import { combineReducers } from 'redux';
import UserReducer from './UserReducer.js';
import TopicReducer from './TopicReducer.js';

const rootReducer = combineReducers({
	UserReducer,
	TopicReducer
});

export default rootReducer;