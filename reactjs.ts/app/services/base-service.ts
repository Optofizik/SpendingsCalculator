import { IModel } from "../models/imodel";

export abstract class BaseService<T extends IModel> {

    constructor(protected url: string) { }

    public getAll(): Promise<Array<T>> {        

        return new Promise<Array<T>>((resolve) => {
            let request: XMLHttpRequest = new XMLHttpRequest();
            request.open("GET", this.url, true);
            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(JSON.parse(request.response));
                } else {
                    console.log(request.response);
                }
            };
            request.send();
        });
    }

    public create(obj: T): Promise<any> {

        return new Promise<void>(resolve => {
            let request: XMLHttpRequest = new XMLHttpRequest();
            request.open("POST", this.url, true);
            request.setRequestHeader("Content-type", "application/json; charset=utf-8");
            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response);
                } else {
                    console.log(request.response);
                }
            };
            request.send(JSON.stringify(obj));
        });
    }

    public delete(id: number): Promise<any> {

        return new Promise<void>(resolve => {
            let request: XMLHttpRequest = new XMLHttpRequest();
            request.open("DELETE", this.url + "/" + id.toString(), true);
            request.setRequestHeader("Content-type", "application/json; charset=utf-8");
            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response);
                } else {
                    console.log(request.response);
                }
            };
            request.send();
        });
    }


}