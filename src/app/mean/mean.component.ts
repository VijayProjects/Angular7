import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { PostdataService } from '../postdata.service';

@Component({
  selector: 'app-mean',
  templateUrl: './mean.component.html',
  styleUrls: ['./mean.component.css']
})
export class MeanComponent implements OnInit {
  public products = [];
  constructor(private getData: GetdataService, private postData: PostdataService) { }

  ngOnInit() {
    this.getData.getProducts().subscribe(data => this.products = data);
  }

  public submitProduct(data) {
    this.postData.AddProduct(data).subscribe(response => {
      alert(response);
    });
  }
}
