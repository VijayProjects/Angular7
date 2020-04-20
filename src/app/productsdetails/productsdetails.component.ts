import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent implements OnInit {
  public products = [];
  public prodId: string;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private data: ProductsdataService) { }

  ngOnInit() {
    this.products = this.data.getProductsDate();
    this.prodId = this.activeRoute.snapshot.paramMap.get('id');
  }

  public clickPreview() {
    this.router.navigate(['preview', this.prodId], {relativeTo: this.activeRoute});
  }
}
