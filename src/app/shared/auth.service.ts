import { Injectable, Inject } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private options = new RequestOptions({ headers: this.headers });

	_me: Subject<any> = new Subject();
	obMe: Observable<any>;

	constructor(
		private http: Http,
		private authHttp: AuthHttp,
		@Inject('AppConfig') private config: any
	) {
		this.obMe = this._me.asObservable();
	}

	login(credentials: Object): Promise<any> {
		return this.http.post(
			this.config.apiEndpoints.login,
			credentials,
			this.options
		).toPromise()
			.then((res) => {
				let ob = res.json();
				this.setIdToken(ob.token);
				this.me();
				return ob;
			}).catch(this.handleError);
	}

	me() {
		return this.http.get(
			this.config.apiEndpoints.me + '?token=' + this.getIdToken()
		).toPromise()
			.then((res) => {
				let ob = res.json();
				this._me.next(ob.user);
				return ob;
			}).catch(this.handleError);
	}

	setIdToken(token) {
		window.localStorage.setItem("id_token", token);
	}

	getIdToken() {
		return window.localStorage.getItem("id_token");
	}

	clearIdToken() {
		window.localStorage.removeItem("id_token");
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occured', error);

		return Promise.reject(error.message || error);
	}

    loggedIn() {
        return this.getIdToken() !== null &&  this.getIdToken() !== undefined;
    }

}
