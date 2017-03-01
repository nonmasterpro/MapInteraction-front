import { Component, OnInit, Input, Inject, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { NgUploaderOptions } from 'ngx-uploader';
import * as _ from "lodash";
import { ImageService } from '../shared/image.service';






@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ManageComponent implements OnInit {
  @Input() options;
  @Input() Troute;
  @Input() Imggg;
  @Input() detail: any;
  formManage: FormGroup;
  p = {
    'value':''
  };
  imgg: any;

  @Output() addEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<any>();
  @Output() changeEvent = new EventEmitter<any>();


  constructor(
    @Inject('AppConfig') 
    private config: any, 
    private route: ActivatedRoute,
    private router: Router,
    private imageService: ImageService

    ) { }

  ngOnInit() {
     
    this.setupForm();
    this.qq = this.Troute;
    
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

  deletePic(id){
    this.imageService.delete(id).then((res) => {
      location.reload();
    }, (error) => {
      console.log(error);
    });
  }

  edit() {
   let objResult = this.getParameters(); 
    this.editEvent.emit({
      'parameters': objResult
    });
  }

  result(){

      _.forEach({ 'a': 1, 'b': 2 }, 
        (value, key) => {
          console.log(key);
        })
  
  }

  getParameters() {

    let objResult = {};
    if(this.options.type==='place'||this.options.type==='station') {
        objResult['user_id'] = [];
      }
    else if(this.options.type==='route') {
        objResult['stations'] = [];
        objResult['places'] = [];

      }
      else if(this.options.type==='course'&& this.options.action==='add') {
        this.route.params.forEach((param: Params) => {
        objResult['userId']  = param['id'];
          })
      }
     _.forEach( this.options.params, (value) => {
       // this.options.params.name = key; 
       // this.options.params.value = value.value; 
          // console.log('key: ' + key + ' | value: ' + value);
           if(value.prop==='routes') {
              objResult[value.prop] = this.qq;
              // objResult[value.prop].push(value.value)
           } 
           else if(value.prop==='qq'){

           }
           else {
              objResult[value.prop] = value.value;

           }
          // console.log(value);
        });
     if(this.uploadFile) {
            objResult['images'] = [this.uploadFile.id];
          }
      // if(this.options.type==='place') {
      //   objResult['routes'] = [];
      // }
     return objResult;
  }
  test(){
    // console.log('aa');
     // this.getimgg(this.Imggg)
      console.log(this.Imggg)
      // console.log(this.imgg)


    console.log(this.getParameters());
  }
  add() {
    let objResult = this.getParameters(); 
    this.addEvent.emit({
      'parameters': objResult
    });
  }
  qq =[];
  yy =[];
  onChange(deviceValue) {
    console.log(deviceValue);
    if(deviceValue !== '') {
     if(this.qq.indexOf(deviceValue)!= -1){
       let s = this.qq.indexOf(deviceValue);
          this.qq.splice(s, 1);
     }
     else{
          this.qq.push(deviceValue);
     }
    }
}
onChange2(deviceValue) {
    console.log(deviceValue);
      this.changeEvent.emit({
      'parameters': deviceValue
    });
}

}
