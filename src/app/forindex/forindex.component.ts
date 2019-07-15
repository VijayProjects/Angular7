import { Component } from '@angular/core';

@Component({
  selector: 'app-forindex',
  templateUrl: './forindex.component.html',
  styleUrls: ['./forindex.component.css']
})

export class ForindexComponent {
  public Products = [
    {productId: 1, productName: 'Samsung TV', price: 53500.55},
    {productId: 2, productName: 'Mobile', price: 13500.55}
  ];

  public prodId = this.Products.length + 1;
  public prodName;
  public prodPrice;
  public newProduct;

  public addProduct() {
    this.newProduct = {
      productId: this.prodId,
      productName: this.prodName,
      price: this.prodPrice
    };
    // push new product to products array
    this.Products.push(this.newProduct);
    alert('Record is inserted');
    // keep form as empty after adding
    this.prodName = '';
    this.prodPrice = '';
    this.prodId = this.Products.length + 1;
  }
  public deleteProduct(index) {
    let del = confirm('Are you sure to delete?');
    if (del === true) {
      this.Products.splice(index, 1);
    }
  }
}







