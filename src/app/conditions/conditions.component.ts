import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  public products = {};
  public category = 'All';
  constructor() {
    this.products = [
      {prodId: 1, prodName: 'SamsungTV', price: 45000.88, category: 'Electronics'},
      {prodId: 2, prodName: 'Mobile', price: 15000.88, category: 'Electronics'},
      {prodId: 3, prodName: 'Nike Casuals', price: 4000.88, category: 'Shoes'},
      {prodId: 4, prodName: 'Lee Cooper Boot', price: 12000.88, category: 'Shoes'},
      {prodId: 5, prodName: 'Watch', price: 4000.88, category: 'Fashion'}
    ];
  }

  ngOnInit() {
  }

}
