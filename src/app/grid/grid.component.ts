import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  public products;
  public selectedValue = 'All';
  constructor() {
    this.products = [
      {name: 'Samsung TV', price: 45991.88, category: 'Electronics'},
      {name: 'Mobile', price: 35991.88, category: 'Electronics'},
      {name: 'Nike Casuals', price: 1991.88, category: 'Shoes'},
      {name: 'Lee Cooper Boot', price: 5000.88, category: 'Shoes'}
    ];
  }
  public getAllCount() {
    return this.products.length;
  }
  public getElectsCount() {
    return this.products.filter(x => x.category === 'Electronics').length;
  }

  public getShoesCount() {
    return this.products.filter(x => x.category === 'Shoes').length;
  }

  public onCategoryChanged(valueFromCustomEvt) {
    this.selectedValue = valueFromCustomEvt;
  }
  ngOnInit() {
  }

}
