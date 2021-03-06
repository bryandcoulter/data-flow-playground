window.addEventListener('hashchange', router);
window.addEventListener('load', router);

function router() {
    const view = document.querySelector('body');
    const url = location.hash.slice(1) || '/';
    const routeManager = RouterManager.store();
    let route = 'login';
    if(url.indexOf('admin') > 0) {
      route = 'admin';
    }else if(url.indexOf('dashboard') > 0) {
      route = 'dashboard';
    } else if(url.indexOf('account') > 0) {
      route = 'account';
    }
    routeManager.dispatch(RouterActions.changeRoute({view: view, route: route}));    
}
