import { Product } from '../../products/product';
import { PaymentInfo } from '../../shared/payment-info-form/PaymentInfo';
import { Address } from '../../shared/address/Address';

export interface OrderState {
  paymentInfo: PaymentInfo,
  billingAddress: Address
};