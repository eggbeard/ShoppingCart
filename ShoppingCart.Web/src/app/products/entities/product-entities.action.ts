import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductEntitiesActionType {
  ADD_MANY_PRODUCT_ENTITIES = 'ADD_MANY_PRODUCTS_ENTITIES'
}

export class AddManyProductEntities implements Action {
  readonly type = ProductEntitiesActionType.ADD_MANY_PRODUCT_ENTITIES;

  constructor(public products: Product[]) {}
}

export type ProductEntitiesActions = 
  AddManyProductEntities;
