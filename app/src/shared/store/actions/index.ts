import {ERROR, GET_ALL_BOOKS, USER_ACCOUNT_SET, USER_ACCOUNT_REGISTER} from "../constants";

export const setUserInformationAction = (userId: string) => ({
    type: USER_ACCOUNT_SET,
    payload: {
        userId: userId
    }
});

export const registUser = (userId: string, userName: string, userImage: string) => ({
    type: USER_ACCOUNT_REGISTER,
    payload: {
        userId: userId,
        userName: userName,
        userImage: userImage
    }
});

export const errorAction = (error: Error) => ({
    type: ERROR,
    payload: {
        error: error
    }
});

export const getALlNearybyBooksAction = (userId: string, geoX: number, geoY: number) => ({
    type: GET_ALL_BOOKS,
    payload: {
        userId: userId,
        geoX: geoX,
        geoY: geoY
    }
});
