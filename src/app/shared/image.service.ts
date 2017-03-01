import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ImageService {

  constructor(
  		private authHttp: AuthHttp,
		@Inject('AppConfig') private config: any
		) { }
get(id) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(this.config.apiEndpoints.image + '/' + id).subscribe((res: any) => {
      let places = JSON.parse(res._body);
      resolve(places);
        });
    });
  }
   delete(id) {
    return new Promise((resolve, reject) => {
      this.authHttp.delete(this.config.apiEndpoints.image + '/' + id).subscribe((res: any) => {
      let place = JSON.parse(res._body);
      resolve(place);
        });
    });
  }
}
