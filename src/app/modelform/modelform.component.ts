import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit {
  public frmRegister;
  public userName;
  public userEmail;
  constructor() { }

  ngOnInit() {
    this.frmRegister = new FormGroup({
      userName: new FormControl(),
      userEmail: new FormControl()
    });
  }

  public submitClick(obj) {
    alert('User Name =' + obj.userName);
  }

}
