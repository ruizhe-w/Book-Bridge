import { ActionType, getType } from "typesafe-actions";

import * as actions from "../actions";
import {act} from "react-dom/test-utils";

type Action = ActionType<typeof actions>;

export interface AccountState {
    readonly isLoggedIn: boolean;
    readonly username: string;
    readonly userImage: string;
}

const initialState = {
    isLoggedIn: false,
    username: "",
    userImage: ""
};

export const accountReducer = (state: AccountState = initialState, action: Action): AccountState => {

    switch (action.type) {
        case getType(actions.getUserInformationAction):
            return Object.assign({}, state, { isLoggedIn: true, username: action.payload});

        default:
            return state;
    }
};
