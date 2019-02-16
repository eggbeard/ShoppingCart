import { Product } from '../../products/product';

//Cart Products is an object keyed by ProductId
//and a count of those products
export interface CartState {
  products: {
    [key: number]: number;
  };
};