import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

import { AUTH_USER } from "./actions/types";

export function initializeStore() {
    const enhancers = [
        applyMiddleware(reduxThunk)
    ];

    const createStoreWithMiddleware = composeWithDevTools(...enhancers)(createStore);

    const store = createStoreWithMiddleware(reducers);

    const token = localStorage.getItem("token");

    if (token) {
        store.dispatch({ type: AUTH_USER });
    }

    return store;
}
