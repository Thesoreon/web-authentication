import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth.reducer";

export interface IState {
    // authenticated: boolean;
}

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer
});

export default rootReducer;
