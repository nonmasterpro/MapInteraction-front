import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  // @Input() users: User[];
  // @Output() liClick = new EventEmitter();
  user: User;

  constructor(
    private authService: AuthService
    ) {}

  ngOnInit() {
    this.authService.obMe.subscribe((user: User) => {
      this.user = user;
    })
  }

  onClick(un) {
    console.log('Click');
    // this.liClick.emit({
    //   username: un
    // });
  }


}


