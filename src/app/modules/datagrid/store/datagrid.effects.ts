import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { DatagridService } from "../service/datagrid.service";
import { concatMap } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { ChangePageRequestAction, DataGridActionTypes } from "./datagrid.action";
import { createEffect } from "@ngrx/effects";
import { LoadDataGridSuccessAction, LoadDataGridFailAction } from "./datagrid.action";
import { ISorting } from "../../../infrastructure/interface/sorting.interface";
import { IPagination } from "../../../infrastructure/interface/pagination.interface";
import { Store } from "@ngrx/store";

@Injectable({
    providedIn: 'root',
})
export class DataGridEffects {

    constructor(
        private $actions: Actions,
        private _store: Store<any>,
        private _dataGridService: DatagridService,
    ) { }

    load$ = createEffect(() => this.$actions.pipe(
        ofType(DataGridActionTypes.LoadDataGrid),
        concatMap((action: { searchValue: string, sorting: ISorting, pagination: IPagination }) => {
            return this._dataGridService.getDataGrid(action.sorting, action.pagination, action.searchValue)
                .pipe(
                    mergeMap(response => {
                        if (response) {
                            this._store.dispatch(new ChangePageRequestAction(action.pagination, action.sorting, action.searchValue))
                            return of(new LoadDataGridSuccessAction(response.body, Number(response.headers.get("X-Total-Count"))));
                        } else {
                            return of(new LoadDataGridFailAction());
                        }
                    })
                )
        }
        )
    ))
}