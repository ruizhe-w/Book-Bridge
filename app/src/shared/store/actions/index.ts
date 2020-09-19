import {createAction} from "typesafe-actions";

import {TEST_GET, USER_ACCOUNT_GET, USER_ACCOUNT_REGISTER} from "../constants";

export const testAction = createAction(TEST_GET, resolve => (lat: number, lng: number) => resolve({lat, lng}));
export const getUserInformationAction = createAction(USER_ACCOUNT_GET, action => {
    console.log("Action: getUserInformationAction");
    return (userId: string) => action({userId});
});
export const registUser = createAction(USER_ACCOUNT_REGISTER, resolve => (userId: string, userName: string, userImage: string) => resolve({
    userId,
    userName,
    userImage
}));