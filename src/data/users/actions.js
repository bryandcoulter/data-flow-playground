class UsersActions {

	 static reloadFromDB () {
		 return {
			 type: 'reloadFromDB',
		 }
	 }

   static updateUsers (user) {
		 return {
			 type: 'updateUsers',
			 user: user
		 }
	 }
}
