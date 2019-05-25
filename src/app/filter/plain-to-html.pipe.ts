import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plainToHtml'
})
export class PlainToHtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'mahesh kale';
  }

}
