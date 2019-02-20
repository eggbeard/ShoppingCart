import { Action } from '@ngrx/store';

export enum ProductActionType {
  LOAD_PRODUCTS = 'LOAD_PRODUCTS'
}

export class LoadProducts implements Action {
  readonly type = ProductActionType.LOAD_PRODUCTS;

  constructor() { }
}

export type ProductActions =
  LoadProducts;
