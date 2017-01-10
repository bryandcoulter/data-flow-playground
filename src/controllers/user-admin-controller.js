class UserAdminController extends BaseController {
  constructor() {
    super();    
    this.user = new UserModel();
    this._userStore = UserStore.store(this.user);
    this.usersModel = new UsersModel();
    this._usersStore = UsersStore.store(this.usersModel);
  }

  changeUser (user) {
    const action = UserActions.updateUser(user);
    this._userStore.dispatch(action);
    this.user.toObserveModel(this._userStore.getState());
  }

  saveUser (user) {
    const userAction = UserActions.saveUser(user);
    this._userStore.dispatch(userAction);
    const usersAction = UsersActions.reloadFromDB();
    this._usersStore.dispatch(usersAction);
    if(this.usersModel.sort) {
      this[this.usersModel.sort]();
    }
  }

  sortUp() {
    const sortAction = UsersActions.sortUp();
    this._usersStore.dispatch(sortAction);
    this.usersModel.sort = 'sortUp';
  }

  sortDown() {
    const sortAction = UsersActions.sortDown();
    this._usersStore.dispatch(sortAction);
    this.usersModel.sort = 'sortDown';
  }

}
