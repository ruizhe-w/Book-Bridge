import * as React from "react";
import {actions} from "../shared/store";
import {getLoggedInUserInformation} from "../shared/services/Account";
import {getUserInformationAction} from "../shared/store/actions";

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
        this.render = this.render.bind(this);
        this.checkFacebookLoginStatus();
    }

   facebookCheckLoginStatusRecall = (response: any) => {
        let state;
        if (response.status == "connected") {
            console.log("Logged in");
            console.log(response.authResponse.userID);
            state = true;
            actions.getUserInformationAction(response.authResponse.userID);

            getLoggedInUserInformation(response.authResponse.userID).then(getUserInformationAction);
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
                                 data-layout="default" data-auto-logout-link="false" data-use-continue-as="true"
                                 data-width="">
            </div></div>;
        }
        return (
            accountDetail
        );
    }
}
