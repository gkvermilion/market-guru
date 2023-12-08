import { DataGridActionTypes } from "./datagrid.action";
import { DATAGRID_STORE } from "./datagrid.state";
import { IDataGridDetailState } from "./interface/datagrid-detail-state";
import { mapPayloadToState } from "../../../infrastructure/common/mapping";

export function dataGridReducer(state: IDataGridDetailState = DATAGRID_STORE.DATAGRID_DETAIL_INITIAL_STATE, action: any): IDataGridDetailState {

    const result = { ...state };

    switch (action.type) {
        case DataGridActionTypes.LoadDataGrid:
            result.isLoading = true;
            result.isModified = true;
            return result;

        case DataGridActionTypes.LoadDataGridSuccess:
            result.isLoading = false;
            result.data = mapPayloadToState(action.data);
            result.count = action.count;
            return result;

        case DataGridActionTypes.LoadDataGridFail:
            result.isLoading = false;
            return result;

        case DataGridActionTypes.ChangePageRequest:
            result.pagination = action.pagination;
            result.sorting = action.sorting;
            result.searchValue = action.searchValue;
            return result;

        default:
            return state;
    }
}