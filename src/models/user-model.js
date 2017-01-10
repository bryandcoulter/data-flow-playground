class UserModel extends ObservableModel {
  get userid() {
    return this._userId;
  }
  set userid(value) {
    this._userId = value;
    this.emit({
      path: 'userId',
      value: value
    });
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this.emit({
      path: 'name',
      value: value
    });
  }

  get email() {
    return this._email;
  }
  set email(value) {
    if(value != this._email) {
      this._email = value;
      this.emit({
        path: 'email',
        value: value
      });
    }
  }

  toObserveModel(modelObject) {
    this.email = modelObject.email;
    this.name = modelObject.name;
    this.userid = modelObject.userId;
  }

  toModel(modelObject) {
    this._email = modelObject.email;
    this._name = modelObject.name;
    this._userId = modelObject.userId;
  }
}
