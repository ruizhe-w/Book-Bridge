import { ActionType, getType } from "typesafe-actions";

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

export interface TestState {
    readonly ready: boolean;
}

const initialState = {
    ready: false,
};

export const testReducer = (state: TestState = initialState, action: Action): TestState => {

    switch (action.type) {

        case getType(actions.testAction):
            return Object.assign({}, state, { ready: true });

        default:
            return state;
    }
};
