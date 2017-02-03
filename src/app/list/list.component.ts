import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() options;
  @Input() details: any;
  formList: FormGroup;


  constructor() { }

  ngOnInit() {

  }

  setSchedule(member) {
  }

  setupForm() {
  	// this.formList = new FormGroup({});
  	// this.options.params.headers.forEach((p) => {
  	// 	if( p.type !== 'text' ) {
  	// 		return;
  	// 	}

  	// this.formList.addControl(p.name, p.control);
  	// });
  }

}
