import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    PaginationComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    ButtonComponent
  ]
})
export class UiModule { }
