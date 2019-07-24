import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productsdata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  public products = [];
  public prodId;
  constructor(private activeRouter: ActivatedRoute, private data: ProductsdataService) { }

  ngOnInit() {
    this.products = this.data.getProductsDate();
    this.prodId = this.activeRouter.snapshot.paramMap.get('id');
  }

}
