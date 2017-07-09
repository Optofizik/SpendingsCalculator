import { BaseService } from "./base-service";

import { Tag } from "../models/tag";

import { AppConfig } from "../common/app-config";

export class TagsService extends BaseService<Tag> {
    constructor() {
        super(AppConfig.UrlTagService);
    }
}