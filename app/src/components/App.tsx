import * as React from "react";

export interface AppProps {
    loading: boolean;
}

export default class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div className="app">
                {this.props.loading && <div className="loading" />}
                <div className="header">
                    <h1>Sell your books</h1>
                </div>
                <div className="main">
                    {/*<Weather />*/}
                    {/*<Map />*/}
                </div>
                <div className="footer">(c) 2018 mitsuru ogawa</div>
            </div>
        );
    }
}
