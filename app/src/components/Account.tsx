import * as React from "react";
import {getLoggedInUserInformation} from "../shared/services/Account";
import {setUserInformationAction} from "../shared/store/actions";

export interface AccountProps {
    isLoggedIn: boolean,
    userName?: string,
    userImageUrl?: string,
    userMessageCounter?: string
}

export default class Account extends React.Component<AccountProps, {}> {
    state = {isLoggedIn: false};

    constructor(props: AccountProps) {
        super(props);
        this.state = {isLoggedIn: false};
        FB.Event.subscribe("auth.statusChange", this.checkFacebookLoginStatus);
    }

    componentDidMount() {
        this.checkFacebookLoginStatus = this.checkFacebookLoginStatus.bind(this);
        this.facebookCheckLoginStatusRecall = this.facebookCheckLoginStatusRecall.bind(this);
        this.getLoggedInUserInformation = this.getLoggedInUserInformation.bind(this);
        this.render = this.render.bind(this);
        this.checkFacebookLoginStatus();
    }

    getLoggedInUserInformation(userId: string) {
        console.log(`trying to get logged in user information: ${userId}`);
        // FIXME: comment it back
// , {
//         // method: "post",
//         // body: `{"userId": "${userId}"}`
//     }
        fetch("http://localhost:3000/v1/user/getLoggedInUserInformation").then(response => {
            response.json().then(json => {
                this.setState({
                    userName: json.UserName,
                    userId: json.UserId,
                    userImage: json.UserImage
                });
                console.log("Update successfully");
            });
        });
    }

   facebookCheckLoginStatusRecall = (response: any) => {
        let state;
        if (response.status == "connected") {
            console.log("Logged in");
            console.log(response.authResponse.userID);
            state = true;
            try {
                this.getLoggedInUserInformation(response.authResponse.userID);
            } catch (e) {
                console.error(e);
            }
        } else {
            console.log("Not logged in.");
            state = false;
        }
        if (state != this.state.isLoggedIn) {
            this.setState({isLoggedIn: state});
        }
    }

    checkFacebookLoginStatus = () => {FB.getLoginStatus(this.facebookCheckLoginStatusRecall);}

    render() {
        let accountDetail: any;

        if (this.state.isLoggedIn) {
            accountDetail =
                <div className="user-base">
                    <img className="user-img" src={this.props.userImageUrl} alt="Image"/>
                    <p className="user-name"> {this.props.userName}</p>

                    <button className="user-message">{this.props.userMessageCounter}</button>
                </div>;
        } else {
            accountDetail = <div className="user-base"><div className="fb-login-button" data-size="large" data-button-type="continue_with"
                                 data-layout="default" data-auto-logout-link="true" data-use-continue-as="true"
                                 data-width="">
            </div></div>;
        }
        return (
            accountDetail
        );
    }
}
