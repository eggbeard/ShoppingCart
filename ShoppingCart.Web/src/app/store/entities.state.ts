import { EntityState } from '@ngrx/entity';
import { combineReducers, createFeatureSelector } from '@ngrx/store';
import { Product } from '../products/product';

import * as productEntities from '../products/entities/product-entities.reducer';

export interface EntititesState {
  products: EntityState<Product>;
}

export const entitiesInitialState = {
  products: productEntities.initialState,
};

export const reducers = combineReducers({
  products: productEntities.reducer
});

export function entitiesReducers(state, action) {
  return reducers(state, action);
}

export const getEntitiesState = createFeatureSelector<EntititesState>('entities');
