class UsersActions {

	 static reloadFromDB () {
		 return {
			 type: 'reloadFromDB',
		 }
	 }

   static sortDown () {
		 return {
			 type: 'sortDown',
		 }
	 }

	 static sortUp () {
     return {
			 type: 'sortUp',
		 }
	 }

	 static updateUsers (user) {
		 return {
			 type: 'updateUsers',
			 user: user
		 }
	 }
}
