import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDataGridFeatureModule } from "./root/datagrid.feature.store.module";
import { DataGridEffects } from "./datagrid.effects";

@NgModule({
  imports: [
    StoreModule.forFeature('dataGridModule', StoreDataGridFeatureModule.model),
    EffectsModule.forFeature([DataGridEffects]),
  ]
})
export class DataGridStoreModule {}