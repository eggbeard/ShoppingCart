import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './store';

import * as entities from './entities.state';
import * as cart from '../cart/store/cart.reducer';
import * as order from '../order/store/order.reducer';

export const reducers: ActionReducerMap<AppState> = {
  entities: entities.entitiesReducers,
  cart: cart.reducer,
  order: order.reducer
};