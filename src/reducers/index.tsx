import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export interface IState {
    // authenticated: boolean;
}

const rootReducer = combineReducers({
    form: formReducer
});

export default rootReducer;
