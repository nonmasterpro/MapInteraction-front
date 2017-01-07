import { Injectable, Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

	private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
  	private http: Http,
  	@Inject('AppConfig') private config: any
  	) { }

  login(credentials: Object): Promise<any> {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ headers: headers });
  	// return this.http.get(
  	// 	this.config.apiEndpoints.login + '?email=karjkeng@hotmail.com&password=karjkeng'
  	// 	).toPromise()
  	// 	.then((res) => {
  	// 		console.log(res);
  	// 	}).catch(this.handleError);
  	return this.http.post(
  		this.config.apiEndpoints.test,
  		credentials,
  		options
  		).toPromise()
  		.then((res) => {
  			console.log(res);
  		}).catch(this.handleError);
  	// return this.http.post(
  	// 	this.config.apiEndpoints.login,
  	// 	credentials, this.headers)
  	// 	.toPromise()
  	// 	.then(res => {
  	// 		console.log( res );
  	// 	}).catch(this.handleError);
  }

   setIdToken(token) {
        window.localStorage.setItem("id_token", token);
    }

    clearIdToken() {
        window.localStorage.removeItem("id_token");
    }

  private handleError(error: any): Promise<any> {
  	console.error('An error occured', error);

  	return Promise.reject(error.message || error);
  }


}
