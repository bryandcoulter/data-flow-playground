class RouteRegistry {
  static get routes() {
    return {
      account: {
        tags: ['account-view'],
        controller: new AccountController()
      },
      dashboard: {
        tags: ['dashboard-view'],
        controller: new BaseController()
      },
      login: {
        tags: ['log-in'],
        controller: new BaseController()
      },
      admin: {
        tags: ['user-admin'],
        controller: new UserAdminController()
      },
      accountSM: {
        tags: ['account-sm']
      },
      adminSM: {
        tags: ['useradmin-sm']
      },
      twoUp: {
        tags: ['account-sm','useradmin-sm'],
        layout: 'two-up'
      }
    }
  }
}
