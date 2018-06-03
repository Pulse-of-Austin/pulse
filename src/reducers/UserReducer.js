const UserReducer = (state = {}, action) => {
	switch (action.type) {
		case 'VIEW-FILTER':
			return {
				...state,
				viewFilter: true
			}
		default:
			return state;
	}
}

export default UserReducer;