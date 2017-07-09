import * as React from "react";

import { TagsService } from "./services/tags-service";
import { SpendingsService } from "./services/spendings-service";

import { Tag } from "./models/tag";
import { Spending } from "./models/spending";

interface SpendingFormState { tags: Array<Tag>, spending: Spending }

export class SpendingForm extends React.Component<undefined, SpendingFormState> {

    private tagService: TagsService = new TagsService();
    private spendingSservice: SpendingsService = new SpendingsService();

    constructor() {
        super();

        this.getTagsList();
        this.state = { tags: [], spending: new Spending() };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePropValue = this.changePropValue.bind(this);
    }

    render() {

        let tags: Array<Tag> = this.state.tags;

        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="date">Date:</label>
                    <div className="col-sm-10">
                        <input type="date"
                               className="form-control"
                               id="date"
                               placeholder="Enter date"
                               onChange={(ev) => this.changePropValue(ev, "Date")}
                               value={this.state.spending.Date} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="tag">Tag:</label>
                    <div className="col-sm-10">
                        <select id="tag"
                                className="form-control"
                                onChange={(ev) => this.changePropValue(ev, "TagId")}
                                value={this.state.spending.TagId}
                                >
                            {
                                tags.map((tag) => {
                                    return (<option key={tag.Id} value={tag.Id}>{tag.Name}</option>);
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="description">Descr:</label>
                    <div className="col-sm-10">
                        <textarea id="description"
                                  className="form-control"
                                  onChange={(ev) => this.changePropValue(ev, "Description")} 
                                  value={this.state.spending.Description}>                           
                        </textarea>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="price">Price:</label>
                    <div className="col-sm-10">
                        <input id="price"
                            type="number"
                            className="form-control"
                            min="0"
                            max="10000"
                            step="0.01"
                            value={this.state.spending.Price}
                            onChange={(ev) => this.changePropValue(ev, "Price") } />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-4 col-sm-offset-2">
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>
                </div>
            </form>
        );
    }

    getTagsList(): void {
        this.tagService.getAll().then(arr => {

            if (arr.length != 0) {
                let spending = this.state.spending;
                spending.TagId = arr[0].Id;
                this.setState({ tags: arr, spending: spending });
            }            
        });
    }

    handleSubmit(event): void {
        event.preventDefault();
        this.spendingSservice.create(this.state.spending);
        this.setState({ spending: new Spending() });
    }

    private changePropValue(event, prop: string): void {
        let spending = this.state.spending;       
        spending[prop] = event.target.value;
        this.setState({ spending: spending });
    }
}
