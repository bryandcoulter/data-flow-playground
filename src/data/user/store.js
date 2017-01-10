class UserStore {
  static store(persistedState = {}) {
    return ObjectManager.createStore(	UserReducers.reducers(),	persistedState );
  }
}
