/**
 * Created by SergST on 28.03.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ProductListComponent} from "./product/product-list/product-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
];

export const appRouting = RouterModule.forRoot(routes);