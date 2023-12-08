import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { HttpClientModule } from '@angular/common/http';
import { DataGridRoutingModule } from './datagrid.routes';
import { DataGridStoreModule } from './store/datagrid.store.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '../../UI/pagination/pagination.component';
import { UiModule } from '../../UI/ui.module';



@NgModule({
  declarations: [
    DatagridComponent
  ],
  imports: [
    CommonModule,
    DataGridRoutingModule,
    DataGridStoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: [
  ]
})
export class DatagridModule { }
