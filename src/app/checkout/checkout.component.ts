import {Component, OnInit} from '@angular/core';
import {Cart, CartService} from "../cart/cart.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'db-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Cart;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private cartService: CartService) {
    this.cart = this.cartService.cart
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: []
    })
  }

}
