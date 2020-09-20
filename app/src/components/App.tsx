import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import {Component} from "react";
import DetailedBook from "./DetailedBook";
import Upload from "./Upload";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/detail" component={DetailedBook}/>
                        <Route path="/upload" component={Upload}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;