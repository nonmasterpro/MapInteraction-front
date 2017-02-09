import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class UserService {

  constructor(
		private authHttp: AuthHttp,
		@Inject('AppConfig') private config: any
	) { }

  get(id) {
  	return new Promise((resolve, reject) => {
  		this.authHttp.get(this.config.apiEndpoints.users + '/' + id).subscribe((res: any) => {
			let user = JSON.parse(res._body);
			resolve(user);
        });
	  });
  }

  all() {
  	return new Promise((resolve, reject) => {
  		this.authHttp.get(this.config.apiEndpoints.users).subscribe((res: any) => {
          if(res.status === 200) {
            let users = JSON.parse(res._body);
            resolve(users);
          } else {
            reject({});
          }
        });
	  });
  }

  create(user) {
    return new Promise((resolve, reject) => {
      this.authHttp.post(this.config.apiEndpoints.users, user).subscribe((res: any) => {
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
