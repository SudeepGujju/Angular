import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(DOB: any, args?: any): any {

    var age = Date.parse(DOB);
    var CurDate = Date.parse(new Date().toString());

    return Math.floor((CurDate - age) / ( 24 * 60 * 60 * 1000 * 365));
  }

}
