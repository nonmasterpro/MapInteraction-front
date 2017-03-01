import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";
@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(data: any[], searchTerm: string, SearchType: string): any[] {
	    let Tempdata: any[];
	    if (SearchType){
	    	Tempdata = _.filter(data, (res) => {
	      		return res.type.toUpperCase().indexOf(SearchType.toUpperCase()) !== -1;
	    	});
	    	return  _.filter(Tempdata, (res) => {
	    		return res.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1;
	    	});
		} else {
			return  _.filter(data, (res) => {
	    		return res.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1;
	    	});
		}


	}

    
    

}
