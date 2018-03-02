import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortby'
})
export class SortbyPipe implements PipeTransform {

  transform(value: any, property: string, modifier?: string): any {
    if (value.length < 1 || property === '' || property === undefined) {
      return value;
    }
    if (modifier === 'date') {
      return value.sort((a, b) => {
        if (a[property] < b[property]) {
          return 1;
        } else { return -1; }
      });
    }
    return value.sort( (a, b) => {
      return b[property] - a[property];
    });
    }
}

