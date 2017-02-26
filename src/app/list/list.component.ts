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
  test : any;
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

  getbr(br){
    let cbr = [];
      for (var i = br.length - 1; i >= 0; i--) {
        cbr.push(br[i].name)
      }
 this.test = cbr.join();
 
 return this.test;
  }
  
  delete(id) {
    let c = confirm("Press a button!");
     if (c == true) {
    this.deleteEvent.emit({
      'id': id
    });}
    else{}
  }
}
