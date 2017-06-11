export interface IService<T> {
    GetAll(): Array<T>;
    Create(obj: T): void;
    Delete(obj: T): void;
}