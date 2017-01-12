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
    this[value]();
  }

  get filter() {
    return this._filter;
  }

  set filter(value) {
    this._filter = value;
    this.filterList();
  }

  toArray() {
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
    this._original = this.toArray();
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
    this._original = this.toArray();
  }

  sortUp(){
    this.users = this.users.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  sortDown() {
    this.users = this.users.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
  }
  filterList() {
    this.users = this._original.filter((value) => {
      return value.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0;
    });
  }
}
