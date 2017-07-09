import * as React from "react";

import { TagForm } from "./tag-form";

import { IService } from "./services/iservice";
import { TagsService } from "./services/tags-service";
import { Tag } from "./models/tag";

interface TagState { tags: Array<Tag> }

export class Tags extends React.Component<undefined, TagState> {

    private service: TagsService;
    private selectedTag: Tag = new Tag();

    constructor() {
        super();

        this.service = new TagsService();
        this.state = { tags: [] };
        this.newItemHandler = this.newItemHandler.bind(this);
    }

    render() {

        let tags: Array<Tag> = this.state.tags;
        return (
            <div>
                <TagForm newItemAdded={this.newItemHandler} />
                <h4>Tag list</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <ul className="list-group">
                            {
                                tags.map((tag: Tag, i: number) => {
                                    return (
                                        <li key={tag.Id} className="list-group-item">
                                            <div className="row">
                                                <div className="col-sm-6 text-left">{tag.Name}</div>
                                                <div className="col-sm-6 text-right">
                                                    <span className="glyphicon glyphicon-pencil text-info" onClick={this.selectTag.bind(this, i)}></span>&nbsp;&nbsp;
                                                    <span className="glyphicon glyphicon-remove text-danger" onClick={this.removeTag.bind(this, i)}></span>
                                                </div>
                                            </div>
                                        </li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    newItemHandler(): void {
        this.loadData();
    }

    componentDidMount() {
        this.loadData();
    }

    removeTag(index: number): void {
        let tags: Array<Tag> = this.state.tags;
        let tag: Tag = tags[index];

        this.service.delete(tag.Id).then(() => {
            tags.splice(index, 1);
            this.setState({tags: tags});
        });
    }

    selectTag(index: number): void {
        let tags = this.state.tags;
        this.selectedTag = tags[index];
    }

    private loadData(): void {
        this.service.getAll().then((arr: Array<Tag>) => {
            this.setState({ tags: arr });
        });
    }
}