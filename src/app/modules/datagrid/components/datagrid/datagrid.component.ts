import { Component, OnInit } from '@angular/core';
import { DataGridFacade } from '../../datagrid.facade';
import { ISorting } from '../../../../infrastructure/interface/sorting.interface';
import { IPagination } from '../../../../infrastructure/interface/pagination.interface';
import { IData } from '../../interface/datagrid.interface';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss',
  providers: [DataGridFacade]
})
export class DatagridComponent implements OnInit {

  columns: Array<keyof IData> = [
    'id',
    'wbRating',
    'reviewsCount',
    'nomenclature',
    'sku',
    'name',
    'brandName',
    'brandId',
    'image',
    'preview',
    'ordered',
    'soldQuantity',
    'soldAmount',
    'orderedAmount',
    'availability'
  ];
  sorting: ISorting = { column: 'id', order: 'asc' };
  searchValue: string = '';
  pagination: IPagination = { page: 1, limit: 5 };
  searchForm = this._fb.nonNullable.group({
    searchValue: '',
  });

  constructor(
    public facade: DataGridFacade,
    private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    console.log(this.sorting, this.searchValue, this.pagination)
    this.facade.load(this.searchValue, this.sorting, this.pagination);
  }

  set page(page: number) {
    this.pagination.page = page;
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  isDescSorting(column: string): boolean {
    return this.sorting.column === column && this.sorting.order === 'desc';
  }

  isAscSorting(column: string): boolean {
    return this.sorting.column === column && this.sorting.order === 'asc';
  }

  sortTable(column: string): void {
    const futureSortingOrder = this.isDescSorting(column) ? 'asc' : 'desc';
    this.sorting = {
      column,
      order: futureSortingOrder,
    };
    this.fetchData();
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }

  changePage(page: number): void {
    // this.page(page);
    const pagination = { ...this.pagination };
    pagination.page = page;
    this.pagination = pagination; 
    // this.pagination.limit = 5;
    this.fetchData();
    // this.facade.changePage({limit: 5, page: page}, this.sorting, this.searchValue);
  }
}
