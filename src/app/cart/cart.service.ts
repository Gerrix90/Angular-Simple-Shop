/**
 * Created by SergST on 30.03.2017.
 */

import {Product} from "../product/product.service";


export interface CartItem {
  product: Product;
  count: number;
  amount: number;
}

export class Cart {
  count: number = 0;
  amount: number = 0;
  items: CartItem[] = [];
}