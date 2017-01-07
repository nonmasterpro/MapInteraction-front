import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { MdDialogRef } from '@angular/material';

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
    private dialogRef: MdDialogRef<any>
    ) { }

  ngOnInit() {}

  login() {
    this.authService.login(this.credentials).then(res => {
      this.dialogRef.close();
      alert( 'เข้าระบบสำเร็จ' );
    }).catch(res => {
      let error = JSON.parse( res._body ).error;
      alert( error );
    });
  }

}
