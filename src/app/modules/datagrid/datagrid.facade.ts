import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { IPagination } from "../../infrastructure/interface/pagination.interface";
import { ISorting } from "../../infrastructure/interface/sorting.interface";
import { ChangePageRequestAction, LoadDataGridAction } from "./store/datagrid.action";
import { Observable, Subscription } from "rxjs";
import { OnDestroy } from "@angular/core";
import { select } from "@ngrx/store";
import { map } from "rxjs/operators";
import { selectDataGridState } from "./store/root/datagrid.feature.store.module";
import { of } from "rxjs";


@Injectable()
export class DataGridFacade implements OnDestroy {

    loadDataSubscription$ = new Subscription();
    state$: Observable<any> = new Observable<any>();
    data$: Observable<any> = new Observable<any>();
    pages$: Observable<any> = new Observable<any>();;

    constructor(private _store: Store<any>) {
        this.state$ = this._store.pipe(
            select(selectDataGridState),
            map(state => {
                this.data$ = of(state.data);
                this.pages$ = of({
                    count: state.count,
                    pagination: state.pagination,
                    searchValue: state.searchValue,
                    sorting: state.sorting
                });
                return state
            })
        )
        this.loadDataSubscription$ = this.state$.subscribe();
    }

    load(searchValue: string, sorting: ISorting, pagination: IPagination) {
        this._store.dispatch(new LoadDataGridAction(searchValue, sorting, pagination));
    }

    changePage(pagination: IPagination, sorting: ISorting, searchValue: string) {
        this.state$.pipe(
            map(state => {
                console.log('dispatch');
                this._store.dispatch(new ChangePageRequestAction(pagination, sorting, searchValue))
                this.load(state.searchValue, state.sorting, pagination);
            })
        )
    }

    ngOnDestroy(): void {
        if (this.loadDataSubscription$) {
            this.loadDataSubscription$.unsubscribe();
        }
    }

}