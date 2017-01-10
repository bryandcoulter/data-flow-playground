class RouterReducers {
	static reducers() {
    const changeRoute = (routeRegistry, action) => {
      const routeObject = RouteRegistry.routes[action.routeInfo.route];
      const element = document.createElement(routeObject.tag);
      action.routeInfo.view.innerHTML = '';
      element.controller = routeObject.controller;
      action.routeInfo.view.appendChild(element);
      return {
        element: element,
        route: action.routeInfo.route,
        view: action.routeInfo.view,
        controller: routeObject.controller
      }
  	}
    return { changeRoute };
  }
}
