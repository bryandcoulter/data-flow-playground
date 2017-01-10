class UserReducers {
	static reducers () {
		const updateUser = (state, action) => {
			return Object.assign({}, state, {
				name: action.user.name,
				email: action.user.email,
				userId: action.user.userId
			})
		};
    const saveUser = (state, action) => {
      UserService.updateUser(action.user);
			return Object.assign({}, state, {
				name: action.user.name,
				email: action.user.email,
				userId: action.user.userId
			})
		};
		return {
			updateUser,
			saveUser
		};
	}
}
