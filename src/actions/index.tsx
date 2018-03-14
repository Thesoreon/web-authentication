import axios from "axios";
import { AUTH_USER } from "./types";

const ROOT_URL = "http://localhost:3000";

export function signinUser(values: object, callback: any) {
    return function(dispatch: any) {
        axios.post(`${ROOT_URL}/signin`, values)
        .then((response) => {
            dispatch({ type: AUTH_USER });
            callback();
        })
        .catch(() => {
            // TODO - respond to error / failed login
        });
    };
}
