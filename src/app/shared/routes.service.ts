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
  delete(id) {
    return new Promise((resolve, reject) => {
      this.authHttp.delete(this.config.apiEndpoints.routes + '/' + id).subscribe((res: any) => {
      let place = JSON.parse(res._body);
      resolve(place);
        });
    });
  }

get(id) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(this.config.apiEndpoints.routes + '/' + id).subscribe((res: any) => {
      let user = JSON.parse(res._body);
      resolve(user);
        });
    });
  }
create(routes) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(this.config.apiEndpoints.routes, routes).subscribe((res: any) => {
        console.log(res);
          if(res.status === 200) {
            let user = JSON.parse(res._body);
            resolve(user);
          } else {
            reject({
              'text': 'message'
            });
          }
      });
    });
  }

update(id, routes) {
    return new Promise((resolve, reject) => {
      this.authHttp.put(this.config.apiEndpoints.routes + '/' + id, routes).subscribe((res: any) => {
        console.log(res);
          if(res.status === 200) {
            let user = JSON.parse(res._body);
            resolve(user);
          } else {
            reject({
              'text': 'message'
            });
          }
      });
    });
  }






}
