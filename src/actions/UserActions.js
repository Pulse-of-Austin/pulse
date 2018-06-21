export const viewFilter = () => (
	{
		type: 'VIEW-FILTER'
	}
)

export const login = (name, email, role) => (
	{
		type: 'LOGIN',
		payload: {
			name: name,
			email: email,
			role: role
		}
	}
)

export const logout = () => (
	{
		type: 'LOGOUT'
	}
)