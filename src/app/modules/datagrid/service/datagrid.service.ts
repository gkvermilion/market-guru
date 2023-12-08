import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IData } from '../interface/datagrid.interface';
import { ISorting } from '../../../infrastructure/interface/sorting.interface';
import { IPagination } from '../../../infrastructure/interface/pagination.interface';
import { map } from 'rxjs/operators';

export interface IDataResponse {
  data: IData[];
  headers: any;
}

@Injectable({
  providedIn: 'root'
})
export class DatagridService {

  constructor(private _http: HttpClient) { }

  getDataGrid(sorting: ISorting, pagination: IPagination, searchValue: string): Observable<HttpResponse<IData[]>> {
    return this._http.get<IData[]>('http://localhost:3000/data', {
      params: {
        "_sort": sorting.column || '',
        "_order": sorting.order || 'asc',
        "_page": pagination.page || 1,
        "_limit": pagination.limit || 5,
        "q": searchValue || ''
      },
      observe: 'response'
    })
  }
}
