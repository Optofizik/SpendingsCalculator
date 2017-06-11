import * as React from "react";

export class Header extends React.Component<undefined, undefined> {

    constructor() {
        super();
    }

    render() {
        return (
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h3>Spendings calculator</h3>
                    </div>
                </div>
               );
    }
}