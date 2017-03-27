import {Component, OnInit} from '@angular/core';
import {Category, getCategories} from "./category/category";

@Component({
  selector: 'db-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'db works!';
  categories: Category[] = [];

  constructor() { }

  ngOnInit() {
    this.categories = getCategories()
  }

}
