import { ActionType, getType } from "typesafe-actions";

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

export interface AccountState {
    readonly isLoggedIn: boolean;
}

const initialState = {
    isLoggedIn: false,
};

export const testReducer = (state: AccountState = initialState, action: Action): AccountState => {

    switch (action.type) {

        case getType(actions.logInFacebookAction):
            return Object.assign({}, state, { isLoggedIn: true });

        default:
            return state;
    }
};
