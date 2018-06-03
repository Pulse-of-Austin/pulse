import { DefaultState } from './DefaultState.js';

const UserReducer = (state = DefaultState, action) => {
	switch (action.type) {
		case 'VIEW-FILTER':
			return {
				...state,
				viewFilter: true
			}
		case 'LOGOUT':
			return {
				...state,
				loggedIn: false,
				admin: false
			}
		default:
			return state;
	}
}

export default UserReducer;