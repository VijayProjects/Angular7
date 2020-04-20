import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDircustome]'
})
export class DircustomeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
    renderer.setStyle(el.nativeElement, 'color', 'red');

  }
}
