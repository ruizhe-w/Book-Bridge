import * as React from "react";
import Account from "./Account";
import Books from "./Books";
import {BookProps} from "./Book";

export interface AppProps {
    loading: boolean;
}

export default class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            abstractBooks: [],
            loading: true,
            geoX: 0,
            geoY: 0,
            userId: "0",
        };
    }

    state = {
        abstractBooks: [] as BookProps[],
        loading: true,
        geoX: 0,
        geoY: 0,
        userId: "0",
    };


    render() {
        console.log("Init app");
        let booksDiv;
        if (this.state.loading) {
            booksDiv = <div className="main"></div>;
        } else {
            booksDiv =
                <div className="main">
                    <Books geoX={this.state.geoX} geoY={this.state.geoY} userId={this.state.userId} abstractBooks={this.state.abstractBooks}/>
                </div>;
        }
        return (
            <div className="app">
                {/*{this.props.loading && <div className="loading" />}*/}
                <div className="header">
                    <h1>Sale your books</h1>
                    <Account isLoggedIn={false}/>
                </div>
                {booksDiv}
                <div className="footer">this is just a footer</div>
            </div>
        );
    }
}
