import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-management',
  templateUrl: './schedule-management.component.html',
  styleUrls: ['./schedule-management.component.scss']
})
export class ScheduleManagementComponent implements OnInit {

  data: any;
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
    'tiles': [
      { text: 'One', cols: 1, rows: 2, color: 'lightblue' },
      { text: 'Two', cols: 3, rows: 2, color: 'lightgreen' }
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
          'name': 'member1'
        },
        {
          'name': 'member2'
        },
        {
          'name': 'member3'
        },
        {
          'name': 'member4'
        },
        {
          'name': 'member5'
        },
        {
          'name': 'member6'
        },
        {
          'name': 'member7'
        },
        {
          'name': 'member8'
        },
        {
          'name': 'member9'
        },
        {
          'name': 'member10'
        }
      ]
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
