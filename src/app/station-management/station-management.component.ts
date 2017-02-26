import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { PlaceService } from '../shared/place.service';
import { RoutesService } from '../shared/routes.service';
import { StationService } from '../shared/station.service';

import * as _ from "lodash";


@Component({
  selector: 'app-station-management',
  templateUrl: './station-management.component.html',
  styleUrls: ['./station-management.component.scss']
})
export class StationManagementComponent implements OnInit {
id: number;
    data: any;
    routess : any;
    ww=[];

  options = {
    'title': 'Station',
    'type': 'station',
    'action': 'add',
    'params': [
      {
        'name': 'Name',
        'type': 'text',
        'value': '',
        'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
        'prop': 'name'
      },
      {
        'name': 'Bus Routes',
        'type': 'selection',
        'value': '',
        'control': new FormControl('', []),
        'prop': 'routes',
        'selections': []
      },
      {
        'name': 'X',
        'type': 'text',
        'value': '',
        'prop': 'x',
        'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)])
        // 'control': new FormControl('', [<any>Validators.required, <any>Validators.pattern('^\d+(\.\d{1,2})?$')])
      },
      {
        'name': 'Y',
        'type': 'text',
        'value': '',
        'prop': 'y',
        'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)])
      }
    ]
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService,
    private routesService: RoutesService,
    private stationService: StationService) { }

  ngOnInit() {
  	 this.test();

    if( this.router.url.includes('edit') ) {
          this.test2();
        this.options.action = 'edit'

    } else {
      this.options.action = 'add';
    }
  }
   test2(){
    let ss= [];
    let y = 0;
    this.route.params.forEach((param: Params) => {
        this.id = param['id'];
        this.stationService.get( this.id ).then((res) => {
          this.data = res;
          this.options.params.forEach((p: any) => {
            p.value = this.data[ p.prop ] || '';
          })
          this.data.bus_routes.forEach((p: any) => {
            ss.push(this.data.bus_routes[y].id);
            y++;
          })
        });
        this.ww = ss;
    });
        console.log(ss);

  }

 test(){
         this.routesService.all().then((res) => {
      this.routess = res;
      let selectt = [];
    _.forEach( this.routess, (value) => {
            let objResult = {};

              objResult['name'] = value.id+'. '+value.name;
              objResult['value'] = value.id;
              selectt.push(objResult)


       
        });
    this.options.params[1]['selections']= selectt;

    });
    
  }

  add(e) {
    this.stationService.create(e.parameters).then((res) => {
    this.router.navigate(['station']);
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }
  edit(e) {
    console.log(e.parameters)
    this.id
   this.stationService.update(this.id,e.parameters).then((res) => {
    this.router.navigate(['station']);
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }

}