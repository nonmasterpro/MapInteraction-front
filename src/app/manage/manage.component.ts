import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

	@Input() options;
  @Input() detail: any;
	formManage: FormGroup;

  constructor() { }

  ngOnInit() {
  	this.setupForm();
  }

  setupForm() {
  	this.formManage = new FormGroup({});
  	this.options.params.forEach((p) => {
  		if( p.type !== 'text' ) {
  			return;
  		}

  		this.formManage.addControl(p.name, p.control);
  	});
  }

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  picture: NgUploaderOptions = new NgUploaderOptions({
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
