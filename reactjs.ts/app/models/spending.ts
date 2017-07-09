import { IModel } from "./imodel";

export class Spending implements IModel {

    constructor() {
        this.Id = 0;
        this.Date = "";
        this.TagId = 0;
        this.Description = "";
        this.Price = 0;
    }

    public Id: number;
    public Description: string;
    public Date: string;
    public Price: number;
    public TagId: number;
}