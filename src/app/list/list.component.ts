import { Component, OnInit, Input,Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { KeysPipe } from '../keys.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() options;
  formList: FormGroup;

  constructor() { }

  ngOnInit() {
  	this.setupForm();
  }

  setupForm() {
  	this.formList = new FormGroup({});
  	this.options.params.headers.forEach((p) => {
  		if( p.type !== 'text' ) {
  			return;
  		}

  	this.formList.addControl(p.name, p.control);
  	});
  }

}
