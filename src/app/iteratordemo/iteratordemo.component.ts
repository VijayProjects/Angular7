import { Component } from '@angular/core';

@Component({
  selector: 'app-iteratordemo',
  templateUrl: './iteratordemo.component.html',
  styleUrls: ['./iteratordemo.component.css']
})
export class IteratordemoComponent {
  /* public cities = ['Hyd', 'Delhi', 'Mumbai'];
  public Items = [
    {Category: 'Electronics', Products: ['Tv', 'Mobile']},
    {Category: 'Shoes', Products: ['Nike Casuals','Lee Cooper Boot']}
  ]; */

  public Products = [
    {productId: 1001, productName: 'Samsung TV', Price: 30043.99, Category: 'Electronics'},
    {productId: 1002, productName: 'Mobile', Price: 43000.88, Category: 'Electronics'},
    {productId: 1003, productName: 'Lee Cooper', Price: 2599.00, Category: 'Shoes'},
    {productId: 1004, productName: 'Nike Casuals', Price: 5000.00, Category: 'Shoes'},
  ];
/*
  // global declaration
  public newProduct;
  
  public addProduct() {
    this.newProduct = {productId: 1005, productName: 'Dell Laptop', Price: 55400.80, Category: 'Electronics'};
  
    this.Products.push(this.newProduct);
  }
*/
  public addProduct() {
    this.Products = [
      {productId: 1001, productName: 'Samsung TV', Price: 30043.99, Category: 'Electronics'},
      {productId: 1002, productName: 'Mobile', Price: 43000.88, Category: 'Electronics'},
      {productId: 1003, productName: 'Lee Cooper', Price: 2599.00, Category: 'Shoes'},
      {productId: 1004, productName: 'Nike Casuals', Price: 5000.00, Category: 'Shoes'},
      {productId: 1005, productName: 'Dell Laptop', Price: 55400.80, Category: 'Electronics'}
    ];
  }

  public trackByFn(index, product) {
    return product.productId; // or index;
  }
}
