import * as React from "react";

export class SpendingForm extends React.Component<undefined, undefined> {
    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                </div>
            </form>    
        );
    }

    getTagsList(): void {
        
    }
}
