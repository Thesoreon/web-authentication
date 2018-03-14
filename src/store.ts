import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

export function initializeStore() {
    const enhancers = [
        applyMiddleware(reduxThunk)
    ];

    const createStoreWithMiddleware = composeWithDevTools(...enhancers)(createStore);

    const store = createStoreWithMiddleware(reducers);
    return createStoreWithMiddleware(reducers);
}
