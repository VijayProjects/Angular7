import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  isDisabled: boolean;
  constructor() { }

  ngOnInit() {
    this.isDisabled = true;
  }

}
