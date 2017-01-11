import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { MdDialogRef } from '@angular/material';

import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.scss']
})
export class DialogLoginComponent implements OnInit {

  credentials = {
    'email': '',
    'password': ''
  };

  constructor(
    private authService: AuthService,
    private dialogRef: MdDialogRef<any>,
    private _notificationsService: NotificationsService
    ) { }

  ngOnInit() {}

  login() {
    this.authService.login(this.credentials).then(res => {
      this.dialogRef.close();
      this._notificationsService.success(
		    'Welcome',
		    'Login success!',
		    {
		        timeOut: 3000,
		        showProgressBar: true,
		        pauseOnHover: false,
		        clickToClose: false,
		        maxLength: 100
		    }
		);

    }).catch(res => {
      let error = {};
      if( typeof res._body !==  'object' ) {
        error = JSON.parse( res._body );
      }
      
      this._notificationsService.error(
		    'Error',
		    'Login failed!',
		    {
		        timeOut: 3000,
		        showProgressBar: true,
		        pauseOnHover: true,
		        clickToClose: true,
		        maxLength: 100
		    }
		);

    });
  }

}
