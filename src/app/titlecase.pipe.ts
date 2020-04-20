import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
  public newWord = '';
  transform(value: any, ...args: any[]): any {
    const splitValue = value.split(' ');
    splitValue.forEach(element => {
      const firstChar = element.charAt(0).toUpperCase();
      const restChars = element.substring(1).toLowerCase();
      this.newWord += firstChar + '' + restChars + ' ';
    });
    return this.newWord;
  }

}
