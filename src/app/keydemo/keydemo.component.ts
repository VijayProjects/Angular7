import { Component, OnInit } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-keydemo',
  templateUrl: './keydemo.component.html',
  styleUrls: ['./keydemo.component.css']
})
export class KeydemoComponent implements OnInit {
  public uname = '';
  public userErrMsg = '';
  public userStyleObj = {};
  public userList = [
    {userName: 'john'},
    {userName: 'john_12'},
    {userName: 'john_ng'},
    {userName: 'david'}
  ];
  public userPwd = '';
  public pwdErrMsg = '';
  public regExp = /(?=.*[A-Z]\w{4,10})/;
  public pwdStyleObj = {};
  public capsOnMsg = '';
  public min = '';
  public max = '';
  public value = '';
  public low = '';
  public high = '';
  constructor() { }

  ngOnInit() {
  }
  public verifyUser() {
    for (const txtUser of this.userList) {
      if (this.uname === txtUser.userName) {
        this.userErrMsg = 'User has taken Please Try Another';
        this.userStyleObj = {
          color: 'red'
        };
        break;
      } else {
        this.userErrMsg = 'Available';
        this.userStyleObj = {
          color: 'green'
        };
      }
    }
  } // verifyUser
  public verifyPassword() {
    if (this.userPwd.match(this.regExp)) {
      this.pwdErrMsg = 'Strong Password';
      this.grade(1, 100, 100, 0, 0);
      this.pwdStyleObj = {
        color: 'green'
      };
    } else {
        if (this.userPwd.length < 4) {
          this.pwdErrMsg = 'Poor Password';
          this.grade(1, 100, 100, 60, 80);
          this.pwdStyleObj = {
            color: 'red'
          };
        } else {
          this.pwdErrMsg = 'Warning Password';
          this.grade(1, 100, 100, 40, 80);
          this.pwdStyleObj = {
            color: 'yellow'
          };
        }
    }
  } // verifyPassword
  public grade(min, max, value, low, high) {
    this.min = min;
    this.max = max;
    this.value = value;
    this.low = low;
    this.high = high;
  }
  public checksCapOn(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      this.capsOnMsg = 'Warning Caps On..!';
    } else {
      this.capsOnMsg = '';
    }
  }
}
