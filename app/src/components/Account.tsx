import * as React from "react";

export interface AccountProps {
    isLoggedIn: boolean,
    userName?: string,
    userImageUrl?: string,
    userMessageCounter?: string
}

export default class Account extends React.Component<AccountProps, {}> {
    render() {
        let accountDetail: any;
        if (this.props.isLoggedIn) {
            accountDetail =
                <div className="user">
                    <img className="user-img" src={this.props.userImageUrl} alt="Image"/>
                    <p className="user-name"> {this.props.userName}</p>

                    <button className="user-message">{this.props.userMessageCounter}</button>
                </div>;
        } else {
            accountDetail =
                <div className="fb-login-button" data-size="large" data-button-type="continue_with"
                     data-layout="default" data-auto-logout-link="true" data-use-continue-as="true"
                     data-width="">
                </div>;
        }
        return (
            accountDetail
        );
    }
}