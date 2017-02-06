import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
// import { Component, OnInit, Inject } from '@angular/core';
// import { NgUploaderOptions } from 'ngx-uploader';


@Component({
  selector: 'app-places-management',
  templateUrl: './places-management.component.html',
  styleUrls: ['./places-management.component.scss']
})

export class PlacesManagementComponent implements OnInit {
    
    id: number;

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
        'prop': 'username'
      },
      {
        'name': 'Cotact',
        'type': 'text',
        'value': '',
        'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)]),
        'prop': 'email'
      },
      {
        'name': 'Type',
        'type': 'selection',
        'selections': [
          {
            'name': 'Sport',
            'value': 'sport'
          },
          {
            'name': 'Bluiding',
            'value': 'bluiding'
          }
        ]
      },
      {
        'name': 'Website',
        'type': 'text',
        'value': '',
        'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)])
      },
      {
        'name': 'X',
        'type': 'text',
        'value': '',
        'control': new FormControl('', [<any>Validators.required, <any>Validators.minLength(2)])
      },
      {
        'name': 'Y',
        'type': 'text',
        'value': '',
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
    private router: Router
    // @Inject('AppConfig') private config: any
    ) { }

  ngOnInit() {
    if( this.router.url.includes('edit') ) {
      // this.route.params.forEach((param: Params) => {
      //   this.id = param['id'];
      //   this.userService.get( this.id ).then((res) => {
      //     this.data = res;
      //     this.options.params.forEach((p: any) => {
      //       p.value = this.data[ p.prop ] || '';
      //     })
      //   });
        this.options.action = 'edit';
      // });
    } else {
      this.options.action = 'add';
    }
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
