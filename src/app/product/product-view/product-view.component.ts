import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'db-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // get the product id
      let id: string = params['id'];
      // Return the product from ProductService
      this.product = this.productService.getProduct(id)
    })
  }

}
