/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {CartMenuComponent} from './cart-menu.component';

describe('CartMenuComponent', () => {
  let component: CartMenuComponent;
  let fixture: ComponentFixture<CartMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
