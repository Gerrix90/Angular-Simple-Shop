import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Category} from "../category";

@Component({
  selector: 'db-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  @Input() category: Category;
  @Output() selected: EventEmitter<Category> = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.selected.emit(this.category)
  }

}
