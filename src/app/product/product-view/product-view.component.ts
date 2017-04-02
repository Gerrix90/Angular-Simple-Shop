import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {CartService, CartItem} from "../../cart/cart.service";

@Component({
  selector: 'db-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: Product;
  cartItem: CartItem;

  get quantity(): number {
    return this.cartItem ? this.cartItem.count : 0
  }

  get amount(): number {
    return this.cartItem ? this.cartItem.amount : 0
  }

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // get the product id
      let id: string = params['id'];
      // Return the product from ProductService
      this.product = this.productService.getProduct(id);
      // Return the cartItem from cartService
      this.cartItem = this.cartService.findItem(id)
    })
  }

}
