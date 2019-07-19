import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  public products = [];
  constructor(private data: ProductsdataService) { }

  ngOnInit() {
    this.products = this.data.getProductsDate();
  }

}
