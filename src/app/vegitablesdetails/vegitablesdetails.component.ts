import { Component, OnInit } from '@angular/core';
import { VegitabledataService } from '../vegitabledata.service';

@Component({
  selector: 'app-vegitablesdetails',
  templateUrl: './vegitablesdetails.component.html',
  styleUrls: ['./vegitablesdetails.component.css']
})
export class VegitablesdetailsComponent implements OnInit {

  public vegitables = [];
  constructor(private data: VegitabledataService) { }

  ngOnInit() {
    this.vegitables = this.data.getVegitables();
  }

}
