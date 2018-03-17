import axios from "axios";
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from "./types";

const ROOT_URL = "http://localhost:3000";

export function signinUser(values: object, callback: any) {
    return function(dispatch: any) {
        axios.post(`${ROOT_URL}/signin`, values)
        .then((response) => {
            dispatch({ type: AUTH_USER });

            localStorage.setItem("token", response.data.token);

            callback();
        })
        .catch(() => {
            dispatch(authError("Bad Login Info"));
        });
    };
}

export function signUpUser(values: any, callback: any) {
    const { email, password } = values;
    return function(dispatch: any) {
        axios.post(`${ROOT_URL}/signup`, { email, password})
        .then((response) => {
            dispatch({ type: AUTH_USER });

            localStorage.setItem("token", response.data.token);

            callback();
        })
        .catch((error) => {
            dispatch(authError(error.response.data.error));
        });
    };
}

export function authError(error: string) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signOut() {
    localStorage.removeItem("token");

    return {
        type: UNAUTH_USER
    };
}
