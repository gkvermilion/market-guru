import { dataGridReducer } from "../datagrid.reducer";
import { IDataGridStore } from "./datagrid.feature.store";
import { ActionReducerMap } from "@ngrx/store";
import { createFeatureSelector } from "@ngrx/store";
import { createSelector } from "@ngrx/store";

export module StoreDataGridFeatureModule {
    export const model: ActionReducerMap<IDataGridStore> = {
        dataGridDetailStore: dataGridReducer,
    };
}

export const selectState = createFeatureSelector<IDataGridStore>('dataGridModule');

export const selectDataGridState = createSelector(
    selectState, (state: IDataGridStore) => state.dataGridDetailStore
)