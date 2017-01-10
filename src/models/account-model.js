class AccountModel extends ObservableModel {
  get membershipId() {
    return this._membershipId;
  }
  set membershipId(value) {
    this._membershipId = value;
    this.emit({
      path: 'membershipId',
      value: value
    });
  }

  get locationId() {
    return this._locationId;
  }
  set locationId(value) {
    this._locationId = value;
    this.emit({
      path: 'locationId',
      value: value
    });
  }

  get locationName() {
    return this._locationName;
  }
  set locationName(value) {
    this._locationName = value;
    this.emit({
      path: 'locationName',
      value: value
    });
  }

  get userId() {
    return this._userId;
  }
  set userId(value) {
    this._userId = value;
    this.emit({
      path: 'userId',
      value: value
    });
  }

  toObserveModel(modelObject) {
    this.membershipId = modelObject.membershipId;
    this.locationId = modelObject.locationId;
    this.locationName = modelObject.locationName;
    this.userId = modelObject.userId;
  }

  toModel(modelObject) {
    this._membershipId = modelObject.membershipId;
    this._locationId = modelObject.locationId;
    this._locationName = modelObject.locationName;
    this._userId = modelObject.userId;
  }
}
