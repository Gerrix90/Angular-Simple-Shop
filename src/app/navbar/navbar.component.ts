import { Component, OnInit } from '@angular/core';

export interface NavItem {
  // Navigation link
  href: string;
  // Navigation Label
  label: string;
  // Status of Navigation Item
  active: boolean;
}

@Component({
  selector: 'db-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // App name
  appName: string = 'Dream Bean';

  // Navgation items
  navItems: NavItem[] = [
    {href: 'welcome', label: 'Home', active: true},
    {href: 'products', label: 'Products', active: false},
    {href: 'checkout', label: 'Checkout', active: false},
    {href: '#', label: 'Sign out', active: false}
  ];


}
