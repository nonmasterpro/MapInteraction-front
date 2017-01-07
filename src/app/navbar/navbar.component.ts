import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

import { User } from '../models/user';

import { DialogLoginComponent } from '../dialog-login/dialog-login.component';

import { MdDialog, MdDialogRef } from '@angular/material';

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
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.authService.obMe.subscribe((user: User) => {
      this.user = user;
    })

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
  }

}
