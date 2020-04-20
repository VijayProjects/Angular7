import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customdirective',
  templateUrl: './customdirective.component.html',
  styleUrls: ['./customdirective.component.css']
})
export class CustomdirectiveComponent implements OnInit {

  public title = 'welcome to angular custom directives and pipes';
  constructor() { }

  ngOnInit() {
  }

}
