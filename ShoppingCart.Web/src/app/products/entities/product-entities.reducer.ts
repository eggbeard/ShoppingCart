import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import { ProductEntitiesActions, ProductEntitiesActionType } from './product-entities.action';
import { Product } from '../product';

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({ selectId: product => product.id });
export const initialState = adapter.getInitialState();

export function reducer(state: EntityState<Product>, action: ProductEntitiesActions) {
  switch (action.type) {

    case ProductEntitiesActionType.ADD_MANY_PRODUCT_ENTITIES: {
      return adapter.upsertMany(action.products, state);
    }

    default: {
      return state;
    }
  }
}
