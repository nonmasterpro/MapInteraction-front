import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { PlaceService } from '../shared/place.service';
import { RoutesService } from '../shared/routes.service';
import * as _ from "lodash";


// import { Component, OnInit, Inject } from '@angular/core';
// import { NgUploaderOptions } from 'ngx-uploader';


@Component({
  selector: 'app-places-management',
  templateUrl: './places-management.component.html',
  styleUrls: ['./places-management.component.scss']
})

export class PlacesManagementComponent implements OnInit {
    
    id: number;
    data: any;
    routess : any;
    ww= [];

  options = {
    'title': 'Place',
    'type': 'place',
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
        'name': 'Description',
        'type': 'text',
        'value': '',
        'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
        'prop': 'description'
      },
      {
        'name': 'Bus Routes',
        'type': 'selection',
        'value': '',
        'control': new FormControl('', [<any>Validators.required]),
        'prop': 'routes',
        'selections': []
      },
      {
        'name': 'Cotact',
        'type': 'text',
        'value': '',
        'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
        'prop': 'contact'
      },
      {
        'name': 'Type',
        'type': 'selection',
        'value': '',
        'control': new FormControl('', [<any>Validators.required]),
        'prop': 'type',
        'selections': [
          {
            'name': 'Building',
            'value': 'building'
          },
          {
            'name': 'Sport Field',
            'value': 'sportField'
          },
          {
            'name': 'Cafe',
            'value': 'cafe'
          },
          {
            'name': 'Restaurant',
            'value': 'restaurant'
          },
          {
            'name': 'Car Parking',
            'value': 'carParking'
          },
          {
            'name': 'Dormitory',
            'value': 'dormitory'
          },
          {
            'name': 'Landmark',
            'value': 'landmark'
          },
          {
            'name': 'ATM',
            'value': 'ATM'
          }
        ]
      },
      {
        'name': 'Website',
        'type': 'text',
        'value': '',
        'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
        'prop': 'website'
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
      },
      {
        'name': 'Picture',
        'type': 'file',
        'value': ''
      }
    ]
  };
	// types = [
 //    {value: 't1', viewValue: 'Shop'},
 //    {value: 't2', viewValue: 'Building'},
 //    {value: 't3', viewValue: 'Faculty'}
 //  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private placeService: PlaceService,
    private routesService: RoutesService

    // @Inject('AppConfig') private config: any
    ) { }

  ngOnInit() {
  this.test();

    if( this.router.url.includes('edit') ) {
    //   this.route.params.forEach((param: Params) => {
    //     this.id = param['id'];
    //     this.placeService.get( this.id ).then((res) => {
    //       this.data = res;
          // console.log(this.data.bus_routes[0].id);
          // this.options.params.forEach((p: any) => {
          //   p.value = this.data[ p.prop ] || '';
          // })

          // this.ww.push(this.data.bus_routes);
        // });
          //         for (var i = this.data.bus_routes.length - 1; i >= 0; i--) {
          //   this.ww.push(this.data.bus_routes[i].id);
          // }
          // console.log(this.ww);
          // this.test2();
          this.test2();
        this.options.action = 'edit'
      // });
    } else {
      this.options.action = 'add';
    }
  }

  test2(){
    let ss= [];
    let y = 0;
    this.route.params.forEach((param: Params) => {
        this.id = param['id'];
        this.placeService.get( this.id ).then((res) => {
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

  //       this.id = param['id'];
  //       this.placeService.get( this.id ).then((res) => {
  //         this.data = res;
  //         // console.log(this.data.bus_routes[0].id);
  //         this.options.params.forEach((p: any) => {
  //           p.value = this.data[ p.prop ] || '';
  //         })

  //         // this.ww.push(this.data.bus_routes);
  //       });
  //      for (var i = this.data.bus_routes.length - 1; i >= 0; i--) {
  //         this.ww.push(this.data.bus_routes[i].id);
  //         }
  //         console.log(this.ww);
  //       this.options.action = 'edit'
          
  // }

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
    this.options.params[2]['selections']= selectt;

    });
    
  }

  add(e) {
    this.placeService.create(e.parameters).then((res) => {
    this.router.navigate(['place']);
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }
  edit(e) {
    console.log(e.parameters)
    this.id
   this.placeService.update(this.id,e.parameters).then((res) => {
    this.router.navigate(['place']);
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }
 //  uploadFile: any;
 //  hasBaseDropZoneOver: boolean = false;
 // //  options: NgUploaderOptions = {
	// //   url: 'http://localhost:10050/upload',
	// //   cors: true,
	// //   withCredentials: false,
	// //   multiple: true,
	// //   autoUpload: false,
	// //   method: Method;
	// //   customHeaders: any;
	// //   encodeHeaders: boolean;
	// //   authTokenPrefix: string;
	// //   fieldName: string;
	// //   fieldReset: boolean;
	// //   calculateSpeed: boolean;
	// //   filterExtensions: boolean;
	// //   allowedExtensions: string[];
	// // };

	// options: NgUploaderOptions = new NgUploaderOptions({
	// 	url: this.config.apiEndpoints.uploadImage
	// });

 //  sizeLimit = 2000000;

 //  handleUpload(data): void {
 //  	console.log(data);
 //    if (data && data.response) {
 //      data = JSON.parse(data.response);
 //      console.log(data);
 //      this.uploadFile = data;
 //    }
 //  }

 //  fileOverBase(e:any):void {
 //  	console.log(e);
 //    this.hasBaseDropZoneOver = e;
 //  }

 //  beforeUpload(uploadingFile): void {
 //    if (uploadingFile.size > this.sizeLimit) {
 //      uploadingFile.setAbort();
 //      alert('File is too large');
 //    }
 //  }

}
