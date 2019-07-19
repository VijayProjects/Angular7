import { Injectable } from '@angular/core';

@Injectable()
export class CaptchaService {
  constructor() {}

  getRandomNumber() {
    let a = Math.random() * 10;
    let b = Math.random() * 10;
    let c = Math.random() * 10;
    let d = Math.random() * 10;
    let e = Math.random() * 10;
    let f = Math.random() * 10;
    return Math.round(a) + ' ' + Math.round(b) + ' ' + Math.round(c) + ' ' +
    Math.round(d) + ' ' + Math.round(d) + ' ' + Math.round(f);
  } 
}