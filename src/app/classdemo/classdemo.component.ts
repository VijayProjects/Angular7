import { Component } from '@angular/core';

@Component({
  selector: 'app-classdemo',
  templateUrl: './classdemo.component.html',
  styleUrls: ['./classdemo.component.css']
})
export class ClassdemoComponent {
  public isEffects = true; // if it is 'false' no effects will come
  public isText;
  public isBack;
  public isBorder;
  public applyEffects;
}
