/**
 * Created by SergST on 28.03.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductViewComponent} from "./product/product-view/product-view.component";
import {CartViewComponent} from "./cart/cart-view/cart-view.component";

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  {path: 'products/:id', component: ProductViewComponent},
  {path: 'cart', component: CartViewComponent}
];

export const appRouting = RouterModule.forRoot(routes);