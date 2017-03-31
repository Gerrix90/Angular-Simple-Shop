import {Component, OnInit} from '@angular/core';
import {Product} from "../product.service";

@Component({
  selector: 'db-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: Product;
  constructor() {
  }

  ngOnInit() {
  }

}
