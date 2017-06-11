import { IService } from "./iservice";

import { Tag } from "../models/tag";

export class TagsService implements IService<Tag> {
    public GetAll(): Array<Tag> {

        var getRequest = new XMLHttpRequest();
        getRequest.open("get", "api/tags", true);
        getRequest.send();
        getRequest.onreadystatechange = function () { };

        return [];
    }

    public Create(obj: Tag): void {

    }

    public Delete(obj: Tag): void {

    }
}