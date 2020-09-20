import {ERROR, USER_ACCOUNT_GET, USER_ACCOUNT_REGISTER} from "../constants";

// export const getUserInformationAction = createAction(USER_ACCOUNT_GET, action => {
//     console.log("Action: getUserInformationAction");
//     return (userId: string) => action({userId});
// });

export const getUserInformationAction = (userId: string) => ({
    type: USER_ACCOUNT_GET,
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
