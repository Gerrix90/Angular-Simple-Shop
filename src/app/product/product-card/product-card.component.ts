import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'db-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() productRow: Product[];

  constructor() { }

  ngOnInit() {
  }

  setClasses(product: Product) {
    return {
      'card-danger': product.isSpecial,
      'card-inverse': product.isSpecial
    };
  }

  buy(product: Product) {
    console.log('We bought', product.title);
  }

}
