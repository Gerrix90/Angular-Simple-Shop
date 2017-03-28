import { Component, OnInit } from '@angular/core';
import {Category, getCategories} from "../category/category";

@Component({
  selector: 'db-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  categories: Category[] = [];

  constructor() { }

  ngOnInit() {
    this.categories = getCategories()
  }

}
