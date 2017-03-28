import { Component, OnInit } from '@angular/core';
import {Category, getCategories} from "../category";
import {Router} from "@angular/router";

@Component({
  selector: 'db-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
    this.categories = getCategories()
  }

  filterProducts(category: Category) {
    this.router.navigate(['/products'], {
      queryParams: { category: category.id}
    });
  }
}
