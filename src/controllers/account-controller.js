class AccountController extends BaseController {
  constructor() {
    super();
    this._accountStore = AccountStore.store();
    this.account = new AccountModel();
    this.account.toModel(this._accountStore.getState());
    this._accountStore.subscribeModel(this.account);    
  }

  changeAccount (account) {
    const action = AccountActions.updateAccount(account);
    this._accountStore.dispatch(action);
  }

}
