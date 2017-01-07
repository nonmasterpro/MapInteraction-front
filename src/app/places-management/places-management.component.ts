import { Component, OnInit  } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';


@Component({
  selector: 'app-places-management',
  templateUrl: './places-management.component.html',
  styleUrls: ['./places-management.component.scss']
})

export class PlacesManagementComponent implements OnInit {
	types = [
    {value: 't1', viewValue: 'Shop'},
    {value: 't2', viewValue: 'Building'},
    {value: 't3', viewValue: 'Faculty'}
  ];

  constructor() {

  }

  ngOnInit() {
  }

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
 //  options: NgUploaderOptions = {
	//   url: 'http://localhost:10050/upload',
	//   cors: true,
	//   withCredentials: false,
	//   multiple: true,
	//   autoUpload: false,
	//   method: Method;
	//   customHeaders: any;
	//   encodeHeaders: boolean;
	//   authTokenPrefix: string;
	//   fieldName: string;
	//   fieldReset: boolean;
	//   calculateSpeed: boolean;
	//   filterExtensions: boolean;
	//   allowedExtensions: string[];
	// };

	options: NgUploaderOptions = new NgUploaderOptions({
		url: 'http://localhost:10050/upload'
	});

  sizeLimit = 2000000;

  handleUpload(data): void {
  	console.log(data);
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e:any):void {
  	console.log(e);
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }

}
