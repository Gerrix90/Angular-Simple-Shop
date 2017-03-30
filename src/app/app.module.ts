import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CategoryModule} from "./category/category.module";
import {appRouting} from "./app.routing";
import {ProductModule} from "./product/product.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import {CartMenuComponent} from './cart/cart-menu/cart-menu.component';
import {CartService} from "./cart/cart.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    CartMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CategoryModule,
    appRouting,
    ProductModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
