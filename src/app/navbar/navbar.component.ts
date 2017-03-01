import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

import { User } from '../models/user';

import { DialogLoginComponent } from '../dialog-login/dialog-login.component';

import { MdDialog, MdDialogRef } from '@angular/material';

import { NotificationsService } from 'angular2-notifications';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dialogRef: MdDialogRef<DialogLoginComponent>;

  user: User;
  constructor(
    public dialog: MdDialog,
    private authService: AuthService,
    private _notificationsService: NotificationsService,
    private userService: UserService

  ) { }

  ngOnInit() {

    this.authService.obMe.subscribe((user: User) => {
      this.user = user;
      console.log(this.user);
     
    });

  }

  openDialog() {
    this.dialogRef = this.dialog.open(DialogLoginComponent, {
      disableClose: false,
      width: '450px'
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

  logout() {
    this.authService.logout();
    this._notificationsService.success(
        'Good bye!',
        'Logout success!',
        {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 100
        }
    );
  }

}
