import { createSelector, createFeatureSelector } from '@ngrx/store';
import { OrderState } from "./order.store";
 
export const getOrderState = createFeatureSelector<OrderState>('order');

export const getBillingAddress = createSelector(
  getOrderState,
  (order) => order.billingAddress
);

export const getPaymentInfo = createSelector(
  getOrderState,
  (order) => order.paymentInfo
);