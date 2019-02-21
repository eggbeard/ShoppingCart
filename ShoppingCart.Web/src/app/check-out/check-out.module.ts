import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from './check-out.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CheckOutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CheckOutModule { }
