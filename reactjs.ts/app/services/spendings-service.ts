import { BaseService } from "./base-service";

import { AppConfig } from "../common/app-config";

import { Spending } from "../models/spending";

export class SpendingsService extends BaseService<Spending> {
    constructor() {
        super(AppConfig.UrlSpendingService);
    }
}