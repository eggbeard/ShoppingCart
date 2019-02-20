import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/store';
import { getCartProducts, getCartProductCount, getCartTotalPrice } from '../store/cart.selectors';
import { CartItem } from '../cart-item';
import { Product } from '../../products/product';
import { AddProductToCart, RemoveOneProductFromCart, SetProductQuantity } from '../store/cart.actions';

@Component({
  selector: 'app-cart-maintenance',
  templateUrl: './cart-maintenance.component.html',
  styleUrls: ['./cart-maintenance.component.scss']
})
export class CartMaintenanceComponent implements OnInit {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;

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
  }

  addOne(product: Product): void {
    this.store.dispatch(new AddProductToCart(product.id));
  }

  removeOne(product: Product): void {
    this.store.dispatch(new RemoveOneProductFromCart(product.id));
  }

  setProductQuantity(event: any, product: Product) {
    const quantity = Number(event.target.value);
    this.store.dispatch(new SetProductQuantity(product.id, quantity));
  }
}
