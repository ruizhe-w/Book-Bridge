import { combineReducers } from "redux";

import { testReducer, TestState } from "./TestReducer";

export type RootState = {
    test: TestState;
};

const reducers = combineReducers({
    test: testReducer,
});

export default reducers;
