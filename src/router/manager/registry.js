class RouteRegistry {
  static get routes() {
    return {
      account: {
        tag: 'account-view',
        controller: new AccountController()
      },
      dashboard: {
        tag: 'dashboard-view',
        controller: new BaseController()
      },
      login: {
        tag: 'log-in',
        controller: new BaseController()
      },
      admin: {
        tag: 'user-admin',
        controller: new UserAdminController()
      },
      accountSM: {
        tag: 'account-sm'
      },
      adminSM: {
        tag: 'useradmin-sm'
      }
    }
  }
}
