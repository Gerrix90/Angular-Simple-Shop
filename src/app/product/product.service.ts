/**
 * Created by SergST on 28.03.2017.
 */

import {Injectable} from "@angular/core";


export class Product {
  // Unique Id
  id: string;
  // Ref on category belongs to
  categoryId: string;
  // The title
  title: string;
  // Price
  price: number;
  // MArk product with specialproce
  isSpecial: boolean;
  // Description
  desc: string;
  // Path to small image
  imageS: string;
  // Path to large image
  imageL: string;
}

Injectable()
export class ProductService {

  getProducts(category?: string, search?: string) {
    if (category) {
      return this.products.filter((product: Product, index: number, array: Product[]) => {
        return product.categoryId === category;
      });
    } else if (search) {
      let lowSearch = search.toLowerCase();
      return this.products.filter(
        (product: Product, index: number, array: Product[]) => {
          return product.title.toLowerCase().indexOf(lowSearch) != -1;
        });
    } else {
      return this.products
    }
  }

  getProduct(id: string): Product {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i];
      }
    }
    throw new ProductNotFoundException(`Product ${id} not found`);
  }
}

export class ProductNotFoundException extends Error {
  constructor(message?: string) {
    super(message);
  }
}