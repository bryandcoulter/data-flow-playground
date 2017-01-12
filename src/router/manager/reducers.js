class RouterReducers {
	static reducers() {
    const changeRoute = (routeRegistry, action) => {
      action.routeInfo.view.innerHTML = '';
      const routeObject = RouteRegistry.routes[action.routeInfo.route];
      let element = document.createElement(routeObject.tags[0]);
      if(routeObject.controller) {
				element.controller = routeObject.controller;
			}
			if(routeObject.tags.length > 1) {
					element = document.createElement(routeObject.layout);
          element.pageElements = routeObject.tags;
          action.routeInfo.view.appendChild(element);



			} else {
        action.routeInfo.view.appendChild(element);
      }



      return {
        element: element,
        route: action.routeInfo.route,
        view: action.routeInfo.view,
        controller: routeObject.controller || ''
      }
  	}
    return { changeRoute };
  }
}
