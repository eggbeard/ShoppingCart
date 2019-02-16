import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartMaintenanceComponent } from './cart-maintenance/cart-maintenance.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartMaintenanceComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CartModule { }
