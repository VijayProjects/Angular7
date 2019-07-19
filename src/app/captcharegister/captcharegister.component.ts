import { Component, OnInit } from '@angular/core';
import { CaptchaService } from '../captchaservice.service';

@Component({
  selector: 'app-captcharegister',
  templateUrl: './captcharegister.component.html',
  styleUrls: ['./captcharegister.component.css']
})
export class CaptcharegisterComponent implements OnInit {
  public verifyCode = '';
  constructor(private code: CaptchaService) { }

  ngOnInit() {
    this.verifyCode = this.code.getRandomNumber();
  }

  newCode() {
    this.verifyCode = this.code.getRandomNumber();
  }
}
