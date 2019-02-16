import { CartActionType, CartActions } from "./cart.actions";
import { CartState } from "./cart.store";

export function reducer(state: CartState, action: CartActions): CartState {
  switch (action.type) {

    case CartActionType.ADD_PRODUCT_TO_CART: {
      let quantity = state.products[action.productId] ? state.products[action.productId] : 0;
      quantity++;

      return {
        ...state,
        products: {
          ...state.products,
          [action.productId]: quantity
        }
      };
    }

    case CartActionType.REMOVE_PRODUCT_FROM_CART: {
      let quantity = state.products[action.productId] ? state.products[action.productId] : 0;
      quantity--;

      if (quantity < 0)
        quantity = 0;

      return {
        ...state,
        products: {
          ...state.products,
          [action.productId]: quantity
        }
      };
    }

    case CartActionType.SET_PRODUCT_QUANTITY: {
      return {
        ...state,
        products: {
          ...state.products,
          [action.productId]: action.quantity
        }
      };
    }

    default: {
      return state;
    }
  }
}