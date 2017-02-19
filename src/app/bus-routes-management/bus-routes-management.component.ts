// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { User } from '../models/user';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-bus-routes-management',
  templateUrl: './bus-routes-management.component.html',
  styleUrls: ['./bus-routes-management.component.scss']
})
export class BusRoutesManagementComponent implements OnInit {
	user : any;
  constructor(
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.obMe.subscribe((user) => {
      this.user = user;
    })
    this.authService.me();
  }

}
