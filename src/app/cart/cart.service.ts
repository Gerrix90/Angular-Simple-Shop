/**
 * Created by SergST on 30.03.2017.
 */

import {Product} from "../product/product.service";
import {Injectable} from "@angular/core";


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

@Injectable()
export class CartService {
  cart: Cart = new Cart();

  /**
   * This method adds the new product or increases the number
   * of the same products in the cart.
   * It updates the amount and count of items in the cart.
   */
  addProduct(product: Product) {
    // Find CartItem in items
    let item: CartItem = this.findItem();
    // Check was it found?
    if(item){
        // Item was found.
        // Increase the count of the same products
        item.count++;
        // Increase amount of the same products
        item.amount += product.price;
    } else {
        // Item was not found.
        // Create the cart item
        item = {
          product: product,
          count: 1,
          amount: product.price
        };
        // Add item to items
        this.cart.items.push(item);
    }
    // Increase count in the cart
    this.cart.count++;
    // Increase amount in the cart
    this.cart.amount += product.price;
  }

  /**
   * This method returns cart item by product id or null.
   */
  private findItem(id: string): CartItem {
    for (let i = 0; i < this.cart.items.length; i++) {
      if (this.cart.items[i].product.id === id) {
        return this.cart.items[i];
      }
    }
    return null;
  }



}