import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentInfo } from './PaymentInfo';
import { CreditCardValidator } from 'angular-cc-library';

@Component({
  selector: 'app-payment-info-form',
  templateUrl: './payment-info-form.component.html',
  styleUrls: ['./payment-info-form.component.scss']
})

export class PaymentInfoFormComponent implements OnInit {
  @Output() changed: EventEmitter<PaymentInfo> = new EventEmitter<PaymentInfo>();
  paymentInfoForm: FormGroup;

  constructor() { }

  get cardNumber() { return this.paymentInfoForm.get('cardNumber'); }
  get expiration() { return this.paymentInfoForm.get('expiration'); }
  get cvv() { return this.paymentInfoForm.get('cvv'); }

  ngOnInit() {
    this.paymentInfoForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required, CreditCardValidator.validateCCNumber]),
      expiration: new FormControl('', [Validators.required, CreditCardValidator.validateExpDate]),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(4)])
    });
  }

  onSubmit() {
    const {cardNumber, expiration, cvv} = this.paymentInfoForm.value;
    const paymentInfo: PaymentInfo = {cardNumber, expiration, cvv};
    console.log(paymentInfo);
    this.changed.emit(paymentInfo);
  }

}
