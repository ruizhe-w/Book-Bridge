const getLoggedInUserInformation = (userId: string) => {
    return fetch(`https:localhost:5000/v1/user/getLoggedInUserInformation`, {
        method: 'post',
        body: `{"userId": "${userId}"}`
    })
        .then(response => response.json());
};



export {
    getLoggedInUserInformation,
};
