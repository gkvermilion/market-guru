import { Action } from '@ngrx/store';
import { IData } from '../interface/datagrid.interface';
import { ISorting } from '../../../infrastructure/interface/sorting.interface';
import { IPagination } from '../../../infrastructure/interface/pagination.interface';
import { mapPayloadToState } from '../../../infrastructure/common/mapping';

export enum DataGridActionTypes {
    LoadDataGrid = 'DATAGRID_LOAD',
    LoadDataGridSuccess = 'DATAGRID_LOAD_SUCCESS',
    LoadDataGridFail = 'DATAGRID_LOAD_FAIL',

    ChangePageRequest = 'DATAGRID_CHANGE_PAGE_REQUEST',
    ChangePageRequestSuccess = 'DATAGRID_CHANGE_PAGE_REQUEST_SUCCESS',
    ChangePageRequestFail = 'DATAGRID_CHANGE_PAGE_REQUEST_FAIL',
}

export class LoadDataGridAction implements Action {
    readonly type = DataGridActionTypes.LoadDataGrid;
    searchValue: string;
    sorting: ISorting;
    pagination: IPagination;

    constructor(searchValue: string, sorting: ISorting, pagination: IPagination) {
        this.searchValue = searchValue;
        this.sorting = sorting;
        this.pagination = pagination;
    }
}

export class LoadDataGridSuccessAction implements Action {
    readonly type = DataGridActionTypes.LoadDataGridSuccess;
    data: IData[];
    count: number;
    constructor(payload: IData[] | null, count: number) {
        if (payload) {
            this.data = payload;
        } else {
            this.data = [];
        }
        this.count = count;
    }
}

export class LoadDataGridFailAction implements Action {
    readonly type = DataGridActionTypes.LoadDataGridFail;
}

export class ChangePageRequestAction implements Action {
    readonly type = DataGridActionTypes.ChangePageRequest;
    pagination: IPagination;
    sorting: ISorting;
    searchValue: string

    constructor(pagination: IPagination, sorting: ISorting, searchValue: string) {
        if (pagination) {
            this.pagination = pagination;
        } else {
            this.pagination = {
                limit: 5,
                page: 1,
            }
        }
        if (sorting) {
            this.sorting = sorting;
        } else {
            this.sorting = {
                column: 'id',
                order: 'asc',
            }
        }
        if (searchValue) {
            this.searchValue = searchValue;
        } else {
            this.searchValue = '';
        }
    }
}