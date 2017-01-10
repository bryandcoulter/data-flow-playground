class UsersReducers {
	static reducers () {
		const reloadFromDB = (state, action) => {
			return Object.assign({}, state, {
				users: LocalStorage.load('USERS').users
			})
    }
		const sortUp = (state, action) => {
			const sortBy = 'email';
      const _usersUP = state.users.sort(function(a, b) {

        var nameA = a[sortBy].toUpperCase();
        var nameB = b[sortBy].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return Object.assign({}, state, {
				users: _usersUP
			})
    }
    const sortDown = (state, action) => {
      const _usersDown = state.users.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      return Object.assign({}, state, {
				users: _usersDown
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
      sortDown,
      sortUp,
      updateUsers
    }
	}
}
