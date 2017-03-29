import { Component, OnInit } from '@angular/core';
import {getProducts, Product} from "../product";

@Component({
  selector: 'db-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  products: Product[] = getProducts();

  constructor() { }

  ngOnInit() {
  }

}
