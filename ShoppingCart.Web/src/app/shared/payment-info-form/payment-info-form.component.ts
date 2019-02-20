import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentInfo } from './PaymentInfo';

@Component({
  selector: 'app-payment-info-form',
  templateUrl: './payment-info-form.component.html',
  styleUrls: ['./payment-info-form.component.scss']
})

/* We could add a lot more here in terms of Credit card format validation
  CCV validation.  Output formatting etc.
*/

export class PaymentInfoFormComponent implements OnInit {
  @Output() changed: EventEmitter<PaymentInfo> = new EventEmitter<PaymentInfo>();
  paymentInfoForm: FormGroup;

  constructor() { }

  get cardNumber() { return this.paymentInfoForm.get('cardNumber'); }
  get year() { return this.paymentInfoForm.get('year'); }
  get month() { return this.paymentInfoForm.get('month'); }
  get ccv() { return this.paymentInfoForm.get('ccv'); }

  ngOnInit() {
    this.paymentInfoForm = new FormGroup({
      cardNumber: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required),
      ccv: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const {cardNumber, year, month, ccv} = this.paymentInfoForm.value;
    const paymentInfo: PaymentInfo = {cardNumber, year, month, ccv};
    this.changed.emit(paymentInfo);
  }

}
