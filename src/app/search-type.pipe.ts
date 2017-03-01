import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";
@Pipe({
  name: 'searchType',
  pure: false
})
export class SearchTypePipe implements PipeTransform {

  transform(data: any[], searchTerm: string): any[] {
    return _.filter(data, (res) => {
      return res.type.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1;
    });
}
}
