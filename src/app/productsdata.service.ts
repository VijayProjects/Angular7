import { Injectable } from '@angular/core';

@Injectable()
export class ProductsdataService {

  constructor() { }
  // function for get list of products
  getProductsDate() {
    const products = [
      {productId: 1001, productName: 'Samsung Tv', price: 45000.77, photo: 'assets/tv.jpg'},
      {productId: 1002, productName: 'Nike Shoe', price: 2200.77, photo: 'assets/shoe.jpg'},
      {productId: 1003, productName: 'Mobile', price: 15000.77, photo: 'assets/mobile.jpg'},
      {productId: 1004, productName: 'Lee Cooper Boot', price: 3400.77, photo: 'assets/shoe1.jpg'}
    ];
    return products;
  }
}
