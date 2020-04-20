import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changeevent',
  templateUrl: './changeevent.component.html',
  styleUrls: ['./changeevent.component.css']
})
export class ChangeeventComponent implements OnInit {
  public products = [];
  public productList = [];
  public catergoryList = ['Electronics', 'Shoes', 'Cars'];
  public lstCategory = '';
  public lstProduct = '';
  constructor() {
    this.products = [
      {name: 'Samsung TV', price: 45600.99, category: 'Electronics', photo: 'assets/tv.jpg'},
      {name: 'Mobile', price: 22600.99, category: 'Electronics', photo: 'assets/tv.jpg'},
      {name: 'Audi', price: 2238600.99, category: 'Cars', photo: 'assets/audi.jpg'},
      {name: 'Nike Casuals', price: 2600.99, category: 'Shoes', photo: 'assets/shoe.jpg'},
      {name: 'Lee Cooper', price: 3600.99, category: 'Shoes', photo: 'assets/shoe1.jpg'}
    ];
  }
  public getProducts(category) {
    this.products.forEach((key) => {
      if (key.category === category) {
        this.productList.push(key.name);
      }
    });
  }
  // change category
  public changeCategory() {
    this.productList = [];
    switch (this.lstCategory) {
      case 'Electronics' :
        this.getProducts(this.lstCategory);
        break;
      case 'Shoes' :
        this.getProducts(this.lstCategory);
        break;
      case 'Cars' :
        this.getProducts(this.lstCategory);
        break;
    }

  }
  ngOnInit() {
  }

}
