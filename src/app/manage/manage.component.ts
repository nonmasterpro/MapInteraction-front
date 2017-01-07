import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

	@Input() options;
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
  	console.log( this.formManage.controls['name'] );
  }

}
