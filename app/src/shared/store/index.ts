import { applyMiddleware, compose, createStore } from "redux";

import * as actions from "./actions";
import reducers, { RootState } from "./reducers";

export type RootStateType = RootState;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

// Create store
function configureStore(initialState?: RootStateType) {
    // create store
    return createStore(
        reducers,
        initialState
    );
}

const store = configureStore();

export { store, actions };
