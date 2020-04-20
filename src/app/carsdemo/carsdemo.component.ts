import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carsdemo',
  templateUrl: './carsdemo.component.html',
  styleUrls: ['./carsdemo.component.css']
})
export class CarsdemoComponent implements OnInit {
  public cars = [];
  constructor() {
    this.cars = [
      {carName: 'Audi-Q7', photo: 'assets/audi.jpg', likes: 0, dislikes: 0},
      {carName: 'Benz', photo: 'assets/benz.jpg', likes: 0, dislikes: 0}
    ];
  }
  public carLikes(car) {
    car.likes++;
  }
  public carDisLikes(car) {
    car.dislikes++;
  }
  ngOnInit() {
  }

}
