import { Component, OnInit } from '@angular/core';
import {Category, CategoryService} from "../category/category.service";

@Component({
  selector: 'db-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  categories: Category[] = [];

  constructor( private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories()
  }
}
