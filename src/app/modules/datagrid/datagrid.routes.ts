import { RouterModule, Routes } from "@angular/router";
import { DatagridComponent } from "./components/datagrid/datagrid.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {
        path: '',
        component: DatagridComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DataGridRoutingModule { }