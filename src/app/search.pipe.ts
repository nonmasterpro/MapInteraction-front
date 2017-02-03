import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";
@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(data: any[], searchTerm: string): any[] {
    return _.filter(data, (res) => {
      return res.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1;
    });
}

}
