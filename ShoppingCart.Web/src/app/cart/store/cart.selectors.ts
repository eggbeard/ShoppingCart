import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from "./cart.store";
import { getProductEntities } from '../../products/entities/product-entity.selectors';
 
export const getCartState = createFeatureSelector<CartState>('cart');

export const getCartProducts = createSelector(
  getCartState,
  getProductEntities,
  (cartState, products) => {
    return Object.entries(cartState.products).map(([productId, count]) => {
      //console.log(`ProductId: ${productId} has a quantity of ${count}`);
      return {
        product: products[productId],
        quantity: count
      }
    });
  }
);

export const getCartProductCount = createSelector(
  getCartState,
  (cartState) =>  Object.entries(cartState.products)
      .map(([, count]) => count)
      .reduce((total, amount) => total + amount, 0)
)

export const getCartTotalPrice = createSelector(
  getCartProducts,
  (cart) => cart.map(cartItem => cartItem.product.price * cartItem.quantity)
                .reduce((total, amount) => total + amount, 0)
);