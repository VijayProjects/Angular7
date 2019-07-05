import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
// inline Data [Property and Data] Binding
export class RegisterComponent {
  public Id;
  public Name;
  public Price;
  public IsInStoke;
  public City;
}
