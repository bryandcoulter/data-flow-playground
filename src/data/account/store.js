class AccountStore {
  static store(persistedState = LocalStorage.load('ACCOUNT') ) {
    return ObjectManager.createStore(	AccountReducers.reducers(),	persistedState );
  }
}
