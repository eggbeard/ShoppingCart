import { EntititesState, entitiesInitialState } from './entities.state';
import { CartState } from '../cart/store/cart.store';
import { OrderState } from '../order/store/order.store';

export interface AppState {
  entities: EntititesState;
  cart: CartState;
  order: OrderState;
}

export const INITIAL_STATE: AppState = {
  entities: entitiesInitialState,
  cart: {
    products: []
  },
  order: {
    billingAddress: null,
    paymentInfo: null
  }
};

export function getInitialState() {
  return INITIAL_STATE;
}
