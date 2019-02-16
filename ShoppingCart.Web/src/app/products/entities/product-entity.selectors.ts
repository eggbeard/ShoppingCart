import { createSelector } from '@ngrx/store';
import { adapter } from './product-entities.reducer';
import { getEntitiesState } from '../../store/entities.state';
import { Product } from '../product';
import { Dictionary } from '@ngrx/entity';

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const getProductEntitiesState = createSelector(
  getEntitiesState,
  entities => entities.products
);

export const getProductEntities = createSelector(
  getProductEntitiesState,
  selectEntities
);

export const getAllProducts = createSelector(
  getProductEntitiesState,
  selectAll
);

export const getProduct = createSelector(
  getProductEntities,
  (entities: Dictionary<Product>, props: { id: number }) => entities[props.id]
);