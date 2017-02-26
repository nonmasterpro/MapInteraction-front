import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class RoutesService {

  constructor(
  	private authHttp: AuthHttp,
		@Inject('AppConfig') private config: any) { }

all() {
  	return new Promise((resolve, reject) => {
  		this.authHttp.get(this.config.apiEndpoints.routes).subscribe((res: any) => {
          if(res.status === 200) {
            let places = JSON.parse(res._body);
            resolve(places);
          } else {
            reject({});
          }
        });
	  });
  }
}
