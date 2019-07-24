import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productsdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  public products = [];
  constructor(private router: Router, private data: ProductsdataService) { }

  ngOnInit() {
    this.products = this.data.getProductsDate();
  }
   public clickDetails(product) {
     this.router.navigate(['products', product.productId]);
   }

}
