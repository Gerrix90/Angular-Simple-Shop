/**
 * Created by SergST on 28.03.2017.
 */


import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CategoryCardComponent} from "./category-card/category-card.component";
import {CategorySliderComponent} from "./category-slider/category-slider.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryService} from "./category";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CategoryCardComponent,
    CategorySliderComponent,
    CategoryListComponent
  ],
  exports: [
    CategoryCardComponent,
    CategorySliderComponent,
    CategoryListComponent
  ],
  providers: [CategoryService]
})
export class CategoryModule{}