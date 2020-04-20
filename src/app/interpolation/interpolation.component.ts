import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  bindName: string;
  isDisabled: boolean;
  constructor() { }

  ngOnInit() {
    this.bindName = 'String Interpolation';
    this.isDisabled = false;
  }

}
