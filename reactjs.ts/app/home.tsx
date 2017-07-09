import * as React from "react";

import { SpendingForm } from "./spending-form";
import { SpendingChart } from "./spending-chart";

export class Home extends React.Component<undefined, undefined> {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-8">
                        <SpendingChart />
                    </div>
                    <div className="col-sm-4">
                        <SpendingForm />
                    </div>
                </div>
            </div>
        );
    }
}