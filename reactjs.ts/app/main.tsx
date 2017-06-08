import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./header";
import { SpendingForm } from "./spending-form";

export interface HelloProps { compiler: string; framework: string; } 

export const HelloConst = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export class App extends React.Component<undefined, undefined> {

    constructor() {
        super();
    }

    render() {
        return <div className="container-fluid">
                  <Header />
                  <SpendingForm />
               </div>
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("main-container")
);