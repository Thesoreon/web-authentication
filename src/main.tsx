import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { initializeStore } from "./store";
import { BrowserRouter } from "react-router-dom";

import Index from "./components/index.component";

/* Styles */
import "./style/main.less";

const store = initializeStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Index />
        </BrowserRouter>
    </Provider>, document.getElementById("MOUNT")
);
