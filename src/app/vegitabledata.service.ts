import { Injectable } from '@angular/core';

@Injectable()
export class VegitabledataService {
  public  vegitables = [
    {id: 1001, name: 'carrot', price: 400},
    {id: 1002, name: 'tomota', price: 200},
    {id: 1003, name: 'banana', price: 500},
    {id: 1004, name: 'potota', price: 400}
  ];
  public getVegitables() {
    return this.vegitables;
  }
  constructor() { }
}
