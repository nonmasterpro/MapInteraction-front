import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  // @Input() users: User[];
  // @Output() liClick = new EventEmitter();

  users: User[] = [ new User('user1', 'pass1'),new User('user2', 'pass2') ];

  constructor() { }

  ngOnInit() {
  }

  onClick(un) {
    console.log('Click');
    // this.liClick.emit({
    //   username: un
    // });
  }

}
