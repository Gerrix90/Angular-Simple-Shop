/**
 * Created by SergST on 31.03.2017.
 */

import {NgModule} from "@angular/core";
import {CartService} from "./cart.service";
import {CartMenuComponent} from "./cart-menu/cart-menu.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CartViewComponent} from './cart-view/cart-view.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CartMenuComponent,
    CartViewComponent
  ],
  exports: [
    CartMenuComponent
  ],
  providers: [CartService]
})
export class CartModule {
}