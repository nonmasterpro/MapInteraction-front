import { Component, OnInit, Input, Pipe, PipeTransform, Output, EventEmitter } from '@angular/core';
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
  number : 1;
  @Output() deleteEvent = new EventEmitter<any>();

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
  
  delete(id) {
    this.deleteEvent.emit({
      'id': id
    });
  }
}
