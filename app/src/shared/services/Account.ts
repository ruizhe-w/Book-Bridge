var ans: string;

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

const getLoggedInUserInformation = (userId: string) =>{
    console.log(`trying to get logged in user information: ${userId}`);
    // FIXME: comment it back
// , {
//         // method: "post",
//         // body: `{"userId": "${userId}"}`
//     }
    fetch("http://localhost:3000/v1/user/getLoggedInUserInformation").then(response => {
        response.json().then(json => {
            ans = `${json.UserId}+${json.UserName}+${json.UserImage}`;
        });
    });
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
