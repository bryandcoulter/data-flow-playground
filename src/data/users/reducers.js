class UsersReducers {
	static reducers () {
		const reloadFromDB = (state, action) => {
			return Object.assign({}, state, {
				users: LocalStorage.load('USERS').users
			})
    }
		const updateUsers = (state, action) => {
			const _users = state.users.map((user) => {
				if(action.user.userId === user.Id) {
					return action.user;
				} else {
					return user;
				}
			});

			return Object.assign({}, state, {
				users: _users
			})
    }
    return {
      reloadFromDB,
      updateUsers
    }
	}
}
