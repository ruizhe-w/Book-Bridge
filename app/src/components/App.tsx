import * as React from "react";
import Account from "./Account";
import {setUserInformationAction, registUser} from "../shared/store/actions";
import Books from "./Books";

export interface AppProps {
    loading: boolean;
}

export default class App extends React.Component<AppProps, {}> {
    render() {
        console.log("Init app");
        return (
            <div className="app">
                {/*{this.props.loading && <div className="loading" />}*/}
                <div className="header">
                    <h1>Sale your books</h1>
                    <Account isLoggedIn={false}/>
                </div>

                <div className="main">
                    <Books geoX={0} geoY={0} userId="0"/>

                </div>
                <div className="footer">this is just a footer</div>
            </div>
        );
    }
}
