import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-matformfield',
  templateUrl: './matformfield.component.html',
  styleUrls: ['./matformfield.component.css']
})
export class MatformfieldComponent implements OnInit {
  public cities: string[] = ['Hyderabad', 'Delhi', 'Mumbai'];
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

}
