import { OrderActionType, OrderActions } from './order.actions';
import { OrderState } from './order.store';

export function reducer(state: OrderState, action: OrderActions): OrderState {
  switch (action.type) {

    case OrderActionType.SET_PAYMENT_INFO: {
      return {
        ...state,
        paymentInfo: action.paymentInfo
      };
    }

    case OrderActionType.SET_BILLING_ADDRESS: {
      return {
        ...state,
        billingAddress: action.address
      };
    }

    default: {
      return state;
    }
  }
}
