// import { Component, OnInit } from '@angular/core';
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { User } from '../models/user';
// import { AuthService } from '../shared/auth.service';
// import $  from "jquery";
// import * as _ from "lodash";

import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { RoutesService } from '../shared/routes.service';


@Component({
  selector: 'app-bus-routes-management',
  templateUrl: './bus-routes-management.component.html',
  styleUrls: ['./bus-routes-management.component.scss']
})
export class BusRoutesManagementComponent implements OnInit {
	// user : any;
 //  deviceObjects = [{name: 1}, {name: 2}, {name: 3}];
 //  selectedDeviceObj = this.deviceObjects[1];
 //  select = [];
 //  onChangeObj(newObj) {
    // console.log(newObj);
    // this.selectedDeviceObj = newObj;
    //  if(this.select.indexOf(newObj)){

    // this.select.splice(newObj, 1);
    //  }
    //  else{
    // this.select.push(newObj);
    //  }
    // console.log(this.select);
    // ... do other stuff here ...
  // }
  data: any;
  id: number;
  options = {
    'title': 'Route',
    'type': 'route',
    'action': 'add',
    'params': [
      {
        'name': 'Name',
        'type': 'text',
        'value': '',
        'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
        'prop': 'name'
        }
          ]}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routesService: RoutesService
    // private authService: AuthService,

    ) {    }
   
  ngOnInit() {
    if( this.router.url.includes('edit') ) {
      this.route.params.forEach((param: Params) => {
        this.id = param['id'];
        this.routesService.get( this.id ).then((res) => {
          this.data = res;
          this.options.params.forEach((p: any) => {
            p.value = this.data[ p.prop ] || '';
          })
        });
        this.options.action = 'edit'
      });
    } else {
      this.options.action = 'add';
    }
  }
  edit(e) {
    this.id
     this.routesService.update(this.id,e.parameters).then((res) => {
      this.router.navigate(['route']);
    }, (error) => {
      console.log(error);
    });
    
  }

  add(e) {
    this.routesService.create(e.parameters).then((res) => {
    this.router.navigate(['route']);
    }, (error) => {
      console.log(error);
    });
  }

}
