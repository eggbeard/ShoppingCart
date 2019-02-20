import { Action } from '@ngrx/store';

export enum CartActionType {
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
  SET_PRODUCT_QUANTITY = 'SET_PRODUCT_QUANTITY',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
}

export class AddProductToCart implements Action {
  readonly type = CartActionType.ADD_PRODUCT_TO_CART;

  constructor(public productId: number) { }
}

export class SetProductQuantity implements Action {
  readonly type = CartActionType.SET_PRODUCT_QUANTITY;

  constructor(public productId: number, public quantity: number) { }
}

export class RemoveOneProductFromCart implements Action {
  readonly type = CartActionType.REMOVE_PRODUCT_FROM_CART;

  constructor(public productId: number) { }
}

export type CartActions =
  AddProductToCart |
  SetProductQuantity |
  RemoveOneProductFromCart;
