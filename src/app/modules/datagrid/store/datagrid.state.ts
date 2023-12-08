import { IDataGridDetailState } from "./interface/datagrid-detail-state";
import { IDataGridState } from "./interface/datagrid-state";

export module DATAGRID_STORE {
    export const DATAGRID_STATE: IDataGridState[] = [
        {
            id: '',
            wbRating: 0,
            reviewsCount: 0,
            nomenclature: 0,
            sku: '',
            name: '',
            brandName: '',
            brandId: '',
            image: '',
            preview: '',
            ordered: 0,
            soldQuantity: 0,
            soldAmount: 0,
            orderedAmount: 0,
            availability: 0
        }
    ];

    export const DATAGRID_DETAIL_INITIAL_STATE: IDataGridDetailState = {
        isLoading: false,
        pagination: {
            page: 1,
            limit: 5,
        },
        searchValue: '',
        sorting: {
            column: 'id',
            order: 'asc'
        },
        count: 1,
        isModified: false,
        data: DATAGRID_STATE,
        origin: DATAGRID_STATE,
    }
}