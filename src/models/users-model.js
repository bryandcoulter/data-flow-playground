class UsersModel extends ObservableModel {
  get users() {
    return this._users;
  }

  set users(value) {
    this._users = value;
    this.emit({
      path: 'users',
      value: value
    });
  }

  get sort() {
    return this._sort;
  }

  set sort(value) {
    this._sort = value;
  }

  toObject() {
    return this._users.map((_user) => {
      return {name: _user.name, email: _user.email, userId: _user.userId }
    });
  }

  toObserveModel(modelObject) {
    this._users = modelObject.users.map((_user) => {
      const user = new UserModel();
      user.toModel(_user);
      return _user;
    });
    this.emit({
      path: 'users',
      value: this._users
    });
  }

  toModel(modelObject) {
    this._users = modelObject.users.map((_user) => {
      const user = new UserModel();
      user.toModel(_user);
      return _user;
    });
  }
}
