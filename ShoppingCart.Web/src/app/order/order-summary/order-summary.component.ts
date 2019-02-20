import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/store';
import { getCartProducts, getCartProductCount, getCartTotalPrice } from '../../cart/store/cart.selectors';
import { CartItem } from '../../cart/cart-item';
import { getPaymentInfo, getBillingAddress } from '../store/order.selectors';
import { PaymentInfo } from '../../shared/payment-info-form/PaymentInfo';
import { Address } from '../../shared/address/Address';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  paymentInfo: PaymentInfo;
  billingAddress: Address;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.pipe(
      select(getCartProducts)
    ).subscribe(
      (cartItems: CartItem[]) => this.cartItems = cartItems
    );

    this.store.pipe(
      select(getCartProductCount)
    ).subscribe(
      (count: number) => this.cartCount = count
    );

    this.store.pipe(
      select(getCartTotalPrice)
    ).subscribe(
      (total: number) => this.cartTotal = total
    );

    this.store.pipe(
      select(getPaymentInfo)
    ).subscribe(
      (paymentInfo: PaymentInfo) => this.paymentInfo = paymentInfo
    );

    this.store.pipe(
      select(getBillingAddress)
    ).subscribe(
      (address: Address) => this.billingAddress = address
    );
  }
}
