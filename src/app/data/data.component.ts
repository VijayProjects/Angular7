import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  public products = [
    {productName: 'Samsung TV', price: 55000.56, category: 'Electronics'},
    {productName: 'Mobile', price: 13050.56, category: 'Electronics'},
    {productName: 'Nike Casuals', price: 4500.56, category: 'Shoes'},
    {productName: 'Lee Cooper Boot', price: 3600.56, category: 'Shoes'}
  ];

  public SelectedValue = 'All';
  public onCategoryChanged(selectedValue) {
    this.SelectedValue = selectedValue;
  }
}
