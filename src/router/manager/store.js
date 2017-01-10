class RouterManager {
  static store(persistedState = {} ) {
    return ObjectManager.createStore(	RouterReducers.reducers(),	persistedState );
  }
}
