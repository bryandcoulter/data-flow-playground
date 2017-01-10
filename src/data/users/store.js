class UsersStore {
  static store(observableModel, persistedState = LocalStorage.load('USERS')) {
    return ObjectManager.createStore(	UsersReducers.reducers(),	persistedState, observableModel );
  }
}
