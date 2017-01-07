import { Component, OnInit } from '@angular/core';

import { DialogLoginComponent} from '../dialog-login/dialog-login.component';

import { MdDialog,MdDialogRef } from '@angular/material';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dialogRef: MdDialogRef<DialogLoginComponent>; 
 
  constructor(public dialog: MdDialog) {}

  ngOnInit() {
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
}
