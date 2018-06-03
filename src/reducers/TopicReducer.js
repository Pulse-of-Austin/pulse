import { DefaultState } from './DefaultState.js';

const TopicReducer = (state = DefaultState, action) => {
	switch(action.type) {
		case 'SELECT-TOPIC':
			return {
				...state,
				selectedTopic: action.payload
			}
		case 'SELECT-NEW-TOPIC-STUBS':
			let newLastIndex = state.currentLastStubIndex + 3;
			let newStubs = [];
			for (let i = state.currentLastStubIndex + 1; i <= newLastIndex; i++) {
				newStubs.push(state.topicStubs[i])
			}
			console.log(newLastIndex, newStubs)
			return {
				...state,
				currentLastStubIndex: newLastIndex,
				selectedTopicStubs: newStubs
			}
		case 'SELECT-PREVIOUS-TOPIC-STUBS':
			newLastIndex = state.currentLastStubIndex >= 3 ? state.currentLastStubIndex - 3 : 2;
			newStubs = [];
			for (let i = newLastIndex - 2 ; i <= newLastIndex; i++) {
				newStubs.push(state.topicStubs[i])
			}
			console.log(newLastIndex, newStubs)
			return {
				...state,
				currentLastStubIndex: newLastIndex,
				selectedTopicStubs: newStubs
			}
		default:
			return state;
	}
}

export default TopicReducer;
