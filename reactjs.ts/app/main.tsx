import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, hashHistory, Route, Link, Switch } from "react-router-dom";

import { Header } from "./header";
import { SpendingForm } from "./spending-form";
import { Home } from "./home";
import { Tags } from "./tags";

export class App extends React.Component<undefined, undefined> {

    constructor() {
        super();
    }

    render() {
        return <div className="container-fluid">
            <Header />
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tags">Tags</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="content-container">
                {this.props.children}
            </div>
        </div>
    }
}


ReactDOM.render(
    <Router history={hashHistory}>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tags" component={Tags} />
            </Switch>
        </App>
    </Router>,
    document.getElementById("main-container")
);