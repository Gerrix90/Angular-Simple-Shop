import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'db-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  productsRow: any;

  constructor(
    private productService: ProductService,
    private route:ActivatedRoute) {

    //subscribe route
    this.route.queryParams.subscribe(params => {
      let category: string = params['category'];
      let search: string = params['search'];
      // Return filtered data from getProducts function
      let products: Product[] =
        this.productService.getProducts(category, search);
      // Transform products to appropriate data to display
      this.productsRow = this.transformProducts(products);
    })
  }

  transformProducts(products:Product[]){
    let index = 0;
    let length = products.length;
    let productsRow = [];

    //split array 3in row
    while (length) {
      let row: Product[] = [];
      if (length >= 3) {
        for (let i = 0; i < 3; i++) {
          row.push(products[index++]);
        }
        productsRow.push(row);
        length -= 3;
      } else {
        for (; length > 0; length--) {
          row.push(products[index++]);
        }
        productsRow.push(row);
      }
    }
    return productsRow
  }

  ngOnInit() {
    // console.log(this.productsRow)
  }

}
