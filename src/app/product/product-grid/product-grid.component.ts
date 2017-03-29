import { Component, OnInit } from '@angular/core';
import {getProducts, Product} from "../product";

@Component({
  selector: 'db-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  productsRow: any;

  constructor() {
    let index = 0;
    let products: Product[] = getProducts();
    let length = products.length;

    this.productsRow = [];

    //split array 3in row
    while (length) {
      let row: Product[] = [];
      if (length >= 3) {
        for (let i = 0; i < 3; i++) {
          row.push(products[index++]);
        }
        this.productsRow.push(row);
        length -= 3;
      } else {
        for (; length > 0; length--) {
          row.push(products[index++]);
        }
        this.productsRow.push(row);
      }
    }
  }

  ngOnInit() {
    console.log(this.productsRow)
  }

}
