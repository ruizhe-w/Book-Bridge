import { combineReducers } from "redux";

import { testReducer, TestState } from "./TestReducer";
import { accountReducer, AccountState} from "./AccountReducer";

export type RootState = {
    test: TestState;
    account: AccountState;
};

const reducers = combineReducers({
    test: testReducer,
    account: accountReducer,
});

export default reducers;
