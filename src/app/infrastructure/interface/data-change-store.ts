import { IPagination } from "./pagination.interface";
import { ISorting } from "./sorting.interface";

export interface IDataChangeStore<T> {
    data: T;
    origin: T | any;
    isModified: boolean;
    isLoading: boolean;
    count: number;
    sorting: ISorting;
    pagination: IPagination;
    searchValue: string;
}