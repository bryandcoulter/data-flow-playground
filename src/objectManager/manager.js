class ObjectManager {
  static createStore(reducers, persistedState = {}, observableModel) {
    let state = persistedState;
    let modelSubscriptions = [];
    let functionSubscriptions = [];
    let actionSubscriptions = {};
    if(observableModel instanceof ObservableModel) {
        observableModel.toModel(state);
    }
    const dispatch = (action) => {
      state = reducers[action.type](state, action);
      for (let i = 0; i < modelSubscriptions.length; i++) {
        const modelSubscription = modelSubscriptions[i];
        modelSubscription.toObserveModel(state);
      }

      for (let i = 0; i < functionSubscriptions.length; i++) {
        const functionSubscription = functionSubscriptions[i];
        functionSubscription(state);
      }

      if(observableModel instanceof ObservableModel) {
          observableModel.toObserveModel(state);
      }
    };
    const getState = () => {
      return state;
    };
    const subscribeModel = (subscription) => {
      modelSubscriptions.push(subscription);
    };
    const unsubscribeModel = (subscription) => {
      modelSubscriptions.splice(modelSubscriptions.indexOf(subscription), 1);
    };
    const subscribeFunction = (subscription) => {
      functionSubscriptions.push(subscription);
    };
    const unsubscribeFunction = (subscription) => {
      functionSubscriptions.splice(functionSubscriptions.indexOf(subscription), 1);
    };
    const subscribeAction = (action, subscription) => {
      if(actionSubscriptions[action.type]) {
        actionSubscriptions[action.type].push(subscription);
      } else {
        actionSubscriptions[action.type] = [subscription];
      }
    };
    const unsubscribeAction = (action, subscription) => {
      //TODO add unsubscribeAction;    
    };

    return {
      dispatch,
      getState,
      subscribeModel,
      unsubscribeModel,
      subscribeFunction,
      unsubscribeFunction
    };
  }
}
