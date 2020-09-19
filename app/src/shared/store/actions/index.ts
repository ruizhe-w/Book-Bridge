import {createAction} from "typesafe-actions";

import {FACKBOOK_LOGIN, TEST_GET} from "../constants";

export const testAction = createAction(TEST_GET, resolve => (lat: number, lng: number) => resolve({lat, lng}));
export const logInFacebookAction = createAction(FACKBOOK_LOGIN, );