import * as React from "react";

import { TagsService } from "./services/tags-service";

import { Tag } from "./models/tag";

interface TagFormProps { newItemAdded(): void }
interface TagFormState { name: string }

export class TagForm extends React.Component<TagFormProps, TagFormState> {

    private service: TagsService;

    constructor() {
        super();

        this.submit = this.submit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.service = new TagsService();
        this.state = { name: "" };
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-10">
                        <h3>Add new tag</h3>
                    </div>
                </div>
                <form className="form-horizontal" onSubmit={this.submit}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="name">Name</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.onChange} />
                        </div>                        
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button className="btn btn-success" type="submit">Submit</button>
                        </div>                        
                    </div>
                </form>
            </div>    
        );
    }

    onChange(event): void {
        let text = event.target.value;
        this.setState({ name: text });
    }

    submit(event) {

        let tag: Tag = new Tag();
        tag.Id = 0;
        tag.Name = this.state.name;

        this.service.create(tag).then(() => {
            this.setState({ name: "" });
            this.props.newItemAdded();
        });

        event.preventDefault();
    }
}