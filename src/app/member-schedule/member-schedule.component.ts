import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SearchPipe } from '.././search.pipe';
import { Observable } from 'rxjs/Observable';
import * as _ from "lodash";
import 'rxjs/Rx';
@Component({
  selector: 'app-member-schedule',
  templateUrl: './member-schedule.component.html',
  styleUrls: ['./member-schedule.component.scss']
})
export class MemberScheduleComponent implements OnInit {

  options = {
    'showSchedule': true,
    'title': 'Schedule',
    'action': 'schedule',
    'breadcrumb': [
      {
        'name': 'Home',
        'link': '/'
      }, {
        'name': 'Manage Schedule',
        'link': '/schedule'
      }
    ],

    'params':
    {
      'headers': [
        {
          'prop': 'subject',
          'type': 'text',
          'name': 'Subject',
          'maxWidth': '250'
        },
        {
          'prop': 'time',
          'type': 'text',
          'name': 'Time'
        },
        {
          'prop': 'place',
          'type': 'text',
          'name': 'Place'
        }
      ],
      'members': [
        {
          'id': '1',
          'name': 'member1',
          'subjects': [
            { 'name': 'subject1' },
            { 'name': 'subject2' },
            { 'name': 'subject3' }
          ]
        },
        {
          'id': '2',
          'name': 'shine'
        },
        {
          'id': '3',
          'name': 'kim'
        },
        {
          'id': '4',
          'name': 'non'
        },
        {
          'id': '5',
          'name': 'que'
        },
        {
          'id': '6',
          'name': 'karj'
        },
        {
          'id': '7',
          'name': 'member7'
        },
        {
          'id': '8',
          'name': 'member8'
        },
        {
          'id': '9',
          'name': 'member9'
        },
        {
          'id': '10',
          'name': 'member10'
        }
      ]
    }
  };

  member: any;
  @ViewChild('input')
  input: ElementRef;

  search: string = '';

  constructor() {
  }
  ngOnInit() {
    if (this.options.params.members[0]) {
      this.member = this.options.params.members[0];
    }

    let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
    eventObservable.subscribe();

  }
  setSchedule(member) {
    this.member = member;
  }
  searchMember(members){
    var a = _.map(members,(member) => {
      console.log(member);
    });
  }

}
