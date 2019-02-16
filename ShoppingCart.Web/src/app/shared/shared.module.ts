import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentInfoFormComponent } from './payment-info-form/payment-info-form.component';

@NgModule({
  declarations: [
    AddressComponent,
    PaymentInfoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddressComponent,
    PaymentInfoFormComponent
  ]
})
export class SharedModule { }
