import { Action } from '@ngrx/store';
import { PaymentInfo } from '../../shared/payment-info-form/PaymentInfo';
import { Address } from '../../shared/address/Address';

export enum OrderActionType {
  SET_PAYMENT_INFO = 'SET_PAYMENT_INFO',
  SET_BILLING_ADDRESS = 'SET_BILLING_ADDRESS'
}

export class SetPaymentInfo implements Action {
  readonly type = OrderActionType.SET_PAYMENT_INFO;

  constructor(public paymentInfo: PaymentInfo) { }
}

export class SetBillingAddress implements Action {
  readonly type = OrderActionType.SET_BILLING_ADDRESS;

  constructor(public address: Address) { }
}

export type OrderActions =
  SetPaymentInfo |
  SetBillingAddress;
