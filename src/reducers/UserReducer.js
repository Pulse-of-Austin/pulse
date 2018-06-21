import { DefaultState } from './DefaultState.js';

const UserReducer = (state = DefaultState, action) => {
	switch (action.type) {
		case 'VIEW-FILTER':
			return {
				...state,
				viewFilter: true
			}
		case 'LOGIN':
			return {
				...state,
				loggedIn: true,
				admin: action.payload.role,
				user: action.payload.email,
				username: action.payload.name
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