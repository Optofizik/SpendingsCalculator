import * as React from "react";

export class Header extends React.Component<undefined, undefined> {

    constructor() {
        super();
    }

    render() {
        return (
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <b>Here you can calculate your spendings</b>
                    </div>
                </div>
               );
    }
}