// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { User } from '../models/user';
import { AuthService } from '../shared/auth.service';
// import $  from "jquery";
import * as _ from "lodash";




@Component({
  selector: 'app-bus-routes-management',
  templateUrl: './bus-routes-management.component.html',
  styleUrls: ['./bus-routes-management.component.scss']
})
export class BusRoutesManagementComponent implements OnInit {
	user : any;
  deviceObjects = [{name: 1}, {name: 2}, {name: 3}];
  selectedDeviceObj = this.deviceObjects[1];
  select = [];
  onChangeObj(newObj) {
    // console.log(newObj);
    this.selectedDeviceObj = newObj;
     if(this.select.indexOf(newObj)){

    this.select.splice(newObj, 1);
     }
     else{
    this.select.push(newObj);
     }
    // console.log(this.select);
    // ... do other stuff here ...
  }

  constructor(
    // private authService: AuthService,


    ) {    }
   
  ngOnInit() {
    // this.authService.obMe.subscribe((user) => {
    //   this.user = user;
    // })
    // this.authService.me();
  }

}
