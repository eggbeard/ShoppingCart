import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentInfoFormComponent } from './payment-info-form/payment-info-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreditCardDirectivesModule } from 'angular-cc-library';

@NgModule({
  declarations: [
    AddressComponent,
    PaymentInfoFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreditCardDirectivesModule
  ],
  exports: [
    AddressComponent,
    PaymentInfoFormComponent
  ]
})
export class SharedModule { }
