import { Component, OnInit } from '@angular/core';
import {Category, getCategories} from "../category";

@Component({
  selector: 'db-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor() { }

  ngOnInit() {
    this.categories = getCategories()
  }




}
