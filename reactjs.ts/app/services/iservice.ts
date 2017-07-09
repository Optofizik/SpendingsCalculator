
export interface IService<T> {
    GetAll(): Promise<Array<T>>;
    Create(obj: T): Promise<any>;
    Delete(obj: T): Promise<any>;
}