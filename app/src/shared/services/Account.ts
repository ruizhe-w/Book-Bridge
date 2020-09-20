const getLoggedInUserInformation = (userId: string) => {
    console.log(`trying to get logged in user information: ${userId}`);
    // FIXME: comment it back
    // return fetch("https://ppt666.com/v1/user/getLoggedInUserInformation", {
    //     method: "post",
    //     body: `{"userId": "${userId}"}`
    // })
    //     .then(response => response.json());
};

const createNewUser = (userId: string, userNickName: string, userImage: string) => {
    console.log(`create a new user: ${userId}`);
    return fetch("https://ppt666.com/v1/user/createNewUser", {
        method: "post",
        body: `{"userId": "${userId}","userNickName": "${userNickName}", "userImage": "${userImage}"}`
    })
        .then(response => response.json());
};



export {
    getLoggedInUserInformation,
    createNewUser,
};
