import { DefaultState } from './DefaultState.js';

const TopicReducer = (state = DefaultState, action) => {
	switch(action.type) {
		case 'SELECT-TOPIC':
			return {
				...state,
				selectedTopic: action.payload
			}
		default:
			return state;
	}
}

export default TopicReducer;
