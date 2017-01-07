import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { MdDialog,MdDialogRef } from '@angular/material';
import { DialogLoginComponent} from '../dialog-login/dialog-login.component'

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  // @Input() users: User[];
  // @Output() liClick = new EventEmitter();

  dialogRef: MdDialogRef<DialogLoginComponent>; 
  users: User[] = [ new User('user1', 'pass1'),new User('user2', 'pass2') ];

  constructor(public dialog: MdDialog) {}

  ngOnInit() {
  }

  onClick(un) {
    console.log('Click');
    // this.liClick.emit({
    //   username: un
    // });
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


