import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'db-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  searchProduct(search: string){
    this.router.navigate(['products'],{queryParams: {search: search}})
  }
}
