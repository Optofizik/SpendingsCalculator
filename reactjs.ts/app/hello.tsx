import * as React from "../node_modules/@types/react/index";
import * as ReactDOM from "../node_modules/@types/react-dom/index";


export interface HelloProps { compiler: string; framework: string; } 

export const HelloConst = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export class Hello extends React.Component<HelloProps, undefined> {

    constructor() {
        super();
    }

    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}


ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("main-container")
);