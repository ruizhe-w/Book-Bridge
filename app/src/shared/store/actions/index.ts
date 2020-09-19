import {createAction} from "typesafe-actions";

import {TEST_GET} from "../constants";

export const testAction = createAction(TEST_GET, resolve => (lat: number, lng: number) => resolve({lat, lng}));