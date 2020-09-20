import * as actions from "../actions";
import {act} from "react-dom/test-utils";
import {Action} from "redux";
import {ERROR, USER_ACCOUNT_GET} from "../constants";

export interface AccountState {
    readonly isLoggedIn: boolean;
    readonly username: string;
    readonly userImage: string;
    readonly ready: boolean;
}

const initialState = {
    isLoggedIn: false,
    username: "",
    userImage: "",
    ready: false
};

export const accountReducer = (state: AccountState = initialState, action: any): AccountState => {

    switch (action.type) {
        case USER_ACCOUNT_GET:
            console.log(action);
            return Object.assign({}, state, { isLoggedIn: true, username: action.payload});
        case ERROR:
            console.log(action.payload);
            return state;
        default:
            console.log(action);
            return state;
    }
};
