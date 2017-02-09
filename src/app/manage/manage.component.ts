import { Component, OnInit, Input, Inject, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgUploaderOptions } from 'ngx-uploader';
import * as _ from "lodash";



@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManageComponent implements OnInit {

	@Input() options;
  @Input() detail: any;
	formManage: FormGroup;
  p = {
    'value':''
  };
  


  @Output() addEvent = new EventEmitter<any>();

  constructor(@Inject('AppConfig') private config: any) { }

  ngOnInit() {
  	this.setupForm();
  }

  setupForm() {
  	this.formManage = new FormGroup({});
  	this.options.params.forEach((p) => {
  		if( p.type === 'file' ) {
  			return;
  		}

  		this.formManage.addControl(p.name, p.control);
  	});
  }


  // Use to create uploadfile
  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  picture: NgUploaderOptions = new NgUploaderOptions({
    url: this.config.apiEndpoints.uploadImage
  });
  sizeLimit = 2000000;

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
      console.log(this.uploadFile);
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

  edit() {
   console.log("Aaaaa");
    console.log(this.p);
  }

  result(){

      _.forEach({ 'a': 1, 'b': 2 }, 
        (value, key) => {
          console.log(key);
        })
  
  }

  getParameters() {

    let objResult = {};
     _.forEach( this.options.params, (value) => {
       // this.options.params.name = key; 
       // this.options.params.value = value.value; 
          // console.log('key: ' + key + ' | value: ' + value);
          objResult[value.prop] = value.value;
          // console.log(value);
        });
     return objResult;
  }

  add() {
    let objResult = this.getParameters(); 
    this.addEvent.emit({
      'parameters': objResult
    });
  }

}
