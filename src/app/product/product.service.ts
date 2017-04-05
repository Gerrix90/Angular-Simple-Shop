/**
 * Created by SergST on 28.03.2017.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';



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
  productUrl = 'app/products';

  constructor(private http: Http) {
  }

  getProducts(category?: string, search?: string): Promise<Product[]> {
    let url = this.productUrl;

    if (category) {
      url += `/?categoryId=${category}`;
    } else if (search) {
      url += `/?title=${search}`;
    }
    return this.http
      .get(url)
      .toPromise()
      .then((response: Response) => response.json().data as Product[])
      .catch(this.handleError);
  }

  getProduct(id: string): Promise<Product> {
    let url = this.productUrl + `/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then((response: Response) => response.json().data as Product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    window.alert(`An error occurred: ${error}`);
    return Promise.reject(error.message || error);
  }
}

