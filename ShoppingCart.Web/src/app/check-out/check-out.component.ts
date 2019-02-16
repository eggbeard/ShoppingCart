import { Component, OnInit } from '@angular/core';
import { PaymentInfo } from '../shared/payment-info-form/PaymentInfo';
import { Address } from '../shared/address/Address';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store';
import { SetPaymentInfo, SetBillingAddress } from '../order/store/order.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  
  paymentInfo: PaymentInfo;
  address: Address;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {

  }

  setPaymentInfo(paymentInfo: PaymentInfo){
    this.paymentInfo = paymentInfo;
    this.store.dispatch(new SetPaymentInfo(paymentInfo));
  }

  setAddress(address: Address){
    this.store.dispatch(new SetBillingAddress(address));
    this.router.navigate(['/','order-summary']);
  }
}
