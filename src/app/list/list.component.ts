import { Component, OnInit, Input, Pipe, PipeTransform, Output, EventEmitter, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';




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
  typess = {'selections': [
            {
              'name': 'Select Filter',
              'value': ''
            },
            {
              'name': 'Building',
              'value': 'building'
            },
            {
              'name': 'Sport Field',
              'value': 'sportField'
            },
            {
              'name': 'Cafe',
              'value': 'cafe'
            },
            {
              'name': 'Restaurant',
              'value': 'restaurant'
            },
            {
              'name': 'Car Parking',
              'value': 'carParking'
            },
            {
              'name': 'Dormitory',
              'value': 'dormitory'
            },
            {
              'name': 'Landmark',
              'value': 'landmark'
            },
            {
              'name': 'ATM',
              'value': 'ATM'
            }
          ]
        }
  constructor(
    ) { }

  @ViewChild('input') input: ElementRef;

  search: string = '';
  searchType: string = '';

  ngOnInit() {
    let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
    eventObservable.subscribe();
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
