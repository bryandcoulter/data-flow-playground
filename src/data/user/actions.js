class UserActions {
	static saveUser (user) {
		return {
			type: 'saveUser',
			user: user
		}
	}
	 static updateUser (user) {
		 return {
			 type: 'updateUser',
			 user: user
		 }
	 }
}
