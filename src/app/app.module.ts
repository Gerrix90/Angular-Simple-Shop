import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CategoryModule} from "./category/category.module";
import {appRouting} from "./app.routing";
import {ProductModule} from "./product/product.module";
import {CartModule} from "./cart/cart.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {InMemoryDataService} from "./shared/in-memory-data.service";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CategoryModule,
    appRouting,
    ProductModule,
    CartModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 500})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
