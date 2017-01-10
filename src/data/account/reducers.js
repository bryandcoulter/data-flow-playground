class AccountReducers {
	static reducers() {
    const updateAccount = (state, action) => {
  		LocalStorage.save('ACCOUNT', action.account);
  		return Object.assign({}, state, {
  			membershipId: action.account.membershipId,
  			locationId: action.account.locationId,
  			locationName: action.account.locationName
  		})
  	}
    return { updateAccount };
  }
}
