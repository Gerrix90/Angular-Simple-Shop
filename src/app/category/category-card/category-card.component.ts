import {Component, OnInit, Input} from '@angular/core';
import {Category} from "../category";

@Component({
  selector: 'db-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  @Input() category: Category;
  constructor() { }

  ngOnInit() {
  }

}
